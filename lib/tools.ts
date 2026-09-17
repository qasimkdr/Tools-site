export type Tool = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  category: string;
  accent: "blue" | "green" | "amber" | "violet" | "rose";
  updatedAt: string;
  keywords: string[];
  intro: string;
  formula: string;
  example: string;
  faqs: { question: string; answer: string }[];
};

const commonFaq = (name: string) => [
  { question: `Is the ${name} free?`, answer: "Yes. SolvePilot tools are free, work in your browser, and require no account." },
  { question: "Does SolvePilot store my values?", answer: "No. Calculations run locally in your browser and the values you enter are not sent to a server." },
  { question: "Should I treat the result as an exact bill or quotation?", answer: "No. Results are informed estimates. Final charges can vary because of taxes, tariffs, lender terms, usage patterns, or provider rules." },
];

export const tools: Tool[] = [
  {
    slug: "electricity-bill-calculator-pakistan",
    title: "Electricity Bill Calculator Pakistan",
    shortTitle: "Electricity Bill",
    description: "Estimate your Pakistan electricity bill from monthly units with a transparent slab-by-slab breakdown.",
    icon: "⚡", category: "Energy", accent: "amber", updatedAt: "2026-09-17",
    keywords: ["electricity bill calculator Pakistan", "unit bill calculator", "Pakistan electricity units"],
    intro: "Enter the electricity units consumed during the month to receive a transparent planning estimate. The result separates estimated energy charges from adjustable taxes and surcharges so you can understand the assumptions.",
    formula: "Estimated bill = slab-based energy charges + configurable taxes and surcharges. Actual DISCO bills may include FCA, QTR adjustments, TV fee and other provider charges.",
    example: "If a household uses 250 units, the calculator applies each configured slab to the relevant portion rather than multiplying all units by a single rate.",
    faqs: [...commonFaq("electricity bill calculator"), {question:"Why can the real bill differ?",answer:"FCA, quarterly adjustments, protected status, taxes and the billing period can change the final amount."}],
  },
  {
    slug: "solar-system-calculator-pakistan",
    title: "Solar System Calculator Pakistan",
    shortTitle: "Solar System",
    description: "Estimate solar system size, panel count, monthly generation, savings and payback period for Pakistan.",
    icon: "☀️", category: "Solar", accent: "green", updatedAt: "2026-09-17",
    keywords: ["solar calculator Pakistan", "solar system size calculator", "solar panels required Pakistan"],
    intro: "Plan a solar system from your average monthly electricity usage. The tool estimates system capacity, panel count, monthly production and a simple payback period using editable Pakistan-focused assumptions.",
    formula: "Daily units = monthly units ÷ 30. Required kW = daily units ÷ (peak-sun-hours × system efficiency).",
    example: "A home consuming 600 units monthly uses about 20 units daily. At 5.2 peak-sun-hours and 80% efficiency, it needs roughly a 4.8 kW array before practical rounding.",
    faqs: [...commonFaq("solar system calculator"), {question:"Does it include batteries?",answer:"The initial result sizes panels. Battery capacity depends on the backup load and required backup hours and should be calculated separately."}],
  },
  {
    slug: "salary-tax-calculator-pakistan",
    title: "Salary Tax Calculator Pakistan",
    shortTitle: "Salary Tax",
    description: "Estimate annual and monthly salary tax and take-home pay using configurable Pakistan tax slabs.",
    icon: "💼", category: "Money", accent: "blue", updatedAt: "2026-09-17",
    keywords: ["salary tax calculator Pakistan", "income tax calculator Pakistan", "take home salary Pakistan"],
    intro: "Estimate the income tax deducted from a salaried person and see monthly take-home pay. Rates are versioned by tax year so past calculations remain reproducible when the federal budget changes.",
    formula: "Annual tax is calculated progressively: each rate applies only to the income portion inside its corresponding slab.",
    example: "For a PKR 150,000 monthly salary, the annual salary is PKR 1.8 million. The calculator applies the selected year’s progressive slabs and divides annual tax into monthly withholding.",
    faqs: [...commonFaq("salary tax calculator"), {question:"Does it include every tax credit?",answer:"No. This estimator focuses on salary taxation and does not replace an individual return calculation with credits, exemptions or multiple income sources."}],
  },
  {
    slug: "pta-tax-calculator-pakistan",
    title: "PTA Mobile Tax Estimator Pakistan",
    shortTitle: "PTA Tax",
    description: "Estimate PTA registration duty for an imported phone by USD value and registration method.",
    icon: "📱", category: "Technology", accent: "violet", updatedAt: "2026-09-17",
    keywords: ["PTA tax calculator", "mobile registration tax Pakistan", "PTA duty estimator"],
    intro: "Use the declared mobile value to estimate registration duty for planning. Customs valuation and official DIRBS assessment remain authoritative, so the result is clearly presented as an estimate.",
    formula: "Estimated duty uses value bands and registration method. Passport and CNIC assessments can differ and official valuation may not equal purchase price.",
    example: "Select passport or CNIC registration, enter the phone value in USD and the exchange rate, then review the estimated PKR range.",
    faqs: [...commonFaq("PTA tax estimator"), {question:"Is this an official PTA result?",answer:"No. Only the official DIRBS/PSID assessment confirms the payable amount for a specific IMEI."}],
  },
  {
    slug: "ev-vs-petrol-calculator-pakistan",
    title: "EV vs Petrol Cost Calculator Pakistan",
    shortTitle: "EV vs Petrol",
    description: "Compare monthly petrol and electric vehicle running costs and estimate your payback period.",
    icon: "🚙", category: "Vehicles", accent: "green", updatedAt: "2026-09-17",
    keywords: ["EV vs petrol calculator Pakistan", "electric bike savings Pakistan", "petrol cost calculator"],
    intro: "Compare energy costs using your real daily distance, petrol price, vehicle mileage, EV efficiency and electricity rate. The calculator shows monthly savings and how long a higher purchase price may take to recover.",
    formula: "Petrol cost = distance ÷ mileage × petrol price. EV cost = distance × kWh/km × electricity rate.",
    example: "At 50 km daily, a 40 km/litre bike uses 37.5 litres monthly. Compare that with the electricity needed by the selected EV efficiency.",
    faqs: [...commonFaq("EV versus petrol calculator"), {question:"Does this include battery replacement?",answer:"The primary result compares energy expense. Purchase difference and optional maintenance allowance are included separately; long-term battery replacement should also be considered."}],
  },
  {
    slug: "daraz-profit-calculator-pakistan",
    title: "Daraz Profit Calculator Pakistan",
    shortTitle: "Daraz Profit",
    description: "Estimate Daraz product profit after commission, payment fees, shipping support, ads and product cost.",
    icon: "📦", category: "Business", accent: "rose", updatedAt: "2026-09-17",
    keywords: ["Daraz profit calculator", "Daraz seller fee calculator Pakistan", "ecommerce profit calculator"],
    intro: "Know the amount left from a sale after product cost and marketplace expenses. All fee fields are editable because commission and campaign charges vary by category and seller agreement.",
    formula: "Net profit = selling price − product cost − commission − payment fee − seller shipping cost − advertising cost − other costs.",
    example: "A product sold for PKR 3,000 with a PKR 1,500 product cost and 12% commission starts with PKR 1,140 before other costs.",
    faqs: [...commonFaq("Daraz profit calculator"), {question:"Why is commission editable?",answer:"Daraz commission varies by category and can change. Enter the rate shown in your current seller information for the best estimate."}],
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    shortTitle: "Percentage",
    description: "Calculate a percentage of a number, percentage change, or what percentage one value is of another.",
    icon: "%", category: "Everyday", accent: "blue", updatedAt: "2026-09-17",
    keywords: ["percentage calculator", "percentage change calculator", "calculate percent"],
    intro: "Solve the three most common percentage questions with clear formulas and instant results. This lightweight tool runs entirely in your browser.",
    formula: "Percentage of value = value × percentage ÷ 100. Percentage change = (new − old) ÷ old × 100.",
    example: "Twenty percent of 5,000 is 1,000 because 5,000 × 20 ÷ 100 = 1,000.",
    faqs: commonFaq("percentage calculator"),
  },
  {
    slug: "cgpa-percentage-calculator-pakistan",
    title: "CGPA to Percentage Calculator Pakistan",
    shortTitle: "CGPA Converter",
    description: "Convert CGPA to an estimated percentage using common scales and a custom institution multiplier.",
    icon: "🎓", category: "Education", accent: "violet", updatedAt: "2026-09-17",
    keywords: ["CGPA to percentage Pakistan", "GPA percentage calculator", "CGPA converter"],
    intro: "Convert CGPA into an estimated percentage for planning and comparisons. Universities use different conversion rules, so this tool lets you select a common method or enter the formula supplied by your institution.",
    formula: "Estimated percentage = CGPA × institution multiplier. Always prefer the conversion formula printed by the relevant university or authority.",
    example: "On a 4.0 scale with a multiplier of 25, a CGPA of 3.2 corresponds to an estimated 80%.",
    faqs: [...commonFaq("CGPA converter"), {question:"Is one CGPA formula valid for every university?",answer:"No. Institutions may use different formulas. Use your university’s official conversion when available."}],
  },
];

export const categories = [...new Set(tools.map((tool) => tool.category))];
export const getTool = (slug: string) => tools.find((tool) => tool.slug === slug);
