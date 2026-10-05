import {roadmap423Tools} from "./roadmap-423-plus-tools";
import {roadmap369Tools} from "./roadmap-369-plus-tools";
import {roadmap328Tools} from "./roadmap-328-plus-tools";
import {roadmap268Tools} from "./roadmap-268-plus-tools";
import {next20Tools} from "./roadmap-next20-tools";
import {upgradeNext20} from "./roadmap-next20-upgrades";
import {roadmap206Tools} from "./roadmap-206-225-tools";
import {upgradeRoadmap206} from "./roadmap-206-225-upgrades";
import {roadmap186Tools} from "./roadmap-186-205-tools";
import {upgradeRoadmap186} from "./roadmap-186-205-upgrades";
import {roadmap166Tools} from "./roadmap-166-185-tools";
import {upgradeRoadmap166} from "./roadmap-166-185-upgrades";
import {roadmap146Tools} from "./roadmap-146-165-tools";
import {upgradeRoadmap146} from "./roadmap-146-165-upgrades";
import {roadmap126Tools} from "./roadmap-126-145-tools";
import {upgradeRoadmap126} from "./roadmap-126-145-upgrades";
import {roadmap106Tools} from "./roadmap-106-125-tools";
import {upgradeRoadmap106} from "./roadmap-106-125-upgrades";
import type { Tool } from "@/lib/tools";
import { globalFinanceTools } from "@/lib/global-finance-tools";
import { ecommerceTools } from "@/lib/ecommerce-tools";
import { globalFinanceExpansionTools } from "@/lib/global-finance-expansion";
import { globalEducationTools } from "@/lib/global-education-tools";
import { seoFinanceTools } from "@/lib/seo-finance-tools";
import { semrushPhaseOneTools } from "@/lib/semrush-phase-one-tools";
import { semrushPhaseOneBTools } from "@/lib/semrush-phase-one-b-tools";
import { semrushPhaseTwoATools } from "@/lib/semrush-phase-two-a-tools";
import { semrushPhaseThreeTools } from "@/lib/semrush-phase-three-tools";
import { semrushRoadmapTools } from "@/lib/semrush-roadmap-86-105-tools";

type Seed = Pick<
  Tool,
  | "slug"
  | "title"
  | "shortTitle"
  | "description"
  | "icon"
  | "category"
  | "accent"
  | "formula"
  | "example"
> & { focus: string };

