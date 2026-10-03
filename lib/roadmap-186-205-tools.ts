import type {Tool} from "./tools";
export const roadmap186Tools:Tool[] = [
  {
    "slug": "percent-calculator",
    "title": "Percent Calculator — Difference, Change, Parts and Time",
    "shortTitle": "Percent Calculator",
    "category": "Everyday",
    "description": "Calculate percent difference, percentage change, parts, reverse percentages and time shares with clear formulas and a choice of calculation modes.",
    "intro": "This percent calculator answers several different questions without treating every pair of numbers as the same calculation. Find a percentage of a number, express a part as a percentage, recover the original whole, compare two measurements using relative percent difference, or measure an increase from an original baseline. Additional modes convert decimals, combine percentages, apply increases or reductions, and compare elapsed durations. Select the question first: the labels and denominator change with the mode. That choice matters more than how many decimal places appear in the answer. The page is an independent percentage calculations hub; it does not represent another calculator provider or an examination board.",
    "formula": "Part percentage = 100 × part/whole. Percentage change = 100 × (new − original)/original. Mean-based RPD = 100 × |A − B|/((A+B)/2). Percentage of number = percentage × whole/100.",
    "example": "For 80 and 100, percentage change from 80 is +25%, but mean-based percentage difference is 20/90 × 100 = 22.222222%. For the percentage of 3/2, enter part 3 and whole 2: the answer is 150%.",
    "howTo": [
      "Choose the mode that matches the question, especially difference versus change.",
      "Enter quantities in matching units; duration mode accepts HH:MM or HH:MM:SS.",
      "Read which value is the whole, original baseline or percentage before submitting.",
      "Click Calculate result and record the mode with the answer."
    ],
    "considerations": [
      {
        "title": "How to calculate percentage of a number",
        "text": "Divide the stated percentage by one hundred and multiply by the number. Twenty percent of eighty is sixteen. In Percentage of number mode the first field is the percentage, while the second is the whole. A percentage above one hundred is mathematically possible and gives more than the original number. Signed arithmetic is accepted in this mode, but a negative result needs a context such as a signed adjustment; it does not automatically describe a physical count."
      },
      {
        "title": "How to find the percentage of two numbers",
        "text": "Use Part as percentage when one quantity belongs to an identified whole. Divide the part by the whole, then multiply by one hundred. Three out of two gives one hundred fifty percent; the formula does not cap a valid ratio at one hundred. For marks, earned points divided by available points gives a marks percentage. A search for 10th percentage can mean this arithmetic, but subject weighting, GPA conversion, pass conditions and board-specific grades require the actual examination rules."
      },
      {
        "title": "Percentage difference and relative percent difference",
        "text": "RPD compares two non-negative quantities without naming either as the original. This calculator divides the absolute difference by their arithmetic mean. Reversing the values therefore leaves RPD unchanged. Some software uses another denominator, including the larger absolute value, so state the mean-based definition when reporting a comparison. Two zero values have a zero absolute difference but no positive relative denominator; the tool reports that RPD is undefined. Compare quantities with the same units, measurement basis and meaningful scale."
      },
      {
        "title": "Percentage increase and reduction",
        "text": "Percentage change is directional: eighty to one hundred is an increase of twenty-five percent, while one hundred to eighty is a decrease of twenty percent. Original values must be positive in this mode. Increase by percentage and Reduce by percentage instead apply a supplied percentage to an amount. A twenty-percent reduction followed by a twenty-percent increase does not restore the starting amount because the second adjustment uses a smaller base. Reduction mode is limited to zero through one hundred percent."
      },
      {
        "title": "Find numbers from percentages",
        "text": "Reverse percentage mode is for a known part and its percentage of an unknown whole. If sixteen is twenty percent, divide sixteen by 0.20 to recover eighty. Do not enter a final sale price as if it were the discount amount: after a twenty-percent discount, the final price is eighty percent of the original. The corresponding reverse input is the final price and eighty, not twenty. A zero percentage cannot recover a unique whole, so it is rejected rather than returning infinity."
      },
      {
        "title": "Decimal conversion and percentage of percentage",
        "text": "Decimal to percent multiplies a fraction by one hundred. Enter 0.125 to obtain 12.5%, not 0.125%. The second field is unused in this mode. Percentage of percentage multiplies the two percentage values and divides by one hundred to express the answer as a percentage of the original whole: fifty percent of twenty percent is ten percent. The tool also gives the decimal fraction, 0.10. Nested percentages multiply; unrelated shares may need to be added under a clearly defined common total."
      },
      {
        "title": "Time percentage with durations",
        "text": "The time percentage calculator parses hours, minutes and optional seconds before dividing elapsed duration by total duration. Enter 01:30 and 02:00 for seventy-five percent. These are durations rather than clock times: 25:00 represents twenty-five hours. Minute and second components must be below sixty. Decimal hours are not accepted in this mode; one hour thirty minutes is 01:30, not 01:50. An elapsed duration above the total can legitimately show more than one hundred percent, such as an overrun."
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate percent difference between two numbers?",
        "answer": "Select RPD, enter two non-negative quantities and divide their absolute difference by the average. For forty and sixty the difference is twenty and the average is fifty, giving forty percent. Use change mode if the first value is a historical baseline."
      },
      {
        "question": "Is a difference of two percentages a percentage change?",
        "answer": "Subtracting forty percent from fifty percent gives ten percentage points. Relative change from forty to fifty is twenty-five percent. Enter numeric rates in change mode for the relative change; use the basis-points tool when reporting financial rate-point changes."
      },
      {
        "question": "Can the calculator find an unknown whole?",
        "answer": "Yes. Reverse mode divides the known part by the supplied percentage as a decimal. Verify by multiplying the recovered whole by that decimal. The percentage must be nonzero; there is no unique whole associated with a zero-percent part."
      },
      {
        "question": "Does difference calculator cover dates or algebra?",
        "answer": "Here it covers numerical absolute and relative differences. Date differences, symbolic equations and geometry are separate tasks with their own inputs. Do not treat the generic difference query as evidence that two numbers can answer every subtraction-related question."
      },
      {
        "question": "How can I check percentage calculations?",
        "answer": "Use a simple case such as twenty-five percent of two hundred equaling fifty, or a part equal to the whole yielding one hundred percent. Keep units consistent and retain unrounded values during later calculations. Display precision is not evidence of measurement accuracy."
      }
    ],
    "limitations": "Finite inputs are bounded to ±10¹². RPD supports non-negative values with a positive mean; change requires a positive original. This is arithmetic, not a grading policy or financial recommendation.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "how to calculate percentage",
      "what is the percentage of 3/2",
      "percentage calculators hub",
      "percent difference calculator",
      "what is the percentage of",
      "how to find the percentage of two numbers",
      "rpd calculator",
      "how to find percentage",
      "how to calculate percentage difference",
      "percentage difference",
      "how to find numbers from percentage",
      "pct calculator",
      "how to find percentage of two numbers",
      "how do you calculate difference in percentage between two numbers",
      "10th percentage",
      "how to calculate percent difference",
      "how to find percentage difference",
      "how to calculate percentage difference between two figures",
      "how to calculate percentages",
      "how to find the percentage of a number",
      "how to get percentage of two numbers",
      "how to get percentage",
      "time percentage calculator",
      "calculate percent difference",
      "difference percentage calculator",
      "how can i do percentage",
      "how do you calculate the percentage difference between two numbers",
      "calculate percentage difference",
      "how do i find the percentage of a number",
      "change into percentage",
      "percentage reduction calculator",
      "find percentage online",
      "how to find the percentage difference between two numbers",
      "find percentage difference",
      "percentage difference between two numbers",
      "how to calculate a percentage",
      "how to calculate percent difference between two numbers",
      "how do you calculate a percentage on a calculator",
      "how do you calculate percentages",
      "how to calculate percentage difference between two numbers",
      "how to work out the percentage difference between two numbers",
      "how do i figure the percentage of something",
      "calculation of percentage difference between two numbers",
      "difference calculator",
      "how do you figure out percentage increase between two numbers",
      "how do you convert numbers into percentages",
      "how to figure out the percentage of a number",
      "how to get percentage of a number",
      "percentage of percentage formula",
      "how to do percentages on a calculator",
      "percentage of a number",
      "calculate percentage difference between two figures",
      "how to compute percentage difference between two numbers",
      "how to work out percentage difference between 2 numbers",
      "how do you calculate percentage",
      "calculate difference",
      "percentage calculation formula",
      "percentage between two numbers",
      "how do i get a percentage of a number",
      "how to find the percentage difference between 2 numbers",
      "what the percentage of",
      "calculation in percentage",
      "number percentage calculator",
      "find percentage",
      "percentage of increase calculator",
      "difference of percentage calculator",
      "how to compute for the percentage"
    ]
  },
  {
    "slug": "mulch-calculator",
    "title": "Mulch Calculator — Cubic Yards and Bag Counts",
    "shortTitle": "Mulch Calculator",
    "category": "Home",
    "description": "Estimate mulch in cubic yards, cubic feet and whole bags from bed dimensions, finished depth, bag volume and an explicit allowance you control.",
    "intro": "Use this mulch calculator to translate a measured rectangular bed and your chosen finished layer depth into a purchasing volume. It shows cubic yards for bulk delivery, cubic feet for bag comparisons and a whole-bag estimate when you supply the labeled bag volume. An optional allowance is visible rather than buried in the formula. The default bed demonstrates the arithmetic; it is not a recommended mulch depth for every tree, planting or material. Keep gardening decisions separate from the volume estimate and use suitable local horticultural guidance for the plants and location.",
    "formula": "Geometric ft³ = length ft × width ft × depth in / 12. Planned ft³ = geometric ft³ × (1 + allowance/100). yd³ = ft³/27. Bags = ceiling(planned ft³/bag ft³).",
    "example": "A 12 ft by 8 ft bed at 3 inches contains 24 ft³, or 0.888889 yd³. With no allowance and 2 ft³ bags, the purchasing estimate is 12 bags. A 10% allowance raises the volume to 26.4 ft³ and the whole-bag count to 14.",
    "howTo": [
      "Measure the rectangular bed length and width in feet.",
      "Enter your independently chosen finished mulch depth in inches.",
      "Enter a disclosed allowance or zero, and the bag label volume or zero.",
      "Click Calculate result and compare the units with the supplier quotation."
    ],
    "considerations": [
      {
        "title": "Measure the area you actually intend to cover",
        "text": "Measure at the soil surface rather than using the dimensions of the entire garden when paths, decking or planting exclusions occupy part of it. For several rectangles, calculate each bed and add the cubic-foot volumes before rounding a final bag order. An irregular border can be divided into reasonably measured sections, but entering its longest length and widest width as one rectangle overestimates its area. Keep a sketch with the dimensions so a delivery quantity remains traceable if the layout changes."
      },
      {
        "title": "Depth is a separate input, not a hidden recommendation",
        "text": "The volume changes in direct proportion to finished depth. Doubling a supplied depth doubles the geometric quantity while leaving area unchanged. A desired depth depends on the plant, material, existing layer and site; the calculator cannot inspect them. If an existing layer is retained, estimate only the additional depth you plan to install rather than purchasing the full final thickness again. Uneven existing mulch may require separate areas and depths rather than one average that hides large differences."
      },
      {
        "title": "Cubic yards, cubic feet and bag sizes",
        "text": "A cubic yard contains twenty-seven cubic feet because each side is three feet. Do not divide by three when converting a volume. Suppliers may sell bulk mulch by the cubic yard and bags by cubic feet, so compare both on the same volume basis. A bag weight cannot be entered as bag volume: two materials of equal volume can have different weights and moisture content. This page deliberately avoids guessing a mulch density or translating a weight label into cubic feet."
      },
      {
        "title": "How the explicit allowance works",
        "text": "Allowance multiplies the geometric volume before conversion and bag rounding. Ten percent means multiply by 1.10, not add ten cubic feet. It can represent your separately justified ordering buffer, but it is not an automatic prediction of settling, compression or material loss. Start with zero to see the pure geometry, then rerun a documented scenario. If the supplier already includes an ordering buffer in a quote, adding another allowance may count the same uncertainty twice."
      },
      {
        "title": "Whole bags and bulk delivery increments",
        "text": "Bag count rounds upward after all specified volume adjustments. A fraction of a bag cannot be purchased as a sealed retail bag, even though the geometric result is continuous. If you need 26.4 cubic feet from two-cubic-foot bags, thirteen bags provide only twenty-six cubic feet, so fourteen is the estimate. Bulk suppliers may have different delivery increments; the calculator does not assume a half-yard minimum or a truck capacity. Discuss the displayed unrounded volume with the actual supplier."
      },
      {
        "title": "Plan multiple beds without accumulating rounding error",
        "text": "For three beds using the same material and depth, add their continuous planned cubic-foot amounts and divide the combined total by bag volume once. Adding three separately rounded bag counts can produce extra bags beyond the combined need. If different materials or bag sizes are used, keep the orders separate. Save the area, layer depth, allowance and unit basis alongside the total so another person can reproduce the estimate rather than receiving an unexplained delivery number."
      },
      {
        "title": "Use the result as a volume checklist",
        "text": "Before ordering, confirm access, unloading location, delivery terms and the quantity unit on the quote. Recheck a measurement that was taken from a drawing rather than the finished bed. Bag labels and supplier descriptions matter more than a remembered nominal package size. The calculator processes entered values locally and does not submit an order or obtain prices. It cannot evaluate drainage, plant health, moisture, weeds or whether a proposed mulch type is appropriate for the intended location."
      }
    ],
    "faqs": [
      {
        "question": "How much mulch covers 100 square feet?",
        "answer": "Multiply one hundred by your selected depth in inches and divide by twelve. At three inches that is twenty-five cubic feet, or about 0.925926 cubic yards before any allowance. The depth is your assumption, not a universal plant recommendation."
      },
      {
        "question": "Can I estimate circular beds?",
        "answer": "This interface takes rectangles. Calculate the circle area separately, then use an equivalent rectangle with that same area and the chosen depth, clearly documenting the conversion. Do not enter diameter as both rectangular sides and call it an exact circle estimate."
      },
      {
        "question": "Why is the bag estimate rounded upward?",
        "answer": "The planned volume may require part of an additional bag. Whole bags are rounded up so the displayed package count does not understate the mathematical quantity. This does not guarantee adequate material if the measurements or labeled package basis are wrong."
      },
      {
        "question": "Does it include settlement?",
        "answer": "Only through the allowance you explicitly enter. There is no universal settlement percentage applied in the background. Material, moisture, installation and existing surface conditions differ, so an allowance should come from your own plan or a supplier discussion."
      },
      {
        "question": "Can I use soil weight or pricing here?",
        "answer": "No weight or price is inferred. Use the soil calculator for a separate supplied-density estimate. For mulch cost, multiply the relevant supplier unit price by the purchasing quantity and account separately for delivery, tax and minimum-order terms."
      }
    ],
    "limitations": "Rectangular geometric volume with user-selected depth and allowance. No plant-depth recommendation, weight, price, compaction prediction or supplier delivery minimum is assumed.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "mulch calculator"
    ]
  },
  {
    "slug": "concrete-block-calculator",
    "title": "Concrete Block Calculator — Wall Area and Cement Block Count",
    "shortTitle": "Concrete Block Calculator",
    "category": "Home",
    "description": "Calculate cement or concrete wall block counts from net wall area, nominal modular face dimensions, opening area and an explicit ordering allowance.",
    "intro": "This cement block calculator estimates the number of concrete masonry units for a simple wall area. It subtracts the opening area you supply, divides by the nominal modular face coverage and rounds the purchase quantity upward after your allowance. The face module is entered as length and height in inches; block thickness is not needed for this area count. The tool is a materials takeoff, not a structural assessment. It does not select a foundation, reinforcement, mortar, lintel, wall height or load-bearing specification.",
    "formula": "Net wall ft² = length × height − openings. Modular face ft² = nominal length in × nominal height in / 144. Planned whole blocks = ceiling(net area / face area × (1 + allowance/100)).",
    "example": "A 20 ft long, 8 ft high wall has 160 ft². With no openings and a 16 by 8 inch modular face, the exact count is 180 units. A 5% allowance gives 189 whole units. Subtracting an 8 ft² opening first reduces the exact count to 171 units.",
    "howTo": [
      "Enter wall length and height in feet and total opening area in square feet.",
      "Confirm the nominal modular block face, including its joint module.",
      "Enter the face as length; height, for example 16;8, and a disclosed allowance.",
      "Click Calculate result and verify the takeoff against drawings and supplier unit specifications."
    ],
    "considerations": [
      {
        "title": "Nominal module versus measured unit",
        "text": "Concrete masonry is commonly coordinated with a modular dimension that includes the mortar joint. A nominal sixteen-by-eight-inch face therefore has a different meaning from the bare dimensions measured on an individual unit. Use the actual product specification and drawing module instead of measuring a block and adding a second joint allowance arbitrarily. The calculator accepts different modular faces so the example is not silently imposed on every product. Mixed hard-metric and inch-based modules need careful reconciliation before a count is trusted."
      },
      {
        "title": "Subtract openings on the same area basis",
        "text": "Enter the combined area of openings only once. A two-foot by four-foot opening contributes eight square feet, not six feet and not eight cubic feet. The total cannot exceed the gross wall area; the input check rejects that impossible combination. An opening changes the basic face-area quantity but also creates corners, jambs and cut requirements that this simple estimate does not lay out. Check lintels and special units separately with the project drawings rather than assuming all removed area converts directly into purchase savings."
      },
      {
        "title": "Thickness changes material specifications, not face coverage",
        "text": "Two blocks can have the same nominal length and height but different thicknesses. Their simple face-area counts can match while their structural properties, weight, core volume and grout requirements differ. The omission of thickness is deliberate for this output. If you want concrete volume or material weight, use a separate volume calculation with the actual geometry and density. This block count should not be interpreted as a filled-core concrete estimate or as evidence that one thickness can substitute for another."
      },
      {
        "title": "Allowances and whole-unit rounding",
        "text": "The allowance applies to the continuous unit estimate before the final ceiling. It is an explicit ordering assumption rather than a guaranteed waste factor. A small wall with many corners, bond changes or openings can have a different cutting pattern from a long plain wall of the same area. For a multi-wall purchase using one block type, combine continuous counts before rounding where practical, then account for project-specific special units. Do not blindly add another percentage if the contractor takeoff already includes the same allowance."
      },
      {
        "title": "A count is not a course layout",
        "text": "Dividing net area by modular face area gives an approximate material quantity. It does not show which courses require half blocks, where vertical joints fall, how bond patterns close at ends, or whether wall and opening dimensions align to the module. An exact drawing-based takeoff may differ because of these details. For precise procurement, lay out each course and identify full, half, corner, bond-beam and other units as specified. Use this result as a cross-check against that list, not as a replacement for it."
      },
      {
        "title": "Compare a baseline with an opening scenario",
        "text": "Calculate a plain wall first and note the exact face count. Add a measured opening area and recalculate; the reduction before allowance should equal opening area divided by modular face area. Change the allowance last so the opening effect remains visible. This sequence helps catch an opening that was mistakenly entered as a linear dimension. Save the block module with each estimate: changing to a taller unit changes count even though the wall itself has not changed."
      },
      {
        "title": "Before ordering and building",
        "text": "Verify dimensions on the approved plan and check the current product description with the supplier. Confirm which blocks are included in a quoted pack and how incomplete packs are sold. Keep procurement, mortar, grout and reinforcement quantities as separate records. Building safety, local code requirements and structural suitability require qualified assessment. The page does not transmit your measurements, contact suppliers or approve construction. A plausible integer output means only that the submitted area arithmetic produced a finite quantity under the stated module."
      }
    ],
    "faqs": [
      {
        "question": "Is a cement block different from a concrete block here?",
        "answer": "These search terms lead to the same wall-face count. The tool uses the specified modular geometry rather than a chemical composition assumption. Verify the intended masonry product; similar everyday names do not establish equivalent strength, dimensions or permitted use."
      },
      {
        "question": "How many 16 by 8 inch blocks cover one square foot?",
        "answer": "The nominal face is 128 square inches, or eight ninths of a square foot. The continuous estimate is 1.125 units per square foot. Apply that factor to net wall area, then apply your allowance and round the purchase quantity upward."
      },
      {
        "question": "Can opening area be zero?",
        "answer": "Yes. Zero represents a wall with no deductions in this takeoff. If every square foot is deducted, the area count becomes zero. Neither case proves that the drawing has no special units, reinforcement, lintels or other materials to procure."
      },
      {
        "question": "Does the calculator estimate mortar?",
        "answer": "No. Joint geometry, unit shape, bedding method and site practice require their own basis. Including a joint module in face coverage is not the same as estimating mortar volume. Grout and filled-core concrete are also separate from block count."
      },
      {
        "question": "Can this select a safe wall design?",
        "answer": "No. It has no information about loads, support, soil, wind, seismic conditions, reinforcement or applicable code. Use an appropriate designer or contractor for the specified wall system. The calculator only supplies a transparent area-to-unit purchasing estimate."
      }
    ],
    "limitations": "Simple planar face-area takeoff with nominal modular dimensions. Special units, bond layout, reinforcement, mortar, grout, foundations and structural suitability are not calculated.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "cement block calculator"
    ]
  },
  {
    "slug": "basis-points-calculator",
    "title": "Basis Points Calculator — BPS, Percent and Rate Changes",
    "shortTitle": "Basis Points Calculator",
    "category": "Money",
    "description": "Convert basis points to percent or decimals, compare rate changes, apply a BPS adjustment and estimate simple amount impact with explicit inputs.",
    "intro": "The BPS calculator on this page uses the financial meaning of basis points. One basis point is one hundredth of a percentage point, or 0.0001 as a decimal fraction. Choose a conversion, compare two rates, apply a basis-point adjustment, or calculate the simple amount represented by a rate difference on a supplied principal. These are related arithmetic tasks with different input bases. The page does not calculate Pakistan Basic Pay Scales, payroll allowances or bits per second. It retrieves no bank rates or market quotations and is independent of financial institutions.",
    "formula": "Percent = bps/100. Decimal fraction = bps/10,000. Bps = percent × 100 = decimal × 10,000. Rate-change bps = (new percent − old percent) × 100. Simple impact = principal × bps/10,000.",
    "example": "Twenty-five basis points equal 0.25 percentage points and a decimal fraction of 0.0025. A rate moving from 4% to 4.25% rises by 25 bps. Applying that difference once to a principal of 10,000 gives a simple amount of 25 currency units.",
    "howTo": [
      "Select conversion, rate difference, rate adjustment or simple amount impact.",
      "Enter rates as numeric percentages where the label says percent.",
      "Enter signed basis points for an increase or decrease and keep principal non-negative.",
      "Click Calculate result and retain the period and contractual basis separately."
    ],
    "considerations": [
      {
        "title": "Basis points versus relative percentage change",
        "text": "A change from four percent to four and a quarter percent is a quarter percentage point, or twenty-five basis points. Relative to the old four-percent rate, the increase is 6.25 percent. Both statements can be mathematically correct, but they describe different quantities. Basis points avoid ambiguity when expressing absolute rate differences. Use the percentage-change calculator if your question is how large the increase was relative to its starting rate. Do not label a relative growth percentage as a basis-point change."
      },
      {
        "title": "Entering percentages and decimals correctly",
        "text": "Percent to basis points expects four for four percent. Decimal fraction to basis points expects 0.04 for the same rate. The two inputs describe identical values under different units, so both produce four hundred basis points. Entering 0.04 in percent mode produces four basis points instead, which is a hundred-fold difference. Check the mode before accepting a surprisingly small or large result. Conversion modes ignore the second field rather than interpreting an old saved value as another financial parameter."
      },
      {
        "title": "Signed rate changes are preserved",
        "text": "Rate change subtracts the starting percentage from the new percentage. A decline from 4.25 to 4 is minus twenty-five basis points. Apply change adds the supplied basis-point delta divided by one hundred to the starting numeric percentage, so four with minus twenty-five bps gives 3.75 percent. The tool does not reverse the sign to make every result look positive. Signed rates are accepted for arithmetic; whether a quoted negative rate is applicable to a product requires the product documentation."
      },
      {
        "title": "What simple amount impact actually measures",
        "text": "Principal multiplied by a basis-point fraction is a one-time arithmetic amount. It does not imply a monthly or annual payment, a fee schedule or investment earnings. If the principal is ten thousand and the rate difference is twenty-five bps, the output is twenty-five currency units for the same specified basis. A duration is not supplied, so multiplying this answer by an assumed number of months would introduce a new model. Use an interest or loan calculator when payment timing and compounding are material."
      },
      {
        "title": "Compare rates on an equivalent basis",
        "text": "Nominal rates, effective annual yields, quoted spreads and ongoing expense ratios are different measures even when all are expressed using percent signs. Subtracting unlike measures yields a number but may not answer a useful financial question. Identify the same period, instrument and quote convention before using rate-change mode. A statement may describe a spread over a benchmark rather than a standalone rate; the calculator cannot infer the benchmark, reset schedule or applicable contract from the two values."
      },
      {
        "title": "Currency-neutral interpretation",
        "text": "Simple amount output uses currency units without silently selecting dollars, rupees or another denomination. Enter a principal expressed entirely in one currency and interpret the result in that same currency. No exchange rate is requested or loaded. For an expense-ratio illustration, confirm whether the principal represents the actual balance basis and whether the rate includes the relevant charges. This page supplies elementary rate arithmetic rather than accounting, tax, investment or borrowing advice. Verify statements and disclosures before making a decision."
      },
      {
        "title": "Precision and reconciliation",
        "text": "Conversions multiply or divide by fixed powers of ten, so a hand check is straightforward. One percent equals one hundred bps and one bps equals 0.01 percent. The displayed fractional digits do not determine how a provider rounds an invoice or payment. For reconciliation, retain the original quoted precision, exact period and applicable statement rules. When a difference is tiny, premature rounding of both rates may hide it. Input values are processed locally and no account, statement or provider data is fetched."
      }
    ],
    "faqs": [
      {
        "question": "How many basis points are in one percent?",
        "answer": "One percentage point contains one hundred basis points. Thus a rate of one percent equals one hundred bps as a rate conversion. A relative one-percent increase in an existing rate is a different quantity and depends on the original rate."
      },
      {
        "question": "Is 50 bps equal to 0.5 percent?",
        "answer": "It equals 0.5 percentage points and 0.005 as a decimal fraction. Applied to a four-percent starting rate as a positive delta, fifty bps gives a new rate of 4.5 percent. It is not a fifty-percent relative increase."
      },
      {
        "question": "Can the tool handle decreases?",
        "answer": "Yes. Use a lower new rate in rate-change mode or a negative BPS delta in apply mode. The negative sign remains visible. Simple amount impact can also show a negative arithmetic difference when the supplied basis-point change is negative."
      },
      {
        "question": "Does BPS mean government pay scales here?",
        "answer": "No. This page covers financial basis points only. A government Basic Pay Scale salary calculation requires the relevant grade, step, current pay schedule and allowances. Those inputs and rules are not inferred from this acronym."
      },
      {
        "question": "Can I estimate compound returns with this conversion?",
        "answer": "A BPS conversion alone has no duration, contribution or compounding convention. Use the compound-interest calculator for an explicit return scenario, and the interest-rate calculator when solving a rate. Keep rate conversion separate from product-specific earnings or repayment calculations."
      }
    ],
    "limitations": "Finite values within ±10¹². Simple amount impact applies the supplied difference once without hidden duration, compounding, fees, taxes or investment return assumptions.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "bps calculator"
    ]
  },
  {
    "slug": "rounding-calculator",
    "title": "Rounding Calculator — Exact Decimals and Significant Figures",
    "shortTitle": "Rounding Calculator",
    "category": "Everyday",
    "description": "Round exact decimal numbers to places, tens, hundreds or significant figures with explicit half-away-from-zero and half-to-even tie rules.",
    "intro": "This rounding calculator works from the decimal text you enter, using exact base-ten integer arithmetic rather than first converting the value to a binary floating-point number. Choose decimal places or significant figures, then select how an exact halfway case is resolved. A round-off result is a change in stated precision, not a change in measurement quality. Keeping the tie rule visible helps explain why different spreadsheet, programming or reporting systems can give different answers for a number ending exactly halfway between two candidates.",
    "formula": "For p decimal places, round the magnitude to the nearest multiple of 10^(−p), then restore its sign. Half away chooses the larger magnitude at an exact tie; half even chooses the candidate whose retained integer is even.",
    "example": "1.005 to two decimal places gives 1.01 with half away and 1.00 with half even. To the nearest tenth, 12.34 becomes 12.3. To the nearest hundredth, 12.346 becomes 12.35. Precision −2 rounds 1,250 to hundreds: 1,300 away or 1,200 even.",
    "howTo": [
      "Enter a plain decimal without commas, units or exponent notation.",
      "Choose decimal places or significant figures and enter an integer precision.",
      "Choose a halfway tie rule appropriate for your reporting context.",
      "Click Calculate result; retain the original value for later arithmetic."
    ],
    "considerations": [
      {
        "title": "Round to the nearest tenth or hundredth",
        "text": "In decimal-place mode, precision one means the nearest tenth and precision two means the nearest hundredth. The rounding decision uses all discarded digits, not just a digit that happens to be visible on another display. For 12.341 the nearest hundredth is 12.34, while 12.346 becomes 12.35. Trailing zeros are retained to display the chosen number of decimal places: twelve rounded to two places is 12.00. These zeros express a formatting choice, not proof of a precise instrument measurement."
      },
      {
        "title": "Negative precision gives tens and hundreds",
        "text": "Precision zero rounds to whole numbers. A negative precision rounds to a larger power-of-ten increment: minus one means tens, minus two means hundreds and minus three means thousands. Enter 1,234 without its comma as 1234; at minus two places the nearest hundred is 1200. A search for nearest 10th can be ambiguous: tenth means precision one, whereas nearest ten means precision minus one. Select the intended unit of rounding explicitly rather than trusting the wording alone."
      },
      {
        "title": "Half away from zero and half to even",
        "text": "Most non-halfway inputs produce the same answer under both rules. A tie occurs only when the discarded magnitude is exactly half the increment. Half away increases the retained magnitude at a tie, so minus 1.25 to one decimal place becomes minus 1.3. Half even chooses the neighbor with an even retained digit, so 1.25 becomes 1.2 while 1.35 becomes 1.4. Neither option is floor, ceiling or truncation; negative values are handled symmetrically with positive magnitudes."
      },
      {
        "title": "Why exact decimal input matters",
        "text": "Binary floating-point representations can approximate decimal fractions slightly above or below the written value. If a rounding implementation bases a halfway decision on that approximation, a familiar decimal example may surprise the user. This tool instead removes the decimal point, stores the coefficient as an integer and tracks the decimal scale. Division and remainder then determine whether the discarded part is below, above or exactly at half. Large integer text is also retained without passing through an imprecise numeric conversion."
      },
      {
        "title": "Significant figures describe a different precision",
        "text": "Decimal places count positions to the right of the point. Significant figures count from the first nonzero digit across the magnitude. For 0.012345, three significant figures give 0.0123, which is four decimal places. For 12345, three significant figures give 12300. A plain integer with trailing zeros can be ambiguous about its significant precision, so the result separately states the selected significant-figure count. Do not assume that the visible zeros alone convey the intended reporting precision."
      },
      {
        "title": "Avoid double rounding",
        "text": "Round the original value directly to the final required precision. Rounding once to an intermediate precision and again to a coarser precision can change the result. For example, a number just below a halfway boundary may move onto that boundary when intermediate digits are discarded. Keep the full original decimal in your working record, perform subsequent calculations with appropriate unrounded inputs and format the final report once. When a statement requires line-by-line rounding, follow that specific rule rather than imposing a blanket final-total method."
      },
      {
        "title": "Scope and input limits",
        "text": "The parser accepts optional signs and ordinary decimal forms such as .5 or 1. It does not evaluate fractions, expressions, scientific notation or values containing separators. Integer and fractional parts are each limited to two hundred digits, decimal-place precision ranges from minus twelve to eighteen, and significant figures range from one to fifteen. These declared bounds prevent excessive work without silently shortening the input. All rounding happens locally; no entered numbers are sent to a calculation service."
      },
      {
        "title": "Match a reporting rule before comparing software",
        "text": "A disagreement may come from tie policy, stored input precision, significant figures versus places, or rounding each component before summing. Reproduce the same original decimal and policy in both systems before treating the difference as an error. This tool does not decide currency settlement rules, tax rounding, laboratory reporting standards or grading policy. State the original value, requested precision and tie convention when sharing a result, and check any required professional rule separately."
      }
    ],
    "faqs": [
      {
        "question": "Is this a round calculator or a rounding solver?",
        "answer": "Both terms describe the same numerical rounding function here. It reports a decimal at the selected precision and tie rule. It does not infer how accurate a measured value was or choose a legally required accounting convention."
      },
      {
        "question": "How do I round negative numbers?",
        "answer": "Enter the minus sign as part of the number. The nearest candidates are determined by magnitude and the sign is restored afterward. Half away from zero makes an exact negative tie more negative; half even can move either way to select an even retained digit."
      },
      {
        "question": "Why do half even and half away differ for 1.005?",
        "answer": "At two decimal places, the written decimal is exactly halfway between 1.00 and 1.01. Half away selects 1.01. Half even selects 1.00 because the retained hundredths integer is even. The calculation uses the exact entered decimal."
      },
      {
        "question": "Can I enter scientific notation?",
        "answer": "Not in this interface. Expand the value to plain decimal text within the declared digit limits. This avoids an exponent parser changing the supported input range. Use the separate scientific-notation calculator for notation conversion before rounding a suitable decimal."
      },
      {
        "question": "Does rounding zero preserve significant figures?",
        "answer": "The calculator displays zero at the selected output scale, but an exact zero has no first nonzero digit from which ordinary significant-figure counting starts. Interpret its stated precision as a reporting choice. No minus-zero sign is emitted after rounding a negative magnitude to zero."
      }
    ],
    "limitations": "Plain decimal text only, with at most 200 integer and 200 fractional digits. Decimal precision −12…18; significant figures 1…15. No expression evaluation or prescribed professional rounding policy.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "rounding calculator",
      "round calculator",
      "rounding solver",
      "round to the nearest tenth calculator",
      "round off calculator",
      "round to the nearest hundredth calculator",
      "rounding numbers calculator",
      "round to the nearest 10th calculator"
    ]
  },
  {
    "slug": "tire-size-calculator",
    "title": "Tire Size Calculator — Comparison, Height and Speed Ratio",
    "shortTitle": "Tire Size Calculator",
    "category": "Vehicles",
    "description": "Compare metric tire diameters, sidewall heights, circumference and ideal speed ratios, with millimeter-to-inch conversion and clear fitment limits.",
    "intro": "This tire size comparison calculator decodes metric radial sizes such as 265/70R16 and computes nominal dimensions from the width, aspect ratio and wheel diameter. It compares an original size with a proposed size and gives the ideal speed relationship if the speedometer were calibrated to the original nominal diameter. A Tacoma tire calculator search can use this geometry, but the page does not know a truck year, trim, wheel offset, suspension or approved fitment. It is independent of America’s Tire and other retailers; no retailer inventory or manufacturer approval is implied.",
    "formula": "Sidewall mm = width mm × aspect ratio/100. Overall diameter mm = 25.4 × rim inches + 2 × sidewall mm. Circumference = π × diameter. Ideal speed = indicated speed × new diameter/original diameter.",
    "example": "For 265/70R16, sidewall height is 185.5 mm and overall diameter is 777.4 mm. For 285/70R17, diameter is 830.8 mm. The nominal diameter increase is about 6.868%. An indicated 60 mph corresponds to about 64.121 mph in the ideal ratio model.",
    "howTo": [
      "Enter two metric radial sizes without load or speed suffixes.",
      "Enter an indicated speed and select mph or km/h.",
      "Click Calculate result to compare nominal diameters and converted dimensions.",
      "Verify any real replacement with the vehicle specification and a qualified tire professional."
    ],
    "considerations": [
      {
        "title": "Read the three dimensions correctly",
        "text": "The first number is section width in millimeters. The second number is an aspect ratio expressed as a percentage of that width, rather than a sidewall height in millimeters. The number after R is the wheel diameter in inches, not overall tire height. In 265/70R16, multiplying 265 by 0.70 gives one sidewall height. Overall diameter includes two sidewalls and the sixteen-inch wheel. Mixing these unit bases is a common reason a manual estimate differs from the calculation."
      },
      {
        "title": "Aspect ratio can hide a width-related change",
        "text": "Two tires with the same aspect ratio but different widths do not have equal sidewall heights. At seventy percent, a 285 mm width gives a taller nominal sidewall than a 265 mm width. Changing the aspect ratio also changes sidewall height even if width is held constant. Compare the actual diameter calculation rather than assuming a similar-looking second number means the same overall height. The calculator uses each complete size independently before comparing the two diameters."
      },
      {
        "title": "Tire size conversion is dimensional conversion",
        "text": "The results convert nominal millimeter dimensions to inches using 25.4 millimeters per inch. This lets you compare height and sidewall measurements on a common unit basis. It does not assign an equivalent flotation size or assert that a metric tire marked one way is physically identical to another commercial designation. Flotation notation such as 31x10.50R15 is outside the parser. Product datasheets are the appropriate reference for actual dimensions, approved rims, load capacity and other specifications."
      },
      {
        "title": "Nominal circumference and speedometer relationship",
        "text": "The ideal speed calculation assumes each nominal diameter represents its rolling relationship and that the gauge is calibrated to the original size. A larger comparison diameter travels farther per modeled revolution, so the ideal actual speed is higher at the same indicated reading. Real loaded rolling radius, tread, inflation, manufacturing variation and calibration are not inputs. The displayed value is a geometric illustration, not a certified speed correction. It does not authorize changing a gauge setting or operating outside a vehicle’s approved specification."
      },
      {
        "title": "Radius difference is not guaranteed ground clearance",
        "text": "Half the diameter change is shown as a nominal radius difference. That arithmetic may help understand geometry but cannot guarantee a vehicle gains the same measured ground clearance. Tires deform under load and suspension geometry, pressure and actual manufactured dimensions influence the result. The tool has no body, chassis or wheel-well measurements. Likewise, a width or height estimate does not prove steering, brake, fender or suspension clearance at full travel or lock."
      },
      {
        "title": "Tacoma and other vehicle fitment questions",
        "text": "For a Toyota Tacoma or any other vehicle, identify the exact model year, trim, original specification and wheel information before discussing replacements. Geometry alone does not establish that a size fits safely. Tire load index, speed rating, wheel width and offset, placard information and manufacturer instructions remain separate checks. This page does not contain a vehicle fitment database and does not recommend a universal percentage-change threshold. Bring the nominal comparison to a qualified professional as one piece of information."
      },
      {
        "title": "A useful comparison workflow",
        "text": "Start with the size listed on the relevant vehicle documentation, then enter one comparison size. Record both full size strings and the displayed unit. Change only one dimension at a time if you want to understand why the diameter moved. For example, increasing wheel diameter while reducing aspect ratio may partly offset the total height change, but the actual result still depends on width. Keep the source of each size in your notes so a later comparison does not accidentally use a previously proposed tire as the original baseline."
      },
      {
        "title": "Privacy and boundaries",
        "text": "Entered tire strings and speed are processed on the device. There is no retailer search, location lookup, vehicle registration query or purchase submission. Supported widths are fifty to five hundred millimeters, aspect ratios ten to one hundred, wheel diameters five to forty inches and indicated speeds zero to five hundred in the selected unit. These are arithmetic bounds, not approved product combinations or road-speed guidance. A successful calculation means the notation fits the supported geometry model, not that such a tire exists or is suitable."
      }
    ],
    "faqs": [
      {
        "question": "Can I use this as an America’s Tire calculator?",
        "answer": "It is an independent dimensional comparison, not a retailer tool or quote. A search using a retailer name may be seeking similar arithmetic, but current products, availability, service terms and vehicle fitment must be checked directly with the retailer or manufacturer."
      },
      {
        "question": "What is tire aspect ratio?",
        "answer": "It is nominal sidewall height expressed as a percentage of section width. Seventy in 265/70R16 means the sidewall is modeled as seventy percent of 265 millimeters. It is not seventy millimeters and it is not seventy percent of the rim diameter."
      },
      {
        "question": "Does tire height include the rim?",
        "answer": "Overall nominal diameter includes the wheel diameter plus two sidewall heights. The tool separately reports sidewall height so those quantities are not confused. Tire width, sidewall and complete diameter are different measurements with different uses."
      },
      {
        "question": "Will these tires fit my Tacoma?",
        "answer": "The calculator cannot answer fitment from two size strings. Actual clearance, approved wheel dimensions, load capacity, vehicle specification and modification details require separate assessment. Treat the diameter comparison as geometric information to discuss with a qualified professional."
      },
      {
        "question": "Can I enter P or LT prefixes?",
        "answer": "Yes, those prefixes are accepted before supported metric radial sizes. They do not change the geometric formula and are not used to infer load capacity. Load and speed suffixes are not accepted in the input; this page does not decode or validate their suitability."
      }
    ],
    "limitations": "Nominal metric radial geometry only. No vehicle fitment, load or speed rating, actual rolling radius, clearance approval or retailer affiliation. Speed ratio is an ideal illustrative model.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "tacoma tire calculator",
      "tire aspect ratio",
      "tire size converter",
      "americas tire calculator",
      "tire size comparison calculator",
      "tire height calculator",
      "tire dimension converter"
    ]
  },
  {
    "slug": "anniversary-calculator",
    "title": "Anniversary Calculator — Completed Years and Next Date",
    "shortTitle": "Anniversary Calculator",
    "category": "Everyday",
    "description": "Find completed annual anniversaries, the next anniversary date and days remaining using Gregorian dates and an explicit February 29 convention.",
    "intro": "This anniversary calculator compares an original event date with a reference date you choose. It reports completed annual anniversaries, calendar days since the event and the next annual anniversary strictly after the reference date. It also says whether the reference date itself is an anniversary. February 29 events have an explicit choice of February 28 or March 1 in non-leap years. That is a planning convention selected by the user, not a legal rule imposed by the calculator. Wedding, work and other personal anniversaries use the same transparent date logic.",
    "formula": "Completed years = reference year − event year − 1 if the chosen anniversary in the reference year is still ahead. Days between dates = UTC calendar-day difference. Next anniversary is the first chosen annual occurrence strictly after the reference date.",
    "example": "For an event on 2020-10-03 and reference 2026-10-03, six annual anniversaries are complete and the reference date is the anniversary. The next anniversary after that date is 2027-10-03, 365 days later. For 2024-02-29 in 2025, select February 28 or March 1 explicitly.",
    "howTo": [
      "Enter the original event and a reference on or after it.",
      "Select the non-leap-year observation convention for February 29.",
      "Click Calculate result to see completed anniversaries and the next date.",
      "Use the reference-date flag to distinguish today’s anniversary from the next one."
    ],
    "considerations": [
      {
        "title": "Choose a reference date deliberately",
        "text": "The reference field makes the calculation reproducible. You can examine a future celebration or revisit a past record without the browser clock silently changing the answer. For a current countdown, enter the current date where you are planning the event. This is a date-only comparison, so it does not ask for time of day, time zone or event hour. If travel crosses date boundaries, choose the local calendar date that matters to your plan and record that context separately."
      },
      {
        "title": "Completed anniversaries versus year subtraction",
        "text": "Subtracting the event year from the reference year can overstate completed anniversaries when the annual date has not arrived. An event in October 2020 has only five completed anniversaries in September 2026, even though the year numbers differ by six. The tool compares the reference with the selected occurrence in its own year before deciding whether to subtract one. It does not convert elapsed days into years by dividing by 365, which would mishandle leap days and annual date boundaries."
      },
      {
        "title": "What happens on the anniversary itself",
        "text": "The completed count increases when the reference reaches the anniversary date. A separate result confirms that the reference is an anniversary. The next-date output deliberately means the next occurrence strictly after the reference date, so it moves to the following year when the anniversary is today. This prevents a zero-day countdown from being mistaken for a future date. Use the today flag for a current celebration and the next date for scheduling the following annual occurrence."
      },
      {
        "title": "February 29 observation policy",
        "text": "In a leap year, a February 29 event occurs on February 29 under either choice. In a non-leap year, the tool uses the February 28 or March 1 convention selected in the dropdown. Changing that choice can change the completed count and countdown near the end of February. The policy is applied consistently to the reference-year comparison and the next date. A contract, jurisdiction or organization may use its own anniversary definition; this calculator does not determine that legal or administrative rule."
      },
      {
        "title": "Gregorian leap years and calendar days",
        "text": "A Gregorian leap year is divisible by four, except century years not divisible by four hundred. Thus 2000 is a leap year while 2100 is not. The parser rejects impossible dates rather than allowing a date library to silently roll them into the next month. Calendar-day differences use normalized UTC dates to avoid daylight-saving hour shifts affecting the count. This is a count of date boundaries, not a promise that each local day contains exactly twenty-four elapsed clock hours."
      },
      {
        "title": "Event planning versus legal deadlines",
        "text": "A work anniversary, wedding celebration or personal milestone often needs a date and a practical countdown. Employment benefits, eligibility, contract renewals, visa conditions and statutory deadlines may depend on additional rules. They can use inclusive counting, working days, local holidays, times or special observation conventions. No such rules are loaded here. Treat the results as a clear calendar reference and consult the governing document when the anniversary affects a right, payment, filing or obligation."
      },
      {
        "title": "Records and multiple milestones",
        "text": "Keep the original date with the result rather than writing only the completed year count. For several milestones, run each date separately and label the reference date used. A later comparison can then be reproduced. An annual anniversary is not the same as a hundred-day, thousand-day or monthly milestone; the tool does not guess those alternatives. Use a date-addition or date-difference calculator when the milestone is defined by a fixed number of days instead of recurrence on a calendar date."
      },
      {
        "title": "Privacy and supported range",
        "text": "Both dates are processed locally with no account or event-calendar access. The supported input range is 1900 through 2200, and the reference must be on or after the original event. A next occurrence can fall in the following year at the upper edge of the reference range; it is a computed output rather than a new accepted input. The calculator does not store reminders, contact people or schedule a notification. Editing an event date keeps the last submitted result until the next Calculate click."
      }
    ],
    "faqs": [
      {
        "question": "How many years have we been married?",
        "answer": "Enter the recorded marriage date and the date on which you want to measure completed annual anniversaries. The answer counts whole annual milestones under the selected leap-day convention. It does not establish a legal marriage duration or replace official records."
      },
      {
        "question": "Why does next anniversary show next year when it is today?",
        "answer": "The next output is defined as strictly after the reference date. A separate field says whether the reference is itself the anniversary. That makes the following annual occurrence explicit while still identifying the current celebration."
      },
      {
        "question": "Can I use a future reference date?",
        "answer": "Yes, as long as it is valid, within the supported range and on or after the event. Future reference dates are useful for planning an invitation or milestone. The tool does not assume that future events have occurred in real life."
      },
      {
        "question": "Are weekends skipped?",
        "answer": "No. An annual anniversary can fall on any weekday and the countdown uses calendar days. Rescheduling a party or applying a business-day deadline is a separate decision. No holiday calendar or weekend adjustment is inferred."
      },
      {
        "question": "Does February 29 always become February 28?",
        "answer": "No. You explicitly choose February 28 or March 1 for non-leap years, and the original February 29 is retained in leap years. Keep that choice with your result, particularly for comparisons made near either possible observation date."
      }
    ],
    "limitations": "Gregorian date-only annual recurrence, not business-day, legal eligibility, time-zone or elapsed-hour calculation. February 29 observation is an explicit user convention.",
    "icon": "🔢",
    "accent": "blue",
    "updatedAt": "2026-10-03",
    "keywords": [
      "anniversary calculator"
    ]
  }
];
