import type {Tool} from "./tools";
export const roadmap328Tools:Tool[] = [
  {
    "slug": "matrix-multiplication-calculator",
    "title": "Matrix Multiplication Calculator",
    "shortTitle": "Matrix Multiplication",
    "category": "Education",
    "description": "Multiply numeric matrices up to 8×8 with dimension checks, row-by-column results, worked examples and clear floating-point limits.",
    "intro": "Multiply numeric matrices up to 8×8 with dimension checks, row-by-column results, worked examples and clear floating-point limits. Put one matrix row on each line, with spaces or commas between numbers. Semicolons can also separate rows. Every row in one matrix must contain the same number of cells. An empty row or missing entry is not a zero: write an explicit zero when the mathematical matrix has one. The dimensions displayed in the result refer to the product rather than either original input.",
    "formula": "Cᵢⱼ = sum over k of Aᵢₖ × Bₖⱼ. A has m×n entries, B has n×p entries, and C has m×p entries.",
    "example": "A = [[1,2],[3,4]] and B = [[5,6],[7,8]] produce [[19,22],[43,50]]. The upper-left entry is 1×5 + 2×7 = 19. Reversing the matrices instead produces [[23,34],[31,46]], which demonstrates that order matters.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with rows and columns.",
      "Review compatible dimensions and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check independent checks before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Rows and columns",
        "text": "Put one matrix row on each line, with spaces or commas between numbers. Semicolons can also separate rows. Every row in one matrix must contain the same number of cells. An empty row or missing entry is not a zero: write an explicit zero when the mathematical matrix has one. The dimensions displayed in the result refer to the product rather than either original input."
      },
      {
        "title": "Compatible dimensions",
        "text": "Multiplication needs the column count of A to equal the row count of B. A two-by-three matrix can multiply a three-by-four matrix, giving two-by-four output. It cannot multiply a two-by-four matrix in that order. A square matrix is not required. Read the error as a dimension problem rather than filling extra cells to force an operation that changes your original task."
      },
      {
        "title": "Multiplication order",
        "text": "A matrix on a calculator does not behave like an ordinary scalar. AB and BA can differ, and sometimes only one order is defined. Label the left and right matrices from your original equation before pasting them. Row-by-column multiplication is also different from entrywise multiplication, where corresponding cells are multiplied directly. This implementation performs the conventional row-by-column operation only."
      },
      {
        "title": "Size and precision",
        "text": "The 4x4 calculator and 8x8 calculator queries are supported when the pasted numeric matrices fit those dimensions. Maximum size is eight rows by eight columns per input. Entries use JavaScript floating-point numbers, so large products and cancellation can lose precision. The displayed eight decimal places are formatting rather than an exact symbolic result or proof that all those places are significant."
      },
      {
        "title": "Independent checks",
        "text": "Multiply one selected output entry manually, then verify the dimensions. For a square A, multiplying by an identity matrix of the same size should return A. A zero matrix gives a zero product with compatible dimensions. These checks catch a misplaced row or swapped matrix but do not validate the underlying data. Keep the original arrays with the product so another person can reproduce your matrix math calculation."
      }
    ],
    "limitations": "Numeric rectangular matrices with one through eight rows and columns. No inverse, determinant, symbolic expressions or general algebra system. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Can I multiply rectangular matrices?",
        "answer": "Yes, provided the left column count equals the right row count. The product can itself be rectangular."
      },
      {
        "question": "Does this multiply entries in corresponding cells?",
        "answer": "No. Each result entry is a dot product of one row from A and one column from B."
      },
      {
        "question": "Can I find an inverse here?",
        "answer": "No. The separate matrix inverse tool handles its own stated scope; multiplication does not automatically invert either input."
      },
      {
        "question": "Are 4×4 and 8×8 inputs accepted?",
        "answer": "Yes. All dimensions from one through eight are accepted when each input is rectangular and the inner dimensions agree."
      },
      {
        "question": "Can I enter fractions or symbols?",
        "answer": "Enter numeric decimal values. Expressions such as 1/3, variables and symbolic parameters are not evaluated."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "8x8 calculator",
      "matrix multiplication calculator",
      "multiply matrices calculator",
      "multiplying matrices calculator",
      "matrix on a calculator",
      "matrix math calculator",
      "4x4 calculator"
    ]
  },
  {
    "slug": "decimal-to-fraction-calculator",
    "title": "Decimal to Fraction Calculator",
    "shortTitle": "Decimal to Fraction",
    "category": "Education",
    "description": "Convert a written finite decimal to an exact reduced fraction and mixed number using integer arithmetic, with sign and precision checks.",
    "intro": "Convert a written finite decimal to an exact reduced fraction and mixed number using integer arithmetic, with sign and precision checks. Enter the decimal as you want it interpreted, including its sign and every written place. The converter uses integer arithmetic rather than first rounding the text to a binary floating-point number. This matters for a long finite decimal where an ordinary numeric parser might discard the final digits. A decimal point uses a period; commas are not thousands separators in this input.",
    "formula": "Write a finite decimal as an integer over 10ⁿ, where n is the decimal-place count; divide numerator and denominator by their greatest common divisor.",
    "example": "0.125 becomes 125/1000, then reduces to 1/8. For −2.75, the exact reduced fraction is −11/4 and the mixed form is −2 3/4. Adding trailing zeros, as in 0.1250, does not change the reduced result.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with exact input text.",
      "Review place value and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check verification and limits before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Exact input text",
        "text": "Enter the decimal as you want it interpreted, including its sign and every written place. The converter uses integer arithmetic rather than first rounding the text to a binary floating-point number. This matters for a long finite decimal where an ordinary numeric parser might discard the final digits. A decimal point uses a period; commas are not thousands separators in this input."
      },
      {
        "title": "Place value",
        "text": "Three decimal places correspond to thousandths, so 0.375 starts as 375/1000. Four decimal places correspond to ten-thousandths. The greatest common divisor removes factors shared by the numerator and denominator. Reduction changes the representation while preserving the value. It does not turn an approximate measurement into an exact physical quantity merely because the fraction itself is mathematically exact."
      },
      {
        "title": "Signs and mixed forms",
        "text": "A negative sign applies to the entire fraction. The mixed-number display separates the magnitude into a whole part and a remainder, then retains the original sign. For example, −2 3/4 means negative two and three quarters, not negative two plus positive three quarters. Whole numbers reduce to a denominator of one, and zero is written as 0/1."
      },
      {
        "title": "Repeating values",
        "text": "A typed finite value such as 0.333 is exactly 333/1000. It is not one third. Repeating decimals need a separate algebraic method and are deliberately not parsed from brackets or ellipses. If a source gives 0.333 as a rounded measurement, report the original precision rather than presenting the fraction as proof of an exact underlying ratio."
      },
      {
        "title": "Verification and limits",
        "text": "Divide the reduced numerator by its denominator to recover the entered finite decimal. Multiplying both reduced parts by the removed common factor should recover the original place-value fraction. Check trailing-zero and negative-value examples separately. The input length limits prevent needlessly large browser operations; the tool is a conversion worksheet, not a general fraction-expression calculator or an arbitrary scientific-notation parser."
      }
    ],
    "limitations": "Exact finite decimal text only: up to forty whole digits and eighteen decimal places. No repeating-decimal notation, scientific notation or inferred rational approximation. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Why is 0.333 not 1/3?",
        "answer": "The written finite decimal ends after three places and equals 333/1000. One third repeats indefinitely."
      },
      {
        "question": "Are negative decimals supported?",
        "answer": "Yes. Enter a leading minus sign, followed by ordinary decimal digits."
      },
      {
        "question": "Do trailing zeros change the answer?",
        "answer": "They change the initial denominator but reduce away, leaving the same reduced fraction."
      },
      {
        "question": "Does the result preserve measurement accuracy?",
        "answer": "It preserves the written decimal value. It cannot recover precision lost before the value was entered."
      },
      {
        "question": "Can I enter 1e-3?",
        "answer": "No. Write 0.001 instead. Scientific notation and repeating brackets are outside the supported parser."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "decimal to fraction calculator"
    ]
  },
  {
    "slug": "blown-insulation-calculator",
    "title": "Blown Insulation Calculator",
    "shortTitle": "Blown Insulation",
    "category": "Home",
    "description": "Estimate whole blown-insulation bags using measured area, actual product-label coverage, supplied allowance and material-only bag price.",
    "intro": "Estimate whole blown-insulation bags using measured area, actual product-label coverage, supplied allowance and material-only bag price. Read coverage from the exact product packaging for the specified installed depth or thermal performance. Bag weights and coverage vary between materials and products. Do not copy a generic coverage number from another attic or use a bag volume as square feet. The calculator deliberately asks for a supplied coverage instead of assigning an R-value or claiming one bag has universal performance.",
    "formula": "Planned area = measured area × (1 + allowance/100). Bags = ceiling(planned area / actual label coverage per bag). Material price = bags × supplied bag price.",
    "example": "For 1,000 ft², label coverage of 25 ft² per bag and 10% allowance, planned area is 1,100 ft² and the whole-bag order is 44 bags. At a supplied price of 30 currency units per bag, material-only cost is 1,320.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with actual coverage.",
      "Review surface measurement and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check installation decisions before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Actual coverage",
        "text": "Read coverage from the exact product packaging for the specified installed depth or thermal performance. Bag weights and coverage vary between materials and products. Do not copy a generic coverage number from another attic or use a bag volume as square feet. The calculator deliberately asks for a supplied coverage instead of assigning an R-value or claiming one bag has universal performance."
      },
      {
        "title": "Surface measurement",
        "text": "Measure the area receiving the specified treatment, keeping the units in square feet. Slopes, separate attic zones and inaccessible sections may need individual takeoffs. A home's advertised floor area can differ from the insulation surface. If zones require different specifications, calculate them separately using the appropriate product coverage and preserve each subtotal rather than averaging incompatible coverage rates."
      },
      {
        "title": "Allowance versus required depth",
        "text": "The allowance increases purchasing area; it is not a replacement for specified installed thickness. A ten-percent allowance cannot repair a coverage value taken from the wrong depth. Start with the documented coverage basis, then choose an allowance appropriate to your independently reviewed ordering process. Zero allowance is valid for a comparison, though the rounded bag count still remains a whole number."
      },
      {
        "title": "Material price",
        "text": "Price includes only whole bags multiplied by the supplied amount. Equipment rental, labor, access work, air sealing, protective arrangements and disposal are separate project items. A zero price leaves the quantity result useful while giving a zero material-price scenario. This is a purchasing worksheet in any currency, not a contractor quotation or a local installed-cost benchmark."
      },
      {
        "title": "Installation decisions",
        "text": "Quantities cannot establish safe access, moisture control, ventilation clearance or approved contact with fixtures. Existing conditions and product instructions require review by an appropriate installer. The DOE reference explains why air sealing and installation quality matter beyond nominal material quantity. Keep the package specification, measured area and allowance together with the calculation when comparing purchase options."
      }
    ],
    "limitations": "Supplied-coverage purchasing arithmetic, not an R-value selector, building-code assessment or installation plan. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Is this a blow in insulation calculator?",
        "answer": "It estimates bags for blown insulation using actual product-label coverage. It does not prescribe installation performance."
      },
      {
        "question": "Does it choose an R-value?",
        "answer": "No. Supply coverage for an independently selected specification from the exact product documentation."
      },
      {
        "question": "Why are bags rounded up?",
        "answer": "A purchase count uses whole bags. The unrounded area-to-coverage ratio is not a whole package order."
      },
      {
        "question": "Can I compare two products?",
        "answer": "Yes. Calculate each separately with its own coverage at the same verified performance basis and supplied price."
      },
      {
        "question": "Is the price installed cost?",
        "answer": "No. It is bag material cost only; labor, equipment and other work remain separate."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "blow in insulation calculator"
    ]
  },
  {
    "slug": "euler-method-calculator",
    "title": "Euler’s Method Calculator",
    "shortTitle": "Euler’s Method",
    "category": "Education",
    "description": "Apply explicit Euler steps to y′=a·x+b·y+c with initial conditions, signed step size, final estimate and bounded iteration preview.",
    "intro": "Apply explicit Euler steps to y′=a·x+b·y+c with initial conditions, signed step size, final estimate and bounded iteration preview. The three coefficient fields define the entire right-hand side a·x+b·y+c. For y′=y, use a=0, b=1, c=0. For y′=x, use a=1, b=0, c=0. Expressions such as sin(x), xy or y² cannot be encoded by these three coefficients and must not be approximated by pretending they are supported modes.",
    "formula": "For y′ = a·x + b·y + c, yₙ₊₁ = yₙ + h(a·xₙ + b·yₙ + c), and xₙ₊₁ = xₙ + h.",
    "example": "For y′=y with x₀=0, y₀=1 and h=0.1, two steps give y₁=1.1 and y₂=1.21 at x=0.2. Ten steps give about 2.59374246 at x=1, compared with the exact solution e≈2.71828.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with equation coefficients.",
      "Review initial conditions and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check read the preview before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Equation coefficients",
        "text": "The three coefficient fields define the entire right-hand side a·x+b·y+c. For y′=y, use a=0, b=1, c=0. For y′=x, use a=1, b=0, c=0. Expressions such as sin(x), xy or y² cannot be encoded by these three coefficients and must not be approximated by pretending they are supported modes."
      },
      {
        "title": "Initial conditions",
        "text": "The initial x and y describe one point on the solution. Changing that point can change the full trajectory, even with identical coefficients and step size. Check the order of initial values against your assignment. The final x follows from the initial x plus the number of steps times h; it is an output, not an independently fitted target endpoint."
      },
      {
        "title": "Signed step size",
        "text": "Positive h moves forward in x and negative h moves backward. Zero h is rejected because it does not advance the solution. To reach a chosen endpoint, derive h from the intended interval and step count before calculating. A step that overshoots the desired endpoint does not automatically shorten itself; this worksheet always performs the supplied number of equal steps."
      },
      {
        "title": "Approximation behavior",
        "text": "Each update uses the slope at the start of its step, so Euler's method generally accumulates numerical error. Reducing the step and increasing the count for the same interval can improve a comparison, but does not certify accuracy or stability. Some equations and step sizes diverge. The finite-range guard rejects an exploding iteration instead of presenting infinity as a usable answer."
      },
      {
        "title": "Read the preview",
        "text": "The output shows the final estimate and the first few iteration points. It is not a complete downloadable table or a plotted exact solution. Manually verify the first update from the given initial condition, then compare the final point with an analytic solution when one is available. Keep the coefficient tuple, signed step and iteration count in any report of the estimate."
      }
    ],
    "limitations": "Explicit Euler for affine differential equations only, bounded to 1,000 steps. No arbitrary expression parser, adaptive solver or certified error bound. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Can I enter any differential equation?",
        "answer": "No. Only y′=a·x+b·y+c is implemented; the displayed coefficient fields define that scope."
      },
      {
        "question": "Does a smaller step guarantee accuracy?",
        "answer": "No. It can improve suitable problems, but error and stability depend on the equation and interval."
      },
      {
        "question": "How do I reach a specific x?",
        "answer": "Choose h=(target x−initial x)/number of steps and verify the resulting final x."
      },
      {
        "question": "Can I move backward?",
        "answer": "Yes. A negative non-zero step advances toward smaller x values."
      },
      {
        "question": "Is the preview the full solution table?",
        "answer": "No. It shows a short initial preview and the final point, with at most 1,000 bounded iterations."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "euler's method calculator"
    ]
  },
  {
    "slug": "log-weight-calculator",
    "title": "Log Weight Calculator",
    "shortTitle": "Log Weight",
    "category": "Home",
    "description": "Estimate an ideal tapered log’s volume and mass from two measured end diameters, length and independently supplied bulk density.",
    "intro": "Estimate an ideal tapered log’s volume and mass from two measured end diameters, length and independently supplied bulk density. The calculator treats a log as a straight circular frustum, connecting the two supplied circular end sections. It assumes a linear change in radius along the length. A bent trunk, flared butt, hollow section or irregular cross-section departs from this model. Measure representative end diameters consistently and document whether bark is included rather than silently mixing inside- and outside-bark measurements.",
    "formula": "Circular-frustum volume = π·length·(r²+rR+R²)/3, with radii in feet. Estimated mass = volume × supplied density.",
    "example": "A 10 ft log with end diameters 12 and 18 in has radii 0.5 and 0.75 ft. Its frustum volume is about 12.43547 ft³. At a supplied density of 40 lb/ft³, its illustrative weight is about 497.419 lb, or 225.625389 kg.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with taper model.",
      "Review diameter conversion and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check handling limits before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Taper model",
        "text": "The calculator treats a log as a straight circular frustum, connecting the two supplied circular end sections. It assumes a linear change in radius along the length. A bent trunk, flared butt, hollow section or irregular cross-section departs from this model. Measure representative end diameters consistently and document whether bark is included rather than silently mixing inside- and outside-bark measurements."
      },
      {
        "title": "Diameter conversion",
        "text": "Both diameters are entered in inches and converted to radii in feet by dividing by twenty-four. Length remains in feet, so the volume is cubic feet. Dividing a diameter by twelve changes units but does not make it a radius. That error can multiply the calculated volume by four and is worth checking before considering the density input."
      },
      {
        "title": "Density basis",
        "text": "Density must describe the actual wood and moisture condition on a compatible mass-per-volume basis. A generic dry-species value may understate a fresh or saturated log, while bark and voids can change the effective bulk value. The calculator supplies no density table and cannot infer species from diameter. If density is uncertain, run separately labeled low and high scenarios using independently supported values."
      },
      {
        "title": "Mass versus stacked volume",
        "text": "A solid geometric log volume differs from a firewood cord, which describes a stacked volume containing spaces. Do not multiply a cord volume by solid-wood density without separately establishing the solid fraction. The adjacent cord tool answers a different measurement question. Keeping the distinction visible avoids treating two forestry quantities with the same unit label as equivalent physical volumes."
      },
      {
        "title": "Handling limits",
        "text": "An illustrative mass does not establish a crane, sling, trailer, axle or vehicle capacity. Real lifting plans require verified weight and appropriately qualified assessment of equipment and conditions. Use this worksheet to understand how taper, length and supplied density affect arithmetic, then verify an actual mass independently when a safety-critical operation or commercial weigh ticket requires it."
      }
    ],
    "limitations": "Ideal circular frustum with independently supplied bulk density. No species/moisture inference, load-rating decision or lifting recommendation. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does the calculator know wood species?",
        "answer": "No. You supply a suitable density; species and moisture are not inferred."
      },
      {
        "question": "Can both end diameters be equal?",
        "answer": "Yes. The frustum then reduces to a cylinder with the same radius and length."
      },
      {
        "question": "Is this a firewood cord calculator?",
        "answer": "No. It estimates solid frustum volume and mass, while cords measure stacked wood including gaps."
      },
      {
        "question": "Does it approve a lifting plan?",
        "answer": "No. A geometric estimate cannot establish safe equipment loading or handling."
      },
      {
        "question": "What happens when density doubles?",
        "answer": "With the same geometry, the estimated mass doubles and the displayed geometric volume stays unchanged."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "log weight calculator"
    ]
  },
  {
    "slug": "roman-numeral-converter",
    "title": "Roman Numeral Converter",
    "shortTitle": "Roman Numeral",
    "category": "Education",
    "description": "Convert numbers, canonical Roman numerals and real Gregorian date components with explicit notation limits and labeled date order.",
    "intro": "Convert numbers, canonical Roman numerals and real Gregorian date components with explicit notation limits and labeled date order. Number mode converts ordinary whole digits to Roman symbols; Roman mode converts symbols back to a number. Date mode expects YYYY-MM-DD rather than a locale-dependent slash format. The same text field serves these different inputs, so select the correct mode before calculating. Input changes preserve the previous answer until the next explicit submission.",
    "formula": "Convert 1–3999 using M, CM, D, CD, C, XC, L, XL, X, IX, V, IV and I. Date mode converts day/month/year separately.",
    "example": "2026 becomes MMXXVI. Reverse mode converts MCMXCIV to 1994. Date 2026-10-04 becomes IV / X / MMXXVI, with day first. The date format is a modern component conversion, not the calendar system used in ancient Rome.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with select the direction.",
      "Review subtractive conventions and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check review decorative output before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Select the direction",
        "text": "Number mode converts ordinary whole digits to Roman symbols; Roman mode converts symbols back to a number. Date mode expects YYYY-MM-DD rather than a locale-dependent slash format. The same text field serves these different inputs, so select the correct mode before calculating. Input changes preserve the previous answer until the next explicit submission."
      },
      {
        "title": "Subtractive conventions",
        "text": "The generator uses IV for four, IX for nine and corresponding tens and hundreds forms. Reverse conversion validates a canonical round trip rather than merely adding arbitrary symbol values. Informal IIII on some clock faces is therefore rejected. That rejection identifies a convention mismatch, not a claim that historical Roman inscriptions always followed one uniform modern spelling system."
      },
      {
        "title": "Birthday and date notation",
        "text": "A roman numeral birthday converter represents three modern Gregorian components separately. The displayed order is day, month, year, labeled directly in the result. April tenth and October fourth cannot be distinguished by an unlabeled pair of numerals alone, so retain the ordering note. Invalid dates such as February thirtieth are rejected before any numeral conversion occurs."
      },
      {
        "title": "Range boundaries",
        "text": "Conventional symbols without overbars naturally support the implemented one-through-3999 range. This is a deliberate parser boundary, not an assertion that historical large-number notation did not exist. Roman notation here has no zero or negative representation. Years below 1000 need leading zeros in the ISO input, such as 0099-01-01; the numeral output itself does not preserve those zeros."
      },
      {
        "title": "Review decorative output",
        "text": "Before printing a roman numeral date on an invitation, engraving or design, independently confirm the original Gregorian date and the chosen display order. A roman letters converter changes notation, not chronology or language. Read each symbol group back to its ordinary integer. Reverse mode provides that check for an individual component, while the full date remains explicitly separated by slashes."
      }
    ],
    "limitations": "Canonical subtractive Roman notation, integers 1–3999 and real Gregorian dates with years 0001–3999. No zero, negatives, overbars or ancient-calendar conversion. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Can this generate Roman numerals?",
        "answer": "Yes. Number mode converts whole values from one through 3999 using canonical subtractive notation."
      },
      {
        "question": "Can I convert a birthday?",
        "answer": "Yes. Enter a real ISO Gregorian date and choose date mode; the output is day/month/year in Roman symbols."
      },
      {
        "question": "Why is IIII rejected?",
        "answer": "Reverse mode requires canonical subtractive IV. Historical or decorative alternatives are outside this parser."
      },
      {
        "question": "Is zero supported?",
        "answer": "No. This conventional Roman numeral system has no implemented symbol for zero."
      },
      {
        "question": "Does it convert to the ancient Roman calendar?",
        "answer": "No. It converts modern Gregorian date components individually, without Roman calendar terminology."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "roman letters converter",
      "roman numeral generator",
      "roman numeral date converter",
      "roman number converter",
      "roman numeral birthday converter",
      "roman numbers convert date"
    ]
  },
  {
    "slug": "prop-slip-calculator",
    "title": "Prop Slip Calculator",
    "shortTitle": "Prop Slip",
    "category": "Engineering",
    "description": "Calculate apparent propeller slip from matched engine RPM, reduction ratio, nominal pitch and measured mph, preserving negative results.",
    "intro": "Calculate apparent propeller slip from matched engine RPM, reduction ratio, nominal pitch and measured mph, preserving negative results. Enter engine RPM divided by propeller RPM, not the opposite ratio. A two-to-one reduction means two engine revolutions per propeller revolution and is entered as 2. If the engine turns at 5,000 RPM, the shaft turns at 2,500 RPM. Verify the installed transmission specification because a visually similar drive or replaced gearset can have a different ratio.",
    "formula": "No-slip mph = engine RPM ÷ gear reduction × pitch inches ÷ 1056. Apparent slip % = (1 − measured mph/no-slip mph) × 100.",
    "example": "At 5,000 engine RPM, 2:1 reduction and 20 in pitch, propeller speed is 2,500 RPM and nominal no-slip speed is about 47.348485 mph. A measured 42 mph gives about 11.296% apparent slip.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with gear reduction.",
      "Review nominal pitch and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check comparison boundaries before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Gear reduction",
        "text": "Enter engine RPM divided by propeller RPM, not the opposite ratio. A two-to-one reduction means two engine revolutions per propeller revolution and is entered as 2. If the engine turns at 5,000 RPM, the shaft turns at 2,500 RPM. Verify the installed transmission specification because a visually similar drive or replaced gearset can have a different ratio."
      },
      {
        "title": "Nominal pitch",
        "text": "Pitch is the nominal advance in inches per revolution in the geometric no-slip model. It is not propeller diameter or the distance covered by the boat in one engine revolution. Cup, effective pitch, manufacturer definitions and real loading can complicate comparisons. Supply the documented pitch and interpret the output as apparent slip against that nominal basis."
      },
      {
        "title": "Matched measurements",
        "text": "Boat speed and engine RPM should describe the same steady operating interval. Combining a peak RPM from one run with a peak speed from another changes the meaning. Speed input is mph; knots and kilometers per hour need conversion first. Keep notes about measurement method, direction, current and conditions so a second calculation is not mistaken for a controlled performance experiment."
      },
      {
        "title": "Negative apparent slip",
        "text": "The result intentionally preserves negative values when measured speed exceeds the nominal no-slip model. It can indicate inconsistent pitch, ratio, speed or RPM records and is not clamped into a plausible-looking positive percentage. Do not infer a mechanical improvement or impossible physical efficiency from that sign alone. Review the measurement basis and effective-pitch assumptions before interpreting it."
      },
      {
        "title": "Comparison boundaries",
        "text": "Apparent slip is one derived ratio, not a complete propeller or vessel assessment. Loading, ventilation, hull state and operating conditions can change performance. A lower calculated percentage does not by itself prove a safer or better setup. The tool provides transparent arithmetic from your supplied data and cannot authorize engine operating limits, propeller changes or navigation speed."
      }
    ],
    "limitations": "Apparent slip from supplied steady measurements and nominal pitch. No safe-speed prediction, propeller selection, engine setup or performance guarantee. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Should I enter engine or prop RPM?",
        "answer": "Enter engine RPM and the engine-to-propeller reduction ratio. Propeller RPM is calculated separately."
      },
      {
        "question": "Are knots accepted directly?",
        "answer": "No. Convert the measured speed to mph before entering it."
      },
      {
        "question": "Why can slip be negative?",
        "answer": "Supplied speed can exceed the nominal pitch model. The result preserves that inconsistency for review."
      },
      {
        "question": "Does pitch mean diameter?",
        "answer": "No. Pitch is nominal advance per revolution; diameter is a different propeller dimension."
      },
      {
        "question": "Does the result select a propeller?",
        "answer": "No. It is supplied-measurement arithmetic, not a setup recommendation or safe-speed forecast."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "prop slip calculator"
    ]
  },
  {
    "slug": "rc-filter-calculator",
    "title": "RC Filter Calculator",
    "shortTitle": "RC Filter",
    "category": "Engineering",
    "description": "Calculate ideal first-order RC cutoff, time constant and low-pass or high-pass amplitude at a supplied frequency with unit checks.",
    "intro": "Calculate ideal first-order RC cutoff, time constant and low-pass or high-pass amplitude at a supplied frequency with unit checks. Low-pass mode describes output across the capacitor of an ideal series RC stage. High-pass mode describes output across the resistor in the corresponding ideal arrangement. Both have the same corner frequency but different response away from it. Selecting a mode changes the modeled output; it does not rewire an actual circuit or confirm that your measured node has the assumed topology.",
    "formula": "τ=RC with C in farads; f꜀=1/(2πRC). For x=2πfRC, low-pass magnitude=1/√(1+x²), high-pass magnitude=x/√(1+x²). Gain dB=20log₁₀(magnitude).",
    "example": "R=1,000 Ω and C=100 nF give τ=0.1 ms and cutoff≈1,591.54943 Hz. At 1,000 Hz, the ideal low-pass amplitude ratio is about 0.846733 and the high-pass ratio about 0.532018. At cutoff, either magnitude is 1/√2.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with topology matters.",
      "Review capacitance units and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check real circuit checks before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Topology matters",
        "text": "Low-pass mode describes output across the capacitor of an ideal series RC stage. High-pass mode describes output across the resistor in the corresponding ideal arrangement. Both have the same corner frequency but different response away from it. Selecting a mode changes the modeled output; it does not rewire an actual circuit or confirm that your measured node has the assumed topology."
      },
      {
        "title": "Capacitance units",
        "text": "The field uses nanofarads, while the formula uses farads. The implementation multiplies the entered capacitance by one billionth before calculating RC. A 100 nF capacitor is 0.0000001 F. Entering microfarads as if they were nanofarads shifts the corner frequency by a factor of one thousand, so compare the component marking and its unit carefully."
      },
      {
        "title": "Cutoff versus stopband",
        "text": "The corner is the point where ideal amplitude falls to approximately 0.707 of the relevant passband reference, or about −3.0103 dB. It is not a frequency beyond which the signal becomes zero. A first-order response changes gradually. The selected evaluation frequency lets you inspect one point rather than treating the cutoff as a brick-wall boundary."
      },
      {
        "title": "Amplitude and decibels",
        "text": "The displayed ratio is a voltage-amplitude magnitude under the unloaded model. Its decibel expression uses twenty times the base-ten logarithm. It is not a phase response or a direct power ratio for arbitrary impedances. At zero frequency, the ideal high-pass magnitude is zero and the logarithmic gain is negative infinity; that is a defined model boundary rather than a numeric crash."
      },
      {
        "title": "Real circuit checks",
        "text": "Source resistance, load impedance, capacitor tolerance, parasitic effects and measurement equipment can change the observed response. Compare the actual circuit against the assumed single stage before applying this worksheet. Cascading stages without isolation does not automatically equal multiplying ideal isolated gains. Use measured component values for a comparison, and verify a real design with appropriate circuit analysis and safe measurement practice."
      }
    ],
    "limitations": "Single unloaded passive first-order RC stage. No component selection, active-filter design, loading correction or electrical safety approval. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "What capacitance unit is used?",
        "answer": "Nanofarads. The formula converts it to farads internally."
      },
      {
        "question": "Are low-pass and high-pass both supported?",
        "answer": "Yes, for the stated single unloaded passive RC topology and one supplied evaluation frequency."
      },
      {
        "question": "Is the cutoff a complete signal block?",
        "answer": "No. It is the ideal corner point; attenuation is gradual for a first-order stage."
      },
      {
        "question": "Why does high-pass show −∞ dB at zero Hz?",
        "answer": "Its ideal DC amplitude is zero, whose logarithmic gain is negative infinity."
      },
      {
        "question": "Does it include loading or tolerances?",
        "answer": "No. Real source/load impedance and component variation require separate circuit review."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "rc filter calculator"
    ]
  },
  {
    "slug": "probability-calculator",
    "title": "Probability Calculator",
    "shortTitle": "Probability",
    "category": "Education",
    "description": "Calculate two-event union, intersection, neither and conditional probabilities using explicit independence or a supplied feasible overlap.",
    "intro": "Calculate two-event union, intersection, neither and conditional probabilities using explicit independence or a supplied feasible overlap. Enter zero through one, such as 0.25 for twenty-five percent. The result is displayed as percentages to distinguish the input scale from the output scale. Negative probabilities and values above one are rejected. A chance calculator needs a defined sample space and events; this worksheet cannot decide the probability of an unspecified real-world outcome from a label alone.",
    "formula": "P(A∪B)=P(A)+P(B)−P(A∩B). Independent mode uses P(A∩B)=P(A)P(B). P(neither)=1−P(A∪B). P(A|B)=P(A∩B)/P(B).",
    "example": "For independent P(A)=0.4 and P(B)=0.3, the intersection is 0.12, inclusive union is 0.58, neither is 0.42 and P(A given B)=0.4. If an independently established intersection is instead 0.1, the union becomes 0.6.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with probabilities as decimals.",
      "Review inclusive or and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check conditional direction before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Probabilities as decimals",
        "text": "Enter zero through one, such as 0.25 for twenty-five percent. The result is displayed as percentages to distinguish the input scale from the output scale. Negative probabilities and values above one are rejected. A chance calculator needs a defined sample space and events; this worksheet cannot decide the probability of an unspecified real-world outcome from a label alone."
      },
      {
        "title": "Inclusive or",
        "text": "The union means A happens, B happens, or both happen. Simply adding the two probabilities double-counts their overlap, so the intersection is subtracted once. Exclusive-or is a different event and is not the main output. When interpreting how to calculate probability, write the event statement first so the operation matches the question rather than selecting a familiar formula by name."
      },
      {
        "title": "Independence assumption",
        "text": "Independent mode multiplies P(A) and P(B). Choosing it asserts a relationship supplied by the user, not a conclusion discovered by the calculator. Events observed together are not automatically independent. Mutual exclusivity also differs: mutually exclusive events have zero intersection, while independent positive-probability events generally have a nonzero intersection. Use supplied-intersection mode for an independently established overlap."
      },
      {
        "title": "Feasible overlap",
        "text": "A supplied intersection cannot exceed either event probability and cannot be less than max(0,P(A)+P(B)−1). These bounds ensure union and neither remain valid probabilities. For P(A)=0.8 and P(B)=0.7, overlap must be at least 0.5. The check prevents impossible combinations but does not prove that the supplied values represent a correct real sample space."
      },
      {
        "title": "Conditional direction",
        "text": "P(A given B) uses B as the conditioning event and divides the overlap by P(B). It is not P(B given A), which usually differs. If P(B)=0, the conditional output is explicitly undefined. When learning how to calculate chance, verify the direction and denominator as carefully as the numerator, especially when interpreting evidence or comparing unequal base rates."
      }
    ],
    "limitations": "Two-event probability identities only. Independence is supplied explicitly; no event forecasting, frequency fitting, combinatorial solver or guaranteed chance model. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does or include both events?",
        "answer": "Yes. The main union output is inclusive, so an outcome where both occur is counted once."
      },
      {
        "question": "Is independence detected?",
        "answer": "No. Independent mode uses your explicit assumption; otherwise supply an established intersection."
      },
      {
        "question": "Can I enter percentages like 25?",
        "answer": "No. Enter 0.25 for 25 percent. Values must lie between zero and one."
      },
      {
        "question": "What if the overlap is impossible?",
        "answer": "Supplied mode rejects an intersection outside the feasible probability bounds."
      },
      {
        "question": "Why is a conditional result undefined?",
        "answer": "Conditioning on an event with probability zero gives a zero denominator under this elementary formula."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "probability calculator",
      "how to calculate probability",
      "chance calculator",
      "how to calculate chance"
    ]
  },
  {
    "slug": "target-heart-rate-calculator",
    "title": "Target Heart Rate Calculator",
    "shortTitle": "Target Heart Rate",
    "category": "Health",
    "description": "Explore adult age-predicted maximum heart rate and supplied percentage references, with clear limits on individual interpretation.",
    "intro": "Explore adult age-predicted maximum heart rate and supplied percentage references, with clear limits on individual interpretation. The maximum heart rate calculator uses the familiar 220-minus-age relationship as a broad reference. Actual individual maximum can differ substantially. Finding maximum heart rate by this formula is not the same as measuring it through a supervised assessment. Treat the output as an explanation of the relationship and retain the age-based label when sharing it with another person.",
    "formula": "Age-predicted maximum = 220−adult age. Illustrative lower/upper references = predicted maximum × supplied percentage/100.",
    "example": "Age 40 gives a population-formula maximum of 180 bpm. Supplied percentages of 50 and 70 give illustrative references of 90 and 126 bpm. These are outputs of the chosen age formula, not measured personal exercise limits.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with population estimate.",
      "Review supplied percentage band and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check interpreting comparisons before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Population estimate",
        "text": "The maximum heart rate calculator uses the familiar 220-minus-age relationship as a broad reference. Actual individual maximum can differ substantially. Finding maximum heart rate by this formula is not the same as measuring it through a supervised assessment. Treat the output as an explanation of the relationship and retain the age-based label when sharing it with another person."
      },
      {
        "title": "Supplied percentage band",
        "text": "The lower and upper percentages are editable inputs and must be ordered within one through one hundred. Defaults illustrate the AHA's broad moderate-intensity reference, but selecting a different band does not make it appropriate for you. A target HR calculator cannot infer fitness, medication effects, symptoms or a clinician's exercise plan from age alone."
      },
      {
        "title": "Measured pulse distinction",
        "text": "The tool does not calculate heart rate from a pulse-count timing input or read a wearable. Its bpm outputs come from the predicted maximum and supplied fractions. If you have an observed pulse, record it separately with the measurement context and do not replace it with an age formula. Sensor errors and changing effort also affect comparisons to an illustrative band."
      },
      {
        "title": "Health and medication context",
        "text": "Medicines and health conditions can affect pulse response and the meaning of a percentage reference. The AHA advises appropriate professional guidance where these factors apply. This educational worksheet does not classify a pulse as safe, abnormal or dangerous and gives no individualized instruction to increase effort to reach a displayed number. Existing professional advice takes precedence over a generic formula."
      },
      {
        "title": "Interpreting comparisons",
        "text": "For the same age, raising the supplied percentage raises the corresponding reference linearly. For the same percentage, increasing age lowers the formula's reference. Those are mathematical properties, not proof that fitness changes by that amount each year. The max HR calculator is limited to adult inputs and should not be repurposed for children, rehabilitation decisions or a diagnosis."
      }
    ],
    "limitations": "Adult population-reference arithmetic, ages 18–100. Not measured maximum, diagnosis, exercise clearance, individual training prescription or emergency triage. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Is the displayed maximum my measured maximum?",
        "answer": "No. It is the 220-minus-age population estimate and may differ from an individual measurement."
      },
      {
        "question": "Does the tool prescribe a training zone?",
        "answer": "No. It applies user-supplied percentages to an educational reference."
      },
      {
        "question": "Can medication affect interpretation?",
        "answer": "Yes. Medicines and health conditions may change pulse response; professional guidance may be needed."
      },
      {
        "question": "Can I calculate a pulse from counted beats here?",
        "answer": "No. This page calculates age-based references, not a timed pulse count or wearable reading."
      },
      {
        "question": "Are children included?",
        "answer": "No. The implemented age range is adults eighteen through one hundred."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "finding maximum heart rate calculator",
      "maximum heart rate calculator",
      "max heart rate calculator",
      "max hr calculator",
      "heart rate calculator",
      "target hr calculator",
      "calculate heart rate"
    ]
  },
  {
    "slug": "pension-benefit-calculator",
    "title": "Pension Benefit Calculator",
    "shortTitle": "Pension Benefit",
    "category": "Finance",
    "description": "Calculate a supplied final-salary pension accrual scenario from pensionable pay, credited service, accrual denominator and adjustment.",
    "intro": "Calculate a supplied final-salary pension accrual scenario from pensionable pay, credited service, accrual denominator and adjustment. This pension calculator models a salary-linked accrual formula, not investment growth in an account balance. A defined-benefit plan and a defined-contribution pot use different mechanisms. Verify that your plan actually uses the supplied salary, service and accrual basis. Pension plans calculator queries can cover many systems; this page deliberately implements only the clearly displayed final-salary worksheet.",
    "formula": "Annual accrued benefit = pensionable annual salary × credited service years / accrual denominator. Adjusted benefit = accrued benefit × supplied adjustment/100. Monthly equivalent = annual/12.",
    "example": "Annual pensionable salary 60,000, credited service 20 years and an accrual rate of 1/60 produce 20,000 currency units per year. A supplied 90% adjustment gives 18,000 annually or 1,500 monthly, before any separately applicable tax or deductions.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with benefit structure.",
      "Review pensionable pay and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check annual versus monthly before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Benefit structure",
        "text": "This pension calculator models a salary-linked accrual formula, not investment growth in an account balance. A defined-benefit plan and a defined-contribution pot use different mechanisms. Verify that your plan actually uses the supplied salary, service and accrual basis. Pension plans calculator queries can cover many systems; this page deliberately implements only the clearly displayed final-salary worksheet."
      },
      {
        "title": "Pensionable pay",
        "text": "Annual pensionable salary may differ from gross earnings, bonuses or the final paycheck. Use the plan's own definition and the same reference period required by its rules. A career-average scheme cannot generally be represented by entering current salary as if it were final salary. The field is supplied data, so the calculator makes no determination that any earnings qualify."
      },
      {
        "title": "Credited service",
        "text": "Service years should be the credited amount under the plan, including any independently verified fractional year. Calendar employment duration can differ because of breaks, part-time rules, purchases or other scheme provisions. The worksheet does not interpret those provisions. Keep the service statement with the calculation rather than deriving entitlement solely from hire and retirement dates."
      },
      {
        "title": "Accrual and adjustment",
        "text": "Enter 60 for an accrual of one sixtieth per year, not 0.016667. The optional adjustment is a multiplier supplied as a percentage, with 100 leaving the accrued result unchanged. It is not automatically an early-retirement factor or an official reduction table. Applying a guessed factor could materially misstate an expected benefit even though the arithmetic is internally consistent."
      },
      {
        "title": "Annual versus monthly",
        "text": "Dividing by twelve gives a monthly equivalent, not proof of the actual payment schedule, net deposit or indexation. Lump sums, survivor options, guarantees, caps, inflation increases and taxes are not included. Use an administrator quotation for decisions and compare its assumptions with this worksheet. Results remain educational financial arithmetic in the currency of the supplied salary, without a hidden exchange rate."
      }
    ],
    "limitations": "Currency-neutral supplied final-salary defined-benefit worksheet. No administrator entitlement, state pension, investment-pot projection, tax or retirement recommendation. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does this calculate a state pension?",
        "answer": "No. It models a supplied salary/service/accrual defined-benefit formula only."
      },
      {
        "question": "What does an accrual denominator of 60 mean?",
        "answer": "Each credited year accrues one sixtieth of the supplied pensionable annual salary before adjustment."
      },
      {
        "question": "Is the monthly value after tax?",
        "answer": "No. It is annual benefit divided by twelve, with no tax or deduction model."
      },
      {
        "question": "Does 90% mean an official early-retirement factor?",
        "answer": "No. It is your supplied multiplier and must come from an independently verified source."
      },
      {
        "question": "Can I project an investment pension pot here?",
        "answer": "No. Account growth requires a separate contribution and investment model."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "pension calculator",
      "pension plans calculator"
    ]
  },
  {
    "slug": "grams-to-ml-converter",
    "title": "Grams to mL Converter",
    "shortTitle": "Grams to mL",
    "category": "Education",
    "description": "Convert grams to milliliters or reverse using your supplied material density, with explicit units and no universal water assumption.",
    "intro": "Convert grams to milliliters or reverse using your supplied material density, with explicit units and no universal water assumption. Grams measure mass and milliliters measure volume. Their conversion needs density, a property of the actual material under stated conditions. The grams and milliliters converter therefore includes a mandatory density input instead of silently treating every substance as water. Equal numeric amounts of grams and milliliters occur only when the supplied density is exactly one gram per milliliter.",
    "formula": "Volume mL = mass g / density g/mL. Reverse mode: mass g = volume mL × density g/mL.",
    "example": "At a supplied density of 0.8 g/mL, 100 g occupies 125 mL. In reverse mode, 125 mL at the same density has a mass of 100 g. This example is arithmetic with a supplied density, not an identification of a particular substance.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with mass is not volume.",
      "Review density source and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check precision and scope before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Mass is not volume",
        "text": "Grams measure mass and milliliters measure volume. Their conversion needs density, a property of the actual material under stated conditions. The grams and milliliters converter therefore includes a mandatory density input instead of silently treating every substance as water. Equal numeric amounts of grams and milliliters occur only when the supplied density is exactly one gram per milliliter."
      },
      {
        "title": "Density source",
        "text": "Use measured or documented density for the relevant temperature, concentration and material condition. A bulk powder density can depend on packing and does not necessarily equal solid-particle density. A liquid's composition can also matter. The worksheet cannot inspect an ingredient or determine which published number applies. Preserve the density source and conditions with any converted quantity you intend to reproduce."
      },
      {
        "title": "Choose the input quantity",
        "text": "Mass mode takes grams and divides by density to return milliliters. Volume mode takes milliliters and multiplies by density to return grams. Changing the mode without changing the amount reinterprets the same numeric field, so review the label before submission. This is a physical-quantity conversion, not a conversion between different concentration conventions or a chemical reaction balance."
      },
      {
        "title": "Unit consistency",
        "text": "Density must be entered in grams per milliliter. Kilograms per cubic meter have a different numeric scale, even though both express mass per volume. Convert a reference density to the displayed unit before entering it. Likewise, the amount field does not accept liters or kilograms directly. Input units are part of the calculation and should stay with the result in a lab or recipe note."
      },
      {
        "title": "Precision and scope",
        "text": "Density uncertainty limits conversion accuracy even when the arithmetic shows several decimal places. Rounding should follow the quality of the source measurements. No medication dose, concentration safety or formulation suitability is inferred from the output. Zero amount converts to zero, while zero density is rejected because dividing by it cannot represent a valid positive-density material conversion."
      }
    ],
    "limitations": "User-supplied density conversion only. No universal mass-volume equality, material identification, dosing or formulation approval. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Is one gram always one milliliter?",
        "answer": "No. That equality requires a density of exactly 1 g/mL under the stated conditions."
      },
      {
        "question": "Can I convert in both directions?",
        "answer": "Yes. Choose mass or volume mode and supply the matching quantity and density."
      },
      {
        "question": "Does the tool identify a substance?",
        "answer": "No. You supply the density from an appropriate independent measurement or reference."
      },
      {
        "question": "Can I enter density in kg/m³?",
        "answer": "Convert it to g/mL first. The displayed field expects grams per milliliter."
      },
      {
        "question": "Is this a dose or concentration calculator?",
        "answer": "No. It converts mass and volume through density and makes no dosing or formulation recommendation."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "grams and milliliters converter"
    ]
  },
  {
    "slug": "siding-course-calculator",
    "title": "Siding Course Calculator",
    "shortTitle": "Siding Course",
    "category": "Home",
    "description": "Count whole siding boards by rectangular wall courses, stock length, exposed height and supplied allowance, without offcut optimization.",
    "intro": "Count whole siding boards by rectangular wall courses, stock length, exposed height and supplied allowance, without offcut optimization. The visible coverage after overlap is the course exposure, not the full manufactured board width. Enter the actual specified exposure in inches from your independently chosen product and installation plan. Using the full width as exposure can undercount courses. The calculator does not choose overlap, reveal or fastening details and should not substitute for the exact manufacturer's installation documentation.",
    "formula": "Courses = ceiling(wall height ft × 12 / exposed height in). Boards per course = ceiling(wall width / usable board length). Order = ceiling(courses × boards per course × (1+allowance/100)).",
    "example": "For a 20 ft wide by 10 ft high wall, 12 ft usable boards and 6 in exposure, there are 20 courses and 2 boards per course. Base quantity is 40 boards; a supplied 10% allowance makes the whole-board order 44.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with exposed height.",
      "Review whole courses and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check ordering allowance before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Exposed height",
        "text": "The visible coverage after overlap is the course exposure, not the full manufactured board width. Enter the actual specified exposure in inches from your independently chosen product and installation plan. Using the full width as exposure can undercount courses. The calculator does not choose overlap, reveal or fastening details and should not substitute for the exact manufacturer's installation documentation."
      },
      {
        "title": "Whole courses",
        "text": "Wall height is converted from feet to inches and divided by exposure, then rounded up to complete the vertical coverage. The top course may need trimming, but it still counts as a course in this model. A sloped gable is not the rectangular wall assumed here; separate measurements or a reviewed layout are needed instead of entering its bounding rectangle as precise coverage."
      },
      {
        "title": "Stock lengths",
        "text": "Each horizontal course receives enough whole usable board lengths to span the wall width. A twenty-foot row using twelve-foot stock needs two boards in this conservative row model. It does not carry an eight-foot leftover into another row. Joint placement, stagger, end clearance and supports can affect the actual cutting plan, so the arithmetic is a starting takeoff rather than an optimized schedule."
      },
      {
        "title": "Openings and offcuts",
        "text": "The tool makes no deductions for doors or windows. Subtracting opening area from a row-based board count is not generally equivalent to adjusting an actual layout. Small cutouts may not save a stock board and reused pieces depend on their position and acceptable joints. Keep those decisions in a separate reviewed cutting schedule instead of treating a surface-area deduction as automatically reusable material."
      },
      {
        "title": "Ordering allowance",
        "text": "Allowance multiplies the base board count, followed by a final whole-board round-up. It is explicit rather than a hidden generic waste rate. Compare zero and planned allowances to understand the additional purchase quantity, then check accessories and trim independently. Quantity does not establish moisture management, wind resistance, fire classification or compliance with any project-specific assembly requirement."
      }
    ],
    "limitations": "One rectangular wall with independent whole boards per horizontal course. No openings, offcut sharing, installation approval, flashing, fastening or structural design. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does the siding calculator use full board width?",
        "answer": "No. It uses exposed height after overlap, supplied in inches."
      },
      {
        "question": "Are offcuts reused automatically?",
        "answer": "No. Each course is counted independently using whole stock boards."
      },
      {
        "question": "Can I deduct windows?",
        "answer": "Not in this model. A reviewed course layout is needed to account for openings and reusable pieces."
      },
      {
        "question": "Does the result include trim and fasteners?",
        "answer": "No. It is a board-count worksheet only, without accessories or installation specifications."
      },
      {
        "question": "Can I calculate several walls?",
        "answer": "Calculate each rectangular wall separately with its own dimensions and then review the combined purchase schedule."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "siding calculator"
    ]
  },
  {
    "slug": "difference-quotient-calculator",
    "title": "Difference Quotient Calculator",
    "shortTitle": "Difference Quotient",
    "category": "Education",
    "description": "Calculate a quadratic difference quotient and derivative limit from numeric coefficients, x and nonzero h with cancellation checks.",
    "intro": "Calculate a quadratic difference quotient and derivative limit from numeric coefficients, x and nonzero h with cancellation checks. Three coefficients define ax²+bx+c. Enter a=0 for a linear function and a=b=0 for a constant. A cubic, sine function or rational expression is outside the implemented family and cannot be represented by these fields. The difference quotient calculator supplies a transparent polynomial example rather than claiming to differentiate every expression a visitor might type.",
    "formula": "For f(x)=ax²+bx+c and nonzero h, [f(x+h)−f(x)]/h = 2ax+ah+b. Derivative limit as h→0 is 2ax+b.",
    "example": "For f(x)=x², x=2 and h=0.1, f(x)=4 and f(x+h)=4.41. The difference quotient is 4.1, while the derivative at x is 4. Reducing h to 0.01 gives a quotient of 4.01.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with function family.",
      "Review finite increment and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check slope comparison before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Function family",
        "text": "Three coefficients define ax²+bx+c. Enter a=0 for a linear function and a=b=0 for a constant. A cubic, sine function or rational expression is outside the implemented family and cannot be represented by these fields. The difference quotient calculator supplies a transparent polynomial example rather than claiming to differentiate every expression a visitor might type."
      },
      {
        "title": "Finite increment",
        "text": "h is the horizontal change between x and x+h and must not be zero. Positive and negative increments are both allowed. The quotient is an average slope across those two points, not generally the derivative at the initial point. For a quadratic, the difference from that derivative is exactly a·h, which makes the effect of changing h particularly easy to inspect."
      },
      {
        "title": "Constant cancellation",
        "text": "The constant c shifts both function values by the same amount and therefore cancels from their difference. Changing c should change the displayed f(x) and f(x+h) but leave the quotient and derivative unchanged. That is a mathematical feature rather than an unused input defect. Check it by calculating the same a,b,x,h with two different constants."
      },
      {
        "title": "Stable expression",
        "text": "The implementation uses the simplified expression 2ax+ah+b directly for the quotient. Subtracting two nearly equal floating-point function values can lose precision for very small h. The separate function-value outputs are still numeric approximations and may look rounded together. Their formatting does not invalidate the directly calculated polynomial quotient or turn it into symbolic exact arithmetic."
      },
      {
        "title": "Slope comparison",
        "text": "Compare the quotient with the derivative limit and note both the sign and size of a·h. A negative increment can approach the limit from the opposite side. For a linear function, every nonzero increment gives the same slope b; for a constant, the result is zero. These controlled checks help distinguish the finite-interval quantity from a limit without inventing a certified general differentiation method."
      }
    ],
    "limitations": "Numeric quadratic-polynomial family only, including linear and constant cases. No general function parser, symbolic algebra or zero-step evaluation. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Can h equal zero?",
        "answer": "No. The finite quotient divides by h. The derivative limit is displayed separately."
      },
      {
        "question": "Does the tool accept arbitrary functions?",
        "answer": "No. It supports ax²+bx+c with numeric coefficients only."
      },
      {
        "question": "Why does changing c not change the quotient?",
        "answer": "The constant appears in both function values and cancels from their difference."
      },
      {
        "question": "Are negative increments valid?",
        "answer": "Yes. They compare x with a point to its left rather than to its right."
      },
      {
        "question": "Is the quotient always the derivative?",
        "answer": "Only in special cases such as linear functions. For a quadratic it differs by a·h."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "difference quotient calculator"
    ]
  },
  {
    "slug": "odds-risk-calculator",
    "title": "Odds and Risk Ratio Calculator",
    "shortTitle": "Odds and Risk Ratio",
    "category": "Health",
    "description": "Compare observed event risks, risk ratio, odds ratio and percentage-point difference from two-group counts, with study-design limits.",
    "intro": "Compare observed event risks, risk ratio, odds ratio and percentage-point difference from two-group counts, with study-design limits. The four cells are group-one events, group-one non-events, group-two events and group-two non-events. They are counts, not percentages or rates. Each group must have at least one observation. Consistent event definitions and observation periods matter; arithmetic cannot repair a table that combines different outcomes or mismatched follow-up. Keep the original labels attached to the reported comparison.",
    "formula": "Observed risk₁=a/(a+b), risk₂=c/(c+d). Risk ratio=risk₁/risk₂. Odds ratio=ad/(bc). Risk difference=(risk₁−risk₂)×100 percentage points.",
    "example": "With group one 20 events and 80 non-events, and group two 10 events and 90 non-events, observed proportions are 20% and 10%. Risk ratio is 2, odds ratio is 2.25 and the risk difference is 10 percentage points.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with arrange the table.",
      "Review risk versus odds and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check interpretation boundaries before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Arrange the table",
        "text": "The four cells are group-one events, group-one non-events, group-two events and group-two non-events. They are counts, not percentages or rates. Each group must have at least one observation. Consistent event definitions and observation periods matter; arithmetic cannot repair a table that combines different outcomes or mismatched follow-up. Keep the original labels attached to the reported comparison."
      },
      {
        "title": "Risk versus odds",
        "text": "Observed risk uses events divided by all observations in a group. Odds use events divided by non-events. Those denominators differ, so a risk ratio and an odds ratio need not be equal. The odds risk calculator displays both explicitly and should not be read as permission to call an odds ratio a relative risk when the study design or outcome frequency makes that inappropriate."
      },
      {
        "title": "Study design",
        "text": "In a case-control sample, investigators select participants based on outcome status, so the sample event proportions do not estimate population risks. The cross-product odds ratio may still be the relevant association measure under appropriate design assumptions. This worksheet does not assess those assumptions or convert a case-control table into a population-risk forecast. Label the observed proportions as sample arithmetic when reporting them."
      },
      {
        "title": "Zero cells",
        "text": "If group two has no events, the elementary risk-ratio denominator is zero and the result is undefined. If the odds-ratio cross-product denominator is zero, that result is also marked undefined. No automatic half-cell correction is inserted. A correction would be a separate analytical choice that changes the method, and small or empty cells warrant appropriate statistical review rather than hidden smoothing."
      },
      {
        "title": "Interpretation boundaries",
        "text": "A ratio describes association in the supplied table, not proof that membership causes an outcome. Sampling, confounding and measurement can change interpretation. The absolute percentage-point difference is displayed separately to avoid confusing a relative multiple with an absolute increase. No confidence intervals or hypothesis tests are generated, and no treatment decision or individual clinical risk prediction follows from this educational arithmetic."
      }
    ],
    "limitations": "Observed two-group table arithmetic. No causal inference, clinical prediction, confidence interval, significance test or population-risk interpretation from case-control sampling. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Are odds and risk the same?",
        "answer": "No. Risk divides events by the group total; odds divide events by non-events."
      },
      {
        "question": "Does the output prove causation?",
        "answer": "No. It is association arithmetic from supplied observations and does not control confounding."
      },
      {
        "question": "Can case-control counts estimate population risk?",
        "answer": "Generally not from the sampled proportions alone. Study design must be considered separately."
      },
      {
        "question": "Are zero cells corrected automatically?",
        "answer": "No. Undefined elementary ratios are labeled explicitly without a hidden adjustment."
      },
      {
        "question": "Does the tool provide confidence intervals?",
        "answer": "No. It supplies point arithmetic only, with no significance test or clinical prediction."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "odds risk calculator"
    ]
  },
  {
    "slug": "time-lapse-calculator",
    "title": "Time-Lapse Calculator",
    "shortTitle": "Time-Lapse",
    "category": "Media",
    "description": "Plan fixed-interval time-lapse capture count, clip duration and speed-up from a recording window, capture interval and playback fps.",
    "intro": "Plan fixed-interval time-lapse capture count, clip duration and speed-up from a recording window, capture interval and playback fps. This time lapse photography calculator includes a capture at the beginning of the window. It also includes the endpoint only when the interval lands exactly on it. A window of ten seconds with a three-second interval schedules captures at zero, three, six and nine seconds. There is no extra capture at ten seconds. Check how your camera defines start and end before copying the count.",
    "formula": "Capture count = floor(recording minutes×60 / interval seconds)+1, including t=0. Playback seconds=count/fps. Last capture=(count−1)×interval. Interval speed-up=interval×fps.",
    "example": "A sixty-minute recording window with five-second intervals schedules 721 captures including the first at zero and last at 3,600 seconds. At 30 fps, playback is about 24.0333 seconds. A camera that counts only completed intervals may use a different endpoint convention.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with first-frame convention.",
      "Review interval versus exposure and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check practical planning before using the result in another record."
    ],
    "considerations": [
      {
        "title": "First-frame convention",
        "text": "This time lapse photography calculator includes a capture at the beginning of the window. It also includes the endpoint only when the interval lands exactly on it. A window of ten seconds with a three-second interval schedules captures at zero, three, six and nine seconds. There is no extra capture at ten seconds. Check how your camera defines start and end before copying the count."
      },
      {
        "title": "Interval versus exposure",
        "text": "The interval is the planned separation between capture start times in this worksheet. Exposure duration, writing time and camera scheduling can constrain a real sequence. An interval shorter than the required capture cycle may produce skipped or delayed frames. The tool does not determine exposure settings or simulate camera behavior, so use the camera manual and an independent trial for an actual setup."
      },
      {
        "title": "Playback duration",
        "text": "Playback length is frame count divided by the supplied frames per second. Doubling the playback frame rate with the same captures halves the resulting clip duration. This count-to-duration arithmetic does not add interpolation or predict motion blur. Keep capture interval and playback frame rate as separate quantities; they have different units and control different stages of the workflow."
      },
      {
        "title": "Speed-up interpretation",
        "text": "Interval seconds multiplied by playback fps gives the nominal time compression between neighboring capture starts. Because the sequence includes an initial frame, total window duration divided by clip duration may differ slightly from that interval-based factor. This endpoint effect is especially noticeable in very short sequences. Report the labeled factor with its convention instead of assuming every possible duration ratio is identical."
      },
      {
        "title": "Practical planning",
        "text": "Storage capacity, battery use, changing light, weather and interruption risk remain outside the calculator. It does not estimate file size without a file-size input or guarantee that a camera captures every planned frame. Save the recording window, interval and fps together with the result. A brief test sequence can check the actual device's endpoint and playback conventions before a longer recording."
      }
    ],
    "limitations": "Fixed-interval capture planning, inclusive first-frame convention. No exposure, storage, battery, variable-rate, dropped-frame or camera-firmware prediction. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Why is one frame added?",
        "answer": "The plan includes an initial capture at t=0, then each interval that fits in the window."
      },
      {
        "question": "Does the endpoint always get a frame?",
        "answer": "Only when it lies exactly on an interval under the stated convention."
      },
      {
        "question": "Is the interval the exposure time?",
        "answer": "No. It is capture-start spacing; real exposure and writing constraints require separate review."
      },
      {
        "question": "Can I estimate playback length?",
        "answer": "Yes. The planned count divided by your supplied playback fps gives clip seconds."
      },
      {
        "question": "Does the tool predict storage or battery use?",
        "answer": "No. File sizes, device power use and dropped frames are not modeled."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "time lapse photography calculator"
    ]
  },
  {
    "slug": "mileage-reimbursement-calculator",
    "title": "Mileage Reimbursement Calculator",
    "shortTitle": "Mileage Reimbursement",
    "category": "Finance",
    "description": "Calculate recorded mileage and supplied-rate reimbursement from odometer readings in miles or kilometers, without automatic tax rates.",
    "intro": "Calculate recorded mileage and supplied-rate reimbursement from odometer readings in miles or kilometers, without automatic tax rates. Use readings from the same instrument and the same trip boundary. End must be at least start. A replaced meter, rollover or mixed vehicles needs a separately reconciled record rather than a negative distance forced into the worksheet. The mileage calculator measures a supplied difference; it does not retrieve a road route, geocode a destination or prove which portion of travel qualifies for reimbursement.",
    "formula": "Trip distance=end odometer−start odometer. Supplied-rate amount=distance×rate. One international mile=1.609344 km.",
    "example": "An odometer changing from 12,000 to 12,120 miles records 120 miles. At a supplied rate of 0.5 currency units per mile, the arithmetic amount is 60 currency units. The equivalent distance is 193.12128 km, without changing the original rate basis.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with odometer record.",
      "Review rate supplied explicitly and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check comparisons and spelling before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Odometer record",
        "text": "Use readings from the same instrument and the same trip boundary. End must be at least start. A replaced meter, rollover or mixed vehicles needs a separately reconciled record rather than a negative distance forced into the worksheet. The mileage calculator measures a supplied difference; it does not retrieve a road route, geocode a destination or prove which portion of travel qualifies for reimbursement."
      },
      {
        "title": "Rate supplied explicitly",
        "text": "Enter the rate in currency per selected distance unit from your applicable policy or independently verified source. No national rate is loaded. Visitors searching mileage calculator 2025 or mileage calculator 2026 must choose the correct period's rate themselves. This avoids silently applying an outdated figure, a rate for the wrong jurisdiction or a policy that does not apply to the trip."
      },
      {
        "title": "Miles and kilometers",
        "text": "The unit selection labels the odometer difference and rate basis together. Switching to kilometers requires readings and rate expressed per kilometer, not merely changing the output label. The other-unit result uses the exact international mile relationship. Converting a distance does not convert a rate automatically; keep distance and rate on the same basis before multiplying them."
      },
      {
        "title": "Record versus entitlement",
        "text": "A numeric reimbursement scenario is not an employer approval or a tax deduction decision. Business purpose, documentation, excluded travel, vehicle rules and local law are not evaluated. Record dates, route purpose and policy references separately when they are required. This worksheet supplies reproducible arithmetic in the currency you entered, while eligibility and payment remain with the relevant authority or agreement."
      },
      {
        "title": "Comparisons and spelling",
        "text": "Calculate mileage here from two odometer values rather than from fuel consumed. The milage calculator spelling refers to the same supported trip-distance task. If you want fuel efficiency, use a separate fuel or economy model with its own consumption inputs. Comparing two rates changes the payment linearly while leaving the recorded distance unchanged; that is a scenario comparison, not evidence that either rate is official."
      }
    ],
    "limitations": "Odometer difference and user-rate reimbursement only. No mapping, fuel economy, tax eligibility, employer approval or automatic 2025/2026 mileage rate. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does it use an official 2026 rate?",
        "answer": "No. It uses only the rate you supply for the applicable policy and period."
      },
      {
        "question": "Can I calculate a route between cities?",
        "answer": "No. Enter odometer readings; no map or geocoding service is used."
      },
      {
        "question": "Are kilometers supported?",
        "answer": "Yes, provided both odometer values and the rate use kilometers consistently."
      },
      {
        "question": "Is the result a tax deduction?",
        "answer": "No. It is supplied-rate arithmetic and does not determine eligibility or legal treatment."
      },
      {
        "question": "Can this calculate fuel mileage?",
        "answer": "No. Fuel economy requires consumption data and is a separate task."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "mileage calculator",
      "mileage calculator 2025",
      "mileage calculator 2026",
      "calculate mileage",
      "milage calculator"
    ]
  },
  {
    "slug": "draw-length-calculator",
    "title": "Draw Length Calculator",
    "shortTitle": "Draw Length",
    "category": "Sport",
    "description": "Convert measured nock-to-grip-pivot distance to ATA-convention draw length in inches and centimeters, without prescribing equipment.",
    "intro": "Convert measured nock-to-grip-pivot distance to ATA-convention draw length in inches and centimeters, without prescribing equipment. The input is measured from the nock reference to the grip's pivot point at full draw, not to the front edge of the riser or the end of an arrow. Those endpoints can produce different values. Use an independently established measurement and a qualified fitting process where appropriate. The calculator converts an existing measurement; it does not explain how to draw a bow safely for measurement.",
    "formula": "ATA-convention draw length in inches = measured nock-to-grip-pivot distance at full draw + 1.75 in. Centimeters convert using 2.54 cm per inch.",
    "example": "A measured nock-to-grip-pivot distance of 26.25 inches gives an ATA-convention draw length of 28 inches, equivalent to 71.12 centimeters. A 66.675 cm pivot distance represents the same input and therefore gives the same result.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with measurement reference.",
      "Review convention allowance and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check equipment boundaries before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Measurement reference",
        "text": "The input is measured from the nock reference to the grip's pivot point at full draw, not to the front edge of the riser or the end of an arrow. Those endpoints can produce different values. Use an independently established measurement and a qualified fitting process where appropriate. The calculator converts an existing measurement; it does not explain how to draw a bow safely for measurement."
      },
      {
        "title": "Convention allowance",
        "text": "The 1.75-inch addition is part of the stated ATA convention. It is not a comfort allowance selected by the software or an instruction to lengthen a physical bow setting. Keep the original pivot measurement and converted convention value labeled separately. Confusing them can create a repeatable arithmetic result with the wrong interpretation when comparing a specification or fitting record."
      },
      {
        "title": "Unit conversion",
        "text": "Inch mode uses the supplied distance directly. Centimeter mode first divides the measurement by 2.54, then adds the convention's inch allowance. Adding 1.75 to a centimeter input before converting would mix units. The result also includes a centimeter equivalent of the final conventional length, so the same measured distance should agree across both input modes."
      },
      {
        "title": "Measured versus estimated",
        "text": "Some draw-length calculators use a wingspan ratio to suggest a preliminary fit. This page deliberately does not implement that unsupplied model. A person's proportions, technique and equipment cannot be reduced to the displayed conversion. The result is an existing measurement expressed by a convention, not a predicted ideal draw length for an unmeasured archer."
      },
      {
        "title": "Equipment boundaries",
        "text": "Conventional draw length does not determine arrow shaft length, spine, release configuration or a safe adjustment range. Those depend on additional equipment and fitting information. A matching number is not approval to change a module or trim an arrow. Use manufacturer documentation and an appropriate archery professional for equipment decisions, and preserve the measurement reference when comparing readings."
      }
    ],
    "limitations": "Measured ATA convention only. No wingspan fit estimate, personalized bow adjustment, arrow-length recommendation or equipment safety approval. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Is this based on wingspan?",
        "answer": "No. It converts an independently measured nock-to-pivot distance using the stated convention."
      },
      {
        "question": "Why add 1.75 inches?",
        "answer": "That addition is part of the ATA draw-length convention described by the manufacturer reference."
      },
      {
        "question": "Can I enter centimeters?",
        "answer": "Yes. Select centimeters; the input is converted before the inch convention is applied."
      },
      {
        "question": "Does the result choose arrow length?",
        "answer": "No. Arrow length and safe equipment setup require separate fitting information."
      },
      {
        "question": "Is it an ideal bow setting?",
        "answer": "No. It is a labeled measurement conversion, not an individualized adjustment recommendation."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "draw length calculator"
    ]
  },
  {
    "slug": "cardiac-output-calculator",
    "title": "Cardiac Output Calculator",
    "shortTitle": "Cardiac Output",
    "category": "Health",
    "description": "Check educational heart-rate times stroke-volume arithmetic and optional supplied-BSA cardiac index, without diagnosis or ranges.",
    "intro": "Check educational heart-rate times stroke-volume arithmetic and optional supplied-BSA cardiac index, without diagnosis or ranges. Heart rate and stroke volume must be supplied independently. The calculator does not infer stroke volume from a pulse rate, blood pressure or body size. Stroke volume represents blood volume per beat, and its measurement method and context matter. Entering a guessed value can produce a neat flow number without establishing actual cardiac output, so keep both input sources with the educational worksheet.",
    "formula": "Cardiac output L/min = heart rate beats/min × stroke volume mL/beat / 1000. Optional index = cardiac output / supplied BSA m².",
    "example": "At a supplied heart rate of 70 beats/min and independently measured stroke volume of 70 mL/beat, calculated output is 4.9 L/min. With supplied BSA of 1.8 m², the arithmetic index is about 2.7222 L/min/m². No range classification is applied.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with independent inputs.",
      "Review unit cancellation and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check responsible interpretation before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Independent inputs",
        "text": "Heart rate and stroke volume must be supplied independently. The calculator does not infer stroke volume from a pulse rate, blood pressure or body size. Stroke volume represents blood volume per beat, and its measurement method and context matter. Entering a guessed value can produce a neat flow number without establishing actual cardiac output, so keep both input sources with the educational worksheet."
      },
      {
        "title": "Unit cancellation",
        "text": "Multiplying beats per minute by milliliters per beat cancels the beat unit and leaves milliliters per minute. Dividing by one thousand converts that flow to liters per minute. This is a physical identity, not a prediction model. The displayed mL/min line provides a unit check and should be exactly one thousand times the L/min result before display rounding."
      },
      {
        "title": "Optional body surface area",
        "text": "A positive independently supplied BSA allows arithmetic indexing to liters per minute per square meter. Zero means omit the index; it is not interpreted as a person's body surface area. A separate BSA worksheet can explain its own estimation method, but this page does not choose a formula or validate the entered BSA. Indexing does not add a clinical assessment to an uncertain flow estimate."
      },
      {
        "title": "Measurement context",
        "text": "Inputs should describe the same relevant observation period. Combining heart rate from one condition with stroke volume from another can misrepresent the flow at either time. Irregular rhythms and changing conditions require appropriate clinical measurement interpretation, which this static arithmetic tool does not provide. No averaging protocol, device calibration correction or measurement uncertainty calculation is implemented."
      },
      {
        "title": "Responsible interpretation",
        "text": "The cardiac output calculator deliberately avoids normal-range coloring, disease classification and treatment prompts. A mathematical result cannot replace examination or clinical assessment, and it does not establish exercise capacity or circulation adequacy. Use it for unit learning or checking an independently established record. Medical review of an individual's values belongs to an appropriate clinician; editorial technical review is not patient-specific validation."
      }
    ],
    "limitations": "Educational supplied HR×SV identity only. No stroke-volume inference, diagnosis, normal-range label, treatment recommendation or emergency triage. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Can pulse alone determine cardiac output?",
        "answer": "No. Independently supplied stroke volume is also required for the identity used here."
      },
      {
        "question": "Does the result diagnose a condition?",
        "answer": "No. It provides educational arithmetic without ranges, classification or treatment advice."
      },
      {
        "question": "What does BSA zero mean?",
        "answer": "It omits the optional cardiac index; it is not a physical body-surface-area measurement."
      },
      {
        "question": "Why divide by 1,000?",
        "answer": "Heart rate times mL per beat gives mL/min, which is divided by 1,000 to express L/min."
      },
      {
        "question": "Are input values clinically verified?",
        "answer": "No. The tool cannot validate the source measurements or their suitability for an individual."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "cardiac output calculator"
    ]
  },
  {
    "slug": "option-profit-calculator",
    "title": "Option Profit Calculator",
    "shortTitle": "Option Profit",
    "category": "Finance",
    "description": "Calculate purchased call or put expiry profit, payoff and fee-inclusive break-even from supplied prices, contract size and fees.",
    "intro": "Calculate purchased call or put expiry profit, payoff and fee-inclusive break-even from supplied prices, contract size and fees. Both supported modes represent a purchased option, not a written or short position. A long call's intrinsic payoff rises above the strike; a long put's rises below it. Premium is a cost in both modes. Reversing the sign to imitate a short option would omit its different risk and obligations, so short-position modeling is intentionally excluded from this option profit calculator.",
    "formula": "Long call intrinsic=max(0,expiry price−strike); long put intrinsic=max(0,strike−expiry price). Profit=intrinsic×contracts×size−premium×contracts×size−fees. Break-even includes supplied fees per unit.",
    "example": "A purchased call with strike 50, premium 3 per unit, one 100-unit contract and total fees 5 costs 305 currency units. At expiry price 60, payoff is 1,000 and profit is 695. Fee-inclusive break-even is 53.05 per underlying unit.",
    "howTo": [
      "Prepare the independently established inputs in the units shown, starting with purchased positions.",
      "Review expiry price and the supported scope before submitting; example defaults demonstrate the arithmetic rather than a personal recommendation.",
      "Click Calculate result to submit the current values. Input edits retain the previous submitted result until you calculate again.",
      "Read the labeled output with the worked example, then check return and loss scenarios before using the result in another record."
    ],
    "considerations": [
      {
        "title": "Purchased positions",
        "text": "Both supported modes represent a purchased option, not a written or short position. A long call's intrinsic payoff rises above the strike; a long put's rises below it. Premium is a cost in both modes. Reversing the sign to imitate a short option would omit its different risk and obligations, so short-position modeling is intentionally excluded from this option profit calculator."
      },
      {
        "title": "Expiry price",
        "text": "The supplied underlying price is a scenario at expiration, not a live market quote or a future-price forecast. Before expiry, an option's market value can include time value and reflect volatility and other factors. The intrinsic formula cannot estimate a current resale price. Keep the expiry label when reporting the result so scenario profit is not mistaken for today's mark-to-market valuation."
      },
      {
        "title": "Premium and contract size",
        "text": "Premium is entered per underlying unit, while whole contracts and units per contract determine the total position size. Contract multipliers vary, so one hundred is only a demonstrative default. A premium of three on a one-hundred-unit contract costs three hundred before fees, not three. Supply the actual documented size, especially for adjusted or nonstandard contracts."
      },
      {
        "title": "Fees and break-even",
        "text": "Total supplied transaction fees are subtracted once from the full position. Break-even spreads those fees across all underlying units. A call uses strike plus per-unit cost; a put uses strike minus it. If a put's cost exceeds its maximum possible intrinsic value at a nonnegative underlying price, no nonnegative break-even exists. Taxes and unentered charges are not silently estimated."
      },
      {
        "title": "Return and loss scenarios",
        "text": "Return is profit divided by the supplied premium-plus-fee cost, and is undefined when that cost is zero. An out-of-the-money purchased option expires with zero intrinsic payoff and the scenario loses the entered cost. This arithmetic excludes settlement complications and does not recommend a trade. Compare several independently chosen expiry prices to understand the payoff structure without treating any scenario as likely or guaranteed."
      }
    ],
    "limitations": "Purchased vanilla call/put expiry arithmetic only. No live option valuation, volatility, short positions, margin, assignment forecast, taxes or investment recommendation. The entered values are not independently verified. Numerical output does not establish the suitability of its assumptions for a real situation. Calculator inputs are processed locally in the browser interface; avoid entering identifying records and retain the relevant measurement or source basis with any result you save.",
    "faqs": [
      {
        "question": "Does this value an option today?",
        "answer": "No. It calculates intrinsic payoff and profit at a supplied expiry-price scenario."
      },
      {
        "question": "Are short calls or puts supported?",
        "answer": "No. Both modes are purchased vanilla options, with premium treated as a cost."
      },
      {
        "question": "Is contract size always 100?",
        "answer": "No. One hundred is a default example; supply the documented units per contract."
      },
      {
        "question": "Are fees included in break-even?",
        "answer": "Yes. The supplied total fees are allocated across the entered underlying units."
      },
      {
        "question": "Does the result recommend a trade?",
        "answer": "No. It is educational payoff arithmetic, not a forecast or investment recommendation."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "option profit calculator"
    ]
  }
];