const seeds: Seed[] = [
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    shortTitle: "Compound Interest",
    description:
      "Project investment growth with monthly compounding using any currency, rate and time period.",
    icon: "📈",
    category: "Money",
    accent: "blue",
    formula:
      "Future value = principal × (1 + annual rate ÷ 12)^(12 × years). Projected growth equals future value minus the starting principal.",
    example:
      "A starting balance of 10,000 growing at 6% a year for 10 years with monthly compounding reaches about 18,194 before tax, fees and inflation.",
    focus: "investment returns, compounding frequency, fees and inflation",
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    shortTitle: "Savings Goal",
    description:
      "Find the monthly amount required to reach a savings target by a chosen deadline.",
    icon: "🎯",
    category: "Money",
    accent: "green",
    formula:
      "Monthly saving required = (target amount − amount already saved) ÷ months remaining.",
    example:
      "For a 12,000 target with 3,000 already saved and 18 months remaining, the required contribution is 500 per month before interest.",
    focus: "target dates, irregular income and emergency buffers",
  },
  {
    slug: "mortgage-payment-calculator",
    title: "Mortgage Payment Calculator",
    shortTitle: "Mortgage Payment",
    description:
      "Estimate principal and interest, then add user-entered annual property tax and homeowners insurance to compare a broader monthly mortgage cost.",
    icon: "🏠",
    category: "Money",
    accent: "blue",
    formula:
      "Principal-and-interest payment = P × r × (1+r)^n ÷ ((1+r)^n−1). Add annual property tax ÷ 12 and annual insurance ÷ 12 for a user-entered monthly estimate.",
    example:
      "A 250,000 mortgage at 6% for 30 years produces about 1,499 monthly principal and interest; entered annual taxes and insurance can be added separately.",
    focus:
      "loan term, interest rates, deposits, fees, insurance and property taxes",
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    shortTitle: "Discount",
    description:
      "Calculate the sale price, amount saved and final price after an optional tax or service rate.",
    icon: "🏷️",
    category: "Everyday",
    accent: "rose",
    formula:
      "Savings = original price × discount rate. Sale price = original price − savings. Final price = sale price × (1 + added rate).",
    example:
      "A 25% discount on 80 reduces the price by 20. If no additional tax or fee applies, the customer pays 60.",
    focus: "stacked discounts, taxes, service charges and return comparisons",
  },
  {
    slug: "sales-tax-vat-calculator",
    title: "Sales Tax and VAT Calculator",
    shortTitle: "Sales Tax & VAT",
    description:
      "Add or remove a sales-tax or VAT percentage and separate the tax from the net amount.",
    icon: "🧾",
    category: "Business",
    accent: "violet",
    formula:
      "Tax added = net price × rate. For a tax-inclusive price, net price = gross price ÷ (1 + rate).",
    example:
      "At a 20% VAT rate, a net price of 100 becomes 120 gross, while a tax-inclusive 120 contains 20 of VAT.",
    focus: "tax-inclusive pricing, jurisdiction rules, exemptions and rounding",
  },
  {
    slug: "profit-margin-calculator-global",
    title: "Profit Margin Calculator",
    shortTitle: "Profit Margin",
    description:
      "Compare gross profit, margin on revenue and markup on cost without assuming a currency.",
    icon: "💹",
    category: "Business",
    accent: "green",
    formula:
      "Profit = revenue − cost. Margin = profit ÷ revenue × 100. Markup = profit ÷ cost × 100.",
    example:
      "Revenue of 2,000 and direct cost of 1,400 creates 600 gross profit, a 30% margin and about 42.9% markup.",
    focus: "direct costs, overhead, margin versus markup and pricing decisions",
  },
  {
    slug: "business-break-even-calculator",
    title: "Business Break-Even Calculator",
    shortTitle: "Break-Even",
    description:
      "Find the units and revenue needed to cover fixed costs from price and variable cost per unit.",
    icon: "⚖️",
    category: "Business",
    accent: "amber",
    formula:
      "Contribution per unit = selling price − variable cost. Break-even units = fixed costs ÷ contribution per unit.",
    example:
      "With 10,000 in fixed costs, a price of 50 and variable cost of 30, the business must sell 500 units to break even.",
    focus: "fixed costs, contribution margin, capacity and changing sales mix",
  },
  {
    slug: "tip-calculator",
    title: "Tip Calculator",
    shortTitle: "Tip",
    description:
      "Calculate a tip, total bill and per-person payment for restaurants and services worldwide.",
    icon: "🍽️",
    category: "Everyday",
    accent: "rose",
    formula:
      "Tip = bill amount × tip percentage. Per-person total = (bill + tip) ÷ number of people.",
    example:
      "On an 80 bill with a 15% tip, the tip is 12 and the total is 92; four people would pay 23 each.",
    focus:
      "local tipping customs, service charges, tax and fair bill splitting",
  },
  {
    slug: "split-bill-calculator",
    title: "Split Bill Calculator",
    shortTitle: "Split Bill",
    description:
      "Divide a shared bill after adding a tip or service percentage and optional shared extras.",
    icon: "👥",
    category: "Everyday",
    accent: "blue",
    formula:
      "Amount per person = (bill + bill × added percentage + shared extras) ÷ number of people.",
    example:
      "A 120 bill, 10% service amount and 8 in shared extras totals 140; five people pay 28 each.",
    focus: "equal versus itemised splitting, tips, shared items and rounding",
  },
  {
    slug: "unit-price-comparison-calculator",
    title: "Unit Price Comparison Calculator",
    shortTitle: "Unit Price",
    description:
      "Compare two pack sizes by cost per unit to identify the lower-priced quantity.",
    icon: "🛒",
    category: "Everyday",
    accent: "green",
    formula:
      "Unit price = package price ÷ quantity. Percentage difference compares the saving with the higher unit price.",
    example:
      "A 750 g pack costing 6 has a unit price of 0.008 per gram; compare that figure with the second pack on the same unit basis.",
    focus: "matching units, usable quantity, waste, quality and promotions",
  },
  {
    slug: "work-hours-calculator",
    title: "Work Hours Calculator",
    shortTitle: "Work Hours",
    description:
      "Calculate paid shift hours from 24-hour times or add hours to the local clock; optionally estimate gross earnings from an hourly rate.",
    icon: "⏱️",
    category: "Business",
    accent: "violet",
    formula:
      "Paid shift hours = elapsed time between 24-hour start and end − unpaid break. Hours-from-now mode adds a duration to local device time; gross pay = paid hours × rate.",
    example:
      "A 9:00 to 17:30 shift with a 30-minute unpaid break contains 8 paid hours; at 20 per hour it earns 160 before deductions.",
    focus:
      "overnight shifts, unpaid breaks, overtime, rounding and payroll rules",
  },
  {
    slug: "download-time-estimator",
    title: "Download Time Estimator",
    shortTitle: "Download Time",
    description:
      "Estimate how long a file takes to download from its size, connection speed and practical efficiency.",
    icon: "⬇️",
    category: "Technology",
    accent: "violet",
    formula:
      "Seconds = file size in gigabits ÷ effective speed in gigabits per second; 1 byte equals 8 bits.",
    example:
      "A 20 GB file over a steady 50 Mbps connection at 90% efficiency takes roughly 59 minutes.",
    focus:
      "bits versus bytes, Wi-Fi overhead, server limits and changing speeds",
  },
  {
    slug: "running-pace-calculator",
    title: "Running Pace Calculator",
    shortTitle: "Running Pace",
    description:
      "Convert running distance and time into pace, average speed and common race projections.",
    icon: "🏃",
    category: "Everyday",
    accent: "green",
    formula:
      "Pace = elapsed time ÷ distance. Average speed = distance ÷ elapsed time in hours.",
    example:
      "Completing 10 km in 50 minutes gives a pace of 5:00 per kilometre and an average speed of 12 km/h.",
    focus: "distance units, terrain, fitness, weather and sustainable pacing",
  },
  {
    slug: "aspect-ratio-calculator",
    title: "Aspect Ratio Calculator",
    shortTitle: "Aspect Ratio",
    description:
      "Calculate a missing image or video dimension from its aspect ratio, or resize the frame while preserving its original proportions.",
    icon: "🖼️",
    category: "Technology",
    accent: "amber",
    formula:
      "New height = target width × original height ÷ original width. New width = target height × original width ÷ original height. The aspect ratio is width ÷ height.",
    example:
      "A 1920 × 1080 image resized to 1280 pixels wide should be 720 pixels high to preserve its 16:9 ratio.",
    focus:
      "pixel dimensions, cropping, orientation, display scaling and export quality",
  },
  {
    slug: "fuel-economy-converter",
    title: "Fuel Economy Converter",
    shortTitle: "Fuel Economy",
    description:
      "Convert between litres per 100 km, kilometres per litre and miles per US gallon.",
    icon: "⛽",
    category: "Vehicles",
    accent: "amber",
    formula:
      "km/L = 100 ÷ L/100 km. US mpg ≈ 235.215 ÷ L/100 km. Lower L/100 km means better economy.",
    example:
      "A vehicle using 8 L/100 km achieves 12.5 km/L, which is approximately 29.4 US mpg.",
    focus:
      "US versus imperial gallons, test cycles, driving conditions and unit direction",
  },
];

