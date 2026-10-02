import type {Tool} from "./tools";
export const roadmap126Tools: Tool[] = [
  {
    "slug": "calories-burned-calculator",
    "title": "Calories Burned Calculator — Walking, Cycling and Running",
    "category": "Everyday",
    "description": "Estimate walking, cycling, running or treadmill calories from adult MET references, body weight and duration, with a measured-cadence walking step mode.",
    "formula": "Gross kcal ≈ MET × 3.5 × weight kg ÷ 200 × minutes. Net above a 1-MET baseline replaces MET with max(MET − 1, 0). Walking step duration = steps ÷ measured steps per minute.",
    "example": "At 70 kg, 30 minutes of level walking using 3.8 MET estimates 139.65 gross kcal and 102.9 kcal above a 1-MET resting baseline.",
    "keywords": [
      "kcal burned walking calculator",
      "calories burned calculator",
      "calculate bike calories",
      "walking calories burned calculator",
      "calories burned walking calculator",
      "cycling calorie calculator",
      "biking calorie calculator",
      "cycling kcal calculator",
      "calculate burned calories running",
      "exercise kcal calculator",
      "calories burned in treadmill calculator",
      "running calorie calculator",
      "workout calculator",
      "bicycle calorie calculator",
      "walking calories calculator",
      "omni steps to calories calculator",
      "calories lost walking calculator",
      "calorie burned calculator",
      "calories lost running calculator",
      "bike calorie calculator",
      "treadmill calories burned calculator",
      "walking calculator"
    ],
    "shortTitle": "Calories Burned",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Estimate walking, cycling, running or treadmill calories from adult MET references, body weight and duration, with a measured-cadence walking step mode. MET describes an activity intensity relative to a standard resting reference. This calculator combines an activity value with weight and duration to estimate energy expenditure. It is not a direct measurement of your oxygen use or an individual prediction. Two people with the same weight doing nominally the same activity can expend different amounts of energy. Read the selected speed and terrain description instead of choosing a preset only because its activity name sounds similar.",
    "howTo": [
      "Enter body weight in kilograms and select an activity matching the stated speed and terrain.",
      "Choose minutes, or walking steps with your measured steps-per-minute cadence. Custom mode needs a sourced MET.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Choosing an activity or a custom MET",
        "text": "The presets use values from the 2024 Adult Compendium: level walking at 2.8–3.4 mph, brisk walking at 3.5–3.9 mph, leisure cycling below 10 mph, running at 5.0–5.2 mph, and level treadmill walking at 3.0–3.4 mph. Different speeds, inclines, assistance and workloads need different values. Custom mode accepts a sourced MET within the stated range; it does not infer a value from heart rate, treadmill grade or a bike’s resistance setting."
      },
      {
        "title": "Minutes and steps are different inputs",
        "text": "Minute mode uses the duration actually spent at the selected intensity. Walking step mode first estimates duration using your measured cadence in steps per minute. A step count alone cannot establish calories, because cadence, stride, terrain and intensity differ. Do not use a cycling cadence or running count in this walking-only mode. If a workout includes rests or changing speeds, calculate the active sections separately rather than assigning the most intense preset to the entire session."
      },
      {
        "title": "Gross, net and weight-loss claims",
        "text": "Gross energy includes resting energy that would occur during the same period. The net output subtracts a standard 1-MET baseline, which is an approximation rather than your measured resting metabolism. Exercise kcal and food-label calories use the same kilocalorie unit in ordinary discussion, but an exercise estimate is not a guaranteed dietary deficit. Do not convert the result into an assured amount of fat lost, a food allowance or a medical exercise prescription."
      }
    ],
    "limitations": "Adult MET approximation, not measured individual expenditure, weight-loss prediction or exercise prescription. Step mode requires measured walking cadence; the treadmill preset is level walking only.",
    "faqs": [
      {
        "question": "How do I calculate kcal burned walking?",
        "answer": "Choose a walking preset matching speed and terrain, enter kilograms and active minutes, then click Calculate. Check that the preset refers to level walking. Hills, loads, age and individual physiology can change expenditure, so retain the activity assumption when comparing the estimate."
      },
      {
        "question": "Can I calculate calories from steps?",
        "answer": "Only with an explicit walking-intensity choice and measured steps per minute. The calculator divides steps by cadence to estimate minutes, then applies the MET equation. It does not use a universal calories-per-step constant or claim that all step counters measure the same movement."
      },
      {
        "question": "Does it support a treadmill?",
        "answer": "The preset represents level walking at the stated speed and zero grade. It does not model incline, handrail support, curved treadmills or every running speed. Use a properly matched reference in custom mode for a different activity rather than relabeling the preset."
      },
      {
        "question": "Why does my smartwatch give another number?",
        "answer": "A device can use heart rate, personal settings or a different algorithm, and may display active rather than total energy. This page uses a visible MET assumption. Compare gross with gross or active estimates with the net output before judging a numerical difference."
      },
      {
        "question": "Can children use the adult presets?",
        "answer": "The reference used here is the adult compendium. This calculator is an educational activity estimate and does not supply pediatric or individualized clinical values. Use age-appropriate professional guidance when planning exercise or nutrition for a child or a medical condition."
      }
    ]
  },
  {
    "slug": "pine-straw-calculator",
    "title": "Pine Straw Calculator",
    "category": "Home",
    "description": "Estimate whole pine straw bales from bed dimensions, your supplier’s coverage at the intended depth and an explicit waste allowance.",
    "formula": "Area = length × width. Coverage budget = area × (1 + allowance/100). Bales = ceiling(coverage budget ÷ supplier coverage per bale).",
    "example": "A 20 by 10 ft bed, 50 ft² per bale and 10% allowance needs 220 ft² of coverage, or 4.4 theoretical bales rounded up to five.",
    "keywords": [
      "pine straw calculator"
    ],
    "shortTitle": "Pine Straw",
    "icon": "📐",
    "accent": "green",
    "updatedAt": "2026-10-02",
    "intro": "Estimate whole pine straw bales from bed dimensions, your supplier’s coverage at the intended depth and an explicit waste allowance. For a rectangular planting bed, measure length and width in feet and multiply them. Split irregular beds into rectangles or other measurable shapes, calculate the areas and add them before estimating material. Subtract large uncovered areas only when they truly will not receive straw. Counting the surrounding lawn, a paved path or a structure as part of the bed can overstate the order. The area calculation does not locate your property or measure a bed from an image.",
    "howTo": [
      "Measure the rectangular bed length and width in feet. Calculate irregular beds as separate rectangles.",
      "Enter square feet covered per bale at your intended depth, using the supplier specification, then choose a waste percentage.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Supplier coverage at the intended depth",
        "text": "Pine straw bales are not a standardized geometric unit. Coverage can differ with bale type, weight, spreading depth and material condition. Enter the supplier’s square-foot coverage for the depth you actually plan to apply. Do not use a shallow decorative coverage claim for a deeper installation. If your supplier only provides a range, compare the lower and upper coverage separately and ask which value describes your intended application. This calculator deliberately avoids inventing one universal coverage per bale."
      },
      {
        "title": "Allowances and whole-bale ordering",
        "text": "The allowance expands the purchasing budget after the measured area is known. It can account for edges, handling losses, uneven spreading and small measurement errors. It does not change the physical size of the bed. The unrounded requirement helps show how the whole-bale result was formed. The final quantity rounds upward because a partial theoretical bale is not a complete purchased unit. Check whether the seller requires packs, pallet quantities or a minimum delivery order."
      },
      {
        "title": "Depth, settling and refresh applications",
        "text": "New installation and a refresh over existing material can have different coverage requirements. The tool does not infer the remaining layer or convert depth into straw weight. Use the supplier’s guidance and inspect the existing bed when deciding an application depth. Settling and movement can change apparent coverage after placement. Keep the entered coverage assumption with the output so a later order can be adjusted using your own observed yield instead of assuming a previous estimate fits every season."
      }
    ],
    "limitations": "Coverage-based material estimate only. Bale sizes and application depths vary; no universal straw density, weed-control guarantee or supplier quotation is assumed.",
    "faqs": [
      {
        "question": "How many pine straw bales do I need?",
        "answer": "Divide your allowance-adjusted bed area by stated coverage per bale and round up. The answer depends on your supplier’s bale and application depth. Verify those two details rather than treating a bale count from another property as a transferable rule."
      },
      {
        "question": "What coverage should I enter?",
        "answer": "Use the seller’s coverage in square feet per bale at your intended spreading depth. If the label uses square yards, multiply by nine first. If coverage is given as a range, test both ends and confirm the appropriate basis with the supplier."
      },
      {
        "question": "Can I estimate an irregular bed?",
        "answer": "Yes after measuring its area separately. Break it into non-overlapping shapes and sum their areas. You can represent the total area using one equivalent rectangular entry, but do not describe that as a surveyed boundary or an automatically measured landscape."
      },
      {
        "question": "Does the waste input set the depth?",
        "answer": "No. Depth is already part of the supplier coverage assumption. Waste is an additional purchasing allowance. Adding a large allowance cannot reliably replace a correct coverage value for a deeper application because spreading behavior and bale yield are not modeled."
      },
      {
        "question": "Why are there two bale figures?",
        "answer": "The unrounded requirement shows the mathematical quantity before purchase rounding. Whole bales round that figure upward. A theoretical 4.4 bales becomes five complete bales, while delivery packaging and seller minimums may require a further adjustment."
      }
    ]
  },
  {
    "slug": "ohms-law-calculator",
    "title": "Ohm’s Law Calculator and Resistor Color Codes",
    "category": "Education",
    "description": "Solve ideal DC voltage, current, resistance and power from two known values, or show a representable four-band resistor color code.",
    "formula": "V = I × R; I = V/R; R = V/I; P = V × I. Four-band nominal resistance = first two digit values × multiplier, followed by the selected tolerance band.",
    "example": "12 V across a load carrying 0.5 A implies 24 Ω and 6 W. A 100 Ω four-band resistor at ±5% is brown, black, brown, gold.",
    "keywords": [
      "ohm calculator",
      "ohm’s law calculator and resistor color codes",
      "ohm load calculation",
      "100 ohm resistor color code",
      "1k ohm resistor color code",
      "ohms calculator",
      "ohm's law solver",
      "how to calculate voltage",
      "how do i calculate voltage",
      "ohms law calculator",
      "voltage calculator",
      "ohm's law calculator",
      "how calculate voltage",
      "current calculator"
    ],
    "shortTitle": "Ohm’s Law and Resistor Color Codes",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Solve ideal DC voltage, current, resistance and power from two known values, or show a representable four-band resistor color code. Choose voltage and current, voltage and resistance, or current and resistance. The first and second fields follow that selection, so their units must be understood before entry. Voltage uses volts, current amperes and resistance ohms. Convert milliamperes to amperes by dividing by one thousand. A number copied from a component label can refer to a rating instead of an actual operating measurement; ratings and measured values should not be combined as if they describe one circuit condition.",
    "howTo": [
      "Choose voltage/current, voltage/resistance, current/resistance, or resistance-to-color-code mode.",
      "Enter the named values in volts, amperes and ohms. In color-code mode choose the component tolerance band.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Ideal resistive DC relationship",
        "text": "Ohm’s law here describes an ideal resistive direct-current load. The power output uses voltage times current. The calculation does not model AC reactance, phase angle, nonlinear devices, switching behavior or temperature-dependent resistance. An LED, battery or motor is not necessarily a constant resistor across every operating condition. The result is useful for checking a stated resistive relationship, but it cannot establish whether a circuit is safe or whether a power supply will behave ideally."
      },
      {
        "title": "Four-band code from a nominal value",
        "text": "Color-code mode accepts resistance in ohms and one of the implemented tolerance choices. It uses two significant digits plus a multiplier. A nominal 100 Ω value is digits one and zero with a times-ten multiplier. A 1 kΩ value is 1,000 Ω, giving a times-one-hundred multiplier. Values requiring more than two significant digits are rejected instead of rounded silently to a different resistor. Five-band devices and manufacturer-specific markings need their own specification."
      },
      {
        "title": "Verification and component selection",
        "text": "Band colors describe nominal resistance and tolerance; they do not give power rating, voltage rating, package suitability or operating temperature limits. Check the component datasheet and measure resistance using appropriate equipment in a safe condition. The calculated dissipated power is a mathematical load figure, not a recommendation to use a resistor with an equal nameplate rating. Derating, thermal environment and the intended circuit require qualified design review when consequential."
      }
    ],
    "limitations": "Ideal resistive DC arithmetic and supported four-band nominal codes only. No AC impedance, circuit safety, wiring design or component-rating approval.",
    "faqs": [
      {
        "question": "How do I calculate voltage?",
        "answer": "For a resistive DC relationship, multiply current in amperes by resistance in ohms. Select current and resistance mode and use those units. A 0.5 A current through 24 Ω gives 12 V. This does not model a non-resistive or alternating-current load."
      },
      {
        "question": "What is the 100 ohm resistor color code?",
        "answer": "For a four-band resistor at the selected ±5% tolerance, the code is brown, black, brown, gold. The first two bands form ten and the third multiplies by ten. Change the tolerance selection when the component’s specified tolerance differs."
      },
      {
        "question": "What is the 1k ohm resistor color code?",
        "answer": "A 1 kΩ value means 1,000 Ω. In four-band ±5% form, it is brown, black, red, gold. A five-band precision component uses a different significant-digit format, so compare the actual device’s band count and datasheet."
      },
      {
        "question": "Can this size mains wiring?",
        "answer": "No. Wiring requires applicable electrical rules, installation conditions, protection and qualified assessment. Ohm’s law arithmetic cannot select a safe cable, breaker or fuse. Do not treat the displayed current or power as installation instructions."
      },
      {
        "question": "Why is a color-code value rejected?",
        "answer": "The implemented four-band format needs exactly representable two-significant-digit resistance and a supported multiplier. A value such as 123 Ω cannot be represented by that format without changing it. Use the appropriate five-band specification rather than accepting an undisclosed approximation."
      }
    ]
  },
  {
    "slug": "fence-post-depth-calculator",
    "title": "Fence Post Depth Calculator",
    "category": "Home",
    "description": "Compare a selected embedment guideline with your entered local minimum depth, then estimate excavation depth including a gravel layer.",
    "formula": "Planning embedment in inches = max(above-ground feet × 12 × selected fraction, entered local required inches). Excavation depth = embedment + gravel inches.",
    "example": "A 6 ft exposed post using one-third embedment gives 24 in in the ground. Adding a 6 in gravel layer gives a 30 in excavation before other design requirements.",
    "keywords": [
      "fence post depth calculator"
    ],
    "shortTitle": "Fence Post Depth",
    "icon": "📐",
    "accent": "green",
    "updatedAt": "2026-10-02",
    "intro": "Compare a selected embedment guideline with your entered local minimum depth, then estimate excavation depth including a gravel layer. The fraction selected on this page applies to the length of post above ground, not the total purchased post length. With six feet exposed, one third of exposed height is two feet of embedment, leading to eight feet of post before cutting allowances. Confusing exposed height with total post length changes the answer. Measure the intended finished exposed height, including the relevant fence details, and keep feet and inches separate according to their input labels.",
    "howTo": [
      "Enter the post height above ground in feet and select the planning embedment fraction.",
      "Enter the locally required depth below grade and gravel thickness in inches; these affect embedment and excavation differently.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "A planning range, not an engineered design",
        "text": "QUIKRETE’s installation guidance describes one-third to one-half of above-ground post height as a depth guideline. The selection lets you compare those endpoints explicitly. The calculator does not choose which fraction is structurally adequate for your fence. Wind, panel size, soil, gate loading and post material can change requirements. A numerical depth estimate cannot replace a design or confirm that an installation meets a local rule."
      },
      {
        "title": "Local minimum depth remains user supplied",
        "text": "Enter a local required depth below grade when one applies. The result uses the larger of that number and the selected height-based guideline. Frost information, codes and permit requirements vary, so the tool does not guess them from your location. Verify whether the required depth refers to post embedment, footing base or another construction detail. Applying a depth from an unrelated region can give a misleading sense of compliance."
      },
      {
        "title": "Gravel, excavation and post length",
        "text": "A gravel layer extends excavation below the calculated embedment. It does not add the same length to the post because gravel is not post material. The output separates hole depth from the post length needed for exposed height plus embedment. Actual hole diameter, concrete quantity and post bracing are separate questions. Obtain safe utility-location information before digging and follow the chosen product’s installation guidance; this calculator does not identify buried services or authorize excavation."
      }
    ],
    "limitations": "Planning guideline only. Local depth, soil, frost, wind, gate loads and installation details must be independently verified; no structural or excavation-safety approval.",
    "faqs": [
      {
        "question": "How deep should a fence post be?",
        "answer": "This page compares an explicitly selected planning fraction with a local depth you supply. It cannot make a final structural choice. For a six-foot exposed post, the one-third guideline yields two feet of embedment before local, soil or load requirements are considered."
      },
      {
        "question": "Does one third mean total post length?",
        "answer": "No. The implemented guideline uses above-ground height. Read the reference carefully because similar rules can be worded differently. The calculator labels that basis and then adds embedment to exposed height to estimate post length before any cutting allowance."
      },
      {
        "question": "How is frost depth included?",
        "answer": "You enter the applicable required depth in inches. The tool uses it only as a user-supplied minimum. It does not look up a frost map or decide whether a frost-line requirement applies to your post type or jurisdiction."
      },
      {
        "question": "Does gravel increase the post length?",
        "answer": "Not in this model. Gravel increases excavation depth below the embedment, while post length is exposed height plus embedment. Confirm the actual detail in the installation plan, particularly when a footing or base arrangement differs from this simplified model."
      },
      {
        "question": "Can I use the result for a gate post?",
        "answer": "Gate posts can carry substantially different loads. This arithmetic does not assess those loads, soil bearing, wind or hardware. Use a suitable design and qualified installation advice instead of assuming a height-based fraction makes a gate support adequate."
      }
    ]
  },
  {
    "slug": "lead-time-calculator",
    "title": "Lead Time Calculator",
    "category": "Business",
    "description": "Add sequential order-processing, production, transit and receiving durations to calculate a transparent calendar-day lead-time estimate.",
    "formula": "Total sequential lead time = order processing + production + transit + receiving and inspection.",
    "example": "One day of processing, five production days, three transit days and one receiving day total ten calendar days when every stage follows the previous one.",
    "keywords": [
      "lead time calculator"
    ],
    "shortTitle": "Lead Time",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Add sequential order-processing, production, transit and receiving durations to calculate a transparent calendar-day lead-time estimate. Lead time needs agreed endpoints. For purchasing, the interval might begin when an order is approved and finish when stock is available for use, not merely when a shipment reaches the gate. This page separates processing, production, transit and receiving so those stages are visible. Decide which activities belong in each stage before entering numbers. Counting the same approval or handling interval twice will inflate the total even though the addition itself is correct.",
    "howTo": [
      "Enter calendar days for order processing, production, transit and receiving or inspection.",
      "Use zero for absent stages. This sum assumes each stage follows the previous stage without overlap.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Sequential stages are added",
        "text": "The implemented model assumes each stage starts after the previous one finishes. If two operations run in parallel, their durations should not automatically be added. A project network or critical-path method may be needed to determine the actual end date. The calculator does not infer concurrency from a supplier description. Use it when the process is genuinely sequential or when your stage durations already represent the non-overlapping portions of a measured process."
      },
      {
        "title": "Calendar days versus working days",
        "text": "Every field uses calendar days on a consistent basis. A supplier’s five working days and a carrier’s three calendar days cannot be added directly without a conversion policy. Weekends, holidays, local cutoffs and inspection schedules can change an expected availability date. This tool calculates a duration, not a promised delivery date. It deliberately does not invent a holiday calendar or assume a country’s workweek from the browser location."
      },
      {
        "title": "Variability and inventory decisions",
        "text": "A single sum is a baseline estimate, not a percentile or service-level guarantee. Actual stages can vary with demand, customs, failures and scheduling. Compare a typical case with an observed slower case using records from the same process. The Inventory Reorder Point Calculator uses lead time with demand and safety stock for a separate stocking decision. Do not increase a reorder quantity solely from one fast shipment or treat an average lead time as protection against all delays."
      }
    ],
    "limitations": "Sequential calendar-day sum only. No parallel-stage scheduling, holiday calendar, delivery promise, statistical lead-time percentile or automatic inventory policy.",
    "faqs": [
      {
        "question": "What is lead time?",
        "answer": "It is the duration between a defined start and finish of a process. The definition must state whether approval, production, freight, receiving and inspection are included. This calculator adds four sequential stages on a calendar-day basis rather than assuming one universal business definition."
      },
      {
        "question": "Can I enter business days?",
        "answer": "Convert them to a consistent calendar-day basis first using the actual schedule, or use a process-specific working calendar. Mixing business and calendar days produces an invalid interpretation. This tool does not contain holiday data or automatically exclude weekends."
      },
      {
        "question": "What if production and paperwork overlap?",
        "answer": "Represent only the sequential portion or use a scheduling method that models dependencies. Adding overlapping durations overstates the total. The page does not draw a dependency network, so it cannot decide which of several parallel stages controls completion."
      },
      {
        "question": "Does this predict delivery date?",
        "answer": "No. It returns a duration under your entered assumptions. A date estimate also requires the actual starting timestamp, working calendar and cutoffs. Supplier promises, customs and carrier performance must be verified separately before making a commitment."
      },
      {
        "question": "How should I use it for inventory?",
        "answer": "Use a defensible lead-time value measured to the point stock becomes usable, then combine it with demand and safety stock using the related reorder-point tool. Keep the same time unit for demand and lead time. A baseline duration alone does not determine an appropriate service level."
      }
    ]
  },
  {
    "slug": "recessed-light-calculator",
    "title": "Recessed Light Calculator — Lumen Method",
    "category": "Home",
    "description": "Estimate a recessed-light count from room area, fixture lumens, target lux and a supplied utilization and maintenance factor.",
    "formula": "Estimated fixtures = ceiling(area m² × target lux ÷ (fixture lumens × combined factor)). Achieved average lux = fixtures × lumens × factor ÷ area.",
    "example": "A 5 by 4 m room, 800 lm fixtures, 150 lux target and a 0.7 combined factor needs about 5.36 fixtures, rounded to six, giving an estimated 168 lux average.",
    "keywords": [
      "recessed light calculator"
    ],
    "shortTitle": "Recessed Light",
    "icon": "📐",
    "accent": "green",
    "updatedAt": "2026-10-02",
    "intro": "Estimate a recessed-light count from room area, fixture lumens, target lux and a supplied utilization and maintenance factor. The lumen method compares an area’s desired average illumination with the useful light contribution from each fixture. Enter metres for room dimensions, lumens for fixture output and lux for the target. One lux is one lumen per square metre. The model produces a quantity estimate for a rectangular area, not a set of installation coordinates. A comfortable lighting plan also needs distribution, glare control, task placement and suitable fixture selection.",
    "howTo": [
      "Enter room length and width in metres, fixture output in lumens and target average illuminance in lux.",
      "Supply a combined utilization and maintenance factor above zero and at most one from the planned lighting design.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Use the selected fixture’s output",
        "text": "Lumens describe light output, while watts describe electrical input. Do not enter a watt number in the lumen field. Products with the same electrical wattage can have different output and beam distribution. Use the actual fixture specification, including its trim or optical configuration. An advertised lamp figure can differ from the delivered lumens of a complete recessed fixture. Dimming settings also affect the output available during normal use."
      },
      {
        "title": "Utilization and maintenance are explicit",
        "text": "The combined factor represents utilization and maintenance losses under your design assumptions. It must be above zero and at most one. A lower factor means more initial light is needed to achieve the target. This calculator does not derive the factor from ceiling reflectance, wall finishes, room geometry, dirt or a photometric file. Obtain a suitable factor from a lighting design or treat it as an explicitly uncertain planning assumption when comparing scenarios."
      },
      {
        "title": "Layout and installation need another step",
        "text": "A whole-fixture count does not prove that every point in a room reaches the average target. Beam spread, mounting height, walls, obstructions and fixture spacing determine uniformity. Use product photometric information and a proper layout when the installation matters. Target lux is supplied by the user; the page does not declare a universal legal minimum for every room or task. Electrical circuits, insulation-contact ratings, clearances and wet-area suitability require appropriate professional and manufacturer guidance."
      }
    ],
    "limitations": "Average lumen-method estimate only. No universal lux target, derived utilization factor, photometric layout, fixture spacing, code compliance or electrical installation design.",
    "faqs": [
      {
        "question": "How many recessed lights do I need?",
        "answer": "The count depends on area, fixture lumens, target average lux and the combined factor you enter. This page calculates that lumen-method estimate and rounds up. It does not decide the best pattern, exact spacing or suitability of a fixture for your ceiling."
      },
      {
        "question": "Should I enter watts or lumens?",
        "answer": "Enter lumens. Watts measure electrical power rather than light output. Read the fixture’s actual specification and account for the selected trim and operating setting. Using a watt figure as lumens would produce a materially incorrect fixture count."
      },
      {
        "question": "What factor should I use?",
        "answer": "Use the combined utilization and maintenance assumption supplied by a suitable lighting assessment. The calculator cannot infer it from dimensions alone. Test a lower factor if you are exploring uncertainty, but label that result as a scenario rather than a validated lighting design."
      },
      {
        "question": "Does the count guarantee the target everywhere?",
        "answer": "No. It is an average-area estimate under the stated factor. A room can have dark areas or glare even when the total lumen budget looks sufficient. Photometric distribution, mounting height and task placement need a layout-specific assessment."
      },
      {
        "question": "Can this calculate spacing from ceiling height?",
        "answer": "This implementation does not use a generic height-divided-by-two spacing rule. It estimates quantity with a disclosed lumen method. Use the chosen fixture’s beam and spacing information or a photometric layout to determine installation locations."
      }
    ]
  },
  {
    "slug": "partial-fraction-calculator",
    "title": "Partial Fraction Calculator — Real Linear Factors",
    "category": "Education",
    "description": "Decompose a rational polynomial over supplied real linear factors, including repeated roots and an improper polynomial quotient.",
    "formula": "Build Q(x)=∏(x−root). Divide numerator P by Q first when needed. Solve P_remainder=Σ A(r,k) × Q(x)/(x−r)^k by matching coefficients.",
    "example": "Numerator coefficients 1 and roots 1, −1 represent 1/(x²−1), decomposed as 0.5/(x−1) − 0.5/(x+1), excluding x=±1.",
    "keywords": [
      "partial fraction calculator"
    ],
    "shortTitle": "Partial Fraction",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Decompose a rational polynomial over supplied real linear factors, including repeated roots and an improper polynomial quotient. Enter the numerator’s coefficients in descending powers, including zeros for missing terms. For 2x²+3, enter 2, 0, 3. Enter denominator roots as a separate list: roots 1 and minus 1 mean the monic denominator (x−1)(x+1). The page does not accept a typed algebraic expression in the coefficient field or factor an arbitrary denominator automatically. If the denominator’s leading coefficient is not one, divide the numerator by that coefficient before using its roots.",
    "howTo": [
      "Enter numerator coefficients from highest power to constant, including zeros for missing powers.",
      "Enter denominator real roots separated by commas. Repeat a root for its multiplicity; the denominator is monic.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Simple and repeated linear factors",
        "text": "A simple root contributes a term A/(x−r). A root repeated twice needs terms for both the first and second denominator powers. Repeat the same root in the input list to specify multiplicity. The calculator builds a coefficient system using those terms and solves for the displayed constants. It supports up to six real roots counting repetitions. Irreducible quadratic factors need a different numerator structure and are outside this implementation’s stated scope."
      },
      {
        "title": "Improper rational functions",
        "text": "When the numerator degree is at least the denominator degree, polynomial division comes first. The result contains a polynomial quotient plus a proper remainder fraction, and only that remainder is decomposed into partial fractions. Keeping the quotient prevents a common error where the fractional terms describe only part of the original function. The output displays the expanded denominator and quotient so you can verify the representation before using it in another calculation."
      },
      {
        "title": "Domain and numerical verification",
        "text": "Every root of the original denominator remains excluded, even if algebraic cancellation makes an expression look defined there. Coefficients are calculated numerically and rounded for display, so the result is an approximate printed decomposition rather than an exact symbolic rational proof. Closely spaced or extreme roots can be ill-conditioned and are rejected when the linear system is unreliable. Verify by recombining the fractions or evaluating both forms at non-root values; do not test at excluded points."
      }
    ],
    "limitations": "Monic denominator with 1–6 supplied real linear roots only; numerator up to degree eight. No automatic factoring or irreducible quadratic factors. Displayed numerical coefficients are rounded.",
    "faqs": [
      {
        "question": "Can I paste a fraction like 1/(x²−1)?",
        "answer": "This version uses explicit coefficient and root lists. Enter 1 for the numerator and 1, −1 for the denominator roots. The input format avoids guessing a denominator factorization and keeps the supported real-linear-factor scope clear."
      },
      {
        "question": "How do I enter a repeated factor?",
        "answer": "Repeat the root. For (x−1)²(x+2), enter roots 1, 1, −2. The output includes terms with (x−1) and (x−1)², plus the factor at −2. Omitting a repeated root would represent a different denominator."
      },
      {
        "question": "What if numerator degree is higher?",
        "answer": "The calculator performs polynomial division first and displays the quotient. The remaining proper fraction is then decomposed. Do not discard the quotient when checking the original rational function or using the decomposition in a later algebra step."
      },
      {
        "question": "Does it support irreducible quadratics?",
        "answer": "No. This bounded implementation accepts supplied real linear roots only. A factor such as x²+1 has no real roots and requires a linear numerator over the quadratic factor. The page does not fabricate a real-root factorization for that case."
      },
      {
        "question": "Why are the results decimals?",
        "answer": "The coefficient system is solved numerically and displayed to a limited number of decimal places. Simple examples often have terminating constants, but other inputs can require rounded coefficients. Recombination checks should allow for displayed rounding and avoid poorly conditioned root sets."
      }
    ]
  },
  {
    "slug": "implicit-differentiation-calculator",
    "title": "Implicit Differentiation Calculator — Polynomial Equations",
    "category": "Education",
    "description": "Differentiate a supported polynomial equation in x and y, show both partial derivatives and check the slope at a supplied point.",
    "formula": "For F(x,y)=0, F_x + F_y × dy/dx = 0, so dy/dx = −F_x/F_y where F_y≠0. Differentiate each supported monomial by its x or y exponent.",
    "example": "For x²+y²=25, dy/dx=−2x/(2y). At (3,4), the curve residual is zero and the slope is −0.75.",
    "keywords": [
      "implicit differentiation calculator"
    ],
    "shortTitle": "Implicit Differentiation",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Differentiate a supported polynomial equation in x and y, show both partial derivatives and check the slope at a supplied point. Enter a sum of polynomial monomials in x and y, such as x^2+y^2=25 or x*y+x=4. Use a caret for a non-negative integer exponent and an asterisk when multiplying terms. Numeric decimal coefficients are allowed. Parentheses, division, functions such as sin or log, negative powers and scientific notation are not supported. Rewrite a supported polynomial into an expanded sum before entry. The parser rejects other syntax instead of evaluating arbitrary code.",
    "howTo": [
      "Enter a polynomial equation using x, y, signed terms and non-negative integer powers, such as x^2+y^2=25.",
      "Enter the point coordinates to evaluate the partial derivatives and test whether the point lies on the curve.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Moving both sides into F",
        "text": "The calculator treats the equation as F(x,y)=left side minus right side. If no equals sign is present, the entered expression is understood as equal to zero. It then forms partial derivatives by holding the other variable constant. For an x-dependent monomial, the x derivative multiplies its coefficient by the x exponent and reduces that exponent by one. The y derivative follows the same rule. The symbolic output leaves algebraic simplification visible rather than pretending to solve y explicitly."
      },
      {
        "title": "Derivative formula and point evaluation",
        "text": "The implicit derivative is negative F_x divided by F_y. A finite slope from that expression requires a nonzero F_y at the point. The point fields do not solve for an unknown coordinate; they evaluate the point you supply. The curve residual shows whether those coordinates actually satisfy the entered equation within a numerical tolerance. If they do not, the output refuses to describe the ratio as the curve’s slope at that point."
      },
      {
        "title": "Singular points and method limits",
        "text": "When F_y is zero, the displayed derivative formula is undefined. That can correspond to a vertical tangent or a more complicated singular case; this tool does not choose an interpretation automatically. Numeric point evaluations use floating-point arithmetic and finite input limits. The supported polynomial degree is capped at twelve to keep parsing and evaluation bounded. The page is a polynomial differentiation aid, not a general computer algebra system for every implicit expression."
      }
    ],
    "limitations": "Expanded polynomial sums in x and y, total degree at most twelve, bounded coefficients and coordinates only. No general function parser, equation solving, branch selection or singular-point classification.",
    "faqs": [
      {
        "question": "Can I differentiate without solving for y?",
        "answer": "Yes. Implicit differentiation treats y as dependent on x and combines partial derivatives into −F_x/F_y. This tool displays that symbolic relationship for the supported polynomial equation, avoiding an unnecessary branch choice from explicitly solving for y."
      },
      {
        "question": "What should I enter for a circle?",
        "answer": "For a circle centered at the origin with radius five, enter x^2+y^2=25. Supply a point on that circle if you want a slope check. The point (3,4) has zero residual and gives −0.75, whereas an off-curve point is identified separately."
      },
      {
        "question": "Does it accept trigonometric equations?",
        "answer": "No. The supported input is an expanded polynomial sum. Functions, parentheses and division require a larger expression system and are rejected here. The title and method disclosure make this restriction explicit rather than claiming general symbolic support."
      },
      {
        "question": "Why does it say the point is not on the curve?",
        "answer": "Substituting the supplied coordinates into left side minus right side produces a residual beyond the numerical tolerance. The partial-derivative ratio at an unrelated point is not the slope of that curve there. Check the equation and coordinates before calculating again."
      },
      {
        "question": "Does F_y=0 always mean a vertical tangent?",
        "answer": "Not always. It means this finite derivative formula cannot be used at the point. A vertical tangent or singular behavior needs further analysis, especially if both partial derivatives vanish. The calculator reports the limitation rather than selecting a geometric conclusion from one zero value."
      }
    ]
  },
  {
    "slug": "greek-gematria-calculator",
    "title": "Greek Gematria Calculator — Isopsephy",
    "category": "Education",
    "description": "Add traditional Greek letter values with accent and case normalization, showing the total and a transparent letter-by-letter breakdown.",
    "formula": "Isopsephy total = sum of each counted Greek letter’s numeral value. Values run through units 1–9, tens 10–90 and hundreds 100–900 using the supported Greek numeral letters.",
    "example": "Greek αβγ totals 1+2+3=6. Uppercase ΑΒΓ gives the same result; final sigma ς and ordinary sigma σ both contribute 200.",
    "keywords": [
      "gematria calculator",
      "greek gematria calculator"
    ],
    "shortTitle": "Greek Gematria",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Add traditional Greek letter values with accent and case normalization, showing the total and a transparent letter-by-letter breakdown. Gematria can refer to different letter-number conventions. This page implements Greek isopsephy, not Hebrew gematria, an English ordinal cipher or a universal mapping across alphabets. Traditional Greek numeral values are associated with Greek letters, including additional numeral letters for six, ninety and nine hundred. The total is a defined sum under this mapping. It does not establish a word’s historical meaning, predict events or prove a connection between phrases that happen to have the same value.",
    "howTo": [
      "Enter Greek letters directly, using the disclosed alphabet values. Accents, case and ordinary punctuation are normalized.",
      "Avoid Latin transliteration, numbers and Greek numeral-sign notation; unsupported input is reported rather than silently ignored.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Text normalization",
        "text": "The input is normalized into decomposed Unicode characters so accents and breathing marks can be removed before case is standardized. Uppercase and lowercase forms then contribute the same values. Final sigma and ordinary sigma are treated alike. This is a spelling-normalization choice, not a claim that different spellings have the same linguistic meaning. Unsupported Latin letters are rejected instead of being silently dropped or transliterated into a Greek word."
      },
      {
        "title": "Breakdown and special numeral letters",
        "text": "The output lists each counted letter with its value, making transcription errors easier to spot. The mapping includes stigma and digamma as six, numeral or archaic koppa as ninety, and sampi as nine hundred. Ordinary spacing and punctuation do not contribute to the sum. This calculator processes letter values rather than reading a complete Greek numeral notation, so digits, thousands markers and numeral-sign syntax are rejected. Use the breakdown to verify any special character pasted from a source."
      },
      {
        "title": "Comparisons without hidden conventions",
        "text": "Compare phrases only after confirming that the same alphabet, normalization and value system were used. Changing transliteration or using a different language’s gematria convention can change the total. A repeated letter contributes repeatedly; the tool does not reduce the answer to one digit or apply a secret secondary operation. Keep the original spelling with the displayed breakdown when citing a result. A numerical match can be an interesting textual observation, but it is not evidence of a causal or predictive relationship."
      }
    ],
    "limitations": "Greek letter-value sum only. No Hebrew or English cipher, Latin transliteration, numeral-string parsing, digit reduction, prediction or claim about textual authenticity.",
    "faqs": [
      {
        "question": "Which gematria system does this use?",
        "answer": "Greek isopsephy with the supported traditional letter values. It does not calculate Hebrew, English or another alphabet’s gematria. The explicit system name is necessary because a generic gematria search can refer to several incompatible value conventions."
      },
      {
        "question": "Do accents change the total?",
        "answer": "Accents and combining marks are removed in this implementation, and case is normalized. The visible breakdown shows the base letters that were counted. This normalization is disclosed so you can compare it with a source that treats spelling or marks differently."
      },
      {
        "question": "What happens to Latin transliteration?",
        "answer": "It is rejected. A Latin rendering of a Greek word does not determine a unique original spelling, so automatically guessing Greek letters would produce an unreliable total. Enter the actual Greek text and inspect any ambiguous characters."
      },
      {
        "question": "Are σ and ς different values?",
        "answer": "No. Both ordinary and final sigma contribute 200. Their positions in Greek spelling differ, but this numerical mapping gives them the same contribution. The breakdown retains the counted form so you can still verify what was entered."
      },
      {
        "question": "Does a matching total prove anything about two phrases?",
        "answer": "It proves only that the two entered strings have equal sums under the same mapping and normalization. The calculator makes no supernatural, predictive or historical-authenticity claim. Interpret numerical matches with textual context rather than treating the total as an independent explanation."
      }
    ]
  },
  {
    "slug": "time-off-calculator",
    "title": "Time Off Calculator — PTO Accrual",
    "category": "Business",
    "description": "Project a PTO balance from current hours, accrual per pay period, future periods, planned leave and an optional balance cap.",
    "formula": "Accrued hours = rate × future pay periods. Projected pre-leave balance = min(current + accrual, cap) when a cap is entered. Post-leave balance = pre-leave balance − planned leave.",
    "example": "40 current hours plus four hours for each of six periods gives 64 hours before leave. Taking 16 hours leaves 48 hours when the cap is 80.",
    "keywords": [
      "time off calculator"
    ],
    "shortTitle": "Time Off",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Project a PTO balance from current hours, accrual per pay period, future periods, planned leave and an optional balance cap. Current balance, accrual and planned leave all use hours. A day of leave is not necessarily eight hours; convert using the work schedule and policy that apply to you. If the leave record uses days, confirm how partial days and varied shifts are counted before making a conversion. The calculator does not infer an employee’s daily hours or apply an assumed workweek. A balance projection is only meaningful when every input uses the same policy unit.",
    "howTo": [
      "Enter current PTO hours, accrual hours per pay period and the whole-number count of future periods.",
      "Enter planned leave in hours and a balance cap, or zero for no cap. The cap applies at projection before leave.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Accrual per pay period",
        "text": "Enter the rate earned in one eligible pay period and a whole-number count of future periods. Weekly, fortnightly, twice-monthly and monthly schedules have different counts. Six periods does not automatically mean six months. The tool assumes a fixed accrual rate for all entered periods. Eligibility rules, tenure-based rate changes, unpaid leave and prorated periods require additional accounting. Verify the rate against the employer’s policy and a current balance record."
      },
      {
        "title": "Cap at the projection point",
        "text": "An optional positive cap limits the projected balance before planned leave is subtracted; zero means no cap in this simplified calculation. This is a cap-at-projection model, not a chronological leave ledger. If leave occurs partway through the period and allows more accrual before a cap is reached, the real result can differ. Expiry dates, carryover resets and caps applied differently to existing balances are also outside this formula. The page discloses the timing convention rather than silently choosing an employer’s policy."
      },
      {
        "title": "Planned leave and approval",
        "text": "A negative projected balance identifies a shortfall under the entered assumptions. It does not approve borrowing leave, classify absence or establish a legal entitlement. The shortfall output shows the additional hours needed to cover the planned leave in this model. Employer approval, blackout periods, public holidays and separate sick or parental leave accounts remain distinct questions. Use the projection as a discussion aid and reconcile it with the official leave system before booking consequential plans."
      }
    ],
    "limitations": "Fixed-rate projection with a cap applied before all planned leave. No dated ledger, carryover expiry, legal entitlement, employer approval or changing accrual rates.",
    "faqs": [
      {
        "question": "How do I calculate accrued time off?",
        "answer": "Multiply eligible future pay periods by the policy’s accrual hours per period, then add the current balance. Apply a cap only if it actually matches your policy. This page uses the stated cap-at-projection convention and subtracts planned leave afterward."
      },
      {
        "question": "Can I enter leave in days?",
        "answer": "Convert it to hours using your actual schedule and policy first. Eight hours per day is not universal. Part-time schedules, compressed weeks and partial-day rules can change that conversion, so keep the employer’s unit definition with your calculation."
      },
      {
        "question": "What does a negative balance mean?",
        "answer": "Planned leave exceeds the projected available hours in this simplified model. The supporting shortfall figure gives the gap. It does not determine whether advance leave is allowed or whether the employer will approve the request."
      },
      {
        "question": "Will this handle leave taken before the cap is reached?",
        "answer": "Not as a dated ledger. It projects accrual, applies the entered cap and then subtracts all planned leave. A different sequence can allow additional accrual, so use an actual period-by-period leave record when timing affects the cap."
      },
      {
        "question": "Does it calculate a legal leave entitlement?",
        "answer": "No. It applies the rate and balance rules you provide. Employment law, contract terms, eligibility and leave categories vary. The official policy and relevant local requirements are authoritative, and this calculator does not supply them automatically."
      }
    ]
  },
  {
    "slug": "decimals-calculator",
    "title": "Decimals Calculator — Exact Arithmetic",
    "category": "Education",
    "description": "Add, subtract, multiply or divide plain decimals using integer-based arithmetic, with an exact fraction and explicit output rounding.",
    "formula": "Represent each decimal as an integer divided by a power of ten. Perform the selected rational operation, reduce the fraction, then round to 0–30 decimal places using half away from zero.",
    "example": "0.1 + 0.2 returns 0.3 with exact fraction 3/10. Dividing one by three at ten decimal places displays 0.3333333333 and exact fraction 1/3.",
    "keywords": [
      "decimals calculator"
    ],
    "shortTitle": "Decimals",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Add, subtract, multiply or divide plain decimals using integer-based arithmetic, with an exact fraction and explicit output rounding. Many ordinary programming calculations store decimal inputs using binary floating-point numbers. Some simple base-ten fractions then have only an approximation in memory. This calculator instead converts each supported decimal to an integer over a power of ten and performs rational arithmetic with large integers. The familiar 0.1 plus 0.2 example therefore produces exactly three tenths before formatting. The method is deterministic and does not need a remote calculation service.",
    "howTo": [
      "Enter two plain signed decimals and choose addition, subtraction, multiplication or division.",
      "Select zero to thirty decimal places. Scientific notation is unsupported; division requires a nonzero second number.",
      "Click Calculate result to submit the inputs. Editing fields keeps the last submitted output until you click again.",
      "Check the worked example, units and method limits before using the result."
    ],
    "considerations": [
      {
        "title": "Plain decimal input format",
        "text": "Use a sign when needed, digits and an optional decimal point. Leading-dot forms such as .5 and trailing-dot forms such as 2. are accepted, but scientific notation, thousands separators, expressions and embedded unit text are rejected. Each input is limited to 150 characters to keep arithmetic bounded. If a source displays 1,000.25, enter 1000.25. The operation menu supplies addition, subtraction, multiplication or division, so an expression should not be typed into a number field."
      },
      {
        "title": "Exact fraction and displayed precision",
        "text": "The supporting fraction is the exact reduced rational answer for the accepted decimal inputs. The main output formats that answer to the selected number of decimal places. A repeating result such as one third cannot be written as a finite exact decimal, so its displayed decimal is rounded while its fraction remains exact. The result note distinguishes an exact displayed value from a rounded one. Do not infer greater measurement accuracy simply because a calculation can print many digits."
      },
      {
        "title": "Rounding and negative values",
        "text": "The selected rounding rule is half away from zero. At a tie, a positive value rounds upward in magnitude and a negative value rounds downward in sign but also away from zero. It differs from banker’s rounding, truncation and policies used by some financial systems. The calculator does not claim its rounding rule is legally or contractually required. Choose the precision needed for your problem and compare external results only when they use the same rounding convention."
      }
    ],
    "limitations": "Plain finite-decimal inputs up to 150 characters each, four operations and 0–30 displayed places. No expression evaluation, recurring-input notation or policy-specific rounding requirement.",
    "faqs": [
      {
        "question": "Why does 0.1 plus 0.2 equal 0.3 here?",
        "answer": "Both inputs are converted into exact fractions over powers of ten. Their sum is reduced to 3/10 before decimal formatting. This avoids the binary floating-point representation artifact that can appear in a direct programming-language addition."
      },
      {
        "question": "Can it divide recurring decimals?",
        "answer": "It can divide the accepted finite-decimal inputs and show the resulting exact fraction. A recurring answer is then rounded to the selected output places. It does not accept notation that defines an infinite recurring input, such as an overbar or repeated-dot convention."
      },
      {
        "question": "What does the exact fraction show?",
        "answer": "It shows the reduced rational answer before output rounding. For one divided by three, the fraction remains 1/3 even if the main display has ten decimal places. That fraction helps verify arithmetic and clarifies which decimal digits are only a formatted approximation."
      },
      {
        "question": "Which rounding rule is used?",
        "answer": "Half away from zero. For example, 1.25 at one decimal place rounds to 1.3, and −1.25 rounds to −1.3. This is not the same as every accounting or statistical policy, so verify the required convention for consequential calculations."
      },
      {
        "question": "Can I type exponents or a full expression?",
        "answer": "No. Enter two plain decimal values and select an operation. Scientific notation and expressions are rejected rather than evaluated as code. Use the related scientific-notation tool for conversion or convert the value to the supported plain format before calculating."
      }
    ]
  }
];
