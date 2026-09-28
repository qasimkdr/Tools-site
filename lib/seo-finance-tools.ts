import type { Tool } from "@/lib/tools";

type Seed = Pick<Tool, "slug" | "title" | "shortTitle" | "description" | "formula" | "example"> & {
  icon: string;
  focus: string;
  keywords: string[];
};

const seeds: Seed[] = [
  {
    slug: "real-estate-lawyer-cost-calculator",
    title: "Real Estate Lawyer Cost Calculator",
    shortTitle: "Lawyer Cost",
    description: "Estimate real estate lawyer fees from a flat fee, hourly work, closing support and additional legal costs.",
    icon: "⚖️",
    keywords: ["real estate lawyer cost", "real estate lawyer fees", "real estate attorney fees", "how much does a real estate lawyer cost"],
    formula: "Estimated legal cost = flat fee + hourly rate × billable hours + closing fee + other entered costs.",
    example: "A 1,200 flat fee, four hours at 250, a 500 closing fee and 200 of other costs produce an estimated total of 2,900.",
    focus: "jurisdiction, transaction complexity, title issues, negotiation, billing method, taxes and disbursements",
  },
  {
    slug: "car-lease-vs-buy-calculator",
    title: "Car Lease vs Buy Calculator",
    shortTitle: "Lease vs Buy",
    description: "Compare the estimated net cost of leasing a car with buying and financing the same vehicle over one time horizon.",
    icon: "🚗",
    keywords: ["lease vs buy car calculator", "car lease vs buy calculator", "should I lease or buy a car", "leasing vs financing a car"],
    formula: "Lease cost = upfront lease cost + monthly payments + fees. Buy net cost = down payment + loan payments + fees − estimated vehicle value.",
    example: "Compare a 36-month lease with 3,000 due and 450 monthly against a financed purchase using the expected resale value after 36 months.",
    focus: "mileage, wear charges, residual value, taxes, insurance, financing rate, maintenance and how long the vehicle is kept",
  },
  {
    slug: "seller-net-sheet-calculator",
    title: "Seller Net Sheet Calculator",
    shortTitle: "Seller Net Sheet",
    description: "Estimate a property seller's net proceeds after mortgage payoff, commission, closing costs, credits and other deductions.",
    icon: "🏠",
    keywords: ["seller net sheet calculator", "net sheet for sellers", "sellers net sheet", "home sale net proceeds calculator"],
    formula: "Estimated net proceeds = sale price − mortgage payoff − commission − closing costs − seller credits and other deductions.",
    example: "A 400,000 sale with a 220,000 payoff, 5% commission, 8,000 closing costs and 3,000 credits produces estimated net proceeds of 149,000.",
    focus: "payoff statements, commission agreements, transfer taxes, concessions, repairs, prorations, liens and local closing practice",
  },
  {
    slug: "seller-financing-calculator",
    title: "Seller Financing Calculator",
    shortTitle: "Seller Financing",
    description: "Calculate a seller-financed property's payment, balloon balance, total interest and cash received from buyer terms.",
    icon: "🤝",
    keywords: ["seller financing calculator", "owner financing calculator", "seller financed mortgage calculator", "seller carryback calculator"],
    formula: "Monthly payment uses the amortizing-loan formula on the financed balance; the balloon is the remaining principal after the selected payment count.",
    example: "Finance 180,000 at 7% over 20 years with a balloon after five years to compare the monthly payment and remaining lump sum.",
    focus: "down payment, interest rate, amortization, balloon date, servicing, default remedies, taxes, title and local law",
  },
  {
    slug: "mortgage-buydown-calculator",
    title: "Mortgage Rate Buydown Calculator",
    shortTitle: "Rate Buydown",
    description: "Compare mortgage payments and estimated savings from discount points or a temporary interest-rate buydown.",
    icon: "📉",
    keywords: ["rate buydown calculator", "buydown calculator", "mortgage points calculator", "mortgage rate buydown calculator"],
    formula: "Point cost = loan amount × points percentage. Monthly savings equals the original payment minus the payment at the bought-down rate; break-even months = cost ÷ savings.",
    example: "On a 300,000 loan, one point costs 3,000. Compare that cost with the monthly payment reduction to estimate the break-even date.",
    focus: "lender pricing, permanent versus temporary terms, closing horizon, refinance risk, taxes, fees and payment timing",
  },
  {
    slug: "first-lien-heloc-calculator",
    title: "First-Lien HELOC Calculator",
    shortTitle: "First-Lien HELOC",
    description: "Estimate interest-only and repayment payments for a first-lien home equity line using user-entered balances and rates.",
    icon: "🏡",
    keywords: ["first lien HELOC calculator", "first position HELOC calculator", "HELOC payment calculator", "home equity line payment calculator"],
    formula: "Interest-only payment = balance × annual rate ÷ 12. Repayment payment amortizes the entered balance over the selected repayment term.",
    example: "A 100,000 balance at 8% has an initial interest-only estimate near 667 monthly before fees; repayment payments are higher because principal is included.",
    focus: "variable rates, draw and repayment periods, minimum-payment rules, fees, property risk, lender terms and local law",
  },
];

