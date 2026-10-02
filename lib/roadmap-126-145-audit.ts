import type {Audit} from "./semrush-batch-one-audit";
export const roadmap126Audit: Record<string,Audit> = {
  "calories-burned-calculator": {
    "keywordThemes": [
      "kcal burned walking calculator",
      "calories burned calculator",
      "calculate bike calories",
      "walking calories burned calculator"
    ],
    "interpretation": "Adult MET approximation, not measured individual expenditure, weight-loss prediction or exercise prescription. Step mode requires measured walking cadence; the treadmill preset is level walking only. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "70 kg, 30 min, 3.8 MET walking — 139.65 gross kcal.",
      "3,000 walking steps at 100 steps/min — 30 minutes before applying the selected walking MET.",
      "70 kg, 30 min, 4 MET leisure cycling — 147 gross kcal."
    ],
    "mistakes": [
      "Treating steps alone as a calorie measurement.",
      "Comparing gross calories with a device’s active-only value.",
      "Using a level walking preset for hills or a different treadmill workload."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: At 70 kg, 30 minutes of level walking using 3.8 MET estimates 139.65 gross kcal and 102.9 kcal above a 1-MET resting baseline. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Adult MET approximation, not measured individual expenditure, weight-loss prediction or exercise prescription. Step mode requires measured walking cadence; the treadmill preset is level walking only.",
    "relatedCalculators": [
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "steps-to-miles-calculator",
        "title": "Steps To Miles Calculator"
      },
      {
        "slug": "body-fat-calculator",
        "title": "Body Fat Calculator"
      }
    ],
    "sourceUrl": "https://pacompendium.com/adult-compendium/"
  },
  "pine-straw-calculator": {
    "keywordThemes": [
      "pine straw calculator"
    ],
    "interpretation": "Coverage-based material estimate only. Bale sizes and application depths vary; no universal straw density, weed-control guarantee or supplier quotation is assumed. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "200 ft² with 50 ft²/bale and no allowance — four bales.",
      "Same bed with 10% allowance — 4.4 theoretical bales, five whole bales.",
      "Supplier coverage falls to 40 ft²/bale — 5.5 theoretical bales with 10% allowance, six whole bales."
    ],
    "mistakes": [
      "Using coverage specified for a different depth.",
      "Mixing square yards with square feet.",
      "Confusing purchasing allowance with physical bed area."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: A 20 by 10 ft bed, 50 ft² per bale and 10% allowance needs 220 ft² of coverage, or 4.4 theoretical bales rounded up to five. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Coverage-based material estimate only. Bale sizes and application depths vary; no universal straw density, weed-control guarantee or supplier quotation is assumed.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "soil-calculator",
        "title": "Soil Calculator"
      },
      {
        "slug": "yardage-calculator",
        "title": "Yardage Calculator"
      }
    ]
  },
  "ohms-law-calculator": {
    "keywordThemes": [
      "ohm calculator",
      "ohm’s law calculator and resistor color codes",
      "ohm load calculation",
      "100 ohm resistor color code"
    ],
    "interpretation": "Ideal resistive DC arithmetic and supported four-band nominal codes only. No AC impedance, circuit safety, wiring design or component-rating approval. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "12 V and 0.5 A — 24 Ω and 6 W.",
      "12 V and 24 Ω — 0.5 A and 6 W.",
      "1,000 Ω with gold tolerance — brown, black, red, gold."
    ],
    "mistakes": [
      "Entering milliamperes as amperes.",
      "Treating a nonlinear or AC load as an ideal DC resistor.",
      "Inferring a resistor’s power rating from its color bands."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: 12 V across a load carrying 0.5 A implies 24 Ω and 6 W. A 100 Ω four-band resistor at ±5% is brown, black, brown, gold. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Ideal resistive DC arithmetic and supported four-band nominal codes only. No AC impedance, circuit safety, wiring design or component-rating approval.",
    "relatedCalculators": [
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "decimals-calculator",
        "title": "Decimals Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      }
    ],
    "sourceUrl": "https://openstax.org/books/physics/pages/19-1-ohms-law",
    "secondarySourceUrl": "https://www.vishay.com/doc/?28729="
  },
  "fence-post-depth-calculator": {
    "keywordThemes": [
      "fence post depth calculator"
    ],
    "interpretation": "Planning guideline only. Local depth, soil, frost, wind, gate loads and installation details must be independently verified; no structural or excavation-safety approval. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "6 ft exposed, one-third guideline — 24 in embedment.",
      "6 ft exposed, one-half guideline — 36 in embedment.",
      "Local entered minimum 40 in — 40 in embedment even if the guideline is shallower."
    ],
    "mistakes": [
      "Applying the fraction to total purchased length.",
      "Treating a planning estimate as code compliance.",
      "Adding gravel thickness to post length instead of hole depth."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: A 6 ft exposed post using one-third embedment gives 24 in in the ground. Adding a 6 in gravel layer gives a 30 in excavation before other design requirements. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Planning guideline only. Local depth, soil, frost, wind, gate loads and installation details must be independently verified; no structural or excavation-safety approval.",
    "relatedCalculators": [
      {
        "slug": "stud-calculator",
        "title": "Stud Calculator"
      },
      {
        "slug": "concrete-calculator",
        "title": "Concrete Calculator"
      },
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      }
    ],
    "sourceUrl": "https://www.quikrete.com/athome/settingpostsinstructions.asp"
  },
  "lead-time-calculator": {
    "keywordThemes": [
      "lead time calculator"
    ],
    "interpretation": "Sequential calendar-day sum only. No parallel-stage scheduling, holiday calendar, delivery promise, statistical lead-time percentile or automatic inventory policy. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "1 + 5 + 3 + 1 days — ten sequential calendar days.",
      "Transit rises from 3 to 7 days — total increases by four days.",
      "Parallel production and administration — do not sum their overlapping time without a dependency model."
    ],
    "mistakes": [
      "Mixing working days and calendar days.",
      "Adding overlapping stages twice.",
      "Ending at arrival while omitting receiving and inspection."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: One day of processing, five production days, three transit days and one receiving day total ten calendar days when every stage follows the previous one. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Sequential calendar-day sum only. No parallel-stage scheduling, holiday calendar, delivery promise, statistical lead-time percentile or automatic inventory policy.",
    "relatedCalculators": [
      {
        "slug": "inventory-reorder-point-calculator",
        "title": "Inventory Reorder Point Calculator"
      },
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "productivity-calculator",
        "title": "Productivity Calculator"
      }
    ]
  },
  "recessed-light-calculator": {
    "keywordThemes": [
      "recessed light calculator"
    ],
    "interpretation": "Average lumen-method estimate only. No universal lux target, derived utilization factor, photometric layout, fixture spacing, code compliance or electrical installation design. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "20 m², 800 lm, 150 lux, factor 0.7 — six fixtures.",
      "Same inputs with factor 1 — four fixtures.",
      "Six fixtures in the baseline room — approximately 168 lux average under the 0.7 factor."
    ],
    "mistakes": [
      "Entering electrical watts instead of lumens.",
      "Assuming a fixture count defines a lighting layout.",
      "Treating the default lux or factor as a universal requirement."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: A 5 by 4 m room, 800 lm fixtures, 150 lux target and a 0.7 combined factor needs about 5.36 fixtures, rounded to six, giving an estimated 168 lux average. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Average lumen-method estimate only. No universal lux target, derived utilization factor, photometric layout, fixture spacing, code compliance or electrical installation design.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "surface-area-calculator",
        "title": "Surface Area Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      }
    ],
    "sourceUrl": "https://www.energy.gov/sites/default/files/2024-05/femp-energy-efficiency-indoor-environmental-quality-assessment-guide.pdf"
  },
  "partial-fraction-calculator": {
    "keywordThemes": [
      "partial fraction calculator"
    ],
    "interpretation": "Monic denominator with 1–6 supplied real linear roots only; numerator up to degree eight. No automatic factoring or irreducible quadratic factors. Displayed numerical coefficients are rounded. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "1/(x²−1) — 0.5/(x−1) − 0.5/(x+1).",
      "1/(x−1)² — first-power coefficient zero, second-power coefficient one.",
      "x²/(x−1) — polynomial quotient x+1 and remainder 1/(x−1)."
    ],
    "mistakes": [
      "Leaving out zero coefficients for missing powers.",
      "Entering factor constants instead of roots.",
      "Dropping the polynomial quotient or original excluded values."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: Numerator coefficients 1 and roots 1, −1 represent 1/(x²−1), decomposed as 0.5/(x−1) − 0.5/(x+1), excluding x=±1. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Monic denominator with 1–6 supplied real linear roots only; numerator up to degree eight. No automatic factoring or irreducible quadratic factors. Displayed numerical coefficients are rounded.",
    "relatedCalculators": [
      {
        "slug": "fraction-calculator",
        "title": "Fraction Calculator"
      },
      {
        "slug": "decimals-calculator",
        "title": "Decimals Calculator"
      },
      {
        "slug": "implicit-differentiation-calculator",
        "title": "Implicit Differentiation Calculator"
      }
    ],
    "sourceUrl": "https://openstax.org/books/calculus-volume-2/pages/3-4-partial-fractions"
  },
  "implicit-differentiation-calculator": {
    "keywordThemes": [
      "implicit differentiation calculator"
    ],
    "interpretation": "Expanded polynomial sums in x and y, total degree at most twelve, bounded coefficients and coordinates only. No general function parser, equation solving, branch selection or singular-point classification. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "x²+y²=25 at (3,4) — slope −0.75.",
      "Same circle at (5,0) — F_y=0, so the finite formula is undefined.",
      "Same circle at (1,1) — residual −23; point is not on the curve."
    ],
    "mistakes": [
      "Entering an unsupported function and assuming it was interpreted.",
      "Calling a partial-derivative ratio at an off-curve point the curve’s slope.",
      "Assuming a zero denominator alone classifies a singular point."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: For x²+y²=25, dy/dx=−2x/(2y). At (3,4), the curve residual is zero and the slope is −0.75. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Expanded polynomial sums in x and y, total degree at most twelve, bounded coefficients and coordinates only. No general function parser, equation solving, branch selection or singular-point classification.",
    "relatedCalculators": [
      {
        "slug": "partial-fraction-calculator",
        "title": "Partial Fraction Calculator"
      },
      {
        "slug": "decimals-calculator",
        "title": "Decimals Calculator"
      },
      {
        "slug": "surface-area-calculator",
        "title": "Surface Area Calculator"
      }
    ],
    "sourceUrl": "https://openstax.org/books/calculus-volume-1/pages/3-8-implicit-differentiation"
  },
  "greek-gematria-calculator": {
    "keywordThemes": [
      "gematria calculator",
      "greek gematria calculator"
    ],
    "interpretation": "Greek letter-value sum only. No Hebrew or English cipher, Latin transliteration, numeral-string parsing, digit reduction, prediction or claim about textual authenticity. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "αβγ — 1+2+3 totals six.",
      "ΑΒΓ — case normalization gives the same total.",
      "σς — two sigma forms total 400."
    ],
    "mistakes": [
      "Comparing results from different alphabets or ciphers.",
      "Using Latin transliteration instead of Greek spelling.",
      "Treating equal totals as evidence of a predictive relationship."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: Greek αβγ totals 1+2+3=6. Uppercase ΑΒΓ gives the same result; final sigma ς and ordinary sigma σ both contribute 200. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Greek letter-value sum only. No Hebrew or English cipher, Latin transliteration, numeral-string parsing, digit reduction, prediction or claim about textual authenticity.",
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
        "slug": "decimals-calculator",
        "title": "Decimals Calculator"
      }
    ],
    "sourceUrl": "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/"
  },
  "time-off-calculator": {
    "keywordThemes": [
      "time off calculator"
    ],
    "interpretation": "Fixed-rate projection with a cap applied before all planned leave. No dated ledger, carryover expiry, legal entitlement, employer approval or changing accrual rates. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "40 current hours + 4×6 accrual − 16 leave — 48 hours.",
      "Same inputs with cap 50 — 34 hours after leave.",
      "Planned leave 70 with a 64-hour pre-leave balance — six hours short."
    ],
    "mistakes": [
      "Treating six pay periods as six months.",
      "Assuming a universal eight-hour leave day.",
      "Applying the projection’s cap timing to a different employer policy."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: 40 current hours plus four hours for each of six periods gives 64 hours before leave. Taking 16 hours leaves 48 hours when the cap is 80. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Fixed-rate projection with a cap applied before all planned leave. No dated ledger, carryover expiry, legal entitlement, employer approval or changing accrual rates.",
    "relatedCalculators": [
      {
        "slug": "work-hours-calculator",
        "title": "Work Hours Calculator"
      },
      {
        "slug": "paycheck-hours-calculator",
        "title": "Paycheck Hours Calculator"
      },
      {
        "slug": "prorated-salary-calculator",
        "title": "Prorated Salary Calculator"
      }
    ]
  },
  "decimals-calculator": {
    "keywordThemes": [
      "decimals calculator"
    ],
    "interpretation": "Plain finite-decimal inputs up to 150 characters each, four operations and 0–30 displayed places. No expression evaluation, recurring-input notation or policy-specific rounding requirement. The examples identify the method and input basis, so the result can be checked without guessing a hidden convention.",
    "scenarios": [
      "0.1 + 0.2 — exact 0.3 and fraction 3/10.",
      "1 ÷ 3 at ten places — rounded 0.3333333333 and fraction 1/3.",
      "−1.25 + 0 at one place — −1.3 under half-away-from-zero rounding."
    ],
    "mistakes": [
      "Typing separators or scientific notation into a plain-decimal field.",
      "Confusing displayed rounding with the exact underlying fraction.",
      "Assuming all institutions use the same tie-rounding rule."
    ],
    "verification": "Substitute the same inputs into the disclosed equation and compare with this example: 0.1 + 0.2 returns 0.3 with exact fraction 3/10. Dividing one by three at ten decimal places displays 0.3333333333 and exact fraction 1/3. Keep the method, units and source assumptions with any recorded result.",
    "sourceNote": "Plain finite-decimal inputs up to 150 characters each, four operations and 0–30 displayed places. No expression evaluation, recurring-input notation or policy-specific rounding requirement.",
    "relatedCalculators": [
      {
        "slug": "fraction-calculator",
        "title": "Fraction Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  }
};
