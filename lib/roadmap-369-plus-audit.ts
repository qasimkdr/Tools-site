import type {Audit} from "./semrush-batch-one-audit";
export const roadmap369Audit:Record<string,Audit> = {
  "age-difference-calculator": {
    "keywordThemes": [
      "age calculator difference",
      "age difference calculator",
      "age gap calculator"
    ],
    "interpretation": "The exact-day result treats both dates as midnight UTC. This removes daylight-saving changes from the date-only calculation. A leap day counts when it lies inside the interval. Dividing the day total by 365 gives an approximate year quantity, not the same calendar decomposition. The browser validates real Gregorian dates and rejects impossible dates such as February 30 instead of silently rolling them into March.",
    "scenarios": [
      "Same day — identical dates return zero days and zero calendar components.",
      "Leap boundary — 2024-02-28 to 2024-03-01 spans two exact days.",
      "Month boundary — 2023-01-31 to 2023-02-28 counts one clamped calendar month."
    ],
    "mistakes": [
      "Subtracting rounded ages instead of full birth dates.",
      "Assuming every calendar month has thirty days.",
      "Using the displayed gap as an official eligibility rule."
    ],
    "verification": "Verify the exact day count against a date calendar, including each leap day in the interval. For the calendar form, advance the earlier date by the displayed whole months under the clamp convention, then add the remaining days. You should arrive at the later date. Reversing the dates should preserve every gap output.",
    "sourceUrl": "https://docs.python.org/3/library/datetime.html",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "date-from-today-calculator",
        "title": "Date From Today Calculator"
      },
      {
        "slug": "how-many-years-calculator",
        "title": "How Many Years Calculator"
      }
    ]
  },
  "parallel-resistor-calculator": {
    "keywordThemes": [
      "parallel resistor calculator"
    ],
    "interpretation": "Leave voltage blank when you only want resistance. Supplying a nonnegative voltage enables ideal branch current and power arithmetic. These extra rows depend on the supplied voltage remaining across every branch. A real source can sag under load, and a component’s actual resistance can change with temperature. Use measured values or specified conditions when a numerical comparison matters.",
    "scenarios": [
      "Equal pair — two 100 Ω branches give 50 Ω.",
      "Single branch — 220 Ω stays 220 Ω.",
      "Added path — adding a positive branch reduces equivalent resistance."
    ],
    "mistakes": [
      "Adding branch resistances as if the parts were in series.",
      "Entering kΩ values without multiplying by one thousand.",
      "Treating ideal computed power as component-rating approval."
    ],
    "verification": "Check two branches with R₁R₂/(R₁+R₂), then compare the answer with the reciprocal-sum output. With voltage supplied, sum all branch currents and compare with total current. For equal branches, divide one resistance by the branch count. None of these arithmetic checks verifies the wiring or the real source voltage.",
    "sourceUrl": "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
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
  "scrap-silver-calculator": {
    "keywordThemes": [
      "scrap silver calculator",
      "silver calculator"
    ],
    "interpretation": "The example quote is arithmetic data, not a current market price. Enter a quote with its currency, time and troy-ounce basis from the source you intend to use. The output does not load a feed, convert currencies or claim that spot price is a guaranteed offer. If you change only the quote, the fine mass remains fixed and modeled value changes proportionally.",
    "scenarios": [
      "Fine metal — 100% purity preserves the gross silver mass.",
      "Sterling assumption — 100 g at 92.5% gives 92.5 fine grams.",
      "No payout — a zero buyer percentage gives zero estimated payout."
    ],
    "mistakes": [
      "Confusing troy ounces with ordinary mass ounces.",
      "Using total plated-item weight as solid silver.",
      "Assuming the example quote is a live market offer."
    ],
    "verification": "Calculate fine grams manually, divide by 31.1034768 and multiply by the quote. Then apply the buyer percentage once. At a 100% payout, estimated payout must equal modeled metal value. A purity of zero must produce zero fine mass and value. Reconcile an actual offer with its assay and deductions separately.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "pounds-ounces-converter",
        "title": "Pounds and Ounces Converter"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      }
    ]
  },
  "z-score-calculator": {
    "keywordThemes": [
      "z value calculator",
      "z-score calculator",
      "how to calculate z score",
      "how to calculate a z score",
      "standard score calculator",
      "calculate z score",
      "how to calculate z value"
    ],
    "interpretation": "A z-score calculation itself does not require a normal distribution. Normal-table percentiles and tail probabilities do require a justified model and a specified direction or test. This page reports standardized distance only. It does not turn 1.96 into a significance claim, infer a confidence level, classify an outlier or diagnose a condition. Such conclusions need additional assumptions and a suitable analysis.",
    "scenarios": [
      "At the mean — x = 70, mean 70 and deviation 10 gives z = 0.",
      "One deviation high — x = 80 gives z = 1 under the same reference.",
      "Unit conversion — multiplying x, mean and deviation by ten preserves z."
    ],
    "mistakes": [
      "Entering variance rather than standard deviation.",
      "Combining statistics from incompatible reference groups.",
      "Treating standardized distance alone as a significance test."
    ],
    "verification": "Reconstruct the original value using mean + z × standard deviation. Check the zero case and a value exactly one deviation above the mean. Convert all three quantities by the same positive scale factor; the score should stay unchanged. These checks validate the arithmetic while leaving the choice of reference and probability model to the original analysis.",
    "sourceUrl": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda35h.htm",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Average and Standard Deviation Calculator — Sample, Population and SEM"
      },
      {
        "slug": "percent-error-calculator",
        "title": "Electricity Usage Calculator"
      }
    ]
  },
  "circumference-calculator": {
    "keywordThemes": [
      "circumference calculator"
    ],
    "interpretation": "If perimeter is the known measurement, divide by π for diameter or 2π for radius. A string wrapped tightly around a circular object can supply a perimeter measurement, but slack, thickness and a noncircular profile affect the inferred diameter. The tool assumes a perfect Euclidean circle and does not correct for measurement method, ovality or material deformation.",
    "scenarios": [
      "Radius doubled — perimeter doubles and area quadruples.",
      "Diameter input — d = 10 gives the same circle as r = 5.",
      "Perimeter input — C = 2π recovers r = 1."
    ],
    "mistakes": [
      "Entering diameter while selecting radius.",
      "Labeling area with ordinary linear units.",
      "Adding a fabrication allowance to the wrong geometric measurement."
    ],
    "verification": "Check that diameter/radius equals two and circumference/diameter equals π. Square the radius and multiply by π to verify the supporting area. For a reverse calculation, use as many original perimeter digits as available before comparing the reconstructed value. Measurement error is separate from display rounding.",
    "sourceUrl": "https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "surface-area-calculator",
        "title": "Area and Surface Area Calculator"
      },
      {
        "slug": "length-conversion-calculator",
        "title": "Length Conversion Calculator"
      }
    ]
  },
  "pounds-ounces-converter": {
    "keywordThemes": [
      "convert pounds to ounces",
      "oz pounds converter",
      "convert ounces in pounds",
      "oz convert to pounds",
      "converter ounces to pounds"
    ],
    "interpretation": "The mixed row takes the whole-number pounds first and converts the remaining fraction to ounces. Thus 1.25 lb becomes 1 lb 4 oz, not 1 lb 25 oz. It uses nonnegative inputs, so no signed mixed-number convention is needed. Rounded ounce output can approach a boundary; the decimal-pound and total-ounce rows retain the corresponding value for an independent check.",
    "scenarios": [
      "One pound — 1 lb gives 16 oz and 453.59237 g.",
      "Fractional pound — 0.5 lb gives 8 oz.",
      "Zero mass — zero stays zero in every unit."
    ],
    "mistakes": [
      "Confusing mass ounces with fluid ounces.",
      "Reading 2.8 lb as 2 lb 8 oz.",
      "Using the converter for troy precious-metal weight."
    ],
    "verification": "Multiply decimal pounds by sixteen and compare with total ounces. Multiply pounds by 453.59237 to check grams. Then recombine whole pounds and mixed ounces as pounds + ounces/16. A round trip through grams should preserve the original mass within output rounding, independent of the accuracy of the original scale.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "grams-to-ml-converter",
        "title": "Grams to mL Converter"
      },
      {
        "slug": "scrap-silver-calculator",
        "title": "Scrap Silver Calculator"
      }
    ]
  },
  "pizza-party-calculator": {
    "keywordThemes": [
      "pizza calculator"
    ],
    "interpretation": "The allowance raises expected slices before whole-pizza rounding. Applying a buffer after rounding can produce a different order, so the method is explicit. Fractional planned slices are allowed because they are an aggregate demand estimate; the final pizza count is always rounded upward. The excess from whole pizzas is visible by comparing planned slices with slices actually supplied.",
    "scenarios": [
      "No buffer — 12 × 3 / 8 needs 5 pizzas after rounding.",
      "Exact fit — 8 guests × 2 slices with 8-slice pizzas needs 2.",
      "No demand — zero slices per guest gives zero pizzas."
    ],
    "mistakes": [
      "Treating slice count as independent of pizza size.",
      "Applying the buffer again to the rounded pizza count.",
      "Assuming the pizza subtotal is the complete delivered bill."
    ],
    "verification": "Multiply the proposed whole-pizza count by slices per pizza. It should cover planned slices, and one fewer pizza should fail to cover positive planned demand. Multiply that count by the price to check the subtotal. Reconcile guest preferences and the actual restaurant cart before ordering; arithmetic coverage does not guarantee that every guest receives a suitable meal.",
    "sourceUrl": "https://openstax.org/books/prealgebra-2e/pages/6-3-solve-proportions-and-their-applications",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "split-bill-calculator",
        "title": "Split Bill Calculator"
      },
      {
        "slug": "tip-calculator",
        "title": "Tip Calculator"
      }
    ]
  },
  "length-conversion-calculator": {
    "keywordThemes": [
      "metric to inches calculator",
      "convert metric to standard",
      "metric conversion calculator",
      "convert metric to inches",
      "measurement calculator",
      "converter for distance",
      "convert into metres",
      "meter to meter converter",
      "convert calculator",
      "convert mm",
      "inches calculator",
      "mileage convert to km",
      "convert miles km to miles",
      "convert to km to miles",
      "convert kilometers to miles",
      "mm to inches calculator"
    ],
    "interpretation": "The foot and mile options use the international definitions, with one foot equal to 0.3048 metres and one mile equal to 1609.344 metres. Historical survey-foot records can use a different basis. A nautical mile is also a separate unit and is not an option. Identify the source convention before converting surveying, marine or historical data instead of assuming every label has the same meaning.",
    "scenarios": [
      "Same units — metres to metres preserves the input.",
      "Inch check — 1 in equals 25.4 mm.",
      "Mile check — 1 mi equals 1.609344 km."
    ],
    "mistakes": [
      "Selecting conversion units in the wrong direction.",
      "Reading decimal feet as mixed feet and inches.",
      "Treating knots as kilometres or using linear factors for area."
    ],
    "verification": "Convert the result back with the selectors reversed and compare with the original value. Check exact factor examples such as one inch to 25.4 mm and one foot to twelve inches. Use the metres row to catch a thousand-fold metric-prefix mistake. Preserve unrounded source values when another calculation needs the full available precision.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "feet-inches-calculator",
        "title": "Feet and Inches Calculator"
      },
      {
        "slug": "circumference-calculator",
        "title": "Circumference Calculator"
      }
    ]
  },
  "electricity-usage-calculator": {
    "keywordThemes": [
      "power usage calculator",
      "electrical energy use calculator",
      "energy cost calculator",
      "electric calculator",
      "electricity calculator",
      "energy usage calculator",
      "electricity expense calculator",
      "kilowatt hour calculator",
      "kilowatt calculator",
      "electricity usage calculator",
      "kwh calculator",
      "energy consumption calculator",
      "how to calculate kwh",
      "energy calculator",
      "electrical power cost calculator"
    ],
    "interpretation": "Duty cycle is the fraction of entered runtime spent at the entered power. A thermostat-controlled appliance may cycle on and off, so a 50% assumption averages half its running power across that runtime. Do not apply another duty adjustment when the input power already represents a measured average. A device can also have standby power during the off portion; that requires its own calculation because it is absent from this simple model.",
    "scenarios": [
      "One kWh — 1000 W × one hour at full duty uses 1 kWh.",
      "Half duty — 50% uses half the full-duty energy.",
      "Two devices — identical device count two doubles kWh."
    ],
    "mistakes": [
      "Entering annual energy consumption in the watts field.",
      "Reducing a measured average power by duty cycle again.",
      "Treating energy-only cost as the complete utility bill."
    ],
    "verification": "Divide watts by one thousand, multiply by total daily hours and days, then apply count and duty fraction. Compare with a measured kWh total over the same period when available. Doubling runtime should double energy, while a zero runtime or duty cycle should give zero. A bill comparison must separate energy charges from unrelated billing lines.",
    "sourceUrl": "https://www.energy.gov/cmei/femp/measuring-standby-power",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
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
  "eigenvalue-calculator": {
    "keywordThemes": [
      "eigenvalue calculator"
    ],
    "interpretation": "For each real value, the worksheet constructs a nonzero vector in the null space of A−λI and normalizes its Euclidean length to one. Multiplying an eigenvector by any nonzero scalar gives another valid eigenvector, so signs and scale can differ from a textbook answer. Check the direction through Av = λv instead of expecting one identical written vector.",
    "scenarios": [
      "Diagonal — [[2,0],[0,3]] gives 2 and 3.",
      "Rotation — [[0,−1],[1,0]] gives ±i.",
      "Scalar — [[4,0],[0,4]] gives repeated 4 and unrestricted nonzero eigenvectors."
    ],
    "mistakes": [
      "Reordering matrix entries while entering them.",
      "Rejecting a valid eigenvector because its sign differs.",
      "Assuming a repeated value proves diagonalizability."
    ],
    "verification": "Verify the sum against trace and product against determinant. For each displayed real vector, multiply the original matrix by that vector and compare with eigenvalue times vector. A small residual is a numerical check, not a symbolic proof. Test a diagonal, scalar and complex-pair example to distinguish the three principal result branches.",
    "sourceUrl": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-21-eigenvalues-and-eigenvectors/",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "matrix-multiplication-calculator",
        "title": "Matrix Multiplication Calculator"
      },
      {
        "slug": "matrix-inverse-calculator",
        "title": "Inverse Matrix Calculator"
      }
    ]
  },
  "percent-error-calculator": {
    "keywordThemes": [
      "percentage error calculator",
      "percentage error formula",
      "percent error calculator",
      "error calculator",
      "percentage error",
      "error percentage formula",
      "percentage of errors",
      "how to calculate percentage error",
      "how to calculate error",
      "calculate percent error"
    ],
    "interpretation": "A zero reference makes a relative error undefined because there is no nonzero reference magnitude to divide by. Even a measurement of zero against a zero reference cannot produce a defined percentage through this formula. Use the raw measurement difference or a separately chosen scale when zero is the relevant target. The calculator reports the boundary rather than inventing a zero-percent relative result.",
    "scenarios": [
      "Exact match — measurement 10 and reference 10 gives 0%.",
      "Undershoot — 9.8 versus 10 gives 2% absolute and −2% signed.",
      "Negative reference — −9 versus −10 gives 10% absolute and +10% signed."
    ],
    "mistakes": [
      "Swapping measurement and reference without changing interpretation.",
      "Using a zero reference in a relative-error formula.",
      "Confusing one-point agreement with measurement precision."
    ],
    "verification": "Subtract the reference from the measurement, divide the magnitude by the reference magnitude and multiply by one hundred. Reconstruct the measurement difference from signed percentage × absolute reference/100. Check that equal inputs give zero and proportional unit conversion leaves percentages unchanged. Use a separate uncertainty analysis when the task requires confidence or tolerance assessment.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator — Decrease, Difference and Change"
      },
      {
        "slug": "z-score-calculator",
        "title": "Z-Score Calculator"
      }
    ]
  },
  "midpoint-calculator": {
    "keywordThemes": [
      "midpoint calculator"
    ],
    "interpretation": "The Euclidean distance row uses the horizontal and vertical differences through the Pythagorean relation. Both endpoint-to-midpoint distances should equal the displayed half-distance. Distance assumes both axes use the same linear scale and perpendicular directions. If one axis is time and another is money, averaging coordinates can still be algebraically defined, but the Euclidean length has no ordinary shared physical unit.",
    "scenarios": [
      "Horizontal segment — (0,0) and (10,0) give (5,0).",
      "Symmetric points — (−3,−4) and (3,4) give (0,0).",
      "Same point — identical endpoints give zero distance."
    ],
    "mistakes": [
      "Mixing x and y positions while entering values.",
      "Using latitude/longitude as flat Cartesian coordinates.",
      "Interpreting distance when the two axes have incompatible units."
    ],
    "verification": "Average each corresponding coordinate independently. Measure the two endpoint-to-midpoint distances with the same Euclidean formula; they should agree and sum to the full length. Swap the endpoint pairs as an order-invariance check. If the drawing uses different axis scales, correct the scale before interpreting the reported distance.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/2-1-the-rectangular-coordinate-systems-and-graphs",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "geographic-midpoint-calculator",
        "title": "Halfway Point Between Two Cities — Coordinate Calculator"
      },
      {
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      }
    ]
  },
  "dew-point-calculator": {
    "keywordThemes": [
      "dew point calculator",
      "dewpoint calculator",
      "how to calculate dew point"
    ],
    "interpretation": "The displayed Magnus equation is an approximation with stated constants, not an exact thermodynamic solver. This implementation deliberately accepts only air temperatures from zero to fifty Celsius and results in that same range. It therefore avoids claiming a frost-point calculation or extrapolating to subzero dew points. A wider weather model could use different phase assumptions and coefficients; this worksheet does not switch them silently.",
    "scenarios": [
      "Saturation — 25°C and 100% RH returns 25°C.",
      "Moderate humidity — 25°C and 50% RH gives about 13.8576°C.",
      "Dry boundary — a calculated negative dew point is rejected."
    ],
    "mistakes": [
      "Entering 0.5 instead of 50 for fifty percent humidity.",
      "Combining sensors from different places or times.",
      "Interpreting liquid-water dew point as frost point."
    ],
    "verification": "At full humidity, check that dew point equals input temperature. For the default example, substitute the calculated dew point into the ratio of Magnus saturation expressions and recover roughly 50% humidity. Compare a Fahrenheit and equivalent Celsius input to verify the unit conversion. That check tests the chosen approximation, not the accuracy of the sensors.",
    "sourceUrl": "https://journals.ametsoc.org/view/journals/apme/35/4/1520-0450_1996_035_0601_imfaos_2_0_co_2.xml",
    "sourceNote": "Alduchov and Eskridge’s 1996 Magnus-form paper supplies the coefficient context; the NWS page explains the related air-temperature/humidity task and uses its own formulation. SolvePilot uses the explicitly displayed 17.625 and 243.04 coefficients within its narrower 0–50°C liquid-water scope. References reviewed on 5 October 2026 by Mohammad Qasim; no sensor calibration or building assessment is performed.",
    "relatedCalculators": [
      {
        "slug": "vpd-calculator",
        "title": "VPD Calculator — Air, Leaf and Relative Humidity"
      },
      {
        "slug": "electricity-usage-calculator",
        "title": "Electricity Usage Calculator"
      }
    ],
    "secondarySourceUrl": "https://www.weather.gov/epz/wxcalc_rh"
  },
  "lottery-annuity-calculator": {
    "keywordThemes": [
      "lottery annuity calculator"
    ],
    "interpretation": "Choose whether the first payment occurs now or one year from now. Later installments are one year apart. Timing changes discounted value without changing the gross sum. A schedule with an immediate first payment resembles an annuity-due convention; a first payment after one year resembles an ordinary annuity. Actual administrative dates can differ, so this annual model is not a day-specific settlement schedule.",
    "scenarios": [
      "Equal payments — zero escalation divides total by count.",
      "Zero discount — present value equals gross total.",
      "Later start — shifting one year divides present value by 1+r."
    ],
    "mistakes": [
      "Entering the cash quote as the advertised installment total.",
      "Treating a discount assumption as an official cash option.",
      "Mistaking flat tax arithmetic for actual tax liability."
    ],
    "verification": "Sum the geometric payment sequence independently and compare with the advertised total. Set discount to zero and confirm gross present value equals that total. Set escalation to zero and compare with an equal-payment annuity calculation. At one payment, the output should equal the entered total before any tax or timing adjustment. Actual prize and tax terms remain separate.",
    "sourceUrl": "https://www.powerball.com/faqs",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "npv-calculator",
        "title": "NPV Calculator"
      },
      {
        "slug": "payment-calculator",
        "title": "Payment Calculator"
      }
    ]
  },
  "feet-inches-calculator": {
    "keywordThemes": [
      "inches to feet calculator",
      "feet and inches calculator",
      "inch calculator",
      "feet inches calculator"
    ],
    "interpretation": "The inch fields may exceed twelve because normalization happens after the operation. Entering zero feet and twenty inches represents one foot eight inches. A negative result is displayed with a minus sign applying to the entire mixed length, not only its feet component. Thus minus one foot three inches means minus fifteen total inches. The total-inch row removes ambiguity when copying a signed result.",
    "scenarios": [
      "Carry — 1 ft 10 in plus 0 ft 5 in gives 2 ft 3 in.",
      "Borrow — 2 ft 1 in minus 0 ft 5 in gives 1 ft 8 in.",
      "Negative — zero minus 1 ft 3 in gives −15 inches."
    ],
    "mistakes": [
      "Writing mixed feet and inches as decimal feet.",
      "Applying a minus sign only to the feet component.",
      "Forgetting to supply explicit zero components."
    ],
    "verification": "Convert each input to total inches manually, perform the operation, then divide by twelve for decimal feet. Recombine normalized absolute feet and inches and apply the whole-result sign. Adding the second length back to a subtraction result should recover the first. Metres should equal total inches multiplied by 0.0254.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "length-conversion-calculator",
        "title": "Length Conversion Calculator"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      }
    ]
  },
  "long-division-calculator": {
    "keywordThemes": [
      "dividing decimals calculator",
      "calculator of division",
      "calculator with remainders",
      "division calculator",
      "divide calculator",
      "long division calculator with steps",
      "calculator with remainder"
    ],
    "interpretation": "After the whole-number quotient, each step multiplies the nonnegative remainder by ten, extracts one digit and computes the next remainder. The displayed rows expose that process rather than merely returning a decimal string. A zero remainder ends the expansion exactly. Terminating decimals need no trailing recurring marker, while a previously seen remainder identifies a cycle that will continue forever.",
    "scenarios": [
      "Terminating — 1/8 gives 0.125.",
      "Repeating — 1/3 gives 0.(3).",
      "Signed — −7/2 gives −3.5 with scaled integer remainder −1."
    ],
    "mistakes": [
      "Moving the decimal point in only one input.",
      "Treating a truncated expansion as an exact terminating decimal.",
      "Confusing integer remainder with the decimal fractional part."
    ],
    "verification": "Check the scaled integer identity exactly. For a terminating quotient, multiply it by the original divisor to recover the dividend. For a repeating quotient, inspect the remainder cycle and compare the recurring block with a manual step. Use examples with negative inputs and a zero dividend to verify signs independently of digit generation.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "decimal-to-fraction-calculator",
        "title": "Decimal to Fraction Calculator"
      },
      {
        "slug": "big-number-calculator",
        "title": "Big Number Calculator — Exact Integers"
      }
    ]
  },
  "permutation-combination-calculator": {
    "keywordThemes": [
      "permutation calculator",
      "permutations calculator",
      "ncr calculator",
      "combination calculator"
    ],
    "interpretation": "The calculation multiplies integer factors using BigInt. For combinations it uses the smaller of r and n−r and divides at each stage where the recurrence is exact. This avoids floating-point factorial overflow and preserves large integer digits. The output is exact for the entered counts, not a rounded scientific approximation. The upper bound of one thousand keeps browser work and output size controlled.",
    "scenarios": [
      "Unordered — 10C3 = 120.",
      "Ordered — 10P3 = 720.",
      "Symmetry — 10C3 equals 10C7."
    ],
    "mistakes": [
      "Ignoring whether positions make order matter.",
      "Using a without-replacement formula for repeated picks.",
      "Presenting a count as a probability without a total outcome space."
    ],
    "verification": "For small examples, list outcomes directly. Check nCr = nC(n−r), and verify nPr = nCr × r!. Boundary tests with r = 0 and r = n provide useful checks without enumerating large sets. If constraints prohibit some arrangements, those outcomes need a separate model rather than being silently included.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "probability-calculator",
        "title": "Probability Calculator"
      },
      {
        "slug": "hypergeometric-calculator",
        "title": "Hypergeometric Calculator"
      }
    ]
  },
  "logarithm-calculator": {
    "keywordThemes": [
      "calculate log calculator",
      "log base 2 calculator",
      "log calculator",
      "how to use log on the calculator",
      "log 2 calculator",
      "calculator log 2",
      "logarithmic calculator"
    ],
    "interpretation": "A valid base can lie between zero and one. Such an exponential decreases as its exponent increases, reversing the sign pattern familiar from base ten. A logarithm can be negative even though its input must be positive. For bases above one, numbers between zero and one have negative logs; for fractional bases, numbers above one have negative logs. This is a domain feature, not an error.",
    "scenarios": [
      "Unity — log base 2 of 1 equals 0.",
      "Power — log base 2 of 8 equals 3.",
      "Fractional base — log base 0.5 of 8 equals −3."
    ],
    "mistakes": [
      "Using base one despite its undefined inverse.",
      "Assuming a negative log means the argument was negative.",
      "Replacing ln with log base ten without a base conversion."
    ],
    "verification": "Raise the entered base to the main result and compare with x. Check x = 1 gives zero and x = base gives one. For ordinary examples, changing from base two to base ten through the change-of-base identity should match a direct calculation. Treat near-one bases and extreme values as numerical sensitivity cases rather than demanding exact display equality.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/6-3-logarithmic-functions",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator — Safe Arithmetic, Parentheses and Percent"
      }
    ]
  },
  "trip-fuel-cost-calculator": {
    "keywordThemes": [
      "calculate gas cost for trip",
      "gas calculator trip",
      "estimate gas costs for travel",
      "road trip gas calculator",
      "estimate gas cost travel",
      "gas estimator for road trip",
      "gas calculator for trip",
      "petrol distance calculator",
      "cost per mile calculator",
      "calculate cost in gas for a trip",
      "gas calculator road trip",
      "fuel expense calculator",
      "trip gas calculator",
      "estimate gas cost for trip",
      "estimate gas cost for travel",
      "gas calculator miles",
      "trip gas cost calculator",
      "gas cost calculator for trip",
      "calculate gas cost for road trip",
      "gas trip estimator",
      "calculate gas costs for trip"
    ],
    "interpretation": "Enter the full distance for one modeled trip, including return travel if that belongs in the trip definition. Trip count multiplies identical trips by a whole number. Do not enter round-trip distance and then multiply by two for the same journey. For routes with different distances or economy assumptions, calculate them separately rather than using the count field as if every route were identical.",
    "scenarios": [
      "Litre mode — 100 km at 8 L/100 km needs 8 L.",
      "US mode — 300 mi at 30 US mpg needs 10 US gal.",
      "Repeated trip — count two doubles distance and fuel cost."
    ],
    "mistakes": [
      "Matching US mpg with an imperial-gallon price.",
      "Counting the return distance twice.",
      "Treating advertised economy as a guarantee for every route."
    ],
    "verification": "Compute fuel quantity first and multiply by its matching price. Use the separate economy converter if your source value uses a different basis. Doubling distance or trip count should double cost; doubling km/L should halve fuel, while doubling L/100 km should double fuel. These checks validate units and arithmetic rather than predicting traffic or pump prices.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "fuel-economy-converter",
        "title": "Fuel Economy Converter"
      }
    ]
  },
  "big-number-calculator": {
    "keywordThemes": [
      "big number calculator",
      "big calculator",
      "calculator for very large numbers",
      "huge number calculator"
    ],
    "interpretation": "The selector determines whether the first integer is added to, reduced by, multiplied by or divided by the second. Subtraction and division depend on order. Addition and multiplication do not. The browser performs only the selected operation; typed expressions are not evaluated. A five-hundred-digit input bound controls work, but multiplication can legitimately produce a result with up to one thousand digits.",
    "scenarios": [
      "Large addition — 9007199254740993 + 1 stays exact.",
      "Negative division — −17/5 gives quotient −3, remainder −2.",
      "Zero product — any supported integer times zero gives zero."
    ],
    "mistakes": [
      "Parsing a long integer as Number before entering it.",
      "Expecting integer division to display a decimal quotient.",
      "Assuming truncation toward zero equals floor for negative values."
    ],
    "verification": "For addition, subtract the second operand from the result and recover the first. For multiplication with a nonzero factor, exact integer division by that factor should recover the other factor with zero remainder. For division, verify A = Bq+r and the remainder-magnitude bound. These integer identities remain valid regardless of the number of displayed digits.",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "sourceNote": "Method references reviewed on 5 October 2026. SolvePilot supplies the original examples and bounded browser implementation. Review by Mohammad Qasim covers editorial scope and arithmetic, not individual professional approval. The cited reference provides method or unit context rather than certifying the entered measurements or assumptions.",
    "relatedCalculators": [
      {
        "slug": "long-division-calculator",
        "title": "Long Division Calculator"
      },
      {
        "slug": "decimal-to-fraction-calculator",
        "title": "Decimal to Fraction Calculator"
      }
    ]
  }
};
