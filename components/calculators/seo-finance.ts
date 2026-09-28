import { numberValue as n } from "./helpers";
import type { CalculatorResolver } from "./types";

const payment = (principal: number, annualRate: number, months: number) => {
  const count = Math.max(1, Math.round(months));
  const rate = annualRate / 1200;
  return rate ? principal * rate * Math.pow(1 + rate, count) / (Math.pow(1 + rate, count) - 1) : principal / count;
};

const balanceAfter = (principal: number, annualRate: number, totalMonths: number, paidMonths: number) => {
  const monthly = payment(principal, annualRate, totalMonths);
  const rate = annualRate / 1200;
  if (!rate) return Math.max(0, principal - monthly * paidMonths);
  return Math.max(0, principal * Math.pow(1 + rate, paidMonths) - monthly * (Math.pow(1 + rate, paidMonths) - 1) / rate);
};

export const resolveSeoFinance: CalculatorResolver = ({ slug, a, b, c, d, e, cash }) => {
  if (slug === "real-estate-lawyer-cost-calculator") {
    const hourly = n(b) * n(c), total = n(a) + hourly + n(d) + n(e);
    return { labels: ["Flat legal fee", "Hourly rate", "Billable hours", "Closing or review fee", "Other legal costs"], suffix: ["currency", "currency/hour", "hours", "currency", "currency"], calculate: () => [
      { label: "Estimated total legal cost", value: cash(total), note: "Before taxes or unentered disbursements" },
      { label: "Hourly work subtotal", value: cash(hourly) },
      { label: "Flat and additional costs", value: cash(n(a) + n(d) + n(e)) },
    ] };
  }
  if (slug === "car-lease-vs-buy-calculator") {
    const lease = n(a) + n(b) * 36, buy = n(c) + n(d) * 36 - n(e), difference = lease - buy;
    return { labels: ["Lease amount due upfront", "Monthly lease payment", "Buy amount due upfront", "Monthly finance payment", "Estimated vehicle value after 36 months"], suffix: ["currency", "currency/month", "currency", "currency/month", "currency"], calculate: () => [
      { label: difference > 0 ? "Buying has the lower estimated net cost" : "Leasing has the lower estimated net cost", value: cash(Math.abs(difference)), note: "36-month comparison before unentered tax, insurance, mileage and maintenance" },
      { label: "Estimated 36-month lease cost", value: cash(lease) },
      { label: "Estimated 36-month buy net cost", value: cash(buy) },
    ] };
  }
  if (slug === "seller-net-sheet-calculator") {
    const commission = n(a) * n(c) / 100, costs = commission + n(b) + n(d) + n(e), net = n(a) - costs;
    return { labels: ["Expected sale price", "Mortgage and lien payoff", "Agent commission", "Closing costs", "Seller credits and other deductions"], suffix: ["currency", "currency", "%", "currency", "currency"], calculate: () => [
      { label: "Estimated seller net proceeds", value: cash(net), note: "Planning estimate before final prorations and payoff changes" },
      { label: "Estimated commission", value: cash(commission) },
      { label: "Total estimated deductions", value: cash(costs) },
    ] };
  }
  if (slug === "seller-financing-calculator") {
    const financed = Math.max(0, n(a) - n(b)), months = Math.max(1, n(d) * 12), monthly = payment(financed, n(c), months), paid = Math.min(months, Math.max(0, n(e) * 12)), balloon = balanceAfter(financed, n(c), months, paid);
    return { labels: ["Property price", "Buyer down payment", "Annual interest rate", "Amortization term", "Balloon due after"], suffix: ["currency", "currency", "%", "years", "years"], calculate: () => [
      { label: "Estimated monthly payment", value: cash(monthly), note: "Principal and interest only" },
      { label: "Estimated balloon balance", value: cash(balloon) },
      { label: "Amount initially financed", value: cash(financed) },
    ] };
  }
  if (slug === "mortgage-buydown-calculator") {
    const principal = n(a), months = Math.max(1, n(d) * 12), original = payment(principal, n(b), months), reduced = payment(principal, n(c), months), saving = Math.max(0, original - reduced), pointCost = principal * n(e) / 100;
    return { labels: ["Mortgage amount", "Original annual rate", "Bought-down annual rate", "Loan term", "Points paid"], suffix: ["currency", "%", "%", "years", "% of loan"], calculate: () => [
      { label: "Estimated monthly payment saving", value: cash(saving), note: "Principal and interest only" },
      { label: "Estimated point cost", value: cash(pointCost) },
      { label: "Simple break-even time", value: saving > 0 ? `${Math.ceil(pointCost / saving)} months` : "No payment saving" },
    ] };
  }
  if (slug === "first-lien-heloc-calculator") {
    const balance = n(a), interestOnly = balance * n(b) / 1200, repay = payment(balance, n(b), Math.max(1, n(d) * 12));
    return { labels: ["Current HELOC balance", "Current annual rate", "Monthly fees", "Repayment term", "Unused"], suffix: ["currency", "%", "currency/month", "years", ""], calculate: () => [
      { label: "Estimated interest-only payment", value: cash(interestOnly + n(c)), note: "Variable-rate estimate including entered monthly fees" },
      { label: "Estimated repayment payment", value: cash(repay + n(c)) },
      { label: "First-year interest at current rate", value: cash(interestOnly * 12) },
    ] };
  }
  return null;
};
