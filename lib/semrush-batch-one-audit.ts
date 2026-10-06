import {roadmapGap20Audit} from "./roadmap-gap20-audit";
import {roadmapDeferredAudit} from "./roadmap-deferred-audit";
import {roadmap423Audit} from "./roadmap-423-plus-audit";
import {roadmap369Audit} from "./roadmap-369-plus-audit";
import {roadmap328Audit} from "./roadmap-328-plus-audit";
import {roadmap268Audit} from "./roadmap-268-plus-audit";
import {next20Audit} from "./roadmap-next20-audit";
import {enhanceNext20} from "./roadmap-next20-upgrades";
import {roadmap206Audit} from "./roadmap-206-225-audit";
import {enhanceRoadmap206} from "./roadmap-206-225-audit-upgrades";
import {roadmap186Audit} from "./roadmap-186-205-audit";
import {roadmap186Keywords} from "./roadmap-186-205-keywords";
import {roadmap166Keywords} from "./roadmap-166-185-keywords";
import {roadmap166Audit} from "./roadmap-166-185-audit";
import {roadmap146Audit} from "./roadmap-146-165-audit";
import {roadmap126Audit} from "./roadmap-126-145-audit";
import {roadmap106Audit} from "./roadmap-106-125-audit";
import type { Tool } from "@/lib/tools";

export type Audit = { keywordThemes:string[]; interpretation:string; scenarios:[string,string,string]; mistakes:[string,string,string]; verification:string; sourceNote:string; sourceUrl?:string; secondarySourceUrl?:string; relatedCalculators?:{title:string;slug:string;path?:string}[] };

const semrushBatchOneAuditBase:Record<string,Audit>={
"date-from-today-calculator":{keywordThemes:["days from today","weeks from today","months from today","what date is X days from today","date after X days"],interpretation:"Use one date engine for day, week and month offsets instead of publishing dozens of thin fixed-number URLs. The result should answer both the calculated date and the direction of the offset.",scenarios:["14 days from today — short calendar planning","10 weeks from today — week-based planning","6 months from today — month-boundary planning"],mistakes:["Treating business days as calendar days","Assuming every month has the same number of days","Creating a separate thin page for every numeric offset"],verification:"Check the returned date against a second calendar, especially around leap days and month-end boundaries.",sourceNote:"Calendar arithmetic follows the Gregorian calendar used by the browser."},
"payment-calculator":{keywordThemes:["payment calculator","loan payment calculator","monthly payment calculator","annual payment calculator"],interpretation:"Use this page for amortizing fixed-payment loans. Mortgage-tax, annuity-payout and credit-card-minimum-payment searches need different assumptions and should not be forced into this formula.",scenarios:["Monthly payment — standard amortizing loan","Annual payment — same formula with annual periods","Rate comparison — hold principal and term constant"],mistakes:["Mixing annual APR with a monthly rate","Ignoring fees or balloon payments","Using this formula for a credit-card minimum payment"],verification:"Compare the payment with the lender's amortization schedule using the same principal, rate, frequency and term.",sourceNote:"Uses the standard fixed-payment amortization equation; lender disclosures control actual payments."},
"interest-rate-calculator":{keywordThemes:["interest rate calculator","calculate interest rate","savings interest rate calculator","monthly interest calculator"],interpretation:"This page solves the compound growth rate implied by a beginning balance, ending balance and time. CD quote searches and loan APR searches can involve separate disclosure rules.",scenarios:["One-year savings growth — implied effective rate","Multi-year balance growth — annualized compound rate","Monthly equivalent — translate the same growth factor"],mistakes:["Ignoring deposits and withdrawals","Calling an effective rate a nominal APR","Comparing rates with different compounding conventions"],verification:"Recalculate from a statement period with no intermediate cash flows or model those cash flows separately.",sourceNote:"The calculation is a compound-growth identity, not a bank quote or advertised APY."},
"ratio-calculator":{keywordThemes:["ratio calculator","ratio scale calculator","ratio solver","simplify ratio calculator","ratio simplifier","equivalent ratios calculator","ratio to fraction calculator","fraction to ratio calculator","ratio to percentage calculator","percentage to ratio calculator","proportion calculator","proportion solver"],interpretation:"One calculator covers ratio simplification, scaling, equivalent-ratio solving, fraction conversion and percentage conversion because these operations share ratio inputs and arithmetic. The separate aspect-ratio tool answers a different image and video dimension question. Unrelated date, time and body-measurement ratios stay on their own pages.",scenarios:["18:24 — simplify to 3:4, or scale 3:4 by 5 to get 15:20","3:4 = 12:x — solve x = 16 by cross multiplication","3:4 — convert to 3/4 and 75% for A divided by B; shares of the combined total are 42.86% and 57.14%"],mistakes:["Using A divided by B when the question asks for each part's share of the total","Converting to a fraction when the denominator ratio term is zero","Comparing quantities before converting incompatible units"],verification:"Check a scaled ratio by dividing each output term by the same factor. Check equivalent ratios by comparing cross-products. Reduce fraction and ratio conversions by a common divisor.",sourceNote:"The calculator uses standard arithmetic and user-entered values. Ratio-to-percentage results label A ÷ B separately from each part's share of A + B."},
"aspect-ratio-calculator":{keywordThemes:["aspect ratio calculator","image aspect ratio calculator","video aspect ratio calculator","calculate a missing image or video dimension","resize while preserving aspect ratio"],interpretation:"Use this tool to find a missing pixel dimension while preserving the original width-to-height ratio. It does not estimate cropping, safe areas, display scaling or compression. General numeric ratios and fraction conversions belong on the Ratio Calculator.",scenarios:["1920 × 1080 resized to 1280 px wide — height is 720 px","1920 × 1080 resized to 720 px high — width is 1280 px","4:3 image resized to 800 px wide — height is 600 px"],mistakes:["Entering a target width in the height field","Stretching one dimension instead of preserving the ratio","Assuming a correct aspect ratio guarantees uncropped content on every platform"],verification:"Divide the original and calculated width by height. The ratios should match before rounding. Check the final crop and export dimensions in the target application.",sourceNote:"This is a geometric pixel-dimension calculation. Platform presets, crop zones and export rules can differ by service.",relatedCalculators:[{title:"Ratio Calculator",slug:"ratio-calculator"}]},
"gpa-calculator":{keywordThemes:["gpa calculator","middle school gpa calculator","high school gpa calculator","cumulative gpa calculator","weighted gpa calculator","college gpa calculator"],interpretation:"The calculator currently computes a credit-weighted grade-point average. School-specific weighting, honors boosts and percentage-to-GPA conversion require the user's actual institutional scale.",scenarios:["Equal credits — simple average of grade points","Different credits — higher-credit courses contribute more","Cumulative update — combine existing quality points and new coursework when available"],mistakes:["Assuming every school uses a 4.0 scale","Adding honors weighting without the school's policy","Converting percentages to GPA with a universal table"],verification:"Compare the entered grade points, credit weights and scale with the registrar or school's published grading policy.",sourceNote:"No universal GPA conversion exists across schools; institutional policy is authoritative."},
"square-footage-calculator":{keywordThemes:["square footage calculator","square feet calculator","calculate square feet","how to find square feet","measure square feet"],interpretation:"Use rectangular area as the base calculation and split irregular rooms into measurable rectangles. Flooring-cost or square-yard purchasing questions may require additional waste and unit conversion.",scenarios:["12 × 10 room — 120 ft²","Three identical areas — multiply by quantity","Flooring order — add an explicit waste allowance"],mistakes:["Mixing inches and feet","Using wall perimeter as floor area","Forgetting to split irregular shapes"],verification:"Measure each dimension twice and compare the total with a floor plan or supplier takeoff.",sourceNote:"Area is geometric; purchasing quantities should also include product-specific waste and pack sizes."},
"gravel-stone-calculator":{keywordThemes:["gravel calculator","stone calculator","pea gravel calculator","crushed stone calculator","landscape rock calculator","river rock calculator","aggregate calculator","gravel estimator"],interpretation:"These material terms can share one volume engine when the user enters project dimensions and material density. Weight is only an estimate because bulk density changes with stone size, moisture and compaction.",scenarios:["Driveway gravel — area × compacted depth","Pea gravel bed — shallower landscape layer","River rock — use supplier density and size"],mistakes:["Using one density for every aggregate","Entering inches as feet","Ordering exact theoretical volume with no allowance"],verification:"Confirm the material density and minimum order quantity with the supplier, then verify site dimensions.",sourceNote:"Material density is supplier- and condition-dependent; the geometry is exact only for the entered dimensions."},
"fraction-calculator":{keywordThemes:["fraction calculator","mixed fraction calculator","mixed number calculator","fraction calculator with whole numbers","fraction solver with whole numbers","convert to fraction"],interpretation:"Core fraction arithmetic belongs on one page, but mixed-number and whole-number searches should be satisfied with explicit conversion support rather than keyword text alone.",scenarios:["1/2 + 1/3 — add unlike denominators","2 1/2 — convert mixed number to improper fraction","6/8 — reduce to 3/4"],mistakes:["Dividing by a zero denominator","Adding denominators directly","Ignoring the whole-number component of a mixed number"],verification:"Convert the result to decimal and back or cross-check by multiplying the reduced denominator.",sourceNote:"Fraction arithmetic is exact for integer numerators and non-zero integer denominators."},
"cylinder-volume-calculator":{keywordThemes:["cylinder volume calculator","volume calculator cylinder","cylinder volume formula","volume of a cylinder","how to find volume of a cylinder","cylinder calculator"],interpretation:"All volume-of-cylinder wording belongs on one page because it uses the same radius and height. Diameter searches should be supported by clearly converting diameter to radius.",scenarios:["Radius 2, height 5 — volume 20π","Known diameter — halve it before using r²","Tank comparison — keep units consistent"],mistakes:["Using diameter as radius","Mixing centimetres and metres","Reporting square units instead of cubic units"],verification:"Recompute πr²h independently and confirm the entered radius is half the diameter when diameter was measured.",sourceNote:"Uses the standard Euclidean cylinder formula."},
"concrete-calculator":{keywordThemes:["concrete calculator","concrete slab calculator","concrete volume calculator","sonotube concrete calculator","concrete block volume and weight estimate","concrete cost estimate using a unit price"],interpretation:"The calculator supports rectangular slabs, cylindrical Sonotubes, and block volume. Enter a manufacturer block weight when known; otherwise the displayed block mass is only a solid-concrete equivalent because hollow block weights vary. Cement-only mix quantities require a mix design.",scenarios:["10 × 10 × 6 in slab — about 1.85 yd³ before waste","12 in diameter × 4 ft Sonotube — about 3.14 ft³","Block mode — enter count and optional manufacturer weight; slab mode can use a unit price"],mistakes:["Treating cement and concrete as identical quantities","Entering inches as feet or forgetting circular radius","Treating solid-equivalent mass as actual hollow block weight"],verification:"Compare dimensions with the drawing and confirm order rounding, unit price, and mix specification with the ready-mix supplier.",sourceNote:"Geometry estimates volume only; structural mix design and reinforcement require project specifications."},
"random-number-generator":{keywordThemes:["random number generator","random number generator 1 to 100","random number generator 1 to 1000","random 4 digit number generator","number generator 1 to 16"],interpretation:"One configurable inclusive integer generator can satisfy numeric-range variants. Four-digit intent is satisfied by setting 1000–9999; cryptographic or security-token use is outside scope.",scenarios:["1–100 — common draw","1–1000 — larger inclusive range","1000–9999 — four-digit number"],mistakes:["Assuming pseudo-random output is cryptographically secure","Reversing minimum and maximum","Expecting no duplicates across independent draws"],verification:"Confirm the displayed range is inclusive and use a cryptographic generator for passwords, keys or security tokens.",sourceNote:"Browser pseudo-random generation is suitable for casual draws, not cryptographic security."},
"401k-calculator":{keywordThemes:["401k calculator","401k match calculator","401k contribution calculator","401k estimator","401k balance calculator","401k retirement calculator"],interpretation:"Use the page for contribution-and-growth projections. Employer match must remain user-entered because plan formulas, vesting and annual limits vary.",scenarios:["No employer match — employee contributions only","Fixed employer contribution — add known annual match","Lower return scenario — stress-test long-term balance"],mistakes:["Treating assumed return as guaranteed","Ignoring vesting and fees","Applying an employer match formula the plan does not use"],verification:"Compare contribution and match assumptions with the plan document and current IRS limits before acting.",sourceNote:"Projection is educational; current plan documents and IRS rules are authoritative."},
"sand-calculator":{keywordThemes:["sand calculator","sand estimator","paver sand calculator"],interpretation:"Sand volume and estimated weight can share one page when depth and density are editable. Aquarium substrate also uses the rectangular-bed volume when tank footprint and depth are known. Unrelated number-rounding queries from automated clustering are rejected.",scenarios:["Paver bedding — shallow depth","Landscape fill — larger area","Weight estimate — use supplier bulk density"],mistakes:["Using wet and dry density interchangeably","Entering depth in the wrong unit","Skipping compaction and waste allowance"],verification:"Confirm required compacted depth and bulk density with the material supplier or project specification.",sourceNote:"Volume comes from geometry; weight depends on entered bulk density."},
"right-triangle-calculator":{keywordThemes:["right triangle calculator","right triangle solver","right triangle angle calculator","missing side of a right triangle","right triangle finder"],interpretation:"The calculator solves from two legs, a hypotenuse plus one leg, or one leg plus an acute angle. The right-angle assumption is explicit, so general non-right triangle inputs remain on the separate Triangle Calculator.",scenarios:["3 and 4 legs — 5 hypotenuse","Equal legs — 45° acute angles","Measured construction triangle — verify right-angle assumption"],mistakes:["Using the solver on a non-right triangle","Mixing units","Entering the hypotenuse as a leg"],verification:"Check a²+b²=c² and confirm the measured corner is intended to be 90 degrees.",sourceNote:"Uses the Pythagorean theorem and inverse trigonometry."},
"ap-world-score-calculator":{keywordThemes:["ap world calculator","ap world score calculator","AP World History score calculator"],interpretation:"Use current section weights to estimate a practice composite. Do not invent a stable 1–5 cutoff because score setting can vary by administration.",scenarios:["Balanced sections — identify overall practice composite","Strong MCQ — see its 40% contribution","Weak DBQ — see the effect of the 25% section"],mistakes:["Treating a practice composite as an official AP score","Using outdated section weights","Ignoring rubric-specific FRQ scoring"],verification:"Check the current AP World History: Modern exam description and scoring materials from College Board.",sourceNote:"College Board is the authoritative source for current exam structure and score reporting."}
};

