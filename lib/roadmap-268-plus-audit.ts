import type {Audit} from "./semrush-batch-one-audit";
export const roadmap268Audit:Record<string,Audit> = {
  "drywall-calculator": {
    "keywordThemes": [
      "drywall calculator"
    ],
    "interpretation": "For 500 ft² gross surface, 40 ft² openings, 4 × 8 ft sheets and 10% allowance: net area is 460 ft², planned area is 506 ft², coverage is 32 ft² per sheet and the rounded order estimate is 16 sheets. Area-based quantity only. No thickness selection, structural assessment, fire-rating approval, accessories or cutting optimization. Actual installation must follow the specified assembly and manufacturer documentation. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "Zero allowance — 460 ft² on 32 ft² sheets rounds to 15 sheets.",
      "Ten-percent allowance — 506 ft² rounds to 16 sheets.",
      "4 × 12 ft panels — 506 ft² rounds to 11 sheets before layout review."
    ],
    "mistakes": [
      "Using floor area as all wall and ceiling area.",
      "Deducting an opening count instead of square feet.",
      "Treating the rounded count as a complete installation specification."
    ],
    "verification": "Recalculate each surface from its dimensions, reconcile the opening schedule, multiply panel width by length and divide planned area by coverage. A larger allowance should never reduce the order count. Review the layout and specified panel product before buying.",
    "sourceUrl": "https://qa.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-installation-guide-en-J371.pdf",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "concrete-block-calculator",
        "title": "Concrete Block Calculator"
      },
      {
        "slug": "deck-board-calculator",
        "title": "Deck Board Calculator"
      }
    ]
  },
  "zero-to-sixty-calculator": {
    "keywordThemes": [
      "0-60 calculator"
    ],
    "interpretation": "At a constant 4 m/s², reaching 60 mph means reaching 26.8224 m/s. The model gives 6.7056 seconds and 89.93014272 metres. This is an arithmetic scenario, not a predicted result for a particular car. Constant acceleration from rest only. No vehicle-performance forecast, road-condition model, rollout, shifting, drivetrain or traction correction is implemented. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "4 m/s² to 60 mph — 6.7056 seconds.",
      "8 m/s² to 60 mph — 3.3528 seconds on the same model.",
      "4 m/s² to 100 km/h — approximately 6.944444 seconds."
    ],
    "mistakes": [
      "Entering horsepower as acceleration.",
      "Confusing 60 mph with 100 km/h.",
      "Comparing constant-model output with rollout-adjusted tests."
    ],
    "verification": "Convert the target speed to m/s, divide by the supplied acceleration and check that time × acceleration reproduces target speed. Distance should equal half the final speed multiplied by modeled time. Do not label this calculation an instrumented vehicle result.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/2-4-acceleration",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "horsepower-calculator",
        "title": "Horsepower Calculator"
      },
      {
        "slug": "quarter-mile-calculator",
        "title": "Quarter Mile Calculator"
      },
      {
        "slug": "speed-distance-time-calculator",
        "title": "Speed Distance Time Calculator"
      }
    ]
  },
  "watt-hour-calculator": {
    "keywordThemes": [
      "watt hour calculator"
    ],
    "interpretation": "A 60 W constant load operating for 5 hours uses 300 Wh, equivalent to 0.3 kWh or 1,080,000 J. A 120 W load for 2.5 hours gives the same energy under this stated model. Constant or independently established average power only. No tariff, battery sizing, runtime guarantee, peak-current assessment or automatically applied efficiency factor. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "60 W for 5 h — 300 Wh.",
      "120 W for 2.5 h — the same 300 Wh.",
      "Zero operating hours — zero accumulated energy."
    ],
    "mistakes": [
      "Writing minutes as decimal hundredths of an hour.",
      "Treating nameplate power as measured average consumption.",
      "Adding power units directly to energy units."
    ],
    "verification": "Multiply watts by decimal hours, then divide watt-hours by one thousand for kWh. Multiply the unrounded Wh total by three thousand six hundred for joules. Double duration at unchanged power to check that each energy output doubles.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "megawatt-calculator",
        "title": "Megawatt Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      },
      {
        "slug": "wire-length-calculator",
        "title": "Wire Length Calculator"
      }
    ]
  },
  "kd-calculator": {
    "keywordThemes": [
      "kd calculator"
    ],
    "interpretation": "With 120 kills and 80 deaths, K/D is 1.5. A target of 2.0 with deaths fixed at 80 requires 160 total kills, so the worksheet shows 40 additional kills. Independent supplied-count arithmetic. No account connection, game affiliation, assist weighting, skill rating or prediction of future kills and deaths. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "120 kills / 80 deaths — K/D 1.5.",
      "Target 2.0 at 80 deaths — 40 additional kills.",
      "Zero deaths — undefined quotient rather than an assumed denominator."
    ],
    "mistakes": [
      "Mixing mode or session count bases.",
      "Adding assists to kills without labeling a different formula.",
      "Averaging session ratios instead of combining totals."
    ],
    "verification": "Read both counters from the same record and divide kills by positive deaths. For the target, add displayed additional kills to the current total and check the quotient meets or exceeds the supplied ratio. A smaller whole increment should fail when the target is not already achieved.",
    "sourceUrl": "https://www.callofduty.com/guides/getting-started/call-of-duty-modern-warfare-iii-play-guides-getting-started-in-game-terms",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "winrate-calculator",
        "title": "Winrate Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      }
    ]
  },
  "deck-board-calculator": {
    "keywordThemes": [
      "deck board calculator",
      "deck calculator"
    ],
    "interpretation": "For a deck 12 ft across rows and 16 ft along boards, actual width 5.5 in, supplied gap 0.25 in and 16 ft stock: rows = ceiling(144.25/5.75) = 26. With 10% allowance the estimate is 29 stock boards. Straight parallel rows only. No offcut optimization, diagonal layout, prescribed gap, fastening plan, support placement, load capacity or full deck quotation. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "12 × 16 ft with 16 ft stock — 26 rows and 26 base boards.",
      "Same layout with 10% allowance — 29 whole boards.",
      "8 ft stock for 16 ft rows — two stock pieces per row before joint review."
    ],
    "mistakes": [
      "Entering nominal rather than actual board width.",
      "Treating a stock-piece count as an approved joint layout.",
      "Choosing a gap only to reduce the order count."
    ],
    "verification": "Check that rows × board width plus gaps between those rows covers the deck width. One fewer row should fail to cover it unless rounding tolerance changes an exact boundary. Compare the per-row stock count with the physical cut and support schedule.",
    "sourceUrl": "https://www.trex.com/deck-ideas/how-many-deck-boards-do-i-need-/",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "drywall-calculator",
        "title": "Drywall Calculator"
      },
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      },
      {
        "slug": "fence-cost-estimator",
        "title": "Fence Cost Estimator"
      }
    ]
  },
  "plate-rolling-calculator": {
    "keywordThemes": [
      "plate rolling calculator"
    ],
    "interpretation": "For 100 mm inside radius, 10 mm thickness, supplied factor 0.5 and 360° with no separate allowance: neutral radius is 105 mm and the arc is approximately 659.734457 mm. The factor is an input assumption, not a verified universal value. Illustrative circular-arc development only. Supplied factor and allowance are not verified by the tool. No springback, roll load, machine setup, structural analysis or fabrication approval. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "360° with neutral radius 105 mm — approximately 659.734457 mm.",
      "180° on the same radius — half the full arc length.",
      "Add 5 mm process allowance — final length increases by exactly 5 mm."
    ],
    "mistakes": [
      "Copying outside diameter into inside radius.",
      "Treating a default neutral-axis factor as process validation.",
      "Applying an allowance twice."
    ],
    "verification": "Convert angle to radians, establish the supplied neutral radius and multiply them. Compare full, half and quarter arcs for the same radius. Review the factor, allowance, drawing basis and tolerances with the fabricator; this arithmetic alone is not a production release.",
    "sourceUrl": "https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-1-angles",
    "sourceNote": "OpenStax documents the circular arc identity. Neutral-axis factor and process allowance are user-supplied assumptions and are not established or certified by this reference. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
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
        "slug": "drywall-calculator",
        "title": "Drywall Calculator"
      }
    ]
  },
  "running-record-calculator": {
    "keywordThemes": [
      "running record calculator"
    ],
    "interpretation": "For 100 words, 5 uncorrected errors, 2 separately counted self-corrections and 60 seconds: accuracy is 95%, error ratio is 1:20, self-correction ratio is 1:3.5 and optional rate is 95 correct words per minute. Supplied scoring tallies only. No automated speech assessment, standardized level, comprehension evaluation, diagnosis or guarantee of comparability across protocols. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "100 words with 5 errors — 95% accuracy.",
      "5 errors plus 2 self-corrections — ratio 1:3.5.",
      "Time set to zero — rate omitted without altering accuracy."
    ],
    "mistakes": [
      "Counting corrected events again as uncorrected errors.",
      "Confusing a one-in ratio with a percentage.",
      "Treating a single accuracy output as a comprehension diagnosis."
    ],
    "verification": "Reconcile words and separate tallies against the marked passage. Multiply the correct-word fraction by one hundred. For self-correction, divide errors plus corrections by corrections. Confirm the measured duration belongs to the same passage before comparing rate outputs.",
    "sourceUrl": "https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/english/literacy/readingviewing/Pages/examplerunning.aspx",
    "sourceNote": "The Victorian education resource is an archived protocol reference for the displayed accuracy and self-correction arithmetic. The page assigns no reading level or diagnosis. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean Standard Deviation Calculator"
      }
    ]
  },
  "timecode-calculator": {
    "keywordThemes": [
      "timecode calculator"
    ],
    "interpretation": "At 30 fps NDF, 00:00:12:15 represents 375 frames. Adding 00:00:00:15 gives 390 frames, or 00:00:13:00. Subtracting a larger count gives a signed negative duration rather than an automatic midnight rollover. Exact integer-rate NDF durations only. No fractional or drop-frame conversion, midnight dates, media inspection, frame resampling, synchronization or inclusive-endpoint adjustment. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "30 fps: 00:00:12:15 — 375 frames.",
      "Add 00:00:00:15 — 390 frames and 00:00:13:00.",
      "First smaller than second — a signed negative duration."
    ],
    "mistakes": [
      "Treating the frame field as hundredths of a second.",
      "Using fractional-rate media in an integer-rate option.",
      "Assuming signed duration subtraction handles midnight dates."
    ],
    "verification": "Convert each label to an integer frame count and perform the operation there. Confirm seconds equal signed frames divided by the selected rate. Test one frame below a second boundary and one frame above it. Reconcile any inclusive endpoint convention in your editor independently.",
    "sourceUrl": "https://developer.apple.com/library/archive/technotes/tn2310/_index.html",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
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
        "slug": "swim-time-converter",
        "title": "Swim Time Converter"
      }
    ]
  },
  "cow-gestation-calculator": {
    "keywordThemes": [
      "cattle gestation calculator",
      "cow gestation calculator"
    ],
    "interpretation": "A service date of 1 January 2026 with a supplied 283-day interval produces 11 October 2026. Selecting 280 days instead moves the planning date to 8 October 2026; neither date is a guaranteed individual outcome. Calendar planning only. No individual gestation guarantee, pregnancy confirmation, clinical classification, animal examination, labor prediction or treatment instructions. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "1 January 2026 + 283 days — 11 October 2026.",
      "Same service + 280 days — 8 October 2026.",
      "Add one planning day — output advances one calendar day."
    ],
    "mistakes": [
      "Treating exposure start as a confirmed conception date.",
      "Presenting an average interval as a guaranteed calving date.",
      "Using the output as an intervention or diagnosis threshold."
    ],
    "verification": "Check the original service record, the chosen planning interval and calendar addition. The date should move by exactly the change in supplied days. Verify herd and animal-specific assumptions with your veterinarian. Editorial review of the arithmetic is not veterinary assessment of an animal.",
    "sourceUrl": "https://extension.okstate.edu/programs/beef-extension/cow-calf-corner-the-newsletter-archives/2026/february-23-2026",
    "sourceNote": "Oklahoma State distinguishes a study average of 280 days from the commonly used 283-day planning convention. The input remains adjustable; the supported input bound is not a clinical range. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "sheep-gestation-calculator",
        "title": "Sheep Gestation Calculator"
      },
      {
        "slug": "goat-gestation-calculator",
        "title": "Goat Gestation Calculator"
      },
      {
        "slug": "mare-gestation-calculator",
        "title": "Mare Gestation Calculator"
      }
    ]
  },
  "rim-offset-calculator": {
    "keywordThemes": [
      "rim offset calculator"
    ],
    "interpretation": "Changing from an 8 in wheel at +40 mm offset to a 9 in wheel at +35 mm gives a half-width increase of 12.7 mm. The nominal outer edge moves outward 17.7 mm, while the inner edge moves 7.7 mm toward the suspension. Nominal wheel-specification geometry only. No tyre-profile modeling, exterior flange correction, spacer handling, brake clearance, load rating or vehicle fitment approval. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "8 in +40 to 9 in +35 — outer +17.7 mm, inner +7.7 mm.",
      "Identical wheel specifications — both changes zero.",
      "Same width with offset reduced 5 mm — outer +5 mm and inner −5 mm."
    ],
    "mistakes": [
      "Entering backspacing as signed offset.",
      "Reading positive inner movement as increased clearance.",
      "Treating nominal rim movement as full tyre fitment approval."
    ],
    "verification": "Convert the width difference to millimetres and split it equally. Apply the offset difference with opposite signs to the two sides. Identical inputs must yield zero changes. Confirm offsets from the manufacturer and compare nominal arithmetic with actual vehicle clearances.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "NIST verifies the inch-to-millimetre unit factor. The page derives nominal edge movement from its disclosed centerline geometry; the source does not certify wheel fitment. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "tire-size-calculator",
        "title": "Tire Size Calculator"
      },
      {
        "slug": "gear-ratio-speed-calculator",
        "title": "Gear Ratio Speed Calculator"
      },
      {
        "slug": "torque-converter",
        "title": "Torque Converter"
      }
    ]
  },
  "correlation-coefficient-calculator": {
    "keywordThemes": [
      "use a calculator to find the r-value of these data"
    ],
    "interpretation": "For X values 1, 2, 3, 4 and matching Y values 2, 4, 6, 8, Pearson r is +1. Reversing Y to 8, 6, 4, 2 gives −1. A constant list such as 5, 5, 5, 5 has zero variation and cannot produce a defined r. Pearson linear association only, with 2–1,000 matched finite pairs. No missing-value imputation, ranking, outlier removal, p-value, confidence interval or causal inference. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "Y = 2X for varying X — r = +1.",
      "Y decreases perfectly as X increases — r = −1.",
      "A constant X or Y list — undefined coefficient is reported as an input check."
    ],
    "mistakes": [
      "Sorting X and Y independently.",
      "Treating association as proof of causation.",
      "Replacing an undefined constant-list coefficient with zero."
    ],
    "verification": "Check equal list lengths and original row pairings. Calculate both means, centered cross-products and centered squared sums independently. Positive scaling of either list should preserve r. Inspect the source data for transcription errors and unusual points before interpreting the coefficient.",
    "sourceUrl": "https://openstax.org/books/introductory-business-statistics-2e/pages/13-1-the-correlation-coefficient-r",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean Standard Deviation Calculator"
      },
      {
        "slug": "binomial-distribution-calculator",
        "title": "Binomial Distribution Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      }
    ]
  },
  "speed-distance-time-calculator": {
    "keywordThemes": [
      "speed calculator and speed distance time calculator",
      "how to calculate speed from matching distance and time",
      "distance calculator from speed and time",
      "time calculator from speed and distance",
      "mph calculator and feet per second calculator",
      "speed distance time converter with explicit units"
    ],
    "interpretation": "For 150 km over 2 hours, average speed is 75 km/h, approximately 46.602839 mph, 20.833333 m/s and 68.350831 ft/s. The inverse time mode at 150 km and 75 km/h returns 2 hours. Supplied average-speed arithmetic only. No navigation, route length, traffic, peak speed, stopping distance or guaranteed arrival time. Inactive fields are ignored according to selected mode. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "150 km in 2 h — average speed 75 km/h.",
      "75 km/h for 2 h — modeled distance 150 km.",
      "150 km at 75 km/h — modeled time 2 h."
    ],
    "mistakes": [
      "Entering 1:30 or 1.30 as one and a half hours.",
      "Mixing moving time with total elapsed time.",
      "Treating average-speed arithmetic as a route ETA."
    ],
    "verification": "Multiply the solved speed by elapsed hours and check the original distance. Use the inverse mode with the same quantities to reconcile the result. Confirm the minute output matches your intended decimal hours, and retain the exact units when sharing a conversion.",
    "sourceUrl": "https://openstax.org/books/college-physics-2e/pages/2-2-time-velocity-and-speed",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      },
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "zero-to-sixty-calculator",
        "title": "Zero To Sixty Calculator"
      }
    ]
  },
  "tv-mounting-height-calculator": {
    "keywordThemes": [
      "tv mounting height calculator"
    ],
    "interpretation": "For seated eye height 105 cm, screen height 70 cm, zero center offset and a bracket reference 10 cm above screen center: center is 105 cm, bottom 70 cm, top 140 cm and bracket reference 115 cm. Measured vertical geometry only. No universal comfort height, viewing-angle assessment, VESA pattern, fixing selection, wall capacity or concealed-service inspection. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "105 cm eyes and 70 cm screen — center 105, bottom 70, top 140 cm.",
      "Raise center offset by 5 cm — all screen edges rise 5 cm.",
      "Bracket reference +10 cm — mark is 10 cm above screen center."
    ],
    "mistakes": [
      "Entering diagonal size as vertical screen height.",
      "Using screen center as a bracket hole reference without verification.",
      "Treating a height calculation as structural mounting approval."
    ],
    "verification": "Check that top minus bottom equals supplied screen height and their mean equals calculated center. Verify the signed bracket offset against the actual mount drawing. Measure from the finished floor and evaluate placement with the real seat and installation constraints.",
    "sourceUrl": "https://www.lg.com/us/experience/how-to-measure-and-read-tv-sizes",
    "sourceNote": "LG describes measuring television dimensions and eye-level placement context. SolvePilot applies supplied vertical measurements; it does not certify comfort, bracket geometry or wall capacity. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "aspect-ratio-calculator",
        "title": "Aspect Ratio Calculator"
      },
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      },
      {
        "slug": "drywall-calculator",
        "title": "Drywall Calculator"
      }
    ]
  },
  "wire-length-calculator": {
    "keywordThemes": [
      "wire length calculator"
    ],
    "interpretation": "A 20 m route with 2 identical runs, 3 conductors per run, 1 m extra per conductor per route and 10% allowance gives 42 m jacket-route takeoff, 126 m individual-conductor takeoff and 138.6 m planned individual length. Length takeoff only. No path optimization, wire-size selection, voltage-drop calculation, circuit design, spool-size rounding or electrical installation approval. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "20 m + 1 m extra over 2 routes — 42 m jacket-route takeoff.",
      "Three conductors per route — 126 m individual takeoff.",
      "Ten-percent ordering allowance — 138.6 m individual length."
    ],
    "mistakes": [
      "Ordering a multi-core jacket as multiplied individual-wire length.",
      "Counting termination tails twice.",
      "Treating length alone as wire-size or circuit approval."
    ],
    "verification": "Reconcile the measured path schedule, identical-route count and conductor count. Check that individual takeoff divided by conductors equals jacket-route takeoff. Independently verify slack and purchasing increments, then keep quantity arithmetic separate from electrical design.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "sourceNote": "NIST documents length units and conversions. Route and conductor takeoff are the disclosed multiplication model, not an electrical design standard. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "wire-size-calculator",
        "title": "Wire Size Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      },
      {
        "slug": "watt-hour-calculator",
        "title": "Watt Hour Calculator"
      }
    ]
  },
  "gear-ratio-speed-calculator": {
    "keywordThemes": [
      "tremec gear ratio calculator",
      "gear ratio speed calculator",
      "gear ratio calculator"
    ],
    "interpretation": "At 3,000 rpm, a 1.0 transmission ratio, 3.0 final drive and 28 in effective diameter, modeled road speed is approximately 83.299805 mph. Using that speed in the inverse mode returns approximately 3,000 rpm. Independent rigid-gearing arithmetic with supplied effective diameter. No presets, affiliation, slip, redline, safe-speed assessment, acceleration simulation or top-speed prediction. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "3,000 rpm, combined ratio 3 and 28 in diameter — about 83.299805 mph.",
      "Double reduction at same rpm — half modeled speed.",
      "Use matching speed in RPM mode — recover the original rpm."
    ],
    "mistakes": [
      "Using a ratio for the wrong engaged gear.",
      "Confusing nominal geometry with measured rolling circumference.",
      "Calling kinematic speed a safe or achievable top speed."
    ],
    "verification": "Multiply transmission and final-drive ratios, convert tyre circumference and revolutions per minute into inches per hour, then divide by sixty-three thousand three hundred sixty. Check the inverse with unrounded values and compare source specifications before drawing driveline conclusions.",
    "sourceUrl": "https://tremec.com/aftermarket/resources/gear-ratio-calculator/",
    "sourceNote": "TREMEC documents the ratio, RPM, tyre-size and road-speed relationship. SolvePilot is an independent supplied-input worksheet and loads no TREMEC specifications or presets. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "tire-size-calculator",
        "title": "Tire Size Calculator"
      },
      {
        "slug": "rim-offset-calculator",
        "title": "Rim Offset Calculator"
      },
      {
        "slug": "horsepower-calculator",
        "title": "Horsepower Calculator"
      }
    ]
  },
  "christmas-tree-light-calculator": {
    "keywordThemes": [
      "christmas tree light calculator"
    ],
    "interpretation": "A 6 ft tree with a supplied density of 100 lights per foot gives a 600-light scenario target. If 200 usable lights already exist and each chosen strand has 100 lights, the additional estimate is 4 strands. Supplied aesthetic-density worksheet only. No universal light density, branch-area model, cable-coverage guarantee, permitted connection count, wattage or electrical suitability assessment. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "6 ft × supplied 100 lights/ft — target 600 lights.",
      "200 existing and 100 per strand — 4 additional strands.",
      "Existing lights at or above target — zero additional strands."
    ],
    "mistakes": [
      "Treating supplied density as a universal requirement.",
      "Confusing bulb count with lit cable length.",
      "Using aesthetic strand count as an electrical connection limit."
    ],
    "verification": "Multiply height by the chosen density, round the scenario target upward and deduct existing lights without allowing a negative shortfall. Confirm the whole-strand purchase covers that shortfall. Verify product condition, lit length and electrical instructions independently.",
    "sourceUrl": "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Household-Electrical-Products/Seasonal-and-Decorative-Lighting-Products",
    "sourceNote": "CPSC describes product safety requirements for seasonal lighting. The decorative density is supplied by the user and is not a CPSC light-count rule or connection recommendation. Reference reviewed 4 October 2026. Mohammad Qasim reviews the arithmetic and editorial scope; individual professional assessment is not performed.",
    "relatedCalculators": [
      {
        "slug": "watt-hour-calculator",
        "title": "Watt Hour Calculator"
      },
      {
        "slug": "wire-length-calculator",
        "title": "Wire Length Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      }
    ]
  },
  "ops-calculator": {
    "keywordThemes": [
      "ops calculator"
    ],
    "interpretation": "For AB 100, H 30, BB 10, HBP 2, SF 3, doubles 5, triples 1 and HR 4: OBP is 42/115 ≈ 0.36521739. Total bases are 49, SLG is 0.49 and OPS is approximately 0.85521739. Supplied basic counting-statistic arithmetic only. No live player data, scoring adjudication, OPS+, league or park adjustment, projection or player-rating guarantee. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "Worked 100-AB record — OPS approximately 0.85521739.",
      "All hits are singles — total bases equals hits.",
      "Identical record doubled in every category — OBP, SLG and OPS unchanged."
    ],
    "mistakes": [
      "Entering singles rather than all hits.",
      "Replacing official at-bats with all plate appearances.",
      "Calling unadjusted OPS an OPS+ or a bounded probability."
    ],
    "verification": "Reconcile extra-base hits against total hits and inferred singles. Calculate total bases independently with singles plus twice doubles plus three times triples plus four times home runs. Check each denominator before adding unrounded OBP and SLG values.",
    "sourceUrl": "https://www.mlb.com/glossary/standard-stats/on-base-plus-slugging",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "winrate-calculator",
        "title": "Winrate Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      }
    ],
    "secondarySourceUrl": "https://www.mlb.com/glossary/standard-stats/slugging-percentage"
  },
  "binomial-distribution-calculator": {
    "keywordThemes": [
      "binomial distribution calculator"
    ],
    "interpretation": "For 10 independent trials, p = 0.5 and k = 5: exactly five has probability 252/1,024 = 24.609375%. At most five and at least five each have probability 62.3046875%. Expected successes are 5. Numerical binomial model for 0–500 independent identical trials. No probability estimation, dependency correction, confidence interval or exact rational tail output. Tiny displayed probabilities can round to zero. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "n=10, p=0.5, k=5 — exact probability 24.609375%.",
      "p=0 with k=0 — exact probability 100%.",
      "p=1 — all probability lies at k=n."
    ],
    "mistakes": [
      "Entering fifty instead of 0.5 for fifty percent.",
      "Calling inclusive tails complementary.",
      "Using independent identical trials for changing or dependent outcomes."
    ],
    "verification": "Check n, k and the decimal probability range. For ten fair trials and five successes, independently calculate the combination 252 divided by 1,024. Verify at-most plus at-least equals one plus exact probability within rounding. Confirm the real process assumptions separately.",
    "sourceUrl": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "hypergeometric-calculator",
        "title": "Hypergeometric Calculator"
      },
      {
        "slug": "correlation-coefficient-calculator",
        "title": "Correlation Coefficient Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      }
    ]
  },
  "octagon-calculator": {
    "keywordThemes": [
      "octagon calculator"
    ],
    "interpretation": "For side length 2 units: perimeter is 16 units, area approximately 19.3137085 square units, side-to-side span 4.82842712 units, apothem 2.41421356 units and opposite-vertex span 5.22625186 units. Regular two-dimensional octagon only. No irregular survey area, coordinate reconstruction, thickness, cutting layout, ordering allowance, saw-angle instruction or construction approval. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "Side 2 units — perimeter 16 and area about 19.3137085 square units.",
      "Double side to 4 — perimeter doubles and area quadruples.",
      "Perimeter × apothem / 2 — independent area reconciliation."
    ],
    "mistakes": [
      "Assuming any eight-sided shape is regular.",
      "Confusing flat-to-flat and corner-to-corner spans.",
      "Converting length units without squaring the area factor."
    ],
    "verification": "Check eight equal sides and the regular-angle assumption. Reconcile area with half the perimeter times apothem and confirm vertex span exceeds flat span. A scaling check with doubled side length should double all length outputs and quadruple area.",
    "sourceUrl": "https://openstax.org/books/contemporary-mathematics/pages/10-6-area",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
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
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      }
    ]
  },
  "winrate-calculator": {
    "keywordThemes": [
      "winrate calculator"
    ],
    "interpretation": "With 30 wins, 20 losses and 10 draws included, the win rate is 50%. Reaching 60% through additional consecutive wins requires 15: the new rate is 45/75 = 60%. Excluding draws gives 30/50 = 60% immediately. Descriptive supplied counts and a consecutive-win target identity only. No game affiliation, points-system weighting, skill rating, opponent adjustment or future-outcome prediction. Compare the main quantity with the separately labeled intermediate values before using it in another worksheet. Retain units, input basis and any selected convention with the result so it can be reproduced.",
    "scenarios": [
      "30 wins, 20 losses, 10 draws included — 50%.",
      "Exclude those draws — 60%.",
      "15 consecutive wins on the included record — 45/75 = 60%."
    ],
    "mistakes": [
      "Comparing rates with undisclosed draw conventions.",
      "Keeping the old denominator fixed when solving target wins.",
      "Treating recorded percentage as a next-match probability."
    ],
    "verification": "Add the selected outcome counts and divide wins by that denominator. For a target below one hundred percent, add the displayed consecutive wins to both numerator and denominator and verify the resulting percentage meets the target. One fewer should fail when additional wins are required.",
    "sourceUrl": "https://openstax.org/books/contemporary-mathematics/pages/3-4-rational-numbers",
    "sourceNote": "Methodology reference reviewed on 4 October 2026. SolvePilot applies the explicitly displayed arithmetic and its own bounded input handling; the linked documentation does not certify an individual result. Review by Mohammad Qasim is editorial and technical, not a specialist assessment of the entered situation.",
    "relatedCalculators": [
      {
        "slug": "kd-calculator",
        "title": "Kd Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  }
};