const questions = (tool: Seed) => [
  {
    question: `Is the ${tool.shortTitle.toLowerCase()} calculator free?`,
    answer:
      "Yes. It is free, needs no account and calculates locally in your browser.",
  },
  {
    question: "Can I use any currency or measurement system?",
    answer:
      "Yes when the input is an amount because the arithmetic is currency-neutral. Keep every amount in the same currency and use the units shown beside each field.",
  },
  {
    question: "Does SolvePilot save the values I enter?",
    answer:
      "No. The calculation runs on your device and the entered values are not submitted to a SolvePilot server.",
  },
  {
    question: "Is the result exact?",
    answer:
      "It is a transparent planning estimate based on your inputs. Provider rules, rounding, taxes, fees, real-world conditions and changing rates can produce a different final result.",
  },
  {
    question: "How can I get a more reliable estimate?",
    answer: `Use current, verified inputs and test a conservative second scenario. Pay particular attention to ${tool.focus}.`,
  },
];

const roadmapKeywordUpgrades: Record<string,string[]> = {
  "aspect-ratio-calculator": ["aspect ratio calculator","image aspect ratio calculator","video aspect ratio calculator","calculate aspect ratio dimensions","resize image without changing aspect ratio"],
  "mortgage-payment-calculator": ["mortgage calculator","mortgage payment calculator","monthly mortgage calculator with taxes and insurance","mortgage calculator with payment"],
  "work-hours-calculator": ["hours calculator","calculate work hours","calculate hours worked","clock out calculator","8 hour shift calculator","hours from now calculator","military time calculator"],
};

