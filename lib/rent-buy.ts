import {inputNumber} from '../components/calculators/roadmap-next10-oct12';
export const rentBuyFields=[
 ['price','Home purchase price','400000'],['down','Down payment (%)','20'],['rate','Mortgage nominal annual rate (%)','6'],['term','Mortgage term (whole years)','30'],['stay','Comparison horizon (whole years)','5'],['buyFee','Buying costs (% of purchase price)','3'],['sellFee','Selling costs (% of sale price)','6'],['homeGrowth','Annual home value change (%)','3'],['rent','Starting monthly rent','2000'],['rentGrowth','Annual rent change (%)','3'],['ownerCosts','First-year other ownership costs','6000'],['ownerGrowth','Annual change in other ownership costs (%)','3'],['renterCosts','Annual renter insurance / other costs','240'],['returnRate','Net effective annual alternative return (%)','4'],['deposit','Refundable rental deposit','2000'],['rentFees','Nonrefundable rental upfront fees','0'],
] as const;
export type RentBuyInput=Record<typeof rentBuyFields[number][0],string>;
export type RentBuyYear={year:number;homeValue:number;loanBalance:number;buyCash:number;rentCash:number;buyCost:number;rentCost:number;difference:number};
export type RentBuyResult={payment:number;upfrontBuy:number;upfrontRent:number;years:RentBuyYear[]};
export function rentBuy(input:RentBuyInput):RentBuyResult{
 const n=(key:keyof RentBuyInput,min=0,max=1e12)=>inputNumber(input[key],key,min,max);
 const price=n('price',1),down=n('down',0,100)/100,rate=n('rate',0,50)/1200,term=n('term',1,50),stay=n('stay',1,50);
 if(!Number.isInteger(term)||!Number.isInteger(stay))throw Error('Mortgage term and comparison horizon must be whole years.');
 const buyFee=n('buyFee',0,100)/100,sellFee=n('sellFee',0,100)/100,homeGrowth=n('homeGrowth',-50,50)/100,rentGrowth=n('rentGrowth',-50,50)/100,ownerGrowth=n('ownerGrowth',-50,50)/100;
 const rent=n('rent'),other=n('ownerCosts'),renterOther=n('renterCosts'),annualReturn=n('returnRate',-50,50)/100,monthlyReturn=Math.pow(1+annualReturn,1/12)-1,deposit=n('deposit'),fees=n('rentFees');
 const principal=price*(1-down),months=term*12,payment=principal===0?0:rate===0?principal/months:principal*rate/(1-Math.pow(1+rate,-months));
 const upfrontBuy=price*(down+buyFee),upfrontRent=deposit+fees;let balance=principal,buyFV=upfrontBuy,rentFV=upfrontRent,buyCash=upfrontBuy,rentCash=upfrontRent;const years:RentBuyYear[]=[];
 for(let m=1;m<=stay*12;m++){
  const year=Math.floor((m-1)/12),interest=balance*rate,pay=m<=months?Math.min(payment,balance+interest):0;
  balance=Math.max(0,balance+interest-pay);
  const owner=pay+other*Math.pow(1+ownerGrowth,year)/12,renter=rent*Math.pow(1+rentGrowth,year)+renterOther/12;
  buyFV=buyFV*(1+monthlyReturn)+owner;rentFV=rentFV*(1+monthlyReturn)+renter;buyCash+=owner;rentCash+=renter;
  if(m%12===0){const y=m/12,homeValue=price*Math.pow(1+homeGrowth,y),saleProceeds=homeValue*(1-sellFee)-balance,buyCost=buyFV-saleProceeds,rentCost=rentFV-deposit;const values=[homeValue,balance,buyCash,rentCash,buyCost,rentCost];if(values.some(v=>!Number.isFinite(v)||Math.abs(v)>1e15))throw Error('This scenario exceeds the supported numerical range.');years.push({year:y,homeValue,loanBalance:balance,buyCash,rentCash,buyCost,rentCost,difference:buyCost-rentCost});}
 }
 return{payment,upfrontBuy,upfrontRent,years};
}
export function rentBuyCsv(result:RentBuyResult){return'year,home_value,remaining_loan,buy_cash_outflow,rent_cash_outflow,buy_future_value_net_cost,rent_future_value_net_cost,buy_minus_rent\n'+result.years.map(y=>[y.year,y.homeValue,y.loanBalance,y.buyCash,y.rentCash,y.buyCost,y.rentCost,y.difference].join(',')).join('\n')+'\n';}
