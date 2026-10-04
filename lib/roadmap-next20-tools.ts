import type {Tool} from "./tools";
export const next20Tools:Tool[] = [
  {
    "slug": "horsepower-calculator",
    "title": "Horsepower Calculator — Torque, RPM and Shaft Power",
    "shortTitle": "Horsepower",
    "category": "Vehicles",
    "description": "Calculate shaft horsepower and kilowatts from measured torque and matching rpm, with separate mechanical and metric horsepower definitions.",
    "intro": "This horsepower calculator converts torque and rotational speed at the same operating point into shaft power. Enter torque in newton metres and speed in revolutions per minute. The result reports kilowatts, mechanical horsepower and metric horsepower so the unit definition remains visible. It does not estimate engine output from vehicle weight, acceleration or advertised peak torque. A torque measurement and an rpm measurement must describe the same shaft under the same conditions; pairing unrelated maxima creates a fictional operating point.",
    "formula": "Power W = torque N·m × rpm × 2π/60. Mechanical hp = W/745.6998715822702. Metric PS = W/735.49875.",
    "example": "At 200 N·m and 3,000 rpm, angular speed is 100π rad/s and shaft power is approximately 62.831853 kW, 84.258903 mechanical hp or 85.427546 PS.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Match torque with its operating speed",
        "text": "An engine specification may list peak torque at one speed and peak power at another. Use the torque actually associated with the entered rpm, rather than combining the highest number in each column. A dynamometer trace or a documented motor operating point provides a more meaningful pair. The formula describes instantaneous steady operating power; it does not integrate a changing torque curve across a drive cycle or establish average fuel consumption. Retain the shaft and measurement conditions with the calculation."
      },
      {
        "title": "Mechanical horsepower and metric PS",
        "text": "Mechanical horsepower and metric horsepower are different unit definitions. A number marked PS or metric hp should not automatically be compared with a number marked mechanical hp as though they were identical. The calculator derives both from the same watt result instead of silently renaming one unit. This distinction changes the displayed number without changing the physical power. Electrical input power, shaft output power and brake horsepower also describe different measurement locations, even when each is expressed using a power unit."
      },
      {
        "title": "Why torque alone is insufficient",
        "text": "A high static torque can occur while a shaft is not rotating. At zero rpm the modeled mechanical power is zero because angular speed is zero. At a fixed torque, doubling rpm doubles power. At a fixed rpm, doubling torque also doubles power. These are relationships within the supplied operating model, not predictions that a motor can sustain every torque and speed combination. Equipment limits, thermal behavior and control conditions determine which operating points can actually occur."
      },
      {
        "title": "Do not infer losses or vehicle performance",
        "text": "The calculation has no automatic drivetrain-loss correction, chassis weight, tyre grip or gearing model. Wheel torque and engine torque must not be substituted for one another without an independently established measurement basis. A peak horsepower number does not by itself determine a quarter-mile time or towing capability. If you use the related quarter-mile calculator, keep its empirical coefficient and effective-power assumptions separate from this direct torque-and-speed identity. Neither result is a guarantee of a real vehicle outcome."
      },
      {
        "title": "Rounding and measurement quality",
        "text": "The interface displays several decimal places to help reconcile arithmetic, but the source torque and speed determine practical accuracy. A torque measurement rounded to the nearest ten newton metres does not support reporting a highly precise physical output. For a manual check, first convert rpm to radians per second, multiply by torque and then apply the required unit factor. Preserve unrounded intermediate values when comparing with another application, and round only the final report to a precision justified by the measurements."
      }
    ],
    "faqs": [
      {
        "question": "Can torque alone give horsepower?",
        "answer": "No. Rotational speed at the same operating point is also required. Static torque with zero speed gives zero modeled shaft power."
      },
      {
        "question": "Are hp and PS the same?",
        "answer": "No. Mechanical horsepower and metric horsepower use different watt factors. The page labels both rather than treating the names as interchangeable."
      },
      {
        "question": "Can I enter peak torque and peak rpm?",
        "answer": "Only if that torque actually occurs at that rpm. Unrelated maxima do not define a real measured operating point."
      },
      {
        "question": "Does this calculate wheel horsepower?",
        "answer": "It calculates power for whichever shaft your torque and speed describe. No drivetrain-loss percentage is supplied or inferred."
      },
      {
        "question": "Can I calculate negative power?",
        "answer": "This worksheet accepts non-negative torque and speed magnitudes. Signed power-flow analysis requires a model with explicit directional conventions."
      }
    ],
    "limitations": "Read the kilowatt result as torque multiplied by angular speed. The two horsepower outputs are alternative units for that same power, not separate measurements. The page keeps the direct operating-point calculation separate from vehicle elapsed-time estimates and motor-efficiency analysis. A result is meaningful only when both inputs describe a common shaft and operating condition. The interface displays several decimal places to help reconcile arithmetic, but the source torque and speed determine practical accuracy. A torque measurement rounded to the nearest ten newton metres does not support reporting a highly precise physical output. For a manual check, first convert rpm to radians per second, multiply by torque and then apply the required unit factor. Preserve unrounded intermediate values when comparing with another application, and round only the final report to a precision justified by the measurements.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "horsepower calculator"
    ]
  },
  {
    "slug": "interest-rate-cap-payout-calculator",
    "title": "Interest Rate Cap Calculator — Supplied Period Payout",
    "shortTitle": "Interest Rate Cap",
    "category": "Money",
    "description": "Calculate an illustrative interest-rate cap period payout from supplied notional, index, strike and day count, without market premium estimates.",
    "intro": "This independent interest rate cap calculator illustrates one accrual-period payout using values from a contract or a scenario you supply. Enter covered notional, observed index rate, strike, accrual days and an explicit fixed annual denominator. It answers the payout arithmetic question; it does not reproduce the Chatham rate cap calculator, retrieve a premium quote or value a portfolio of caplets. A market cap price depends on additional information and cannot be recovered from one observed rate and a loan balance.",
    "formula": "Period payout = notional × max(index rate − strike rate, 0)/100 × accrual days/day-count denominator.",
    "example": "For 1,000,000 notional, 6% index, 4% strike and 30 days on a 360-day denominator, the illustrative payout is 1,666.67 currency units. At a 3% index the period payout is zero.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Payout is different from upfront premium",
        "text": "A cap premium is the price paid to obtain the contractual protection. This worksheet calculates a payoff for one supplied observed period after a rate is known. It does not calculate the premium, current fair value, bid, offer or termination amount. The branded Chatham query is addressed as an independent arithmetic explanation and a link to the provider, without implying affiliation. Obtain an actual quote from the relevant provider using the correct notional schedule, term, strike and market assumptions."
      },
      {
        "title": "Use the index defined by the contract",
        "text": "The relevant rate is the reference index established by the cap, not automatically the entire loan coupon. A lender margin can be part of borrowing cost without being covered by the cap payout. Contracts can define observations, reset dates, averaging or compounded overnight rates in ways absent from this simple worksheet. Enter the verified period rate on a consistent annual percentage basis. Do not use an unrelated advertised loan rate just because it is the only percentage available."
      },
      {
        "title": "Keep covered notional separate from loan balance",
        "text": "The cap may cover a scheduled amount that differs from the current outstanding loan balance. Enter the covered notional for this period, using the same currency as the intended settlement. A reduction in loan principal does not automatically establish a matching reduction in hedge notional. The worksheet supplies no amortizing hedge schedule and does not sum future periods. If you calculate several periods manually, preserve each period’s distinct notional, observed rate and accrual basis before adding amounts."
      },
      {
        "title": "Choose the annual denominator deliberately",
        "text": "Thirty accrual days divided by 360 differs from thirty divided by 365. This tool uses supplied actual days and a selected fixed denominator; it does not calculate dates or transform them under a 30/360 convention. Contracts control the proper year fraction. Entering thirty days because every month is assumed to have thirty can be incorrect. The calculation permits a negative rate or strike, but pays only a positive excess of the observed index over the strike."
      },
      {
        "title": "Interpret zero and positive payouts carefully",
        "text": "A zero modeled payout means the observed index did not exceed the strike, or the covered notional or accrual days were zero. It does not mean the cap was free, unnecessary or valueless. A positive payout does not represent profit after premium, loan interest, taxes or settlement charges. This is educational contract arithmetic, not a hedge recommendation, accounting determination or guarantee that a counterparty will settle the calculated amount. Reconcile any actual payment with the contract and provider confirmation."
      }
    ],
    "faqs": [
      {
        "question": "Is this the Chatham rate cap calculator?",
        "answer": "No. It is an independent supplied-input payout worksheet. The provider reference explains cap mechanics and is not an endorsement or connection."
      },
      {
        "question": "Can this quote the cap premium?",
        "answer": "No. Premium pricing requires market and contract information beyond this one-period payout identity."
      },
      {
        "question": "Should I include the lender margin?",
        "answer": "Use the reference index and strike defined by the cap. Do not assume the full loan coupon is the covered rate."
      },
      {
        "question": "Why can payout be zero?",
        "answer": "There is no positive rate excess when the index is at or below the strike. Zero notional or days also produces zero."
      },
      {
        "question": "Does 360 mean a 30/360 date rule?",
        "answer": "No. It means the supplied accrual days are divided by 360. No date transformation or calendar algorithm is performed."
      }
    ],
    "limitations": "The main amount is a single-period hypothetical settlement, not a quoted premium or a discounted cap value. Keep index, strike, notional and year fraction alongside it. The positive-excess floor prevents a negative modeled payout when rates fall below the strike, while preserving negative input rates where the contract basis allows them. A zero modeled payout means the observed index did not exceed the strike, or the covered notional or accrual days were zero. It does not mean the cap was free, unnecessary or valueless. A positive payout does not represent profit after premium, loan interest, taxes or settlement charges. This is educational contract arithmetic, not a hedge recommendation, accounting determination or guarantee that a counterparty will settle the calculated amount. Reconcile any actual payment with the contract and provider confirmation.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "chatham rate cap calculator"
    ]
  },
  {
    "slug": "geographic-midpoint-calculator",
    "title": "Halfway Point Between Two Cities — Coordinate Calculator",
    "shortTitle": "Halfway Point Between Two Cities",
    "category": "Everyday",
    "description": "Find a spherical geographic halfway point from two latitude and longitude pairs, with explicit limits for road distance and driving-time searches.",
    "intro": "This halfway point between two cities calculator accepts the coordinates of the two chosen city locations. It returns the midpoint of their shorter great-circle arc on a spherical Earth. You must supply latitude and longitude; the page does not search city names, access device location or use a map-routing service. Geographic halfway is different from equal road distance or equal travel time. Use the coordinates as a starting point for map research, then verify whether a nearby meeting place is accessible and appropriate.",
    "formula": "Convert each latitude/longitude pair to a unit Cartesian vector. Normalize their vector sum, then recover latitude with atan2(z, √(x²+y²)) and longitude with atan2(y,x). Antipodal points have no unique shorter-arc midpoint.",
    "example": "Locations at latitude 0°, longitudes 0° and 90°, have a geographic midpoint at 0°, 45°. Points at 0°, 170° and 0°, −170°, meet at the antimeridian, not at longitude zero.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Select the actual locations before copying coordinates",
        "text": "A city is an area rather than one mathematical point. A central station, town hall, hotel or suburb can each produce a different starting coordinate. Choose the locations you actually intend to compare and keep their labels in your own notes. The calculator does not verify that a coordinate belongs to a named city. Latitude must be between minus ninety and ninety; longitude between minus one hundred eighty and one hundred eighty. South and west locations normally use negative signs."
      },
      {
        "title": "Why averaging longitude can fail",
        "text": "Longitude wraps at the antimeridian. Directly averaging 170 and minus 170 produces zero, even though those points are close together around longitude 180. The unit-vector method avoids that particular error by working on the sphere rather than treating wrapped angular coordinates as a flat number line. It also handles ordinary latitude differences without claiming ellipsoidal geodetic precision. Near an antipodal pair, very small coordinate changes can move the midpoint substantially because the shortest path is poorly determined."
      },
      {
        "title": "Geographic halfway is not driving halfway",
        "text": "Road networks, mountain passes, ferries, borders and available transport determine actual travel paths. A geographic midpoint can fall offshore or in a place that neither traveler can reach conveniently. No routing data, live traffic, road mileage or travel-duration estimate is included. If your purpose is a meeting, inspect possible venues on a map and compare the real routes separately. The output does not suggest that an isolated coordinate is a suitable destination or that a straight line represents a safe route."
      },
      {
        "title": "Understand the spherical assumption",
        "text": "The Earth is not a perfect sphere. This page deliberately provides a reproducible spherical coordinate calculation rather than a survey-grade ellipsoidal geodesic. That is a useful distinction for broad geographic comparison, but not for land boundaries, aviation navigation or construction setting out. Decimal display precision is not a promise of equivalent positional accuracy. The input coordinate quality, chosen representative points and geometry model all affect how closely the result matches another mapping application."
      },
      {
        "title": "Special cases and privacy",
        "text": "Two identical locations return that same location. Opposite points have infinitely many half-circle paths, so the worksheet rejects an exact or extremely near antipodal pair instead of choosing an arbitrary meeting point. At a pole, longitude is not a unique physical direction even if one numeric representation is shown. All four coordinates are entered manually and calculated in the browser. No geolocation permission is requested and no route or coordinate request is sent to an external map provider."
      }
    ],
    "faqs": [
      {
        "question": "Can I enter city names?",
        "answer": "No. Supply the coordinates of the chosen locations. The page has no city-name lookup or geocoding service."
      },
      {
        "question": "Is this halfway by driving time?",
        "answer": "No. It is halfway along a shorter spherical great-circle arc. Roads and traffic require separate routing information."
      },
      {
        "question": "Why is longitude averaging wrong near 180°?",
        "answer": "Longitude wraps there. Unit-vector averaging follows the shorter spherical arc instead of crossing the globe numerically."
      },
      {
        "question": "What happens with opposite locations?",
        "answer": "Antipodal locations have no unique shortest-arc midpoint. The calculator reports that boundary rather than inventing a destination."
      },
      {
        "question": "Does the tool know my location?",
        "answer": "No. It uses only the four coordinates you enter and requests no device-location permission."
      }
    ],
    "limitations": "Read the coordinate pair as a geometric midpoint on the selected spherical model. It is neither a city recommendation nor a route destination verified for access. Choosing a different representative point inside either city changes the result. Retain both source points when sharing the answer so another person can reproduce it. Two identical locations return that same location. Opposite points have infinitely many half-circle paths, so the worksheet rejects an exact or extremely near antipodal pair instead of choosing an arbitrary meeting point. At a pole, longitude is not a unique physical direction even if one numeric representation is shown. All four coordinates are entered manually and calculated in the browser. No geolocation permission is requested and no route or coordinate request is sent to an external map provider.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "halfway point between two cities calculator"
    ]
  },
  {
    "slug": "cake-pricing-calculator",
    "title": "Cake Pricing Calculator — Labor, Costs, Margin and Fees",
    "shortTitle": "Cake Pricing",
    "category": "Money",
    "description": "Price a cake from ingredients, packaging, labor, overhead and selling fees, with a target profit margin calculated from the final selling price.",
    "intro": "This cake pricing calculator builds a selling-price scenario from the costs and margin you supply. Include ingredients, decoration, packaging, an allocated overhead amount and paid labor time. Add a percentage selling fee and any separate fixed transaction fee. The model treats target profit margin as a share of the final selling price, so it is different from adding the same percentage as a markup on ingredients. It uses one currency throughout and retrieves no local cake prices or customer-demand forecasts.",
    "formula": "Total cost = ingredients + packaging/overhead + hours × labor rate + fixed fee. Price = total cost/[1 − (margin + percentage fee)/100].",
    "example": "Ingredients 30, packaging/overhead 10, two labor hours at 15, and a fixed fee of 2 give a cost basis of 72. With 20% margin and 4% percentage fee, modeled price is 94.736842, percentage fee 3.789474 and target profit 18.947368.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Record the complete order cost",
        "text": "Include the ingredients and decoration actually used for this cake, rather than the price of every full packet purchased. Packaging and allocated overhead belong on a consistent order basis. If your first cost field already includes a cake board, do not add the same board again in packaging. Delivery can be added to a clearly identified cost bucket if you intend the price to include it; otherwise quote it separately. The result cannot detect missing expenses or duplicate entries."
      },
      {
        "title": "Pay for labor before applying profit margin",
        "text": "Labor hours multiplied by your supplied rate are part of the cost basis. Profit is a separate residual after those costs and modeled selling fees. This is especially useful when decorating time is substantial even though ingredient cost is modest. Include the relevant preparation, assembly, decoration and cleanup time if those activities belong to the order. The worksheet does not prescribe a wage, estimate hours from a cake photograph or assume unpaid owner work has zero economic cost."
      },
      {
        "title": "Margin and markup answer different questions",
        "text": "A twenty percent margin means profit is twenty percent of the final price. A twenty percent markup means adding twenty percent to a chosen cost base. Those operations generally produce different prices. This calculator solves the margin identity and includes the percentage fee in the denominator. If margin plus fee reaches one hundred percent, no finite positive price can cover a positive cost, so the input is rejected. Use the separate margin calculator to compare the two conventions explicitly."
      },
      {
        "title": "Use the actual selling-fee basis",
        "text": "The percentage fee here applies to the entire modeled selling price, while the fixed fee is an additional cost. A marketplace may charge fees on a different base or include tax, delivery, minimum charges or rounding rules. Reconcile the input with the actual provider agreement. If a fixed fee is already counted in overhead, omit it from the separate field to avoid double-counting. A tax charged to a customer is not automatically profit, and this worksheet does not prepare tax liability."
      },
      {
        "title": "A computed price is a scenario, not market evidence",
        "text": "The result shows the price needed to meet the stated accounting assumptions. It does not show whether customers will buy, how many orders will arrive or what competing bakers charge. Compare the scenario with an actual cost worksheet and your business plan before setting a quote. If you choose to round a price, recalculate realized margin from the rounded amount. Retain the labor and fee assumptions with the quotation so a later change in design or delivery can be evaluated transparently."
      }
    ],
    "faqs": [
      {
        "question": "Is the target percentage markup?",
        "answer": "No. It is profit divided by final selling price. Markup uses a cost denominator and gives a different answer."
      },
      {
        "question": "Should owner labor be included?",
        "answer": "Include a documented labor cost if the price is intended to pay for that work before profit. The calculator does not choose a labor rate."
      },
      {
        "question": "Can I add delivery?",
        "answer": "Yes, on a clearly identified cost basis, or quote delivery separately. Do not count it twice across fields."
      },
      {
        "question": "Why are some margin combinations invalid?",
        "answer": "Margin plus percentage selling fee must stay below 100% for the displayed finite-price formula."
      },
      {
        "question": "Does the result include tax automatically?",
        "answer": "No. Taxes, customer demand and local prices are not inferred. Verify the complete quotation and tax treatment separately."
      }
    ],
    "limitations": "The modeled selling price leaves the requested share for profit after the entered cost and selling-fee assumptions. The supporting cost, fee and profit amounts let you reconcile the equation. A price derived from incomplete costs can satisfy the formula while still failing to cover the actual order, so cost completeness matters more than the number of displayed decimals. The result shows the price needed to meet the stated accounting assumptions. It does not show whether customers will buy, how many orders will arrive or what competing bakers charge. Compare the scenario with an actual cost worksheet and your business plan before setting a quote. If you choose to round a price, recalculate realized margin from the rounded amount. Retain the labor and fee assumptions with the quotation so a later change in design or delivery can be evaluated transparently.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "cake pricing calculator"
    ]
  },
  {
    "slug": "sheep-gestation-calculator",
    "title": "Sheep Gestation Calculator — Lambing Date and Window",
    "shortTitle": "Sheep Gestation",
    "category": "Everyday",
    "description": "Estimate a sheep lambing planning date and reference window from a known mating date, with clear limits for pregnancy confirmation and breed variation.",
    "intro": "This sheep gestation calculator turns a known mating date into a lambing calendar estimate. It shows a 147-day planning center and a 144–150-day reference window, using Gregorian calendar days. The input is a recorded mating date, not a veterinarian-confirmed conception date. The result helps organize records and discuss timing with a veterinarian; it does not confirm pregnancy, predict the exact lambing hour or determine an intervention. Natural-service uncertainty and individual variation remain important even when the calendar arithmetic is exact.",
    "formula": "Planning center = mating date + 147 calendar days. Reference window = mating date + 144 through +150 days.",
    "example": "With a mating date of 1 January 2026, the 147-day planning date is 28 May 2026 and the reference window runs from 25 May through 31 May.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Use the date supported by your records",
        "text": "A single observed service date is more specific than a long period when a ram had access to a group. If the exact mating day is unknown, choosing one arbitrary day hides uncertainty. Record the actual exposure interval and discuss how to interpret it with a veterinarian. This calculator accepts one date at a time and does not combine multiple services or establish which service resulted in conception. A breeding record is useful evidence, but it is not proof of pregnancy."
      },
      {
        "title": "Understand the center and window",
        "text": "The center is a convenient calendar reference, not a promise. The displayed window represents a general gestation reference, not an individual probability interval calculated from breed, age, litter size or clinical findings. Those additional factors are not collected or modeled here. The calculator does not assign a likelihood to each day or claim that a date outside the window identifies a specific condition. Keep the reference basis alongside the dates rather than treating the center as an exact deadline."
      },
      {
        "title": "Calendar days include weekends and leap days",
        "text": "The computation uses whole UTC calendar days so a timezone or daylight-saving transition does not shift the displayed date. Leap years are handled by the Gregorian date engine. Enter the day of the recorded event using the date control rather than a formatted sentence or a month/day string that could be interpreted differently. The permitted range is 1900 through 2100 for the starting date. A mathematically valid old record is not a recommendation about contemporary animal management."
      },
      {
        "title": "Keep observation separate from diagnosis",
        "text": "A lambing calendar cannot determine fetal number, fetal viability, nutritional requirements or whether assistance is needed. It supplies no medication, induction, feeding or emergency-treatment instructions. If an animal appears unwell or you are concerned about pregnancy timing, use veterinary evaluation rather than a date estimate as the decision rule. This page’s editorial review checks the stated arithmetic and scope; it is not a claim that an individual animal has been assessed by a specialist."
      },
      {
        "title": "Use estimates for practical record organization",
        "text": "You can compare recorded mating dates for different ewes by calculating each separately and keeping their identifiers in your own records. A shift of one week in the input shifts all displayed dates by one week. Such consistency helps check transcription errors, but it does not reduce biological uncertainty. Recalculate when a better-supported date becomes available and retain the reason for the change. Do not use apparent numerical precision to infer a precise hour or to replace the actual flock-management plan."
      }
    ],
    "faqs": [
      {
        "question": "What gestation length is used?",
        "answer": "The center uses 147 days and the reference window 144–150 days. Both are disclosed rather than hidden behind an exact-looking due date."
      },
      {
        "question": "Does the calculator confirm pregnancy?",
        "answer": "No. It performs mating-date calendar arithmetic and cannot establish conception or fetal status."
      },
      {
        "question": "Can breed change timing?",
        "answer": "Individual and breed circumstances can differ. This page does not calculate a personalized gestation coefficient."
      },
      {
        "question": "Are weekends excluded?",
        "answer": "No. Gestation timing is counted in calendar days, including weekends and leap days."
      },
      {
        "question": "What if the mating date is uncertain?",
        "answer": "Do not treat an arbitrary single date as confirmed. Preserve the exposure interval and discuss timing with a veterinarian."
      }
    ],
    "limitations": "The center and window are calendar planning references. They do not diagnose delayed gestation or prescribe when intervention should occur. A precisely recorded input improves the record, while the actual biological timing still varies. Keep the original mating evidence and the general-reference nature of the window visible when sharing the result. You can compare recorded mating dates for different ewes by calculating each separately and keeping their identifiers in your own records. A shift of one week in the input shifts all displayed dates by one week. Such consistency helps check transcription errors, but it does not reduce biological uncertainty. Recalculate when a better-supported date becomes available and retain the reason for the change. Do not use apparent numerical precision to infer a precise hour or to replace the actual flock-management plan.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "sheep gestation calculator"
    ]
  },
  {
    "slug": "boolean-algebra-calculator",
    "title": "Boolean Algebra Calculator — Truth Table and Logic Checks",
    "shortTitle": "Boolean Algebra",
    "category": "Education",
    "description": "Evaluate Boolean expressions with NOT, AND, XOR and OR, generate all truth-table rows for up to four variables, and check tautology or contradiction.",
    "intro": "This Boolean algebra calculator evaluates a bounded logical expression and displays every possible truth-table row. Use variables A through D, constants zero and one, parentheses and the explicit operators !, &, ^ and |. The outputs classify the expression as always true, always false or contingent on its inputs. The page does not promise a shortest symbolic expression or optimal gate circuit. Truth-table evaluation is a concrete way to inspect a Boolean statement before comparing it with a proposed simplification.",
    "formula": "! means NOT, & means AND, ^ means XOR and | means OR. Precedence is NOT, AND, XOR, OR; parentheses override it. N variables produce 2^N complete input assignments.",
    "example": "A & !B is true only for A=1, B=0. A | !A is a tautology; A & !A is a contradiction. A ^ B differs from A | B when both inputs are one.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Use the supported syntax explicitly",
        "text": "Write A&B rather than AB, because implicit multiplication or adjacent variable syntax is not supported. The letters are case-insensitive and become uppercase internally. Use ! before a variable or parenthesized expression for negation. Plus, apostrophe notation and words such as AND are deliberately excluded so the parser has one unambiguous operator vocabulary. A rejected expression does not mean the underlying Boolean problem is invalid; it means the expression needs to be rewritten in this page’s disclosed syntax."
      },
      {
        "title": "Read precedence before relying on a table",
        "text": "NOT binds most tightly, followed by AND, XOR and OR. For example, A|B&C means A|(B&C). If your source uses another convention or you intend a different grouping, add parentheses explicitly. The parser evaluates every input assignment with that same grouping. Expressions are capped at two hundred characters and thirty-two nesting levels. Those bounds keep the browser operation predictable and do not restrict the mathematical subject to only short expressions in general."
      },
      {
        "title": "XOR is different from inclusive OR",
        "text": "Inclusive OR is true when either input or both inputs are true. XOR is true when the two inputs differ. Confusing the operators changes a table even when most rows happen to agree. The two-input row with both values one is a useful distinguishing test. Likewise, negating A&B produces a different expression from !A&B. Evaluate the intended grouping rather than judging equivalence from one convenient input example or from how similar two expressions look."
      },
      {
        "title": "Inspect all rows for equivalence",
        "text": "Up to four distinct variables produce at most sixteen rows. The rows are ordered as binary assignments with the variable names sorted alphabetically. To compare two expressions, calculate each and align assignments for the same set of variables. Matching outputs across every assignment establish equivalence on those variables; matching one row does not. If an expression omits a variable used by the other, consider both values of that extra variable when comparing. No automatic symbolic minimizer is claimed."
      },
      {
        "title": "Classification does not validate an application",
        "text": "A tautology is true for every displayed assignment, and a contradiction false for every assignment. A contingent expression has a mixture. Those classifications describe formal logic under the chosen syntax, not whether a real hardware system or business rule is safe or correct. The calculator does not model propagation delay, electrical behavior, sequential state or unknown HDL values. All processing is local; the input string is parsed without JavaScript eval or execution of user-supplied code."
      }
    ],
    "faqs": [
      {
        "question": "Does the calculator simplify expressions?",
        "answer": "It evaluates a complete truth table and classification. It does not claim minimum symbolic form or minimum gate count."
      },
      {
        "question": "Which operators are accepted?",
        "answer": "Use ! for NOT, & for AND, ^ for XOR and | for OR, plus parentheses, A–D and constants 0 or 1."
      },
      {
        "question": "How many variables are supported?",
        "answer": "At most four named variables, producing at most sixteen rows. The expression length and nesting are also bounded."
      },
      {
        "question": "Why is A|B&C grouped that way?",
        "answer": "AND has higher precedence than OR. Use parentheses if another grouping is intended."
      },
      {
        "question": "Does it execute pasted code?",
        "answer": "No. The bounded parser accepts the listed Boolean tokens and does not use eval or execute JavaScript."
      }
    ],
    "limitations": "The first output contains the complete assignment-to-result mapping. Read its variable heading before interpreting each row. The classification summarizes the entire table rather than just the first assignment. A correct table can still represent the wrong intended condition if the expression was transcribed incorrectly, so check syntax and grouping as well as the output. A tautology is true for every displayed assignment, and a contradiction false for every assignment. A contingent expression has a mixture. Those classifications describe formal logic under the chosen syntax, not whether a real hardware system or business rule is safe or correct. The calculator does not model propagation delay, electrical behavior, sequential state or unknown HDL values. All processing is local; the input string is parsed without JavaScript eval or execution of user-supplied code.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "boolean algebra calculator"
    ]
  },
  {
    "slug": "megawatt-calculator",
    "title": "Megawatt Calculator — W, kW, MW and GW Conversion",
    "shortTitle": "Megawatt",
    "category": "Everyday",
    "description": "Convert a supplied power value between watts, kilowatts, megawatts and gigawatts while keeping power separate from watt-hour energy calculations.",
    "intro": "This megawatt calculator converts one power value between watts, kilowatts, megawatts and gigawatts. Choose the unit belonging to the number you enter; all four outputs describe the same physical quantity. It is a unit conversion, not an energy forecast, electricity tariff estimate or generator-sizing recommendation. A watt-hour includes a duration and answers a different question. The worksheet does not infer an operating schedule, capacity factor, power factor or current from a megawatt figure.",
    "formula": "1 kW = 1,000 W; 1 MW = 1,000,000 W; 1 GW = 1,000,000,000 W. Normalize the input to watts, then divide by the target prefix factor.",
    "example": "An input of 2.5 MW equals 2,500 kW, 2,500,000 W and 0.0025 GW. An input of 750 kW equals 0.75 MW.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Select the input unit before calculating",
        "text": "A number alone is not a complete power measurement. Seven hundred fifty watts and seven hundred fifty kilowatts differ by a factor of one thousand. Check the equipment label, report or statement and select the unit actually associated with the number. The calculator accepts non-negative magnitudes and rejects unknown unit selections. Zero is a valid power value. Enter a decimal point rather than a thousands separator if your copied number contains punctuation that the numeric field does not accept."
      },
      {
        "title": "Power and energy use different dimensions",
        "text": "Power is the rate at which energy is transferred or used. Energy over a period depends on the power history and duration. One megawatt operating constantly for one hour corresponds to one megawatt-hour, but that statement adds an operating assumption not contained in the original power value. This page deliberately does not turn MW into MWh automatically. Variable operation, downtime and efficiency require an explicit model before a power rating can be used to estimate energy delivery."
      },
      {
        "title": "Capacity does not establish actual output",
        "text": "A nameplate capacity, an instantaneous measured output and an annual average power are different descriptions. Unit conversion can preserve any of those quantities, but cannot turn one description into another. A renewable plant rated at a number of megawatts does not necessarily deliver that number continuously. A motor’s electrical input rating may differ from its mechanical output. Record what the input represents alongside the converted value so a later comparison does not confuse a capacity label with measured operation."
      },
      {
        "title": "Do not infer electrical current or installation design",
        "text": "Watts alone do not establish current without voltage and the relevant electrical model. AC real power can also involve power factor and phase configuration. The related electrical calculator handles its stated supplied-input modes, while this page only changes prefixes. It supplies no cable size, protective device, generator selection or safe operating instruction. A very large converted number is not evidence that equipment can support the corresponding installation or that a displayed nameplate was interpreted correctly."
      },
      {
        "title": "Use scaling identities to check decimal placement",
        "text": "Each adjacent unit here changes by a factor of one thousand. Moving from W to kW divides by one thousand, and moving from kW to MW divides again. The reverse direction multiplies. Scientific notation can be useful for very small or large values, but the physical power stays unchanged. The interface displays up to eight decimal places, so extremely tiny target-unit outputs can round to zero. Retain the original unit and sufficient precision when transferring a small value into a much larger unit."
      }
    ],
    "faqs": [
      {
        "question": "How many watts are in one megawatt?",
        "answer": "One megawatt is one million watts. The prefix mega supplies the factor of 10⁶."
      },
      {
        "question": "Can MW be converted directly to MWh?",
        "answer": "No. Energy requires duration or a power-versus-time model. This worksheet converts power units only."
      },
      {
        "question": "Does this calculate generator size?",
        "answer": "No. Load behavior, starting demand, electrical configuration and equipment limits require additional information."
      },
      {
        "question": "Is a rated MW value measured output?",
        "answer": "Not necessarily. A nameplate rating and actual operating output are different descriptions, even when the units match."
      },
      {
        "question": "Why does a tiny result round to zero?",
        "answer": "The displayed precision is bounded. Preserve the original value or report scientific notation when a large-unit conversion is very small."
      }
    ],
    "limitations": "Every output is a different unit representation of the same entered power magnitude. The input-unit selection is the main semantic choice, and changing it without changing the number changes the physical quantity. Keep the original measurement description with the converted result; conversion alone does not establish energy production or electrical suitability. Each adjacent unit here changes by a factor of one thousand. Moving from W to kW divides by one thousand, and moving from kW to MW divides again. The reverse direction multiplies. Scientific notation can be useful for very small or large values, but the physical power stays unchanged. The interface displays up to eight decimal places, so extremely tiny target-unit outputs can round to zero. Retain the original unit and sufficient precision when transferring a small value into a much larger unit.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "megawatt calculator"
    ]
  },
  {
    "slug": "substitution-calculator",
    "title": "Substitution Calculator — Two Linear Equations",
    "shortTitle": "Substitution",
    "category": "Education",
    "description": "Solve a two-variable linear system from six coefficients, check both residuals, and identify cases without a numerically stable unique solution.",
    "intro": "This substitution calculator solves two linear equations in x and y. Enter the coefficients in a₁x+b₁y=c₁ and a₂x+b₂y=c₂ using six labeled fields. The result gives a unique numerical solution when the coefficient system is well enough conditioned, plus a residual for each original equation. It is not a general symbolic substitution engine or nonlinear equation solver. Writing equations in the displayed standard form first makes the intended signs, constants and variables explicit.",
    "formula": "Δ=a₁b₂−a₂b₁. For a supported unique system, x=(c₁b₂−c₂b₁)/Δ and y=(a₁c₂−a₂c₁)/Δ. Residuals are aᵢx+bᵢy−cᵢ.",
    "example": "For 2x+y=5 and x−y=1, the coefficients are 2, 1, 5, 1, −1, 1. The solution is x=2, y=1, and both substitution residuals are zero.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Rearrange equations before entering coefficients",
        "text": "Move variable terms to the left and the constant to the right. Preserve signs when moving terms across the equality. For y=3−2x, the supported standard form is 2x+y=3, not 2x−y=3. A missing variable has coefficient zero. The input order is equation one’s x coefficient, y coefficient and constant, followed by the same three quantities for equation two. The worksheet does not parse arbitrary equation text or infer the arrangement from a pasted expression."
      },
      {
        "title": "Why this is equivalent to substitution",
        "text": "When a nonzero coefficient permits it, one equation can express one variable in terms of the other. Substituting that expression into the second equation gives the same unique solution as the displayed determinant identity. The calculator uses the latter arithmetic because it handles zero coefficients without selecting a fragile division pivot. It does not claim to display a complete symbolic classroom derivation. Use the residual outputs to perform the final substitution check in both original equations."
      },
      {
        "title": "Dependent and inconsistent systems need different reasoning",
        "text": "A zero determinant means there is no unique coefficient-system solution. The equations may describe the same line or distinct parallel lines, including degenerate equations with no variables. This interface reports the lack of a numerically stable unique answer rather than inventing a single x and y. It deliberately does not distinguish all infinite-solution and no-solution cases. Inspect the original equations or use a suitable symbolic method if that classification is the learning objective."
      },
      {
        "title": "Near-singular equations can magnify input error",
        "text": "Two nearly parallel lines can have an intersection that changes dramatically after a small coefficient rounding. The implementation rejects determinants at or below a relative tolerance of 10⁻¹² against the product scale, rather than displaying a misleading enormous solution. Coefficients are bounded to one million in magnitude. Those are numerical implementation limits, not statements about which linear systems exist mathematically. Preserve the original coefficient precision and do not interpret small residuals as proof that noisy measurements are accurate."
      },
      {
        "title": "Check both equations rather than one",
        "text": "A candidate point can satisfy the first equation and fail the second. Substitute the displayed x and y into each original standard-form equation and compare the left side with its constant. The residual should be near zero within floating-point and display-rounding precision. Retain more digits for manual checking when a solution is fractional. All calculations run locally and use numeric coefficient arithmetic without executing pasted code; no external computer algebra service receives the problem."
      }
    ],
    "faqs": [
      {
        "question": "Can I paste a nonlinear equation?",
        "answer": "No. This page supports two real linear equations using six coefficients. Quadratics and arbitrary expressions require another model."
      },
      {
        "question": "What does a zero coefficient mean?",
        "answer": "That variable is absent from the corresponding equation. Enter zero explicitly rather than leaving the field blank."
      },
      {
        "question": "Why is a parallel system rejected?",
        "answer": "Parallel or dependent equations do not provide a unique intersection. The interface does not invent a single solution."
      },
      {
        "question": "Are steps shown symbolically?",
        "answer": "The page discloses the formula and reports substitution residuals, but does not claim a full symbolic step-by-step derivation."
      },
      {
        "question": "What are residuals?",
        "answer": "Each residual is the calculated left side minus the original right-side constant. Near-zero residuals check the supplied numeric solution."
      }
    ],
    "limitations": "The solution is the common numerical intersection of the two supplied lines. Each residual checks a separate equation, while the determinant indicates whether a unique intersection can be computed stably. A rejected near-singular system needs further mathematical or data-quality review; it should not be replaced with a generic percentage answer. A candidate point can satisfy the first equation and fail the second. Substitute the displayed x and y into each original standard-form equation and compare the left side with its constant. The residual should be near zero within floating-point and display-rounding precision. Retain more digits for manual checking when a solution is fractional. All calculations run locally and use numeric coefficient arithmetic without executing pasted code; no external computer algebra service receives the problem.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "substitution calculator"
    ]
  },
  {
    "slug": "cap-rate-calculator",
    "title": "Cap Rate Calculator — Annual NOI and Property Value",
    "shortTitle": "Cap Rate",
    "category": "Money",
    "description": "Calculate a property capitalization rate from annual operating income, expenses and supplied property value, with debt-service and valuation limits.",
    "intro": "This cap rate calculator divides annual net operating income by a property value you supply. Enter operating income and operating expenses for the same annual period, currency and property. The result shows the rate and its underlying NOI, including a negative rate when operating expenses exceed income. It does not retrieve market cap rates, recommend an investment or appraise a property. Keep purchase price, assessed value and independently supported market value distinct when selecting the denominator for your comparison.",
    "formula": "Annual NOI = annual gross operating income − annual operating expenses. Cap rate % = 100 × annual NOI/property value.",
    "example": "Annual income of 120,000 and operating expenses of 40,000 give NOI of 80,000. Against a supplied property value of 1,000,000, the capitalization rate is 8%.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Use a consistent annual operating basis",
        "text": "Income and expenses must cover the same period. Mixing monthly rent with annual expenses can reverse the meaning of the answer. Use actual, stabilized or projected figures consistently and state which basis you chose. This worksheet does not adjust vacancy, collection loss or future rent changes automatically. If the supplied gross-income figure has already been reduced for a particular loss, do not deduct that loss again. Keep a reconciliation from the underlying rental or operating statement to both input amounts."
      },
      {
        "title": "Keep NOI separate from financing cash flow",
        "text": "Net operating income belongs to the property’s operations before the financing structure. Debt principal and interest are not automatically operating expenses for this cap-rate identity. Income taxes and depreciation also should not be mixed into an NOI expense figure merely because they appear in a broader accounting report. A lender or adviser may use a specifically adjusted NOI definition for a different purpose. Use the definition relevant to your intended analysis and disclose adjustments rather than relying on a broad label."
      },
      {
        "title": "Choose and label the property-value denominator",
        "text": "A purchase price, appraisal, asking price and total project cost can differ. Each produces a different numerical rate for the same NOI. This page accepts your selected positive value without validating that it is a current market valuation. Do not compare properties using asking prices for some and completed acquisition costs for others without explaining the difference. Transaction expenses, renovation costs and anticipated capital expenditure need explicit treatment in the wider investment analysis; they are not silently embedded here."
      },
      {
        "title": "Negative and zero results remain visible",
        "text": "If annual operating income equals expenses, NOI and the cap rate are zero. If expenses exceed income, the displayed NOI and rate are negative instead of being clipped to zero. That reports the supplied operating shortfall, not a bankruptcy diagnosis or a recommendation to sell. A zero property denominator is invalid because the rate is undefined. The worksheet does not forecast a turnaround, claim a target rate is safe or guarantee that the entered income can be collected."
      },
      {
        "title": "Cap rate is one comparison, not total return",
        "text": "A direct capitalization ratio does not include leveraged cash-on-cash return, resale appreciation, future vacancy, irregular capital spending or a discounted cash-flow model. Two properties with the same cap rate can have very different risk and cash requirements. Use supporting operating records and appropriate professional analysis before a financial decision. The annual-average monthly NOI is simply annual NOI divided by twelve; it is not a forecast that every month will generate the same cash amount."
      }
    ],
    "faqs": [
      {
        "question": "What is the cap-rate formula?",
        "answer": "Divide annual NOI by the selected positive property value, then multiply by 100. The tool also displays the NOI calculation."
      },
      {
        "question": "Is loan interest an operating expense here?",
        "answer": "The intended NOI basis excludes debt service. Keep financing cash flow separate and verify any adjusted definition used by your adviser."
      },
      {
        "question": "Can cap rate be negative?",
        "answer": "Yes. When operating expenses exceed operating income, the supplied NOI and calculated rate are negative."
      },
      {
        "question": "Does the calculator value my property?",
        "answer": "No. You supply the property-value denominator. No appraisal or market-rate feed is included."
      },
      {
        "question": "Is cap rate the same as investment return?",
        "answer": "No. Financing, capital spending, resale, taxes and timing can change total investment outcomes beyond this ratio."
      }
    ],
    "limitations": "The percentage reports annual property operating income relative to your chosen value basis. It is most useful when the NOI and value definitions are consistent across cases. The supporting annual and monthly-average NOI values make the basis visible, but do not add a forecast or valuation conclusion to the supplied inputs. A direct capitalization ratio does not include leveraged cash-on-cash return, resale appreciation, future vacancy, irregular capital spending or a discounted cash-flow model. Two properties with the same cap rate can have very different risk and cash requirements. Use supporting operating records and appropriate professional analysis before a financial decision. The annual-average monthly NOI is simply annual NOI divided by twelve; it is not a forecast that every month will generate the same cash amount.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "cap rate calculator"
    ]
  },
  {
    "slug": "swim-time-converter",
    "title": "Swim Time Converter — Distance, Pace and Supplied Course Factor",
    "shortTitle": "Swim Time Converter",
    "category": "Everyday",
    "description": "Convert swim times using distance ratios and your explicit course factor, with yards/metres handling and clear SCY, SCM and LCM performance limits.",
    "intro": "This swim converter combines a measured time, source distance, target distance and an explicit factor you supply. It accepts seconds or m:ss.xx and converts yards and metres before scaling time. Factor one gives a constant-pace distance comparison, not an official short-course to long-course conversion. Turns, stroke, fatigue and meet-entry policies can alter actual performance. The page supports time conversion calculator swimming searches with a transparent bounded worksheet instead of inventing official factors or claiming that pool length alone predicts race time.",
    "formula": "Converted time = source seconds × target metres/source metres × supplied course factor. One yard = 0.9144 metre. Source pace per 100 m = source seconds ×100/source metres.",
    "example": "A 100 m swim in 1:20.00 gives an 80-second source time. At factor 1, a 200 m constant-pace scenario is 2:40.00. Applying a supplied factor of 1.05 changes that scenario to 2:48.00.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Enter elapsed time in a supported format",
        "text": "Use a plain second value such as 80.5, or minutes and seconds such as 1:20.50. Seconds after the colon must be below sixty. Hours-and-minutes notation is not supported, so 1:20 means one minute twenty seconds rather than one hour twenty minutes. The source time must be positive and no greater than one day. The result is formatted as minutes and hundredths of a second with carry handled across minute boundaries. Input precision still limits what the displayed hundredths mean."
      },
      {
        "title": "Separate distance conversion from pool-course effects",
        "text": "Yards and metres are length units, while short-course yards, short-course metres and long-course metres also describe a pool layout. The yard-to-metre factor changes distance exactly, but does not model the benefit of additional turns. This page does not load federation, NCAA or meet-specific event factors. A factor of one is explicitly distance-only. If an independently verified rule supplies a factor compatible with this multiplicative model, enter it and keep its event and source information in your own record."
      },
      {
        "title": "A longer swim need not preserve the same pace",
        "text": "Scaling time by distance assumes unchanged average pace before the explicit factor. Real swimmers can pace longer events differently, and starts and turns occupy different shares of elapsed time. A 50 m sprint doubled numerically is not a reliable prediction of a 100 m race. The worksheet is useful for arithmetic comparisons and checking a stated assumption, but it does not prescribe training pace or predict an athlete’s physiological performance. Use measured results when making a performance assessment."
      },
      {
        "title": "Use only factors matching this formula",
        "text": "The interface multiplies the distance-scaled time by one supplied factor. Some published methods instead add event-specific seconds, use separate stroke adjustments or define different source and target event distances. Those methods are not reproduced by typing one convenient number here. Verify the method before using a factor, and do not claim a converted scenario qualifies for a meet unless the meet announcement accepts that specific basis. The valid factor range is 0.1 to 10, an implementation bound rather than a performance recommendation."
      },
      {
        "title": "Retain measured time separately from the scenario",
        "text": "The source pace output is calculated from the original measured time and distance, before your course factor. The main converted time is a hypothetical result under the supplied scaling assumptions. Keep those quantities distinct in logs so a modeled number is not later reported as an official swim. This page makes no timing-system connection and submits no meet entry. Inputs are processed locally; editing them retains the last submitted output until you click Calculate result again."
      }
    ],
    "faqs": [
      {
        "question": "Does factor 1 convert SCY to LCM officially?",
        "answer": "No. It supplies distance-only scaling and does not adjust stroke or turns. Official or meet-specific methods require their actual rules."
      },
      {
        "question": "Can I enter m:ss.xx?",
        "answer": "Yes. Use minutes, a colon and seconds below sixty, or a plain number of seconds."
      },
      {
        "question": "Are yards converted to metres?",
        "answer": "Yes. The exact length factor is 0.9144 metre per yard before the time ratio is calculated."
      },
      {
        "question": "Can this predict my next race?",
        "answer": "No. Constant-pace scaling and a supplied factor do not establish future race performance."
      },
      {
        "question": "Can the factor include an additive adjustment?",
        "answer": "No. This model only multiplies time. A method requiring additional seconds needs a different implementation."
      }
    ],
    "limitations": "The main time is a scenario, while the source pace remains a measurement-derived arithmetic summary. Both source and target distances are converted to metres before the ratio, so changing only the unit mode can materially change the result. Keep factor-one outputs labeled distance-only and distinguish them from accepted race conversions. The source pace output is calculated from the original measured time and distance, before your course factor. The main converted time is a hypothetical result under the supplied scaling assumptions. Keep those quantities distinct in logs so a modeled number is not later reported as an official swim. This page makes no timing-system connection and submits no meet entry. Inputs are processed locally; editing them retains the last submitted output until you click Calculate result again.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "swim converter",
      "time conversion calculator swimming"
    ]
  },
  {
    "slug": "cpm-calculator",
    "title": "CPM Calculator — Cost per Thousand Impressions",
    "shortTitle": "CPM",
    "category": "Money",
    "description": "Calculate campaign CPM from spend and impressions, or estimate impressions from a supplied constant CPM, with clear campaign and measurement definitions.",
    "intro": "This CPM calculator divides campaign spend by impressions and scales the ratio to one thousand. A second mode works backward from spend and a supplied constant CPM to an illustrative impression count. The worksheet uses one currency and one reporting period; it does not retrieve an ad account, forecast auction prices or estimate publisher earnings. CPM measures cost relative to impression events. It is different from unique reach, clicks, conversions and viewable impressions unless the input explicitly uses that measurement basis.",
    "formula": "CPM = spend ×1,000/impressions. Scenario impressions = spend ×1,000/supplied CPM.",
    "example": "A campaign spending 250 currency units for 50,000 impressions has a CPM of 5. At a supplied constant CPM of 8, a budget of 400 corresponds to an illustrative 50,000 impressions.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Match spend and impressions to the same scope",
        "text": "Choose the same campaign, placement, date range and reporting timezone for both values. Spend for an entire month divided by impressions from one day gives a misleading ratio even though the arithmetic is valid. Verify whether the reported cost includes platform fees, taxes or agency charges, and keep the chosen definition consistent across comparisons. This calculator cannot inspect an account export or decide which costs belong in your business analysis; it only evaluates the supplied matched values."
      },
      {
        "title": "Impressions do not mean unique people",
        "text": "One person can generate several impressions. A CPM denominator therefore cannot be interpreted automatically as the number of people reached. Likewise, an impression is not a click or a sale. Viewable CPM uses a specifically defined viewable-impression denominator, which can differ from served impressions. If you calculate a ratio using viewable impressions, label it accordingly instead of comparing it directly with a served-impression CPM as though the measurement basis were identical."
      },
      {
        "title": "Use whole counts for observed impressions",
        "text": "Observed impression events are entered as a positive whole number. Zero impressions makes CPM undefined even when spend is zero. Zero spend with positive impressions gives zero CPM under the supplied accounting basis. The reverse mode can produce a fractional expected count because it is a mathematical scenario rather than a record of delivered events. No whole-count delivery guarantee is implied, and the worksheet does not round a fractional scenario up into a promised impression."
      },
      {
        "title": "Constant CPM is an assumption in reverse mode",
        "text": "Auction prices can vary with audience, placement, competition, creative and reporting conditions. The reverse calculation holds your supplied CPM constant to isolate budget arithmetic. It does not predict the CPM a platform will actually charge. A budget increase does not guarantee proportionally more delivery in a real campaign. Use current account evidence or a documented planning assumption, record its source and distinguish a scenario estimate from a platform forecast or contractual delivery commitment."
      },
      {
        "title": "Evaluate outcomes beyond the ratio",
        "text": "A low CPM alone does not show that an advertising campaign met its objective. Relevant traffic, qualified leads, conversions and incremental value require separate measurements. This page makes no ad-policy eligibility determination or audience-quality assessment. It also does not convert advertiser spend into AdSense revenue, because publisher earnings depend on a different set of definitions and allocation rules. Keep the currency-neutral cost ratio within a wider analysis that uses actual outcomes rather than assuming every cheap impression has equal value."
      }
    ],
    "faqs": [
      {
        "question": "What does CPM mean?",
        "answer": "Cost per thousand impressions. The calculation scales spend divided by impression count by one thousand."
      },
      {
        "question": "Can I calculate impressions from budget?",
        "answer": "Yes, using the reverse mode and an explicit positive constant CPM. The result is an arithmetic scenario, not guaranteed delivery."
      },
      {
        "question": "Is an impression a unique visitor?",
        "answer": "No. One person may generate multiple impressions, and an impression is not automatically a click or conversion."
      },
      {
        "question": "Can zero impressions be used?",
        "answer": "No. The CPM denominator would be zero. A positive whole observed count is required."
      },
      {
        "question": "Does CPM predict AdSense earnings?",
        "answer": "No. Advertiser campaign cost and publisher earnings are different measurements. This worksheet provides no revenue forecast."
      }
    ],
    "limitations": "Read CPM alongside the reporting basis: currency, date range, spend inclusions and impression definition. The inverse mode uses an assumed constant price per thousand and cannot predict changing auction conditions. Two equal CPM values can describe very different reach and conversion outcomes, so the ratio should not replace objective-specific performance evidence. A low CPM alone does not show that an advertising campaign met its objective. Relevant traffic, qualified leads, conversions and incremental value require separate measurements. This page makes no ad-policy eligibility determination or audience-quality assessment. It also does not convert advertiser spend into AdSense revenue, because publisher earnings depend on a different set of definitions and allocation rules. Keep the currency-neutral cost ratio within a wider analysis that uses actual outcomes rather than assuming every cheap impression has equal value.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "cpm calculator"
    ]
  },
  {
    "slug": "fence-cost-estimator",
    "title": "Fence Cost Estimator — Supplied Material and Labor Rates",
    "shortTitle": "Fence Cost Estimator",
    "category": "Home",
    "description": "Estimate fence project cost from measured run length, supplied material and labor rates, gate costs and a separate material allowance.",
    "intro": "This fence cost estimator adds material, labor, gate and other project costs using rates you supply. Enter fence run length excluding gate openings and use matching length units for both per-length prices. An explicit allowance increases material only; it does not silently increase labor or gate charges. The tool provides no local market prices, boundary survey, permit decision or structural design. Its purpose is to reconcile a quotation basis and compare documented cost scenarios before obtaining a site-specific estimate.",
    "formula": "Material = length × material rate ×(1+allowance/100). Labor = length × labor rate. Total = material + labor + separate gate cost + other charges.",
    "example": "For 100 ft at 12 material units/ft and 8 labor units/ft, 10% material allowance gives 1,320 material and 800 labor. Adding 300 for gates and 200 other charges gives 2,620 currency units.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Measure the chargeable fence run",
        "text": "Use the length on which the supplied material and labor rates are based. If gates are priced separately, exclude their openings from that run to avoid charging full fence material across the same space. Sloping terrain, corners and curved boundaries may need a more detailed takeoff. This worksheet does not locate your property line or derive dimensions from a map. Use a verified site measurement and an appropriate survey or local process where boundary certainty matters."
      },
      {
        "title": "Keep length and rate units compatible",
        "text": "A run measured in metres needs a currency-per-metre rate, while a run measured in feet needs a currency-per-foot rate. The generic length-unit labels allow either basis but do not convert one automatically. A contractor rate can be material-only, labor-only or complete installed cost; split it consistently before entering separate fields. Entering a complete installed rate in material and another labor rate can double-count labor. Preserve the quotation’s inclusions and exclusions beside your scenario."
      },
      {
        "title": "Material allowance applies only once",
        "text": "The allowance multiplies the length-based material amount. It does not automatically add post counts, alter gate dimensions or increase labor hours. A waste-adjusted supplier quote may already include spare material, so adding an allowance again can duplicate that provision. The default scenario demonstrates the arithmetic rather than recommending a universal waste percentage. Different fence systems have different takeoffs, package sizes and cut losses. Verify the allowance with the supplier and the actual layout."
      },
      {
        "title": "Keep fixed costs and exclusions explicit",
        "text": "Gate hardware, removal, disposal, delivery, site preparation or other charges can be entered in the separate cost fields when they belong in the quote. Do not assume the calculator has already included them. Taxes and permits also require explicit treatment under the applicable agreement. The result does not establish permit approval, easement compliance, height limits or the safe placement of posts around buried utilities. Financial arithmetic and installation decisions remain separate tasks."
      },
      {
        "title": "Compare scenarios on the same project scope",
        "text": "When comparing two materials, keep measured run length and the inclusion basis consistent. A lower material rate may still produce a higher total when labor or fixed charges differ. A quoted amount should be checked against a real takeoff rather than a generic internet range. The supporting outputs make material, labor and separate charges visible so you can identify which assumption drives the total. No contractor booking, map request or external pricing lookup occurs when you calculate."
      }
    ],
    "faqs": [
      {
        "question": "Does the tool load local fence prices?",
        "answer": "No. Supply the material and labor rates from your own quotation or documented assumption."
      },
      {
        "question": "Should gate openings be included in length?",
        "answer": "Exclude them when gates are priced separately. Follow the actual quote basis to avoid charging the same opening twice."
      },
      {
        "question": "Can I use metres instead of feet?",
        "answer": "Yes, if every per-length rate uses that same length unit. No automatic length conversion is applied."
      },
      {
        "question": "Does waste increase labor?",
        "answer": "No. The explicit allowance applies to length-based material only; labor and gates are calculated separately."
      },
      {
        "question": "Does this design posts or footings?",
        "answer": "No. It is a cost worksheet, not a structural, boundary, utility-clearance or permit model."
      }
    ],
    "limitations": "The total is the sum of four transparent quotation components. A difference between scenarios can come from rates, allowance or fixed charges, so inspect those outputs before treating one number as a complete installed bid. A valid calculation can still omit an important site cost; the contractor’s actual scope and takeoff control the final quotation. When comparing two materials, keep measured run length and the inclusion basis consistent. A lower material rate may still produce a higher total when labor or fixed charges differ. A quoted amount should be checked against a real takeoff rather than a generic internet range. The supporting outputs make material, labor and separate charges visible so you can identify which assumption drives the total. No contractor booking, map request or external pricing lookup occurs when you calculate.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "fence cost estimator"
    ]
  },
  {
    "slug": "subwoofer-case-calculator",
    "title": "Subwoofer Case Calculator — Net Rectangular Box Volume",
    "shortTitle": "Subwoofer Case",
    "category": "Home",
    "description": "Calculate a rectangular subwoofer enclosure’s net air volume from external dimensions, panel thickness and supplied internal displacement.",
    "intro": "This subwoofer case calculator estimates the air volume inside a rectangular six-panel enclosure. Enter external width, height and depth in inches, uniform panel thickness and the total displacement of drivers, braces and any ports inside the box. The outputs separate gross internal volume from net air volume and convert the latter to litres. This is geometry, not an acoustic design model: it does not choose a driver, calculate port tuning or decide whether the enclosure matches a manufacturer’s required volume.",
    "formula": "Internal dimension = external dimension −2×panel thickness. Gross ft³ = internal width ×height ×depth/1,728. Net ft³ = gross ft³ −supplied displacement. Litres = net ft³ ×28.316846592.",
    "example": "External dimensions 16×16×16 in with 0.75 in uniform panels give 14.5 in internal dimensions and 1.7642505787 ft³ gross. Subtracting 0.1 ft³ displacement gives 1.6642505787 ft³ net, approximately 47.126328 litres.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "External dimensions are not the internal air space",
        "text": "Wood or other panels occupy part of every external dimension. Under the stated uniform six-panel model, twice the panel thickness is subtracted from width, height and depth. Entering internal dimensions in those fields would subtract thickness again and understate volume. Conversely, multiplying external dimensions directly would overstate the available air space. Real builds with double baffles, unusual joinery or nonuniform panels need a takeoff matching their actual interior geometry rather than this simplified rectangular assumption."
      },
      {
        "title": "Account for objects occupying the interior",
        "text": "The driver basket and magnet, braces and internal port structures displace air. Sum the relevant displacement on a consistent cubic-foot basis and enter it once. Use manufacturer data or an independently measured geometry rather than guessing from the nominal driver diameter. The field is a total, not a per-driver amount. If you use several drivers, include their combined displacement and any shared braces. A displacement at or above gross internal volume is rejected because no positive modeled air space remains."
      },
      {
        "title": "Gross and net volume must stay distinct",
        "text": "Gross internal volume describes the interior before subtracting the supplied objects. Net volume describes the remaining modeled air space. Manufacturer recommendations can specify one or the other, so read the selected driver’s documentation carefully. The worksheet does not load a target or decide which recommendation applies. A number that matches a recommended net volume is not by itself proof that the enclosure construction, port arrangement or driver use is suitable."
      },
      {
        "title": "Volume alone cannot determine acoustic behavior",
        "text": "A subwoofer system’s response depends on the driver, enclosure type, leakage, damping, electrical arrangement and other design information. This page supplies no frequency response, impedance, port length, tuning frequency or power-handling prediction. A ported box is not correctly designed simply by subtracting a port displacement from a rectangular volume. Use the manufacturer’s full design guidance or a validated acoustic model for that task. Keep the geometry result separate from a claim about sound quality or safe operating power."
      },
      {
        "title": "Validate dimensions and report appropriate precision",
        "text": "Every external dimension must exceed twice the panel thickness, and thickness must be positive. The browser rejects impossible geometry instead of producing a negative volume. A tape measurement’s precision determines the practical confidence in the result; long decimal outputs do not imply the built box has that exact capacity. Check internal dimensions independently after assembly if necessary. The computation is local and does not upload a drawing or access a manufacturer catalog when you click Calculate result."
      }
    ],
    "faqs": [
      {
        "question": "Should I enter internal or external dimensions?",
        "answer": "Enter external rectangular dimensions. The calculator subtracts twice the uniform panel thickness in each direction."
      },
      {
        "question": "What belongs in displacement?",
        "answer": "The combined internal volume occupied by the drivers, braces and any ports or other structures, on the same cubic-foot basis."
      },
      {
        "question": "Does it design a ported enclosure?",
        "answer": "No. It calculates geometric volume only and supplies no acoustic tuning or port-length model."
      },
      {
        "question": "Why are gross and net results different?",
        "answer": "Net volume subtracts the supplied displacement from gross internal space. The product specification controls which basis you need."
      },
      {
        "question": "Can I use a double front baffle?",
        "answer": "This uniform-panel model does not separately represent a double baffle. Use actual interior geometry or an appropriate more detailed model."
      }
    ],
    "limitations": "The net result is remaining air space under the supplied rectangular construction assumptions. It is useful for checking a takeoff but cannot choose an enclosure alignment or validate a driver specification. The gross output and internal dimensions expose the subtraction steps so you can detect an external-versus-internal measurement mix-up. Every external dimension must exceed twice the panel thickness, and thickness must be positive. The browser rejects impossible geometry instead of producing a negative volume. A tape measurement’s precision determines the practical confidence in the result; long decimal outputs do not imply the built box has that exact capacity. Check internal dimensions independently after assembly if necessary. The computation is local and does not upload a drawing or access a manufacturer catalog when you click Calculate result.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "subwoofer case calculator"
    ]
  },
  {
    "slug": "acres-per-hour-calculator",
    "title": "Acres per Hour Calculator — Effective Field Capacity",
    "shortTitle": "Acres per Hour",
    "category": "Everyday",
    "description": "Estimate farm-machine field capacity from working width, ground speed and supplied efficiency, plus operating hours for a chosen field area.",
    "intro": "This acres per hour calculator estimates theoretical and effective field capacity from working width, ground speed and an explicit efficiency percentage. It also divides a supplied field area by effective capacity to show modeled operating hours. The efficiency factor accounts mathematically for the portion of theoretical coverage achieved under your chosen assumption; the page does not infer it from equipment type. This is a planning identity, not a recommended safe speed, guarantee of completion time or assessment of operating conditions.",
    "formula": "Theoretical acres/hour = working width ft ×speed mph/8.25. Effective capacity = theoretical ×efficiency/100. Hours = field acres/effective capacity. Hectares/hour = acres/hour ×0.40468564224.",
    "example": "A 20 ft effective width at 5 mph covers 12.121212 acres/hour theoretically. At 75% field efficiency, capacity is 9.090909 acres/hour; 100 acres would require 11 modeled operating hours.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Use effective width rather than a convenient label",
        "text": "An implement’s nominal catalog width may differ from the width that covers new ground on each pass. Overlap, row spacing and how the operation is performed can change that basis. Enter the effective working width in feet, with any overlap treatment documented. Do not reduce width for overlap and also reduce efficiency for the same loss without understanding the chosen model. The calculator cannot inspect a machine or derive working width from its name."
      },
      {
        "title": "Ground speed is a supplied operating assumption",
        "text": "The formula uses miles per hour on the field, not road transport speed or the maximum speed listed for a tractor. Soil, crop, terrain and equipment constraints determine an appropriate real operation. This page does not prescribe a safe speed or infer one from width. A higher entered speed increases theoretical capacity mathematically, but that does not establish that the operation can maintain quality or safety at the corresponding real speed. Use measured or professionally supported assumptions."
      },
      {
        "title": "Efficiency describes the capacity reduction",
        "text": "One hundred percent efficiency preserves theoretical capacity. Lower percentages reduce effective coverage for the modeled losses, such as turns and interruptions on the selected accounting basis. This page requires an explicit positive percentage no higher than one hundred and does not load a universal efficiency table. Zero efficiency would make time-to-complete undefined, so it is rejected. Compare an assumption with actual field records if you intend to improve a planning estimate."
      },
      {
        "title": "The conversion constant has a unit basis",
        "text": "A mile contains 5,280 feet and an acre 43,560 square feet. Multiplying width in feet by miles per hour therefore needs a conversion of 5,280/43,560, equivalent to dividing by 8.25. The constant is not a machine-specific performance coefficient. The hectare conversion is also a unit transformation of the same effective coverage rate, not another independently estimated output. Mixing kilometres per hour with the mph label changes the physical meaning of the input."
      },
      {
        "title": "Operating hours are not a complete calendar schedule",
        "text": "Field acres divided by effective capacity gives the modeled hours on the chosen efficiency basis. Travel, weather delays, operator availability or separate tasks may not be included depending on how that efficiency was defined. A result of eleven hours does not automatically mean the field will finish in one calendar day. Record what the capacity model includes before allocating shifts or labor. The calculator makes no weather request, machine connection or map lookup and processes its inputs locally."
      }
    ],
    "faqs": [
      {
        "question": "What does 8.25 represent?",
        "answer": "It is the length-to-area conversion for working width in feet and speed in miles per hour, using 43,560 ft² per acre and 5,280 ft per mile."
      },
      {
        "question": "Does the calculator choose efficiency?",
        "answer": "No. You supply an explicit percentage based on the operation and records. No universal machine efficiency is assumed."
      },
      {
        "question": "Can I enter kilometres per hour?",
        "answer": "Not directly. Convert speed to mph first because that is the disclosed input basis."
      },
      {
        "question": "Are the hours calendar completion time?",
        "answer": "No. They are operating hours on the chosen efficiency basis. Other schedule constraints may require additional time."
      },
      {
        "question": "Does this recommend a speed?",
        "answer": "No. It calculates from a supplied speed and provides no safe-operating recommendation for equipment or conditions."
      }
    ],
    "limitations": "The effective rate is theoretical area coverage multiplied by your chosen efficiency. The hours result uses that effective rate, not the theoretical maximum. The most important judgment is the meaning of the supplied width, speed and efficiency; a mathematically exact unit conversion cannot establish actual machine productivity. Field acres divided by effective capacity gives the modeled hours on the chosen efficiency basis. Travel, weather delays, operator availability or separate tasks may not be included depending on how that efficiency was defined. A result of eleven hours does not automatically mean the field will finish in one calendar day. Record what the capacity model includes before allocating shifts or labor. The calculator makes no weather request, machine connection or map lookup and processes its inputs locally.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "acres per hour calculator"
    ]
  },
  {
    "slug": "torque-converter",
    "title": "N·m to ft-lb Converter — Torque Units in Both Directions",
    "shortTitle": "N·m to ft-lb Converter",
    "category": "Everyday",
    "description": "Convert signed torque between newton metres and pound-force feet, with explicit unit factors and limits for fastener and energy interpretations.",
    "intro": "This N-m to ft lbs converter changes a torque value between newton metres and pound-force feet. Choose the direction matching your input and retain the displayed torque unit with the output. Negative values are allowed as signed magnitudes under your existing direction convention; the tool does not establish that convention. It supplies no tightening recommendation, bolt specification or tool-calibration assessment. A torque conversion answers a unit question and must remain separate from selecting an appropriate fastening procedure.",
    "formula": "1 lbf·ft = 1.3558179483314004 N·m. Convert N·m to lbf·ft by division, and lbf·ft to N·m by multiplication.",
    "example": "100 N·m converts to approximately 73.75621493 lbf·ft. Conversely, 100 lbf·ft converts to approximately 135.58179483 N·m.",
    "howTo": [
      "Read the labeled input units and select the supported calculation mode where available.",
      "Enter the values established from the source records described below; do not substitute a different measurement basis.",
      "Click Calculate result to calculate from the supplied inputs.",
      "Read the main output together with the checks and limitations. After editing inputs, click Calculate again to update the stored result."
    ],
    "considerations": [
      {
        "title": "Use a force-based foot-pound definition",
        "text": "The supported imperial quantity is pound-force foot, not pound-mass foot. The abbreviated ft-lb wording in many specifications can be ambiguous outside its context, so verify that the source is a torque specification. The conversion factor combines the defined foot length and pound-force conversion. No separate gravity assumption is requested from the user. If your source uses pound-inch or kilogram-force metre, convert that quantity correctly before using this two-unit worksheet."
      },
      {
        "title": "Torque and energy should not be confused",
        "text": "A newton metre has the same dimensional product that appears in the joule definition, but torque and energy are different physical quantities. Torque relates to a moment about an axis, while energy describes work or transfer. This page labels the input and output as torque throughout and does not turn them into energy merely because dimensions can be written similarly. Likewise, a foot-pound energy value should not be interpreted as a fastener torque without an explicitly relevant context."
      },
      {
        "title": "A conversion does not select the correct specification",
        "text": "The manufacturer’s procedure can depend on the fastener, material, lubrication, sequence, angle tightening and reuse conditions. None of those are inferred from the number you enter. A converted value can be arithmetically correct and still belong to the wrong bolt or assembly. Use the actual current specification and an appropriate tool for the procedure. The worksheet does not advise increasing or decreasing torque, approve a repair or determine a safe installation setting."
      },
      {
        "title": "Keep sign and direction information together",
        "text": "A negative torque value can encode a direction in a mechanical analysis. This converter preserves the sign while scaling magnitude, but does not define clockwise, counterclockwise, axis orientation or action-versus-reaction convention. A negative result is not a direction instruction for a wrench. When sharing a signed analytical value, include the coordinate or sign convention established in the original model. If the source specification is an unsigned tightening magnitude, do not invent a sign based on the converted display."
      },
      {
        "title": "Report precision supported by the source",
        "text": "The factor is fixed, while the source measurement or specification has its own precision and tolerance. A result showing many decimals does not make a torque wrench accurate to those decimals. Round only after conversion and in a way consistent with the governing specification and equipment. The interface accepts finite values up to one trillion in magnitude and displays up to eight decimal places. Very small magnitudes may need scientific notation outside this display to avoid an apparent zero caused by rounding."
      }
    ],
    "faqs": [
      {
        "question": "How do I convert N·m to ft-lb?",
        "answer": "Divide the torque in N·m by 1.3558179483314004 to obtain lbf·ft."
      },
      {
        "question": "How do I convert back to N·m?",
        "answer": "Multiply lbf·ft by the same factor. Use the matching direction selection rather than relabeling the number."
      },
      {
        "question": "Is lbf·ft the same as lbf·in?",
        "answer": "No. One foot is twelve inches. This page supports foot-based torque, not an inch-pound input mode."
      },
      {
        "question": "Does the result recommend bolt torque?",
        "answer": "No. It only changes units. The applicable manufacturer procedure determines the appropriate specification."
      },
      {
        "question": "Why are negative values accepted?",
        "answer": "They can represent signed torque in an established analytical convention. The converter preserves sign but does not choose a physical direction."
      }
    ],
    "limitations": "The output is the same supplied torque expressed in another unit. The direction selection controls whether the factor is applied by multiplication or division. Preserve the physical context and original specification; the converted number cannot supply missing fastening conditions or turn an energy quantity into a torque recommendation. The factor is fixed, while the source measurement or specification has its own precision and tolerance. A result showing many decimals does not make a torque wrench accurate to those decimals. Round only after conversion and in a way consistent with the governing specification and equipment. The interface accepts finite values up to one trillion in magnitude and displays up to eight decimal places. Very small magnitudes may need scientific notation outside this display to avoid an apparent zero caused by rounding.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "n-m to ft lbs converter"
    ]
  }
];
