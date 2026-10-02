import type {Audit} from "./semrush-batch-one-audit";
export const roadmap166Audit:Record<string,Audit> = {
  "vpd-calculator": {
    "keywordThemes": [
      "vpd calculator",
      "rh calculator"
    ],
    "interpretation": "Liquid-water approximation over 0\u201350 \u00b0C; simultaneous user measurements only. No crop target, ice formula or equipment sizing. Inputs are processed locally; no weather feed is loaded.",
    "scenarios": [
      "25 \u00b0C and 60% RH: air VPD about 1.2671 kPa.",
      "Equal air and leaf temperatures: the two deficits agree.",
      "Dew point equals air temperature: calculated RH is 100%."
    ],
    "mistakes": [
      "Entering Fahrenheit as Celsius.",
      "Confusing dew-point temperature with a humidity percentage.",
      "Treating a physical deficit as a universal plant target."
    ],
    "verification": "Check the equal-temperature case, confirm es(air) minus actual pressure equals air VPD, and compare RH from a known dew point with an independent meteorological reference using the same equation.",
    "sourceNote": "FAO Irrigation and Drainage Paper 56, meteorological data: saturation and actual vapor-pressure relationships.",
    "sourceUrl": "https://www.fao.org/4/x0490e/x0490e07.htm",
    "relatedCalculators": [
      {
        "slug": "btu-calculator",
        "title": "BTU Calculator"
      },
      {
        "slug": "epoxy-resin-calculator",
        "title": "Epoxy Resin Volume Calculator"
      },
      {
        "slug": "soil-calculator",
        "title": "Soil and Loam Calculator"
      }
    ]
  },
  "goat-gestation-calculator": {
    "keywordThemes": [
      "goat gestation calculator"
    ],
    "interpretation": "General 150-day planning center with a 145\u2013155-day window, not a pregnancy test, individual forecast or veterinary assessment. Date inputs stay on this device.",
    "scenarios": [
      "2026-10-02 plus 150 days: 2027-03-01.",
      "The same record plus 145 days: 2027-02-24.",
      "A two-week exposure period requires separate earliest and latest date calculations."
    ],
    "mistakes": [
      "Using pregnancy-confirmation day as breeding day.",
      "Interpreting the center as a guaranteed due date.",
      "Discarding uncertainty in a multi-day exposure record."
    ],
    "verification": "Check the day difference with an independent calendar. Preserve day-zero counting and compare both endpoints with the original breeding record, including any uncertainty in that record.",
    "sourceNote": "Penn State Extension goat-production guidance describes general gestation ranges; veterinary evaluation governs individual care.",
    "sourceUrl": "https://extension.psu.edu/dairy-goat-production",
    "relatedCalculators": [
      {
        "slug": "dog-pregnancy-calculator",
        "title": "Dog Pregnancy Calculator"
      },
      {
        "slug": "mare-gestation-calculator",
        "title": "Mare Gestation Calculator"
      },
      {
        "slug": "date-from-today-calculator",
        "title": "Date From Today Calculator"
      }
    ]
  },
  "gas-oil-mix-calculator": {
    "keywordThemes": [
      "50 to 1 gas oil mix calculator"
    ],
    "interpretation": "User-verified gasoline:oil ratio by volume, not product selection or handling guidance. Gallon definitions are explicit; no mass ratio or final-blend input. Calculation is local.",
    "scenarios": [
      "5 L at 50:1: 100 mL oil.",
      "1 US gallon at 50:1: 75.7082 mL oil.",
      "1 imperial gallon at 50:1: 90.9218 mL oil."
    ],
    "mistakes": [
      "Using final blend volume as gasoline input.",
      "Confusing fluid ounces with ounces by weight.",
      "Assuming the default ratio fits every engine."
    ],
    "verification": "Divide gasoline by calculated oil after converting both to litres. The quotient must match the ratio. Check one-litre and doubled-volume cases before using a measured batch.",
    "sourceNote": "STIHL manufacturer guidance explains gasoline and two-cycle oil mixing; check the current manual for your equipment.",
    "sourceUrl": "https://www.stihlusa.com/en/guides-projects/how-to-use-start/mixing-oil-and-gasoline",
    "relatedCalculators": [
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison"
      }
    ]
  },
  "macro-calculator": {
    "keywordThemes": [
      "bulking calculator",
      "calorie and macro calculator",
      "calorie calculator and macros",
      "calculate macros for weight loss",
      "bulking calorie calculator",
      "calculate macros",
      "how to calculate my macros for weight loss",
      "how do i calculate macros",
      "muscle gain nutrition calculator",
      "macronutrients calculator",
      "macro calculator for women",
      "how do you calculate your macros",
      "cutting calculator",
      "macro calculator for fat loss",
      "calorie calculator for muscle gain"
    ],
    "interpretation": "Allocation of supplied daily kcal, not TDEE estimation, diet prescription or outcome prediction. Conventional 4/4/9 factors; no child, pregnancy, breastfeeding or sex-specific needs model. Values are processed locally.",
    "scenarios": [
      "2,000 kcal at 25% protein: 125 g protein.",
      "2,000 kcal at 25% fat: about 55.6 g fat.",
      "A supplied 10% surplus gives 2,200 kcal before allocation."
    ],
    "mistakes": [
      "Treating energy percentage as a percentage of food weight.",
      "Assuming a user-entered deficit is a prescribed intake.",
      "Using the result as a prediction of muscle gain or fat loss."
    ],
    "verification": "Reconstruct energy by multiplying protein and carbohydrate grams by four and fat grams by nine. Their total should equal the scenario kcal before display rounding. Check that all energy shares sum to one hundred percent.",
    "sourceNote": "USDA National Agricultural Library FNIC describes conventional protein, carbohydrate and fat energy factors.",
    "sourceUrl": "https://www.nal.usda.gov/programs/fnic",
    "relatedCalculators": [
      {
        "slug": "calories-burned-calculator",
        "title": "Calories Burned Calculator"
      },
      {
        "slug": "breastfeeding-calorie-calculator",
        "title": "Breastfeeding General Calorie Addition"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "macroeconomics-calculator": {
    "keywordThemes": [
      "macroeconomics calculator"
    ],
    "interpretation": "User-supplied expenditure identity, no live data or forecast. Same-period, same-scale accounting basis required; chained real components can be non-additive. Educational currency-neutral arithmetic.",
    "scenarios": [
      "1,000 + 200 + 300 + 150 \u2212 180 = 1,470.",
      "Exports 150 minus imports 180 gives net exports \u221230.",
      "Scaling every component from millions to billions scales the total by the same factor."
    ],
    "mistakes": [
      "Mixing quarterly totals and annualized series.",
      "Adding government transfers as if all were government purchases.",
      "Treating a chained real component sum as an exact official aggregate."
    ],
    "verification": "Reconcile net exports first, then add it to C + I + G. Compare with the supplied dataset only after checking definitions, period, price convention, scale and release vintage.",
    "sourceNote": "U.S. Bureau of Economic Analysis explains the expenditure approach and why imports are subtracted.",
    "sourceUrl": "https://www.bea.gov/news/blog/2025-06-03/expenditures-approach-measuring-gdp",
    "relatedCalculators": [
      {
        "slug": "inflation-adjusted-return-calculator",
        "title": "Inflation-Adjusted Return Calculator"
      },
      {
        "slug": "npv-calculator",
        "title": "Net Present Value Calculator"
      },
      {
        "slug": "effective-interest-rate-calculator",
        "title": "Effective Interest Rate Calculator"
      }
    ]
  },
  "vinegar-carbon-dosing-calculator": {
    "keywordThemes": [
      "vinegar carbon dosing calculator ml per ppm nitrate"
    ],
    "interpretation": "Protocol volume/acidity equivalence only; no safe dose, start rate, escalation or mL-per-ppm nitrate model. No product compatibility or biological response is established. Inputs stay local.",
    "scenarios": [
      "Hypothetical 4 mL at 100 L scales to 8 mL at 200 L with unchanged compatible acidity.",
      "Equal water volume and acidity retain the supplied amount.",
      "A zero supplied quantity gives zero; no default dose is invented."
    ],
    "mistakes": [
      "Treating a scaled amount as a safe-dose recommendation.",
      "Using incompatible acidity-label definitions.",
      "Claiming a fixed nitrate reduction from arithmetic equivalence."
    ],
    "verification": "Reverse the water and acidity multipliers to recover the reference quantity. Preserve the interval explicitly and independently review the protocol before any application; this check validates arithmetic only.",
    "sourceNote": "The formula is explicit proportional volume and labeled-acidity arithmetic. Randy Holmes-Farley\u2019s original reef-chemistry discussion notes system-specific responses; it is not treated as a universal dosing conversion.",
    "sourceUrl": "https://www.reef2reef.com/threads/vinegar-dosing-minimums.180288/",
    "relatedCalculators": [
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator"
      },
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "radical-expression-simplifier": {
    "keywordThemes": [
      "simplifying radical expressions solver"
    ],
    "interpretation": "At most 20 integer square-root terms and constants, 1,000 characters, radicands \u226410\u2079, original coefficients/constants \u226410\u2076 in absolute value. No general CAS, variables, fractions or complex roots. Local deterministic parsing.",
    "scenarios": [
      "2sqrt(72)-sqrt(8)+3 = 3 + 10\u221a2.",
      "sqrt(50)+sqrt(8) = 7\u221a2.",
      "sqrt(9)-3 = 0."
    ],
    "mistakes": [
      "Adding radicands directly across separate roots.",
      "Combining roots with different square-free radicands.",
      "Entering an unsupported expression and assuming it is a general symbolic solver."
    ],
    "verification": "Factor each radicand into an extracted square and a square-free remainder, then collect coefficients. Optionally compare numerical sums with the separate square-root calculator as a secondary check.",
    "sourceNote": "OpenStax elementary algebra explains square-root properties and simplifying radicals; the bounded grammar and factorization method are disclosed here.",
    "sourceUrl": "https://openstax.org/books/elementary-algebra-2e/pages/9-2-simplify-square-roots",
    "relatedCalculators": [
      {
        "slug": "square-root-calculator",
        "title": "Square Root Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "fraction-calculator",
        "title": "Fraction Calculator"
      }
    ]
  },
  "redacted-text-generator": {
    "keywordThemes": [
      "redacted text generator"
    ],
    "interpretation": "Literal plain-text replacements only, no automatic PII detection, document metadata processing or anonymization guarantee. Maximum 100,000 characters and 100 phrases. Local processing; original remains in the input until cleared.",
    "scenarios": [
      "Listed email and name: two marker replacements.",
      "No matching phrases: zero replacements; review the unchanged output.",
      "Overlapping listed phrases: longest literal candidate is considered first."
    ],
    "mistakes": [
      "Treating visual covering as removal from an original document.",
      "Assuming the phrase list automatically recognizes every identity variant.",
      "Downloading a previous result after edits without generating again."
    ],
    "verification": "Search the generated text for intended phrases and variants, inspect the match count, and open the downloaded TXT independently. Confirm that only the reviewed output was saved and evaluate remaining contextual identification risks.",
    "sourceNote": "The implementation uses ECMAScript literal-escaped regular-expression replacement and a UTF-8 text Blob; it does not claim format-level PDF redaction.",
    "sourceUrl": "https://tc39.es/ecma262/#sec-string.prototype.replace",
    "relatedCalculators": [
      {
        "slug": "word-character-counter",
        "title": "Word and Character Counter",
        "path": "/generator-tools/word-character-counter/"
      },
      {
        "slug": "text-to-docx",
        "title": "Plain Text to DOCX",
        "path": "/document-tools/text-to-docx/"
      },
      {
        "slug": "text-to-pdf",
        "title": "Plain Text to PDF",
        "path": "/document-tools/text-to-pdf/"
      },
      {
        "slug": "superscript-generator",
        "title": "Superscript Text Generator"
      }
    ]
  },
  "wedding-liquor-calculator": {
    "keywordThemes": [
      "liquor calculator wedding",
      "liquor wedding calculator"
    ],
    "interpretation": "Supplied adult-serving plan only; no recommended intake, standard-drink conversion, intoxication estimate or service-law determination. Single pour and bottle size; no hidden allowance. Inputs stay local.",
    "scenarios": [
      "100 \u00d7 1 \u00d7 40% \u00d7 30 mL = 1,200 mL, requiring two 750 mL bottles.",
      "A zero spirit share gives zero spirit bottles.",
      "Doubling the supplied spirit pour doubles required spirit volume before bottle rounding."
    ],
    "mistakes": [
      "Entering full cocktail volume as liquor volume.",
      "Including every attendee regardless of adulthood or drinking choice.",
      "Treating purchasing arithmetic as a recommendation to consume that amount."
    ],
    "verification": "Reconstruct total spirit volume from planned spirit servings and pour size. Verify that the whole-bottle quantity covers that volume and that one fewer bottle would not, except when the result is zero.",
    "sourceNote": "NIAAA explains that standard drinks depend on pure alcohol and differ from customary serving sizes. This tool counts supplied recipe volume, not standard drinks or safe intake.",
    "sourceUrl": "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink",
    "relatedCalculators": [
      {
        "slug": "split-bill-calculator",
        "title": "Split Bill Calculator"
      },
      {
        "slug": "tip-calculator",
        "title": "Tip Calculator"
      },
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator"
      }
    ]
  },
  "abg-calculator": {
    "keywordThemes": [
      "abg calculator"
    ],
    "interpretation": "Educational arithmetic only, no diagnosis, compensation model, albumin correction or treatment advice. Same-time compatible laboratory basis and stated units required. Editorial source review is not clinician validation. Inputs are processed locally.",
    "scenarios": [
      "Teaching values 140 \u2212 104 \u2212 24 give an uncorrected gap of 12 mmol/L.",
      "Bicarbonate 24 and PaCO\u2082 40 give pH about 7.401 under the stated equation.",
      "A measured pH difference is an arithmetic comparison without a clinical cutoff."
    ],
    "mistakes": [
      "Entering oxygen pressure instead of carbon dioxide pressure.",
      "Mixing kPa with a coefficient specified for mmHg.",
      "Treating an uncorrected gap or equation estimate as a diagnosis."
    ],
    "verification": "Recalculate the subtraction directly and evaluate the base-ten equation independently. Confirm laboratory units, timestamps and whether bicarbonate was measured or calculated before interpreting agreement with the pH report.",
    "sourceNote": "Merck Manual Professional acid-base overview explains the anion-gap definition and the need for contextual interpretation; no universal reference range is applied here.",
    "sourceUrl": "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "blood-pressure-by-age-calculator",
        "title": "Adult Blood Pressure Category Calculator"
      },
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean and Standard Deviation Calculator"
      }
    ]
  }
};
