import type {Tool} from "./tools";
export const roadmap369Tools:Tool[] = [
  {
    "slug": "age-difference-calculator",
    "title": "Age Difference Calculator",
    "shortTitle": "Age Difference",
    "category": "Everyday",
    "description": "Compare two birth dates in calendar years, months and days, with an exact day count and explicit end-of-month handling.",
    "intro": "Compare two birth dates in calendar years, months and days, with an exact day count and explicit end-of-month handling. Enter actual dates in year-month-day order using the date controls. The result compares the dates directly; it does not subtract rounded ages reported on separate days. Two people described as twenty and twenty-two can be almost one year or almost three years apart depending on their birthdays. Full dates resolve that ambiguity without needing a current-date assumption. The earlier birth date identifies the older person.",
    "formula": "Order the two dates, count completed calendar months using an end-of-month clamp, then count remaining UTC calendar days. Exact days = later date minus earlier date.",
    "example": "Birth dates 2000-01-15 and 2002-03-20 are 2 years, 2 months and 5 days apart, or 795 exact days. The day total includes the leap day in 2000. Swapping the two input dates preserves the gap and changes neither the earlier birthday nor the total.",
    "howTo": [
      "Choose the correct input basis for age difference calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review calendar components before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review using the comparison before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Two birthdays, one gap",
        "text": "Enter actual dates in year-month-day order using the date controls. The result compares the dates directly; it does not subtract rounded ages reported on separate days. Two people described as twenty and twenty-two can be almost one year or almost three years apart depending on their birthdays. Full dates resolve that ambiguity without needing a current-date assumption. The earlier birth date identifies the older person."
      },
      {
        "title": "Calendar components",
        "text": "Calendar years and months are uneven units. This worksheet first counts complete months and then decomposes that number into years and remaining months. When the original day does not exist in a destination month, it uses that month’s last day. January 31 to February 28 in a non-leap year therefore counts as one completed month. Other legal or administrative anniversary conventions can differ."
      },
      {
        "title": "Exact days and leap years",
        "text": "The exact-day result treats both dates as midnight UTC. This removes daylight-saving changes from the date-only calculation. A leap day counts when it lies inside the interval. Dividing the day total by 365 gives an approximate year quantity, not the same calendar decomposition. The browser validates real Gregorian dates and rejects impossible dates such as February 30 instead of silently rolling them into March."
      },
      {
        "title": "Same date and reversed order",
        "text": "Identical birth dates give a zero gap. Reversed inputs give the same nonnegative gap, because this page measures separation rather than a signed countdown. It displays the earlier date so you can see which person is older. Birth times, time zones and historical calendar transitions are outside the model. People born on the same date can still differ in age by hours that are deliberately absent here."
      },
      {
        "title": "Using the comparison",
        "text": "Keep the original two dates with a copied result. A calendar gap and an exact day gap answer related but different questions, so label which one you use. For a family timeline, calendar components are often easier to read; for an interval worksheet, exact days are easier to reproduce. This calculation does not determine eligibility, consent rules, school placement or a relationship recommendation. Dates remain in the calculator on your device."
      }
    ],
    "limitations": "Keep the original two dates with a copied result. A calendar gap and an exact day gap answer related but different questions, so label which one you use. For a family timeline, calendar components are often easier to read; for an interval worksheet, exact days are easier to reproduce. This calculation does not determine eligibility, consent rules, school placement or a relationship recommendation. Dates remain in the calculator on your device.",
    "faqs": [
      {
        "question": "Does the age gap change every birthday?",
        "answer": "The exact separation between two birth dates is fixed. Subtracting two rounded whole-year ages can appear to change around birthdays; this worksheet avoids that by comparing the full dates."
      },
      {
        "question": "What happens at the end of February?",
        "answer": "Completed months clamp an unavailable anniversary day to the last day of the destination month. That convention is explicit and may differ from an organization’s administrative rule."
      },
      {
        "question": "Can I enter future dates?",
        "answer": "Real dates in years 0001–9999 are accepted as date differences. The page does not verify that either date belongs to a person or is an already occurred birth."
      },
      {
        "question": "Are leap days included?",
        "answer": "Yes, the exact day count includes February 29 whenever it falls in the interval. Calendar months still use the stated end-of-month convention."
      },
      {
        "question": "Do birth times affect the result?",
        "answer": "They are not included. Inputs contain calendar dates only, so the result cannot distinguish two people born hours apart on the same date."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "age calculator difference",
      "age difference calculator",
      "age gap calculator"
    ]
  },
  {
    "slug": "parallel-resistor-calculator",
    "title": "Parallel Resistor Calculator",
    "shortTitle": "Parallel Resistor",
    "category": "Education",
    "description": "Calculate equivalent resistance for up to 100 parallel branches, with optional voltage-based branch current and power checks.",
    "intro": "Calculate equivalent resistance for up to 100 parallel branches, with optional voltage-based branch current and power checks. Write resistance values separated by commas, spaces or semicolons. All values use ohms. Convert 2.2 kΩ to 2200 before entering it; unit suffixes and expressions are not parsed. The list accepts one through one hundred positive finite values, each no greater than 10¹² Ω. Every listed value represents a complete branch directly across the same pair of circuit nodes.",
    "formula": "1/Rₑq = Σ(1/Rᵢ). With supplied voltage V: branch current Iᵢ = V/Rᵢ, branch power Pᵢ = V²/Rᵢ, total current = V/Rₑq.",
    "example": "For 100 Ω and 200 Ω in parallel, conductance is 0.01 + 0.005 = 0.015 siemens, so equivalent resistance is 66.666667 Ω. At 12 V, branch currents are 0.12 A and 0.06 A. Their 0.18 A sum also equals 12/66.666667.",
    "howTo": [
      "Choose the correct input basis for parallel resistor calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review conductance adds before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review component reality before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Enter separate branches",
        "text": "Write resistance values separated by commas, spaces or semicolons. All values use ohms. Convert 2.2 kΩ to 2200 before entering it; unit suffixes and expressions are not parsed. The list accepts one through one hundred positive finite values, each no greater than 10¹² Ω. Every listed value represents a complete branch directly across the same pair of circuit nodes."
      },
      {
        "title": "Conductance adds",
        "text": "Parallel branches share voltage, so their currents add. Conductance is the reciprocal of resistance, making the reciprocal-sum formula appropriate. For two branches, the familiar product-over-sum shortcut gives the same answer. This implementation scales the reciprocal sum by the smallest branch value to avoid avoidable reciprocal overflow. The equivalent resistance must be no greater than the smallest individual resistance."
      },
      {
        "title": "Optional voltage",
        "text": "Leave voltage blank when you only want resistance. Supplying a nonnegative voltage enables ideal branch current and power arithmetic. These extra rows depend on the supplied voltage remaining across every branch. A real source can sag under load, and a component’s actual resistance can change with temperature. Use measured values or specified conditions when a numerical comparison matters."
      },
      {
        "title": "Series and mixed networks",
        "text": "Adding resistance values directly describes series elements, not parallel branches. For a mixed network, simplify a genuine series or parallel subgroup first, then enter its equivalent only if the resulting topology really matches this page. The tool does not inspect a diagram, choose nodes or solve arbitrary bridge circuits. Misidentifying the wiring can produce a mathematically correct number for the wrong circuit."
      },
      {
        "title": "Component reality",
        "text": "Ideal resistance and calculated power do not select a resistor rating or approve a circuit. Tolerance, ambient temperature, voltage limits and derating influence the physical parts. A zero-ohm branch would short the ideal network and is rejected rather than represented as an ordinary resistor. Negative resistance and complex AC impedance are outside scope. Extremely small displayed quantities use scientific notation to preserve a nonzero result."
      }
    ],
    "limitations": "Ideal resistance and calculated power do not select a resistor rating or approve a circuit. Tolerance, ambient temperature, voltage limits and derating influence the physical parts. A zero-ohm branch would short the ideal network and is rejected rather than represented as an ordinary resistor. Negative resistance and complex AC impedance are outside scope. Extremely small displayed quantities use scientific notation to preserve a nonzero result. Strictly positive numeric inputs must be at least 0.000000000001; values below that supported floor are rejected.",
    "faqs": [
      {
        "question": "Can I enter kilohms?",
        "answer": "Convert to ohms first. A 4.7 kΩ resistor is entered as 4700, while 4700Ω text is rejected because the list expects numeric values."
      },
      {
        "question": "Why is the answer smaller than each resistor?",
        "answer": "Each added positive parallel branch provides another current path. The sum of conductances increases, so its reciprocal resistance decreases."
      },
      {
        "question": "Does a blank voltage mean zero volts?",
        "answer": "No. Blank voltage omits current and power; entering zero explicitly computes zero current and power."
      },
      {
        "question": "Can it solve capacitors or AC impedance?",
        "answer": "No. This worksheet uses positive real ideal resistor values, not frequency-dependent complex impedances."
      },
      {
        "question": "Can I use one branch?",
        "answer": "Yes. Equivalent resistance equals that one branch value, which is a useful basic check."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "parallel resistor calculator"
    ]
  },
  {
    "slug": "scrap-silver-calculator",
    "title": "Scrap Silver Calculator",
    "shortTitle": "Scrap Silver",
    "category": "Finance",
    "description": "Estimate fine-silver mass, metal value and a buyer payout from supplied weight, purity and price; no live silver quote is loaded.",
    "intro": "Estimate fine-silver mass, metal value and a buyer payout from supplied weight, purity and price; no live silver quote is loaded. Weigh the silver-bearing material and select grams or troy ounces. A hallmark such as 925 expresses 92.5% purity; enter 92.5 in the percentage field. A stamped fineness is not an independent assay, and plated objects cannot be valued by assuming their entire weight is solid silver. Exclude stones, handles, fillers and other non-silver material from the mass basis before using the formula.",
    "formula": "Fine grams = gross grams × purity/100. Fine troy ounces = fine grams/31.1034768. Metal value = fine troy ounces × entered quote. Payout = metal value × buyer percentage/100.",
    "example": "For 100 g at 92.5% purity, fine silver mass is 92.5 g, approximately 2.973944 troy ounces. At an illustrative quote of 30 per troy ounce, metal value is about 89.218319. A 90% buyer payout gives about 80.296487 in the same supplied currency.",
    "howTo": [
      "Choose the correct input basis for scrap silver calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review troy weight convention before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review interpreting the estimate before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Gross weight and purity",
        "text": "Weigh the silver-bearing material and select grams or troy ounces. A hallmark such as 925 expresses 92.5% purity; enter 92.5 in the percentage field. A stamped fineness is not an independent assay, and plated objects cannot be valued by assuming their entire weight is solid silver. Exclude stones, handles, fillers and other non-silver material from the mass basis before using the formula."
      },
      {
        "title": "Troy weight convention",
        "text": "Precious-metal quotations commonly use troy ounces. One troy ounce is 31.1034768 grams; an everyday avoirdupois ounce is 28.349523125 grams and is not interchangeable. This page’s ounce option always means troy mass. For a kitchen scale displaying ordinary ounces, convert through grams first. Mixing the two ounce systems produces an error before any price or purity adjustment is applied."
      },
      {
        "title": "Supply a current quote",
        "text": "The example quote is arithmetic data, not a current market price. Enter a quote with its currency, time and troy-ounce basis from the source you intend to use. The output does not load a feed, convert currencies or claim that spot price is a guaranteed offer. If you change only the quote, the fine mass remains fixed and modeled value changes proportionally."
      },
      {
        "title": "Buyer payout assumption",
        "text": "The payout percentage is a single supplied fraction of modeled metal value. Refining costs, minimum fees, assay deductions, freight and transaction terms can produce a different actual settlement. If a buyer offers a flat total rather than a percentage, compare that offer separately. The estimated payout is neither an appraisal nor a promise to buy the material at the displayed amount."
      },
      {
        "title": "Interpreting the estimate",
        "text": "Fine mass isolates the modeled amount of silver, while metal value prices that mass before the payout adjustment. Jewelry workmanship, collectible value and historical rarity are not included. A low scrap estimate does not establish that melting an object is sensible. Keep weight, assumed purity, quote and payout basis with any saved calculation so the same estimate can be reproduced when prices or buyer terms change."
      }
    ],
    "limitations": "Fine mass isolates the modeled amount of silver, while metal value prices that mass before the payout adjustment. Jewelry workmanship, collectible value and historical rarity are not included. A low scrap estimate does not establish that melting an object is sensible. Keep weight, assumed purity, quote and payout basis with any saved calculation so the same estimate can be reproduced when prices or buyer terms change.",
    "faqs": [
      {
        "question": "Is the silver price live?",
        "answer": "No. Replace the illustrative quote with your own price per troy ounce and keep its currency and time basis."
      },
      {
        "question": "What does 925 mean?",
        "answer": "As a fineness assumption it corresponds to 92.5% silver. A hallmark alone does not verify the current item’s composition."
      },
      {
        "question": "Can I value silver-plated cutlery?",
        "answer": "Not by treating its full weight as solid silver. This calculator needs independently established fine-silver mass assumptions."
      },
      {
        "question": "Are ordinary ounces accepted?",
        "answer": "The ounce option is troy only. Convert ordinary mass ounces to grams using the separate mass converter first."
      },
      {
        "question": "Does payout include all buyer fees?",
        "answer": "Only to the extent your supplied percentage represents them. Itemized fees, taxes and settlement terms are not loaded."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "scrap silver calculator",
      "silver calculator"
    ]
  },
  {
    "slug": "z-score-calculator",
    "title": "Z-Score Calculator",
    "shortTitle": "Z-Score",
    "category": "Education",
    "description": "Standardize a numeric observation using an independently supplied mean and positive standard deviation, with signed distance interpretation.",
    "intro": "Standardize a numeric observation using an independently supplied mean and positive standard deviation, with signed distance interpretation. Choose the reference mean and standard deviation before standardizing the observation. They must describe the same variable, units and relevant reference group. The page does not compute these statistics from raw observations or decide which population is suitable. Mixing a mean from one group with a deviation from another can yield a number whose interpretation is not supported by either dataset.",
    "formula": "z = (x − μ)/σ, where x is the observed value, μ is the reference mean and σ is the supplied positive standard deviation.",
    "example": "For x = 85, reference mean 70 and standard deviation 10, the z-score is (85−70)/10 = 1.5. The observation is 1.5 reference standard deviations above the mean. For x = 55 with the same reference, the result is −1.5, equally far below the mean.",
    "howTo": [
      "Choose the correct input basis for z-score calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review sign and magnitude before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review scaling and precision before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Reference population",
        "text": "Choose the reference mean and standard deviation before standardizing the observation. They must describe the same variable, units and relevant reference group. The page does not compute these statistics from raw observations or decide which population is suitable. Mixing a mean from one group with a deviation from another can yield a number whose interpretation is not supported by either dataset."
      },
      {
        "title": "Sign and magnitude",
        "text": "A positive result means the observation exceeds the supplied mean; a negative result means it is below. Zero means it equals the mean. The absolute magnitude measures distance in standard-deviation units. Two measurements can have the same z-score while using entirely different physical scales. Standardizing preserves relative position under the selected reference rather than proving that the underlying measurements are equivalent."
      },
      {
        "title": "Normality is separate",
        "text": "A z-score calculation itself does not require a normal distribution. Normal-table percentiles and tail probabilities do require a justified model and a specified direction or test. This page reports standardized distance only. It does not turn 1.96 into a significance claim, infer a confidence level, classify an outlier or diagnose a condition. Such conclusions need additional assumptions and a suitable analysis."
      },
      {
        "title": "Positive deviation",
        "text": "Standard deviation must be greater than zero. A zero reference deviation makes division undefined, even if the observation equals the mean. Enter the actual deviation rather than variance, standard error or an arbitrary scale. For example, variance 100 has standard deviation 10; entering 100 in the denominator would understate standardized distance by a factor of ten."
      },
      {
        "title": "Scaling and precision",
        "text": "All three numeric inputs must be finite and within the displayed implementation’s ±10¹² magnitude ceiling, with a strictly positive deviation. Large differences or very small deviations can produce a large z-score, which is displayed in scientific notation when needed. The worksheet uses ordinary floating-point arithmetic. Measurement rounding, missing data and a poorly matched reference remain limitations that extra decimal places cannot remove."
      }
    ],
    "limitations": "All three numeric inputs must be finite and within the displayed implementation’s ±10¹² magnitude ceiling, with a strictly positive deviation. Large differences or very small deviations can produce a large z-score, which is displayed in scientific notation when needed. The worksheet uses ordinary floating-point arithmetic. Measurement rounding, missing data and a poorly matched reference remain limitations that extra decimal places cannot remove. Strictly positive numeric inputs must be at least 0.000000000001; values below that supported floor are rejected.",
    "faqs": [
      {
        "question": "Does a z-score require normal data?",
        "answer": "The arithmetic does not. Interpreting it through a standard-normal probability table does require an appropriate distribution model."
      },
      {
        "question": "Can the score be negative?",
        "answer": "Yes. It indicates a value below the supplied mean, not a negative measurement or an invalid result."
      },
      {
        "question": "Should I enter variance?",
        "answer": "No. Enter standard deviation, which is the square root of variance in the original measurement units."
      },
      {
        "question": "Does this calculate a percentile?",
        "answer": "No. The page reports standardized distance without assigning a distribution, percentile or tail probability."
      },
      {
        "question": "What if standard deviation is zero?",
        "answer": "The z-score is undefined and the calculator returns an input error instead of infinity."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "z value calculator",
      "z-score calculator",
      "how to calculate z score",
      "how to calculate a z score",
      "standard score calculator",
      "calculate z score",
      "how to calculate z value"
    ]
  },
  {
    "slug": "circumference-calculator",
    "title": "Circumference Calculator",
    "shortTitle": "Circumference",
    "category": "Education",
    "description": "Find a circle’s circumference from radius or diameter, or recover radius and diameter from a known perimeter, with area as supporting output.",
    "intro": "Find a circle’s circumference from radius or diameter, or recover radius and diameter from a known perimeter, with area as supporting output. Select radius, diameter or circumference before typing the value. Radius measures center to boundary; diameter passes through the center from one boundary point to the opposite point. Circumference measures once around the complete boundary. A radius and a diameter with the same written number describe different circles. The selector determines which equation interprets your measurement rather than guessing from the number alone.",
    "formula": "C = 2πr = πd. From circumference, r = C/(2π) and d = C/π. Supporting area = πr².",
    "example": "A radius of 5 units gives diameter 10, circumference 10π ≈ 31.415927 units and area 25π ≈ 78.539816 square units. Entering 31.4159265359 as circumference approximately recovers the radius 5. The recovered value is approximate because the supplied circumference was rounded.",
    "howTo": [
      "Choose the correct input basis for circumference calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review perimeter and area differ before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review checks and practical limits before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Choose the known quantity",
        "text": "Select radius, diameter or circumference before typing the value. Radius measures center to boundary; diameter passes through the center from one boundary point to the opposite point. Circumference measures once around the complete boundary. A radius and a diameter with the same written number describe different circles. The selector determines which equation interprets your measurement rather than guessing from the number alone."
      },
      {
        "title": "Perimeter and area differ",
        "text": "Circumference is a length; area is measured in square units. A circle with twice the radius has twice the circumference but four times the area. The supporting area output is useful for checking geometry, but this page’s primary task is perimeter and reverse perimeter arithmetic. For area-led composite shapes, use the separate area and surface-area worksheet instead of treating one circle as a whole site."
      },
      {
        "title": "Inverse circumference",
        "text": "If perimeter is the known measurement, divide by π for diameter or 2π for radius. A string wrapped tightly around a circular object can supply a perimeter measurement, but slack, thickness and a noncircular profile affect the inferred diameter. The tool assumes a perfect Euclidean circle and does not correct for measurement method, ovality or material deformation."
      },
      {
        "title": "Consistent units",
        "text": "The input’s length unit carries through to radius, diameter and circumference. If the value is in centimetres, each length output is in centimetres and area is in square centimetres. The calculator does not silently convert units. Use the length converter when the source measurement and destination worksheet require different units. Converting length before squaring also keeps the area unit consistent."
      },
      {
        "title": "Checks and practical limits",
        "text": "Enter a positive finite measurement no greater than 10¹². Zero and negative circle dimensions are rejected. π is retained at browser numeric precision during calculation and output is rounded only for display. A computed perimeter does not include fabrication allowances, seams, kerf, fittings or overlap. Add independently established allowances in a separate purchasing calculation rather than changing the circle’s mathematical radius."
      }
    ],
    "limitations": "Enter a positive finite measurement no greater than 10¹². Zero and negative circle dimensions are rejected. π is retained at browser numeric precision during calculation and output is rounded only for display. A computed perimeter does not include fabrication allowances, seams, kerf, fittings or overlap. Add independently established allowances in a separate purchasing calculation rather than changing the circle’s mathematical radius. Strictly positive numeric inputs must be at least 0.000000000001; values below that supported floor are rejected.",
    "faqs": [
      {
        "question": "Is diameter twice radius?",
        "answer": "Yes, for a circle. The worksheet shows both, so a swapped radius/diameter input is easier to notice."
      },
      {
        "question": "Can I start with circumference?",
        "answer": "Yes. Select circumference and the page recovers diameter and radius using π."
      },
      {
        "question": "What unit should I enter?",
        "answer": "Any consistent linear unit. The page is unit-neutral and labels supporting area as square units."
      },
      {
        "question": "Does it calculate an ellipse?",
        "answer": "No. An ellipse has a different perimeter relationship and cannot be represented by one circle radius."
      },
      {
        "question": "Why does a reverse calculation differ slightly?",
        "answer": "A rounded perimeter input and rounded output can differ in the last displayed digits. Internal calculations retain ordinary floating-point precision."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "circumference calculator"
    ]
  },
  {
    "slug": "pounds-ounces-converter",
    "title": "Pounds and Ounces Converter",
    "shortTitle": "Pounds and Ounces Converter",
    "category": "Everyday",
    "description": "Convert avoirdupois pounds, mass ounces and grams, including a normalized pounds-plus-ounces result; fluid and troy ounces are excluded.",
    "intro": "Convert avoirdupois pounds, mass ounces and grams, including a normalized pounds-plus-ounces result; fluid and troy ounces are excluded. Choose pounds, avoirdupois ounces or grams. The value is a single decimal quantity in the selected unit, not a mixed string such as 2 lb 8 oz. For that example, enter either 2.5 pounds or 40 ounces. All three outputs describe the same mass, and the mixed row provides a convenient normalized representation without changing the physical quantity.",
    "formula": "1 lb = 16 avoirdupois oz = 453.59237 g. Grams = pounds × 453.59237. Mixed ounces = fractional pounds × 16.",
    "example": "2.5 pounds equals 40 mass ounces or 1133.980925 grams. In mixed notation that is 2 lb 8 oz. Entering 40 with ounces selected returns the same mass. A decimal pound is divided into sixteenths for the mixed representation; it is not read as decimal ounce digits.",
    "howTo": [
      "Choose the correct input basis for pounds and ounces converter and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review ordinary and troy ounces before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review using the results before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Mass unit selection",
        "text": "Choose pounds, avoirdupois ounces or grams. The value is a single decimal quantity in the selected unit, not a mixed string such as 2 lb 8 oz. For that example, enter either 2.5 pounds or 40 ounces. All three outputs describe the same mass, and the mixed row provides a convenient normalized representation without changing the physical quantity."
      },
      {
        "title": "Ordinary and troy ounces",
        "text": "An everyday mass ounce is one sixteenth of an avoirdupois pound. A troy ounce belongs to a different precious-metal weight system, and a fluid ounce measures volume. Neither is an interchangeable substitute for this page’s ounce. If your measurement comes from a bullion quote or liquid package, identify the unit before converting; the words ounce and oz alone can be ambiguous."
      },
      {
        "title": "Reading mixed mass",
        "text": "The mixed row takes the whole-number pounds first and converts the remaining fraction to ounces. Thus 1.25 lb becomes 1 lb 4 oz, not 1 lb 25 oz. It uses nonnegative inputs, so no signed mixed-number convention is needed. Rounded ounce output can approach a boundary; the decimal-pound and total-ounce rows retain the corresponding value for an independent check."
      },
      {
        "title": "Exact factors and measured inputs",
        "text": "The international pound-to-kilogram definition supplies an exact factor, but a scale reading can still be approximate. Additional displayed decimals do not recover precision the scale never measured. Preserve the original unit and number when documenting a conversion, especially if the destination imposes its own rounding rule. This worksheet does not choose postage bands, product tolerances or nutrition serving assumptions."
      },
      {
        "title": "Using the results",
        "text": "The converter accepts nonnegative finite inputs within the stated 10¹² ceiling. A zero input gives zero in every unit. It does not calculate density, shipping dimensional weight or the volume occupied by the material. To convert mass to liquid volume, use an independently established density in the separate grams-to-millilitres worksheet. For precious-metal valuation, use troy units and verified purity in the silver worksheet."
      }
    ],
    "limitations": "The converter accepts nonnegative finite inputs within the stated 10¹² ceiling. A zero input gives zero in every unit. It does not calculate density, shipping dimensional weight or the volume occupied by the material. To convert mass to liquid volume, use an independently established density in the separate grams-to-millilitres worksheet. For precious-metal valuation, use troy units and verified purity in the silver worksheet.",
    "faqs": [
      {
        "question": "Are these fluid ounces?",
        "answer": "No. They are avoirdupois mass ounces. Fluid ounces require a volume conversion and cannot be treated as mass without density."
      },
      {
        "question": "How many ounces are in a pound?",
        "answer": "Sixteen ordinary mass ounces. A troy pound uses a different system and is not supported here."
      },
      {
        "question": "How do I enter 3 lb 6 oz?",
        "answer": "Enter 3.375 pounds or 54 ounces. The single input does not parse mixed unit text."
      },
      {
        "question": "Can I convert grams back to pounds?",
        "answer": "Yes. Select grams, then read decimal pounds and the mixed pounds-plus-ounces row."
      },
      {
        "question": "Are negative masses allowed?",
        "answer": "No. This converter treats mass as nonnegative and rejects a negative entry."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "convert pounds to ounces",
      "oz pounds converter",
      "convert ounces in pounds",
      "oz convert to pounds",
      "converter ounces to pounds"
    ]
  },
  {
    "slug": "pizza-party-calculator",
    "title": "Pizza Party Calculator",
    "shortTitle": "Pizza Party",
    "category": "Everyday",
    "description": "Estimate whole pizzas, slice coverage and pizza cost from your guest count, appetite assumptions, cut size and optional extra allowance.",
    "intro": "Estimate whole pizzas, slice coverage and pizza cost from your guest count, appetite assumptions, cut size and optional extra allowance. Enter the people actually being served, then choose your own average slices per person. The example of three slices is a planning input rather than a universal dietary or catering rule. Children, adults, meal timing and the amount of other food can change demand. For groups with markedly different needs, estimate each subgroup separately and add their expected slice totals before choosing the final order.",
    "formula": "Planned slices = guests × slices per guest × (1 + extra percentage/100). Whole pizzas = ceiling(planned slices/slices per pizza). Pizza cost = whole pizzas × supplied price.",
    "example": "For 12 guests, 3 slices each, 8 slices per pizza and a 10% allowance, planned demand is 39.6 slices. That requires 5 whole pizzas, supplying 40 slices. At a supplied price of 15 each, pizza cost is 75 before delivery, tax, tips or additional food.",
    "howTo": [
      "Choose the correct input basis for pizza party calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review pizza size and cut before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review ordering constraints before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Guest count and appetite",
        "text": "Enter the people actually being served, then choose your own average slices per person. The example of three slices is a planning input rather than a universal dietary or catering rule. Children, adults, meal timing and the amount of other food can change demand. For groups with markedly different needs, estimate each subgroup separately and add their expected slice totals before choosing the final order."
      },
      {
        "title": "Pizza size and cut",
        "text": "The number of slices per pizza describes the actual restaurant’s cut, not a fixed industry standard. Eight small slices and eight large slices are not equal amounts of food. This calculator counts slices only and cannot infer diameter, crust thickness or calories from a menu name. Ask the restaurant about its size and cut, then supply a slices-per-person assumption that matches those portions."
      },
      {
        "title": "Extra allowance and rounding",
        "text": "The allowance raises expected slices before whole-pizza rounding. Applying a buffer after rounding can produce a different order, so the method is explicit. Fractional planned slices are allowed because they are an aggregate demand estimate; the final pizza count is always rounded upward. The excess from whole pizzas is visible by comparing planned slices with slices actually supplied."
      },
      {
        "title": "Price scope",
        "text": "Use the price per pizza for the specific items you expect to order. The cost row multiplies that price by the whole count and stays in the same currency. It does not retrieve menus or apply coupons, tax, delivery fees or tips. If toppings or sizes have different prices, calculate separate groups or supply a clearly documented average and check the real cart before placing the order."
      },
      {
        "title": "Ordering constraints",
        "text": "Guests and slices per pizza must be whole positive counts. Slices per guest can be fractional, while a zero appetite produces zero pizzas. The extra allowance is limited to 0–100%. Food preferences, allergens, storage and restaurant capacity are outside this arithmetic. Allocate vegetarian and other requested options explicitly rather than assuming the total count alone creates a workable menu for everyone."
      }
    ],
    "limitations": "Guests and slices per pizza must be whole positive counts. Slices per guest can be fractional, while a zero appetite produces zero pizzas. The extra allowance is limited to 0–100%. Food preferences, allergens, storage and restaurant capacity are outside this arithmetic. Allocate vegetarian and other requested options explicitly rather than assuming the total count alone creates a workable menu for everyone.",
    "faqs": [
      {
        "question": "Is three slices per person a rule?",
        "answer": "No. It is only an editable example assumption. Match the actual pizza size and other food available."
      },
      {
        "question": "Why round upward?",
        "answer": "Restaurants sell whole pizzas. A partial-pizza result cannot cover the full planned slice demand unless you choose another serving arrangement."
      },
      {
        "question": "Is the allowance added twice?",
        "answer": "No. It is applied once to expected slices, followed by whole-pizza rounding."
      },
      {
        "question": "Does cost include delivery?",
        "answer": "No. The price field covers pizza price only; other charges need separate budgeting."
      },
      {
        "question": "Can I split adults and children?",
        "answer": "Calculate the groups separately or compute a weighted average slice demand. The tool does not assign appetite by age."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "pizza calculator"
    ]
  },
  {
    "slug": "length-conversion-calculator",
    "title": "Length Conversion Calculator",
    "shortTitle": "Length Conversion",
    "category": "Everyday",
    "description": "Convert millimetres, centimetres, metres, kilometres, inches, feet, yards and international miles with an explicit unit selector.",
    "intro": "Convert millimetres, centimetres, metres, kilometres, inches, feet, yards and international miles with an explicit unit selector. Enter one nonnegative length and explicitly select its original unit and requested destination. The converter supports eight linear units, including metric millimetres through kilometres and international inches through miles. It does not infer a unit from the size of a number or parse mixed feet-and-inches text. Matching source and destination units returns the original value and is a useful interface check.",
    "formula": "Destination value = input × metres-per-source-unit / metres-per-destination-unit. 1 in = 0.0254 m; 1 ft = 0.3048 m; 1 international mile = 1609.344 m.",
    "example": "100 centimetres equals 1 metre, approximately 39.370079 inches or 3.280840 feet. Selecting inches to millimetres for a value of 1 returns 25.4 mm. The selectors control the direction, so converting 100 inches to centimetres instead gives 254 cm.",
    "howTo": [
      "Choose the correct input basis for length conversion calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review convert through metres before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review height and mixed measurements before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Select both units",
        "text": "Enter one nonnegative length and explicitly select its original unit and requested destination. The converter supports eight linear units, including metric millimetres through kilometres and international inches through miles. It does not infer a unit from the size of a number or parse mixed feet-and-inches text. Matching source and destination units returns the original value and is a useful interface check."
      },
      {
        "title": "Convert through metres",
        "text": "Each supported unit has a metres-per-unit factor. Multiplying by the source factor gives metres; dividing by the destination factor completes the conversion. This shared reference prevents separate direction formulas from drifting apart. The factor row shows the number of destination units in one source unit. It is a linear ratio, so ten times the input always gives ten times the converted length."
      },
      {
        "title": "International foot and mile",
        "text": "The foot and mile options use the international definitions, with one foot equal to 0.3048 metres and one mile equal to 1609.344 metres. Historical survey-foot records can use a different basis. A nautical mile is also a separate unit and is not an option. Identify the source convention before converting surveying, marine or historical data instead of assuming every label has the same meaning."
      },
      {
        "title": "Length is not speed or area",
        "text": "Kilometres and miles measure distance; knots measure speed. A malformed search phrase involving kn is not treated as a kilometre label here. Area requires the square of a length factor, and volume requires its cube. This calculator converts linear lengths only. To calculate square footage or a solid’s volume, use the corresponding geometry tool with dimensions expressed in a consistent unit."
      },
      {
        "title": "Height and mixed measurements",
        "text": "A height already expressed as a single decimal length can use this converter. For 5 ft 8 in, either enter 68 inches or use the feet-and-inches arithmetic page. Entering 5.8 feet does not mean five feet eight inches. The numeric ceiling is 10¹² in the selected source unit; outputs retain floating-point precision before display rounding. Keep the original unit when copying a result into another worksheet."
      }
    ],
    "limitations": "A height already expressed as a single decimal length can use this converter. For 5 ft 8 in, either enter 68 inches or use the feet-and-inches arithmetic page. Entering 5.8 feet does not mean five feet eight inches. The numeric ceiling is 10¹² in the selected source unit; outputs retain floating-point precision before display rounding. Keep the original unit when copying a result into another worksheet.",
    "faqs": [
      {
        "question": "Can I convert mm to inches?",
        "answer": "Yes. Select millimetres as source and inches as destination. One inch is exactly 25.4 mm."
      },
      {
        "question": "Can I enter five feet eight inches?",
        "answer": "Use 68 inches as one value or the separate mixed feet-and-inches calculator. Unit text is not parsed."
      },
      {
        "question": "Are miles nautical miles?",
        "answer": "No. The option is the international statute mile, not a nautical mile or a speed unit."
      },
      {
        "question": "Does it convert square feet?",
        "answer": "No. This page converts length. Area and volume need different powers of the conversion factor."
      },
      {
        "question": "Why is a round trip slightly different?",
        "answer": "The displayed value is rounded. Re-entering that displayed value can lose digits compared with the internal calculation."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
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
    ]
  },
  {
    "slug": "electricity-usage-calculator",
    "title": "Electricity Usage Calculator",
    "shortTitle": "Electricity Usage",
    "category": "Energy",
    "description": "Estimate appliance kWh and usage cost from power, runtime, device count, duty cycle and a supplied flat electricity price.",
    "intro": "Estimate appliance kWh and usage cost from power, runtime, device count, duty cycle and a supplied flat electricity price. Watts describe a power rate, while kilowatt-hours describe accumulated energy. A one-kilowatt load running for one hour uses one kilowatt-hour. Enter watts in the first field, not a label’s annual kWh estimate. The worksheet converts watts to kilowatts before multiplying by time. It shows combined running power separately so a user does not mistake energy over a month for an instantaneous electrical load.",
    "formula": "Energy kWh = watts/1000 × hours/day × days × device count × duty cycle/100. Usage cost = kWh × supplied price per kWh.",
    "example": "A 1000 W device used 2 hours daily for 30 days at 100% duty cycle consumes 60 kWh. At an illustrative price of 0.20 per kWh, usage cost is 12. A 50% duty cycle halves those values to 30 kWh and 6; it does not change the rated running power.",
    "howTo": [
      "Choose the correct input basis for electricity usage calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review runtime and device count before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review measurement and limits before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Watts and kilowatt-hours",
        "text": "Watts describe a power rate, while kilowatt-hours describe accumulated energy. A one-kilowatt load running for one hour uses one kilowatt-hour. Enter watts in the first field, not a label’s annual kWh estimate. The worksheet converts watts to kilowatts before multiplying by time. It shows combined running power separately so a user does not mistake energy over a month for an instantaneous electrical load."
      },
      {
        "title": "Runtime and device count",
        "text": "Hours per day can range from zero to twenty-four. Days specify the period and need not be a calendar month. Identical devices multiply consumption by a whole device count. Different wattages or operating schedules should be calculated separately, then their kWh added. The tool assumes a consistent daily pattern and does not retrieve a meter record, weather history or a tariff schedule."
      },
      {
        "title": "Duty-cycle meaning",
        "text": "Duty cycle is the fraction of entered runtime spent at the entered power. A thermostat-controlled appliance may cycle on and off, so a 50% assumption averages half its running power across that runtime. Do not apply another duty adjustment when the input power already represents a measured average. A device can also have standby power during the off portion; that requires its own calculation because it is absent from this simple model."
      },
      {
        "title": "Flat rate and bill scope",
        "text": "Supply the energy price per kWh in your chosen currency. The cost result is an energy-only flat-rate estimate, excluding fixed charges, taxes, demand charges and tiered slabs. A marginal rate for additional use can differ from an average bill rate. Keep the rate basis with the calculation, and use the Pakistan electricity-bill page when you specifically need its separately stated regional billing assumptions."
      },
      {
        "title": "Measurement and limits",
        "text": "Nameplate power may describe a maximum rather than typical use. A plug meter or documented average can be more relevant when appropriate. The calculator accepts nonnegative finite power and rates, whole devices, up to 36,600 days and a duty percentage from zero to one hundred. It does not assess electrical capacity, circuit protection or equipment safety. Changes in occupancy, control settings and ambient conditions can make real consumption different."
      }
    ],
    "limitations": "Nameplate power may describe a maximum rather than typical use. A plug meter or documented average can be more relevant when appropriate. The calculator accepts nonnegative finite power and rates, whole devices, up to 36,600 days and a duty percentage from zero to one hundred. It does not assess electrical capacity, circuit protection or equipment safety. Changes in occupancy, control settings and ambient conditions can make real consumption different.",
    "faqs": [
      {
        "question": "Does 1000 W mean 1000 kWh?",
        "answer": "No. 1000 W is 1 kW of power. It uses 1 kWh only after one hour at that power."
      },
      {
        "question": "Should measured average watts use 100% duty?",
        "answer": "Usually yes for that same measured period. Applying a second cycling reduction would count the reduction twice."
      },
      {
        "question": "Does this reproduce my electricity bill?",
        "answer": "No. It estimates usage energy and a supplied flat energy price, excluding tariff-specific adjustments and fixed charges."
      },
      {
        "question": "Can I calculate several different appliances?",
        "answer": "Calculate each schedule separately and add their kWh. The device count assumes identical power and runtime."
      },
      {
        "question": "Is standby energy included?",
        "answer": "Only if it is represented in your supplied power and runtime. Otherwise calculate standby as a separate load."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
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
    ]
  },
  {
    "slug": "eigenvalue-calculator",
    "title": "Eigenvalue Calculator — 2×2 Matrices",
    "shortTitle": "Eigenvalue",
    "category": "Education",
    "description": "Find eigenvalues of a numeric 2×2 real matrix, with real unit eigenvectors or a labeled complex conjugate pair and trace checks.",
    "intro": "Find eigenvalues of a numeric 2×2 real matrix, with real unit eigenvectors or a labeled complex conjugate pair and trace checks. Enter four real numeric entries in row order: upper left, upper right, lower left and lower right. The calculation is restricted to a two-by-two matrix. It does not accept a pasted arbitrary-size array, symbolic variables or expressions. Entries must be finite and between −10⁶ and 10⁶. Confirm row placement before interpreting the result because transposition can change eigenvectors even when eigenvalues stay unchanged.",
    "formula": "For A = [[a,b],[c,d]], trace t = a+d and determinant Δ = ad−bc. Eigenvalues solve λ²−tλ+Δ = 0, with discriminant (a−d)²+4bc.",
    "example": "The diagonal matrix [[2,0],[0,3]] has eigenvalues 3 and 2. Unit eigenvectors can be (0,1) and (−1,0), respectively; changing a vector’s sign preserves its eigenvector property. The sum of eigenvalues is 5, matching trace, and their product is 6, matching determinant.",
    "howTo": [
      "Choose the correct input basis for eigenvalue calculator — 2×2 matrices and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review characteristic equation before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review numerical interpretation before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Matrix entry order",
        "text": "Enter four real numeric entries in row order: upper left, upper right, lower left and lower right. The calculation is restricted to a two-by-two matrix. It does not accept a pasted arbitrary-size array, symbolic variables or expressions. Entries must be finite and between −10⁶ and 10⁶. Confirm row placement before interpreting the result because transposition can change eigenvectors even when eigenvalues stay unchanged."
      },
      {
        "title": "Characteristic equation",
        "text": "An eigenvalue makes A−λI singular. For a two-by-two matrix, expanding its determinant produces the displayed quadratic equation. The trace and determinant therefore determine the eigenvalue sum and product. A positive discriminant yields two real values, zero gives a repeated value, and a negative discriminant yields a complex conjugate pair. The page labels that pair rather than discarding an imaginary component."
      },
      {
        "title": "Real eigenvectors",
        "text": "For each real value, the worksheet constructs a nonzero vector in the null space of A−λI and normalizes its Euclidean length to one. Multiplying an eigenvector by any nonzero scalar gives another valid eigenvector, so signs and scale can differ from a textbook answer. Check the direction through Av = λv instead of expecting one identical written vector."
      },
      {
        "title": "Repeated and scalar cases",
        "text": "A repeated eigenvalue need not have two independent eigenvectors. A defective matrix can return the same eigenspace for both reported values. A scalar multiple of the identity has every nonzero vector as an eigenvector, which is stated explicitly instead of pretending there is one distinguished direction. The worksheet does not construct a Jordan form or certify diagonalizability for an arbitrary matrix."
      },
      {
        "title": "Numerical interpretation",
        "text": "Near repeated values, tiny entry changes can substantially change eigenvectors. Ordinary floating-point calculations also lose relative precision in badly conditioned examples. This tool is an educational two-by-two worksheet, not an arbitrary-precision linear-algebra package. Complex eigenvectors are not constructed. Retain the original matrix and inspect residuals when numerical accuracy matters rather than treating eight displayed decimals as an error bound."
      }
    ],
    "limitations": "Near repeated values, tiny entry changes can substantially change eigenvectors. Ordinary floating-point calculations also lose relative precision in badly conditioned examples. This tool is an educational two-by-two worksheet, not an arbitrary-precision linear-algebra package. Complex eigenvectors are not constructed. Retain the original matrix and inspect residuals when numerical accuracy matters rather than treating eight displayed decimals as an error bound.",
    "faqs": [
      {
        "question": "Can I enter a 3×3 matrix?",
        "answer": "No. This calculator deliberately handles numeric two-by-two real matrices only."
      },
      {
        "question": "Why are my vector signs different?",
        "answer": "Eigenvectors are unchanged as directions when multiplied by a nonzero scalar, including minus one."
      },
      {
        "question": "What does an imaginary eigenvalue mean?",
        "answer": "The characteristic quadratic has negative discriminant. The page reports a conjugate pair but does not build complex eigenvectors."
      },
      {
        "question": "Does a repeated value mean two independent vectors?",
        "answer": "No. A repeated eigenvalue may have only one independent eigendirection."
      },
      {
        "question": "What happens for the identity matrix?",
        "answer": "Both eigenvalues are one and every nonzero vector is an eigenvector, so the worksheet reports that general case."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "eigenvalue calculator"
    ]
  },
  {
    "slug": "percent-error-calculator",
    "title": "Percent Error Calculator",
    "shortTitle": "Percent Error",
    "category": "Education",
    "description": "Compare a measured value with a nonzero reference using absolute percent error, signed relative error and the underlying difference.",
    "intro": "Compare a measured value with a nonzero reference using absolute percent error, signed relative error and the underlying difference. Enter the measured or estimated value first and the accepted comparison value second. Percent error is relative to the reference, so reversing them changes the denominator and generally changes the answer. Use matching units and an independently justified reference. A published constant, calibration target or assigned theoretical value can serve different purposes; the calculator does not select the appropriate one.",
    "formula": "Absolute percent error = |measured−reference| / |reference| ×100. Signed relative error = (measured−reference) / |reference| ×100.",
    "example": "A measured value of 9.8 against reference 10 differs by −0.2. Absolute percent error is 2%, while signed relative error is −2%. For measurement −9 against reference −10, the difference is +1 and the signed error is +10% because the denominator uses the positive reference magnitude.",
    "howTo": [
      "Choose the correct input basis for percent error calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review absolute and signed forms before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review precision and reporting before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Choose the reference",
        "text": "Enter the measured or estimated value first and the accepted comparison value second. Percent error is relative to the reference, so reversing them changes the denominator and generally changes the answer. Use matching units and an independently justified reference. A published constant, calibration target or assigned theoretical value can serve different purposes; the calculator does not select the appropriate one."
      },
      {
        "title": "Absolute and signed forms",
        "text": "The primary output is nonnegative absolute percent error. The signed row preserves whether the measured value is numerically above or below the reference, using absolute reference magnitude in the denominator. Some courses define signed error with the signed reference itself. This page’s explicit convention avoids reversing the direction for a negative reference; follow your assigned convention when reporting a class result."
      },
      {
        "title": "Zero reference boundary",
        "text": "A zero reference makes a relative error undefined because there is no nonzero reference magnitude to divide by. Even a measurement of zero against a zero reference cannot produce a defined percentage through this formula. Use the raw measurement difference or a separately chosen scale when zero is the relevant target. The calculator reports the boundary rather than inventing a zero-percent relative result."
      },
      {
        "title": "Error versus difference",
        "text": "Percent difference between two peer measurements commonly uses a different denominator, such as their average magnitude. Percent change uses an earlier value as its baseline. Neither should be substituted for this reference-based error calculation without explaining the definition. The supporting difference row helps separate the absolute measurement-unit discrepancy from the dimensionless percentage. A small percentage does not automatically mean a measurement meets a tolerance."
      },
      {
        "title": "Precision and reporting",
        "text": "Inputs are finite numbers with magnitudes no greater than 10¹². Very small nonzero reference values can generate very large percentages, which may be mathematically valid but unhelpful for the measurement question. The worksheet does not estimate uncertainty, determine significant figures or establish instrument accuracy. Report the original measured and reference values along with a rounding level justified by the measurement context."
      }
    ],
    "limitations": "Inputs are finite numbers with magnitudes no greater than 10¹². Very small nonzero reference values can generate very large percentages, which may be mathematically valid but unhelpful for the measurement question. The worksheet does not estimate uncertainty, determine significant figures or establish instrument accuracy. Report the original measured and reference values along with a rounding level justified by the measurement context.",
    "faqs": [
      {
        "question": "Can percent error be negative?",
        "answer": "The absolute percent error is never negative. The separate signed relative error can be negative under the stated convention."
      },
      {
        "question": "Why does swapping the inputs change it?",
        "answer": "The second value is the reference denominator. The two roles are not symmetric."
      },
      {
        "question": "Can the reference be zero?",
        "answer": "No relative percentage is defined at a zero reference. The calculator reports an error."
      },
      {
        "question": "Is this percent difference?",
        "answer": "No. It compares one measurement against an explicit reference instead of averaging two equal-status measurements."
      },
      {
        "question": "Does low percent error prove precision?",
        "answer": "No. Agreement with one reference does not establish repeatability, uncertainty or the quality of a measurement process."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
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
    ]
  },
  {
    "slug": "midpoint-calculator",
    "title": "Midpoint Calculator",
    "shortTitle": "Midpoint",
    "category": "Education",
    "description": "Find a two-dimensional Cartesian segment midpoint, full distance and half-distance from two coordinate pairs, with clear geometric scope.",
    "intro": "Find a two-dimensional Cartesian segment midpoint, full distance and half-distance from two coordinate pairs, with clear geometric scope. Enter the first x and y, then the second x and y. Negative and decimal coordinates are valid. Both pairs must use the same origin, axis directions and unit scale. This worksheet assumes a flat two-dimensional Cartesian plane. A point’s x value cannot be averaged with another point’s y value, even if the written values happen to have the same units.",
    "formula": "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Distance = √((x₂−x₁)²+(y₂−y₁)²). Half-distance = distance/2.",
    "example": "Points (2,4) and (6,8) have midpoint (4,6). Their segment length is √32 ≈ 5.656854 units, so the midpoint is about 2.828427 units from either endpoint. Averaging the x values and y values separately preserves their roles instead of mixing the two axes.",
    "howTo": [
      "Choose the correct input basis for midpoint calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review coordinate averaging before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review geometry applications before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Cartesian coordinates",
        "text": "Enter the first x and y, then the second x and y. Negative and decimal coordinates are valid. Both pairs must use the same origin, axis directions and unit scale. This worksheet assumes a flat two-dimensional Cartesian plane. A point’s x value cannot be averaged with another point’s y value, even if the written values happen to have the same units."
      },
      {
        "title": "Coordinate averaging",
        "text": "The midpoint lies halfway along a straight segment. Each coordinate is the arithmetic average of the corresponding endpoint coordinates. The implementation halves before adding, which reduces avoidable overflow in a naive sum, although input magnitudes are also bounded to 10¹². Endpoint order does not affect the result. Identical endpoints return that same point and a zero segment length."
      },
      {
        "title": "Distance as a check",
        "text": "The Euclidean distance row uses the horizontal and vertical differences through the Pythagorean relation. Both endpoint-to-midpoint distances should equal the displayed half-distance. Distance assumes both axes use the same linear scale and perpendicular directions. If one axis is time and another is money, averaging coordinates can still be algebraically defined, but the Euclidean length has no ordinary shared physical unit."
      },
      {
        "title": "Geographic boundaries",
        "text": "Latitude and longitude are angular coordinates on a curved surface, with longitude wrapping at the antimeridian. Direct Cartesian averaging can give a geographically wrong location, particularly near longitude ±180°. Use the separate geographic midpoint worksheet for its stated spherical model. Neither page computes equal driving times, road routes or an accessible meeting place from two city names."
      },
      {
        "title": "Geometry applications",
        "text": "Use the midpoint when locating a segment center, bisecting a drawing or checking a coordinate exercise. It does not find a triangle’s centroid, the center of an arbitrary polygon or the center of curvature. Those tasks involve different formulas and additional points. Keep the coordinate pairs with any saved answer, especially when translating a drawing to another origin or changing its measurement unit."
      }
    ],
    "limitations": "Use the midpoint when locating a segment center, bisecting a drawing or checking a coordinate exercise. It does not find a triangle’s centroid, the center of an arbitrary polygon or the center of curvature. Those tasks involve different formulas and additional points. Keep the coordinate pairs with any saved answer, especially when translating a drawing to another origin or changing its measurement unit.",
    "faqs": [
      {
        "question": "Can I use negative coordinates?",
        "answer": "Yes. Signed coordinates describe positions relative to the chosen origin."
      },
      {
        "question": "Does order matter?",
        "answer": "No. Swapping complete endpoint pairs preserves midpoint and distance."
      },
      {
        "question": "What if both points are identical?",
        "answer": "The midpoint is that same point, and full and half distances are zero."
      },
      {
        "question": "Is this a map midpoint?",
        "answer": "No. Use the geographic midpoint page for latitude and longitude on its disclosed spherical model."
      },
      {
        "question": "Can it calculate a 3D midpoint?",
        "answer": "This interface supports two axes only. A three-dimensional calculation requires a third coordinate for each endpoint."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "midpoint calculator"
    ]
  },
  {
    "slug": "dew-point-calculator",
    "title": "Dew Point Calculator",
    "shortTitle": "Dew Point",
    "category": "Everyday",
    "description": "Estimate liquid-water dew point from air temperature and relative humidity, with Celsius/Fahrenheit output and an explicit 0–50°C model boundary.",
    "intro": "Estimate liquid-water dew point from air temperature and relative humidity, with Celsius/Fahrenheit output and an explicit 0–50°C model boundary. Select Celsius or Fahrenheit for the air-temperature field. Relative humidity is entered as a percentage, so fifty percent is 50 rather than 0.5. Use measurements representing the same place and time. A thermometer in direct sunlight and a humidity sensor in another room do not describe one air parcel. This page does not retrieve a weather observation or independently check sensor calibration.",
    "formula": "γ = ln(RH/100) + 17.625T/(243.04+T). Dew point = 243.04γ/(17.625−γ), with T in °C. Both air temperature and calculated dew point must lie in 0–50°C.",
    "example": "At 25°C and 50% relative humidity, the formula gives approximately 13.85761254°C, or 56.94370257°F. At 100% relative humidity, dew point equals the air temperature. A dry input that would give a subzero dew point is rejected under this worksheet’s narrower liquid-water scope.",
    "howTo": [
      "Choose the correct input basis for dew point calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review meaning of dew point before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review practical interpretation before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Temperature and humidity inputs",
        "text": "Select Celsius or Fahrenheit for the air-temperature field. Relative humidity is entered as a percentage, so fifty percent is 50 rather than 0.5. Use measurements representing the same place and time. A thermometer in direct sunlight and a humidity sensor in another room do not describe one air parcel. This page does not retrieve a weather observation or independently check sensor calibration."
      },
      {
        "title": "Meaning of dew point",
        "text": "Dew point is the temperature at which the modeled air reaches saturation when cooled without changing its water-vapour amount. It is a temperature, not a percentage. Relative humidity depends on temperature, so two air samples at equal relative humidity can have different dew points. The temperature-minus-dew-point row shows the modeled gap but does not directly measure condensation on a particular object."
      },
      {
        "title": "Liquid-water approximation",
        "text": "The displayed Magnus equation is an approximation with stated constants, not an exact thermodynamic solver. This implementation deliberately accepts only air temperatures from zero to fifty Celsius and results in that same range. It therefore avoids claiming a frost-point calculation or extrapolating to subzero dew points. A wider weather model could use different phase assumptions and coefficients; this worksheet does not switch them silently."
      },
      {
        "title": "Saturation and invalid cases",
        "text": "A relative humidity of one hundred percent should return the air temperature. Zero humidity makes the logarithm undefined and is rejected. Values above one hundred percent are also outside this model. Very low humidity can give a negative modeled dew point even while air is warm; that case receives a scope error, not a fabricated zero result. The input boundary is visible before using the worksheet."
      },
      {
        "title": "Practical interpretation",
        "text": "Condensation requires comparing an actual surface temperature with the relevant air dew point. Surface gradients, ventilation and moisture sources can change local conditions. This result does not predict mold growth, certify a building envelope or establish heat-stress risk. Keep the measured air temperature, humidity, sensor location and time with any saved output. Sensor uncertainty often matters more than the last displayed decimal."
      }
    ],
    "limitations": "Condensation requires comparing an actual surface temperature with the relevant air dew point. Surface gradients, ventilation and moisture sources can change local conditions. This result does not predict mold growth, certify a building envelope or establish heat-stress risk. Keep the measured air temperature, humidity, sensor location and time with any saved output. Sensor uncertainty often matters more than the last displayed decimal.",
    "faqs": [
      {
        "question": "Can I use Fahrenheit?",
        "answer": "Yes. Input Fahrenheit is converted to Celsius for the formula, then dew point is shown in both temperature units."
      },
      {
        "question": "Why is a subzero dew point rejected?",
        "answer": "This worksheet intentionally limits its liquid-water model to air and dew-point temperatures from 0–50°C. It does not supply a frost model."
      },
      {
        "question": "What happens at 100% humidity?",
        "answer": "The calculated dew point equals the air temperature within floating-point rounding."
      },
      {
        "question": "Can I enter zero humidity?",
        "answer": "No. The formula contains ln(RH/100), which is undefined at zero."
      },
      {
        "question": "Does the result prove a surface will condense?",
        "answer": "No. You also need the surface temperature and conditions at that surface. The calculator uses air measurements only."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "dew point calculator",
      "dewpoint calculator",
      "how to calculate dew point"
    ]
  },
  {
    "slug": "lottery-annuity-calculator",
    "title": "Lottery Annuity Calculator",
    "shortTitle": "Lottery Annuity",
    "category": "Finance",
    "description": "Model an escalating lottery payout schedule from supplied total, payment count and assumptions, including discounted value without a live cash-option quote.",
    "intro": "Model an escalating lottery payout schedule from supplied total, payment count and assumptions, including discounted value without a live cash-option quote. Enter the total of all scheduled payments, not a lump-sum cash quote. Choose the number of payments and annual escalation according to the stated game terms you are modeling. The example defaults are editable assumptions rather than a live jackpot. A schedule increasing each year allocates less to the first payment than simply dividing total by payment count. Verify the rules for the actual prize and jurisdiction.",
    "formula": "First payment = total payout / Σ(1+g)ⁱ for i=0…n−1. Payment i = first × (1+g)ⁱ. Present value = Σ payment i/(1+r)^(i+timing).",
    "example": "With a total of 300,000, 3 payments and no escalation, each gross payment is 100,000. At a 10% discount rate and first payment now, gross present value is about 273,553.72. Moving the first payment one year later divides that value by 1.10, giving about 248,685.20.",
    "howTo": [
      "Choose the correct input basis for lottery annuity calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review escalating payments before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review flat tax illustration before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Advertised total and schedule",
        "text": "Enter the total of all scheduled payments, not a lump-sum cash quote. Choose the number of payments and annual escalation according to the stated game terms you are modeling. The example defaults are editable assumptions rather than a live jackpot. A schedule increasing each year allocates less to the first payment than simply dividing total by payment count. Verify the rules for the actual prize and jurisdiction."
      },
      {
        "title": "Escalating payments",
        "text": "The worksheet constructs a geometric sequence whose gross payments sum to the entered total. A zero escalation produces equal installments. Positive escalation creates progressively larger payments while preserving that total. The payment count must be a whole number from one to one hundred, and escalation is bounded to 0–20% per year. It reports the first and last payment so the assumed sequence is easy to inspect."
      },
      {
        "title": "Payment timing",
        "text": "Choose whether the first payment occurs now or one year from now. Later installments are one year apart. Timing changes discounted value without changing the gross sum. A schedule with an immediate first payment resembles an annuity-due convention; a first payment after one year resembles an ordinary annuity. Actual administrative dates can differ, so this annual model is not a day-specific settlement schedule."
      },
      {
        "title": "Discounted value",
        "text": "The discount rate represents your supplied comparison assumption, not a guaranteed return or an official conversion to a cash option. Present value brings each future payment back to the same valuation date. The game’s offered cash amount can depend on its own financing and rules and must be obtained separately. A modeled present value cannot be presented as a current prize cash quote."
      },
      {
        "title": "Flat tax illustration",
        "text": "The optional tax percentage reduces each modeled payment by the same fraction. This is intentionally simple arithmetic: it does not reproduce withholding, progressive brackets, state rules, filing status, deductions or future tax changes. A constant percentage also reduces present value by that same fraction. Use the gross schedule as the starting record and obtain appropriate tax guidance for an actual prize rather than relying on this illustration."
      }
    ],
    "limitations": "The optional tax percentage reduces each modeled payment by the same fraction. This is intentionally simple arithmetic: it does not reproduce withholding, progressive brackets, state rules, filing status, deductions or future tax changes. A constant percentage also reduces present value by that same fraction. Use the gross schedule as the starting record and obtain appropriate tax guidance for an actual prize rather than relying on this illustration.",
    "faqs": [
      {
        "question": "Does it show today’s jackpot?",
        "answer": "No. Supply the advertised total and verify the actual payment terms yourself."
      },
      {
        "question": "Is present value the offered cash option?",
        "answer": "No. It is a discounted scenario using your rate; an actual cash option must come from the lottery operator."
      },
      {
        "question": "Why is the first payment smaller with growth?",
        "answer": "Later payments receive larger shares of the same total, so the first installment must be reduced."
      },
      {
        "question": "Does tax mean final liability?",
        "answer": "No. The flat percentage is a scenario assumption, not jurisdiction-specific tax or withholding computation."
      },
      {
        "question": "What does first payment now change?",
        "answer": "It removes one year of discounting from each installment compared with the after-one-year option."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "lottery annuity calculator"
    ]
  },
  {
    "slug": "feet-inches-calculator",
    "title": "Feet and Inches Calculator",
    "shortTitle": "Feet and Inches",
    "category": "Everyday",
    "description": "Add or subtract two mixed feet-and-inches lengths, with normalized signed output, total inches, decimal feet and metres.",
    "intro": "Add or subtract two mixed feet-and-inches lengths, with normalized signed output, total inches, decimal feet and metres. Enter feet and inches in separate fields for each length. These fields represent components of one measurement, not two unrelated measurements. A blank component is not assumed to be zero: enter an explicit zero when one part is absent. Components must be nonnegative finite numbers. Fractional inches are accepted as decimals, so a half inch is 0.5, not the unparsed expression 1/2.",
    "formula": "Total inches = 12f₁+i₁ ± (12f₂+i₂). Convert the absolute result back with whole feet = floor(|inches|/12); residual inches = |inches|−12×whole feet.",
    "example": "5 ft 8 in plus 2 ft 7 in equals 99 inches, normalized to 8 ft 3 in. Decimal feet are 8.25 and metres are 2.5146. Subtracting 2 ft 7 in from 5 ft 8 in gives 37 inches, or 3 ft 1 in. Inches are carried or borrowed through the total-inch representation.",
    "howTo": [
      "Choose the correct input basis for feet and inches calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review add or subtract before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review using a dimensional result before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Mixed-length entries",
        "text": "Enter feet and inches in separate fields for each length. These fields represent components of one measurement, not two unrelated measurements. A blank component is not assumed to be zero: enter an explicit zero when one part is absent. Components must be nonnegative finite numbers. Fractional inches are accepted as decimals, so a half inch is 0.5, not the unparsed expression 1/2."
      },
      {
        "title": "Add or subtract",
        "text": "Choose the operation before calculating. Subtraction means first complete length minus second complete length. Swapping measurements reverses the sign for subtraction but preserves the total for addition. The calculation first converts each mixed length to inches, performs the chosen operation and then normalizes the result. This avoids hand-carry mistakes when the inch sum exceeds twelve or when subtraction requires borrowing."
      },
      {
        "title": "Normalization and sign",
        "text": "The inch fields may exceed twelve because normalization happens after the operation. Entering zero feet and twenty inches represents one foot eight inches. A negative result is displayed with a minus sign applying to the entire mixed length, not only its feet component. Thus minus one foot three inches means minus fifteen total inches. The total-inch row removes ambiguity when copying a signed result."
      },
      {
        "title": "Decimal feet are different",
        "text": "8 ft 3 in equals 8.25 decimal feet because three inches is one quarter foot. It is not 8.3 feet. The supporting decimal-foot result is useful when a separate worksheet expects one scalar length. The metre conversion uses the international inch definition of 0.0254 m. No survey-foot, architectural drawing scale or physical tolerance is inferred from the entered dimensions."
      },
      {
        "title": "Using a dimensional result",
        "text": "For trim, layouts or material planning, this page performs length arithmetic only. It does not add saw kerf, seams, waste, shrinkage or installation allowances. The components are individually bounded to 10¹² and ordinary floating-point precision applies to fractional values. For long repeated decimal sums, retain the total-inch representation and round only at the stage required by the actual measurement process."
      }
    ],
    "limitations": "For trim, layouts or material planning, this page performs length arithmetic only. It does not add saw kerf, seams, waste, shrinkage or installation allowances. The components are individually bounded to 10¹² and ordinary floating-point precision applies to fractional values. For long repeated decimal sums, retain the total-inch representation and round only at the stage required by the actual measurement process.",
    "faqs": [
      {
        "question": "Can inches be greater than twelve?",
        "answer": "Yes. The result normalizes them into additional feet plus a remaining inch amount."
      },
      {
        "question": "Can I enter half inches?",
        "answer": "Yes, as 0.5. Fraction expressions such as 1/2 are not parsed."
      },
      {
        "question": "What does a negative mixed result mean?",
        "answer": "The sign applies to the whole length. The total-inch row shows the same signed value explicitly."
      },
      {
        "question": "Is 5.8 feet five feet eight inches?",
        "answer": "No. Decimal feet and mixed notation differ. Five feet eight inches is 5.666667 decimal feet approximately."
      },
      {
        "question": "Does it include cutting waste?",
        "answer": "No. It only combines the supplied lengths. Allowances need a separately established calculation."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "inches to feet calculator",
      "feet and inches calculator",
      "inch calculator",
      "feet inches calculator"
    ]
  },
  {
    "slug": "long-division-calculator",
    "title": "Long Division Calculator",
    "shortTitle": "Long Division",
    "category": "Education",
    "description": "Divide written finite decimals with exact scaled-integer arithmetic, visible fractional steps, repeating-digit notation and a bounded decimal expansion.",
    "intro": "Divide written finite decimals with exact scaled-integer arithmetic, visible fractional steps, repeating-digit notation and a bounded decimal expansion. Enter ordinary finite decimal text with a period as decimal separator. Up to sixty whole digits and eighteen decimal places are accepted. A leading sign is allowed, but commas, scientific notation, fraction expressions and already recurring notation are not parsed. Scaling both numbers by the same power of ten preserves their ratio. BigInt arithmetic retains every accepted written digit without first rounding a long input to a browser Number.",
    "formula": "Multiply both inputs by 10ᵖ, where p is their larger decimal-place count. Divide the scaled integers; repeatedly multiply the remainder by ten to obtain each next decimal digit.",
    "example": "12.5 divided by 0.5 becomes 125 divided by 5 after multiplying both numbers by ten, giving 25 exactly. For 1 divided by 6, the fractional process gives digit 1 with remainder 4, then digit 6 with remainder 4 again. The repeated remainder identifies 0.1(6), where parentheses mark the recurring digit.",
    "howTo": [
      "Choose the correct input basis for long division calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review integer stage before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review signs and boundaries before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Written decimals and exact scaling",
        "text": "Enter ordinary finite decimal text with a period as decimal separator. Up to sixty whole digits and eighteen decimal places are accepted. A leading sign is allowed, but commas, scientific notation, fraction expressions and already recurring notation are not parsed. Scaling both numbers by the same power of ten preserves their ratio. BigInt arithmetic retains every accepted written digit without first rounding a long input to a browser Number."
      },
      {
        "title": "Integer stage",
        "text": "The scaled dividend and divisor are shown so the decimal-point shift is reviewable. Their integer quotient truncates toward zero, and the integer remainder carries the dividend’s sign. These two rows obey dividend = divisor × quotient + remainder for the scaled integers. They are distinct from the final decimal quotient and should not be read as a fractional remainder in the original measurement units."
      },
      {
        "title": "Fractional steps",
        "text": "After the whole-number quotient, each step multiplies the nonnegative remainder by ten, extracts one digit and computes the next remainder. The displayed rows expose that process rather than merely returning a decimal string. A zero remainder ends the expansion exactly. Terminating decimals need no trailing recurring marker, while a previously seen remainder identifies a cycle that will continue forever."
      },
      {
        "title": "Repeating and truncated output",
        "text": "Parentheses enclose a detected repeating block. For example, 0.(3) represents recurring threes, while 0.1(6) has a nonrepeating one before recurring sixes. The worksheet generates at most fifty fractional digits. If it reaches that bound without termination or a detected repeat, an ellipsis marks a truncated expansion. The ellipsis does not mean the value terminates or that the final digit was rounded."
      },
      {
        "title": "Signs and boundaries",
        "text": "A zero divisor is rejected. A negative quotient places one sign before the full decimal value, while zero does not retain an unnecessary negative sign. The step rows use magnitudes for readable digit generation; scaled integer quotient and remainder retain their signed convention. This is an educational division worksheet, not a general symbolic algebra system or a rounded arbitrary-precision decimal-expression evaluator."
      }
    ],
    "limitations": "A zero divisor is rejected. A negative quotient places one sign before the full decimal value, while zero does not retain an unnecessary negative sign. The step rows use magnitudes for readable digit generation; scaled integer quotient and remainder retain their signed convention. This is an educational division worksheet, not a general symbolic algebra system or a rounded arbitrary-precision decimal-expression evaluator.",
    "faqs": [
      {
        "question": "Can I enter 0.5 as divisor?",
        "answer": "Yes. Both decimals are scaled to integers using the same power of ten before division."
      },
      {
        "question": "What do parentheses mean?",
        "answer": "They enclose the recurring digit block detected when a remainder repeats."
      },
      {
        "question": "Is an ellipsis a rounded answer?",
        "answer": "No. It marks truncation after fifty generated fractional digits, without rounding the final digit."
      },
      {
        "question": "Can I enter 1/3?",
        "answer": "No. Enter dividend 1 and divisor 3 in separate fields."
      },
      {
        "question": "Why does the integer remainder have a sign?",
        "answer": "BigInt division truncates toward zero and leaves the remainder with the dividend’s sign, preserving the quotient-remainder identity."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "dividing decimals calculator",
      "calculator of division",
      "calculator with remainders",
      "division calculator",
      "divide calculator",
      "long division calculator with steps",
      "calculator with remainder"
    ]
  },
  {
    "slug": "permutation-combination-calculator",
    "title": "Permutation and Combination Calculator",
    "shortTitle": "Permutation and Combination",
    "category": "Education",
    "description": "Count selections or ordered arrangements of distinct items without replacement using exact integer arithmetic for 0 ≤ r ≤ n ≤ 1000.",
    "intro": "Count selections or ordered arrangements of distinct items without replacement using exact integer arithmetic for 0 ≤ r ≤ n ≤ 1000. The available count n describes distinguishable items, and the selected count r describes how many are used. The model selects each item at most once. Repeated picks with replacement, indistinguishable objects and strings with repeated letters require other counting formulas. Define those conditions before selecting a mode rather than using the largest returned number as a universal count.",
    "formula": "nPr = n!/(n−r)!. nCr = n!/[r!(n−r)!]. Permutations distinguish order; combinations count each unordered selection once.",
    "example": "Choosing 3 people from 10 for one committee gives 10C3 = 120 combinations. Assigning three different roles to those same people gives 10P3 = 720 permutations. The factor between them is 3! = 6, representing the possible role orders for each selected trio.",
    "howTo": [
      "Choose the correct input basis for permutation and combination calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review does order matter? before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review counts and probabilities before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Distinct items and replacement",
        "text": "The available count n describes distinguishable items, and the selected count r describes how many are used. The model selects each item at most once. Repeated picks with replacement, indistinguishable objects and strings with repeated letters require other counting formulas. Define those conditions before selecting a mode rather than using the largest returned number as a universal count."
      },
      {
        "title": "Does order matter?",
        "text": "Use combinations when a selected group is the same regardless of listing order. Use permutations when positions, ranks or roles make arrangements different. Selecting three committee members is unordered; assigning president, secretary and treasurer is ordered. The numeric inputs can be identical while the intended count differs by r factorial. The interface labels the chosen interpretation in the result."
      },
      {
        "title": "Exact integer arithmetic",
        "text": "The calculation multiplies integer factors using BigInt. For combinations it uses the smaller of r and n−r and divides at each stage where the recurrence is exact. This avoids floating-point factorial overflow and preserves large integer digits. The output is exact for the entered counts, not a rounded scientific approximation. The upper bound of one thousand keeps browser work and output size controlled."
      },
      {
        "title": "Boundary cases",
        "text": "Selecting no items gives one empty selection or arrangement, so r = 0 returns one. Choosing all n items gives one combination, while permuting all n items gives n factorial. Available and selected counts must be whole numbers satisfying zero through one thousand and r no greater than n. A request to choose more distinct items than exist is rejected rather than treated as a probability of zero."
      },
      {
        "title": "Counts and probabilities",
        "text": "A count is not itself a probability. To form a probability, identify equally likely outcomes and divide a favorable count by the total under the same model. Unequal weights, dependent events and constrained assignments can break a simple counting approach. This page does not generate every arrangement, impose custom restrictions or supply repeated-trial distribution assumptions. Use the separate probability tools only after defining the experiment."
      }
    ],
    "limitations": "A count is not itself a probability. To form a probability, identify equally likely outcomes and divide a favorable count by the total under the same model. Unequal weights, dependent events and constrained assignments can break a simple counting approach. This page does not generate every arrangement, impose custom restrictions or supply repeated-trial distribution assumptions. Use the separate probability tools only after defining the experiment.",
    "faqs": [
      {
        "question": "Which mode is for a committee?",
        "answer": "Combinations, when member order and roles do not matter."
      },
      {
        "question": "Which mode is for ranked positions?",
        "answer": "Permutations, when the same selected items in different positions count separately."
      },
      {
        "question": "Can I use replacement?",
        "answer": "No. Each distinct item is selected at most once in this worksheet."
      },
      {
        "question": "Why does choosing zero give one?",
        "answer": "There is one empty selection, the standard combinatorial boundary case."
      },
      {
        "question": "Are very large answers rounded?",
        "answer": "No. The supported counts use exact BigInt arithmetic and display the full integer."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "permutation calculator",
      "permutations calculator",
      "ncr calculator",
      "combination calculator"
    ]
  },
  {
    "slug": "logarithm-calculator",
    "title": "Logarithm Calculator",
    "shortTitle": "Logarithm",
    "category": "Education",
    "description": "Calculate a real logarithm with any positive base other than one, plus natural/base-ten values and an exponent reconstruction check.",
    "intro": "Calculate a real logarithm with any positive base other than one, plus natural/base-ten values and an exponent reconstruction check. Enter the positive number whose logarithm you want and select its base by typing a positive numeric value. Both are finite and limited to 10¹². Base one is rejected because all powers of one remain one and there is no invertible logarithm. The logarithm answers which exponent produces the entered number under the chosen base; it is not multiplication of the number by the base.",
    "formula": "logᵦ(x) = ln(x)/ln(b), for x > 0, b > 0 and b ≠ 1. The reconstruction is b raised to the calculated logarithm.",
    "example": "For x = 1000 and base 10, the result is 3 because 10³ = 1000. For x = 8 and base 2, the result is also 3 because 2³ = 8. A base of 0.5 and x = 8 gives −3: (0.5)⁻³ = 8.",
    "howTo": [
      "Choose the correct input basis for logarithm calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review change of base before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review numerical sensitivity before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Number and base",
        "text": "Enter the positive number whose logarithm you want and select its base by typing a positive numeric value. Both are finite and limited to 10¹². Base one is rejected because all powers of one remain one and there is no invertible logarithm. The logarithm answers which exponent produces the entered number under the chosen base; it is not multiplication of the number by the base."
      },
      {
        "title": "Change of base",
        "text": "The browser supplies natural logarithms, so this worksheet divides ln(x) by ln(base). That change-of-base identity allows bases such as two, ten or a positive fraction. Natural logarithm and base-ten logarithm are shown separately as reference outputs. They answer different base questions and should not be substituted for the main result without changing the stated base."
      },
      {
        "title": "Fractional bases and signs",
        "text": "A valid base can lie between zero and one. Such an exponential decreases as its exponent increases, reversing the sign pattern familiar from base ten. A logarithm can be negative even though its input must be positive. For bases above one, numbers between zero and one have negative logs; for fractional bases, numbers above one have negative logs. This is a domain feature, not an error."
      },
      {
        "title": "Real domain only",
        "text": "Zero and negative arguments do not have real logarithms in this worksheet. Complex logarithms involve additional conventions and are outside scope. Typed expressions such as e, 2^3 or log(8) are not parsed; supply numeric values. For a natural-base calculation, the separate ln(x) output avoids having to type a rounded representation of Euler’s number."
      },
      {
        "title": "Numerical sensitivity",
        "text": "Bases very close to one have a small natural logarithm denominator. The resulting log can be large and sensitive to small input changes. The exponent-check row can also lose precision in extreme cases. Ordinary floating-point arithmetic and eight-decimal display do not constitute an error bound. Keep the unrounded original input and base when comparing with another implementation or reporting a numerical exercise."
      }
    ],
    "limitations": "Bases very close to one have a small natural logarithm denominator. The resulting log can be large and sensitive to small input changes. The exponent-check row can also lose precision in extreme cases. Ordinary floating-point arithmetic and eight-decimal display do not constitute an error bound. Keep the unrounded original input and base when comparing with another implementation or reporting a numerical exercise. Strictly positive numeric inputs must be at least 0.000000000001; values below that supported floor are rejected.",
    "faqs": [
      {
        "question": "Can the base be less than one?",
        "answer": "Yes, if it is strictly positive. Base one itself is invalid."
      },
      {
        "question": "Can the logarithm be negative?",
        "answer": "Yes. Its sign depends on whether the argument and base lie above or below one."
      },
      {
        "question": "Can I enter a negative argument?",
        "answer": "No. This worksheet computes real logarithms only."
      },
      {
        "question": "How do I get a natural logarithm?",
        "answer": "Read the labeled ln(x) reference output. The page computes it directly without requiring a typed e constant."
      },
      {
        "question": "Does it solve logarithm equations?",
        "answer": "No. It evaluates one numeric logarithm and reference logs; symbolic equations and expressions are not parsed."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "calculate log calculator",
      "log base 2 calculator",
      "log calculator",
      "how to use log on the calculator",
      "log 2 calculator",
      "calculator log 2",
      "logarithmic calculator"
    ]
  },
  {
    "slug": "trip-fuel-cost-calculator",
    "title": "Trip Fuel Cost Calculator",
    "shortTitle": "Trip Fuel Cost",
    "category": "Vehicles",
    "description": "Estimate fuel quantity and trip cost using supplied distance, economy, fuel price and trip count, with explicit US or imperial gallon choices.",
    "intro": "Estimate fuel quantity and trip cost using supplied distance, economy, fuel price and trip count, with explicit US or imperial gallon choices. Select a complete economy basis: kilometres with litres per hundred kilometres, kilometres per litre, miles with US mpg or miles with imperial mpg. The distance field follows that choice. Lower L/100 km means less fuel for the same distance; higher km/L or mpg means less fuel. This direction difference is part of the unit definition, not a contradiction between results.",
    "formula": "For L/100 km: fuel = distance × economy/100. For km/L or mpg: fuel = distance/economy. Cost = fuel × matching unit price × trip count.",
    "example": "A 300 km trip at 7 L/100 km needs 21 litres. At a supplied price of 1.60 per litre, fuel cost is 33.60 for one trip or 67.20 for two identical trips. In a separate US-gallon example, 300 miles at 30 US mpg uses 10 US gallons; the price must also be per US gallon.",
    "howTo": [
      "Choose the correct input basis for trip fuel cost calculator and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review price-unit pairing before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review fuel-only budget before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Match distance and economy",
        "text": "Select a complete economy basis: kilometres with litres per hundred kilometres, kilometres per litre, miles with US mpg or miles with imperial mpg. The distance field follows that choice. Lower L/100 km means less fuel for the same distance; higher km/L or mpg means less fuel. This direction difference is part of the unit definition, not a contradiction between results."
      },
      {
        "title": "Price-unit pairing",
        "text": "For litre modes, price must be per litre. For US mpg, use price per US gallon; for imperial mpg, use price per imperial gallon. A US gallon and an imperial gallon have different volumes. This page deliberately does not convert a mismatched price behind the scenes. Currency is supplied by you and stays unchanged in output. No pump-price feed, regional tax or exchange rate is loaded."
      },
      {
        "title": "Distance and trips",
        "text": "Enter the full distance for one modeled trip, including return travel if that belongs in the trip definition. Trip count multiplies identical trips by a whole number. Do not enter round-trip distance and then multiply by two for the same journey. For routes with different distances or economy assumptions, calculate them separately rather than using the count field as if every route were identical."
      },
      {
        "title": "Real-world economy",
        "text": "Use a recent observed average when it matches the route, vehicle and load. Advertised economy can differ from traffic, terrain, weather and idling conditions. A single average does not describe changes along the route. Calculate a conservative second scenario with a less favorable economy assumption if uncertainty matters, while keeping the original distance and price basis visible for comparison."
      },
      {
        "title": "Fuel-only budget",
        "text": "The result includes modeled fuel only. Tolls, parking, maintenance, depreciation and driver time are not part of the total. Zero distance returns zero fuel and cost, while cost per distance is explicitly undefined for that case. Fuel economy must be positive, and the supported numeric bounds reject nonfinite or excessively large entries. An estimate cannot guarantee the actual fuel used or the price at your refueling stop."
      }
    ],
    "limitations": "The result includes modeled fuel only. Tolls, parking, maintenance, depreciation and driver time are not part of the total. Zero distance returns zero fuel and cost, while cost per distance is explicitly undefined for that case. Fuel economy must be positive, and the supported numeric bounds reject nonfinite or excessively large entries. An estimate cannot guarantee the actual fuel used or the price at your refueling stop. Strictly positive numeric inputs must be at least 0.000000000001; values below that supported floor are rejected.",
    "faqs": [
      {
        "question": "Does this use a current gas price?",
        "answer": "No. Enter your own price in the unit required by the selected mode."
      },
      {
        "question": "Are US and imperial mpg interchangeable?",
        "answer": "No. Their gallons differ. Match both economy and price to the selected gallon system."
      },
      {
        "question": "Should I include the return journey?",
        "answer": "Yes, if your one-trip definition includes it. Avoid counting that return distance again through trip count."
      },
      {
        "question": "Can I use L/100 km?",
        "answer": "Yes. That mode multiplies distance by economy and divides by one hundred."
      },
      {
        "question": "Does it include vehicle wear?",
        "answer": "No. It covers fuel quantity and supplied fuel price only."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
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
    ]
  },
  {
    "slug": "big-number-calculator",
    "title": "Big Number Calculator — Exact Integers",
    "shortTitle": "Big Number",
    "category": "Education",
    "description": "Add, subtract, multiply or divide signed integers up to 500 digits without floating-point rounding, with a labeled integer quotient and remainder.",
    "intro": "Add, subtract, multiply or divide signed integers up to 500 digits without floating-point rounding, with a labeled integer quotient and remainder. Use signed whole-number strings containing up to five hundred digits in each field. A leading plus or minus sign is accepted. Commas, spaces inside a number, decimal points and scientific notation are rejected rather than removed ambiguously. Leading zeros do not change the integer value. Both fields are text inputs so long integers remain strings until the exact BigInt parser reads them.",
    "formula": "Operations use BigInt integer arithmetic. For division: A = B×q+r, q truncates toward zero, |r| < |B| and r has the dividend’s sign when nonzero.",
    "example": "9007199254740993 plus 1 returns exactly 9007199254740994, including digits ordinary floating-point input can lose. For −17 divided by 5, the integer quotient is −3 and remainder is −2: 5×(−3)+(−2) = −17. The division mode does not claim a fractional decimal quotient.",
    "howTo": [
      "Choose the correct input basis for big number calculator — exact integers and enter the values described below. The demonstration defaults are examples, not independently verified personal measurements.",
      "Review precision beyond number before submitting. Match the selected units and roles to the original source record, including any signs or percentage conventions.",
      "Click Calculate result to submit the current inputs. Editing a field preserves the previous submitted output until you calculate again; the status message identifies that pending change.",
      "Compare the labeled result with the worked example and independent verification checks. Review limits and verification before copying it into another worksheet."
    ],
    "considerations": [
      {
        "title": "Enter integer text",
        "text": "Use signed whole-number strings containing up to five hundred digits in each field. A leading plus or minus sign is accepted. Commas, spaces inside a number, decimal points and scientific notation are rejected rather than removed ambiguously. Leading zeros do not change the integer value. Both fields are text inputs so long integers remain strings until the exact BigInt parser reads them."
      },
      {
        "title": "Precision beyond Number",
        "text": "Ordinary browser Number arithmetic cannot preserve every integer beyond its safe-integer range. This worksheet instead parses the accepted text directly as BigInt. Addition, subtraction and multiplication retain all integer digits, even when the result is larger than either input. The digit-count row counts the magnitude’s decimal digits and excludes a negative sign. It is not a significant-figures assessment of a measured quantity."
      },
      {
        "title": "Choose the operation",
        "text": "The selector determines whether the first integer is added to, reduced by, multiplied by or divided by the second. Subtraction and division depend on order. Addition and multiplication do not. The browser performs only the selected operation; typed expressions are not evaluated. A five-hundred-digit input bound controls work, but multiplication can legitimately produce a result with up to one thousand digits."
      },
      {
        "title": "Integer division convention",
        "text": "Division returns an integer quotient truncated toward zero and a signed remainder. For negative dividends this differs from mathematical floor division, and the remainder may be negative. Both forms can be useful if their convention is explicit. This worksheet follows JavaScript BigInt semantics and shows the remainder to preserve the exact identity. A decimal quotient belongs in the separate long-division worksheet."
      },
      {
        "title": "Limits and verification",
        "text": "A zero divisor is rejected. Negative integers and zero operands are supported for the other operations. The page does not compute powers, roots, fractions, scientific expressions or cryptographic transforms. Exact arithmetic does not verify that copied source digits are correct. When pasting a long identifier-like number, check its sign, length and final digits against the source before saving or reusing the result."
      }
    ],
    "limitations": "A zero divisor is rejected. Negative integers and zero operands are supported for the other operations. The page does not compute powers, roots, fractions, scientific expressions or cryptographic transforms. Exact arithmetic does not verify that copied source digits are correct. When pasting a long identifier-like number, check its sign, length and final digits against the source before saving or reusing the result.",
    "faqs": [
      {
        "question": "Are decimals accepted?",
        "answer": "No. This tool handles signed integers. Use the long-division page for its separate finite-decimal input scope."
      },
      {
        "question": "Does multiplication round large results?",
        "answer": "No. Supported inputs are parsed and calculated with exact BigInt integer arithmetic."
      },
      {
        "question": "Is division a decimal operation?",
        "answer": "No. It returns the integer quotient truncated toward zero and the exact remainder."
      },
      {
        "question": "Can a remainder be negative?",
        "answer": "Yes, when the dividend is negative. That signed convention preserves A = Bq+r."
      },
      {
        "question": "Can I enter scientific notation?",
        "answer": "No. Write the full integer digits without exponent notation or separators."
      }
    ],
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-05",
    "keywords": [
      "big number calculator",
      "big calculator",
      "calculator for very large numbers",
      "huge number calculator"
    ]
  }
];
