import type {Audit} from "./semrush-batch-one-audit";
export const next20Audit:Record<string,Audit> = {
  "horsepower-calculator": {
    "keywordThemes": [
      "horsepower calculator"
    ],
    "interpretation": "Read the kilowatt result as torque multiplied by angular speed. The two horsepower outputs are alternative units for that same power, not separate measurements. The page keeps the direct operating-point calculation separate from vehicle elapsed-time estimates and motor-efficiency analysis. A result is meaningful only when both inputs describe a common shaft and operating condition.",
    "scenarios": [
      "Zero rpm with 200 N·m — zero shaft power.",
      "100 N·m at 6,000 rpm — the same power as 200 N·m at 3,000 rpm.",
      "One kW — approximately 1.341022 mechanical hp and 1.359622 PS."
    ],
    "mistakes": [
      "Pairing peak torque with an unrelated maximum rpm.",
      "Treating metric PS as identical to mechanical hp.",
      "Calling electrical input power measured shaft output without efficiency evidence."
    ],
    "verification": "Independently calculate 2π times rpm divided by sixty, then multiply by torque. Convert the watt result using the labeled horsepower definition. Scaling either torque or rpm by two should scale every power output by two. Compare only matching measurement locations and do not introduce a hidden loss factor.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
    "sourceNote": "NIST lists power-unit definitions. The torque × angular-speed identity is implemented directly; no empirical vehicle model is used.",
    "relatedCalculators": [
      {
        "slug": "torque-converter",
        "title": "Torque Converter"
      },
      {
        "slug": "megawatt-calculator",
        "title": "Megawatt Calculator"
      },
      {
        "slug": "quarter-mile-calculator",
        "title": "Quarter Mile Calculator"
      }
    ]
  },
  "interest-rate-cap-payout-calculator": {
    "keywordThemes": [
      "chatham rate cap calculator"
    ],
    "interpretation": "The main amount is a single-period hypothetical settlement, not a quoted premium or a discounted cap value. Keep index, strike, notional and year fraction alongside it. The positive-excess floor prevents a negative modeled payout when rates fall below the strike, while preserving negative input rates where the contract basis allows them.",
    "scenarios": [
      "Index equals strike — zero rate-excess payout.",
      "6% index, 4% strike, 30/360 — 1,666.67 per million covered.",
      "The same inputs on 30/365 — approximately 1,643.84 per million."
    ],
    "mistakes": [
      "Using the full loan coupon instead of the cap index.",
      "Confusing premium paid upfront with a period payout received.",
      "Assuming a fixed denominator implements a contractual date-count algorithm."
    ],
    "verification": "Subtract strike from index and floor that difference at zero. Convert percentage points to a decimal, multiply by covered notional and the separately verified year fraction. Compare the period inputs with the actual cap confirmation. A market quote or valuation needs a different model and additional data.",
    "sourceUrl": "https://cf.com/insights/interest-rate-cap-payout-mechanics",
    "sourceNote": "Chatham Financial explains period payout mechanics. SolvePilot retrieves no quotes and is independent of the provider.",
    "relatedCalculators": [
      {
        "slug": "basis-points-calculator",
        "title": "Basis Points Calculator"
      },
      {
        "slug": "interest-rate-calculator",
        "title": "Interest Rate Calculator"
      },
      {
        "slug": "cap-rate-calculator",
        "title": "Cap Rate Calculator"
      }
    ]
  },
  "geographic-midpoint-calculator": {
    "keywordThemes": [
      "halfway point between two cities calculator"
    ],
    "interpretation": "Read the coordinate pair as a geometric midpoint on the selected spherical model. It is neither a city recommendation nor a route destination verified for access. Choosing a different representative point inside either city changes the result. Retain both source points when sharing the answer so another person can reproduce it.",
    "scenarios": [
      "Identical locations — the midpoint is unchanged.",
      "Equator from longitude 0° to 90° — midpoint longitude 45°.",
      "Equator from 170° to −170° — midpoint lies on the antimeridian."
    ],
    "mistakes": [
      "Averaging wrapped longitudes as ordinary numbers.",
      "Expecting geographic halfway to imply equal driving duration.",
      "Using a city centroid when the intended trip starts at a distant suburb."
    ],
    "verification": "Use symmetric equatorial examples first. Swapping the two endpoints should leave the physical midpoint unchanged. For a real meeting, compare the output with a map and then evaluate the actual routes, access and venues independently. Do not use this spherical result for surveys or navigation requiring a certified geodetic model.",
    "sourceUrl": "https://www.usgs.gov/educational-resources/geographic-centers",
    "sourceNote": "USGS discusses geographic centers. This page uses its explicitly disclosed vector midpoint; it does not identify a geographic center of a city or a road-network midpoint.",
    "relatedCalculators": [
      {
        "slug": "right-triangle-calculator",
        "title": "Right Triangle Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      }
    ]
  },
  "cake-pricing-calculator": {
    "keywordThemes": [
      "cake pricing calculator"
    ],
    "interpretation": "The modeled selling price leaves the requested share for profit after the entered cost and selling-fee assumptions. The supporting cost, fee and profit amounts let you reconcile the equation. A price derived from incomplete costs can satisfy the formula while still failing to cover the actual order, so cost completeness matters more than the number of displayed decimals.",
    "scenarios": [
      "Zero margin and zero percentage fee — selling price equals entered cost.",
      "Higher labor hours with unchanged rates — cost and required price increase.",
      "20% margin plus 4% fee — 76% of price covers the fixed cost basis."
    ],
    "mistakes": [
      "Applying margin as a markup on ingredients only.",
      "Leaving decoration labor out of the cost worksheet.",
      "Counting the same packaging or fee in two fields."
    ],
    "verification": "Multiply modeled price by one minus the combined margin/fee fraction to recover the total cost. Separately subtract cost and percentage fees from price and compare the remainder with price times margin. Review ingredient quantities, labor time and provider fee rules against your own order records.",
    "sourceUrl": "https://legacy.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point",
    "sourceNote": "SBA explains cost and price relationships in break-even analysis. SolvePilot implements the disclosed supplied-cost margin identity, not a recommended market price.",
    "relatedCalculators": [
      {
        "slug": "profit-margin-calculator-global",
        "title": "Profit Margin Calculator Global"
      },
      {
        "slug": "business-break-even-calculator",
        "title": "Business Break Even Calculator"
      },
      {
        "slug": "merchant-processing-fee-calculator",
        "title": "Merchant Processing Fee Calculator"
      }
    ]
  },
  "sheep-gestation-calculator": {
    "keywordThemes": [
      "sheep gestation calculator"
    ],
    "interpretation": "The center and window are calendar planning references. They do not diagnose delayed gestation or prescribe when intervention should occur. A precisely recorded input improves the record, while the actual biological timing still varies. Keep the original mating evidence and the general-reference nature of the window visible when sharing the result.",
    "scenarios": [
      "1 January 2026 — center 28 May and reference 25–31 May.",
      "Shift mating by seven days — every output shifts seven days.",
      "29 February in a leap year — calendar addition includes the extra day correctly."
    ],
    "mistakes": [
      "Treating ram exposure as a confirmed conception date.",
      "Using the planning center as a veterinary intervention threshold.",
      "Ignoring uncertainty when several mating dates are possible."
    ],
    "verification": "Count the stated number of calendar days on a second calendar and confirm the original service date. Check that the endpoints are three days before and after the 147-day center. Interpret the dates with veterinary records; arithmetic alone cannot confirm the animal’s condition.",
    "sourceUrl": "https://www.merckvetmanual.com/reproductive-system/prolonged-gestation-in-cattle-and-sheep/overview-of-prolonged-gestation-in-cattle-and-sheep",
    "sourceNote": "Merck Veterinary Manual provides the general sheep gestation range. A separate Merck sheep-management reference gives an average of 147 days; this is editorial, not individual veterinary review.",
    "relatedCalculators": [
      {
        "slug": "goat-gestation-calculator",
        "title": "Goat Gestation Calculator"
      },
      {
        "slug": "mare-gestation-calculator",
        "title": "Mare Gestation Calculator"
      },
      {
        "slug": "dog-pregnancy-calculator",
        "title": "Dog Pregnancy Calculator"
      }
    ]
  },
  "boolean-algebra-calculator": {
    "keywordThemes": [
      "boolean algebra calculator"
    ],
    "interpretation": "The first output contains the complete assignment-to-result mapping. Read its variable heading before interpreting each row. The classification summarizes the entire table rather than just the first assignment. A correct table can still represent the wrong intended condition if the expression was transcribed incorrectly, so check syntax and grouping as well as the output.",
    "scenarios": [
      "A|!A — all rows output one.",
      "A&!A — all rows output zero.",
      "A^B — only differing input rows output one."
    ],
    "mistakes": [
      "Using inclusive OR where exclusive OR was intended.",
      "Omitting parentheses when changing the source notation.",
      "Claiming two expressions are equivalent after checking one row."
    ],
    "verification": "For two variables, list 00, 01, 10 and 11 by hand and apply the supported operator definitions. Test a tautology and contradiction, then an XOR example. To assess a proposed rewrite, compare every assignment with matching variable order; do not infer gate optimality from equivalent output.",
    "sourceUrl": "https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables",
    "sourceNote": "Standard propositional truth-table definitions; the exact bounded operator grammar and classification are disclosed by SolvePilot.",
    "relatedCalculators": [
      {
        "slug": "binary-calculator",
        "title": "Binary Calculator"
      },
      {
        "slug": "hex-calculator",
        "title": "Hex Calculator"
      },
      {
        "slug": "substitution-calculator",
        "title": "Substitution Calculator"
      }
    ]
  },
  "megawatt-calculator": {
    "keywordThemes": [
      "megawatt calculator"
    ],
    "interpretation": "Every output is a different unit representation of the same entered power magnitude. The input-unit selection is the main semantic choice, and changing it without changing the number changes the physical quantity. Keep the original measurement description with the converted result; conversion alone does not establish energy production or electrical suitability.",
    "scenarios": [
      "1 MW — 1,000 kW and 1,000,000 W.",
      "750 kW — 0.75 MW.",
      "1 GW — 1,000 MW."
    ],
    "mistakes": [
      "Treating megawatts as megawatt-hours.",
      "Changing the unit label without scaling the number.",
      "Using rated capacity as continuous actual generation."
    ],
    "verification": "Convert the result back to the input unit and recover the original magnitude before display rounding. Check adjacent prefixes using a factor of one thousand. If the purpose involves energy, current or cost, select a model that explicitly includes the missing duration, voltage or price assumptions.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
    "sourceNote": "NIST SI guidance supplies standard decimal unit prefixes and power-unit definitions. This page adds no production or energy model.",
    "relatedCalculators": [
      {
        "slug": "horsepower-calculator",
        "title": "Horsepower Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      },
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      }
    ]
  },
  "substitution-calculator": {
    "keywordThemes": [
      "substitution calculator"
    ],
    "interpretation": "The solution is the common numerical intersection of the two supplied lines. Each residual checks a separate equation, while the determinant indicates whether a unique intersection can be computed stably. A rejected near-singular system needs further mathematical or data-quality review; it should not be replaced with a generic percentage answer.",
    "scenarios": [
      "2x+y=5; x−y=1 — x=2, y=1.",
      "x=3; y=4 — zero cross-coefficients are valid.",
      "x+y=2; 2x+2y=4 — no unique solution is reported."
    ],
    "mistakes": [
      "Losing a minus sign when rearranging an equation.",
      "Checking only one of the two equations.",
      "Treating a near-singular rounded system as a precise measured intersection."
    ],
    "verification": "Insert the solution into both equations independently. Swap the order of the equations and confirm the same solution, or multiply one complete equation by a nonzero constant and check invariance. Use simple integer-coefficient examples before comparing fractional results. Inspect degeneracies separately when uniqueness fails.",
    "sourceUrl": "https://openstax.org/books/elementary-algebra-2e/pages/5-2-solving-systems-of-equations-by-substitution",
    "sourceNote": "Standard linear-equation substitution identities; implementation is limited to the disclosed six-coefficient numerical model.",
    "relatedCalculators": [
      {
        "slug": "matrix-inverse-calculator",
        "title": "Matrix Inverse Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      },
      {
        "slug": "boolean-algebra-calculator",
        "title": "Boolean Algebra Calculator"
      }
    ]
  },
  "cap-rate-calculator": {
    "keywordThemes": [
      "cap rate calculator"
    ],
    "interpretation": "The percentage reports annual property operating income relative to your chosen value basis. It is most useful when the NOI and value definitions are consistent across cases. The supporting annual and monthly-average NOI values make the basis visible, but do not add a forecast or valuation conclusion to the supplied inputs.",
    "scenarios": [
      "80,000 NOI on 1,000,000 value — 8%.",
      "The same NOI on 2,000,000 value — 4%.",
      "Income below expenses — negative NOI and cap rate remain visible."
    ],
    "mistakes": [
      "Mixing monthly income with annual expenses.",
      "Subtracting debt service inside property NOI.",
      "Comparing asking price and total project cost as identical denominators."
    ],
    "verification": "Reconcile NOI to the operating statement, then divide it by the selected property value. Doubling value while holding NOI constant should halve the rate. Multiplying both NOI and value by the same currency conversion factor should leave the rate unchanged. Verify the financial basis before using a ratio in any decision.",
    "sourceUrl": "https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/commercial-real-estate-lending/pub-ch-commercial-real-estate-previous.pdf",
    "sourceNote": "OCC explains direct capitalization using NOI and a capitalization rate. This worksheet performs the disclosed ratio and provides no appraisal or investment recommendation.",
    "relatedCalculators": [
      {
        "slug": "arv-calculator",
        "title": "Arv Calculator"
      },
      {
        "slug": "debt-service-coverage-ratio-calculator",
        "title": "Debt Service Coverage Ratio Calculator"
      },
      {
        "slug": "npv-calculator",
        "title": "Npv Calculator"
      }
    ]
  },
  "swim-time-converter": {
    "keywordThemes": [
      "swim converter",
      "time conversion calculator swimming"
    ],
    "interpretation": "The main time is a scenario, while the source pace remains a measurement-derived arithmetic summary. Both source and target distances are converted to metres before the ratio, so changing only the unit mode can materially change the result. Keep factor-one outputs labeled distance-only and distinguish them from accepted race conversions.",
    "scenarios": [
      "100 m in 80 s to 200 m, factor 1 — 160 s.",
      "100 yd to 100 m, factor 1 — time scales by 1/0.9144.",
      "The same source and target distance, factor 1.05 — time increases 5%."
    ],
    "mistakes": [
      "Treating a distance-only ratio as an official pool-course conversion.",
      "Entering 1:20 as an hour-and-minute duration.",
      "Using a multiplicative factor to reproduce an additive event method."
    ],
    "verification": "Convert both distances to the same unit first. Divide target distance by source distance, multiply by the original seconds and then the explicit factor. An unchanged distance and factor one must preserve time. Confirm any real meet-entry use against the current meet announcement and accepted conversion method.",
    "sourceUrl": "https://www.usaswimming.org/docs/default-source/timesdocuments/general-docs/times-and-recognition-policy-manual.pdf",
    "sourceNote": "USA Swimming policies distinguish official times and meet-entry acceptance. SolvePilot provides independent supplied-factor arithmetic rather than an official federation conversion table.",
    "relatedCalculators": [
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "cpm-calculator": {
    "keywordThemes": [
      "cpm calculator"
    ],
    "interpretation": "Read CPM alongside the reporting basis: currency, date range, spend inclusions and impression definition. The inverse mode uses an assumed constant price per thousand and cannot predict changing auction conditions. Two equal CPM values can describe very different reach and conversion outcomes, so the ratio should not replace objective-specific performance evidence.",
    "scenarios": [
      "250 spend and 50,000 impressions — CPM 5.",
      "400 budget at constant CPM 8 — 50,000 modeled impressions.",
      "Double spend and impressions together — CPM is unchanged."
    ],
    "mistakes": [
      "Mixing campaign periods between numerator and denominator.",
      "Treating impressions as unique people or conversions.",
      "Assuming a supplied constant CPM forecasts real auction delivery."
    ],
    "verification": "Multiply CPM by impressions divided by one thousand and recover spend. For reverse mode, multiply the resulting scenario impressions by supplied CPM divided by one thousand. Reconcile the original reporting scope and cost definition with the ad platform before comparing campaigns.",
    "sourceUrl": "https://support.google.com/google-ads/answer/6310?hl=en",
    "sourceNote": "Google Ads defines CPM as cost per thousand impressions. The supplied-budget inverse is an arithmetic scenario and not a Google delivery forecast.",
    "relatedCalculators": [
      {
        "slug": "average-order-value-calculator",
        "title": "Average Order Value Calculator"
      },
      {
        "slug": "merchant-processing-fee-calculator",
        "title": "Merchant Processing Fee Calculator"
      },
      {
        "slug": "business-break-even-calculator",
        "title": "Business Break Even Calculator"
      }
    ]
  },
  "fence-cost-estimator": {
    "keywordThemes": [
      "fence cost estimator"
    ],
    "interpretation": "The total is the sum of four transparent quotation components. A difference between scenarios can come from rates, allowance or fixed charges, so inspect those outputs before treating one number as a complete installed bid. A valid calculation can still omit an important site cost; the contractor’s actual scope and takeoff control the final quotation.",
    "scenarios": [
      "Zero allowance — material equals length times material rate.",
      "100 ft at 12 and 8 with 10% material allowance — 2,120 before fixed costs.",
      "Zero run length with a gate cost — only separate charges remain."
    ],
    "mistakes": [
      "Using a per-foot rate against a metre length.",
      "Adding labor to a complete installed unit rate.",
      "Adding waste again when a supplier quote already includes it."
    ],
    "verification": "Recalculate material and labor separately, then add the exact gate and other charges once. Compare the stated length with the quotation and confirm that the allowance affects only material. Check scope exclusions with the actual supplier or contractor before treating the worksheet as a project budget.",
    "sourceUrl": "https://www.nist.gov/pml/owm/metric-si/si-units",
    "sourceNote": "The model uses supplied-price arithmetic and compatible length units. No regional price table or engineering standard is claimed.",
    "relatedCalculators": [
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      },
      {
        "slug": "fence-post-depth-calculator",
        "title": "Fence Post Depth Calculator"
      },
      {
        "slug": "wainscoting-calculator",
        "title": "Wainscoting Calculator"
      }
    ]
  },
  "subwoofer-case-calculator": {
    "keywordThemes": [
      "subwoofer case calculator"
    ],
    "interpretation": "The net result is remaining air space under the supplied rectangular construction assumptions. It is useful for checking a takeoff but cannot choose an enclosure alignment or validate a driver specification. The gross output and internal dimensions expose the subtraction steps so you can detect an external-versus-internal measurement mix-up.",
    "scenarios": [
      "16-inch cube with 0.75-inch panels — 14.5-inch internal cube.",
      "Zero displacement — net and gross volume are equal.",
      "Displacement equal to gross volume — no positive-air-space result is accepted."
    ],
    "mistakes": [
      "Entering interior measurements as external dimensions.",
      "Using nominal driver diameter as driver displacement.",
      "Treating a volume calculation as a complete acoustic design."
    ],
    "verification": "Measure or calculate the three actual interior dimensions, multiply them and divide by 1,728 for cubic feet. Subtract each documented displacement exactly once. Compare the remaining volume with the manufacturer’s stated net or gross basis, without assuming volume alone validates the enclosure design.",
    "sourceUrl": "https://www8.garmin.com/manuals/webhelp/GUID-87FA0E45-3BED-4C90-A77C-569C32F53AF4/EN-US/GUID-2B485F51-DFCE-4E87-8DC4-90598EC4C5EF.html",
    "sourceNote": "JL Audio manufacturer instructions hosted by Garmin distinguish recommended net enclosure volume and displacement. No model-specific target is loaded by SolvePilot.",
    "relatedCalculators": [
      {
        "slug": "volume-calculator",
        "title": "Volume Calculator"
      },
      {
        "slug": "cubic-yard-calculator",
        "title": "Cubic Yard Calculator"
      },
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      }
    ]
  },
  "acres-per-hour-calculator": {
    "keywordThemes": [
      "acres per hour calculator"
    ],
    "interpretation": "The effective rate is theoretical area coverage multiplied by your chosen efficiency. The hours result uses that effective rate, not the theoretical maximum. The most important judgment is the meaning of the supplied width, speed and efficiency; a mathematically exact unit conversion cannot establish actual machine productivity.",
    "scenarios": [
      "20 ft ×5 mph at 75% — 9.090909 acres/hour.",
      "The same operation at 100% — 12.121212 acres/hour.",
      "Double field acres at unchanged capacity — double modeled hours."
    ],
    "mistakes": [
      "Using transport speed instead of field ground speed.",
      "Applying an overlap reduction twice through width and efficiency.",
      "Treating modeled operating hours as a weather-independent calendar promise."
    ],
    "verification": "Calculate width times speed divided by 8.25, then apply efficiency once. Multiply the effective capacity by the reported hours and recover the field acres. Compare assumptions with measured work records on a consistent loss and downtime basis before using the scenario for planning.",
    "sourceUrl": "https://www.extension.iastate.edu/Agdm/crops/html/a3-28.html",
    "sourceNote": "Iowa State University Extension explains field capacity using width, speed and efficiency. The page’s default values are illustrations, not operating prescriptions.",
    "relatedCalculators": [
      {
        "slug": "lawn-mowing-cost-calculator",
        "title": "Lawn Mowing Cost Calculator"
      },
      {
        "slug": "productivity-calculator",
        "title": "Productivity Calculator"
      },
      {
        "slug": "lead-time-calculator",
        "title": "Lead Time Calculator"
      }
    ]
  },
  "torque-converter": {
    "keywordThemes": [
      "n-m to ft lbs converter"
    ],
    "interpretation": "The output is the same supplied torque expressed in another unit. The direction selection controls whether the factor is applied by multiplication or division. Preserve the physical context and original specification; the converted number cannot supply missing fastening conditions or turn an energy quantity into a torque recommendation.",
    "scenarios": [
      "100 N·m — approximately 73.75621493 lbf·ft.",
      "100 lbf·ft — approximately 135.58179483 N·m.",
      "A negative analytical torque — sign is preserved after conversion."
    ],
    "mistakes": [
      "Entering inch-pounds in the foot-pound mode.",
      "Treating a unit conversion as a fastening recommendation.",
      "Rounding intermediate factors instead of the final reported result."
    ],
    "verification": "Convert a result back in the opposite direction and recover the original torque within display rounding. Check the unit symbols on the original specification, especially foot versus inch. Reconcile practical precision with the source specification and tool, rather than using all displayed decimals as a required setting.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
    "sourceNote": "NIST lists torque conversion factors. SolvePilot uses defined foot and pound-force factors and provides no fastener specification.",
    "relatedCalculators": [
      {
        "slug": "horsepower-calculator",
        "title": "Horsepower Calculator"
      },
      {
        "slug": "ohms-law-calculator",
        "title": "Ohms Law Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      }
    ]
  }
};
