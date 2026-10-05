import type {Audit} from "./semrush-batch-one-audit";
export const roadmap423Audit:Record<string,Audit> = {
  "trigonometric-functions-calculator": {
    "keywordThemes": [
      "calculator with inverse functions",
      "tan inverse calculator",
      "cosine calculator",
      "sin cos and tan calculator",
      "cos calculator",
      "calculator trigonometri"
    ],
    "interpretation": "Sine and cosine ratios must lie between −1 and 1 before their real inverses can be evaluated. Inverse tangent accepts any supported finite ratio. Tangent is undefined when cosine is zero, including odd multiples of 90 degrees. Values with a computed cosine magnitude below 10⁻¹² are rejected as too close to that singularity; the browser cannot reliably display an arbitrarily large near-pole value.",
    "scenarios": [
      "Zero angle — sine and tangent are zero, while cosine is one.",
      "Unit equivalence — sine of 180 degrees agrees with sine of π radians within rounding.",
      "Principal branch — inverse sine of −1 gives −90 degrees."
    ],
    "mistakes": [
      "Confusing reciprocal notation with inverse function notation.",
      "Treating a forward angle as an inverse ratio.",
      "Expecting one principal inverse angle to describe every equation solution."
    ],
    "verification": "Compute sine and cosine of the same modest angle and check their squared sum. Convert the angle independently to radians and repeat. For an inverse result, apply the corresponding forward function and compare with the entered ratio. Repeated rotations should preserve forward values, although rounded large angles can lose precision.",
    "sourceUrl": "https://openstax.org/books/precalculus-2e/pages/5-2-unit-circle-sine-and-cosine-functions",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      },
      {
        "slug": "logarithm-calculator",
        "title": "Logarithm Calculator"
      },
      {
        "slug": "slope-calculator",
        "title": "Slope Calculator"
      }
    ]
  },
  "slope-calculator": {
    "keywordThemes": [
      "rise over run calculator",
      "how to calculate slope",
      "how do i calculate the slope",
      "how do you calculate slope"
    ],
    "interpretation": "When run is zero and rise is nonzero, the line is vertical and ordinary slope is undefined. The calculator reports that condition explicitly instead of substituting zero or infinity. If both differences are zero, the points coincide and do not determine one unique line; the calculation is rejected. These are different cases even though both would encounter a zero denominator in the slope expression.",
    "scenarios": [
      "Horizontal — (0,4) to (3,4) gives slope zero.",
      "Vertical — (2,1) to (2,5) gives undefined slope and a 90-degree line angle.",
      "Reversal — swapping the two complete points preserves slope and distance."
    ],
    "mistakes": [
      "Dividing run by rise.",
      "Changing point order for only one subtraction.",
      "Reading graph-display angle as a physical angle with unequal axes."
    ],
    "verification": "Multiply the displayed slope by run and compare with rise for a nonvertical line. Verify distance with the Pythagorean theorem. Reverse the complete points and confirm that slope, distance and modulo-180 angle remain consistent. Check the horizontal, vertical and coincident cases separately because each represents a different geometry.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/3-3-rates-of-change-and-behavior-of-graphs",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "midpoint-calculator",
        "title": "Midpoint Calculator"
      },
      {
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      },
      {
        "slug": "trigonometric-functions-calculator",
        "title": "Trigonometric Functions Calculator"
      }
    ]
  },
  "rental-property-cash-flow-calculator": {
    "keywordThemes": [
      "investment property calculator",
      "real estate investment calculator",
      "how to calculate roi on rental property",
      "rental property calculator",
      "how to calculate rental property roi",
      "rental income calculator",
      "rental profit calculator"
    ],
    "interpretation": "Operating costs should include the property expenses you intend to model, excluding loan payments and the vacancy adjustment already supplied. Taxes, insurance, management, maintenance and reserves may require different treatment in your own records; enter their combined monthly equivalent explicitly. NOI excludes debt service. Cash flow subtracts the complete supplied monthly loan payment, so principal and interest both reduce this cash-flow measure.",
    "scenarios": [
      "No vacancy — collected rent equals scheduled rent.",
      "No debt — annual cash flow equals NOI.",
      "Cost stress — raising operating costs reduces both NOI and cash flow."
    ],
    "mistakes": [
      "Including loan payments inside operating costs and again as debt service.",
      "Comparing monthly income against annual expenses.",
      "Treating cap rate as appreciation-inclusive total return."
    ],
    "verification": "Calculate collected monthly rent first, then subtract operating costs before annualizing. Subtract twelve loan payments to reconcile annual cash flow. Divide each numerator by its explicitly labeled capital basis. Increasing loan payment should change cash-on-cash return while leaving NOI and cap rate unchanged. These checks validate the worksheet without verifying the property assumptions.",
    "sourceUrl": "https://www.irs.gov/publications/p527",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "cap-rate-calculator",
        "title": "Cap Rate Calculator — Annual NOI and Property Value"
      },
      {
        "slug": "npv-calculator",
        "title": "NPV Calculator"
      },
      {
        "slug": "rent-affordability-calculator",
        "title": "Rent Affordability Calculator"
      }
    ]
  },
  "resistor-color-code-calculator": {
    "keywordThemes": [
      "resistor calculator",
      "electronic color code calculator",
      "resistor color code calculator"
    ],
    "interpretation": "The tolerance band supplies a percentage around the nominal value. Gold means ±5% and silver ±10%; the selector includes several tighter marked tolerances. A missing tolerance band can be represented with the four-band convention of 20%, while five-band mode requires a marked tolerance. The endpoints are calculated by multiplying nominal ohms by one minus or plus the percentage, not by adding that number of ohms.",
    "scenarios": [
      "Four bands — brown, black, red, gold gives 1000 Ω ±5%.",
      "Five bands — red, orange, violet, black, brown gives 237 Ω ±1%.",
      "Fractional multiplier — brown, black, gold gives nominal 1 Ω."
    ],
    "mistakes": [
      "Treating the multiplier color as another digit.",
      "Using the same color meaning for multiplier and tolerance positions.",
      "Inferring wattage or safe operating voltage from resistance bands."
    ],
    "verification": "Write the two or three significant digits, multiply by the selected factor and calculate both percentage endpoints manually. Check the manufacturer chart rather than a color name guessed from a photo. Compare a known four-band and five-band example. An isolated meter measurement is a separate verification step and must account for measurement accuracy.",
    "sourceUrl": "https://www.vishay.com/docs/49411/resistor_color_code_calculator.pdf",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "parallel-resistor-calculator",
        "title": "Parallel Resistor Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohm’s Law, Watt and Ampere Calculator"
      },
      {
        "slug": "rc-filter-calculator",
        "title": "RC Filter Calculator"
      }
    ]
  },
  "quadratic-equation-calculator": {
    "keywordThemes": [
      "quadratic calculator"
    ],
    "interpretation": "The implementation scales coefficients before evaluating the discriminant and uses a cancellation-resistant form for the real roots. It computes one root from a signed square-root expression and the other from the product relationship when possible. This reduces loss of the smaller root when b is much larger than the other terms. It remains floating-point arithmetic and does not guarantee exact rational or radical output.",
    "scenarios": [
      "Repeated root — x²−2x+1 gives x=1 twice.",
      "Linear reduction — 0x²+2x−6 gives x=3.",
      "Constant identity — all-zero coefficients make every x a solution."
    ],
    "mistakes": [
      "Forgetting to reverse a sign when moving a term.",
      "Discarding complex roots as invalid arithmetic.",
      "Using the quadratic formula when a is zero."
    ],
    "verification": "Substitute both real roots and check the residual. Independently verify that their sum equals −b/a and product equals c/a for a nonzero a, allowing floating-point rounding. Test the complex example x²+1 and the linear and constant boundaries. Scaling all three coefficients by the same nonzero factor should preserve the solutions.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "substitution-calculator",
        "title": "Substitution Calculator — Two Linear Equations"
      },
      {
        "slug": "eigenvalue-calculator",
        "title": "Eigenvalue Calculator — 2×2 Matrices"
      },
      {
        "slug": "nth-root-calculator",
        "title": "Nth Root Calculator"
      }
    ]
  },
  "density-mass-volume-calculator": {
    "keywordThemes": [
      "calculator of mass",
      "mass solver",
      "mass calculator",
      "how to calculate a mass",
      "how do i calculate the mass of an object",
      "density calculator",
      "calculate density"
    ],
    "interpretation": "Density here means mass divided by the supplied bulk volume. It can differ from a material’s true solid density when pores, air spaces or packing gaps are included. Liquids and gases can change density with temperature and pressure, so values from incompatible conditions should not be combined. The result does not establish composition, purity, buoyancy in an unspecified fluid or the correct density of an unknown substance.",
    "scenarios": [
      "Reverse check — ρ=1000 and V=0.002 gives m=2 kg.",
      "Unit check — one litre corresponds to 0.001 m³.",
      "Zero mass — zero kg over positive volume gives zero bulk density."
    ],
    "mistakes": [
      "Using litres as though they were cubic metres.",
      "Combining density and volume from different material conditions.",
      "Confusing bulk physical mass with molecular mass."
    ],
    "verification": "Use the solved mass, volume and density to verify m=ρV whenever that identity is defined. Repeat the example in all three modes. Check unit conversion independently before judging the result: an error of one thousand often indicates litres versus cubic metres. Measurement uncertainty and void-space choices must be assessed from the original records.",
    "sourceUrl": "https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "grams-to-ml-converter",
        "title": "Grams to mL Converter"
      },
      {
        "slug": "cylinder-volume-calculator",
        "title": "Cylinder Volume Calculator"
      },
      {
        "slug": "molecular-weight-calculator",
        "title": "Molecular Weight Calculator"
      }
    ]
  },
  "net-carbohydrate-calculator": {
    "keywordThemes": [
      "net carb calculator"
    ],
    "interpretation": "Fiber subtraction plus sugar alcohol cannot exceed total carbohydrate under this worksheet’s inclusive-total basis. A rejected combination may indicate rounded label values, mixed serving sizes or a label system whose carbohydrate definition differs. Do not force a negative number into a plausible result by clamping it to zero. Recheck the original label and whether subtracting fiber would count the same exclusion twice.",
    "scenarios": [
      "No subtraction — zero fiber and zero alcohol adjustment preserve total grams.",
      "Two servings — both consumed measures double.",
      "Full chosen adjustment — a 100% alcohol fraction subtracts all entered alcohol grams."
    ],
    "mistakes": [
      "Subtracting fiber from a total that already excludes it.",
      "Mixing nutrient values from different serving sizes.",
      "Treating modeled net grams as a medication or glucose prediction."
    ],
    "verification": "Compute the selected alcohol subtraction independently, add it to fiber subtraction and subtract that combined amount once from total carbohydrate. Multiply the remainder by servings. Confirm consumed total carbohydrate separately. A zero adjustment should preserve the original label amount, and doubling servings should double outputs without changing per-serving values.",
    "sourceUrl": "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "macro-calculator",
        "title": "Macro Calculator — Supplied Calories, Protein, Fat and Carbs"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      }
    ]
  },
  "least-common-multiple-calculator": {
    "keywordThemes": [
      "least common multiple calculator",
      "least common calculator",
      "minimum common multiple calculator",
      "common multiple calculator"
    ],
    "interpretation": "If any input is zero, this worksheet returns zero for LCM. That convention is useful for a total function, but zero is not a positive recurring interval, so do not interpret it as a next scheduled event time. The GCD of an all-zero list is also zero. Including one does not enlarge a nonzero LCM, because every integer is already divisible by one.",
    "scenarios": [
      "Coprime pair — 7 and 11 give LCM 77 and GCD 1.",
      "Repeated input — 12,12 keeps LCM 12.",
      "Zero convention — 0,12 gives LCM 0 and GCD 12."
    ],
    "mistakes": [
      "Confusing factors with multiples.",
      "Using grouping commas in a single large integer.",
      "Treating zero LCM as a real positive event period."
    ],
    "verification": "For a nonzero list, divide the LCM by each input and confirm an exact integer quotient. For two positive values, LCM×GCD must equal their product. Confirm repeat and one-input cases. A scheduling interpretation additionally requires matching units and start offsets; the number-theory check alone cannot establish those real-world assumptions.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "gcf-calculator",
        "title": "GCF Calculator"
      },
      {
        "slug": "prime-factorization-calculator",
        "title": "Prime Factorization Calculator"
      },
      {
        "slug": "fraction-calculator",
        "title": "Fraction Calculator"
      }
    ]
  },
  "dice-sum-probability-calculator": {
    "keywordThemes": [
      "dice calculator"
    ],
    "interpretation": "Exactly counts only the target sum. At most includes the target and every lower possible sum; at least includes the target and every higher possible sum. The target may be zero through two thousand. A target outside the attainable interval gives zero or one as appropriate instead of an arbitrary error. The attainable sums range from the dice count to dice count multiplied by sides.",
    "scenarios": [
      "One die — each attainable face has probability 1/s.",
      "Minimum sum — all dice must show one, giving one favorable ordered outcome.",
      "Complement — P(sum≤t)+P(sum≥t+1)=1."
    ],
    "mistakes": [
      "Assuming each sum is equally likely.",
      "Excluding the target from an inclusive comparison.",
      "Using a fair-dice model for reroll or drop-lowest rules."
    ],
    "verification": "For two six-sided dice, enumerate all thirty-six ordered pairs and count the target sums. Confirm that the full count sums to sides raised to dice count. Check symmetry around the expected sum and verify the inclusive complementary probabilities at neighboring thresholds. These checks validate the stated model rather than proving a physical die is fair.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "probability-calculator",
        "title": "Probability Calculator"
      },
      {
        "slug": "permutation-combination-calculator",
        "title": "Permutation and Combination Calculator"
      },
      {
        "slug": "binomial-distribution-calculator",
        "title": "Binomial Distribution Calculator — Exact and Tail Probabilities"
      }
    ],
    "secondarySourceUrl": "https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology"
  },
  "nth-root-calculator": {
    "keywordThemes": [
      "cube rooting calculator",
      "cube root calculator",
      "root calculator"
    ],
    "interpretation": "Even powers are nonnegative for real inputs. A negative radicand therefore has no real even-degree root and is rejected. For a positive radicand, this page returns the nonnegative principal even root, not both solutions to a polynomial equation. Solving r⁴=81 as an equation is a different question from evaluating the principal fourth-root function at 81.",
    "scenarios": [
      "Cube — 125 with degree three gives 5.",
      "Odd sign — −32 with degree five gives −2.",
      "Zero — degree seven of zero gives zero."
    ],
    "mistakes": [
      "Confusing the degree with an exponent applied directly.",
      "Expecting negative real roots for a negative even radicand.",
      "Reading a principal even root as the complete equation solution set."
    ],
    "verification": "Raise the returned root to the degree independently. Check a perfect power such as 2⁵=32, a negative odd power and the zero boundary. For a positive input, squaring a degree-two result should agree with the protected separate square-root worksheet within rounding. The reconstruction validates arithmetic without making rounded output an exact symbolic answer.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/1-3-radicals-and-rational-exponents",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "square-root-calculator",
        "title": "Square Root Calculator"
      },
      {
        "slug": "quadratic-equation-calculator",
        "title": "Quadratic Equation Calculator"
      },
      {
        "slug": "logarithm-calculator",
        "title": "Logarithm Calculator"
      }
    ]
  },
  "title-case-converter": {
    "keywordThemes": [
      "title case converter"
    ],
    "interpretation": "In simple headline mode, a word following a colon, period, exclamation mark or question mark is capitalized. This explicit boundary rule helps subtitle formatting but does not understand whether a period is an abbreviation or part of a special name. Line breaks are preserved rather than replacing the original layout. Review a multi-line document after conversion if each line should behave as an independent title.",
    "scenarios": [
      "Minor words — internal “of” stays lowercase in headline mode.",
      "Endpoints — first and last word tokens are capitalized.",
      "Subtitle — a word after a colon is capitalized."
    ],
    "mistakes": [
      "Assuming a simple rule implements a named style guide exactly.",
      "Publishing normalized acronyms without review.",
      "Using English token rules as a language-independent capitalization standard."
    ],
    "verification": "Compare the original and converted text character by character outside letter tokens; punctuation and whitespace should be unchanged. Check the first and last tokens and a minor word in the middle. Run a colon example and inspect acronym normalization. A second conversion in the same mode should be stable, while a final human review should restore names and house-style exceptions.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "word-character-counter",
        "title": "Word and Character Counter",
        "path": "/generator-tools/word-character-counter/"
      },
      {
        "slug": "reading-time-calculator",
        "title": "Reading Time Calculator",
        "path": "/generator-tools/reading-time-calculator/"
      },
      {
        "slug": "citation-generator",
        "title": "Citation Generator",
        "path": "/generator-tools/citation-generator/"
      }
    ]
  },
  "sequence-sum-calculator": {
    "keywordThemes": [
      "summation calculator",
      "sum calculator",
      "arithmetic sequence calculator"
    ],
    "interpretation": "Geometric terms multiply by the same ratio. A negative ratio alternates signs, zero makes every term after the first zero, and one keeps all terms equal. A ratio between zero and one reduces positive term magnitudes. This page sums only the chosen finite number of terms, even when an infinite-series limit exists. It does not interpret the count as infinity or require a convergent ratio.",
    "scenarios": [
      "Constant — first term 4 with difference zero and five terms sums to 20.",
      "Alternating — first term 1, ratio −1 and four terms sums to zero.",
      "One term — any supported step leaves sum equal to the first term."
    ],
    "mistakes": [
      "Using n differences for n terms.",
      "Confusing additive difference with multiplicative ratio.",
      "Interpreting a finite geometric sum as an infinite limit."
    ],
    "verification": "Write a short sequence manually and add its terms. Verify the arithmetic sum with first-plus-last pairing and the geometric sum with its closed form when the ratio differs from one. Check ratios zero, one and minus one separately. The final term should match exactly n−1 step operations from the first, allowing floating-point rounding.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/9-2-arithmetic-sequences",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "lottery-annuity-calculator",
        "title": "Lottery Annuity Calculator"
      },
      {
        "slug": "compound-interest-calculator",
        "title": "Compound Interest Calculator — Monthly Contributions and ETF Scenarios"
      },
      {
        "slug": "time-value-of-money-calculator",
        "title": "Time Value of Money Calculator"
      }
    ]
  },
  "lease-buyout-calculator": {
    "keywordThemes": [
      "lease buyout calculator"
    ],
    "interpretation": "Comparable vehicle value is a supplied estimate, not a loaded market appraisal or guaranteed sale price. The difference between it and all-in cost indicates modeled purchase equity before any selling costs. Positive equity alone does not determine whether buying is appropriate. Condition, repair exposure, sale restrictions and transaction costs remain outside this scalar comparison. Previous lease payments are not added to the prospective buyout decision.",
    "scenarios": [
      "Cash purchase — full down payment makes loan principal zero.",
      "Zero interest — payment is principal divided by months.",
      "Included fee — an already-inclusive quote should not receive the same fee again."
    ],
    "mistakes": [
      "Using an old residual as an unverified current payoff.",
      "Adding taxes already included in the written quote.",
      "Treating supplied value-minus-cost as guaranteed resale profit."
    ],
    "verification": "Add the quote, extra fees and tax once. Subtract down payment to verify principal, then reconcile down payment plus payments with total cash. At zero rate, payment times months must equal principal. Compare the model with the written lender schedule and lessor quote; the worksheet cannot verify contract restrictions or current vehicle value.",
    "sourceUrl": "https://www.consumerfinance.gov/consumer-tools/auto-loans/",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "car-lease-vs-buy-calculator",
        "title": "Lease vs Buy Car Calculator — 36-Month Net Costs"
      },
      {
        "slug": "loan-comparison-calculator",
        "title": "Loan Comparison Calculator"
      },
      {
        "slug": "payment-calculator",
        "title": "Payment Calculator"
      }
    ]
  },
  "half-life-calculator": {
    "keywordThemes": [
      "half life converter",
      "half life calculator",
      "how to calculate half life",
      "how to calculate for half life"
    ],
    "interpretation": "A half-life halves the current remaining amount, not the original amount again each interval. After one half-life, fifty percent remains; after two, twenty-five percent; after three, twelve-and-a-half percent. Constant exponential decay approaches zero but does not reach it at finite time. The time-zero case preserves the initial amount exactly in the model, while extremely long intervals can underflow browser precision.",
    "scenarios": [
      "Time zero — the initial amount remains unchanged.",
      "One half-life — remaining quantity is half of initial.",
      "Reverse inference — a quarter remaining after eight units implies four-unit half-life."
    ],
    "mistakes": [
      "Subtracting a constant half of the initial amount repeatedly.",
      "Mixing time units.",
      "Reading a two-point mathematical fit as a clinical clearance guarantee."
    ],
    "verification": "Calculate the ratio of elapsed time to half-life and apply repeated halving for integer cases. Feed a nonzero modeled remaining value into inference mode and verify the recovered half-life. Doubling both quantity inputs should preserve inference. Check the time-zero forward case and reject equal, zero or increasing observations in inference mode.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/6-7-exponential-and-logarithmic-models",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "logarithm-calculator",
        "title": "Logarithm Calculator"
      },
      {
        "slug": "nth-root-calculator",
        "title": "Nth Root Calculator"
      },
      {
        "slug": "sequence-sum-calculator",
        "title": "Sequence Sum Calculator"
      }
    ]
  },
  "acreage-calculator": {
    "keywordThemes": [
      "acreage calculator"
    ],
    "interpretation": "The boundary may be concave, but nonadjacent edges must not cross or touch. Consecutive duplicate points and zero-area boundaries are rejected. The implementation checks those conditions before taking the absolute signed area. A single plot with an internal hole is not represented by one list; calculate justified separate simple regions and subtract the excluded region separately. Do not join unrelated parcels with invented connecting edges.",
    "scenarios": [
      "Rectangle — 100 by 200 feet gives 20000 ft².",
      "Triangle — (0,0),(100,0),(0,100) encloses 5000 ft².",
      "Boundary reversal — reversing all vertices preserves area."
    ],
    "mistakes": [
      "Using geographic degrees as measured linear coordinates.",
      "Shuffling vertices instead of walking the boundary.",
      "Converting area with a linear factor rather than its square."
    ],
    "verification": "Compare a rectangular or triangular test boundary with elementary geometry. Reverse the vertex list and translate every coordinate by a common offset; both should preserve area. Convert square feet to acres independently by dividing by 43560. Confirm the actual measurement system and boundary evidence separately, since arithmetic checks cannot certify a property survey.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "length-conversion-calculator",
        "title": "Length Conversion Calculator"
      },
      {
        "slug": "slope-calculator",
        "title": "Slope Calculator"
      }
    ]
  },
  "annualized-return-calculator": {
    "keywordThemes": [
      "annualized return calculator",
      "how to calculate rate of return",
      "investment roi calculator"
    ],
    "interpretation": "The annualized value is the constant hypothetical compound rate that connects the two supplied endpoints over the chosen period. It is not an arithmetic average of observed yearly returns. Different year-by-year paths can produce the same endpoints and therefore the same annualized result. Volatility, drawdowns and sequence of returns are invisible when only the starting and ending value are used.",
    "scenarios": [
      "Unchanged value — equal endpoints give zero return.",
      "Two-year gain — 100 to 121 gives 10% annually.",
      "Total loss — positive start and zero end gives −100%."
    ],
    "mistakes": [
      "Dividing total percentage by years as though it were compound return.",
      "Ignoring deposits or withdrawals.",
      "Treating short-period annualization as a forecast."
    ],
    "verification": "Reconstruct ending value with starting×(1+annualized rate)^years. Compare the total endpoint ratio independently. Equal endpoints should give zero, and a one-year interval should make annualized and total percentages agree. Reconcile deposits, withdrawals, fees and valuation dates from original records before interpreting the result as an investment-performance measure.",
    "sourceUrl": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "inflation-adjusted-return-calculator",
        "title": "Inflation-Adjusted Return Calculator"
      },
      {
        "slug": "compound-interest-calculator",
        "title": "Compound Interest Calculator — Monthly Contributions and ETF Scenarios"
      },
      {
        "slug": "npv-calculator",
        "title": "NPV Calculator"
      }
    ]
  },
  "time-value-of-money-calculator": {
    "keywordThemes": [
      "tvm solver",
      "present day value calculator",
      "pv calculator"
    ],
    "interpretation": "A positive present balance is an amount already held; a positive regular contribution adds money, and a negative contribution withdraws it. This balance-growth convention differs from a lender cash-flow sign convention that might use opposite signs for PV and payments. A negative calculated contribution means a recurring withdrawal satisfies the supplied endpoint equation under this model, not that a missing field was assumed to be zero.",
    "scenarios": [
      "Zero rate — 1000 plus twelve contributions of 100 gives 2200.",
      "No contribution — FV is PV multiplied by compound growth.",
      "Inverse solve — a computed future balance can recover the supplied present balance."
    ],
    "mistakes": [
      "Entering an annual rate with a monthly count.",
      "Mixing balance signs with traditional lender cash-flow signs.",
      "Expecting an unknown rate or term count to be solved automatically."
    ],
    "verification": "Solve future value, then use that output in present-value mode with the same contribution, rate, count and timing. The recovered present balance should match. Repeat in contribution mode and test zero interest independently. Compare beginning and end timing under a positive rate. These reversals check arithmetic but cannot validate a real contract’s fees or timing.",
    "sourceUrl": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "payment-calculator",
        "title": "Payment Calculator"
      },
      {
        "slug": "npv-calculator",
        "title": "NPV Calculator"
      },
      {
        "slug": "sequence-sum-calculator",
        "title": "Sequence Sum Calculator"
      }
    ]
  },
  "prime-factorization-calculator": {
    "keywordThemes": [
      "prime factorization calculator"
    ],
    "interpretation": "A notation such as 2^3 means three factors of two multiplied together, not the number twenty-three. Repeated prime factors are consolidated into powers for readability. Every positive divisor chooses an exponent from zero through the recorded exponent for each distinct prime, making the count a product of one plus each exponent. This page counts divisors rather than listing an arbitrarily long divisor set.",
    "scenarios": [
      "Prime — 97 gives factor 97 and two divisors.",
      "Prime power — 64 gives 2^6 and seven divisors.",
      "Identity — one has no prime factors and one positive divisor."
    ],
    "mistakes": [
      "Reading exponent notation as concatenated digits.",
      "Calling one prime.",
      "Using a single factorization as though it were a multi-input GCF answer."
    ],
    "verification": "Multiply every displayed prime power and confirm the original input exactly. For small examples, enumerate positive divisors and compare their count with the exponent product. Test a prime, a prime power and one. Each reported factor should be prime and distinct before its exponent is applied; the browser domain is intentionally much smaller than cryptographic factorization tasks.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "gcf-calculator",
        "title": "GCF Calculator"
      },
      {
        "slug": "least-common-multiple-calculator",
        "title": "Least Common Multiple Calculator"
      },
      {
        "slug": "big-number-calculator",
        "title": "Big Number Calculator — Exact Integers"
      }
    ]
  },
  "ipv6-subnet-calculator": {
    "keywordThemes": [
      "ipv6 subnet calculator"
    ],
    "interpretation": "Choose a child prefix at least as long as the parent and no longer than 128. Each extra prefix bit doubles the number of equal child blocks. An equal child and parent length yields one block. The page reports the count and first child network, rather than enumerating billions of prefixes. Mathematical subdivision does not establish that a provider delegated the block or that your equipment supports the intended addressing plan.",
    "scenarios": [
      "Single address — /128 has one address and one equal-length child.",
      "Whole space — /0 contains 2^128 addresses.",
      "Prefix split — /48 into /64 gives 65536 equal child blocks."
    ],
    "mistakes": [
      "Subtracting network and broadcast slots as though IPv6 were IPv4.",
      "Using a child prefix shorter than the parent.",
      "Confusing an address-space count with an operational host allocation."
    ],
    "verification": "Expand the supplied address to eight hextets and confirm normalization preserves the same bits. Verify that network is divisible by parent block size and last minus network plus one equals that size exactly. Check child count as a power of two and test /0 and /128 boundaries. These arithmetic checks do not verify routing or provider allocation.",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc4291",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "hex-calculator",
        "title": "Hex Calculator"
      },
      {
        "slug": "binary-calculator",
        "title": "Binary Calculator"
      },
      {
        "slug": "bandwidth-requirement-calculator",
        "title": "Bandwidth Requirement Calculator"
      }
    ],
    "secondarySourceUrl": "https://www.rfc-editor.org/rfc/rfc5952"
  },
  "bandwidth-requirement-calculator": {
    "keywordThemes": [
      "bandwidth calculator"
    ],
    "interpretation": "Mbps and Gbps here use decimal prefixes: one Gbps is one thousand Mbps. Eight bits make one byte. The supporting data-per-hour value is decimal gigabytes using one billion bytes per GB. It represents the supplied sustained traffic load, not the larger reserved link capacity. Binary GiB quantities and storage-file sizes use a different prefix basis and need explicit conversion before comparison.",
    "scenarios": [
      "No reserve — 100% utilization makes capacity equal aggregate load.",
      "No streams — only the separately supplied other traffic remains.",
      "Doubling flows — identical streams double their contribution to aggregate load."
    ],
    "mistakes": [
      "Confusing megabits with megabytes.",
      "Adding reserve as a traffic percentage instead of using the stated utilization model.",
      "Mixing payload and on-wire traffic without an explicit overhead basis."
    ],
    "verification": "Multiply stream rate by count, add other traffic and check that load divided by capacity equals the chosen utilization fraction. Convert one hour of load from megabits to bytes and then decimal GB independently. Set utilization to one hundred percent and confirm capacity equals load. Compare actual observed peak traffic and link constraints separately from the arithmetic.",
    "sourceUrl": "https://www.nist.gov/pml/owm/metric-si-prefixes",
    "sourceNote": "Method and scope reviewed on 5 October 2026. SolvePilot provides the original worked example and bounded browser implementation. Editorial and arithmetic review by Mohammad Qasim does not certify user measurements, a real contract or an individual professional decision. The reference supplies method, unit or source-record context; it does not approve this implementation or its inputs.",
    "relatedCalculators": [
      {
        "slug": "download-time-estimator",
        "title": "Download Time Estimator"
      },
      {
        "slug": "time-lapse-calculator",
        "title": "Time-Lapse Calculator"
      },
      {
        "slug": "ipv6-subnet-calculator",
        "title": "IPv6 Subnet Calculator"
      }
    ]
  }
};
