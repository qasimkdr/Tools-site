import type { Tool } from "@/lib/tools";

type Seed = Pick<Tool, "slug" | "title" | "shortTitle" | "description" | "icon" | "category" | "accent" | "formula" | "example" | "keywords"> & { focus: string };

const build = (s: Seed): Tool => ({
  ...s,
  updatedAt: "2026-10-01",
  intro: `${s.description} This page keeps its calculation method visible and groups only close keyword variants that use the same inputs and result. Use it for a quick, transparent estimate, then verify consequential decisions against the relevant current source or measurement.`,
  howTo: [
    "Enter your measured values in the units shown beside each field.",
    "Review the formula and confirm that the inputs match the task you are solving.",
    "Calculate the result, then adjust one input at a time to compare scenarios.",
    "Use the limitations and verification guidance before ordering materials or interpreting a score.",
  ],
  considerations: [
    { title: "Input quality", text: `The result depends on ${s.focus}. Measure or source the values before entering them.` },
    { title: "Units and conventions", text: "Keep units consistent. Different pattern, construction, academic or statistical conventions can produce different results." },
    { title: "Rounding", text: "Displayed numbers are rounded for readability. Keep unrounded values for intermediate steps and final checks." },
    { title: "Verification", text: "Compare the result with the disclosed formula and a current primary source or qualified professional when accuracy affects a material decision." },
  ],
  limitations: `This ${s.shortTitle.toLowerCase()} is a browser-based estimate, not an official score, engineering design, purchase order or substitute for a tested pattern. It cannot inspect your materials or validate source measurements. Important variables include ${s.focus}.`,
  faqs: [
    { question: `What does the ${s.shortTitle.toLowerCase()} calculate?`, answer: s.description },
    { question: "How do I get a more accurate result?", answer: `Use careful measurements and check ${s.focus}. Keep the units consistent with the fields.` },
    { question: "Why can another calculator give a different answer?", answer: "Tools can differ in assumptions, unit conversions, rounding and the exact method they use." },
    { question: "Does SolvePilot save the values I enter?", answer: "No account or personal details are needed. The calculation runs in your browser." },
    { question: "Can I treat this result as official?", answer: "No. It is a transparent estimate or practice calculation. The relevant authority, course provider, pattern maker or qualified professional remains the source of truth." },
    { question: "How can I check the formula?", answer: `Use the formula shown on this page and verify the assumptions that affect ${s.focus}.` },
  ],
});

export const semrushPhaseThreeTools: Tool[] = [
  build({ slug: "circle-skirt-calculator", title: "Circle Skirt Calculator", shortTitle: "Circle Skirt", description: "Calculate the waist radius and cutting radius for quarter-, half-, three-quarter- or full-circle skirt patterns, with fabric-width guidance.", icon: "🧵", category: "Everyday", accent: "rose", keywords: ["circle skirt calculator"], formula: "Waist radius = waist circumference ÷ (2π × skirt fraction). Cutting radius = waist radius + finished skirt length + entered total seam and hem allowance.", example: "For a 30-inch waist and a full-circle skirt, the waist radius is about 4.77 inches before allowances.", focus: "accurate waist measurement, skirt arc, finished length, seam and hem allowance, fabric width and grain direction" }),
  build({ slug: "cross-stitch-calculator", title: "Cross Stitch Calculator", shortTitle: "Cross Stitch", description: "Convert a cross-stitch design's stitch width and height into finished fabric dimensions using the fabric count and an edge margin.", icon: "🪡", category: "Everyday", accent: "rose", keywords: ["cross stitch calculator"], formula: "Stitched width in inches = stitch width ÷ fabric count; cut width = stitched width + twice the edge margin. Height uses the same calculation.", example: "A 140 × 100 stitch design on 14-count fabric is 10 × 7.14 inches before adding margins.", focus: "stitch count, stitches per inch, fabric count, edge margin, weave and shrinkage after washing" }),
  build({ slug: "hypergeometric-calculator", title: "Hypergeometric Calculator", shortTitle: "Hypergeometric", description: "Calculate exact or cumulative probabilities for drawing a chosen number of successes from a finite population without replacement.", icon: "📊", category: "Education", accent: "violet", keywords: ["hypergeometric calculator"], formula: "P(X = x) = C(K,x) × C(N−K,n−x) ÷ C(N,n), where N is population size, K is the number of successes and n is the draw count.", example: "Drawing 5 cards from a 52-card deck can be modeled with N=52, K=4 for aces and n=5.", focus: "population size, success count, sample size, target count and whether sampling is without replacement" }),
  build({ slug: "stud-calculator", title: "Stud Calculator", shortTitle: "Wall Stud", description: "Estimate the number of wall studs from the total wall run, on-center spacing, extra studs for openings and a material allowance.", icon: "🪚", category: "Home", accent: "amber", keywords: ["stud calculator"], formula: "Base studs = ceiling(wall length in inches ÷ on-center spacing) + 1. Add user-entered extra studs, then apply the waste allowance.", example: "A 12-foot wall at 16-inch spacing needs 10 base stud positions before corners, openings or waste are added.", focus: "combined wall length, framing layout, on-center spacing, openings, corners, lumber condition and local building requirements" }),
  build({ slug: "soffit-calculator", title: "Soffit Calculator", shortTitle: "Soffit", description: "Estimate soffit area, panel rows and linear footage from total eave length, soffit projection, panel coverage and a waste allowance.", icon: "🏠", category: "Home", accent: "amber", keywords: ["soffit calculator"], formula: "Soffit area = total eave length × projection. Panel rows = ceiling(projection ÷ panel face coverage). Panel footage = eave length × rows, increased by the entered waste allowance.", example: "An 80-foot eave with an 18-inch projection covers 120 square feet before waste or layout adjustments.", focus: "total eave length, projection depth, actual panel coverage, corners, blocking, ventilation layout and cuts" }),
  build({ slug: "ap-english-language-and-composition-score-calculator", title: "AP English Language Score Calculator", shortTitle: "AP English Language Score", description: "Estimate an AP English Language and Composition practice composite from multiple-choice questions correct and three free-response rubric scores.", icon: "🎓", category: "Education", accent: "violet", keywords: ["ap english language and composition score calculator"], formula: "Practice composite = (MCQ correct ÷ 45) × 45 + (three FRQ rubric points ÷ 18) × 55. The section weights are 45% multiple choice and 55% free response.", example: "With 32 of 45 MCQs correct and FRQ scores of 4, 4 and 4 out of 6, the practice composite is about 68.67%.", focus: "the current exam format, correct-answer count, rubric scores, College Board weighting and annual score setting" }),
];