const audit = (
  keywordThemes: string[],
  interpretation: string,
  scenarios: [string, string, string],
  mistakes: [string, string, string],
  verification: string,
  sourceNote: string,
  sourceUrl?: string,
): Audit => ({ keywordThemes, interpretation, scenarios, mistakes, verification, sourceNote, sourceUrl });

const semrushBatchOneAdditionalAudits: Record<string, Audit> = {
  "proportion-calculator": audit(
    ["solve a missing term in equivalent ratios", "scale a recipe or drawing proportionally", "check proportional relationships"],
    "One cross-multiplication tool can solve any single missing value in an equivalent proportion. Keep unit conversion separate: proportionality does not make unlike units comparable.",
    ["3:5 = 12:x — solve x as 20", "Double both terms of 4:7 — get 8:14", "Compare matching units before scaling a real quantity"],
    ["Dividing by a zero known term", "Mixing units before setting the proportion", "Assuming every real relationship is proportional"],
    "Substitute the answer into both ratios and check that cross-products match.",
    "The page uses cross multiplication for elementary proportions."
  ),
  "age-calculator": audit(
    ["age in years, months, and days", "age on a chosen date", "chronological age between two dates"],
    "A calendar age is counted by completed years, months, and days. This is different from dividing elapsed days by an average year, especially around leap days and month ends.",
    ["Birth date to today — completed calendar age", "Birth date to a future date — age on that date", "Leap-day birthday — inspect the chosen calendar convention"],
    ["Using a future birth date", "Treating a year as exactly 365 days", "Confusing chronological age with an institution's cutoff rule"],
    "Check the birth date and comparison date on a calendar; confirm any school, sport, or legal cutoff with the responsible institution.",
    "Calendar age is an arithmetic result, not a determination of legal eligibility."
  ),
  "hypotenuse-calculator": audit(
    ["hypotenuse from two perpendicular legs", "right-triangle hypotenuse formula", "Pythagorean theorem side calculation"],
    "The calculator expects the two legs that meet at the right angle. A hypotenuse plus one leg is a different input pair and belongs in a right-triangle solver mode.",
    ["Legs 3 and 4 — hypotenuse 5", "Legs 5 and 12 — hypotenuse 13", "Scale both legs by two — the hypotenuse also doubles"],
    ["Entering the hypotenuse as one of the legs", "Mixing feet and inches", "Using the formula when the included angle is not 90 degrees"],
    "Confirm the right angle and verify a² + b² = c² using the unrounded values.",
    "Uses the Pythagorean theorem for a right triangle."
  ),
  "period-calculator": audit(
    ["estimate the next period date", "project menstrual cycle dates from prior starts", "adjust a cycle estimate using a personal average"],
    "This is a date estimate based on the user's reported cycle length. Cycle timing varies, so it cannot diagnose pregnancy or a health condition and should not be used as contraception.",
    ["28-day personal average — project one cycle", "Shorter or longer personal average — compare dates", "Irregular history — treat the estimate as especially uncertain"],
    ["Assuming every cycle is 28 days", "Treating a prediction as a medical finding", "Using calendar estimates to avoid pregnancy"],
    "Compare the estimate with tracked start dates. Ask a clinician about concerning changes, severe symptoms, or pregnancy questions.",
    "The NHS describes cycle variation and an approximate average; individual cycles differ.",
    "https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/"
  ),
  "cubic-yard-calculator": audit(
    ["cubic yards from length, width, and depth", "convert cubic feet to cubic yards", "estimate landscape material volume"],
    "The page converts geometric volume to cubic yards. It does not infer how much a supplier sells per bag or account for material settlement unless the user adds an allowance.",
    ["12 × 9 feet at 6 inches deep — convert cubic feet to yards", "Use inches for depth — convert before calculating", "Add a separate waste allowance after the geometric estimate"],
    ["Entering depth in inches as though it were feet", "Dividing cubic feet by 9 instead of 27", "Treating estimated volume as a supplier order quantity"],
    "Recheck all three dimensions and confirm the supplier's units, compaction, and minimum order.",
    "One cubic yard equals 27 cubic feet; the result is a geometric volume."
  ),
  "bench-press-max-calculator": audit(
    ["one rep max calculator", "bench press one-repetition maximum", "deadlift max and squat max estimate", "Epley equation"],
    "The Epley equation supports the same one-repetition maximum estimate for bench press, squat and deadlift. It becomes less dependable at high repetition counts and cannot assess technique, fatigue, or readiness.",
    ["100 kg bench for 5 reps — estimate about 116.7 kg", "Enter a squat set — apply the same disclosed equation", "Use a low-repetition set when the goal is a closer estimate"],
    ["Treating an estimate as a tested maximum", "Using a set taken far from muscular failure", "Attempting a heavy lift without appropriate equipment or a spotter"],
    "Compare with a qualified coach's assessment and follow safe spotting practices; stop if pain or unsafe technique occurs.",
    "This is a training estimate, not medical advice or a guarantee of safe lifting capacity."
  ),
  "triangle-calculator": audit(
    ["find triangle area from three side lengths", "check whether three lengths can form a triangle", "use Heron's formula for a scalene triangle"],
    "This page solves a general triangle from three side lengths. Right-triangle searches belong on the dedicated right-triangle calculator, which uses the right-angle constraint and can solve its own side and angle relationships.",
    ["Sides 3, 4, 5 — area 6 square units", "Sides 5, 5, 6 — isosceles triangle area", "Impossible side set — check the triangle inequality"],
    ["Using lengths that fail the triangle inequality", "Mixing length units", "Rounding the semiperimeter too early"],
    "Check that the two shorter sides sum to more than the longest side and independently recompute Heron's formula.",
    "Uses Heron's formula; right triangles have a separate tool because their inputs and constraints differ."
  ),
  "molecular-weight-calculator": audit(
    ["molecular mass from atomic masses and atom counts", "molar mass calculation for a simple compound", "sum element contributions from a formula"],
    "Molecular mass is the sum of each element's atomic mass multiplied by its atom count. The displayed result is only as accurate as the entered atomic masses and parsed formula.",
    ["H₂O — two hydrogen atoms plus one oxygen atom", "CO₂ — one carbon plus two oxygen atoms", "Nested parentheses are supported; hydrates, charges, isotopes and lab-specific conventions need separate verification"],
    ["Omitting subscripts", "Confusing molecular mass with a sample's total mass", "Using rounded atomic masses for precision work"],
    "Compare the parsed element counts with the original chemical formula and verify masses against a current periodic table.",
    "For laboratory or regulated work, follow the required atomic-weight convention and verify with a chemistry reference."
  ),
  "bowling-score-calculator": audit(
    ["calculate a ten-pin bowling game from rolls", "apply strike and spare bonus rolls", "total a bowling score through the tenth frame"],
    "A valid ten-pin score needs frame-by-frame rolls because strikes and spares earn bonus pins from later rolls. Adding ten frame totals without those bonuses produces the wrong score.",
    ["Strike followed by 7 and 2 — frame score 19", "Spare followed by a 5 — frame score 15", "Tenth-frame strike — enter both bonus rolls"],
    ["Entering frame totals instead of rolls", "Stopping after the first roll of a spare", "Omitting tenth-frame bonus rolls or exceeding ten pins in a frame"],
    "Check every frame's roll sequence and compare the running score with an official score sheet.",
    "Ten-pin scoring awards bonus rolls for strikes and spares; use the governing rulebook for competition scoring.",
    "https://bowl.com/rules/usbc-playing-rules"
  ),
  "air-force-pt-test-calculator": audit(
    ["sum Air Force fitness component points", "check a practice physical fitness assessment total", "record points from current official score charts"],
    "This calculator adds component points supplied by the user. It does not translate run times, repetitions, age, or waist-to-height measurements into points; those values must be looked up in the current Air Force chart.",
    ["Enter component points from the current score chart", "Change one component score to compare totals", "Check the total against the assessment program's maximum"],
    ["Using an older chart", "Confusing raw repetitions or time with points", "Treating a total as an official pass determination"],
    "Verify each entered component against the current Air Force Personnel Center chart for the applicable assessment, age group, and category.",
    "Air Force assessment components and score charts can change; consult the current AFPC program page.",
    "https://www.afpc.af.mil/Career-Management/Fitness-Program/"
  ),
  "square-root-calculator": audit(
    ["principal square root of a non-negative number", "square a value or check a square root", "racine carrée for basic arithmetic"],
    "The principal square root is the non-negative value whose square equals the input. A negative input has no real principal square root; complex-number operations are outside this page's scope.",
    ["√81 — principal root 9", "√2 — show a rounded decimal approximation", "9² — check a square against its root"],
    ["Reporting both ± roots when the tool asks for the principal root", "Expecting an exact finite decimal for every irrational value", "Using rounded output for an exact proof"],
    "Square the displayed root to check the original input, allowing for the displayed rounding.",
    "The same arithmetic works across languages; French search wording is included as a language variant, not a separate calculator."
  ),
  "how-many-years-calculator": audit(
    ["elapsed years between two dates", "decimal years from a day count", "compare calendar dates by duration"],
    "The tool reports elapsed decimal years using the average Gregorian year length. That convention differs from completed calendar years around leap days and anniversaries.",
    ["One calendar year apart — completed-year result", "Across a leap day — compare calendar and day-count views", "Short span — inspect the fractional-year convention"],
    ["Assuming every year has 365 days", "Reversing start and end dates without noticing", "Using elapsed years as a legal age determination"],
    "Compare the start and end dates and verify the displayed calendar or decimal convention matches your purpose.",
    "Year length varies in the Gregorian calendar; this is an elapsed-time estimate."
  ),
  "date-calculator": audit(
    ["add or subtract calendar days", "find days between two dates", "calculate a date interval using clear calendar units"],
    "Date addition and date difference share calendar inputs but answer different questions. The page should make the selected operation clear and state whether the start date is counted inclusively.",
    ["Add 30 days to a start date", "Find the days between two dates", "Compare calendar days with business-day planning"],
    ["Counting the start day twice", "Treating business days as calendar days", "Using month lengths as a fixed 30 days"],
    "Check endpoints and inclusive-counting rules against a calendar, especially over month-end and leap-day boundaries.",
    "Calendar calculations use Gregorian dates; holidays and jurisdiction-specific business days require separate rules."
  ),
  "hourly-wage-and-tax-calculator": audit(
    ["estimate hourly gross and take-home pay", "compare hours, wage, and a user-entered deduction rate", "convert hourly pay to a paycheck estimate"],
    "A defensible global tool cannot infer income tax from an hourly wage alone. Keep jurisdiction, filing status, pay frequency, pretax deductions, and withholding assumptions explicit; a user-entered deduction percentage is only a rough estimate.",
    ["40 hours at 25 per hour — gross pay before deductions", "Change the entered deduction estimate to compare net pay", "Compare weekly and monthly periods only after aligning hours"],
    ["Calling an entered flat percentage an exact tax calculation", "Ignoring overtime or unpaid breaks", "Mixing currencies or pay periods"],
    "Reconcile gross pay with the timesheet and verify withholding using the relevant tax authority's current estimator.",
    "Tax treatment depends on jurisdiction and personal circumstances; U.S. employees can use the IRS estimator.",
    "https://www.irs.gov/individuals/tax-withholding-estimator"
  ),
  "asphalt-calculator": audit(
    ["estimate asphalt paving volume and tonnage", "convert paving area and depth to material quantity", "plan asphalt order with a user-supplied density"],
    "Paving quantity begins with area and compacted thickness. Tonnage requires an explicit mix density because asphalt mix, compaction, and job conditions vary.",
    ["Driveway area at 2 inches — geometric volume", "Enter supplier density — estimate tonnes", "Add a separate allowance for edges and compaction"],
    ["Entering loose depth as compacted depth", "Using an assumed density as a universal value", "Treating a volume estimate as an engineer's paving specification"],
    "Confirm mix type, compacted thickness, density, and order rounding with the asphalt supplier or project engineer.",
    "The calculator estimates quantity only; pavement design and specifications require project-specific review."
  ),
  "ap-biology-score-calculator": audit(
    ["estimate an AP Biology practice composite from section scores", "compare multiple-choice and free-response performance", "track practice results without predicting an official 1–5 score"],
    "The tool combines entered section performance under its disclosed practice weighting. It cannot reproduce College Board equating, rubric decisions, or annual score setting.",
    ["Balanced section performance — inspect the composite", "Raise one section score — see the contribution change", "Compare practice exams only when their scoring methods match"],
    ["Treating a percent composite as an AP score", "Using a section weight from another exam year", "Comparing raw question counts with weighted points"],
    "Use the current AP Biology exam description and released scoring materials for the administration you are preparing for.",
    "College Board publishes the authoritative exam format and scoring resources.",
    "https://apcentral.collegeboard.org/courses/ap-biology/exam"
  ),
  "womens-bmi-calculator": audit(
    ["calculate adult BMI from height and weight", "interpret BMI as a screening measure", "compare BMI units without assuming a sex-specific formula"],
    "The BMI equation is not different for adult women. This page calculates the same height-and-weight index used for adults generally; it cannot assess body composition, pregnancy, or an individual's health.",
    ["Enter kilograms and centimetres — calculate BMI", "Change to pounds and inches only when units are converted consistently", "Use the same BMI value as a screening discussion, not a diagnosis"],
    ["Calling BMI a diagnosis", "Applying adult BMI categories to children", "Assuming the index measures body fat directly"],
    "Discuss interpretation with a qualified health professional and consult current public-health guidance for category definitions.",
    "CDC describes adult BMI as a screening measure and explains its limitations.",
    "https://www.cdc.gov/bmi/about/index.html"
  ),
  "ap-chemistry-score-calculator": audit(
    ["estimate an AP Chemistry practice composite", "combine multiple-choice and free-response practice results", "compare chemistry practice performance without claiming an official score"],
    "A practice composite is useful for comparing attempts only when section weights and scoring rubrics match. The College Board's score-setting process is not a fixed universal percent cutoff.",
    ["Strong multiple choice with weaker free response", "Change one rubric score and review the effect", "Compare attempts using the same exam format"],
    ["Using outdated exam weights", "Treating percent correct as the official AP score", "Ignoring rubric points and partial credit"],
    "Check current AP Chemistry exam guidance and released scoring materials before interpreting a practice composite.",
    "College Board is authoritative for exam format, question scoring, and score reporting.",
    "https://apcentral.collegeboard.org/courses/ap-chemistry/exam"
  ),
  "npv-calculator": audit(
    ["net present value from dated cash flows", "discount future cash flows using an entered rate", "compare an investment scenario's present value"],
    "NPV discounts each future cash flow to a common valuation date and combines it with the initial outlay. The discount rate is an assumption, not a promised return or recommendation.",
    ["Initial cost plus annual inflows — calculate NPV", "Raise the discount rate — see present value fall", "Delay a cash flow — compare its lower present value"],
    ["Mixing annual and monthly rates", "Using nominal cash flows with a real discount rate", "Treating positive NPV as proof an investment is suitable"],
    "Confirm cash-flow timing, sign convention, tax treatment, currency, and discount-rate basis with the project model.",
    "This is a transparent discounted-cash-flow calculation, not investment advice."
  ),
  "weeks-calculator": audit(
    ["weeks between two dates", "convert a day duration into weeks and remaining days", "count weeks in a calendar interval"],
    "Week counts can mean completed seven-day periods or calendar weeks touched. The result should label the convention and any remaining days.",
    ["14 days — 2 weeks", "10 days — 1 week and 3 days", "12 weeks — approximately 2.76 average calendar months"],
    ["Rounding partial weeks without saying so", "Counting both endpoints implicitly", "Confusing calendar week numbers with elapsed duration"],
    "Check the selected input unit and target unit. The month conversion uses an average Gregorian month, so it is an estimate rather than a calendar-date operation.",
    "Seven days make one week; average-month conversion uses 365.2425 ÷ 12 days per month."
  ),
  "half-birthday-calculator": audit(
    ["find the date six calendar months from a birthday", "calculate a half-birthday date", "handle month-end dates when adding six months"],
    "A half birthday is a calendar convention, not always 182.5 days. The page should explain how a source month-end date is handled when the target month is shorter.",
    ["31 January — inspect the target-month rule", "29 February — check the selected leap-year convention", "Ordinary date — add six calendar months"],
    ["Adding a fixed 182 days instead of six calendar months", "Ignoring month-end adjustment", "Treating the result as an official age cutoff"],
    "Confirm the target date under the event, school, or organization rule that defines a half birthday.",
    "There is no universal legal definition of a half-birthday date; calendar handling should be explicit."
  ),
  "paycheck-hours-calculator": audit(
    ["calculate gross paycheck from regular and overtime hours", "estimate hours worked pay before deductions", "apply a user-entered overtime multiplier"],
    "This page turns hours into gross pay using an entered base rate and multiplier. It is different from a work-hours calculator, which derives hours from start, end, and break times.",
    ["40 regular hours at a chosen rate", "Add 5 overtime hours at an entered multiplier", "Compare two pay periods with the same currency and rules"],
    ["Applying overtime twice", "Assuming one legal multiplier fits every worker", "Calling gross pay take-home pay"],
    "Reconcile hours with the timesheet and confirm eligibility, multiplier, and payroll deductions with the employer or applicable authority.",
    "Employment rules vary by jurisdiction and worker category; the result is an arithmetic estimate."
  ),
  "dog-pregnancy-calculator": audit(
    ["estimate a dog's whelping date from a breeding date", "show a planning window rather than a guaranteed due date", "understand why ovulation timing changes gestation estimates"],
    "Breeding date alone cannot establish ovulation or conception date. A date window is safer than a single guaranteed due date, and veterinary assessment is needed for pregnancy care or complications.",
    ["Use the first known mating date — display an approximate window", "If ovulation timing is known — use the veterinarian's dates", "Compare the estimate with veterinary examination timing"],
    ["Treating one date as certain", "Waiting for the estimate when the dog appears unwell", "Using the calculator instead of prenatal veterinary care"],
    "Contact a veterinarian for confirmation, pregnancy monitoring, and urgent advice about distress or labor concerns.",
    "Merck Veterinary Manual explains that gestation from breeding has a wider window than gestation from ovulation.",
    "https://www.merckvetmanual.com/multimedia/table/approximate-gestation-periods"
  ),
  "binary-calculator": audit(
    ["convert binary to decimal and decimal to binary", "inspect binary place values", "check a binary arithmetic result"],
    "Binary conversion and place-value explanation belong on the same page. Only 0 and 1 are valid binary digits; very large values may exceed safe integer precision in a browser number field.",
    ["1011₂ — decimal 11", "13₁₀ — binary 1101", "Add two small binary integers and verify in decimal"],
    ["Entering digits other than 0 or 1", "Reading the rightmost place as 2¹", "Ignoring precision limits for very large values"],
    "Convert the result back to the original base or sum each set bit's power of two.",
    "Binary place values are powers of two; this page is for ordinary integer conversion."
  ),
  "paycheck-estimator-calculator": audit(
    ["estimate gross and net paycheck using entered hours and deductions", "compare pay from hourly rate and work hours", "calculate a rough take-home amount"],
    "A flat deduction percentage is only a rough input. Real take-home pay depends on jurisdiction, payroll period, benefits, pretax deductions, and personal tax circumstances.",
    ["Hourly rate × regular hours — gross estimate", "Enter a known deduction rate — approximate net amount", "Compare pay periods only after matching hours and deductions"],
    ["Treating a percentage estimate as official withholding", "Leaving out overtime, bonuses, or benefits", "Mixing gross and net values in a comparison"],
    "Compare with a recent pay statement and use the relevant tax authority's current withholding estimator.",
    "For U.S. withholding, the IRS estimator is authoritative; other jurisdictions have their own rules.",
    "https://www.irs.gov/individuals/tax-withholding-estimator"
  ),
  "pool-salt-calculator": audit(
    ["estimate salt required to adjust pool salinity", "calculate a target salt addition from volume and test readings", "compare current and target concentration"],
    "Salt addition depends on pool volume and a reliable current reading. This estimate does not account for salt already added but not yet mixed or removed water unless the user adjusts the inputs.",
    ["Low current reading — calculate the target difference", "Small top-up — add gradually and retest", "Pool volume estimate — check dimensions before dosing"],
    ["Adding the full amount without retesting", "Confusing ppm with percent", "Ignoring the salt-system manufacturer's operating range"],
    "Follow the chlorinator and chemical manufacturers' instructions, circulate water, and retest before adding more.",
    "Use the equipment maker's current manual and a pool-water test; no single target fits every system."
  ),
  "rafter-length-calculator": audit(
    ["estimate a common rafter from horizontal run and roof rise", "calculate rafter length with the Pythagorean theorem", "compare roof pitch and rafter geometry"],
    "The geometric length is measured from the run and rise. It does not automatically include ridge thickness, birdsmouth cuts, overhangs, or structural design requirements.",
    ["Run 12 ft and rise 5 ft — geometric length 13 ft", "Increase rise while holding run — see length change", "Add overhang separately when estimating stock length"],
    ["Using full building width instead of half-span run", "Forgetting unit consistency", "Treating geometric length as a code-compliant structural design"],
    "Confirm roof geometry on the plans and have structural sizing, connections, and local code checked by a qualified professional.",
    "This is a geometry estimate; structural design and building-code requirements are project-specific."
  ),
  "air-force-pt-calculator": audit(
    ["Air Force PT test score entry", "practice total from official fitness component points", "same assessment score intent as the Air Force PT Test Calculator"],
    "This legacy URL is retained as a search alias for the canonical Air Force PT Test Calculator. Both names refer to the same score-total task; do not maintain separate competing score pages.",
    ["Enter current-chart component points", "Review the total and each component", "Follow the canonical calculator for the single maintained method"],
    ["Using outdated score charts", "Treating raw performance as points", "Confusing an alias page with an official Air Force result"],
    "Use the current AFPC score charts and the canonical Air Force PT Test Calculator.",
    "Air Force fitness program guidance and charts are maintained by AFPC.",
    "https://www.afpc.af.mil/Career-Management/Fitness-Program/"
  ),
  "stair-calculator": audit(
    ["estimate stair riser count and height", "calculate stair run from rise and tread depth", "plan stair stringer geometry"],
    "Stair geometry can share one calculator, but code limits and comfortable proportions vary by jurisdiction and building use. Treat the output as a layout estimate, not approval.",
    ["108-inch rise with a 7.5-inch target — round riser count and recompute exact height", "Change tread depth — compare total run", "Check a deck stair layout before choosing stringer stock"],
    ["Rounding riser count without recalculating each riser", "Ignoring floor thickness or landing height", "Building from the estimate without checking local code"],
    "Measure finished floor-to-floor rise and verify riser, tread, handrail, landing, and headroom rules with the local authority.",
    "Local building codes govern stairs; the calculator only estimates geometry."
  ),
  "scientific-notation-calculator": audit(
    ["convert a number to scientific notation", "read coefficient and base-10 exponent", "convert exponential notation back to a decimal"],
    "Normalized scientific notation uses one nonzero leading digit before the decimal point and a power of ten. Small and large values use the same base-10 place-value rule.",
    ["12,300 — 1.23 × 10⁴", "0.0045 — 4.5 × 10⁻³", "Enter coefficient and exponent form — check the reconstructed value"],
    ["Moving the decimal without adjusting the exponent", "Using a coefficient outside the normalized range", "Rounding away significant figures needed by the problem"],
    "Multiply the coefficient by 10 raised to the exponent and compare with the original value.",
    "Scientific notation is a place-value representation; preserve significant figures appropriate to the measurement."
  ),
  "discount-calculator": audit(
    ["calculate percentage off and final sale price", "find discount amount or discount percentage", "compare a discounted price with optional added charges"],
    "A percent-off calculator needs the original price and discount rate. Tax, service fees, and stacked promotions apply in different sequences, so each step should be shown separately.",
    ["80 at 25% off — save 20 before extras", "Two sequential 10% discounts — effective reduction is 19%", "Add a charge only to the correct post-discount base"],
    ["Adding two successive discount percentages", "Applying a discount to the wrong price basis", "Comparing offers without checking quantity and delivery"],
    "Verify eligible items, minimum spend, discount order, and checkout total in the merchant's current offer terms.",
    "The tool performs arithmetic only; merchant conditions determine whether a promotion applies."
  ),
  "mortgage-payment-calculator": audit(
    ["estimate monthly mortgage principal and interest", "compare mortgage payments across entered rates and terms", "include user-entered taxes and insurance as separate costs"],
    "State-name searches do not justify separate state pages. Users can enter annual property tax and insurance for a broader monthly estimate; the page does not load current Idaho or other state rates.",
    ["Compare the same principal at two rates", "Shorter term — higher scheduled payment but a different total interest", "Add taxes and insurance as separate monthly estimates"],
    ["Assuming principal and interest are the full housing cost", "Mixing APR and note-rate conventions", "Treating the estimate as a lender approval or quote"],
    "Compare against a lender Loan Estimate and verify taxes, insurance, and closing costs from current local documents.",
    "The CFPB explains mortgage Loan Estimates and the costs borrowers should compare.",
    "https://www.consumerfinance.gov/owning-a-home/loan-estimate/"
  ),
  "work-hours-calculator": audit(
    ["calculate paid hours from shift start and end", "subtract unpaid breaks", "estimate gross pay from hours and an entered rate"],
    "A shift mode accepts decimal hours or 24-hour HH:MM clock times and handles overnight shifts. A separate hours-from-now mode adds a duration using the visitor's local device time; payroll and overtime rules remain outside the calculation.",
    ["09:00–17:30 with a 30-minute break — 8 paid hours", "22:00–06:00 — verify overnight handling", "Add 8 hours from now to see a local clock time"],
    ["Entering 5 hours 30 minutes as 5.3 hours", "Subtracting a paid break", "Applying an overtime rule without checking the applicable policy"],
    "Reconcile with clock records and the employer's timekeeping and overtime policy.",
    "The device clock supplies local time for the hours-from-now mode. The calculator does not determine legal overtime eligibility."
  ),
  "overtime-pay-calculator-global": audit(
    ["estimate gross overtime pay", "calculate overtime hours at a user-entered multiplier", "compare regular and overtime earnings"],
    "The same gross-pay equation serves overtime pay and overtime-hours searches. Eligibility, minimum rates, exemptions, and tax treatment depend on current local law and employment terms.",
    ["10 overtime hours at 20 per hour and 1.5× — 300 gross overtime pay", "Change the multiplier — compare gross totals", "Separate regular earnings from overtime premium"],
    ["Assuming 1.5× is universal", "Applying overtime to hours that are not eligible", "Calling gross pay take-home pay"],
    "Verify worker classification and multiplier against current local rules, contract, and payroll records.",
    "No local legal rate is loaded; users must enter a verified multiplier."
  ),
};

