import type {Audit} from "./semrush-batch-one-audit";
export const roadmap328Audit:Record<string,Audit> = {
  "matrix-multiplication-calculator": {
    "keywordThemes": [
      "8x8 calculator",
      "matrix multiplication calculator",
      "multiply matrices calculator",
      "multiplying matrices calculator",
      "matrix on a calculator",
      "matrix math calculator",
      "4x4 calculator"
    ],
    "interpretation": "A = [[1,2],[3,4]] and B = [[5,6],[7,8]] produce [[19,22],[43,50]]. The upper-left entry is 1×5 + 2×7 = 19. Reversing the matrices instead produces [[23,34],[31,46]], which demonstrates that order matters. Numeric rectangular matrices with one through eight rows and columns. No inverse, determinant, symbolic expressions or general algebra system. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Identity check — [[1,0],[0,1]] multiplied by [[5,6],[7,8]] returns [[5,6],[7,8]].",
      "Rectangular check — [[1,2,3]] times [[4],[5],[6]] gives a 1×1 result containing 32.",
      "Order check — the example BA has first entry 23, compared with 19 for AB."
    ],
    "mistakes": [
      "Pasting ragged rows or omitting an explicit zero cell.",
      "Reversing A and B and assuming the product is unchanged.",
      "Confusing row-by-column multiplication with entrywise multiplication."
    ],
    "verification": "Multiply one selected output entry manually, then verify the dimensions. For a square A, multiplying by an identity matrix of the same size should return A. A zero matrix gives a zero product with compatible dimensions. These checks catch a misplaced row or swapped matrix but do not validate the underlying data. Keep the original arrays with the product so another person can reproduce your matrix math calculation.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/7-5-matrices-and-matrix-operations",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "matrix-inverse-calculator",
        "title": "Inverse Matrix Calculator"
      },
      {
        "slug": "substitution-calculator",
        "title": "Substitution Calculator — Two Linear Equations"
      }
    ]
  },
  "decimal-to-fraction-calculator": {
    "keywordThemes": [
      "decimal to fraction calculator"
    ],
    "interpretation": "0.125 becomes 125/1000, then reduces to 1/8. For −2.75, the exact reduced fraction is −11/4 and the mixed form is −2 3/4. Adding trailing zeros, as in 0.1250, does not change the reduced result. Exact finite decimal text only: up to forty whole digits and eighteen decimal places. No repeating-decimal notation, scientific notation or inferred rational approximation. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Trailing zeros — 0.1250 reduces to the same 1/8 as 0.125.",
      "Negative value — −0.5 reduces to −1/2 and retains its sign.",
      "Whole value — 12.000 reduces to 12/1 with no fractional remainder."
    ],
    "mistakes": [
      "Treating the finite text 0.333 as an exact repeating one third.",
      "Dropping the negative sign from a mixed-number result.",
      "Claiming that exact notation recovers lost measurement precision."
    ],
    "verification": "Divide the reduced numerator by its denominator to recover the entered finite decimal. Multiplying both reduced parts by the removed common factor should recover the original place-value fraction. Check trailing-zero and negative-value examples separately. The input length limits prevent needlessly large browser operations; the tool is a conversion worksheet, not a general fraction-expression calculator or an arbitrary scientific-notation parser.",
    "sourceUrl": "https://openstax.org/books/prealgebra-2e/pages/5-1-decimals",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "fraction-calculator",
        "title": "Fraction Calculator"
      },
      {
        "slug": "rounding-calculator",
        "title": "Rounding Calculator — Exact Decimals and Significant Figures"
      }
    ]
  },
  "blown-insulation-calculator": {
    "keywordThemes": [
      "blow in insulation calculator"
    ],
    "interpretation": "For 1,000 ft², label coverage of 25 ft² per bag and 10% allowance, planned area is 1,100 ft² and the whole-bag order is 44 bags. At a supplied price of 30 currency units per bag, material-only cost is 1,320. Supplied-coverage purchasing arithmetic, not an R-value selector, building-code assessment or installation plan. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "No allowance — 1,000 ft² at 25 ft² per bag needs 40 whole bags.",
      "Different coverage — the same 1,100 ft² purchasing area at 50 ft² per bag needs 22 bags.",
      "Zero price — setting bag price to zero leaves quantity unchanged and omits a meaningful cost estimate."
    ],
    "mistakes": [
      "Using coverage from a different product or installation depth.",
      "Entering floor area without checking the actual insulation surface.",
      "Treating bag material cost as a complete installed quotation."
    ],
    "verification": "Quantities cannot establish safe access, moisture control, ventilation clearance or approved contact with fixtures. Existing conditions and product instructions require review by an appropriate installer. The DOE reference explains why air sealing and installation quality matter beyond nominal material quantity. Keep the package specification, measured area and allowance together with the calculation when comparing purchase options.",
    "sourceUrl": "https://bsesc.energy.gov/energy-basics/blown-insulation-existing-attics",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "drywall-calculator",
        "title": "Drywall Calculator — Panel Count from Net Surface Area"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      }
    ]
  },
  "euler-method-calculator": {
    "keywordThemes": [
      "euler's method calculator"
    ],
    "interpretation": "For y′=y with x₀=0, y₀=1 and h=0.1, two steps give y₁=1.1 and y₂=1.21 at x=0.2. Ten steps give about 2.59374246 at x=1, compared with the exact solution e≈2.71828. Explicit Euler for affine differential equations only, bounded to 1,000 steps. No arbitrary expression parser, adaptive solver or certified error bound. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Constant slope — y′=2, x₀=0, y₀=1, h=0.1 and two steps give y=1.4 at x=0.2.",
      "Exponential comparison — y′=y with y₀=1 and two 0.1 steps gives 1.21.",
      "Backward stepping — y′=2 with y₀=1 and two −0.1 steps gives 0.6 at x=−0.2."
    ],
    "mistakes": [
      "Encoding a nonlinear right-hand side as if it were an affine equation.",
      "Choosing a step count that does not reach the intended endpoint.",
      "Treating a finite-step estimate as an exact or certified solution."
    ],
    "verification": "The output shows the final estimate and the first few iteration points. It is not a complete downloadable table or a plotted exact solution. Manually verify the first update from the given initial condition, then compare the final point with an analytic solution when one is available. Keep the coefficient tuple, signed step and iteration count in any report of the estimate.",
    "sourceUrl": "https://openstax.org/books/calculus-volume-2/pages/4-2-direction-fields-and-numerical-methods",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "difference-quotient-calculator",
        "title": "Difference Quotient Calculator"
      },
      {
        "slug": "implicit-differentiation-calculator",
        "title": "Implicit Differentiation Calculator — Polynomial Equations"
      }
    ]
  },
  "log-weight-calculator": {
    "keywordThemes": [
      "log weight calculator"
    ],
    "interpretation": "A 10 ft log with end diameters 12 and 18 in has radii 0.5 and 0.75 ft. Its frustum volume is about 12.43547 ft³. At a supplied density of 40 lb/ft³, its illustrative weight is about 497.419 lb, or 225.625389 kg. Ideal circular frustum with independently supplied bulk density. No species/moisture inference, load-rating decision or lifting recommendation. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Cylinder check — equal 12 in ends and 10 ft length give 2.5π ft³.",
      "Density change — doubling supplied density doubles mass while geometric volume is unchanged.",
      "Length change — halving length with identical ends and density halves both volume and mass."
    ],
    "mistakes": [
      "Converting diameter to feet but forgetting to halve it into a radius.",
      "Using dry density for an unverified wet or bark-inclusive log.",
      "Using calculated mass to approve equipment loading or lifting."
    ],
    "verification": "An illustrative mass does not establish a crane, sling, trailer, axle or vehicle capacity. Real lifting plans require verified weight and appropriately qualified assessment of equipment and conditions. Use this worksheet to understand how taper, length and supplied density affect arithmetic, then verify an actual mass independently when a safety-critical operation or commercial weigh ticket requires it.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/11-2-density",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "firewood-cord-calculator",
        "title": "Firewood Calculator — Full Cords from a Stack"
      },
      {
        "slug": "cylinder-volume-calculator",
        "title": "Cylinder Volume Calculator"
      }
    ]
  },
  "roman-numeral-converter": {
    "keywordThemes": [
      "roman letters converter",
      "roman numeral generator",
      "roman numeral date converter",
      "roman number converter",
      "roman numeral birthday converter",
      "roman numbers convert date"
    ],
    "interpretation": "2026 becomes MMXXVI. Reverse mode converts MCMXCIV to 1994. Date 2026-10-04 becomes IV / X / MMXXVI, with day first. The date format is a modern component conversion, not the calendar system used in ancient Rome. Canonical subtractive Roman notation, integers 1–3999 and real Gregorian dates with years 0001–3999. No zero, negatives, overbars or ancient-calendar conversion. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Subtractive check — 4 converts to IV and 9 to IX.",
      "Reverse check — MCMXCIV converts to 1994, whose canonical forward conversion returns MCMXCIV.",
      "Leap-day check — 2024-02-29 converts to XXIX / II / MMXXIV, while 2026-02-29 is rejected."
    ],
    "mistakes": [
      "Entering locale-dependent dates rather than YYYY-MM-DD.",
      "Assuming decorative IIII is accepted by the canonical parser.",
      "Reading the day/month/year output in a different order."
    ],
    "verification": "Before printing a roman numeral date on an invitation, engraving or design, independently confirm the original Gregorian date and the chosen display order. A roman letters converter changes notation, not chronology or language. Read each symbol group back to its ordinary integer. Reverse mode provides that check for an individual component, while the full date remains explicitly separated by slashes.",
    "sourceUrl": "https://reference.wolfram.com/language/ref/RomanNumeral.html",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "hex-calculator",
        "title": "Hex Calculator"
      },
      {
        "slug": "binary-calculator",
        "title": "Binary Calculator"
      }
    ]
  },
  "prop-slip-calculator": {
    "keywordThemes": [
      "prop slip calculator"
    ],
    "interpretation": "At 5,000 engine RPM, 2:1 reduction and 20 in pitch, propeller speed is 2,500 RPM and nominal no-slip speed is about 47.348485 mph. A measured 42 mph gives about 11.296% apparent slip. Apparent slip from supplied steady measurements and nominal pitch. No safe-speed prediction, propeller selection, engine setup or performance guarantee. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Zero measured speed — the positive no-slip model gives 100% apparent slip.",
      "Matched model speed — entering the no-slip speed gives approximately zero slip.",
      "Excess measured speed — entering 50 mph in the example gives negative apparent slip for review."
    ],
    "mistakes": [
      "Entering the inverse gear ratio or using propeller RPM as engine RPM.",
      "Entering knots in a field that requires mph.",
      "Clamping a negative apparent-slip result instead of reviewing the measurements."
    ],
    "verification": "Apparent slip is one derived ratio, not a complete propeller or vessel assessment. Loading, ventilation, hull state and operating conditions can change performance. A lower calculated percentage does not by itself prove a safer or better setup. The tool provides transparent arithmetic from your supplied data and cannot authorize engine operating limits, propeller changes or navigation speed.",
    "sourceUrl": "https://www.mercuryracing.com/propellers/prop-slip-calculator.html",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "gear-ratio-speed-calculator",
        "title": "Gear Ratio Calculator — Road Speed and Engine RPM"
      },
      {
        "slug": "speed-distance-time-calculator",
        "title": "Speed Calculator — Distance, Time, mph and ft/s"
      }
    ]
  },
  "rc-filter-calculator": {
    "keywordThemes": [
      "rc filter calculator"
    ],
    "interpretation": "R=1,000 Ω and C=100 nF give τ=0.1 ms and cutoff≈1,591.54943 Hz. At 1,000 Hz, the ideal low-pass amplitude ratio is about 0.846733 and the high-pass ratio about 0.532018. At cutoff, either magnitude is 1/√2. Single unloaded passive first-order RC stage. No component selection, active-filter design, loading correction or electrical safety approval. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Cutoff check — at f=1/(2πRC), both ideal magnitudes are approximately 0.70710678.",
      "DC check — low-pass magnitude is one and high-pass magnitude is zero.",
      "Resistance change — doubling R with the same C halves cutoff and doubles the time constant."
    ],
    "mistakes": [
      "Entering microfarads as if they were nanofarads.",
      "Treating the corner frequency as a complete signal cutoff.",
      "Ignoring source/load impedance while applying an unloaded formula."
    ],
    "verification": "Source resistance, load impedance, capacitor tolerance, parasitic effects and measurement equipment can change the observed response. Compare the actual circuit against the assumed single stage before applying this worksheet. Cascading stages without isolation does not automatically equal multiplying ideal isolated gains. Use measured component values for a comparison, and verify a real design with appropriate circuit analysis and safe measurement practice.",
    "sourceUrl": "https://www.ti.com/lit/pdf/ssqw059",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "ohms-law-calculator",
        "title": "Ohm’s Law, Watt and Ampere Calculator"
      },
      {
        "slug": "voltage-drop-calculator",
        "title": "Voltage Drop Calculator"
      }
    ]
  },
  "probability-calculator": {
    "keywordThemes": [
      "probability calculator",
      "how to calculate probability",
      "chance calculator",
      "how to calculate chance"
    ],
    "interpretation": "For independent P(A)=0.4 and P(B)=0.3, the intersection is 0.12, inclusive union is 0.58, neither is 0.42 and P(A given B)=0.4. If an independently established intersection is instead 0.1, the union becomes 0.6. Two-event probability identities only. Independence is supplied explicitly; no event forecasting, frequency fitting, combinatorial solver or guaranteed chance model. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Supplied overlap — 0.4, 0.3 and intersection 0.1 give union 0.6 and neither 0.4.",
      "Mutual exclusion — 0.2 and 0.3 with zero overlap give union 0.5.",
      "Feasibility check — 0.8 and 0.7 need overlap at least 0.5; a supplied 0.1 is rejected."
    ],
    "mistakes": [
      "Entering 25 rather than 0.25 for a twenty-five-percent probability.",
      "Confusing independence with mutual exclusivity.",
      "Reversing the direction of a conditional probability."
    ],
    "verification": "P(A given B) uses B as the conditioning event and divides the overlap by P(B). It is not P(B given A), which usually differs. If P(B)=0, the conditional output is explicitly undefined. When learning how to calculate chance, verify the direction and denominator as carefully as the numerator, especially when interpreting evidence or comparing unequal base rates.",
    "sourceUrl": "https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "binomial-distribution-calculator",
        "title": "Binomial Distribution Calculator — Exact and Tail Probabilities"
      },
      {
        "slug": "hypergeometric-calculator",
        "title": "Hypergeometric Calculator"
      },
      {
        "slug": "odds-risk-calculator",
        "title": "Odds and Risk Ratio Calculator"
      }
    ]
  },
  "target-heart-rate-calculator": {
    "keywordThemes": [
      "finding maximum heart rate calculator",
      "maximum heart rate calculator",
      "max heart rate calculator",
      "max hr calculator",
      "heart rate calculator",
      "target hr calculator",
      "calculate heart rate"
    ],
    "interpretation": "Age 40 gives a population-formula maximum of 180 bpm. Supplied percentages of 50 and 70 give illustrative references of 90 and 126 bpm. These are outputs of the chosen age formula, not measured personal exercise limits. Adult population-reference arithmetic, ages 18–100. Not measured maximum, diagnosis, exercise clearance, individual training prescription or emergency triage. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Age 40 — predicted maximum is 180 bpm, with 50–70% references of 90–126 bpm.",
      "Age 60 — predicted maximum is 160 bpm, with the same percentage references of 80–112 bpm.",
      "Supplied band — at age 40, 70–85% gives 126–153 bpm without prescribing that band."
    ],
    "mistakes": [
      "Calling an age-predicted maximum a measured personal limit.",
      "Treating supplied percentages as exercise clearance.",
      "Ignoring medication or health context when interpreting a reference."
    ],
    "verification": "For the same age, raising the supplied percentage raises the corresponding reference linearly. For the same percentage, increasing age lowers the formula's reference. Those are mathematical properties, not proof that fitness changes by that amount each year. The max HR calculator is limited to adult inputs and should not be repurposed for children, rehabilitation decisions or a diagnosis.",
    "sourceUrl": "https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/target-heart-rates",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "calories-burned-calculator",
        "title": "Calories Burned Calculator — Walking, Rucking and MET Estimates"
      },
      {
        "slug": "cardiac-output-calculator",
        "title": "Cardiac Output Calculator"
      }
    ]
  },
  "pension-benefit-calculator": {
    "keywordThemes": [
      "pension calculator",
      "pension plans calculator"
    ],
    "interpretation": "Annual pensionable salary 60,000, credited service 20 years and an accrual rate of 1/60 produce 20,000 currency units per year. A supplied 90% adjustment gives 18,000 annually or 1,500 monthly, before any separately applicable tax or deductions. Currency-neutral supplied final-salary defined-benefit worksheet. No administrator entitlement, state pension, investment-pot projection, tax or retirement recommendation. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Unadjusted — 60,000 salary, 20 years and 1/60 accrual give 20,000 annually.",
      "Supplied 90% adjustment — the annual result becomes 18,000 and monthly equivalent 1,500.",
      "Service change — ten years instead of twenty halves the benefit under this fixed worksheet."
    ],
    "mistakes": [
      "Using gross earnings instead of the plan-defined pensionable salary.",
      "Entering 1/60 as 0.016667 in the denominator field.",
      "Treating the monthly equivalent as a net entitlement quotation."
    ],
    "verification": "Dividing by twelve gives a monthly equivalent, not proof of the actual payment schedule, net deposit or indexation. Lump sums, survivor options, guarantees, caps, inflation increases and taxes are not included. Use an administrator quotation for decisions and compare its assumptions with this worksheet. Results remain educational financial arithmetic in the currency of the supplied salary, without a hidden exchange rate.",
    "sourceUrl": "https://www.moneyhelper.org.uk/en/pensions-and-retirement/pensions-basics/defined-benefit-or-final-salary-pensions-schemes-explained",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "savings-withdrawal-runway-calculator",
        "title": "How Long Will Retirement Savings Last? Calculator"
      },
      {
        "slug": "401k-calculator",
        "title": "401(k) Calculator"
      }
    ]
  },
  "grams-to-ml-converter": {
    "keywordThemes": [
      "grams and milliliters converter"
    ],
    "interpretation": "At a supplied density of 0.8 g/mL, 100 g occupies 125 mL. In reverse mode, 125 mL at the same density has a mass of 100 g. This example is arithmetic with a supplied density, not an identification of a particular substance. User-supplied density conversion only. No universal mass-volume equality, material identification, dosing or formulation approval. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Density one — 100 g converts to 100 mL only under the explicitly supplied 1 g/mL basis.",
      "Density 0.8 — 100 g converts to 125 mL.",
      "Reverse check — 125 mL at 0.8 g/mL converts back to 100 g."
    ],
    "mistakes": [
      "Assuming every substance has a density of one gram per milliliter.",
      "Mixing kg/m³ density with a g/mL field.",
      "Changing mode without changing the meaning of the entered amount."
    ],
    "verification": "Density uncertainty limits conversion accuracy even when the arithmetic shows several decimal places. Rounding should follow the quality of the source measurements. No medication dose, concentration safety or formulation suitability is inferred from the output. Zero amount converts to zero, while zero density is rejected because dividing by it cannot represent a valid positive-density material conversion.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/11-2-density",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator — Mass, Moles and Dilution"
      },
      {
        "slug": "log-weight-calculator",
        "title": "Log Weight Calculator"
      }
    ]
  },
  "siding-course-calculator": {
    "keywordThemes": [
      "siding calculator"
    ],
    "interpretation": "For a 20 ft wide by 10 ft high wall, 12 ft usable boards and 6 in exposure, there are 20 courses and 2 boards per course. Base quantity is 40 boards; a supplied 10% allowance makes the whole-board order 44. One rectangular wall with independent whole boards per horizontal course. No openings, offcut sharing, installation approval, flashing, fastening or structural design. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "No allowance — the example wall needs forty base boards in this row model.",
      "Shorter stock — ten-foot boards still require two per twenty-foot course.",
      "Greater height — a twenty-foot-high version at six-inch exposure needs forty courses and eighty base boards."
    ],
    "mistakes": [
      "Using full manufactured width instead of exposed course height.",
      "Assuming stock offcuts are automatically reused between courses.",
      "Subtracting window area from a row count without reviewing an actual layout."
    ],
    "verification": "Allowance multiplies the base board count, followed by a final whole-board round-up. It is explicit rather than a hidden generic waste rate. Compare zero and planned allowances to understand the additional purchase quantity, then check accessories and trim independently. Quantity does not establish moisture management, wind resistance, fire classification or compliance with any project-specific assembly requirement.",
    "sourceUrl": "https://www.jameshardie.com/blog/for-siding-pros/tips-for-installing-james-hardie-lap-siding/",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "deck-board-calculator",
        "title": "Deck Board Calculator — Rows, Stock Length and Allowance"
      },
      {
        "slug": "wainscoting-calculator",
        "title": "Wainscoting Calculator — Equal Panel and Stile Spacing"
      }
    ]
  },
  "difference-quotient-calculator": {
    "keywordThemes": [
      "difference quotient calculator"
    ],
    "interpretation": "For f(x)=x², x=2 and h=0.1, f(x)=4 and f(x+h)=4.41. The difference quotient is 4.1, while the derivative at x is 4. Reducing h to 0.01 gives a quotient of 4.01. Numeric quadratic-polynomial family only, including linear and constant cases. No general function parser, symbolic algebra or zero-step evaluation. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Linear check — a=0,b=3 gives quotient three for every supported nonzero h.",
      "Constant check — a=b=0 gives quotient zero regardless of c.",
      "Smaller increment — x² at x=2 gives 4.01 for h=0.01 instead of 4.1 for h=0.1."
    ],
    "mistakes": [
      "Entering zero h in a finite difference quotient.",
      "Treating the finite-increment slope as always equal to the derivative.",
      "Expecting changing the constant c to change the quotient."
    ],
    "verification": "Compare the quotient with the derivative limit and note both the sign and size of a·h. A negative increment can approach the limit from the opposite side. For a linear function, every nonzero increment gives the same slope b; for a constant, the result is zero. These controlled checks help distinguish the finite-interval quantity from a limit without inventing a certified general differentiation method.",
    "sourceUrl": "https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "euler-method-calculator",
        "title": "Euler’s Method Calculator"
      },
      {
        "slug": "implicit-differentiation-calculator",
        "title": "Implicit Differentiation Calculator — Polynomial Equations"
      }
    ]
  },
  "odds-risk-calculator": {
    "keywordThemes": [
      "odds risk calculator"
    ],
    "interpretation": "With group one 20 events and 80 non-events, and group two 10 events and 90 non-events, observed proportions are 20% and 10%. Risk ratio is 2, odds ratio is 2.25 and the risk difference is 10 percentage points. Observed two-group table arithmetic. No causal inference, clinical prediction, confidence interval, significance test or population-risk interpretation from case-control sampling. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Equal groups — 10 events and 90 non-events in each group give both ratios one and difference zero.",
      "Reverse groups — reversing the example gives risk ratio 0.5 and odds ratio 1/2.25.",
      "Zero events in group two — risk ratio is explicitly undefined; no correction is added."
    ],
    "mistakes": [
      "Confusing a sample event proportion with population risk in a case-control design.",
      "Calling an odds ratio a risk ratio without checking its denominator.",
      "Treating an observed association as proof of causation."
    ],
    "verification": "A ratio describes association in the supplied table, not proof that membership causes an outcome. Sampling, confounding and measurement can change interpretation. The absolute percentage-point difference is displayed separately to avoid confusing a relative multiple with an absolute increase. No confidence intervals or hypothesis tests are generated, and no treatment decision or individual clinical risk prediction follows from this educational arithmetic.",
    "sourceUrl": "https://www.cdc.gov/epiinfo/user-guide/statcalc/tablestwobytwo.html",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "probability-calculator",
        "title": "Probability Calculator"
      },
      {
        "slug": "confidence-interval-calculator",
        "title": "Confidence Interval Calculator"
      }
    ]
  },
  "time-lapse-calculator": {
    "keywordThemes": [
      "time lapse photography calculator"
    ],
    "interpretation": "A sixty-minute recording window with five-second intervals schedules 721 captures including the first at zero and last at 3,600 seconds. At 30 fps, playback is about 24.0333 seconds. A camera that counts only completed intervals may use a different endpoint convention. Fixed-interval capture planning, inclusive first-frame convention. No exposure, storage, battery, variable-rate, dropped-frame or camera-firmware prediction. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Short window — ten seconds at three-second intervals gives four frames at zero, three, six and nine seconds.",
      "Playback change — 721 frames at 60 fps play for about 12.0167 seconds.",
      "Zero window — one initial capture remains, giving 1/fps seconds of playback."
    ],
    "mistakes": [
      "Ignoring the initial capture when comparing the frame count.",
      "Confusing capture interval with exposure duration.",
      "Expecting storage or battery predictions from timing inputs alone."
    ],
    "verification": "Storage capacity, battery use, changing light, weather and interruption risk remain outside the calculator. It does not estimate file size without a file-size input or guarantee that a camera captures every planned frame. Save the recording window, interval and fps together with the result. A brief test sequence can check the actual device's endpoint and playback conventions before a longer recording.",
    "sourceUrl": "https://onlinemanual.nikonimglib.com/z7_z6/en/09_menu_guide_03_30.html",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "timecode-calculator",
        "title": "Timecode Calculator — Integer-Rate NDF Arithmetic"
      },
      {
        "slug": "speed-distance-time-calculator",
        "title": "Speed Calculator — Distance, Time, mph and ft/s"
      }
    ]
  },
  "mileage-reimbursement-calculator": {
    "keywordThemes": [
      "mileage calculator",
      "mileage calculator 2025",
      "mileage calculator 2026",
      "calculate mileage",
      "milage calculator"
    ],
    "interpretation": "An odometer changing from 12,000 to 12,120 miles records 120 miles. At a supplied rate of 0.5 currency units per mile, the arithmetic amount is 60 currency units. The equivalent distance is 193.12128 km, without changing the original rate basis. Odometer difference and user-rate reimbursement only. No mapping, fuel economy, tax eligibility, employer approval or automatic 2025/2026 mileage rate. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "No movement — identical odometer readings give zero distance and zero rate-based amount.",
      "Rate change — 120 miles at a supplied 0.75 per mile gives 90 currency units.",
      "Kilometer basis — 100 km at a supplied 0.4 per km gives 40 currency units."
    ],
    "mistakes": [
      "Mixing kilometer odometer readings with a per-mile rate.",
      "Assuming a 2025 or 2026 statutory rate is loaded automatically.",
      "Treating a supplied-rate amount as proof of eligibility."
    ],
    "verification": "Calculate mileage here from two odometer values rather than from fuel consumed. The milage calculator spelling refers to the same supported trip-distance task. If you want fuel efficiency, use a separate fuel or economy model with its own consumption inputs. Comparing two rates changes the payment linearly while leaving the recorded distance unchanged; that is a scenario comparison, not evidence that either rate is official.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "speed-distance-time-calculator",
        "title": "Speed Calculator — Distance, Time, mph and ft/s"
      },
      {
        "slug": "fuel-economy-converter",
        "title": "Fuel Economy Converter"
      }
    ]
  },
  "draw-length-calculator": {
    "keywordThemes": [
      "draw length calculator"
    ],
    "interpretation": "A measured nock-to-grip-pivot distance of 26.25 inches gives an ATA-convention draw length of 28 inches, equivalent to 71.12 centimeters. A 66.675 cm pivot distance represents the same input and therefore gives the same result. Measured ATA convention only. No wingspan fit estimate, personalized bow adjustment, arrow-length recommendation or equipment safety approval. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Inch measurement — 26.25 in at the pivot becomes a conventional 28 in.",
      "Centimeter measurement — 66.675 cm yields the same conventional 28 in.",
      "Reference distinction — a measured 28 in pivot distance converts to 29.75 in, not 28 in."
    ],
    "mistakes": [
      "Measuring to a riser edge instead of the grip pivot reference.",
      "Adding the inch convention directly to a centimeter measurement.",
      "Treating conventional draw length as a safe arrow-length recommendation."
    ],
    "verification": "Conventional draw length does not determine arrow shaft length, spine, release configuration or a safe adjustment range. Those depend on additional equipment and fitting information. A matching number is not approval to change a module or trim an arrow. Use manufacturer documentation and an appropriate archery professional for equipment decisions, and preserve the measurement reference when comparing readings.",
    "sourceUrl": "https://hoyt.com/pages/glossary",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "arrow-speed-calculator",
        "title": "Arrow Speed Calculator — Measured Flight"
      }
    ]
  },
  "cardiac-output-calculator": {
    "keywordThemes": [
      "cardiac output calculator"
    ],
    "interpretation": "At a supplied heart rate of 70 beats/min and independently measured stroke volume of 70 mL/beat, calculated output is 4.9 L/min. With supplied BSA of 1.8 m², the arithmetic index is about 2.7222 L/min/m². No range classification is applied. Educational supplied HR×SV identity only. No stroke-volume inference, diagnosis, normal-range label, treatment recommendation or emergency triage. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "No index — 70 bpm and 70 mL/beat give 4.9 L/min with BSA omitted.",
      "Supplied index — adding 1.8 m² BSA gives approximately 2.7222 L/min/m².",
      "Rate scaling — 140 bpm with unchanged 70 mL/beat gives 9.8 L/min as arithmetic only."
    ],
    "mistakes": [
      "Inferring stroke volume from pulse alone.",
      "Combining measurements from mismatched observation conditions.",
      "Reading an arithmetic output as a diagnosis or normal-range classification."
    ],
    "verification": "The cardiac output calculator deliberately avoids normal-range coloring, disease classification and treatment prompts. A mathematical result cannot replace examination or clinical assessment, and it does not establish exercise capacity or circulation adequacy. Use it for unit learning or checking an independently established record. Medical review of an individual's values belongs to an appropriate clinician; editorial technical review is not patient-specific validation.",
    "sourceUrl": "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      },
      {
        "slug": "target-heart-rate-calculator",
        "title": "Target Heart Rate Calculator"
      }
    ]
  },
  "option-profit-calculator": {
    "keywordThemes": [
      "option profit calculator"
    ],
    "interpretation": "A purchased call with strike 50, premium 3 per unit, one 100-unit contract and total fees 5 costs 305 currency units. At expiry price 60, payoff is 1,000 and profit is 695. Fee-inclusive break-even is 53.05 per underlying unit. Purchased vanilla call/put expiry arithmetic only. No live option valuation, volatility, short positions, margin, assignment forecast, taxes or investment recommendation. Compare the labeled intermediate outputs with the input units and convention before carrying a number into another worksheet.",
    "scenarios": [
      "Out-of-money call — expiry price 40 in the example gives zero intrinsic payoff and a loss of 305.",
      "Break-even call — expiry price 53.05 makes payoff equal the supplied 305 total cost.",
      "Long put — strike 50, expiry price 40, premium three, size one hundred and fees five gives profit 695."
    ],
    "mistakes": [
      "Entering a total contract premium in the per-unit premium field.",
      "Applying the long-position formula to a short option.",
      "Treating expiry intrinsic payoff as a current market valuation."
    ],
    "verification": "Return is profit divided by the supplied premium-plus-fee cost, and is undefined when that cost is zero. An out-of-the-money purchased option expires with zero intrinsic payoff and the scenario loses the entered cost. This arithmetic excludes settlement complications and does not recommend a trade. Compare several independently chosen expiry prices to understand the payoff structure without treating any scenario as likely or guaranteed.",
    "sourceUrl": "https://www.optionseducation.org/strategies/all-strategies/long-call",
    "sourceNote": "Method reference reviewed on 4 October 2026. The displayed worksheet and examples are SolvePilot’s own bounded implementation. The reference does not certify an individual calculation. Review by Mohammad Qasim is editorial and technical, not patient-specific, financial, structural or equipment approval.",
    "relatedCalculators": [
      {
        "slug": "interest-rate-cap-payout-calculator",
        "title": "Interest Rate Cap Calculator — Supplied Period Payout"
      },
      {
        "slug": "investment-fee-calculator",
        "title": "Investment Fee Calculator"
      }
    ],
    "secondarySourceUrl": "https://www.optionseducation.org/strategies/all-strategies/long-put"
  }
};
