import type {Audit} from "./semrush-batch-one-audit";
export const roadmap186Audit:Record<string,Audit> = {
  "percent-calculator": {
    "keywordThemes": [
      "percent difference calculator",
      "rpd calculator",
      "percentage change",
      "percentage of a number",
      "part and whole percentage",
      "reverse percentage",
      "time percentage calculator",
      "percentage reduction calculator",
      "decimal to percent",
      "percentage of percentage formula"
    ],
    "interpretation": "Finite inputs are bounded to ±10¹². RPD supports non-negative values with a positive mean; change requires a positive original. This is arithmetic, not a grading policy or financial recommendation. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "80 → 100: change 25%, mean-based difference 22.222222%.",
      "3 divided by 2 expressed as percent: 150%.",
      "01:30 divided by 02:00: 75%."
    ],
    "mistakes": [
      "Using the new value as the original denominator.",
      "Entering 20 instead of 0.20 in decimal mode.",
      "Confusing percentage points with relative percentage change."
    ],
    "verification": "Reverse the inputs in RPD and confirm the result stays the same; reverse them in change mode and confirm the baseline changes. Verify part percentage multiplied by the whole recovers the part.",
    "sourceNote": "NIST Dataplot percent-difference documentation identifies alternative denominators; this page explicitly uses the arithmetic mean for RPD.",
    "sourceUrl": "https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/percdif.htm",
    "relatedCalculators": [
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "basis-points-calculator",
        "title": "Basis Points Calculator"
      },
      {
        "slug": "rounding-calculator",
        "title": "Exact Rounding Calculator"
      }
    ]
  },
  "mulch-calculator": {
    "keywordThemes": [
      "mulch calculator"
    ],
    "interpretation": "Rectangular geometric volume with user-selected depth and allowance. No plant-depth recommendation, weight, price, compaction prediction or supplier delivery minimum is assumed. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "12 × 8 ft at 3 in: 24 ft³.",
      "24 ft³ from 2 ft³ bags: 12 bags.",
      "10% allowance: 26.4 ft³, 14 whole bags."
    ],
    "mistakes": [
      "Entering inches in a feet field.",
      "Using weight as bag volume.",
      "Rounding each small bed before combining one purchase."
    ],
    "verification": "Confirm planned cubic feet divided by 27 equals yards. Multiply the whole bag count by the labeled volume and check it meets the planned volume.",
    "sourceNote": "Penn State Extension discusses mulch layer depth as a planting consideration. The purchasing arithmetic here uses measured area and user-selected depth.",
    "sourceUrl": "https://extension.psu.edu/applying-mulches-in-home-fruit-plantings",
    "relatedCalculators": [
      {
        "slug": "soil-calculator",
        "title": "Soil Cubic Yards"
      },
      {
        "slug": "cubic-yard-calculator",
        "title": "Cubic Yard Calculator"
      },
      {
        "slug": "gravel-stone-calculator",
        "title": "Gravel Calculator"
      }
    ]
  },
  "concrete-block-calculator": {
    "keywordThemes": [
      "cement block calculator"
    ],
    "interpretation": "Simple planar face-area takeoff with nominal modular dimensions. Special units, bond layout, reinforcement, mortar, grout, foundations and structural suitability are not calculated. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "20 × 8 ft, 16;8 inch module: 180 units.",
      "Same wall and 5% allowance: 189 units.",
      "An 8 ft² opening reduces the unrounded base count by nine units."
    ],
    "mistakes": [
      "Using bare unit dimensions as nominal joint modules.",
      "Entering opening length instead of area.",
      "Treating block count as structural approval."
    ],
    "verification": "Confirm face coverage uses 144 square inches per square foot, and compare the net count with a course-by-course drawing takeoff.",
    "sourceNote": "CMHA Modular Layout of Concrete Masonry explains nominal modules and joint coordination.",
    "sourceUrl": "https://www.cmha.org/resource/tek-05-12/",
    "relatedCalculators": [
      {
        "slug": "concrete-calculator",
        "title": "Concrete Volume Calculator"
      },
      {
        "slug": "stud-calculator",
        "title": "Wall Stud Calculator"
      },
      {
        "slug": "square-footage-calculator",
        "title": "Square Footage Calculator"
      }
    ]
  },
  "basis-points-calculator": {
    "keywordThemes": [
      "bps calculator"
    ],
    "interpretation": "Finite values within ±10¹². Simple amount impact applies the supplied difference once without hidden duration, compounding, fees, taxes or investment return assumptions. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "25 bps = 0.25 percentage points.",
      "4% → 4.25% = +25 bps.",
      "10,000 × 25/10,000 = 25 currency units."
    ],
    "mistakes": [
      "Mixing decimal and numeric-percent inputs.",
      "Confusing relative percentage change with percentage points.",
      "Assuming a one-time amount is a monthly payment."
    ],
    "verification": "Check 100 bps converts to one percentage point and 0.01 as a fraction. Apply a rate delta and reverse it to recover the starting rate.",
    "sourceNote": "Federal Reserve policy communications express rate differences in basis points; the conversions here use the exact arithmetic definition.",
    "sourceUrl": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
    "relatedCalculators": [
      {
        "slug": "percent-calculator",
        "title": "Percent Difference Calculator"
      },
      {
        "slug": "interest-rate-calculator",
        "title": "Interest Rate Calculator"
      },
      {
        "slug": "compound-interest-calculator",
        "title": "Compound Interest Calculator"
      }
    ]
  },
  "rounding-calculator": {
    "keywordThemes": [
      "rounding calculator",
      "round calculator",
      "rounding solver",
      "round to the nearest tenth calculator",
      "round off calculator",
      "round to the nearest hundredth calculator",
      "rounding numbers calculator",
      "round to the nearest 10th calculator"
    ],
    "interpretation": "Plain decimal text only, with at most 200 integer and 200 fractional digits. Decimal precision −12…18; significant figures 1…15. No expression evaluation or prescribed professional rounding policy. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "1.005 at two places: 1.01 away; 1.00 even.",
      "−1.25 at one place: −1.3 away; −1.2 even.",
      "0.012345 at three significant figures: 0.0123."
    ],
    "mistakes": [
      "Confusing nearest tenth with nearest ten.",
      "Rounding intermediate values twice.",
      "Assuming every software package uses the same tie rule."
    ],
    "verification": "Check an exact tie and values immediately on either side. Verify a large integer is retained unchanged when no digits need discarding.",
    "sourceNote": "Original exact coefficient/scale implementation; NIST SP 811 provides context for documenting numerical precision and rounding.",
    "sourceUrl": "https://www.nist.gov/pml/special-publication-811",
    "relatedCalculators": [
      {
        "slug": "scientific-notation-calculator",
        "title": "Scientific Notation Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "mean-standard-deviation-calculator",
        "title": "Mean and Standard Deviation"
      }
    ]
  },
  "tire-size-calculator": {
    "keywordThemes": [
      "tacoma tire calculator",
      "tire aspect ratio",
      "tire size converter",
      "americas tire calculator",
      "tire size comparison calculator",
      "tire height calculator",
      "tire dimension converter"
    ],
    "interpretation": "Nominal metric radial geometry only. No vehicle fitment, load or speed rating, actual rolling radius, clearance approval or retailer affiliation. Speed ratio is an ideal illustrative model. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "265/70R16: 185.5 mm sidewall, 777.4 mm diameter.",
      "285/70R17: 830.8 mm nominal diameter.",
      "Equal original and comparison sizes: zero diameter change and unchanged ideal speed."
    ],
    "mistakes": [
      "Treating aspect ratio as millimeters.",
      "Using nominal radius as guaranteed ground clearance.",
      "Assuming a geometry comparison proves vehicle fitment."
    ],
    "verification": "Recompute wheel inches × 25.4 plus two sidewalls, then compare the ideal speed ratio against the same-size baseline.",
    "sourceNote": "Michelin explains metric tire width, aspect ratio and rim-diameter markings; real replacement requirements need the vehicle specification.",
    "sourceUrl": "https://www.michelinman.com/auto/auto-tips-and-advice/tires-101/tire-markings-explained",
    "relatedCalculators": [
      {
        "slug": "aspect-ratio-calculator",
        "title": "Aspect Ratio Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Difference Calculator"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison"
      }
    ]
  },
  "anniversary-calculator": {
    "keywordThemes": [
      "anniversary calculator"
    ],
    "interpretation": "Gregorian date-only annual recurrence, not business-day, legal eligibility, time-zone or elapsed-hour calculation. February 29 observation is an explicit user convention. Inputs are processed on this device. Editing fields leaves the previous submitted result visible until Calculate is clicked again.",
    "scenarios": [
      "2020-10-03 to 2026-10-03: six complete anniversaries.",
      "The next date after that reference is 2027-10-03.",
      "2024-02-29 in 2025 uses your selected February 28 or March 1 convention."
    ],
    "mistakes": [
      "Dividing total days by 365 to count anniversaries.",
      "Confusing today’s anniversary with the next future occurrence.",
      "Treating an observation convention as a legal rule."
    ],
    "verification": "Check the day before and on an anniversary. For February 29, compare both policies in a non-leap year and confirm they coincide in a leap year.",
    "sourceNote": "U.S. Naval Observatory explains Gregorian calendars and the divisible-by-4/100/400 leap-year rule.",
    "sourceUrl": "https://aa.usno.navy.mil/faq/calendars",
    "relatedCalculators": [
      {
        "slug": "date-from-today-calculator",
        "title": "Date Addition Calculator"
      },
      {
        "slug": "age-calculator",
        "title": "Age Calculator"
      },
      {
        "slug": "work-hours-calculator",
        "title": "Work Hours Calculator"
      }
    ]
  }
};
