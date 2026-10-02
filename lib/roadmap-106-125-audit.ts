import type {Audit} from "./semrush-batch-one-audit";
export const roadmap106Audit: Record<string,Audit> = {
  "sourdough-calculator": {
    "keywordThemes": [
      "sourdough calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Four-ingredient mass balance only. No fermentation schedule, food-safety judgment or baked-weight prediction. Added inclusions and handling losses require separate accounting. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "1,000 g, 70% hydration, 20% prefermented flour — 465.12 g new flour and 290.70 g new water with 100%-hydration starter.",
      "Same formula, 2,000 g dough — all ingredient masses double; fermentation time does not automatically double.",
      "Zero prefermented flour — no starter contribution; this is only a flour-water-salt mass balance, not a sourdough fermentation recipe."
    ],
    "mistakes": [
      "Calling starter mass percentage prefermented flour percentage.",
      "Excluding starter water from final hydration.",
      "Treating ingredient scaling as a proofing-time recommendation."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. For 1,000 g dough, 70% hydration, 20% prefermented flour, 2% salt and a 100%-hydration starter: add 465.12 g flour, 290.70 g water, 232.56 g starter and 11.63 g salt. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Four-ingredient mass balance only. No fermentation schedule, food-safety judgment or baked-weight prediction. Added inclusions and handling losses require separate accounting.",
    "relatedCalculators": [
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      }
    ]
  },
  "audiobook-speed-calculator": {
    "keywordThemes": [
      "audiobook speed calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Assumes constant playback speed and excludes pauses. Completed progress must use normal-speed content minutes. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "10 hours at 1.5× — 6 hours 40 minutes from the beginning.",
      "10 hours at 2× with 120 content minutes complete — 4 listening hours remain.",
      "60 content minutes at 0.75× — 80 listening minutes; no time saving."
    ],
    "mistakes": [
      "Subtracting actual listening time instead of completed content time.",
      "Entering a percentage as a playback multiplier.",
      "Leaving pauses out of a real finish-time plan."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. A 10-hour audiobook at 1.5× takes 6 hours 40 minutes from the beginning, saving 3 hours 20 minutes compared with normal speed. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Assumes constant playback speed and excludes pauses. Completed progress must use normal-speed content minutes.",
    "relatedCalculators": [
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      },
      {
        "slug": "work-hours-calculator",
        "title": "Work Hours Calculator"
      }
    ]
  },
  "surface-area-calculator": {
    "keywordThemes": [
      "area and surface area calculator",
      "surface area calculator",
      "total surface area"
    ],
    "interpretation": "This method applies only within the stated scope. Euclidean shapes only, with positive dimensions in one length unit. Cannot solve missing diagrams, infer area from perimeter alone or produce surveyed land boundaries. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "Cube edge 3 — 54 square units of total surface.",
      "Rectangle 3 by 4 — 12 square units of plane area.",
      "Box 2 by 3 by 4 — 52 square units including all six faces."
    ],
    "mistakes": [
      "Using a diameter in a radius field.",
      "Using slanted triangle side as perpendicular height.",
      "Treating closed-cylinder surface as the area of an open container."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. A cube with edge 3 has total surface area 54 square units. A rectangle 3 by 4 has plane area 12 square units; these answer different questions. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Euclidean shapes only, with positive dimensions in one length unit. Cannot solve missing diagrams, infer area from perimeter alone or produce surveyed land boundaries.",
    "relatedCalculators": [
      {
        "slug": "triangle-calculator",
        "title": "Triangle Calculator"
      },
      {
        "slug": "cylinder-volume-calculator",
        "title": "Cylinder Volume Calculator"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator"
      }
    ]
  },
  "body-surface-area-calculator": {
    "keywordThemes": [
      "body surface area calculator",
      "bsa calculator",
      "body area surface calculator",
      "surface area body calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Mosteller estimate only, without validation for individual clinical use. Does not diagnose, assess health or calculate medication doses. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "170 cm and 70 kg — approximately 1.818 m² using Mosteller.",
      "180 cm and 80 kg — exactly 2 m² before display rounding.",
      "Unconverted pounds — incompatible with the kg input; convert first."
    ],
    "mistakes": [
      "Entering metres in the centimetre field.",
      "Confusing estimated BSA with BMI.",
      "Turning the area into an unverified medication dose."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. At 170 cm and 70 kg, Mosteller BSA is approximately 1.818 m². The output is area, not a medication dose. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Mosteller estimate only, without validation for individual clinical use. Does not diagnose, assess health or calculate medication doses.",
    "relatedCalculators": [
      {
        "slug": "height-calculator",
        "title": "Height Calculator"
      },
      {
        "slug": "body-fat-calculator",
        "title": "Body Fat Calculator"
      },
      {
        "slug": "corrected-calcium-calculator",
        "title": "Corrected Calcium Calculator"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/3657876/"
  },
  "roof-area-calculator": {
    "keywordThemes": [
      "roof area calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Uniform-pitch geometry only. No structural, waterproofing, access-safety, code or product-layout assessment. Waste is user supplied. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "40 by 30 ft at 6:12 — approximately 1,341.64 ft² of roof surface.",
      "Same roof with 10% waste — approximately 1,475.80 ft² of purchasing coverage.",
      "40 by 30 ft at zero pitch — 1,200 ft², equal to the horizontal projection."
    ],
    "mistakes": [
      "Doubling a complete gable footprint again.",
      "Entering pitch angle in degrees instead of rise per 12.",
      "Omitting overhang projection or using one pitch for mixed roof sections."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. A 40 by 30 ft roof footprint at 6:12 pitch has approximately 1,341.64 ft² of sloped surface; 10% waste increases coverage to 1,475.80 ft². Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Uniform-pitch geometry only. No structural, waterproofing, access-safety, code or product-layout assessment. Waste is user supplied.",
    "relatedCalculators": [
      {
        "slug": "rafter-length-calculator",
        "title": "Rafter Length Calculator"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "surface-area-calculator",
        "title": "Surface Area Calculator"
      }
    ]
  },
  "corrected-calcium-calculator": {
    "keywordThemes": [
      "corrected calcium calculator",
      "calcium adjusted calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Legacy educational arithmetic, not a diagnostic test or treatment guide. Albumin-adjusted estimates may be less reliable than unadjusted total calcium or measured ionized calcium. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "8 mg/dL calcium, 3 g/dL albumin — legacy estimate 8.8 mg/dL.",
      "2 mmol/L calcium, 30 g/L albumin — SI simplified estimate 2.2 mmol/L.",
      "Albumin at the formula reference — zero adjustment, regardless of diagnostic status."
    ],
    "mistakes": [
      "Mixing calcium and albumin unit systems.",
      "Calling an adjusted estimate measured ionized calcium.",
      "Using a legacy estimate to decide treatment without clinical interpretation."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. Calcium 8.0 mg/dL and albumin 3.0 g/dL produce a legacy adjusted estimate of 8.8 mg/dL. This is not a measured ionized calcium result. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Legacy educational arithmetic, not a diagnostic test or treatment guide. Albumin-adjusted estimates may be less reliable than unadjusted total calcium or measured ionized calcium.",
    "relatedCalculators": [
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      },
      {
        "slug": "height-calculator",
        "title": "Height Calculator"
      },
      {
        "slug": "blood-pressure-by-age-calculator",
        "title": "Blood Pressure By Age Calculator"
      }
    ],
    "sourceUrl": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2829419"
  },
  "grade-curve-calculator": {
    "keywordThemes": [
      "grade curve calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Additive curves only, with scores capped at zero and the entered maximum. Institutional grade policies, letter grades and percentile curves are not inferred. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "70, 80, 90; highest to 100 — curved scores 80, 90, 100.",
      "70, 80, 90; add 5 points — 75, 85, 95.",
      "80, 90, 100; target mean 100 — capped scores 90, 100, 100; actual mean 96.67."
    ],
    "mistakes": [
      "Mixing percentages and points on different scales.",
      "Assuming the capped mean always equals the requested target.",
      "Calling an additive adjustment a normal-distribution curve."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. Scores 70, 80 and 90 on a 100-point scale become 80, 90 and 100 when the highest score is shifted to the maximum. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Additive curves only, with scores capped at zero and the entered maximum. Institutional grade policies, letter grades and percentile curves are not inferred.",
    "relatedCalculators": [
      {
        "slug": "grade-calculator",
        "title": "Grade Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      },
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean Standard Deviation Calculator"
      }
    ]
  },
  "pt-141-dosage-calculator": {
    "keywordThemes": [
      "pt-141 dosage calculator"
    ],
    "interpretation": "This method applies only within the stated scope. No personalized dosing, mixing instructions or authorization to inject. Counts and intervals do not establish safety or treatment eligibility. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "12 hours since last dose — 12 hours short of the 24-hour label interval.",
      "Eight doses already used in the month — monthly label limit reached.",
      "24 hours and two doses entered — counts below these limits, without establishing suitability or safety."
    ],
    "mistakes": [
      "Treating below-limit counts as permission to inject.",
      "Applying approved-autoinjector information to an unapproved vial.",
      "Ignoring contraindications or prescriber instructions."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. At 12 hours since the previous dose, the 24-hour interval has not elapsed. At eight doses already used in a month, the monthly label limit is reached. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "No personalized dosing, mixing instructions or authorization to inject. Counts and intervals do not establish safety or treatment eligibility.",
    "relatedCalculators": [
      {
        "slug": "blood-pressure-by-age-calculator",
        "title": "Blood Pressure By Age Calculator"
      },
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      }
    ],
    "sourceUrl": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/210557Orig1s000Lbl.pdf"
  },
  "btu-calculator": {
    "keywordThemes": [
      "btu calculator",
      "air conditioner size calculator",
      "heating btu calculator",
      "furnace size calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Room table estimate for an 8-ft ceiling, not a Manual J design. Heating load is entirely user supplied. Does not select equipment or estimate electricity use. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "200 ft², normal exposure, two occupants — 6,000 BTU/h reference estimate.",
      "Same room, very sunny, three occupants, kitchen — 11,200 BTU/h after stated adjustments.",
      "200 ft² with entered heating load 30 BTU/h per ft² — 6,000 BTU/h supplied-load estimate."
    ],
    "mistakes": [
      "Using a room AC table as a whole-house HVAC design.",
      "Confusing cooling capacity with electric power consumption.",
      "Using a heating factor without a defensible heat-loss assessment."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. A 200 ft² ordinary room with two occupants maps to 6,000 BTU/h. Very sunny exposure raises that estimate to 6,600 BTU/h. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Room table estimate for an 8-ft ceiling, not a Manual J design. Heating load is entirely user supplied. Does not select equipment or estimate electricity use.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "roof-area-calculator",
        "title": "Roof Area Calculator"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      }
    ],
    "sourceUrl": "https://www.energystar.gov/products/room_air_conditioners"
  },
  "arrow-speed-calculator": {
    "keywordThemes": [
      "arrow speed calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Measured average-speed method only. No IBO correction model, launch-speed inference, trajectory solver, impact guarantee or equipment-safety assessment. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "30 ft in 0.1 s — 300 ft/s average measured speed.",
      "30 ft in 0.2 s — 150 ft/s, half the average speed.",
      "400-grain arrow at average 300 ft/s — energy evaluated at that average is approximately 108.36 J."
    ],
    "mistakes": [
      "Entering milliseconds as seconds.",
      "Using shaft grains per inch as complete-arrow mass.",
      "Calling average measured flight speed launch speed or an IBO prediction."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. An arrow traveling 30 ft in 0.1 seconds averages 300 ft/s. At 400 grains, kinetic energy evaluated at that average speed is about 108.35 J. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Measured average-speed method only. No IBO correction model, launch-speed inference, trajectory solver, impact guarantee or equipment-safety assessment.",
    "relatedCalculators": [
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "volume-calculator": {
    "keywordThemes": [
      "volume calculator",
      "volume of a cube formula",
      "pond volume calculator",
      "tube volume calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Ideal geometry only. Pond results depend on representative average depth. Capacity excludes displacement and freeboard; no structural or chemical-treatment guidance. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "Box 2 by 3 by 4 m — 24 m³ or 24,000 litres.",
      "Cube with 3 cm edge — 27 cm³, not 27 square centimetres.",
      "Tube outer radius 2 m, inner radius 1 m, length 3 m — approximately 28.2743 m³ of annular volume."
    ],
    "mistakes": [
      "Calling a flat circle or square a volume-bearing solid.",
      "Using outside tank dimensions or deepest pond depth for water capacity.",
      "Using annular tube volume as liquid bore capacity."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. A 10 ft by 5 ft by 3 ft box holds 150 ft³ geometrically, approximately 4,247.53 litres or 1,122.08 US gallons before displacement and freeboard. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Ideal geometry only. Pond results depend on representative average depth. Capacity excludes displacement and freeboard; no structural or chemical-treatment guidance.",
    "relatedCalculators": [
      {
        "slug": "surface-area-calculator",
        "title": "Surface Area Calculator"
      },
      {
        "slug": "cylinder-volume-calculator",
        "title": "Cylinder Volume Calculator"
      },
      {
        "slug": "cone-volume-calculator",
        "title": "Cone Volume Calculator"
      },
      {
        "slug": "cubic-yard-calculator",
        "title": "Cubic Yard Calculator"
      }
    ]
  },
  "productivity-calculator": {
    "keywordThemes": [
      "productivity calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Operational output-per-hour arithmetic, not an official economic index or individual performance assessment. Assumes consistent output units and equal worker hours unless aggregated. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "400 accepted units, five workers, eight hours each — 10 units per labor-hour.",
      "Same output, twice the labor input — productivity halves to 5 units per labor-hour.",
      "Zero output with positive labor hours — zero productivity; hours per unit is undefined."
    ],
    "mistakes": [
      "Dividing by elapsed shift hours when multiple workers contributed.",
      "Counting rejected or unfinished output inconsistently.",
      "Comparing product mixes or targets defined on different units."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. Five workers each completing an eight-hour shift produce 40 labor-hours. Output of 400 units therefore equals 10 units per labor-hour. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Operational output-per-hour arithmetic, not an official economic index or individual performance assessment. Assumes consistent output units and equal worker hours unless aggregated.",
    "relatedCalculators": [
      {
        "slug": "work-hours-calculator",
        "title": "Work Hours Calculator"
      },
      {
        "slug": "business-break-even-calculator",
        "title": "Business Break Even Calculator"
      },
      {
        "slug": "profit-margin-calculator-global",
        "title": "Profit Margin Calculator Global"
      }
    ],
    "sourceUrl": "https://www.bls.gov/k12/productivity-101/content/what-is-productivity/what-is-labor-productivity.htm"
  },
  "time-between-calculator": {
    "keywordThemes": [
      "time between calculator"
    ],
    "interpretation": "This method applies only within the stated scope. UTC elapsed-time subtraction only. No local-zone inference, business-day calendar, holiday exclusions or payroll rules. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "02 October 09:00 to 03 October 17:30 UTC — 32.5 hours.",
      "Same UTC date-time at start and end — zero elapsed time.",
      "23:00 to next-date 01:00 UTC — two elapsed hours; both dates must be entered."
    ],
    "mistakes": [
      "Entering local timestamps as UTC without conversion.",
      "Assuming elapsed duration excludes breaks or weekends.",
      "Treating elapsed days as an inclusive calendar-day count."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. From 2026-10-02T09:00 to 2026-10-03T17:30 UTC, the interval is 1 day 8 hours 30 minutes, or 32.5 total hours. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "UTC elapsed-time subtraction only. No local-zone inference, business-day calendar, holiday exclusions or payroll rules.",
    "relatedCalculators": [
      {
        "slug": "work-hours-calculator",
        "title": "Work Hours Calculator"
      },
      {
        "slug": "date-from-today-calculator",
        "title": "Date From Today Calculator"
      },
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      }
    ]
  },
  "blood-pressure-by-age-calculator": {
    "keywordThemes": [
      "blood pressure by age calculator"
    ],
    "interpretation": "This method applies only within the stated scope. Adult categories only, not age-adjusted personal targets or diagnosis. Excludes pediatric and pregnancy-specific assessment. Concerning symptoms may require urgent care at any reading. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "Adult 119/79 — normal reading range.",
      "Adult 120/80 — stage 1 range from the diastolic value.",
      "Adult 181/80 — severe range; symptoms and prompt professional assessment matter."
    ],
    "mistakes": [
      "Raising adult category thresholds simply because age increases.",
      "Diagnosing persistent hypertension from one reading.",
      "Applying adult categories to children or changing medication from a calculator."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. An adult reading of 120/80 mm Hg falls in the stage 1 range because diastolic is 80, even though systolic alone is in the elevated range. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "Adult categories only, not age-adjusted personal targets or diagnosis. Excludes pediatric and pregnancy-specific assessment. Concerning symptoms may require urgent care at any reading.",
    "relatedCalculators": [
      {
        "slug": "time-between-calculator",
        "title": "Time Between Calculator"
      },
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      },
      {
        "slug": "height-calculator",
        "title": "Height Calculator"
      }
    ],
    "sourceUrl": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
  },
  "baby-percentile-calculator": {
    "keywordThemes": [
      "baby percentile calculator"
    ],
    "interpretation": "This method applies only within the stated scope. WHO weight-for-age at exact monthly ages 0–24 only and |z|≤3. No gestational-age percentile, prematurity correction, diagnosis, daily-age interpolation or feeding guidance. The worked scenarios below identify the measurements and conventions needed to interpret the displayed output.",
    "scenarios": [
      "Boys reference at exact 6 months, 7.9340 kg — approximately 50th percentile.",
      "Girls reference at exact 6 months, 7.2970 kg — approximately 50th percentile.",
      "Age between monthly points — this simplified table does not produce an exact-age percentile."
    ],
    "mistakes": [
      "Rounding age to fit a monthly reference point.",
      "Using weight-for-age as gestational-age birthweight percentile.",
      "Treating a percentile as a feeding target or a diagnosis."
    ],
    "verification": "Reproduce the equation shown on this page using the same entered values. For the WHO boys reference at exactly six months, 7.9340 kg is the median and produces approximately the 50th weight-for-age percentile. Keep input units and the selected method with any recorded result. Check unusual measurements rather than relying on extra displayed decimal places.",
    "sourceNote": "WHO weight-for-age at exact monthly ages 0–24 only and |z|≤3. No gestational-age percentile, prematurity correction, diagnosis, daily-age interpolation or feeding guidance.",
    "relatedCalculators": [
      {
        "slug": "height-calculator",
        "title": "Height Calculator"
      },
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      }
    ],
    "sourceUrl": "https://www.who.int/tools/child-growth-standards/standards/weight-for-age"
  }
};
