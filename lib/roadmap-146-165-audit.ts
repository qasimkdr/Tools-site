import type {Audit} from "./semrush-batch-one-audit";
export const roadmap146Audit: Record<string,Audit> = {
  "epoxy-resin-calculator": {
    "keywordThemes": [
      "epoxy resin calculator"
    ],
    "interpretation": "Rectangular constant-depth geometry; user-supplied product volume ratio, not mass ratio or cure design. Compare total mixed volume with both component outputs: their sum should return the total. Keep geometric and allowance-adjusted amounts separate so a purchasing margin is not mistaken for layer thickness.",
    "scenarios": [
      "100 × 50 cm at 2 mm, no allowance — 1 L geometric mixed volume.",
      "The same layer at 4 mm — 2 L before allowance.",
      "1.1 L total at 2:1 by volume — 0.7333 L resin and 0.3667 L hardener."
    ],
    "mistakes": [
      "Using a weight ratio as a volume ratio.",
      "Entering millimetres into centimetre length fields.",
      "Treating purchasing volume as a permitted single batch or pour depth."
    ],
    "verification": "Reverse-check by multiplying layer litres by 10,000 and dividing by measured length and width; this should recover thickness in millimetres. Confirm resin and hardener volumes retain the entered ratio.",
    "sourceNote": "Rectangular constant-depth geometry; user-supplied product volume ratio, not mass ratio or cure design.",
    "relatedCalculators": [
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator — Boxes, Tanks, Ponds and Tubes"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ],
    "sourceUrl": "https://www.westsystem.com/instruction/epoxy-basics/dispensing-and-mixing/"
  },
  "molarity-calculator": {
    "keywordThemes": [
      "molarity calculator",
      "molar calculator"
    ],
    "interpretation": "Specified pure solute; final volume; dilution assumes conserved solute and no reaction. Interpret the unit before interpreting the number. A result in mol/L is the specified solute amount divided by final litres; required-mass and dilution modes answer different questions and cannot be read as concentration outputs.",
    "scenarios": [
      "5.844 g ÷ 58.44 g/mol ÷ 1 L — 0.1 M.",
      "0.2 mol in 500 mL — 0.4 M.",
      "1 M stock to 100 mL of 0.1 M — 10 mL stock."
    ],
    "mistakes": [
      "Using solvent volume instead of final solution volume.",
      "Confusing millilitres with litres.",
      "Using the anhydrous molar mass for a hydrated solute."
    ],
    "verification": "Recover moles by multiplying reported molarity by final litres. For dilution, compare stock molarity times calculated aliquot volume with target molarity times final volume, using the same volume unit on both sides.",
    "sourceNote": "Specified pure solute; final volume; dilution assumes conserved solute and no reaction.",
    "relatedCalculators": [
      {
        "slug": "molecular-weight-calculator",
        "title": "Molecular Weight Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ],
    "sourceUrl": "https://openstax.org/books/chemistry-2e/pages/3-3-molarity"
  },
  "garage-door-spring-calculator": {
    "keywordThemes": [
      "garage door spring calculator"
    ],
    "interpretation": "Static force-times-moment-arm model only; no replacement sizing, winding turns or installation advice. The two torque values describe a mathematical total and an assumed equal share. Neither is a spring rating through its full travel. Use the unit conversion to check numerical documentation, not to choose or alter installed hardware.",
    "scenarios": [
      "200 lbf at 2 in — 400 lbf·in total.",
      "Two equal springs in that ideal model — 200 lbf·in each.",
      "400 lbf·in — approximately 45.194 N·m."
    ],
    "mistakes": [
      "Confusing moment arm with diameter.",
      "Treating torque as a replacement spring specification.",
      "Using an ideal equal split to certify installed hardware."
    ],
    "verification": "Multiplying equal-spring torque by the entered spring count should recover total torque. Divide total torque by documented moment arm to recover the force input. A reversible arithmetic check does not verify system safety.",
    "sourceNote": "Static force-times-moment-arm model only; no replacement sizing, winding turns or installation advice.",
    "relatedCalculators": [
      {
        "slug": "ohms-law-calculator",
        "title": "Ohm’s Law Calculator and Resistor Color Codes"
      },
      {
        "slug": "fence-post-depth-calculator",
        "title": "Fence Post Depth Calculator"
      },
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      }
    ],
    "sourceUrl": "https://www.dasma.com/safety-tips/"
  },
  "lawn-mowing-cost-calculator": {
    "keywordThemes": [
      "lawn mowing cost calculator"
    ],
    "interpretation": "User-supplied effective productivity and pricing; no local quote or hidden service package. The fixed charge remains when variable mowing time changes. Separate that amount from the labor portion before comparing service plans, and keep repeat visits distinct from an actual calendar or seasonal contract.",
    "scenarios": [
      "10,000 ft² at 5,000 ft²/hour — 2 active hours.",
      "2 hours × 30 plus 10 fixed — 70 per visit.",
      "Four identical visits at 70 — 280 total."
    ],
    "mistakes": [
      "Using parcel area instead of mowable area.",
      "Using a theoretical mower speed as effective work rate.",
      "Counting travel in both productivity and fixed cost."
    ],
    "verification": "Subtract fixed cost from per-visit price and divide by the hourly charge to recover active labor hours when the charge is nonzero. Multiply those hours by measured productivity to recover area.",
    "sourceNote": "User-supplied effective productivity and pricing; no local quote or hidden service package.",
    "relatedCalculators": [
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      },
      {
        "slug": "productivity-calculator",
        "title": "Productivity Calculator"
      },
      {
        "slug": "freelance-project-profit-calculator",
        "title": "Freelance Project Profit Calculator"
      }
    ]
  },
  "quarter-mile-calculator": {
    "keywordThemes": [
      "1/4 mile calculator",
      "1 4 of a mile calculator"
    ],
    "interpretation": "Disclosed empirical cube-root correlation only; no traction simulation, conversion between hp bases or performance guarantee. Read elapsed time and trap speed as separate model outputs. A plausible speed does not validate a predicted ET. Coefficient changes can shift either result without new vehicle evidence, so keep their origin with the comparison.",
    "scenarios": [
      "3,200 lb and 400 hp, coefficients 5.825/234 — 11.65 s and 117 mph.",
      "Doubling weight at fixed hp — ET multiplies by cube root of two.",
      "Doubling both weight and hp — the modelled outputs stay the same."
    ],
    "mistakes": [
      "Mixing wheel and engine horsepower bases.",
      "Leaving the driver out of race weight.",
      "Treating empirical output as a public-road testing target."
    ],
    "verification": "For the default example, cube root of 3,200/400 is exactly two. Multiply 5.825 by two and divide 234 by two to independently reproduce the two displayed model outputs.",
    "sourceNote": "Disclosed empirical cube-root correlation only; no traction simulation, conversion between hp bases or performance guarantee.",
    "relatedCalculators": [
      {
        "slug": "arrow-speed-calculator",
        "title": "Arrow Speed Calculator — Measured Flight"
      },
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace and Split Calculator"
      },
      {
        "slug": "fuel-economy-converter",
        "title": "Fuel Economy Converter"
      }
    ],
    "sourceUrl": "https://www.ajdesigner.com/horsepower-elapsed-time/",
    "secondarySourceUrl": "https://www.ajdesigner.com/horsepower-trap-speed/"
  },
  "firewood-cord-calculator": {
    "keywordThemes": [
      "firewood calculator cord"
    ],
    "interpretation": "Measured rectangular stacked volume; no universal face-cord or loose-load conversion. The cord fraction relates the measured stacked envelope to a full cord. It does not count solid timber alone. Price scales that fraction by your supplied rate without judging firewood quality or the seller’s measurement agreement.",
    "scenarios": [
      "8 × 4 × 4 ft — 1 full cord.",
      "8 × 4 × 2 ft — 0.5 full cord.",
      "1 cord at a supplied rate of 250 — 250 before excluded charges."
    ],
    "mistakes": [
      "Ignoring the stack depth.",
      "Treating a loose load as a solid rectangular stack.",
      "Assuming every face cord has the same fraction of a full cord."
    ],
    "verification": "Multiply the cord equivalent by 128 to recover stacked cubic feet. Independently multiply all three stack dimensions, then confirm the monetary output uses a price per full cord rather than another sales unit.",
    "sourceNote": "Measured rectangular stacked volume; no universal face-cord or loose-load conversion.",
    "relatedCalculators": [
      {
        "slug": "cubic-yard-calculator",
        "title": "Cubic Yard Calculator"
      },
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator — Boxes, Tanks, Ponds and Tubes"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      }
    ],
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8"
  },
  "nether-portal-calculator": {
    "keywordThemes": [
      "nether portal calculator"
    ],
    "interpretation": "Standard 8:1 horizontal arithmetic; no world inspection, placement or linking guarantee. Use the exact target when checking coordinate arithmetic and the lower integer target only when choosing a planning block. Dimension labels and the unchanged height reference remain necessary; a number alone does not identify a destination.",
    "scenarios": [
      "Overworld 800, −1,600 — exact Nether 100, −200.",
      "Overworld X −9 — exact −1.125, floor −2.",
      "Nether 100, −200 — Overworld 800, −1,600."
    ],
    "mistakes": [
      "Multiplying in the wrong direction.",
      "Scaling Y by eight.",
      "Treating a coordinate conversion as a linking guarantee."
    ],
    "verification": "Reverse the operation on exact coordinates: multiply Nether targets by eight to recover Overworld inputs, or divide Overworld targets by eight to recover Nether inputs. Do not reverse-check a rounded integer as though it were exact.",
    "sourceNote": "Standard 8:1 horizontal arithmetic; no world inspection, placement or linking guarantee.",
    "relatedCalculators": [
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "decimals-calculator",
        "title": "Decimals Calculator — Exact Arithmetic"
      }
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/minecraft/creator/documents/chunkerworldsettings?view=minecraft-bedrock-stable"
  },
  "arv-calculator": {
    "keywordThemes": [
      "arv calculator"
    ],
    "interpretation": "Transparent equal-weight comparable price/area model; no appraisal, automatic market adjustment or investment recommendation. Inspect comparable unit prices before the estimated subject value. Each observation has equal weight in this model, so an outlier is visible rather than silently filtered. The cost-subtracted amount still needs acquisition price and profit assumptions.",
    "scenarios": [
      "200,000/1,000 and 330,000/1,500 — mean 210 per ft².",
      "1,200 ft² subject at 210 — base 252,000.",
      "252,000 less 40,000 supplied costs — 212,000 before acquisition and profit."
    ],
    "mistakes": [
      "Mismatching price and floor-area list order.",
      "Mixing asking prices with sold transactions.",
      "Calling value less costs a recommended purchase bid."
    ],
    "verification": "Calculate every sold-price/floor-area ratio separately and average those ratios. For zero adjustment, dividing the subject estimate by its floor area should reproduce that mean. Do not substitute a pooled-price/pooled-area calculation.",
    "sourceNote": "Transparent equal-weight comparable price/area model; no appraisal, automatic market adjustment or investment recommendation.",
    "relatedCalculators": [
      {
        "slug": "seller-financing-calculator",
        "title": "Seller Financing Calculator"
      },
      {
        "slug": "seller-net-sheet-calculator",
        "title": "Seller Net Sheet Calculator"
      },
      {
        "slug": "debt-service-coverage-ratio-calculator",
        "title": "Debt Service Coverage Ratio Calculator"
      }
    ]
  },
  "breastfeeding-calorie-calculator": {
    "keywordThemes": [
      "breastfeeding calorie calculator"
    ],
    "interpretation": "General reference addition for well-nourished breastfeeding mothers only; not individualized dietary, weight-loss or milk-supply advice. The range describes the general addition, not a personal threshold to obey. Both endpoints share the same unverified-by-this-tool baseline. If that basis changes, retain both the new baseline source and the reason for the change.",
    "scenarios": [
      "Reference 2,000 — illustrative 2,330–2,400 kcal/day.",
      "Reference 2,200 — illustrative 2,530–2,600 kcal/day.",
      "Baseline already includes an increment — do not add it a second time."
    ],
    "mistakes": [
      "Entering pregnancy intake instead of the stated reference.",
      "Treating population guidance as a personal prescription.",
      "Inventing a linear adjustment from a feeding percentage."
    ],
    "verification": "Subtract the entered reference from each endpoint: the differences should be 330 and 400 kcal/day. This checks addition only and does not confirm that either the baseline or resulting range suits an individual.",
    "sourceNote": "General reference addition for well-nourished breastfeeding mothers only; not individualized dietary, weight-loss or milk-supply advice.",
    "relatedCalculators": [
      {
        "slug": "calories-burned-calculator",
        "title": "Calories Burned Calculator — Walking, Cycling and Running"
      },
      {
        "slug": "body-surface-area-calculator",
        "title": "Body Surface Area Calculator"
      },
      {
        "slug": "baby-percentile-calculator",
        "title": "Baby Percentile Calculator — WHO Weight for Age"
      }
    ],
    "sourceUrl": "https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/maternal-diet.html"
  }
};
