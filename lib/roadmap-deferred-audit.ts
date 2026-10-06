import type {Audit} from "./semrush-batch-one-audit";
export const roadmapDeferredAudit:Record<string,Audit> = {
  "five-number-summary-calculator": {
    "keywordThemes": [
      "five number summary calculator",
      "5 number summary calculator"
    ],
    "interpretation": "Read the result in the order minimum, Q1, median, Q3, maximum. The sequence must be nondecreasing. A wide central interval indicates spread in the middle half under the selected convention, while a large endpoint gap may reflect a tail. Neither pattern identifies a cause. To compare classes or batches fairly, use the same units, sampling rules and quartile method.",
    "scenarios": [
      "Odd count — 1,2,3,4,5 changes quartiles when the median convention changes.",
      "Even count — 1,2,3,4 has median 2.5 and half-medians 1.5 and 3.5.",
      "Constant data — 7,7,7 gives a zero IQR and all endpoints equal to 7."
    ],
    "mistakes": [
      "Removing repeated observations before sorting.",
      "Comparing half-medians with a spreadsheet percentile interpolation without noting the method.",
      "Treating a value beyond an IQR fence as automatically invalid."
    ],
    "verification": "Sort a short sample by hand, identify its central position and form the lower and upper halves under the chosen rule. Calculate the median of each half independently. Check that minimum ≤ Q1 ≤ median ≤ Q3 ≤ maximum. Add a constant to all values and verify that each endpoint shifts by that constant while IQR remains unchanged.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/introductory-statistics-2e/pages/2-3-measures-of-the-location-of-the-data",
    "relatedCalculators": [
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean Standard Deviation Calculator"
      },
      {
        "slug": "stem-and-leaf-plot-generator",
        "title": "Stem And Leaf Plot Generator"
      },
      {
        "slug": "z-score-calculator",
        "title": "Z Score Calculator"
      }
    ]
  },
  "average-time-calculator": {
    "keywordThemes": [
      "average time calculator"
    ],
    "interpretation": "Read the formatted duration together with its equivalent seconds. If weights were supplied, the weight total describes representation, not necessarily the number of pasted lines. A longer average does not establish slower individual workers without comparable tasks and sampling. To estimate a repeated workload, use an independently justified count and account for parallel tasks rather than multiplying the mean without considering overlap.",
    "scenarios": [
      "Equal records — 1:00 and 3:00 average to two minutes.",
      "Weighted groups — a larger group mean contributes more when its observation count is used as the weight.",
      "Fractional seconds — 0:00.5 and 0:01.5 average to one second."
    ],
    "mistakes": [
      "Entering decimal minutes as if they were seconds.",
      "Averaging group means without their group counts.",
      "Reading a duration as a time of day or automatically wrapping it at twenty-four hours."
    ],
    "verification": "Convert two short durations to seconds by hand and verify their arithmetic mean. Repeat both records twice; an equal-weight mean should remain the same. Multiply every weight by ten; the weighted mean should also remain unchanged. Check zero-weight behavior against the positive-weight row and verify that the separate total still represents the unweighted pasted records.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-5-units-outside-si",
    "relatedCalculators": [
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      },
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      }
    ]
  },
  "integer-exponent-calculator": {
    "keywordThemes": [
      "exponents calculator",
      "rewrite using a single positive exponent calculator"
    ],
    "interpretation": "The combined exponent identifies which rule was applied, and the positive-exponent form shows the reciprocal when needed. A simplified power is equivalent to the original supported operation only under its domain restrictions. The decimal may be rounded for readability, especially for very small or large values. A scientific-notation display is still a finite numeric estimate rather than an exact rational fraction.",
    "scenarios": [
      "Product — equal bases keep the base and add integer exponents.",
      "Quotient — a nonzero base keeps the base and subtracts exponents.",
      "Nested power — multiply the two integer exponents before evaluating the outer power."
    ],
    "mistakes": [
      "Adding exponents for a sum instead of a product.",
      "Dropping parentheses around a negative base.",
      "Cancelling powers with a zero denominator."
    ],
    "verification": "Use base two and small integer exponents to compare the original expression against repeated multiplication. Check that quotient mode with equal exponents returns one for nonzero bases. Compare a negative exponent with the reciprocal of its positive version. Change the sign of an exponent or base independently to see which affects magnitude and which affects sign.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/intermediate-algebra-2e/pages/5-2-properties-of-exponents-and-scientific-notation",
    "relatedCalculators": [
      {
        "slug": "nth-root-calculator",
        "title": "Nth Root Calculator"
      },
      {
        "slug": "big-number-calculator",
        "title": "Big Number Calculator"
      },
      {
        "slug": "logarithm-calculator",
        "title": "Logarithm Calculator"
      }
    ]
  },
  "stem-and-leaf-plot-generator": {
    "keywordThemes": [
      "stem and leaf plot generator"
    ],
    "interpretation": "The row length shows how many observations occupy that stem. The leaf digits retain their original order after numeric sorting, so the display can be reconstructed exactly within the selected decimal precision. A compact plot is useful for inspecting distribution shape; it does not replace a labeled graph when formal axis scaling, confidence intervals or multiple data groups are needed.",
    "scenarios": [
      "Whole numbers — 12,14,14 keeps two leaves equal to four.",
      "Decimal scale — 1.2 at tenths is reconstructed from 1 | 2.",
      "Precision conflict — 1.23 is rejected when the selected leaf unit is one tenth."
    ],
    "mistakes": [
      "Omitting the place-value key.",
      "Removing duplicate leaves as if they were duplicate errors.",
      "Rounding records silently to fit a convenient stem layout."
    ],
    "verification": "Count every printed leaf and compare with the observation count. Reconstruct the minimum, maximum and one repeated observation using the key. Sort a short sample independently and compare it with the rows. Changing from whole values to values divided by ten should preserve the digit layout when the leaf scale changes correspondingly.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/statistics/pages/2-1-stem-and-leaf-graphs-stemplots-line-graphs-and-bar-graphs",
    "relatedCalculators": [
      {
        "slug": "five-number-summary-calculator",
        "title": "Five Number Summary Calculator"
      },
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean Standard Deviation Calculator"
      },
      {
        "slug": "correlation-coefficient-calculator",
        "title": "Correlation Coefficient Calculator"
      }
    ]
  },
  "battery-runtime-calculator": {
    "keywordThemes": [
      "battery run time calculator"
    ],
    "interpretation": "Runtime is the duration for which the supplied usable load energy would support the supplied constant watts. It should be read with both percentage reductions, because omitting either can materially change the estimate. The current output provides a separate approximate battery-side demand; it does not establish that the bank, cables or converter can safely supply that demand.",
    "scenarios": [
      "Double load — the modeled hours halve with all energy inputs unchanged.",
      "Ah/Wh equivalence — 12 V × 100 Ah matches a supplied 1,200 Wh rating.",
      "Zero load — rejected because dividing by no demand gives no finite runtime."
    ],
    "mistakes": [
      "Treating Ah as Wh.",
      "Applying the same capacity reserve twice.",
      "Using VA as real watts without checking power factor."
    ],
    "verification": "Calculate nominal Wh by hand, apply each fraction once and divide by the watts. Convert the result to minutes by multiplying by sixty. Repeat in the alternative capacity mode and confirm the same result. Check a measured runtime against the actual capacity and load conditions instead of assuming every discrepancy is a software error.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.energy.gov.au/solar/get-know-solar-technology/batteries",
    "relatedCalculators": [
      {
        "slug": "watt-hour-calculator",
        "title": "Watt Hour Calculator"
      },
      {
        "slug": "electricity-usage-calculator",
        "title": "Electricity Usage Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      }
    ]
  },
  "dilution-ratio-calculator": {
    "keywordThemes": [
      "dilution calculator",
      "dilution ratio calculator"
    ],
    "interpretation": "The concentrate percentage is the volume share of the original concentrate in the modeled mixture. It is not a chemical purity or an active-ingredient percentage. A low concentrate fraction may still contain a strong active substance. The distinction between parts of diluent and parts of final mixture is often larger than the rounding error shown in the output.",
    "scenarios": [
      "Equivalent wording — one to nine diluent parts matches one in ten total parts.",
      "Different wording — one to ten diluent parts uses eleven total parts.",
      "Undiluted case — zero diluent parts or one total part returns no added diluent."
    ],
    "mistakes": [
      "Entering diluent amount as final mixture amount.",
      "Treating a parts fraction as an active-ingredient concentration.",
      "Assuming volumes are additive for every laboratory mixture."
    ],
    "verification": "Add the two displayed volumes and compare with the supplied final volume. Divide diluent by concentrate for the first convention, or divide final volume by concentrate for the second. Double the desired final volume and confirm that each component doubles. Check a familiar small ratio by counting its parts before using a less convenient ratio.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/chemistry-2e/pages/3-3-molarity",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "grams-to-ml-converter",
        "title": "Grams To Ml Converter"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "fixed-coupon-bond-calculator": {
    "keywordThemes": [
      "bond price calculator",
      "bond calculator",
      "bond value calculator",
      "calculator bond",
      "bond valuation calculator"
    ],
    "interpretation": "The price is the present value of the entered schedule under the supplied discount assumption. Price per one hundred face value makes schedules with different denominations easier to compare, but it does not make their credit risk identical. Premium or discount is measured against face. Neither that difference nor current yield establishes an investment recommendation or guaranteed outcome.",
    "scenarios": [
      "Par case — matching nominal coupon and yield gives face value.",
      "Higher yield — unchanged coupons discount to a lower price.",
      "Zero yield — price becomes undiscounted coupons plus face repayment."
    ],
    "mistakes": [
      "Entering effective annual yield as nominal without conversion.",
      "Applying the formula to a savings I Bond.",
      "Treating coupon-date price as a settlement-ready clean price."
    ],
    "verification": "Use an annual two-period bond and independently discount the first coupon, second coupon and final face repayment. Compare a zero-yield schedule with its undiscounted total. Check the par case with equal coupon and yield at the same frequency. Then increase yield while preserving cash flows and confirm that modeled price falls.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/what-are",
    "relatedCalculators": [
      {
        "slug": "npv-calculator",
        "title": "Npv Calculator"
      },
      {
        "slug": "time-value-of-money-calculator",
        "title": "Time Value Of Money Calculator"
      },
      {
        "slug": "effective-interest-rate-calculator",
        "title": "Effective Interest Rate Calculator"
      }
    ]
  },
  "cartesian-distance-calculator": {
    "keywordThemes": [
      "distance formula calculator",
      "distance between two points calculator",
      "distance between two points solver"
    ],
    "interpretation": "Spatial distance is a magnitude in the same linear units as the coordinate axes. Squared distance is in square units and is not another ordinary length. The signed coordinate differences show direction along each axis, while the magnitude removes that sign. A correct spatial result cannot establish a valid survey, physical clearance or route unless the source frame and measurements are appropriate.",
    "scenarios": [
      "Same point — identical coordinates produce zero distance.",
      "Vertical separation — equal x and y but differing z gives zero planar distance.",
      "Reversal — swapping the complete points preserves distances and reverses signed differences."
    ],
    "mistakes": [
      "Mixing axis units or coordinate frames.",
      "Using latitude and longitude as Cartesian lengths.",
      "Reading straight-line separation as the length of a traveled route."
    ],
    "verification": "Use the 3-4-12 example and independently square each difference to obtain 169 and its square root 13. Verify the XY projection using the 3-4-5 triangle. Swap both complete points and confirm unchanged magnitudes. Translate both points by the same small offset and check that the result is preserved.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/calculus-volume-3/pages/2-2-vectors-in-three-dimensions",
    "relatedCalculators": [
      {
        "slug": "midpoint-calculator",
        "title": "Midpoint Calculator"
      },
      {
        "slug": "slope-calculator",
        "title": "Slope Calculator"
      },
      {
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      }
    ]
  },
  "bpm-calculator": {
    "keywordThemes": [
      "bpm calculator"
    ],
    "interpretation": "The rate summarizes the supplied interval count over its supplied elapsed duration. Read it with the count convention rather than treating it as an automatically measured tempo. Interval seconds and milliseconds are reciprocals of rate under that observation. A rate can be correct arithmetically while the counted pulse level or timing protocol is inappropriate for the intended question.",
    "scenarios": [
      "Interval timing — twelve intervals in six seconds gives 120 BPM.",
      "Endpoint timing — thirteen endpoints in six seconds gives the same twelve-interval result.",
      "Time sensitivity — twelve intervals in twelve seconds gives 60 BPM."
    ],
    "mistakes": [
      "Counting endpoints as if they were complete gaps.",
      "Mixing half-time and double-time music conventions.",
      "Reading an average timed count as a rhythm diagnosis."
    ],
    "verification": "Multiply BPM by elapsed seconds and divide by sixty to recover the interval count. Compare interval mode with one additional endpoint in endpoint mode; the two rates should match. Check a metronome interval you already know, using the same pulse level, and verify that BPM times milliseconds per beat is approximately sixty thousand.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-5-units-outside-si",
    "relatedCalculators": [
      {
        "slug": "average-time-calculator",
        "title": "Average Time Calculator"
      },
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      },
      {
        "slug": "timecode-calculator",
        "title": "Timecode Calculator"
      }
    ]
  },
  "food-protein-calculator": {
    "keywordThemes": [
      "protein calculator in food",
      "food protein calculator",
      "protein counter",
      "protein calculator online"
    ],
    "interpretation": "The total describes the food records entered, not an automatically complete diet. Per-row results show how much each supplied portion contributes. The target percentage is a comparison to the supplied reference, and a positive difference means the records exceed that reference. It is not a finding that an excess or shortfall is medically significant or that a target is appropriate.",
    "scenarios": [
      "Larger portion — doubling consumed grams doubles that row contribution.",
      "Different label bases — per-serving and per-100-g records can be combined correctly.",
      "No target — blank optional target leaves the food total available without a recommendation."
    ],
    "mistakes": [
      "Combining raw label values with cooked portion weights.",
      "Treating a household volume as grams without a mass conversion.",
      "Interpreting one meal total as a full daily nutrition record."
    ],
    "verification": "For each row, divide consumed mass by the label-basis mass to find its portion multiplier, then multiply declared protein by that factor. Sum the independently computed contributions and compare with the displayed total. A consumed portion equal to the basis must return the declared protein. Doubling only one portion should change only that contribution.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
    "relatedCalculators": [
      {
        "slug": "macro-calculator",
        "title": "Macro Calculator"
      },
      {
        "slug": "net-carbohydrate-calculator",
        "title": "Net Carbohydrate Calculator"
      },
      {
        "slug": "grams-to-ml-converter",
        "title": "Grams To Ml Converter"
      }
    ]
  },
  "force-mass-acceleration-calculator": {
    "keywordThemes": [
      "physics calculator",
      "force mass acceleration calculator",
      "newtons second law calculator"
    ],
    "interpretation": "The solved value appears first, followed by the reconstructed force, mass and acceleration. Read the units as well as the number: a 30 N resultant is not an energy or a momentum. Reconstructing F = m a from the displayed values should reproduce the force within rounding. If the inferred mass is positive but unexpectedly large, examine whether force and acceleration refer to the same system boundary and measurement interval.",
    "scenarios": [
      "Zero resultant — any positive mass has zero acceleration under the stated model.",
      "Reverse axis — reversing force and acceleration signs leaves inferred mass unchanged.",
      "Double the load — the same force produces half the acceleration when mass doubles."
    ],
    "mistakes": [
      "Entering weight in newtons into the kilogram field.",
      "Ignoring friction while calling an applied force the net force.",
      "Interpreting negative acceleration as slowing down without checking velocity."
    ],
    "verification": "Use the 12 kg and 2.5 m/s² example to check the product 30 N, then invert both ways. Set net force to zero in Acceleration mode and confirm zero. Reverse the signs of force and acceleration together and confirm that mass is unchanged. Dimensional analysis gives kg × m/s² = N. If any of these checks fails, review the unit conversion and selected unknown.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/4-3-newtons-second-law-of-motion-concept-of-a-system",
    "relatedCalculators": [
      {
        "slug": "momentum-impulse-calculator",
        "title": "Momentum Impulse Calculator"
      },
      {
        "slug": "kinetic-energy-calculator",
        "title": "Kinetic Energy Calculator"
      },
      {
        "slug": "gravitational-potential-energy-calculator",
        "title": "Gravitational Potential Energy Calculator"
      }
    ]
  },
  "kinetic-energy-calculator": {
    "keywordThemes": [
      "kinetic energy calculator",
      "calculate kinetic energy",
      "kinetic energy mass speed calculator"
    ],
    "interpretation": "The solved quantity is followed by the compatible mass, speed and kinetic energy values. Treat these as one mathematical state in the supplied frame. An energy of 18 J does not specify how that energy will be transferred, how quickly transfer occurs or what effect it has on another object. Check whether your question asks for a state energy or a change between states before combining this result with work or power.",
    "scenarios": [
      "Equal speeds — doubling mass doubles the energy.",
      "Equal masses — doubling speed quadruples the energy.",
      "Rest in the frame — zero speed returns zero translational energy."
    ],
    "mistakes": [
      "Using kilometres per hour in a metres-per-second field.",
      "Adding direction signs to a scalar energy.",
      "Treating translation as the total energy of a rotating body."
    ],
    "verification": "Calculate ½ × 4 × 3² independently and confirm 18 J. Invert the same pair in Speed and Mass modes. Then double speed and confirm a factor of four while holding mass fixed. The units kg·m²/s² must simplify to joules. A zero-speed check should return zero energy without an invalid numeric result.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem",
    "relatedCalculators": [
      {
        "slug": "work-energy-calculator",
        "title": "Work Energy Calculator"
      },
      {
        "slug": "momentum-impulse-calculator",
        "title": "Momentum Impulse Calculator"
      },
      {
        "slug": "force-mass-acceleration-calculator",
        "title": "Force Mass Acceleration Calculator"
      }
    ]
  },
  "momentum-impulse-calculator": {
    "keywordThemes": [
      "momentum calculator",
      "impulse calculator",
      "average force from impulse calculator"
    ],
    "interpretation": "Read initial and final momentum together before interpreting the impulse. The impulse sign identifies the direction of momentum transfer along the axis. The average force has the same sign because elapsed time is positive. A small final momentum does not mean a small impulse if the initial momentum was large or opposite in direction. Use the displayed endpoint values to check subtraction explicitly.",
    "scenarios": [
      "No change — matching velocities give zero impulse and average force.",
      "Opposite endpoints — reversing motion preserves the full signed velocity difference.",
      "Longer interval — doubling time halves average force at the same impulse."
    ],
    "mistakes": [
      "Subtracting speed magnitudes when direction reverses.",
      "Calling average force the maximum impact force.",
      "Using milliseconds without converting to seconds."
    ],
    "verification": "For mass 2 kg, independently multiply initial velocity 3 by 2 and final velocity −1 by 2. Subtract +6 from −2 to obtain −8 N·s, then divide by 0.5 s to obtain −16 N. Check that equal endpoints return zero. Reverse both velocity signs and confirm every signed output reverses while mass and time remain fixed.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force",
    "relatedCalculators": [
      {
        "slug": "force-mass-acceleration-calculator",
        "title": "Force Mass Acceleration Calculator"
      },
      {
        "slug": "kinetic-energy-calculator",
        "title": "Kinetic Energy Calculator"
      },
      {
        "slug": "work-energy-calculator",
        "title": "Work Energy Calculator"
      }
    ]
  },
  "work-energy-calculator": {
    "keywordThemes": [
      "work calculator physics",
      "work energy calculator",
      "average power calculator"
    ],
    "interpretation": "The output reports signed work, average power and the force component along displacement. Use the component result to understand why an angled force contributes less than an aligned force of the same magnitude. If comparing with a change in kinetic energy, make sure all force contributions and the same system boundary are represented. A time input affects average power but cannot change the computed work.",
    "scenarios": [
      "Aligned pull — zero angle gives the full Fd product.",
      "Perpendicular force — a right angle contributes zero work.",
      "Opposing force — 180 degrees produces negative work."
    ],
    "mistakes": [
      "Using a diagram angle that is not between force and displacement.",
      "Equating one force’s work with net work automatically.",
      "Treating average mechanical power as measured electrical consumption."
    ],
    "verification": "Compute the example as 50 × 4 × 0.5 = 100 J and divide by 5 to obtain 20 W. Check zero and 180 degrees as limiting cases. Double elapsed time while keeping force, distance and angle fixed: work stays the same and average power halves. Units N·m must equal joules, and J/s must equal watts.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem",
    "relatedCalculators": [
      {
        "slug": "kinetic-energy-calculator",
        "title": "Kinetic Energy Calculator"
      },
      {
        "slug": "hookes-law-calculator",
        "title": "Hookes Law Calculator"
      },
      {
        "slug": "gravitational-potential-energy-calculator",
        "title": "Gravitational Potential Energy Calculator"
      }
    ]
  },
  "gravitational-potential-energy-calculator": {
    "keywordThemes": [
      "gravitational potential energy calculator",
      "potential energy change calculator",
      "mgh calculator"
    ],
    "interpretation": "The signed potential change and gravity work should sum to zero within displayed rounding. The weight result depends on the supplied g, while the height reference change determines the energy sign. If comparing a motor’s electrical use with the lift, account for conversion efficiency and changes in motion separately. A gravitational potential result alone cannot determine a motor rating or a safety margin.",
    "scenarios": [
      "Lift — positive height change increases potential energy.",
      "Lower — negative height change makes gravity’s work positive.",
      "Same height — horizontal displacement contributes no constant-g potential change."
    ],
    "mistakes": [
      "Entering final elevation without subtracting initial elevation.",
      "Confusing kilograms with newtons.",
      "Using constant surface gravity for an orbital-distance problem."
    ],
    "verification": "Independently multiply 5 × 9.81 × 2 and confirm 98.1 J. Negate the height change and check both energy signs reverse. Set the height change to zero and confirm both energy terms vanish while weight remains 49.05 N. Units kg × m/s² × m simplify to joules.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics/pages/7-3-gravitational-potential-energy",
    "relatedCalculators": [
      {
        "slug": "work-energy-calculator",
        "title": "Work Energy Calculator"
      },
      {
        "slug": "kinetic-energy-calculator",
        "title": "Kinetic Energy Calculator"
      },
      {
        "slug": "force-mass-acceleration-calculator",
        "title": "Force Mass Acceleration Calculator"
      }
    ]
  },
  "hookes-law-calculator": {
    "keywordThemes": [
      "hookes law calculator",
      "spring force calculator",
      "elastic potential energy calculator"
    ],
    "interpretation": "Read the solved unknown with the restoring-force sign convention. The energy is nonnegative even when force or displacement is negative. Reconstruct −kx to verify force and compare ½kx² with the energy. If a real measured spring disagrees systematically, inspect natural length, preload and the range where the linear model is valid rather than changing signs merely to force agreement.",
    "scenarios": [
      "Extension — positive displacement creates negative restoring force.",
      "Compression — reversing displacement reverses force but preserves energy.",
      "Stiffer spring — doubling k doubles both force magnitude and storage at fixed displacement."
    ],
    "mistakes": [
      "Entering the external holding force with the restoring-force sign.",
      "Using total spring length instead of extension.",
      "Multiplying final force by full displacement without the one-half factor."
    ],
    "verification": "For k = 200 N/m and x = 0.05 m, compute −kx = −10 N and ½kx² = 0.25 J. Reverse displacement and confirm force reverses while energy stays 0.25 J. Invert force and displacement to recover the same positive k. Units (N/m) × m² simplify to N·m, or joules.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/16-1-hookes-law-stress-and-strain-revisited",
    "relatedCalculators": [
      {
        "slug": "work-energy-calculator",
        "title": "Work Energy Calculator"
      },
      {
        "slug": "kinetic-energy-calculator",
        "title": "Kinetic Energy Calculator"
      },
      {
        "slug": "force-mass-acceleration-calculator",
        "title": "Force Mass Acceleration Calculator"
      }
    ]
  },
  "ideal-gas-law-calculator": {
    "keywordThemes": [
      "ideal gas law calculator",
      "pv nrt calculator",
      "gas pressure volume temperature calculator"
    ],
    "interpretation": "The selected unknown appears first and all four state variables appear below it. These values form one ideal-gas state in the supplied SI units. They do not establish a pressure-vessel rating, a safe heating procedure or a material compatibility conclusion. If a measured pressure differs, review temperature scale, pressure reference, vessel volume and whether a real-gas correction is required.",
    "scenarios": [
      "Fixed vessel — doubling kelvin temperature doubles pressure at fixed moles.",
      "Expansion — doubling volume halves pressure at fixed temperature and moles.",
      "Inverse check — each solve mode reconstructs the same state from three known variables."
    ],
    "mistakes": [
      "Using Celsius directly in an absolute-temperature equation.",
      "Entering litres into a cubic-metre field.",
      "Substituting gauge pressure for absolute pressure."
    ],
    "verification": "Calculate 1 × 8.31446261815324 × 300 / 0.025 independently and compare with the displayed pressure. Use that pressure to solve volume and recover 0.025 m³. Verify that PV and nRT are equal within rounding. Dimensional analysis gives Pa·m³ = J, matching mol × J/(mol·K) × K.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/13-3-the-ideal-gas-law",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "molecular-weight-calculator",
        "title": "Molecular Weight Calculator"
      },
      {
        "slug": "density-mass-volume-calculator",
        "title": "Density Mass Volume Calculator"
      }
    ]
  },
  "resting-energy-calculator": {
    "keywordThemes": [
      "bmr calculation formula",
      "basic metabolic rate calculator",
      "mifflin st jeor calculator",
      "resting energy calculator"
    ],
    "interpretation": "The headline is a predicted resting expenditure in kcal/day. The kilojoule conversion uses 4.184 kJ per kilocalorie and describes the same modeled energy, not another estimate. No activity multiplier is applied. A difference from a wearable or diet app can arise because another product uses a different equation or total-expenditure assumptions. Compare method, units and input record before interpreting numerical differences.",
    "scenarios": [
      "Same adult record — changing only the coefficient changes the constant term by 166 kcal/day.",
      "Height change — one additional centimetre adds 6.25 kcal/day within this equation.",
      "No activity factor — the output remains a resting estimate rather than an exercise-day target."
    ],
    "mistakes": [
      "Calling the resting result a complete daily expenditure.",
      "Entering metres or pounds without converting the printed units.",
      "Treating decimal display precision as individualized metabolic accuracy."
    ],
    "verification": "Recalculate the 70 kg, 175 cm and age-35 example term by term and verify 1,623.75 for the male coefficient. Change only the coefficient and confirm a 166 kcal/day decrease. Multiply either result by 4.184 to check the kilojoule display. Preserve the equation and population context when comparing with a professionally measured resting metabolic rate.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/2305711/",
    "relatedCalculators": [
      {
        "slug": "macro-calculator",
        "title": "Macro Calculator"
      },
      {
        "slug": "food-protein-calculator",
        "title": "Food Protein Calculator"
      },
      {
        "slug": "calories-burned-calculator",
        "title": "Calories Burned Calculator"
      }
    ]
  },
  "rockport-vo2-max-calculator": {
    "keywordThemes": [
      "estimate vo2 max calculator",
      "vo2 max calculator",
      "rockport vo2 max calculator",
      "one mile walk vo2 calculator"
    ],
    "interpretation": "The headline is a predicted relative VO₂ max, not a clinical test result or a fitness grade. A faster walk or a lower finish pulse changes the equation prediction while other terms remain fixed, but that mathematical relationship should not be used to manipulate a recorded test. The absolute estimate is a mass conversion of the same prediction. Compare records only when protocol, measurements and method are consistent.",
    "scenarios": [
      "Recorded time — adding one minute reduces the prediction by 3.2649 mL/kg/min with other inputs fixed.",
      "Recorded finish pulse — adding one beat per minute reduces the prediction by 0.1565.",
      "Unit conversion — the relative estimate times kilograms divided by 1,000 gives litres per minute."
    ],
    "mistakes": [
      "Using a running or non-mile distance record.",
      "Typing minute:second notation as an ordinary decimal.",
      "Entering resting or age-predicted maximum heart rate instead of finish pulse."
    ],
    "verification": "Convert 70 kg to pounds, substitute every term of the published equation and compare with the worked example. Change only time by one minute to check the 3.2649 difference, then only pulse by one beat to check 0.1565. Review the completed-test protocol and original population limits before interpreting a prediction. A laboratory assessment is a different measurement method.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/3600239/",
    "relatedCalculators": [
      {
        "slug": "bpm-calculator",
        "title": "Bpm Calculator"
      },
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "resting-energy-calculator",
        "title": "Resting Energy Calculator"
      }
    ]
  },
  "rmd-uniform-lifetime-calculator": {
    "keywordThemes": [
      "rmd calculator",
      "required minimum distribution calculator",
      "2026 rmd calculator",
      "uniform lifetime table calculator"
    ],
    "interpretation": "The displayed denominator is the core audit value. Divide the eligible prior-year balance by it and compare with the custodian’s record. The remaining amount is a simple subtraction using the withdrawals you supply, not proof that those transactions qualify. The percentage is 100 divided by the denominator. It is a withdrawal fraction of that prior-year balance, not an investment return or tax rate.",
    "scenarios": [
      "Age 73 — $265,000 divided by 26.5 equals $10,000.",
      "Age 80 — $202,000 divided by 20.2 equals $10,000.",
      "Withdrawals above the modeled amount — remaining is floored at zero without a future-year credit."
    ],
    "mistakes": [
      "Using a current balance instead of the relevant prior December 31 balance.",
      "Applying Table III to an inherited account or Table II spouse situation.",
      "Treating the subtraction as verification that every withdrawal qualifies."
    ],
    "verification": "Find the age row directly in the current IRS Uniform Lifetime Table and divide the prior-year statement balance independently. Verify the age-73 and age-80 examples both produce $10,000. Compare already withdrawn amounts with the custodian’s qualifying record. Retain the table year, age and balance date with the result; those details matter as much as the division.",
    "sourceNote": "Method reference checked for this worksheet. The calculation and examples are independently implemented; read the specific scope and units above.",
    "sourceUrl": "https://www.irs.gov/publications/p590b",
    "relatedCalculators": [
      {
        "slug": "savings-withdrawal-runway-calculator",
        "title": "Savings Withdrawal Runway Calculator"
      },
      {
        "slug": "time-value-of-money-calculator",
        "title": "Time Value Of Money Calculator"
      },
      {
        "slug": "compound-interest-calculator",
        "title": "Compound Interest Calculator"
      }
    ]
  }
};