const originalGlobalTools: Tool[] = seeds.map((tool) => ({
  ...tool,
  updatedAt: tool.slug === "aspect-ratio-calculator" ? "2026-10-01" : "2026-09-21",
  keywords: roadmapKeywordUpgrades[tool.slug] || [
    tool.title.toLowerCase(),
    `free ${tool.shortTitle.toLowerCase()} calculator`,
    `online ${tool.shortTitle.toLowerCase()} tool`,
  ],
  intro: `${tool.description} This version is designed for visitors in any country: monetary fields are currency-neutral, units are labelled, and the working method is shown. It is most useful for quick comparisons and scenario planning rather than as a substitute for a provider statement or professional decision.`,
  howTo: [
    "Enter values from a current statement, label, measurement or quotation rather than copying the worked example.",
    "Keep monetary inputs in one currency and follow the unit displayed beside each field.",
    "Calculate the first scenario, then change one assumption at a time to understand what drives the result.",
    "Record the inputs with the result and verify important decisions against an authoritative source or professional.",
  ],
  considerations: [
    {
      title: "Input consistency",
      text: "Currencies, time periods and measurement units must be consistent. A correct formula cannot repair values entered on different bases.",
    },
    {
      title: "Real-world variation",
      text: `Actual outcomes can change because of ${tool.focus}. Use a cautious range when conditions are uncertain.`,
    },
    {
      title: "Rounding and timing",
      text: "Displayed totals are rounded for readability. Billing dates, compounding intervals, measurement precision or provider rounding may create small differences.",
    },
    {
      title: "Local rules",
      text: "Taxes, employment rules, financial product terms and customary practices vary by country and provider; the calculator does not infer your jurisdiction.",
    },
  ],
  limitations: `This calculator is an educational planning tool. It cannot validate your inputs, identify the rules in your country, quote a binding price, predict future conditions or replace financial, tax, legal, medical, engineering or other qualified advice. Its result should be checked wherever an error could affect money, safety, compliance or a contract.`,
  faqs: questions(tool),
}));

export const globalTools: Tool[] = [
  ...originalGlobalTools,
  ...globalFinanceTools,
  ...ecommerceTools,
  ...globalFinanceExpansionTools,
  ...globalEducationTools,
  ...seoFinanceTools,
  ...semrushPhaseOneTools,
  ...semrushPhaseOneBTools,
  ...semrushPhaseTwoATools,
  ...semrushPhaseThreeTools,
  ...semrushRoadmapTools,
  ...roadmap106Tools,
  ...roadmap126Tools,
  ...roadmap166Tools,
  ...roadmap186Tools,
  ...roadmap206Tools,
  ...roadmap423Tools,
  ...roadmap369Tools,...roadmap328Tools,
  ...roadmap268Tools,
  ...next20Tools,
  ...roadmap146Tools,
].map((tool) => {
  if (tool.slug === "bench-press-max-calculator") return {
    ...tool,
    title: "One Rep Max Calculator",
    shortTitle: "One Rep Max",
    description: "Estimate a one-repetition maximum for bench press, squat or deadlift from a completed set, using the Epley equation.",
    keywords: ["one rep max calculator","deadlift calculator","deadlift max calculator","bench press calculator","bench max calculator","bench calculator","squat calculator","1rm calculator","1rm bench calculator","one rep max bench calculator","one rep calculator","calculate 1 rep max","1 rep max calculator bench","bench 1rm calculator","bench press one rep max calculator","max rep calculator bench"],
    formula: "Estimated 1RM = load × (1 + completed repetitions ÷ 30). This Epley estimate can vary by lift, lifter and repetition range.",
    example: "A 100 kg bench press for 5 completed repetitions estimates a 1RM of about 116.7 kg.",
    intro: "Estimate a one-repetition maximum for bench press, squat or deadlift from a recent set. The same equation serves these closely related lift-specific searches; select the lift by entering its weight and completed repetitions.",
  };
  if (tool.slug === "gravel-stone-calculator") return {
    ...tool,
    title: "Gravel, Stone and River Rock Calculator",
    shortTitle: "Gravel & River Rock",
    description: "Estimate gravel, crushed stone, pea gravel or river rock volume and approximate weight from area, depth and material density.",
    keywords: [...tool.keywords, "river rock calculator", "river rock coverage calculator", "river rock estimator"],
  };
  if (tool.slug === "prorated-salary-calculator") return {
    ...tool,
    title: "Pro Rata Calculator",
    shortTitle: "Pro Rata",
    description: "Calculate a fair pro rata amount for part of a period from the full-period value and eligible days, including prorated salary and billing examples.",
    keywords: [...tool.keywords, "pro rata calculator", "prorata calculator", "pro rata salary calculator", "prorated amount calculator"],
    intro: "Use the pro rata calculator to scale a full-period amount to the eligible share of that period. The day-based method also applies to common prorated salary or billing estimates when the agreement uses calendar days.",
  };
  return tool;
}).map(upgradeRoadmap106).map(upgradeRoadmap126).map(upgradeRoadmap146).map(upgradeRoadmap166).map(upgradeRoadmap186).map(upgradeRoadmap206).map(upgradeNext20);

export const getGlobalTool = (slug: string) =>
  globalTools.find((tool) => tool.slug === slug);