export const semrushBatchOneAudit: Record<string, Audit> = {
  ...semrushBatchOneAuditBase,
  ...semrushBatchOneAdditionalAudits,
  ...Object.fromEntries([
    ["money-counter-calculator", audit(["money counter", "cash and denomination counter", "bill and coin totals"], "This is for counting physical cash by denomination, whether entered manually or copied from a counting machine. Generic budgeting and currency conversion use different inputs and are excluded.", ["Enter matching denomination and count lists", "Use whole-number note and coin counts", "Enter decimal denominations for subunit coins"], ["Mismatching the two lists", "Treating counts as currency amounts", "Expecting exchange-rate conversion"], "Verify each denomination against the notes and coins being counted.", "The total is the sum of denomination × quantity; accepted denominations vary by currency.", "https://www.calculatorsoup.com/calculators/financial/money-calculator.php")],
    ["soil-calculator", audit(["topsoil calculator", "soil volume calculator", "garden bed soil estimate"], "Topsoil and soil calculator searches share the same rectangular volume calculation. Soil type changes density and weight, so this tool estimates volume rather than claiming a universal bag or tonnage count.", ["Convert bed depth from inches", "Compare cubic feet with cubic yards", "Add an allowance for settling and uneven ground"], ["Entering inches as feet", "Confusing square area with volume", "Assuming all soil has one bulk density"], "Recheck measured bed dimensions and confirm supplier bag volume or bulk density.", "Volume uses rectangular geometry; settling and soil composition are project-specific.", "https://extension.umn.edu/lawn-care/soil-preparation")],
    ["ffmi-calculator", audit(["fat-free mass index", "FFMI from body fat and height", "lean mass index calculation"], "FFMI expresses calculated fat-free mass relative to height squared. It is an index, not a diagnosis or a universal muscularity or health category.", ["Calculate fat-free mass from weight and body-fat percentage", "Convert height to metres", "Compare values only when measurement methods match"], ["Entering body-fat percentage as a decimal", "Using centimetres as metres", "Treating an index threshold as a medical conclusion"], "Check the body-fat estimate separately and recompute fat-free mass divided by height squared.", "FFMI is defined as fat-free mass divided by height squared; body-fat measurement uncertainty carries into the result.", "https://pubmed.ncbi.nlm.nih.gov/2398145/")],
    ["hex-calculator", audit(["hexadecimal calculator", "hex to decimal converter", "decimal to hexadecimal conversion"], "Hexadecimal conversion and arithmetic share integer base-16 inputs. This page accepts whole numbers only; fractions, signed binary encodings and bit-width-specific overflow rules are outside scope.", ["Convert 2F to decimal 47", "Convert decimal 255 to hexadecimal FF", "Add two hexadecimal integers"], ["Using digits outside 0–9 and A–F", "Expecting decimal fractions", "Assuming a negative value uses a particular computer encoding"], "Convert the result to decimal and verify it with an independent base-conversion check.", "Integer arithmetic uses base-16 notation; output values are limited to JavaScript's safe integer range.", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt")],
    ["dunk-calculator", audit(["dunk calculator", "vertical jump needed to dunk", "basketball rim clearance"], "Dunk reach is standing reach plus jump height, compared with the entered rim height. The calculation measures vertical reach only; hand size, ball control, approach technique and takeoff conditions matter too.", ["Enter standing reach and measured vertical jump", "Use a 10 ft rim only when that is the actual rim height", "Compare clearance above the rim"], ["Using total standing height instead of reach", "Mixing feet and inches", "Assuming touching the rim guarantees a controlled dunk"], "Measure standing reach and jump with the same units and repeat the jump measurement consistently.", "Simple reach geometry; it does not assess basketball skill or safety.")],
    ["mare-gestation-calculator", audit(["mare gestation period", "horse pregnancy calculator", "estimated foaling date"], "A 340-day midpoint and a broad 320–360 day planning window help organize preparation, but mare gestation varies and a breeding date may not equal conception date.", ["Enter the breeding date", "Use the midpoint only as a planning marker", "Prepare across the broad window"], ["Treating 340 days as a guaranteed due date", "Ignoring ovulation or multiple breeding dates", "Using a calculator instead of veterinary care for concerns"], "Confirm breeding records with the veterinarian and ask for advice if the mare shows signs of distress or overdue complications.", "Colorado State University Veterinary Teaching Hospital describes an average near 340 days and a broad normal range; individual mares vary.", "https://vetmedbiosci.colostate.edu/vth/animal-health/horse-gestation/")],
    ["linear-feet-calculator", audit(["linear feet calculator", "total linear footage", "feet and inches multiplied by quantity"], "Linear footage adds lengths along one dimension. It is different from square footage, which measures area, and it does not include trim waste or cut optimization.", ["Convert inches to fractions of a foot", "Multiply a repeated cut length by quantity", "Add separate runs before ordering"], ["Using square feet instead of linear feet", "Forgetting the piece count", "Rounding each cut before summing"], "Compare the total with a cut list and round purchasing quantity according to the supplier's sales unit.", "One foot equals 12 inches; order allowance depends on cuts, joints and stock length.", "https://www.nist.gov/pml/owm/metric-si/si-units-length")],
    ["water-intake-calculator", audit(["daily water intake calculator", "water consumption estimate", "how much water to drink per day"], "The result compares intake with population adequate-intake references for total water. The reference includes water from food and every beverage; it is not a prescription for plain drinking water or an individual requirement.", ["Choose the adult reference group", "Compare total intake from food and drinks", "Consider climate, activity, pregnancy, illness and clinician guidance"], ["Treating the reference as a mandatory target", "Counting only plain water against total-water intake", "Ignoring fluid restrictions or medical advice"], "Use National Academies guidance for context and consult a clinician about individual needs or fluid restrictions.", "National Academies adult adequate intakes are 3.7 L/day for men and 2.7 L/day for women, including food moisture; these are population references, not requirements for every person.", "https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate")],
    ["steps-to-miles-calculator", audit(["steps to miles", "miles to steps", "walking distance from step count"], "Distance conversion depends on average step length. The result is an estimate because stride varies with pace, terrain and the person walking.", ["Enter steps and personal step length", "Use reverse mode for a target distance", "Keep step length in inches"], ["Assuming everyone takes the same number of steps per mile", "Confusing a step with a full stride", "Comparing estimates from different stride assumptions"], "Compare the estimate with a mapped or GPS-recorded walk and adjust the step length to your own average.", "Uses 63,360 inches per mile and the entered average step length.")],
    ["minecraft-circle-generator", audit(["Minecraft circle generator", "pixel circle chart", "block circle pattern"], "The generator creates a symmetric raster approximation for a block build. Small diameters cannot form a perfectly smooth Euclidean circle on a square grid, so the row pattern is a practical pixel layout.", ["Choose an odd block diameter", "Select outline or filled disk", "Copy the displayed rows from top to bottom"], ["Expecting a mathematically smooth curve from square blocks", "Reversing row order", "Assuming the build grid includes an extra border"], "Count the grid width and compare opposing rows for symmetry before placing blocks.", "Rasterized grid pattern; block placement is a visual approximation.")],
    ["density-altitude-calculator", audit(["density altitude calculator", "pressure altitude and temperature", "aviation density altitude estimate"], "This uses the common rule-of-thumb approximation from pressure altitude and outside-air temperature. It is educational and should not replace a current approved aviation performance calculation.", ["Use pressure altitude, not field elevation alone", "Enter outside temperature in Celsius", "Compare with current aircraft performance data"], ["Entering indicated altitude without pressure correction", "Using Fahrenheit in a Celsius field", "Treating an estimate as a takeoff or landing performance decision"], "Verify pressure altitude, temperature and aircraft-specific performance using current official flight-planning information.", "FAA materials describe density altitude as pressure altitude corrected for nonstandard temperature; this calculator applies an approximation.", "https://www.faa.gov/sites/faa.gov/files/2022-01/FAA_Safety_Briefing_2021-11.pdf")],
    ["height-calculator", audit(["child height calculator", "parental height predictor", "adult height estimate"], "This page uses the simple mid-parental target-height estimate, not Khamis–Roche. Khamis–Roche requires age- and sex-specific published regression coefficients and has a population-specific validation scope; this tool does not claim to implement it.", ["Enter both parents' heights in inches", "Choose the estimate group", "Read the result as a rough family-height guide"], ["Treating the estimate as a growth forecast", "Using different units for parent heights", "Using it instead of pediatric growth assessment"], "Discuss growth concerns with a pediatric clinician who can review growth charts and health history.", "The mid-parental method is a rough estimate; the Khamis–Roche study was developed in a specific white American child cohort and is not universal.", "https://pubmed.ncbi.nlm.nih.gov/7936860/")],
    ["weighted-mean-calculator", audit(["weighted mean calculator", "weighted average of values", "grades weighted by credits"], "Use one value and corresponding non-negative weight per position. The weights can represent credits, frequency, importance or sample size, but they must fit the question being modeled.", ["Enter paired values and weights", "Use zero weight to exclude a value", "Check the total weight before interpreting the average"], ["Entering unequal list lengths", "Using negative weights accidentally", "Confusing a weighted mean with a median"], "Recompute the sum of value-times-weight and divide by the sum of weights.", "The weighted arithmetic mean is Σ(value × weight) divided by Σ(weight).")],
    ["yardage-calculator", audit(["fabric yardage calculator", "fabric length for repeated pieces", "sewing yardage estimate"], "This basic layout estimate repeats equal rectangular pieces across a single usable fabric width and compares two orientations. It does not solve complex nesting, patterns, nap direction or garment-size cutting layouts.", ["Enter cut dimensions and quantity", "Use actual usable width after selvages", "Add waste for seams, pattern matching or directional fabric"], ["Using bolt width instead of usable width", "Ignoring pattern repeat or nap", "Treating a simple strip layout as a full cutting plan"], "Test a paper-scale layout or consult the pattern's cutting guide before purchasing fabric.", "Rows are packed across the stated width; yardage is a geometric estimate with entered waste only.")],
    ["mean-standard-deviation-calculator", audit(["mean and standard deviation", "sample standard deviation", "population standard deviation"], "The sample formula divides squared deviations by n−1 and estimates spread from a sample. The population formula divides by n when the entered values are the full population of interest.", ["Enter values separated by commas", "Select population for a complete group", "Select sample when estimating from a sample"], ["Choosing the wrong divisor", "Using too few values for sample SD", "Comparing standard deviations from different units"], "Recalculate the mean and squared deviations, then confirm whether the data represents a sample or the whole population.", "Uses the standard arithmetic mean and population/sample standard deviation definitions.")],
    ["visceral-fat-calculator", audit(["visceral fat estimate", "visceral adipose tissue area", "waist and proximal thigh equation"], "The calculator uses Samouda et al.'s sex-specific anthropometric model in adults. The study's development/validation population was in southern France; the equation is not an imaging result and may not generalize to every population.", ["Measure waist and proximal thigh in centimetres", "Enter age and BMI for the women's equation", "Treat the area result as a rough model estimate"], ["Using hip instead of proximal thigh circumference", "Entering inches while expecting centimetres", "Treating an estimated area as a diagnosis"], "Use clinical assessment or imaging when a direct VAT measurement is needed; discuss health questions with a clinician.", "The published equations report VAT area in cm² and include substantial standard error; population transfer is uncertain.", "https://pmc.ncbi.nlm.nih.gov/articles/PMC3618381/")],
    ["body-fat-calculator", audit(["U.S. Navy body fat estimate", "body fat percentage calculator", "fat percentage estimate from tape measurements"], "This page provides the classic circumference equation as a rough body-fat estimate. Current Navy assessment procedures and measurement sites can change; the result is not an official fitness or enlistment decision.", ["Measure height, abdomen/waist and neck in inches", "For women, also enter hip circumference", "Repeat tape measurements consistently"], ["Using centimetres in an inches-based equation", "Measuring at a different anatomical site", "Using the result to determine eligibility"], "Follow the current official Navy guide for its measurement sites and eligibility process, and verify any service decision with the responsible authority.", "Current MyNavyHR Guide 4 is the controlling reference for official Body Composition Assessment; this page labels the classic equation as an estimate.", "https://www.mynavyhr.navy.mil/Portals/55/Support/Culture%20Resilience/Physical/Guide-4%20Body%20Composition%20Assessment.pdf")],
  ].map(([slug, value]) => [slug, value])),
  "army-waist-height-ratio-calculator": {
    keywordThemes: ["Army waist-to-height ratio check", "waist and height measured in matching units", "current Army body-composition screening guidance"],
    interpretation: "The Army's current policy uses waist-to-height ratio screening rather than the retired tape/body-fat estimate for the ordinary calculation. This ratio is not a medical body-fat percentage and policy details can change.",
    scenarios: ["34-inch waist ÷ 70-inch height — ratio 0.486", "Same ratio with centimetres — units cancel when both match", "Near a threshold — repeat measurements using the official technique"],
    mistakes: ["Calling WHtR a body-fat percentage", "Measuring at a different waist landmark", "Using mismatched units or relying on an unofficial result"],
    verification: "Follow the latest Army measurement instructions and confirm applicability, exemptions, and any official decision with the responsible unit.",
    sourceNote: "Army ABCP FAQ: measure waist at the navel and divide by height in matching units. Check the current policy before use.",
    sourceUrl: "https://www.army.mil/e2/downloads/rv7/tyf/ABCP_FAQ.pdf",
  },
  "ap-world-score-calculator": {
    ...semrushBatchOneAuditBase["ap-world-score-calculator"],
    sourceUrl: "https://apcentral.collegeboard.org/courses/ap-world-history/exam",
  },
  "payment-calculator": {
    ...semrushBatchOneAuditBase["payment-calculator"],
    keywordThemes: ["loan and monthly payment calculator", "annual payment calculator", "annuity payout calculator mode", "mortgage payment with separate taxes and insurance"],
    interpretation: "Fixed loan installments and a level annuity payout are both supported as explicitly selected modes. Mortgage taxes and insurance, credit-card payoff, and extra car-loan payments use different inputs and link to their dedicated calculators; state names do not justify duplicate mortgage pages.",
    relatedCalculators: [{title:"Mortgage Payment Calculator",slug:"mortgage-payment-calculator"},{title:"Credit Card Payoff Calculator",slug:"credit-card-payoff-calculator"},{title:"Loan Early Payment Calculator",slug:"loan-early-payment-calculator"}],
  },
  "interest-rate-calculator": {
    ...semrushBatchOneAuditBase["interest-rate-calculator"],
    sourceUrl: "https://www.consumerfinance.gov/rules-policy/regulations/1030/a/",
    keywordThemes: ["solve the compound rate from two balances", "project savings or CD growth from an entered rate", "compare monthly and annual compounding"],
    interpretation: "Use the solve-rate mode for balances with no intermediate deposits or withdrawals, or switch to project, CD, FD or APY mode for a savings or fixed-deposit balance. Nominal deposit modes use user-entered compounding; APY mode does not compound an annual yield twice. FHA loan quotes use mortgage terms and market disclosures, so compare them with a mortgage payment estimate instead of treating them as a savings yield.",
    relatedCalculators: [{title:"Mortgage Payment Calculator",slug:"mortgage-payment-calculator"}],
  },
  "ratio-calculator": {
    ...semrushBatchOneAuditBase["ratio-calculator"],
    relatedCalculators: [{title:"Aspect Ratio Calculator",slug:"aspect-ratio-calculator"},{title:"Fraction Calculator",slug:"fraction-calculator"}],
  },
  "401k-calculator": {
    ...semrushBatchOneAuditBase["401k-calculator"],
    keywordThemes: ["401(k) balance and contribution projection", "Roth versus traditional 401(k) comparison with entered tax assumptions", "simplified 401(k) withdrawal tax estimate"],
    interpretation: "Projection, Roth comparison, and withdrawal estimate are separate calculator modes because they answer different questions. The Roth comparison uses user-entered current and future rates; the withdrawal estimate cannot determine taxable basis, exceptions, plan restrictions, or a filing-specific tax bill.",
    scenarios: ["Project balance — add employee and entered employer contributions", "Compare Roth/traditional — enter current and future tax rates", "Estimate withdrawal — enter a tax rate and any applicable penalty assumption"],
    verification: "Check plan terms and current IRS contribution, distribution, and exception rules before acting.",
    sourceUrl: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits",
    secondarySourceUrl: "https://www.irs.gov/retirement-plans/plan-participant-employee/401k-resource-guide-plan-participants-general-distribution-rules",
  },
  "overtime-pay-calculator-global": {
    ...semrushBatchOneAdditionalAudits["overtime-pay-calculator-global"],
    sourceUrl: "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay",
  },
  "cone-volume-calculator": {
    keywordThemes: ["cone volume calculator", "volume of cone", "volume-cone", "volume of a conical shape", "cone volume formula", "how to find the volume of a cone"],
    interpretation: "These phrases share one geometry task: calculate cone volume from radius and perpendicular height using V = πr²h/3. Enter radius rather than diameter; other solid shapes need their own formula.",
    scenarios: ["Radius 3 and height 4 — volume 12π", "Enter diameter only after dividing it by two", "Compare cubic units after keeping radius and height consistent"],
    mistakes: ["Using diameter as radius", "Using slant height instead of perpendicular height", "Forgetting the one-third factor"],
    verification: "Substitute the entered radius and height into V = πr²h/3 and confirm the result uses cubic units.",
    sourceNote: "Uses the standard geometric volume formula for a right circular cone.",
  },
  "air-force-pt-test-calculator": {
    ...semrushBatchOneAdditionalAudits["air-force-pt-test-calculator"],
    keywordThemes: ["AF PT calculator", "Air Force PT calculator", "Air Force PT test calculator"],
  },
  "fraction-calculator": {
    ...semrushBatchOneAuditBase["fraction-calculator"],
    keywordThemes: ["fraction calculator", "fraction to fraction calculator", "mixed fraction calculator", "fraction calculator with whole numbers"],
    interpretation: "The fraction-to-fraction intent is handled by the existing add, subtract, multiply and divide modes. The result remains a fraction and can be reduced; no second URL is needed for that wording.",
  },
  "grade-calculator": {
    scenarios: ["Enter current category grades and weights", "Calculate a needed final score for a target course grade", "Change a category weight to match the course syllabus"],
    mistakes: ["Assuming SolvePilot connects to a Schoology account", "Entering category weights that do not total 100%", "Ignoring extra credit, dropped scores or course-specific rules"],
    verification: "Compare entered grades and weights with the Schoology course page and syllabus; the instructor's gradebook is authoritative.",
    sourceNote: "Manual grade estimate only; SolvePilot does not access or integrate with Schoology.",
    keywordThemes: ["grade calculator", "final grade calculator", "Schoology grade calculator", "score needed on final"],
    interpretation: "Schoology grade calculator searches can use this page to calculate from grades and weights entered by the student. It does not connect to Schoology or read course records; the grading policy and category weights must be entered manually.",
  },
  "credit-card-payoff-calculator": {
    keywordThemes: ["credit card payoff calculator", "credit card pay off calculator", "credit card debt payoff calculator", "credit card payoff estimator", "calculate credit card payoff"],
    interpretation: "These keyword variants ask how long a credit-card balance takes to repay and how much interest is paid under the entered payment assumptions. Statement timing, changing APRs, fees and new purchases can change the issuer's exact result.",
    scenarios: ["Enter a balance, APR and fixed monthly payment", "Increase the payment to compare payoff time and interest", "Check whether the payment covers the monthly interest"],
    mistakes: ["Assuming the APR and balance never change", "Ignoring fees or additional purchases", "Treating an estimate as the issuer payoff quote"],
    verification: "Compare assumptions with the latest card statement and issuer payoff information; verify the payment clears accrued interest.",
    sourceNote: "Monthly estimate using a fixed payment and entered APR; issuer billing methods can differ.",
  },
  "voltage-drop-calculator": {
    scenarios: ["Estimate drop for a one-way conductor run", "Compare conductor resistance and current", "Review voltage drop as a percent of source voltage"],
    mistakes: ["Using round-trip length when the formula already doubles one-way length", "Ignoring conductor temperature and material", "Treating an estimate as electrical design approval"],
    verification: "Confirm conductor, material, temperature, phase and installation details with current electrical references and a qualified electrician.",
    sourceNote: "Estimate depends on entered conductor resistance and circuit assumptions; this page is not affiliated with Southwire.",
    keywordThemes: ["voltage drop calculator", "voltage loss calculator", "voltage drop calculations", "Southwire voltage drop calculator"],
    interpretation: "This is a transparent voltage-drop estimate for the entered conductor assumptions. The Southwire phrase is treated as a search variant only: SolvePilot is not affiliated with or endorsed by Southwire, and the page does not reproduce its proprietary tools or tables.",
  },
  "circle-skirt-calculator": {
    keywordThemes: ["circle skirt calculator"],
    interpretation: "Calculate the waist radius and cutting radius for the selected arc fraction. Fabric layout depends on fabric width, pattern-piece arrangement, nap and grain direction, so the width check is guidance rather than a cutting pattern.",
    scenarios: ["Full-circle skirt — calculate one complete arc", "Half-circle skirt — use half the waist arc", "Quarter-circle skirt — compare a narrower pattern shape"],
    mistakes: ["Using waist diameter as circumference", "Leaving out seam or hem allowance", "Assuming the flat cutting diameter always fits the fabric width"],
    verification: "Measure the waist and finished length on the body or pattern, then test the cutting radius on the actual fabric layout before cutting.",
    sourceNote: "Pattern estimate based on circumference and circle-sector geometry; fit and construction allowances are user-defined.",
  },
  "cross-stitch-calculator": {
    keywordThemes: ["cross stitch calculator"],
    interpretation: "Convert chart stitch counts into stitched dimensions using the fabric's stitches-per-inch count, then add the selected border on every edge. Finishing and framing allowances vary by project.",
    scenarios: ["14-count fabric — divide stitch dimensions by 14", "Higher-count fabric — the same chart finishes smaller", "Add a 3-inch border on all four sides for finishing"],
    mistakes: ["Entering centimetres as inches", "Using fabric count as a multiplier instead of divisor", "Confusing stitched size with fabric cut size"],
    verification: "Check the fabric count label and stitch count on the chart, and confirm the margin with your finishing or framing method.",
    sourceNote: "Fabric dimensions are geometric estimates from chart stitch count and fabric count; finishing allowance is user-selected.",
  },
  "hypergeometric-calculator": {
    keywordThemes: ["hypergeometric calculator", "hypergeometric probability calculator", "sampling without replacement probability"],
    interpretation: "Use the hypergeometric distribution when a fixed-size sample is drawn without replacement from a finite population. The page reports exact-count and at-most probabilities plus mean and standard deviation.",
    scenarios: ["Cards — count aces in a five-card hand", "Quality sampling — estimate defect counts in a finite batch", "Classroom problem — compare exactly x with at most x successes"],
    mistakes: ["Using a binomial model when draws are without replacement", "Entering successes greater than population size", "Mixing P(X = x) with cumulative P(X ≤ x)"],
    verification: "Check that population, success count and draw count match the experiment; compare a small case with direct combinations.",
    sourceNote: "Uses the hypergeometric probability mass function and its finite-population mean and variance.",
  },
  "stud-calculator": {
    keywordThemes: ["stud calculator", "wall stud calculator", "stud count calculator"],
    interpretation: "Estimate base wall-stud positions from a straight wall run and on-center spacing, then add extra positions and a waste allowance. Corners, openings and structural requirements need a project-specific framing plan.",
    scenarios: ["12-foot wall at 16-inch spacing", "Compare 16-inch and 24-inch on-center layouts", "Add extra studs for openings and corners"],
    mistakes: ["Entering stud spacing in feet", "Forgetting end positions", "Using a count estimate as a structural design or code decision"],
    verification: "Confirm the wall layout, openings, lumber dimensions and local requirements with approved plans or a qualified builder.",
    sourceNote: "Quantity estimate uses ceiling(length ÷ spacing) plus end positions; framing details are project-specific.",
  },
  "ap-statistics-score-calculator": {
    keywordThemes: ["AP Statistics score calculator", "AP Stats grading calculator", "AP Stats score calculator"],
    interpretation: "This practice calculator uses a 50% multiple-choice and 50% free-response composite for the current exam format. The weighted percentage is not an official AP score from 1 to 5; College Board score setting and exam specifications may vary by administration.",
    scenarios: ["Enter the multiple-choice practice percentage", "Enter the free-response practice percentage", "Compare section balance using the same practice exam"],
    mistakes: ["Calling the composite an official 1–5 AP score", "Using percent correct where rubric points are expected", "Using outdated exam weights"],
    verification: "Review the current AP Statistics exam description and released scoring resources for the administration you are preparing for.",
    sourceNote: "College Board is authoritative for AP Statistics exam structure and official score reporting.",
    sourceUrl: "https://apcentral.collegeboard.org/courses/ap-statistics/exam",
  },
  "board-foot-calculator": {
    interpretation: "Board-foot terminology variants share one lumber-volume calculation: thickness in inches times width in inches times length in feet divided by 12, multiplied by quantity. Confirm whether listed dimensions are nominal or actual.",
    scenarios: ["Calculate board feet for one board", "Multiply by quantity for a lumber list", "Compare nominal and actual dimensions"],
    mistakes: ["Entering length in inches without conversion", "Omitting board quantity", "Assuming nominal dimensions equal actual measured size"],
    verification: "Check board dimensions and quantity on the supplier list or lumber measurement before ordering.",
    sourceNote: "Uses the standard board-foot volume relationship; supplier measurement conventions may differ.",
    keywordThemes: ["board feet calculator", "board foot calculator", "bd ft calculator", "how to calculate board feet"],
  },
  "soffit-calculator": {
    keywordThemes: ["soffit calculator", "soffit material estimator", "soffit panel calculator"],
    interpretation: "Estimate coverage area, panel rows and linear footage from eave length and soffit projection. Actual panel face coverage, ventilation, corners and cuts affect the order quantity.",
    scenarios: ["Measure eave runs and total their lengths", "Compare panel rows using the stated face coverage", "Add a modest waste allowance for cuts"],
    mistakes: ["Using nominal panel width instead of face coverage", "Omitting returns and corners", "Treating this quantity estimate as a ventilation or building-code design"],
    verification: "Check panel coverage and ventilation requirements in the selected manufacturer's current installation guide and project plans.",
    sourceNote: "Area and panel quantity are geometric estimates; product coverage and code requirements vary.",
  },
  "ap-english-language-and-composition-score-calculator": {
    keywordThemes: ["AP English Language and Composition score calculator", "AP English Language score calculator", "AP Lang score calculator"],
    interpretation: "The practice composite uses the published 45% multiple-choice and 55% free-response section weights, with three essay rubric scores entered out of six. It is not an official AP score from 1 to 5; College Board score setting can change by exam year.",
    scenarios: ["Enter MCQ correct answers out of 45", "Enter each of the three FRQ rubric scores out of 6", "Change one section score to compare practice performance"],
    mistakes: ["Treating the composite percentage as an official AP score", "Using rubric points from a different exam", "Assuming a fixed percentage guarantees a 1–5 score"],
    verification: "Use the current AP English Language and Composition exam description and released scoring materials for the administration you are preparing for.",
    sourceNote: "College Board is authoritative for current exam structure, rubrics and official score reporting.",
    sourceUrl: "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/exam",
  },
};

const baseAuditForTool=(tool:Tool)=>{
 if(roadmapGap20Audit[tool.slug])return roadmapGap20Audit[tool.slug];
 if(roadmapDeferredAudit[tool.slug])return roadmapDeferredAudit[tool.slug];
 if(roadmap423Audit[tool.slug])return roadmap423Audit[tool.slug];
 if(roadmap369Audit[tool.slug])return roadmap369Audit[tool.slug];
 if(roadmap328Audit[tool.slug])return roadmap328Audit[tool.slug];
 if(roadmap268Audit[tool.slug])return roadmap268Audit[tool.slug];
 if(next20Audit[tool.slug])return next20Audit[tool.slug];
 if(roadmap206Audit[tool.slug])return roadmap206Audit[tool.slug];
 if(roadmap186Audit[tool.slug])return roadmap186Audit[tool.slug];
 if(tool.slug==='compound-interest-calculator')return{keywordThemes:['compound interest calculator','voo calculator','monthly contributions','nominal versus effective annual return'],interpretation:'A user-supplied constant-return illustration with month-end contributions. No VOO price feed, historical return, product recommendation, taxes or fees are inferred. Total-return assumptions already including reinvested distributions must not have dividends added again.',scenarios:['Zero return: 1,000 plus twelve contributions of 100 gives 2,200.','12% effective annual return with no contributions: 1,000 grows to 1,120 in one year.','12% nominal annual rate: 1% monthly, which differs from a 12% effective annual return.'] as [string,string,string],mistakes:['Mixing nominal rates with effective annual returns.','Adding dividends twice to a total-return assumption.','Treating a constant-return scenario as a VOO forecast.'] as [string,string,string],verification:'Use the zero-return case to verify contributions, then check a one-year effective-return case without contributions. Reconcile the return basis with product disclosures; market returns vary.',sourceNote:'Vanguard explains ETFs as investment products; SolvePilot supplies only independent user-assumed arithmetic and does not retrieve product performance.',sourceUrl:'https://investor.vanguard.com/investor-resources-education/etfs/what-is-an-etf',secondarySourceUrl:'https://investor.vanguard.com/investment-products/etfs/profile/voo',relatedCalculators:[{slug:'basis-points-calculator',title:'Basis Points Calculator'},{slug:'investment-fee-calculator',title:'Investment Fee Calculator'},{slug:'dividend-reinvestment-calculator',title:'Dividend Reinvestment Calculator'}]};
 const audit=roadmap166Audit[tool.slug]||roadmap146Audit[tool.slug]||roadmap126Audit[tool.slug]||roadmap106Audit[tool.slug]||semrushBatchOneAudit[tool.slug];
 if(!audit)return audit;
 const guideLink=(["air-force-pt-test-calculator","army-waist-height-ratio-calculator"].includes(tool.slug))?{slug:"military-pt-test-calculator-guide",title:"Military PT Test: official charts and point totals",path:"/guides/military-pt-test-calculator-guide/"}:(["molarity-calculator","abg-calculator"].includes(tool.slug))?{slug:"bpc-157-tb-500-blend-calculator-guide",title:"Peptide calculator evidence and clinical limits",path:"/guides/bpc-157-tb-500-blend-calculator-guide/"}:null;
 const related=guideLink?{...audit,relatedCalculators:[...(audit.relatedCalculators||[]),guideLink]}:audit;
 const terms=[...roadmap166Keywords,...roadmap186Keywords].filter(k=>k.slug===tool.slug).map(k=>k.keyword);
 if(tool.slug==='grade-curve-calculator')return{...related,keywordThemes:[...new Set([...audit.keywordThemes,...terms])],interpretation:'Additive shifts or an explicit linear z-score rescaling, followed by clipping to the score range. Linear rescaling does not produce a Gaussian distribution or assign letter grades.',scenarios:['70, 80, 90; shift highest to 100: 80, 90, 100.','70, 80, 90; target mean 75 and target population SD 10: approximately 62.753, 75, 87.247 before any clipping.','Identical class scores: SD is zero, so z-score mode is undefined.'] as [string,string,string],verification:'Verify the original population SD, apply target mean + original z-score × target SD, then check whether clipping changes the desired mean or spread. Existing highest mode remains an additive shift.',sourceNote:'Original disclosed arithmetic; an institutional grading policy is not inferred.'};
 if(!terms.length)return related;
 return{...related,keywordThemes:[...new Set([...audit.keywordThemes,...terms])],...(tool.slug==='mean-standard-deviation-calculator'?{sourceUrl:'https://pmc.ncbi.nlm.nih.gov/articles/PMC1255808/',sourceNote:'Altman and Bland distinguish observation standard deviation from sample-mean standard error; SEM = sample SD/√n under the appropriate independent-sampling assumptions.'}:{}),...(tool.slug==='dog-pregnancy-calculator'?{sourceUrl:'https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-dogs-and-cats/whelping-and-queening-in-bitches-and-queens',sourceNote:'Merck Veterinary Manual distinguishes broad breeding-date timing from a veterinarian-established ovulation basis. No pregnancy or condition diagnosis is made.'}:{})};
};

export const auditForTool=(tool:Tool)=>enhanceNext20(tool,enhanceRoadmap206(tool,baseAuditForTool(tool)));
