import {dateOnly,dateIso} from '../components/calculators/roadmap-next10-oct12';
export type BirthdayOptions={start:string;end:string;reference:string;count:number;unique:boolean;sorted:boolean;format:'iso'|'us'|'uk'};
export type BirthdayRow={iso:string;display:string;age:number|null};
export function randomIndex(span:number,random32:()=>number){
 const limit=Math.floor(4294967296/span)*span;
 for(let i=0;i<128;i++){const x=random32();if(!Number.isInteger(x)||x<0||x>=4294967296)throw Error('The random source returned an invalid value.');if(x<limit)return x%span;}throw Error('Random source failed; try generating again.');
}
export function generateBirthdays(options:BirthdayOptions,random32:()=>number):BirthdayRow[]{
 const start=dateOnly(options.start),end=dateOnly(options.end),ref=dateOnly(options.reference),span=Math.round((+end-+start)/86400000)+1;
 if(span<1)throw Error('The last date must be on or after the first date.');
 if(!Number.isInteger(options.count)||options.count<1||options.count>200)throw Error('Generate 1–200 birthdays at a time.');
 if(options.unique&&options.count>span)throw Error('There are fewer eligible dates than the requested unique birthdays.');
 if(!['iso','us','uk'].includes(options.format))throw Error('Choose a supported date format.');
 const swaps=new Map<number,number>();const dates:number[]=[];
 for(let i=0;i<options.count;i++){
  const index=randomIndex(options.unique?span-i:span,random32);
  const picked=options.unique?(swaps.get(index)??index):index;
  if(options.unique){const last=span-i-1;swaps.set(index,swaps.get(last)??last);swaps.delete(last);}
  dates.push(+start+picked*86400000);
 }
 if(options.sorted)dates.sort((a,b)=>a-b);
 return dates.map(time=>{const d=new Date(time),iso=dateIso(d),[year,month,day]=iso.split('-');let age=ref.getUTCFullYear()-d.getUTCFullYear();if(ref.getUTCMonth()<d.getUTCMonth()||(ref.getUTCMonth()===d.getUTCMonth()&&ref.getUTCDate()<d.getUTCDate()))age--;return{iso,display:options.format==='us'?`${month}/${day}/${year}`:options.format==='uk'?`${day}/${month}/${year}`:iso,age:+ref<time?null:age};});
}
export const birthdayCsv=(rows:BirthdayRow[],reference:string)=>'date_of_birth,display_date,completed_years,reference_date\n'+rows.map(r=>[r.iso,r.display,r.age??'',reference].join(',')).join('\n')+'\n';