const faqs = (tool: Seed) => [
  { question: `Is this ${tool.shortTitle.toLowerCase()} calculator free?`, answer: "Yes. It is free, requires no account and performs the calculation in your browser." },
  { question: "Can I use any currency?", answer: "Yes. Use one currency consistently. The calculator does not convert currencies or infer a country." },
  { question: "Are my financial details uploaded?", answer: "No. The values remain in the current browser session and are not submitted to SolvePilot." },
  { question: "Is the result a quotation or legal advice?", answer: "No. It is an educational estimate. Written contracts, disclosures, payoff statements and professional advice control." },
  { question: "Why might the final amount differ?", answer: `The result can differ because of ${tool.focus}. Replace every default with figures from current documents.` },
  { question: "How should I compare scenarios?", answer: "Save a baseline, change one uncertain assumption at a time, and compare both total cost and timing rather than one headline payment." },
];

export const seoFinanceTools: Tool[] = seeds.map((tool) => ({
  ...tool,
  category: tool.slug.includes("car-") ? "Vehicles" : "Money",
  accent: tool.slug.includes("lawyer") ? "violet" : tool.slug.includes("car-") ? "amber" : "green",
  updatedAt: "2026-09-29",
  intro: `${tool.description} It combines the main cost drivers on one transparent worksheet so visitors can target ${tool.keywords.slice(0, 3).join(", ")} without relying on separate near-duplicate pages. Defaults demonstrate the method only; replace them with current figures from the relevant agreement, statement or quotation.`,
  howTo: [
    "Collect the current price, balance, rate, term and fee information from written documents.",
    "Enter every amount in one currency and keep monthly and annual periods consistent.",
    "Calculate the baseline, then adjust one uncertain assumption to create a cautious comparison.",
    "Check the result against a provider schedule, closing estimate or qualified professional before acting.",
  ],
  considerations: [
    { title: "Complete transaction cost", text: `The result is sensitive to ${tool.focus}. Include charges collected outside the headline payment or fee.` },
    { title: "Timing and definitions", text: "Confirm whether rates are annual or periodic, when payments occur and whether quoted amounts include tax, insurance or disbursements." },
    { title: "Scenario risk", text: "Test a higher-cost or lower-value scenario. A favourable baseline is not approval, a binding quote or a guaranteed saving." },
    { title: "Local rules", text: "Property, credit, disclosure and legal rules vary. This global calculator does not identify the law or customary charge in a visitor's location." },
  ],
  limitations: `This ${tool.shortTitle.toLowerCase()} calculator provides an educational planning estimate. It cannot inspect a contract, confirm eligibility, predict a variable rate or property value, calculate every tax, or replace lender disclosures, a closing statement, legal advice or financial advice. Verify consequential figures with current documents and an appropriate professional.`,
  faqs: faqs(tool),
}));
