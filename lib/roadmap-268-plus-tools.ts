import type {Tool} from "./tools";
export const roadmap268Tools:Tool[] = [
  {
    "slug": "drywall-calculator",
    "title": "Drywall Calculator — Panel Count from Net Surface Area",
    "shortTitle": "Drywall",
    "category": "Home",
    "description": "Estimate whole drywall sheets from wall and ceiling area, measured openings, panel size and an explicit allowance, with net-area checks.",
    "intro": "This drywall calculator estimates whole panels from the surface area you actually intend to cover. Supply total wall and ceiling area, the combined area of openings, the width and length of your chosen panel, and an explicit ordering allowance. The result separates net surface area from planned purchasing area so you can see exactly where additional material enters the estimate. It answers how many sheets an area-based order may require; it does not decide panel thickness, approved assemblies or the best cutting layout. All dimensions describe finished panel surfaces rather than floor area alone.",
    "formula": "Net area = gross wall and ceiling area − measured openings. Planned area = net area × (1 + allowance/100). Whole panels = ceiling(planned area / (panel width × panel length)).",
    "example": "For 500 ft² gross surface, 40 ft² openings, 4 × 8 ft sheets and 10% allowance: net area is 460 ft², planned area is 506 ft², coverage is 32 ft² per sheet and the rounded order estimate is 16 sheets.",
    "howTo": [
      "Measure the total wall and ceiling surface, the openings to deduct, and the actual panel width and length in the stated units.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Measure walls and ceilings separately",
        "text": "Floor area is not the wall area of a room. Measure each wall length and multiply by its height, then add the ceiling only when it will receive drywall. For a rectangular room, four walls contribute twice the sum of length and width times height. Sloped ceilings and bulkheads need their own measured faces. Keep a short surface schedule so an omitted soffit or a duplicated ceiling can be found before purchasing. Enter the combined surface total in square feet."
      },
      {
        "title": "Deduct actual openings without promising reusable offcuts",
        "text": "The openings field is an area, not a count of doors and windows. A three-foot by seven-foot opening contributes twenty-one square feet. This deduction makes the arithmetic transparent, but small cutouts do not necessarily save an entire panel: their location affects usable pieces and seams. If your ordering method deliberately retains some openings to cover cutting waste, document that choice rather than also claiming every opening as a material saving. Openings cannot exceed the gross measured surface."
      },
      {
        "title": "Panel coverage is not a seam plan",
        "text": "A four-foot by eight-foot sheet covers thirty-two square feet before cutting. Different sheet lengths change the quotient and can change the rounded purchasing count. They also affect handling and joint placement, which this area model does not optimize. Two projects with identical net area may have different panel needs because their shapes and framing differ. Review the actual support locations and sheet orientation with the project specification rather than treating the smallest displayed count as an installation plan."
      },
      {
        "title": "Keep allowance visible and avoid adding it twice",
        "text": "Zero allowance shows the geometric coverage requirement. A ten-percent allowance multiplies net area by 1.10; it does not add ten square feet or ten sheets. Select an allowance from the actual layout, damage risk and ordering practice, then retain the reason beside the estimate. If a contractor or supplier quote already includes extra material, adding the same buffer again can overstate the order. Compare both the raw coverage figure and the final whole-sheet count."
      },
      {
        "title": "Round the purchase after combining compatible areas",
        "text": "The calculator rounds upward because a sealed sheet is purchased whole. An estimate of fifteen and a fraction requires sixteen sheets on this basis. For multiple rooms using the same panel product, combine compatible areas before final rounding when your cutting plan permits shared material. Different fire-rated assemblies or panel types must stay separate. Screws, tape, compound, corner bead, delivery and labor are not automatically derived from this count; use product coverage and actual project quantities for those items."
      }
    ],
    "faqs": [
      {
        "question": "Does this include the ceiling?",
        "answer": "Only when you include its measured area in the gross surface input. The tool does not automatically add a ceiling from floor dimensions."
      },
      {
        "question": "Can I change sheet size?",
        "answer": "Yes. Enter actual panel width and length in feet. Coverage is their product, and the whole-sheet count is recalculated after submission."
      },
      {
        "question": "Why can two equal-area rooms need different sheet counts?",
        "answer": "Shape, support locations, seams and usable offcuts differ. This is an area-based estimate rather than a cutting optimizer."
      },
      {
        "question": "Is ten percent required waste?",
        "answer": "No. Allowance is supplied by you. The example demonstrates ten percent without prescribing it for every layout."
      },
      {
        "question": "Does panel count confirm a fire rating?",
        "answer": "No. Assembly requirements, panel specification, fasteners and installation details need separate verification."
      }
    ],
    "limitations": "Area-based quantity only. No thickness selection, structural assessment, fire-rating approval, accessories or cutting optimization. Actual installation must follow the specified assembly and manufacturer documentation. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "drywall calculator"
    ]
  },
  {
    "slug": "zero-to-sixty-calculator",
    "title": "0–60 Calculator — Constant Acceleration Scenario",
    "shortTitle": "0–60",
    "category": "Vehicles",
    "description": "Estimate time from rest to a supplied speed using constant acceleration, with mph or km/h inputs and clearly labeled distance and gravity checks.",
    "intro": "The 0-60 calculator models acceleration from rest using a constant acceleration that you supply. It can illustrate a zero-to-sixty-mph scenario or another target speed in mph or kilometres per hour. The result includes elapsed seconds and the distance implied by that same constant-acceleration assumption. A real vehicle does not generally maintain one acceleration throughout a launch, so this worksheet is not a horsepower-to-0–60 prediction or a substitute for instrumented testing. Use it to understand the relationship among speed change, acceleration and time before comparing a measured run.",
    "formula": "Target speed v = mph × 0.44704, or km/h ÷ 3.6. Time from rest = v/a. Under constant acceleration, distance = v²/(2a). Standard-gravity comparison = a/9.80665.",
    "example": "At a constant 4 m/s², reaching 60 mph means reaching 26.8224 m/s. The model gives 6.7056 seconds and 89.93014272 metres. This is an arithmetic scenario, not a predicted result for a particular car.",
    "howTo": [
      "Establish your constant-acceleration scenario and choose mph or km/h for the target speed.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Acceleration is the assumption, not an inferred vehicle property",
        "text": "The first field is acceleration in metres per second squared. It is not horsepower, engine displacement, torque or a traction coefficient. If you have a measured speed trace, you may establish a suitable average for an interval independently, but that average does not make the entire launch constant. The tool starts at zero speed and uses no rolling start. Retain the basis of the acceleration value when sharing the calculation so another person knows what has been assumed."
      },
      {
        "title": "Sixty mph differs from one hundred km/h",
        "text": "Sixty miles per hour converts to 96.56064 kilometres per hour. One hundred kilometres per hour is therefore a slightly higher target. Comparing the two elapsed times without identifying the target speed mixes different tests. The interface lets you choose the unit and retains the SI speed as a check. Change the target to one hundred and select km/h for that scenario, rather than entering one hundred while the selector still reads mph."
      },
      {
        "title": "Distance belongs to the constant-acceleration model",
        "text": "The displayed distance uses the same acceleration throughout the interval. It is not calculated by multiplying final speed by the entire time, because that would pretend the vehicle travelled at its final speed from the start. Starting at rest under constant acceleration gives an average speed of half the final speed. Real speed traces can produce a different distance even when the total time is identical. Use integration of actual measurements when the exact launch distance matters."
      },
      {
        "title": "Keep rollout and timing conventions separate",
        "text": "Published acceleration results may start timing after a rollout distance or use a different trigger than your own test. This worksheet does not subtract rollout or adjust reaction time. It also does not handle gear changes, tyre spin, road grade, wind, temperature or traction control. Those factors affect a real measured run without appearing in the simple identity. Compare tested results only when the timing convention and conditions are known, and do not modify inputs merely to imitate a marketing specification."
      },
      {
        "title": "Compare scenarios without treating them as driving advice",
        "text": "At a fixed target speed, doubling the supplied constant acceleration halves the modeled time. At a fixed acceleration, doubling target speed doubles time but quadruples distance. These checks describe mathematical scaling rather than a recommendation to attempt a launch. The gravity output expresses the entered acceleration relative to standard gravity; it is not a passenger-safety rating or a limit for a vehicle. Any real testing requires an appropriate controlled setting and independently suitable equipment."
      }
    ],
    "faqs": [
      {
        "question": "Can horsepower alone predict 0–60 here?",
        "answer": "No. You supply acceleration. There is no hidden power-to-weight or traction model."
      },
      {
        "question": "Does the model start from rest?",
        "answer": "Yes. Initial speed is zero and the acceleration is assumed constant through the target speed."
      },
      {
        "question": "Is 60 mph the same as 100 km/h?",
        "answer": "No. Sixty mph is 96.56064 km/h. Select and compare the actual target speeds."
      },
      {
        "question": "Are rollout corrections included?",
        "answer": "No. The result uses the full interval from zero speed and applies no rollout convention."
      },
      {
        "question": "Why is actual launch time different?",
        "answer": "Acceleration changes with speed, gearing, traction and conditions. This worksheet illustrates one stated assumption."
      }
    ],
    "limitations": "Constant acceleration from rest only. No vehicle-performance forecast, road-condition model, rollout, shifting, drivetrain or traction correction is implemented. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "0-60 calculator"
    ]
  },
  {
    "slug": "watt-hour-calculator",
    "title": "Watt Hour Calculator — Watts, Hours, kWh and Joules",
    "shortTitle": "Watt Hour",
    "category": "Energy",
    "description": "Calculate watt-hours from supplied watts and operating hours, then compare kWh and joules without assuming battery capacity or efficiency.",
    "intro": "This watt hour calculator turns supplied power and operating duration into an energy quantity. Enter watts and hours for a constant load, or an independently measured average power over the same interval. The outputs show watt-hours, kilowatt-hours and joules for one consistent calculation. It is useful for appliance worksheets and energy comparisons, but a device label can describe rated or peak power rather than actual consumption. The page does not guess battery efficiency, usable charge, tariff or duty cycle. Establish those assumptions separately before using the energy total in another calculation.",
    "formula": "Energy Wh = power W × time hours. Energy kWh = Wh/1,000. Energy joules = Wh × 3,600.",
    "example": "A 60 W constant load operating for 5 hours uses 300 Wh, equivalent to 0.3 kWh or 1,080,000 J. A 120 W load for 2.5 hours gives the same energy under this stated model.",
    "howTo": [
      "Record a constant or independently measured average power and its matching operating duration in decimal hours.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Power and energy answer different questions",
        "text": "Watts describe the rate of energy transfer, while watt-hours describe an amount accumulated over time. A sixty-watt device does not consume sixty watt-hours unless it operates for one hour at that power. Keep the duration beside every energy statement. Megawatts and kilowatts are power prefixes; they cannot be added to watt-hours as though they were quantities of the same kind. The related power-unit converter helps with prefixes before the time multiplication."
      },
      {
        "title": "Use an average that matches the operating interval",
        "text": "A refrigerator, heater or compressor can cycle during the entered duration. Multiplying its full running wattage by all elapsed hours may overestimate measured energy if it is frequently off. Conversely, a specification may omit startup behavior or accessories. If you already have a trustworthy average wattage over the intended period, use it directly and do not apply a duty factor a second time. The calculator intentionally leaves measurement and averaging to the source record."
      },
      {
        "title": "Translate minutes into decimal hours correctly",
        "text": "Thirty minutes is one-half hour, not 0.30 hours. Ninety minutes is one and a half hours. Divide minutes by sixty before using this worksheet. The output multiplies exactly the hours you enter and does not interpret a decimal as clock notation. For example, 2.25 hours means two hours and fifteen minutes. Keep this distinction visible when copying durations from a schedule or comparing energy for several daily appliance sessions."
      },
      {
        "title": "Energy conversion does not establish usable battery charge",
        "text": "A battery with a nominal watt-hour label may not deliver that entire quantity to a connected load. Cutoff thresholds, chemistry, age, temperature and conversion equipment affect usable energy. This page applies no hidden efficiency adjustment and does not select a battery or charger. A nominal voltage times amp-hour calculation is another declared model, not a measurement of delivered output. Use a manufacturer-supported usable capacity and suitable separate runtime assumptions when planning equipment operation."
      },
      {
        "title": "Combine loads on a common basis",
        "text": "Calculate each appliance group with its own power and duration, then add the resulting watt-hours. Do not average wattages without accounting for how long each load operates. If the same device appears in two overlapping schedules, ensure its energy is not counted twice. Convert the combined total to kWh only after summing, keeping unrounded values where possible. Costs require the relevant supplied tariff and billing rules; this tool does not load local electricity prices."
      }
    ],
    "faqs": [
      {
        "question": "What is one watt-hour in joules?",
        "answer": "One Wh equals 3,600 J. The conversion changes units without changing the energy quantity."
      },
      {
        "question": "Does a watt mean a watt-hour?",
        "answer": "No. Power needs a duration before it becomes an energy amount."
      },
      {
        "question": "Can I enter half an hour?",
        "answer": "Yes. Enter 0.5 hours. Decimal hours are not minutes written after a decimal point."
      },
      {
        "question": "Does this include inverter losses?",
        "answer": "No. Watts and duration are supplied, and no efficiency or conversion-loss value is inferred."
      },
      {
        "question": "Can rated power give measured consumption?",
        "answer": "It gives a scenario only when that rated power represents operation across the interval. Metered average power is a different input basis."
      }
    ],
    "limitations": "Constant or independently established average power only. No tariff, battery sizing, runtime guarantee, peak-current assessment or automatically applied efficiency factor. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "watt hour calculator"
    ]
  },
  {
    "slug": "kd-calculator",
    "title": "KD Calculator — Kill/Death Ratio and Target Counts",
    "shortTitle": "KD",
    "category": "Everyday",
    "description": "Calculate kills divided by deaths, handle zero deaths explicitly and estimate additional kills for a supplied K/D target with no future deaths.",
    "intro": "The kd calculator evaluates the simple kill/death ratio from recorded whole-number kills and deaths. It also shows how many additional kills would reach a target ratio under the deliberately limited assumption of no additional deaths. The count basis remains visible so the result can be checked against the relevant game statistics. A game may track eliminations, assists or mode-specific summaries differently; this worksheet does not fetch account data or reproduce those rules. Zero deaths leave the quotient undefined rather than silently replacing the denominator with one or displaying a fictional finite score.",
    "formula": "K/D = kills/deaths for positive deaths. Additional kills with unchanged deaths = max(0, ceiling(target ratio × deaths − current kills)).",
    "example": "With 120 kills and 80 deaths, K/D is 1.5. A target of 2.0 with deaths fixed at 80 requires 160 total kills, so the worksheet shows 40 additional kills.",
    "howTo": [
      "Read whole kills and deaths from one consistent game mode and interval, then choose a target ratio for the no-further-deaths scenario.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Use kills and deaths from one matching record",
        "text": "A lifetime kill total paired with deaths from the current session does not form a meaningful lifetime or session ratio. Choose one mode, season or reporting interval and use both counts from that same record. If the game resets ranked statistics separately from casual matches, do not mix them. The tool reports your entered counts without identifying their source, so retain the interval and mode in any screenshot or comparison you share with another player."
      },
      {
        "title": "Zero deaths require an explicit mathematical boundary",
        "text": "Division by zero does not produce a finite K/D ratio. Some interfaces choose a display convention for a zero-death record, but this worksheet does not adopt an undisclosed game convention. It reports undefined and leaves the target calculation undefined until the denominator is positive. A record with zero kills and positive deaths has a ratio of zero, which is a different case. The boundary protects comparisons from a hidden denominator change."
      },
      {
        "title": "The target scenario assumes no further deaths",
        "text": "The additional-kills figure holds the entered death count constant. It is a planning identity, not a prediction of how future matches will go. If deaths increase, calculate again using the new total because the number of kills needed for the same target also increases. Reaching a target through a fractional kill is impossible, so the required additional count rounds upward. A target already achieved gives zero additional kills on the unchanged record."
      },
      {
        "title": "Aggregate totals instead of averaging displayed ratios",
        "text": "Two sessions can have different death counts and therefore different weights in an overall K/D. Add their kills, add their deaths and divide the combined totals. An ordinary average of the two displayed ratios generally gives a different answer. For example, a short zero-death session cannot be combined by averaging an undefined ratio with a finite one. Total counts preserve the actual denominator and avoid distortion caused by session length or rounding."
      },
      {
        "title": "Ratio is one descriptive statistic",
        "text": "K/D does not include objective capture, support activity, assists, team coordination or win outcomes. A high value in one mode may not mean the same thing as the identical value in another. This page avoids rating a player, recommending tactics or claiming a universal good ratio. Use the separate win-rate tool for a transparent outcome percentage, and keep that denominator distinct from deaths. Neither descriptive measure predicts the result of the next match."
      }
    ],
    "faqs": [
      {
        "question": "Does KDA mean the same as KD?",
        "answer": "No. KDA can include assists under a game-specific formula. This page divides kills by deaths only."
      },
      {
        "question": "What happens with zero deaths?",
        "answer": "The ratio is reported as undefined. The tool does not substitute one death or claim a finite quotient."
      },
      {
        "question": "Why round additional kills upward?",
        "answer": "Kills are whole counts. A fractional shortfall still requires the next whole kill to meet the target."
      },
      {
        "question": "Can I average two session ratios?",
        "answer": "Use combined kill and death counts instead. A simple mean of session ratios can misstate the overall record."
      },
      {
        "question": "Is a target forecast guaranteed?",
        "answer": "No. The target arithmetic assumes no additional deaths and says nothing about future performance."
      }
    ],
    "limitations": "Independent supplied-count arithmetic. No account connection, game affiliation, assist weighting, skill rating or prediction of future kills and deaths. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "kd calculator"
    ]
  },
  {
    "slug": "deck-board-calculator",
    "title": "Deck Board Calculator — Rows, Stock Length and Allowance",
    "shortTitle": "Deck Board",
    "category": "Home",
    "description": "Estimate straight deck-board rows and stock pieces from actual board width, supplied gap and stock length, with an explicit ordering allowance.",
    "intro": "This deck board calculator estimates boards for a rectangular deck with straight parallel rows. It merges deck calculator quantity intent into one worksheet, using the actual board face width, a gap established from your product instructions, the deck dimensions and your available stock length. The result separates board rows from stock pieces per row before applying an explicit ordering allowance. It does not select a gap, size joists or optimize offcuts across different rows. The output is a material takeoff for the stated layout, not a complete deck design or an installation approval.",
    "formula": "Rows = ceiling((deck width in inches + gap)/(actual board width + gap)). Stock pieces per row = ceiling(deck length/stock length). Estimated order = ceiling(rows × pieces per row × (1 + allowance/100)).",
    "example": "For a deck 12 ft across rows and 16 ft along boards, actual width 5.5 in, supplied gap 0.25 in and 16 ft stock: rows = ceiling(144.25/5.75) = 26. With 10% allowance the estimate is 29 stock boards.",
    "howTo": [
      "Choose the direction of straight board rows and verify actual face width, supplied gap and available stock length.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Actual width controls coverage",
        "text": "A nominal board name does not always match the exposed face width of the product. Measure or obtain the actual width before entering it. The row calculation includes a gap between adjacent boards but does not add an unnecessary gap outside both edge boards. This is why the expression adds one gap to the target width before division. Profile, fascia and edge treatment can change the usable layout; their quantities should be reviewed separately."
      },
      {
        "title": "Board direction changes the stock takeoff",
        "text": "Width means the dimension crossed by successive board rows, while length means the dimension followed by each row. Rotate the proposed board direction by exchanging those deck dimensions, then compare the count with the intended stock length. Equal deck area can give different row and piece counts. The tool treats every row as the same length and does not handle diagonal placement, borders, curves or stairs. Those details need a measured drawing rather than a simple area multiplier."
      },
      {
        "title": "Gap is a supplied installation requirement",
        "text": "The worksheet does not prescribe a universal spacing. Board material, product profile and installation conditions affect the correct instructions. Enter the gap specified for the actual product and situation, using inches. Changing the gap changes coverage and may change the integer row count, but a lower count is not a reason to exceed a permitted gap. The arithmetic cannot establish drainage, expansion, fastening or code compliance; the manufacturer and project requirements govern those decisions."
      },
      {
        "title": "Stock pieces are counted separately in every row",
        "text": "When a row is longer than available stock, this model rounds its length division upward for that row. It does not claim that every leftover can be reused in another row, and it does not choose joint positions or verify support beneath joints. The resulting count can be conservative for an optimized cut schedule. Conversely, unsupported or staggered-joint requirements can introduce additional material. Keep a separate cut plan and support layout before converting a rough takeoff into an order."
      },
      {
        "title": "Allowance comes after the base piece count",
        "text": "The visible allowance increases the integer base stock-piece count, then the purchase rounds upward again. Zero percent lets you inspect the row-specific takeoff without a buffer. If a supplier has already included extra boards, compare its count with the displayed base and allowance rather than adding another percentage blindly. Board lengths, grade, finish, damaged pieces and return policies affect purchasing choices. Fasteners, joists, posts, railings and labor are separate from this decking-board count."
      }
    ],
    "faqs": [
      {
        "question": "Does deck calculator include structural design?",
        "answer": "No. This page covers board quantities for a supplied straight-row layout, not joists, posts, stairs or structural capacity."
      },
      {
        "question": "Should I use nominal board width?",
        "answer": "Use actual exposed face width. A nominal product name can give the wrong row count."
      },
      {
        "question": "Is the default gap a recommendation?",
        "answer": "No. It demonstrates arithmetic. Follow the installation instructions for the actual product and conditions."
      },
      {
        "question": "Are offcuts optimized?",
        "answer": "No. Each row receives its own whole stock-piece count, without sharing leftovers across rows."
      },
      {
        "question": "Can I calculate a diagonal pattern?",
        "answer": "This rectangular parallel-row model does not resolve diagonal cuts, borders or irregular outlines."
      }
    ],
    "limitations": "Straight parallel rows only. No offcut optimization, diagonal layout, prescribed gap, fastening plan, support placement, load capacity or full deck quotation. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "deck board calculator",
      "deck calculator"
    ]
  },
  {
    "slug": "plate-rolling-calculator",
    "title": "Plate Rolling Calculator — Supplied Neutral-Axis Arc",
    "shortTitle": "Plate Rolling",
    "category": "Home",
    "description": "Calculate an illustrative developed plate length from inside radius, thickness, supplied neutral-axis factor, arc angle and process allowance.",
    "intro": "This plate rolling calculator is a developed-length worksheet for a circular arc. Enter the finished inside radius, plate thickness, a neutral-axis factor established by your fabricator, the arc angle and a separate signed process allowance. It calculates the arc along the supplied neutral radius and keeps the allowance visible. Rolling behavior depends on material and process information that this worksheet does not model. The result does not choose a machine, predict springback or give roll positions. Use the geometry as one documented part of a fabricator-reviewed takeoff, with millimetres used consistently throughout.",
    "formula": "Neutral radius = inside radius + supplied factor × thickness. Arc length = neutral radius × angle × π/180. Illustrative developed length = arc length + signed process allowance.",
    "example": "For 100 mm inside radius, 10 mm thickness, supplied factor 0.5 and 360° with no separate allowance: neutral radius is 105 mm and the arc is approximately 659.734457 mm. The factor is an input assumption, not a verified universal value.",
    "howTo": [
      "Verify inside radius, thickness, arc angle and the neutral-axis factor and allowance supplied for this fabrication scenario.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Inside radius must match the drawing basis",
        "text": "A drawing may specify inside diameter, outside diameter or a centerline dimension. This worksheet requires inside radius, so a diameter must first be divided by two and an outside dimension must not be copied without accounting for thickness. Write the measurement basis beside the calculation. For a full circular shell the angle is three hundred sixty degrees; for a partial arc it is the actual included angle. Conical and variable-radius parts require a different development."
      },
      {
        "title": "Neutral-axis factor is independently supplied",
        "text": "The factor locates the modeled neutral radius within the plate thickness. A value of zero uses the inside surface, one uses the outside surface and one-half uses the thickness midpoint. The midpoint example is only a transparent geometry assumption. Material behavior, bend ratio and forming process can require a different established basis. Do not use the default as a production setting or assume that a familiar sheet-metal bending factor applies unchanged to plate rolling."
      },
      {
        "title": "Arc angle and full circumference are distinct inputs",
        "text": "The tool converts degrees to radians before multiplying by neutral radius. A ninety-degree arc is one-quarter of the full circumference on the same supplied radius. A hundred-eighty-degree arc is one-half. These simple fractions make useful independent checks, but they do not identify where straight end portions or trimming zones start. If the fabrication drawing contains a circular section plus straight tangents, those lengths need a separate documented development rather than an angle adjustment."
      },
      {
        "title": "Process allowance remains a separate signed quantity",
        "text": "An independently established trimming or process correction can be added as millimetres. A negative correction reduces the modeled length, and the tool rejects a non-positive final result. The field is not a percentage, a weld-gap recommendation or an automatic springback correction. Keep its source with the job record. If the drawing or supplied development already includes a correction, entering it again doubles the adjustment. Compare the unadjusted arc and the final developed length before release."
      },
      {
        "title": "Geometry cannot validate the rolling process",
        "text": "Thickness, grade, mechanical properties, machine capacity, end preparation and welding requirements determine whether a part can be produced and accepted. The page has no rolling-force equation, residual-stress model, tolerance certificate or machine-setting output. A precise displayed decimal should not be mistaken for a precise finished radius. Have the responsible fabricator reconcile the chosen neutral-axis basis and allowance with the actual process, then confirm the finished part against the approved drawing and inspection requirements."
      }
    ],
    "faqs": [
      {
        "question": "Does this predict springback?",
        "answer": "No. It calculates a circular arc on a supplied neutral-axis basis and applies only your separate allowance."
      },
      {
        "question": "Is a factor of 0.5 always correct?",
        "answer": "No. It locates the modeled axis at mid-thickness. A fabricator must establish the appropriate process basis."
      },
      {
        "question": "Can I enter diameter?",
        "answer": "Convert a verified inside diameter to radius first. The field expects inside radius in millimetres."
      },
      {
        "question": "Can allowance be negative?",
        "answer": "Yes, when independently justified. The final developed length must remain positive."
      },
      {
        "question": "Does this set the rolling machine?",
        "answer": "No. Machine capacity, roll positions, forming sequence and acceptance tolerances are outside the worksheet."
      }
    ],
    "limitations": "Illustrative circular-arc development only. Supplied factor and allowance are not verified by the tool. No springback, roll load, machine setup, structural analysis or fabrication approval. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "plate rolling calculator"
    ]
  },
  {
    "slug": "running-record-calculator",
    "title": "Running Record Calculator — Accuracy and Self-Correction",
    "shortTitle": "Running Record",
    "category": "Education",
    "description": "Calculate reading accuracy, error ratio, self-correction ratio and optional correct words per minute from supplied running-record tallies.",
    "intro": "The running record calculator summarizes word-reading tallies collected under a scoring protocol you have already chosen. Enter passage words, uncorrected errors, self-corrections counted separately and optional elapsed seconds. It reports accuracy, error ratio and self-correction ratio, with correct words per minute when time is supplied. It does not listen to a reading, decide which behavior counts as an error or assign an instructional level. Use the original marked record to establish the counts, and retain comprehension observations separately. Numerical accuracy for one passage is not a complete assessment of a learner.",
    "formula": "Accuracy % = (words − uncorrected errors)/words × 100. Error ratio = 1:(words/errors) for positive errors. Self-correction ratio = 1:((errors + self-corrections)/self-corrections) for positive self-corrections. WCPM = correct words × 60/seconds.",
    "example": "For 100 words, 5 uncorrected errors, 2 separately counted self-corrections and 60 seconds: accuracy is 95%, error ratio is 1:20, self-correction ratio is 1:3.5 and optional rate is 95 correct words per minute.",
    "howTo": [
      "Score the original passage under your selected protocol and separate uncorrected errors from self-corrections.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Scoring must happen before the arithmetic",
        "text": "The observer determines the tallies from the marked record using the selected assessment procedure. Repetitions, omissions, substitutions and prompted responses can have protocol-specific handling. This worksheet cannot resolve those judgments from a word count. Use the same conventions across records intended for comparison and check ambiguous marks before entering totals. A calculated percentage is only as reproducible as the source tallies; keep the passage identifier and scoring notes with the result."
      },
      {
        "title": "Separate uncorrected errors from self-corrections",
        "text": "The error field is for the uncorrected errors used in the accuracy calculation. Self-corrections are entered separately and are not automatically deducted from those errors again. Entering every initial miscue as an error and then also entering the corrected subset can misstate accuracy. In this bounded worksheet, the separate counts cannot sum to more than passage words. If your assessment system uses a different event-count convention, reconcile its tallies before applying this particular formula."
      },
      {
        "title": "Ratios are one-in denominators rather than percentages",
        "text": "An error ratio of one to twenty means one recorded error for every twenty passage words on the supplied count basis. A self-correction ratio of one to three and a half uses errors plus self-corrections in the numerator of that denominator. Those ratios are not percentages and do not share the same denominator. Zero errors or zero self-corrections make their corresponding quotient undefined; the tool says so instead of inventing a ratio or assigning a skill label."
      },
      {
        "title": "Optional rate requires a matching measured duration",
        "text": "Enter the elapsed seconds for the same assessed passage. The tool calculates correct words per minute from passage words minus uncorrected errors and the supplied duration. Setting time to zero omits the rate instead of dividing by zero. A timed fluency protocol may count responses differently from a running record, so do not relabel this output as a standardized fluency score without checking the relevant procedure. Timing, familiarity and passage difficulty affect comparisons."
      },
      {
        "title": "Accuracy is not comprehension or diagnosis",
        "text": "The same word accuracy can occur with different comprehension, expression and reading strategies. The page does not assign a grade, reading age, independent level or clinical finding. Its purpose is to make arithmetic transparent after observation. Discuss the original record and other assessment evidence with the responsible educator. Avoid entering student names or identifying text into the calculator; aggregate counts are sufficient. Processing these counts in the browser does not replace your institution’s record-handling policies."
      }
    ],
    "faqs": [
      {
        "question": "Does the calculator score a reading automatically?",
        "answer": "No. An observer supplies already scored counts. The tool performs arithmetic only."
      },
      {
        "question": "Are self-corrections deducted as errors?",
        "answer": "Not in this formula. Enter uncorrected errors separately and avoid counting corrected events twice."
      },
      {
        "question": "What does 1:20 error ratio mean?",
        "answer": "It means passage words divided by errors equals twenty: one error per twenty words on the supplied record."
      },
      {
        "question": "Why can self-correction ratio be undefined?",
        "answer": "With zero self-corrections its denominator is zero, so a finite ratio cannot be calculated."
      },
      {
        "question": "Does 95% identify a reading level?",
        "answer": "This page does not assign levels. Use the assessment protocol and educator judgment alongside comprehension evidence."
      }
    ],
    "limitations": "Supplied scoring tallies only. No automated speech assessment, standardized level, comprehension evaluation, diagnosis or guarantee of comparability across protocols. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "running record calculator"
    ]
  },
  {
    "slug": "timecode-calculator",
    "title": "Timecode Calculator — Integer-Rate NDF Arithmetic",
    "shortTitle": "Timecode",
    "category": "Everyday",
    "description": "Add or subtract HH:MM:SS:FF durations at supported integer non-drop-frame rates, with signed frame counts and elapsed-second checks.",
    "intro": "This timecode calculator adds or subtracts two duration labels at a selected integer frame rate. Enter each value as HH:MM:SS:FF using colons, then choose 24, 25, 30, 50 or 60 frames per second. It converts both inputs to frame counts before performing arithmetic and formats the signed result back into timecode. The scope is intentionally explicit: fractional rates, drop-frame labels and media-file inspection are not implemented. Use the worksheet for matching integer-rate non-drop-frame durations rather than assuming every timecode label is a wall-clock timestamp or a interchangeable frame-rate format.",
    "formula": "Frame count = ((hours × 60 + minutes) × 60 + seconds) × fps + frame field. Add or subtract counts, then divide by integer fps for seconds and reconstruct HH:MM:SS:FF from the absolute count.",
    "example": "At 30 fps NDF, 00:00:12:15 represents 375 frames. Adding 00:00:00:15 gives 390 frames, or 00:00:13:00. Subtracting a larger count gives a signed negative duration rather than an automatic midnight rollover.",
    "howTo": [
      "Verify the project uses a supported exact integer NDF rate, then enter both durations as two-digit HH:MM:SS:FF labels.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "The final field is frames, not decimal seconds",
        "text": "At thirty fps, a frame field of fifteen represents one-half second. At twenty-four fps, the same field represents fifteen twenty-fourths of a second. Therefore a label cannot be interpreted correctly without its frame rate. The tool rejects a frame field equal to or greater than the selected rate. Use two digits in every input field, including leading zeros, so a malformed duration does not silently become a different frame count."
      },
      {
        "title": "Only matching integer-rate non-drop-frame durations are supported",
        "text": "The selector lists exact integer rates. It does not interpret 29.97, 23.976 or 59.94 as their rounded nominal labels, and it rejects semicolon drop-frame notation. Fractional-rate media has a distinction between nominal timecode labels and elapsed seconds that requires another model. Do not force such material into the thirty-fps option merely because its label looks similar. Check project and source settings in the editing system before using this calculation."
      },
      {
        "title": "Add frames before formatting the result",
        "text": "Frame-based arithmetic handles carries between the final field, seconds, minutes and hours consistently. Adding fifteen frames to a label already ending in fifteen at thirty fps creates one full second. A decimal calculator cannot achieve that by adding the visible colon-separated fields independently. The output frame count is an independent check for a duration sum. Keep the integer count when moving the result between systems that can directly accept frame offsets."
      },
      {
        "title": "Signed subtraction differs from midnight wrapping",
        "text": "Subtracting the second input from the first produces a negative duration when the second is larger. The page shows a minus sign and the absolute timecode magnitude. It does not assume the values are time-of-day stamps spanning midnight. Inputs are limited to hours zero through twenty-three, but an addition may legitimately display more than twenty-three output hours because duration sums do not wrap. Resolve chronological dates separately if your task concerns real recording timestamps."
      },
      {
        "title": "Confirm endpoint and edit conventions outside the tool",
        "text": "Some editing tasks count an inclusive final frame, while others calculate the difference between boundary positions. The worksheet adds or subtracts the supplied frame counts without inserting an extra endpoint frame. If a clip length differs by one frame, inspect the editor’s in/out convention before changing arithmetic. This page neither reads media headers nor verifies synchronization, audio sample alignment or a timecode track. A correctly formatted result can still be inappropriate for a mismatched project setting."
      }
    ],
    "faqs": [
      {
        "question": "Does this support drop-frame timecode?",
        "answer": "No. Only the listed exact integer-rate NDF options are supported. Semicolon labels and fractional rates need a separate model."
      },
      {
        "question": "Can FF equal the frame rate?",
        "answer": "No. Frame fields run from zero through fps minus one. At thirty fps the largest input frame field is 29."
      },
      {
        "question": "Does subtraction wrap across midnight?",
        "answer": "No. It returns a signed duration. Chronological date handling is outside the tool."
      },
      {
        "question": "Can a sum exceed 24 hours?",
        "answer": "Yes. The output is a duration, so addition does not reset after twenty-four hours."
      },
      {
        "question": "Does this inspect a video file?",
        "answer": "No. You supply the labels and verified frame rate. No media track is read or synchronized."
      }
    ],
    "limitations": "Exact integer-rate NDF durations only. No fractional or drop-frame conversion, midnight dates, media inspection, frame resampling, synchronization or inclusive-endpoint adjustment. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "timecode calculator"
    ]
  },
  {
    "slug": "cow-gestation-calculator",
    "title": "Cow Gestation Calculator — Cattle Calving Date Planner",
    "shortTitle": "Cow Gestation",
    "category": "Everyday",
    "description": "Plan a cattle calving date from a known service date and an adjustable whole-day interval, with the 283-day convention clearly disclosed.",
    "intro": "This cattle gestation calculator and cow gestation calculator share one service-date planning worksheet. Enter a known breeding or insemination date and a planning interval established for your herd or by your veterinarian. The default uses the familiar 283-day convention, while the day count remains editable because an individual animal’s calving date is not fixed by a universal average. The tool adds calendar days and reports a planning date. It does not confirm pregnancy, identify a conception event from a date range or determine when intervention is appropriate. Keep breeding records and professional herd guidance alongside the output.",
    "formula": "Planning calving date = supplied service date + supplied whole-day gestation interval. The calculation adds Gregorian calendar days in UTC to prevent local daylight-saving shifts.",
    "example": "A service date of 1 January 2026 with a supplied 283-day interval produces 11 October 2026. Selecting 280 days instead moves the planning date to 8 October 2026; neither date is a guaranteed individual outcome.",
    "howTo": [
      "Choose a documented service or insemination date and an independently established whole-day planning interval.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Use the actual service record",
        "text": "The input is a known service or insemination date. The start of a bull-exposure period is not necessarily the service that resulted in pregnancy, and a later observed service can create a different planning basis. Record the animal identifier in your own herd system rather than entering identifying records into this calculator. If the relevant date is uncertain, calculate plausible documented dates separately and discuss the interval with the responsible veterinarian instead of presenting one exact output as confirmed."
      },
      {
        "title": "The 283-day convention is adjustable",
        "text": "The default is a disclosed convention, not a claim that all breeds, animals or pregnancies last exactly that long. Research and herd records can show different average intervals. For example, a recent Oklahoma State summary distinguishes a study average from the commonly used convention. The worksheet therefore lets you supply a day count rather than hiding the assumption. Its supported interval range is an input bound for this planning tool, not a diagnosis of normality or an intervention threshold."
      },
      {
        "title": "Calendar days are counted directly",
        "text": "The calculation adds the entered whole number of days to the date using calendar arithmetic. It does not replace a month with thirty days or divide a year into average-length months. A February service can cross a leap day, which is counted when present. The original date is validated so impossible dates do not quietly roll into the following month. Compare the output with a calendar if you are transferring it into a herd diary or another application."
      },
      {
        "title": "A planning date is not a clinical assessment",
        "text": "An estimated date can help organize records and prepare routine herd workflows, but it cannot establish animal health or whether calving will occur on schedule. This page gives no labor-monitoring thresholds, induction advice, intervention timing or treatment steps. Use veterinarian-established procedures for observation and concerns. If a later professional examination establishes a different basis, update the underlying herd record and rerun the arithmetic rather than treating the initial worksheet as authoritative."
      },
      {
        "title": "Compare herd assumptions transparently",
        "text": "When a documented herd interval differs from the default, enter it explicitly and retain the basis with the result. Changing the interval by one day moves the output by one calendar day. This makes differences between planning conventions easy to audit without inventing a confidence range. Do not label the difference between two selected scenarios as a biological probability. Breed, calf and animal-specific factors require evidence beyond the two fields supplied here."
      }
    ],
    "faqs": [
      {
        "question": "Are cattle and cow queries separate tools?",
        "answer": "No. Their matching service-date planning intent is merged here into one canonical calculator."
      },
      {
        "question": "Is 283 days guaranteed?",
        "answer": "No. It is a familiar planning convention and can be replaced with an independently established whole-day interval."
      },
      {
        "question": "Does this diagnose pregnancy?",
        "answer": "No. The tool only adds days to a supplied date. Pregnancy confirmation needs appropriate professional assessment."
      },
      {
        "question": "Can I enter a bull-exposure start?",
        "answer": "Only if you clearly treat it as a scenario. It may not identify the actual service that resulted in pregnancy."
      },
      {
        "question": "Does the date include leap days?",
        "answer": "Yes. The calculation uses real Gregorian calendar days and validates the entered date."
      }
    ],
    "limitations": "Calendar planning only. No individual gestation guarantee, pregnancy confirmation, clinical classification, animal examination, labor prediction or treatment instructions. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "cattle gestation calculator",
      "cow gestation calculator"
    ]
  },
  {
    "slug": "rim-offset-calculator",
    "title": "Rim Offset Calculator — Inner and Outer Wheel Changes",
    "shortTitle": "Rim Offset",
    "category": "Vehicles",
    "description": "Compare nominal wheel width and signed offset to calculate inward and outward rim-edge movement in millimetres, without claiming vehicle fitment.",
    "intro": "The rim offset calculator compares two wheel specifications using their nominal widths and signed offsets. It reports how the outer edge moves relative to the current wheel and how the inner edge moves toward the suspension. Positive outward movement and positive inward encroachment are labeled separately so the signs remain useful. The tool does not compare tyres, inspect a vehicle or certify that a wheel fits. Use the geometry as a starting point for actual clearance measurements and verified wheel specifications, keeping mounting-face offset distinct from rim width and from tyre-section dimensions.",
    "formula": "Half-width change mm = (new width in − old width in) × 25.4/2. Inner movement toward suspension = half-width change + new offset − old offset. Outer outward movement = half-width change − new offset + old offset.",
    "example": "Changing from an 8 in wheel at +40 mm offset to a 9 in wheel at +35 mm gives a half-width increase of 12.7 mm. The nominal outer edge moves outward 17.7 mm, while the inner edge moves 7.7 mm toward the suspension.",
    "howTo": [
      "Read current and proposed wheel widths in inches and their signed manufacturer offsets in millimetres.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Width and offset describe different dimensions",
        "text": "Wheel width is entered in inches and converted to millimetres before the edge comparison. Offset is already in millimetres and is signed relative to the wheel centerline. A positive offset places the mounting face on the outward side of that centerline under the stated convention. Do not enter backspacing as offset without a verified conversion and rim-profile basis. The calculation compares nominal specification widths rather than measuring the full exterior flange dimensions of two different wheel designs."
      },
      {
        "title": "Read inner and outer signs separately",
        "text": "A positive outer movement means the proposed nominal outer edge extends farther outward. A negative outer movement means it retracts. A positive inner movement means the proposed inner edge approaches the suspension, reducing geometric space on that side. These are two different directions, so the same positive sign does not mean the same physical movement. The interface includes the convention in the labels; keep those labels when recording values instead of copying only unsigned magnitudes."
      },
      {
        "title": "A wider wheel changes both sides",
        "text": "With offset held constant, an increased width adds half its converted width change to both edge distances. With width held constant, a lower offset moves the outer edge outward and the inner edge away from the suspension by equal amounts. When width and offset both change, the two effects combine. These limiting cases provide quick checks for the formula and make it easier to identify a sign mistake before interpreting a proposed setup."
      },
      {
        "title": "Nominal rim geometry is not tyre clearance",
        "text": "The tyre can extend beyond the wheel edges, and its mounted shape depends on the tyre specification and wheel combination. Suspension motion, steering lock, brake hardware, wheel spokes, hub dimensions and body clearances also matter. A nominal edge comparison cannot validate those conditions. Obtain actual measurements and vehicle or component requirements before selecting equipment. The related tyre-size calculator answers a different dimensional question and should not be treated as a clearance certificate either."
      },
      {
        "title": "Use one mounting-reference basis for both wheels",
        "text": "The comparison assumes the same hub mounting plane and no unmodeled spacer, adapter or mounting change. If those components are present, the effective mounting basis must be established separately rather than silently added to the wheel offset. A simple numerical difference also does not assess load rating, fastener engagement, bolt pattern or legal suitability. Retain the complete original and proposed specifications and compare the result with an appropriate physical inspection."
      }
    ],
    "faqs": [
      {
        "question": "Does positive outer movement mean more outward extension?",
        "answer": "Yes, under the labeled convention. Negative values mean the nominal outer edge retracts."
      },
      {
        "question": "Does positive inner movement increase clearance?",
        "answer": "No. It means movement toward the suspension, which reduces geometric space on that side."
      },
      {
        "question": "Are tyre widths included?",
        "answer": "No. The inputs are wheel width and offset. Actual tyre shape and clearances need separate verification."
      },
      {
        "question": "Can backspacing be entered as offset?",
        "answer": "Not directly. Establish the correct signed offset from a verified specification first."
      },
      {
        "question": "Does this prove a wheel fits?",
        "answer": "No. Brake, hub, tyre, steering, suspension, load and mounting requirements are not validated."
      }
    ],
    "limitations": "Nominal wheel-specification geometry only. No tyre-profile modeling, exterior flange correction, spacer handling, brake clearance, load rating or vehicle fitment approval. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "rim offset calculator"
    ]
  },
  {
    "slug": "correlation-coefficient-calculator",
    "title": "Correlation Coefficient Calculator — Paired Pearson r",
    "shortTitle": "Correlation Coefficient",
    "category": "Education",
    "description": "Calculate Pearson r from matched X and Y lists, with pair-count and mean checks, explicit constant-list errors and no causal or significance claims.",
    "intro": "This correlation coefficient calculator answers the worksheet request to use a calculator to find the r-value of these data when the data are paired numerical observations. Paste the X values in one list and the corresponding Y values in the same order in the second list. It calculates Pearson r, the pair count, both means and squared correlation. Lists must have equal length and both must vary. The page does not supply missing worksheet data, compute a p-value or establish causation. Its purpose is to make the paired arithmetic reproducible without guessing the relationship or silently rearranging observations.",
    "formula": "r = Σ((x − mean x)(y − mean y)) / sqrt(Σ(x − mean x)² × Σ(y − mean y)²). The implementation accumulates centered sums incrementally rather than subtracting large raw squared totals.",
    "example": "For X values 1, 2, 3, 4 and matching Y values 2, 4, 6, 8, Pearson r is +1. Reversing Y to 8, 6, 4, 2 gives −1. A constant list such as 5, 5, 5, 5 has zero variation and cannot produce a defined r.",
    "howTo": [
      "Prepare matched X and Y lists in the original paired order, without names, labels or missing unmatched values.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Pair order is part of the data",
        "text": "The first X belongs to the first Y, the second X to the second Y, and so on. Independently sorting one list changes those relationships and can invent a strong correlation. Keep the original row order from the source table. Spaces, commas and semicolons are accepted as separators, but labels and units should not be pasted as observations. Missing observations require deliberate handling of both members of their pair; deleting a value from only one list shifts later pairings."
      },
      {
        "title": "Read the sign as direction of linear association",
        "text": "A positive r indicates that higher X values tend to align with higher Y values within the supplied pairs. A negative r indicates the opposite direction. The magnitude describes linear association under this measure, not the slope in physical units. Rescaling a variable by a positive factor preserves r, while reversing its sign reverses r. A low value does not rule out a curved relationship or a meaningful grouping that a single linear summary cannot describe."
      },
      {
        "title": "Constant lists have an undefined coefficient",
        "text": "If every X or every Y is identical, its centered sum of squares is zero. The formula therefore has a zero denominator. The tool rejects that input instead of presenting zero correlation, because zero would be a valid coefficient for other non-constant data and would convey a different conclusion. At least two matched pairs are required by the arithmetic, but a coefficient from a tiny sample should not be treated as robust evidence about a wider population."
      },
      {
        "title": "Squared correlation is a labeled check",
        "text": "The page displays r squared as the square of the calculated coefficient. Squaring removes the sign, so that number does not preserve whether the relationship is increasing or decreasing. In a suitable simple linear regression with an intercept it has a familiar model interpretation, but this worksheet does not fit a general prediction model or justify extrapolation. Keep r and the original paired data alongside the squared value rather than using the square as a standalone strength or causality claim."
      },
      {
        "title": "Investigate data quality and unusual observations",
        "text": "A single extreme pair can strongly affect Pearson r, and recording mistakes can create or remove apparent association. Inspect the original table and a suitable scatter plot before drawing conclusions. The calculator does not remove outliers automatically, impute values, rank observations or run significance tests. It supports up to one thousand matched pairs within explicit text and magnitude bounds. Sensitive identifiers are unnecessary: enter numerical measurements only and apply your own record-handling requirements when saving results."
      }
    ],
    "faqs": [
      {
        "question": "How do I use a calculator to find the r-value of these data?",
        "answer": "Enter the actual paired X and Y observations in matching order, then submit. A question without its data cannot produce a numerical coefficient."
      },
      {
        "question": "Does r prove causation?",
        "answer": "No. It describes linear association in the supplied pairs and does not establish a causal mechanism."
      },
      {
        "question": "Why does a constant list fail?",
        "answer": "Zero variation makes the denominator zero, so Pearson r is undefined rather than zero."
      },
      {
        "question": "Can I sort the lists?",
        "answer": "Do not sort them independently. Preserve the original pairing, or sort complete paired rows together."
      },
      {
        "question": "Is a p-value included?",
        "answer": "No. The outputs are descriptive Pearson r, r squared, means and pair count, without significance or confidence claims."
      }
    ],
    "limitations": "Pearson linear association only, with 2–1,000 matched finite pairs. No missing-value imputation, ranking, outlier removal, p-value, confidence interval or causal inference. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "use a calculator to find the r-value of these data"
    ]
  },
  {
    "slug": "speed-distance-time-calculator",
    "title": "Speed Calculator — Distance, Time, mph and ft/s",
    "shortTitle": "Speed",
    "category": "Education",
    "description": "Solve average speed, distance or elapsed time using kilometres and hours, with mph, metres per second and feet per second conversion checks.",
    "intro": "This speed calculator merges the matching speed distance time calculator and converter queries into one worksheet with three real modes. Find speed from distance and elapsed time, distance from a supplied average speed and time, or time from distance and supplied average speed. The working inputs use kilometres, hours and kilometres per hour, while outputs include mph, metres per second and feet per second. It does not find a route or predict traffic. Average speed over an interval is different from an instantaneous speed reading, and the result is only meaningful when distance and time describe the same interval.",
    "formula": "Speed km/h = distance km / time h. Distance km = speed km/h × time h. Time h = distance km / speed km/h. mph = km/h ÷ 1.609344; m/s = km/h ÷ 3.6; ft/s = km/h ÷ 1.09728.",
    "example": "For 150 km over 2 hours, average speed is 75 km/h, approximately 46.602839 mph, 20.833333 m/s and 68.350831 ft/s. The inverse time mode at 150 km and 75 km/h returns 2 hours.",
    "howTo": [
      "Select the unknown quantity: speed, distance or elapsed time. Check which two numerical fields are active for that mode.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Choose the unknown before entering the active measurements",
        "text": "Find speed uses distance and elapsed hours. Find distance uses elapsed hours and supplied speed. Find time uses distance and supplied speed. The inactive value is not used to overwrite the relationship, even if it remains visible in its field. Changing modes does not automatically submit a new answer: press Calculate after reviewing the active inputs. The primary result label identifies which quantity has actually been solved, avoiding a hidden switch between an observed average and a modeled trip."
      },
      {
        "title": "Elapsed time and moving time are different denominators",
        "text": "A journey can include stops. Dividing its total distance by total elapsed time gives overall average speed, while dividing by moving time gives another measurement. Both can be valid when labeled, but comparing them directly creates a false discrepancy. This worksheet applies the time you supply and does not remove breaks, traffic or stationary intervals. Record which denominator you used. For a planning scenario, account for additional delays separately rather than presenting pure distance-over-speed time as a guaranteed arrival duration."
      },
      {
        "title": "Convert clock notation to decimal hours",
        "text": "The hours field accepts a number, not an HH:MM timestamp. One hour and thirty minutes is 1.5 hours, and one hour and fifteen minutes is 1.25 hours. Entering 1.30 means one and three-tenths hours, or seventy-eight minutes. The elapsed-minutes output provides a check. The related decimal-time converter handles clock-to-decimal intent; this page keeps its inputs on a consistent hour basis so all three modes use the same identity."
      },
      {
        "title": "mph and feet per second are unit conversions",
        "text": "The mph calculator output and feet per second calculator output express the same speed using different units. They do not infer another physical measurement or a different journey. Kilometres per hour divided by 3.6 gives metres per second, while the stated length factors produce the imperial outputs. For a value entered from miles, convert the distance to kilometres before using the working fields. Keep units with copied numbers to prevent a speed from being mistaken for a distance or time."
      },
      {
        "title": "Average speed does not determine every motion detail",
        "text": "Two journeys can have the same distance and elapsed time while having very different speed traces. The quotient cannot identify peak speed, acceleration, route geometry, fuel use or stopping distance. The time calculator from speed and distance is a constant-average scenario, not navigation. Zero distance is supported when the denominator is valid, while zero time for speed and zero speed for time are rejected. Those mathematical boundaries prevent an impossible quotient from looking like a real travel result."
      }
    ],
    "faqs": [
      {
        "question": "How to calculate speed?",
        "answer": "Divide matching distance by elapsed time in consistent units. This page uses kilometres and hours for the working calculation."
      },
      {
        "question": "Can it calculate distance from speed and time?",
        "answer": "Yes. Select Find distance and supply km/h plus hours; distance is their product."
      },
      {
        "question": "Is time calculator distance speed the same page?",
        "answer": "Yes. Find time solves that matching intent from distance and positive supplied average speed."
      },
      {
        "question": "Are mph and feet per second supported?",
        "answer": "Yes, as clearly labeled output conversions from the solved or supplied km/h value."
      },
      {
        "question": "Does modeled time include traffic?",
        "answer": "No. Stops, route choice, traffic and arrival timestamps are not inferred from the simple average-speed identity."
      }
    ],
    "limitations": "Supplied average-speed arithmetic only. No navigation, route length, traffic, peak speed, stopping distance or guaranteed arrival time. Inactive fields are ignored according to selected mode. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "speed calculator",
      "speed distance time calculator",
      "how to calculate speed",
      "time distance speed converter",
      "convert speed and distance to time",
      "mph calculator",
      "time calculator from speed and distance",
      "feet per second calculator",
      "time calculator distance speed",
      "time calculator speed distance",
      "time calculator for speed and distance",
      "calculate speed",
      "distance calculator from speed and time",
      "convert distance and time to speed",
      "speed and distance time calculator",
      "how to calculate speed time distance",
      "speed distance and time calculator",
      "how do i calculate speed time and distance",
      "time calculator with speed and distance",
      "speed distance time converter"
    ]
  },
  {
    "slug": "tv-mounting-height-calculator",
    "title": "TV Mounting Height Calculator — Measured Screen Geometry",
    "shortTitle": "TV Mounting Height",
    "category": "Home",
    "description": "Plan screen center, edges and a supplied bracket reference height from seated eye height and actual screen height, without universal mounting claims.",
    "intro": "This TV mounting height calculator maps measured screen geometry to a height above the finished floor. Enter seated eye height, actual screen height, a vertical screen-center offset you choose and the verified bracket-reference offset for the mount. It reports screen center, top, bottom and the supplied bracket reference. The default illustrates a center aligned with measured seated eyes; it does not claim one universal height or establish structural mounting safety. Screen center and bracket drilling reference are different locations, and the latter must come from the actual television and mount documentation.",
    "formula": "Screen center = measured seated eye height + supplied center offset. Bottom = center − screen height/2. Top = center + screen height/2. Bracket reference = center + supplied bracket offset.",
    "example": "For seated eye height 105 cm, screen height 70 cm, zero center offset and a bracket reference 10 cm above screen center: center is 105 cm, bottom 70 cm, top 140 cm and bracket reference 115 cm.",
    "howTo": [
      "Measure seated eye height and actual vertical screen height, then verify the signed bracket-reference offset from the mount drawing.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Measure eyes in the actual seated position",
        "text": "Seat height, cushion compression, posture and viewer height change the eye reference. Measure from the finished floor while using the intended viewing seat. A generic standing measurement or an average quoted online does not describe that arrangement. If several seats or viewers matter, calculate their documented scenarios separately and evaluate the compromise yourself. The tool applies your measurement without assessing comfort, neck posture, viewing angles or personal needs; it supplies geometry rather than an ergonomic diagnosis."
      },
      {
        "title": "Use screen height instead of diagonal size",
        "text": "A television marketed by a diagonal does not have that same vertical height. Enter the actual screen height from a reliable dimension drawing or measurement. A cabinet can include borders, feet or other parts not represented by the picture area, so keep the chosen basis explicit. The calculator does not infer a standard aspect ratio or substitute a screen-size chart. If furniture clearance concerns the exterior cabinet, repeat the geometry with an appropriately verified overall height and label that comparison separately."
      },
      {
        "title": "The center offset is a deliberate scenario",
        "text": "Zero places the screen center at the supplied eye height. A positive center offset raises it, and a negative offset lowers it. This field does not choose an acceptable viewing angle or justify placement above a fireplace. Room layout, viewing distance, reflections and actual posture require independent assessment. Compare the reported top and bottom edges with furniture and obstructions, while keeping those physical clearances separate from the arithmetic. Reject a scenario that places the modeled screen below the floor."
      },
      {
        "title": "Bracket reference needs a verified mounting drawing",
        "text": "The mount’s wall-reference mark need not sit at the television’s center. Use the signed vertical offset established from the actual bracket and television arrangement; a positive value places that reference above screen center. This worksheet does not calculate hole positions, VESA attachment geometry or an anchor pattern. Before marking or drilling, reconcile the proposed reference with the manufacturer’s dimensional instructions. A numerical height is not proof that the wall, fixings or mounting hardware can carry the television."
      },
      {
        "title": "Check the full physical installation separately",
        "text": "The reported dimensions are measured from one finished-floor reference. A sloping floor, tall console, cable route, power outlet or heat source can change practical placement constraints. The tool has no wall-material, load, bracket-rating or concealed-services inputs. Follow the actual product installation documentation and obtain appropriate installation help where required. Record the final measured center and edges after positioning; those observations can reveal a sign error or a cabinet-versus-screen mismatch before the result is treated as final."
      }
    ],
    "faqs": [
      {
        "question": "Is eye-level alignment always best?",
        "answer": "The default illustrates measured alignment only. This calculator does not prescribe a universal height or evaluate individual comfort."
      },
      {
        "question": "Can I enter TV diagonal inches as height?",
        "answer": "No. Supply actual vertical screen height in centimetres, using a reliable measurement or dimension drawing."
      },
      {
        "question": "What does a positive bracket offset mean?",
        "answer": "The selected wall-bracket reference lies above the screen center by that many centimetres."
      },
      {
        "question": "Are drilling holes calculated?",
        "answer": "No. The actual mount documentation must establish hole positions, hardware and reference marks."
      },
      {
        "question": "Does this check wall strength?",
        "answer": "No. Structural capacity, anchors, concealed services and installation suitability are outside the geometry."
      }
    ],
    "limitations": "Measured vertical geometry only. No universal comfort height, viewing-angle assessment, VESA pattern, fixing selection, wall capacity or concealed-service inspection. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "tv mounting height calculator"
    ]
  },
  {
    "slug": "wire-length-calculator",
    "title": "Wire Length Calculator — Routes, Conductors and Slack",
    "shortTitle": "Wire Length",
    "category": "Home",
    "description": "Calculate cable-route and individual-conductor lengths from measured paths, conductor count, supplied slack and a separate ordering allowance.",
    "intro": "This wire length calculator separates a cable-jacket route from the total length of individual conductors following that route. Enter one measured route, the number of identical routes, conductors per route, extra termination or slack per conductor per route and an explicit ordering allowance. The result is a quantity takeoff, not a wire-size or voltage-drop calculation. A three-core cable bought by jacket length must not be ordered as three times that length merely because it contains three conductors. The two outputs remain separately labeled so the purchasing basis can match the actual product.",
    "formula": "Length per conductor per route = measured route + supplied extra length. Jacket-route takeoff = that length × routes. Individual-conductor takeoff = jacket-route takeoff × conductors. Planned individual length = takeoff × (1 + allowance/100).",
    "example": "A 20 m route with 2 identical runs, 3 conductors per run, 1 m extra per conductor per route and 10% allowance gives 42 m jacket-route takeoff, 126 m individual-conductor takeoff and 138.6 m planned individual length.",
    "howTo": [
      "Measure the actual one-way route and identify identical routes, conductors and your extra termination length per conductor per route.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Measure the actual path rather than endpoint distance",
        "text": "A route can rise, turn, pass through designated pathways and terminate away from the direct line between endpoints. Measure the intended path from the actual layout rather than simply using room length. This worksheet has no automatic routing or bend allowance. If different runs have different lengths, calculate them separately instead of pretending they are identical. Keep a route schedule so a later layout change can be reconciled with the original quantity and conductor totals."
      },
      {
        "title": "Routes and conductors are separate counts",
        "text": "Routes means how many identical paths are being repeated. Conductors means how many individual wires follow each of those paths. A multi-core cable often uses jacket length as its purchasing quantity, whereas separate single conductors use their summed length. The calculator reports both before the percentage allowance, making the distinction visible. Do not multiply a supplier’s already aggregated cable length by the conductor count again. Check product packaging and the bill-of-materials basis before ordering."
      },
      {
        "title": "Extra length applies to each conductor in each route",
        "text": "The extra field is the combined termination and slack allowance you supply for one conductor on one route. It is added to the measured path before the route and conductor multiplications. It does not prescribe how much slack is required or where it belongs. If your route measurement already includes termination tails, do not enter them again. A fixed extra length differs from a percentage ordering buffer, so keep the reasons for both adjustments separate in the takeoff record."
      },
      {
        "title": "Percentage allowance changes purchasing quantity",
        "text": "The explicit percentage applies to the total individual-conductor takeoff. Zero lets you inspect the raw route and conductor arithmetic. Ten percent multiplies the takeoff by 1.10, without rounding to a reel size or automatically adding damaged lengths. Suppliers can sell different spool lengths or minimum increments, which require another purchasing step. The page deliberately leaves those increments out rather than implying that the displayed continuous length is an available sealed package."
      },
      {
        "title": "Length does not establish electrical suitability",
        "text": "Longer paths can matter to voltage drop and circuit behavior, but this calculator does not select conductor material, cross-section, insulation, protection or installation method. It gives no current rating or code approval. Use an appropriate separately verified electrical design and actual product instructions before installation. The related wire-size tool answers a different intent and should not be confused with a quantity takeoff. A correct length schedule cannot substitute for inspection of the circuit or its operating conditions."
      }
    ],
    "faqs": [
      {
        "question": "Is wire length the same as cable length?",
        "answer": "Not always. Jacket length follows each cable route, while individual-conductor length sums the wires inside or along those routes."
      },
      {
        "question": "Does slack apply once overall?",
        "answer": "No. Here it is supplied per conductor per route, and is added before the route and conductor multiplications."
      },
      {
        "question": "Can different route lengths be combined?",
        "answer": "Calculate them separately and add matching quantity outputs. The identical-route count assumes equal path lengths."
      },
      {
        "question": "Does this choose wire gauge?",
        "answer": "No. Ampacity, voltage drop, insulation, circuit protection and code requirements need a separate design."
      },
      {
        "question": "Are reel sizes rounded?",
        "answer": "No. The output is continuous length. Confirm the actual purchasing increments with your supplier."
      }
    ],
    "limitations": "Length takeoff only. No path optimization, wire-size selection, voltage-drop calculation, circuit design, spool-size rounding or electrical installation approval. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "wire length calculator"
    ]
  },
  {
    "slug": "gear-ratio-speed-calculator",
    "title": "Gear Ratio Calculator — Road Speed and Engine RPM",
    "shortTitle": "Gear Ratio",
    "category": "Vehicles",
    "description": "Calculate road speed from engine RPM or RPM from speed using supplied transmission ratio, final drive and rolling tyre diameter, without slip assumptions.",
    "intro": "This gear ratio calculator merges gear ratio speed calculator intent with an independent alternative for the tremec gear ratio calculator query. It solves road speed from engine rpm or engine rpm from road speed using your transmission ratio, final-drive ratio and effective rolling tyre diameter. The page does not load a gearbox preset, claim TREMEC affiliation or predict a safe top speed. It assumes rigid gearing and no unmodeled slip. Use actual ratio specifications and a suitable rolling-diameter basis, then compare the calculated relationship with measurements under the same operating conditions.",
    "formula": "mph = rpm × π × effective tyre diameter in × 60 / (transmission ratio × final-drive ratio × 63,360). The inverse divides supplied mph by the same speed-per-rpm factor. Wheel rpm = engine rpm / combined reduction.",
    "example": "At 3,000 rpm, a 1.0 transmission ratio, 3.0 final drive and 28 in effective diameter, modeled road speed is approximately 83.299805 mph. Using that speed in the inverse mode returns approximately 3,000 rpm.",
    "howTo": [
      "Select speed-from-RPM or RPM-from-speed, then verify the engaged transmission ratio, final drive and effective rolling diameter.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Ratios must describe the engaged driveline",
        "text": "The transmission ratio should belong to the selected gear, and the final-drive ratio should match the relevant axle or driveline specification. Multiplying the two gives the modeled overall reduction between engine and wheel. The worksheet does not identify a gearbox from a vehicle name or choose a ratio preset. An additional reduction stage would need a separately established equivalent basis. Retain the actual source specifications when comparing two proposed combinations so their ratios are not accidentally mixed."
      },
      {
        "title": "Effective rolling diameter is the relevant circumference basis",
        "text": "The equation uses the circumference implied by the diameter you enter. A nominal tyre-size geometry may differ from measured rolling behavior under load. The tool does not infer pressure, wear, deflection or a manufacturer revolutions-per-distance value. Use an effective diameter appropriate to your comparison and label the basis. The related tyre-size page can explain nominal dimensions, but it does not by itself verify an effective loaded rolling circumference for this speed calculation."
      },
      {
        "title": "The two modes solve the same identity",
        "text": "Speed from RPM uses entered engine rpm and ignores the road-speed field. RPM from speed uses entered mph and ignores the rpm field. Ratios and diameter remain active in both modes. After changing a mode or value, press Calculate to submit the new scenario. Inverse calculations using matching unrounded values should reconcile. A rounded displayed mph value can return a slightly different rpm, which is ordinary rounding rather than proof that the relationship changed."
      },
      {
        "title": "Slip and vehicle capability are separate questions",
        "text": "Tyre slip, clutch slip or torque-converter slip breaks the rigid relationship assumed here. The worksheet has no correction for those effects and does not establish whether an engine can reach the modeled rpm against aerodynamic or rolling resistance. A calculated speed is a kinematic relationship, not a top-speed forecast or permission to operate there. Redline, tyre rating, component limits and road conditions require independent verification and are not determined by the ratio arithmetic."
      },
      {
        "title": "Understand how changes affect the output",
        "text": "At unchanged rpm and diameter, doubling the combined reduction halves modeled road speed. At unchanged reduction and rpm, increasing effective diameter proportionally increases modeled speed. In the inverse mode, a higher reduction needs proportionally higher engine rpm at a fixed road speed. Those scaling checks help identify a misplaced decimal or inverted ratio. They do not recommend a gearing choice, because acceleration, load, fuel use and mechanical suitability are outside this worksheet."
      }
    ],
    "faqs": [
      {
        "question": "Is this the TREMEC tool?",
        "answer": "No. SolvePilot is independent and uses manually supplied specifications. The branded query is addressed without affiliation or presets."
      },
      {
        "question": "Can it solve rpm from speed?",
        "answer": "Yes. Choose the inverse mode and supply mph, ratios and effective diameter."
      },
      {
        "question": "Does it include converter slip?",
        "answer": "No. The relationship assumes rigid gearing with no unmodeled drivetrain or tyre slip."
      },
      {
        "question": "Is nominal tyre diameter always sufficient?",
        "answer": "It is a scenario basis, but actual rolling behavior can differ. Use an independently suitable effective diameter."
      },
      {
        "question": "Does calculated speed mean achievable top speed?",
        "answer": "No. Power, drag, limits and operating conditions are not modeled."
      }
    ],
    "limitations": "Independent rigid-gearing arithmetic with supplied effective diameter. No presets, affiliation, slip, redline, safe-speed assessment, acceleration simulation or top-speed prediction. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "tremec gear ratio calculator",
      "gear ratio speed calculator",
      "gear ratio calculator"
    ]
  },
  {
    "slug": "christmas-tree-light-calculator",
    "title": "Christmas Tree Light Calculator — Supplied Density and Strands",
    "shortTitle": "Christmas Tree Light",
    "category": "Everyday",
    "description": "Estimate additional Christmas light strands from tree height, your decorative density, product light count and existing lights, without wiring assumptions.",
    "intro": "This Christmas tree light calculator is a purchasing worksheet based on a decorative density you choose. Enter tree height, your chosen lights per foot of height, the number of lights on a product strand and existing usable lights. It calculates a scenario target, the additional light count and whole strands to buy. The height-based density is your aesthetic assumption, not a universal standard for every tree shape or desired appearance. The page does not calculate electrical loading, permissible strand connections or actual cable coverage. Those requirements come from the specific product and installation instructions.",
    "formula": "Target lights = ceiling(tree height ft × supplied lights per ft). Additional lights = max(0, target − existing usable lights). Additional strands = ceiling(additional lights / lights per strand).",
    "example": "A 6 ft tree with a supplied density of 100 lights per foot gives a 600-light scenario target. If 200 usable lights already exist and each chosen strand has 100 lights, the additional estimate is 4 strands.",
    "howTo": [
      "Measure tree height and choose your aesthetic light density, then read the actual strand light count and existing usable lights.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Density is a preference supplied by you",
        "text": "The lights-per-foot input expresses your chosen appearance using tree height as a simple scaling basis. A narrow tree and a wide tree of the same height do not have identical branch surface or wrapping length. This model does not inspect shape, branching or existing ornaments. If you already like a documented arrangement on a similar tree, its light count can inform a comparison, but the calculator does not declare that density necessary or ideal for all trees."
      },
      {
        "title": "Count existing usable lights on the same basis",
        "text": "The existing-light field reduces the scenario target before strand rounding. Include only lights you intend to use and whose product condition and use are independently suitable. A nominal box count does not confirm that all lights function, and the calculator cannot inspect damage or compatibility. If existing lights exceed the target, the additional count is zero rather than negative. This means no further purchase is needed under the chosen density model, not that the current electrical arrangement has been approved."
      },
      {
        "title": "Whole strands create a purchasing surplus",
        "text": "Retail strands contain a stated number of lights. Dividing a shortfall by that count can produce a fraction, so the worksheet rounds upward to whole strands. For a need of two hundred fifty lights using hundred-light strands, three strands provide three hundred additional lights. The available-lights output shows the resulting total. Do not cut or modify a strand just because its full count exceeds the aesthetic target; follow the specific product instructions for installation and handling."
      },
      {
        "title": "Light count is different from lit length",
        "text": "Two products can contain the same number of bulbs with different spacing, lead length and wire routing. The output therefore cannot determine whether a strand will cover the intended path around or within the branches. Use the actual product’s lit length and a measured layout when coverage matters. The model also does not distinguish bulb brightness, color, pattern or viewing distance. A count-based comparison is one shopping input rather than a complete visual layout or cable-length estimate."
      },
      {
        "title": "Verify electrical limits with the actual products",
        "text": "The number of strands required aesthetically does not determine how many may be connected together. Product ratings, marked indoor or outdoor suitability, power supply and installation instructions govern electrical use. The calculator contains no wattage or circuit-capacity field and supplies no connection limit. Check the product documentation independently and inspect the actual lights before use. The related watt-hour tool can calculate supplied power over time, but energy arithmetic also does not validate electrical connection or product condition."
      }
    ],
    "faqs": [
      {
        "question": "Is 100 lights per foot required?",
        "answer": "No. It is only an example of a supplied decorative density. Shape and preferred appearance can differ."
      },
      {
        "question": "Does existing light count reduce the order?",
        "answer": "Yes. Existing usable lights are deducted from the scenario target before whole-strand rounding."
      },
      {
        "question": "Can it estimate cable wrapping length?",
        "answer": "No. Bulb spacing and actual branch routing require a separate measured layout."
      },
      {
        "question": "Does strand count say how many can be connected?",
        "answer": "No. Follow the specific product’s ratings and connection instructions; this page has no electrical approval model."
      },
      {
        "question": "Why are more lights available than the target?",
        "answer": "Whole-strand purchasing can exceed the remaining light shortfall after rounding upward."
      }
    ],
    "limitations": "Supplied aesthetic-density worksheet only. No universal light density, branch-area model, cable-coverage guarantee, permitted connection count, wattage or electrical suitability assessment. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "christmas tree light calculator"
    ]
  },
  {
    "slug": "ops-calculator",
    "title": "OPS Calculator — On-Base Plus Slugging from Counts",
    "shortTitle": "OPS",
    "category": "Everyday",
    "description": "Calculate unadjusted baseball OPS from official at-bats, hits, walks, hit-by-pitch, sacrifice flies and extra-base hits, with component checks.",
    "intro": "This OPS calculator derives unadjusted on-base plus slugging from supplied baseball counting statistics. Enter official at-bats, hits, walks, hit-by-pitch, sacrifice flies, doubles, triples and home runs from one consistent record. It calculates on-base percentage and slugging separately, then adds them. It also shows total bases and inferred singles so you can reconcile the source counts. The page does not retrieve player data, adjust for parks or leagues, or calculate OPS+. Use official scoring totals rather than substituting all plate appearances for at-bats, and keep decimal rate notation distinct from percent notation.",
    "formula": "OBP = (H + BB + HBP)/(AB + BB + HBP + SF). Total bases = H + 2B + 2×3B + 3×HR. SLG = total bases/AB. OPS = OBP + SLG. Singles = H − 2B − 3B − HR.",
    "example": "For AB 100, H 30, BB 10, HBP 2, SF 3, doubles 5, triples 1 and HR 4: OBP is 42/115 ≈ 0.36521739. Total bases are 49, SLG is 0.49 and OPS is approximately 0.85521739.",
    "howTo": [
      "Collect official at-bats and matching hit, walk, HBP, sacrifice-fly and extra-base-hit counts from one reporting interval.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Official at-bats differ from plate appearances",
        "text": "Walks and hit-by-pitch appear separately in the on-base formula and are not simply added to official at-bats for the slugging denominator. Sacrifice flies enter the listed OBP denominator. Use the scoring record’s actual categories rather than reconstructing them from an unrelated total. This calculator applies the displayed basic formula and does not resolve every official scoring judgment or unusual event classification. If a published player rate differs, first reconcile its component counts and reporting period."
      },
      {
        "title": "Extra-base hits are subsets of all hits",
        "text": "Doubles, triples and home runs are included in the hit total. The calculator subtracts them to infer singles and rejects a combined extra-base count greater than total hits. In the total-base expression, each hit contributes one base initially, doubles add one more, triples add two and home runs add three. Entering singles in the all-hits field loses that accounting. Check that inferred singles plus the three extra-base categories equals the original hit count."
      },
      {
        "title": "Keep decimal OBP and SLG notation visible",
        "text": "The interface reports OBP and slugging as decimals, following the rate notation commonly used for these statistics. An OBP of 0.365 is not entered or read as 36.5 in the sum. Slugging can exceed one because total bases per at-bat can exceed one, and OPS is not a probability bounded at one. The tool labels the combined measure and leaves both components visible to discourage interpreting the sum as a percentage of successful plate appearances."
      },
      {
        "title": "Add compatible counts before calculating an overall rate",
        "text": "To combine periods, add each underlying counting category across matching records and then calculate components from those totals. Averaging two displayed OPS values can be misleading because their denominators and opportunities differ. Even averaging OBP and SLG separately without weights can lose the correct count basis. The worksheet accepts one aggregate record, so establish a consistent season, team or interval before submission. Avoid mixing regular-season counts with a postseason component unless that combined scope is deliberate."
      },
      {
        "title": "OPS and OPS+ are different outputs",
        "text": "This page returns unadjusted OBP plus slugging. It has no league average, park factor or era adjustment and therefore cannot calculate OPS+. It also does not forecast future hitting, assign a scouting grade or measure all offensive contributions. A rounded display can differ from a published figure that uses another rounding rule or updated counts. Retain unrounded component values for reconciliation, and compare the source categories before attributing a discrepancy to the player or to the formula."
      }
    ],
    "faqs": [
      {
        "question": "Does OPS equal OBP plus SLG?",
        "answer": "Yes. This page calculates both components from supplied counts and then adds them."
      },
      {
        "question": "Are doubles included in hits?",
        "answer": "Yes. Hits include singles, doubles, triples and home runs. Extra-base categories must not exceed total hits."
      },
      {
        "question": "Is OPS a percentage limited to 100%?",
        "answer": "No. It adds two decimal rate measures, and slugging is total bases per at-bat rather than a probability."
      },
      {
        "question": "Does this calculate OPS+?",
        "answer": "No. League and park adjustments are absent. Unadjusted OPS and OPS+ are different statistics."
      },
      {
        "question": "Can I average two OPS values?",
        "answer": "Combine compatible underlying counts and recalculate instead of using an unweighted mean of displayed rates."
      }
    ],
    "limitations": "Supplied basic counting-statistic arithmetic only. No live player data, scoring adjudication, OPS+, league or park adjustment, projection or player-rating guarantee. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "ops calculator"
    ]
  },
  {
    "slug": "binomial-distribution-calculator",
    "title": "Binomial Distribution Calculator — Exact and Tail Probabilities",
    "shortTitle": "Binomial Distribution",
    "category": "Education",
    "description": "Calculate exact, at-most and at-least binomial probabilities for up to 500 independent trials, with decimal success probability and endpoint handling.",
    "intro": "This binomial distribution calculator evaluates success counts under a model of independent trials with the same supplied success probability. Enter a whole trial count, a decimal probability from zero to one and a whole success count of interest. It reports the probability of exactly that count, at most that count and at least that count, plus the model mean and standard deviation. The probability assumption comes from you; the tool does not infer it from business results or observed data. Sampling without replacement or trials with changing probabilities need a different model rather than an undisclosed adjustment here.",
    "formula": "P(X=k) = C(n,k)p^k(1−p)^(n−k). At-most k sums counts 0 through k; at-least k sums k through n. Mean = np. Standard deviation = sqrt(np(1−p)).",
    "example": "For 10 independent trials, p = 0.5 and k = 5: exactly five has probability 252/1,024 = 24.609375%. At most five and at least five each have probability 62.3046875%. Expected successes are 5.",
    "howTo": [
      "Establish independent equal-probability trials and choose whole n, decimal p and the whole success count k.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Success probability is a decimal input",
        "text": "Enter 0.5 for fifty percent, not fifty. A probability of zero means success cannot occur under the chosen model, and one means success occurs on every trial. Values outside zero through one are rejected. The result is displayed as a percentage, which is a separate presentation choice. Check the input basis before using an imported percentage value. The page does not estimate a probability from past counts or decide whether the supplied value remains applicable to future trials."
      },
      {
        "title": "Exactly, at most and at least include different counts",
        "text": "Exactly k includes only one success count. At most k includes zero through k, while at least k includes k through the trial total. Both tails include k, so adding them generally exceeds one by the exact-k probability. Do not treat them as complementary events. The complement of at most k is more than k, not at least k. Writing the event in words before reading the output prevents an apparently reasonable percentage from answering the wrong question."
      },
      {
        "title": "Independence and common probability are assumptions",
        "text": "The calculation assumes the outcome of one trial does not change another trial’s probability, and that every trial has the same success probability. Repeated attempts influenced by learning, shared conditions or changing opportunities can violate those assumptions. Drawing a finite sample without replacement can also change success probability across draws. Use the separate hypergeometric tool when its population-count model matches that question. The binomial arithmetic cannot test whether the real process satisfies its prerequisites."
      },
      {
        "title": "Whole counts and endpoint cases are explicit",
        "text": "Trials and the requested count must be whole numbers, with k between zero and n. Zero trials are supported: exactly zero successes is certain under that model. When p is zero or one, the distribution collapses to its corresponding endpoint, avoiding ambiguous powers in the computation. The trial limit of five hundred bounds browser work and is a technical limit, not a statistical recommendation. A mean can be fractional even though an individual observed success count cannot be."
      },
      {
        "title": "Precision is numerical rather than exact rational output",
        "text": "The implementation uses logarithms for combination and probability products, reducing overflow from large factorials. It sums supported probabilities numerically and formats percentage outputs to a bounded number of decimals. Extremely small values can round to zero in the interface without being mathematically impossible. Do not use a displayed zero to claim an event has no probability unless the entered endpoint assumptions actually make it impossible. For high-precision tail work, verify with an appropriate statistical system and preserve the model assumptions."
      }
    ],
    "faqs": [
      {
        "question": "Can I enter a success percentage?",
        "answer": "Convert it to a decimal first: fifty percent is 0.5. The input range is zero to one."
      },
      {
        "question": "Are at most and at least complementary?",
        "answer": "No. Both include k. Their sum equals one plus the exact-k probability, apart from numerical rounding."
      },
      {
        "question": "What if there are zero trials?",
        "answer": "Only k = 0 is valid, and zero successes then has probability one under the model."
      },
      {
        "question": "Does this handle sampling without replacement?",
        "answer": "Not as a finite-population model. A hypergeometric distribution may be appropriate for that distinct intent."
      },
      {
        "question": "Does a displayed zero mean impossible?",
        "answer": "Not necessarily. Very small numerical percentages can round to zero; endpoint assumptions determine actual impossibility."
      }
    ],
    "limitations": "Numerical binomial model for 0–500 independent identical trials. No probability estimation, dependency correction, confidence interval or exact rational tail output. Tiny displayed probabilities can round to zero. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "binomial distribution calculator"
    ]
  },
  {
    "slug": "octagon-calculator",
    "title": "Octagon Calculator — Regular Area, Perimeter and Spans",
    "shortTitle": "Octagon",
    "category": "Education",
    "description": "Calculate regular-octagon area, perimeter, apothem and side-to-side or vertex-to-vertex spans from a positive side length in consistent units.",
    "intro": "The octagon calculator solves the geometry of a regular eight-sided polygon from one supplied side length. A regular octagon has equal side lengths and equal interior angles, so that single dimension determines its area, perimeter, apothem and two useful overall spans. The page labels distance across parallel sides separately from distance across opposite vertices. It cannot calculate an irregular eight-sided parcel from one side, assess a construction cut layout or determine material waste. Use consistent length units and interpret the area in their squared unit, keeping the regular-shape assumption with every reported measurement.",
    "formula": "Area = 2(1 + √2)s². Perimeter = 8s. Side-to-side span = (1 + √2)s. Apothem = side-to-side span/2. Vertex-to-vertex span = s/sin(π/8).",
    "example": "For side length 2 units: perimeter is 16 units, area approximately 19.3137085 square units, side-to-side span 4.82842712 units, apothem 2.41421356 units and opposite-vertex span 5.22625186 units.",
    "howTo": [
      "Confirm the polygon is regular, then measure its positive side length in one consistent length unit.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Regular means both equal sides and equal angles",
        "text": "An eight-sided outline is an octagon, but it is not necessarily regular. Equal side lengths alone are not a sufficient description for the formulas on this page unless the angle arrangement is also regular. A measured land parcel with eight boundaries can have a very different area and overall shape. Do not use one convenient side measurement to represent it. For irregular boundaries, obtain the complete coordinates or an appropriate survey method instead of forcing them into a regular-polygon identity."
      },
      {
        "title": "Two across measurements describe different directions",
        "text": "The span across opposite parallel sides passes through the center between flat sides. The span across opposite vertices connects two farthest opposite corners. The second is larger for the same regular octagon. A drawing or supplier can quote either dimension, so check the label before entering a side length derived from another measurement. This worksheet starts from side length only and displays both spans for reconciliation rather than treating every across dimension as a single diameter."
      },
      {
        "title": "The apothem connects center to a flat side",
        "text": "The apothem is perpendicular from the polygon center to a side and equals half the flat-to-flat span. It is different from the radius to a vertex. An independent area check uses one-half times perimeter times apothem. This helps reconcile the closed-form area without introducing a new shape assumption. The displayed center-based dimensions belong to the regular polygon model; they do not locate the center of an irregular eight-sided outline or define an installation datum on a building drawing."
      },
      {
        "title": "Length and area scale differently",
        "text": "If side length doubles, perimeter, spans and apothem double, while area increases by a factor of four. Converting a side length from feet to inches multiplies the numerical length by twelve but multiplies the numerical area by one hundred forty-four. The interface uses generic units to keep that relationship visible without guessing a system. Label the unit when copying a result. A bare area number without its squared-unit label can lead to a large material or comparison error."
      },
      {
        "title": "Geometry does not determine a cutting or ordering plan",
        "text": "The polygon area describes its two-dimensional face. It does not include edge thickness, joints, borders, orientation on stock, kerf or waste. A regular octagonal floor can require more purchased material than its geometric area, and a manufactured frame has additional dimensions. The page also does not give saw settings or structural connections. Use the calculated dimensions to check a verified drawing, then handle material selection and installation requirements in the appropriate project workflow."
      }
    ],
    "faqs": [
      {
        "question": "Can this solve an irregular octagon?",
        "answer": "No. One side length is sufficient only for the stated regular polygon with equal sides and angles."
      },
      {
        "question": "Are the two across spans identical?",
        "answer": "No. Across opposite vertices is larger than across opposite parallel sides. The outputs label both."
      },
      {
        "question": "What unit is used for area?",
        "answer": "The square of your side-length unit. A side in metres gives square metres; a side in feet gives square feet."
      },
      {
        "question": "How can I check the area?",
        "answer": "Multiply perimeter by apothem and divide by two. It should match the displayed regular-octagon formula."
      },
      {
        "question": "Does area include ordering waste?",
        "answer": "No. Stock layout, cuts, borders and waste are separate from geometric face area."
      }
    ],
    "limitations": "Regular two-dimensional octagon only. No irregular survey area, coordinate reconstruction, thickness, cutting layout, ordering allowance, saw-angle instruction or construction approval. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "octagon calculator"
    ]
  },
  {
    "slug": "winrate-calculator",
    "title": "Winrate Calculator — Draw Convention and Target Wins",
    "shortTitle": "Winrate",
    "category": "Everyday",
    "description": "Calculate recorded win rate with an explicit draw denominator and estimate consecutive wins needed for a target, including impossible 100% cases.",
    "intro": "This winrate calculator reports a descriptive win percentage from recorded wins, losses and draws. You choose whether draws remain in the match denominator or are excluded, so the convention does not hide inside the formula. A second output gives the additional consecutive wins required to reach a supplied target while keeping the existing non-win record. It is a count identity, not a probability model or a forecast of future results. Use one consistent reporting interval and outcome classification, and keep the draw convention with the number when comparing a game, team or competition record.",
    "formula": "Denominator N = wins + losses + draws when included, or wins + losses when excluded. Win rate = wins/N × 100. For target fraction t < 1, consecutive wins needed = max(0, ceiling((tN − wins)/(1 − t))). A 100% target is impossible with existing included non-wins.",
    "example": "With 30 wins, 20 losses and 10 draws included, the win rate is 50%. Reaching 60% through additional consecutive wins requires 15: the new rate is 45/75 = 60%. Excluding draws gives 30/50 = 60% immediately.",
    "howTo": [
      "Collect whole wins, losses and draws from one interval, then choose whether draws remain in the denominator.",
      "Enter the values in the displayed units and verify the source record or measurement basis.",
      "Click Calculate result to submit the current inputs.",
      "Read the labeled outputs with the methodology and checks. Input edits retain the previous result until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Draw handling changes the meaning of the percentage",
        "text": "Including draws reports wins as a fraction of all recorded matches. Excluding draws reports wins as a fraction of decisive matches. Neither convention should be hidden when comparing records. The page does not assign half a win to a draw or implement a league points system. If a competition uses weighted points, calculate that distinct score under its actual rules. The draw field is retained and shown even when excluded so the input basis remains auditable."
      },
      {
        "title": "The denominator must contain actual outcomes",
        "text": "A record with no included matches cannot produce a win percentage. If draws are excluded and the record contains draws only, the selected denominator is still zero, so the tool returns an input check. Zero wins with positive losses or included draws is a valid zero-percent record. Use whole non-negative outcome counts from the same interval, rather than a win percentage copied back into a count field. All results describe the counts you supply."
      },
      {
        "title": "Target wins increase numerator and denominator together",
        "text": "A new win adds one to both wins and the chosen match denominator. Simply multiplying the target percentage by the old match total understates the required count because the denominator will grow. The displayed formula solves that changing-denominator inequality and rounds upward to whole wins. It assumes the additional outcomes are consecutive wins with no new included losses or draws. Recalculate with updated counts if future outcomes differ; the tool does not forecast whether the sequence is achievable."
      },
      {
        "title": "A perfect target has a special boundary",
        "text": "When a recorded included non-win already exists, no finite number of extra wins can make the historical win fraction exactly one. The percentage may approach one but does not become one. The calculator reports that hundred-percent target as impossible under the retained record. If all included outcomes are already wins, zero additional wins are needed. This explicit boundary prevents a division by zero in the target formula from being formatted as a plausible purchase-like count or a guaranteed goal."
      },
      {
        "title": "Aggregate outcomes rather than averaging session percentages",
        "text": "A short session and a long session contribute different numbers of matches to an overall rate. Add their wins, losses and draws using a consistent convention, then calculate the combined percentage. An unweighted average of displayed session percentages can misrepresent the total record. Win rate also does not describe opponent strength, game mode, team role or the probability of the next outcome. Use the separate K/D page for that different descriptive ratio, without treating either measure as a complete player evaluation."
      }
    ],
    "faqs": [
      {
        "question": "Is winrate the probability of winning next time?",
        "answer": "No. It is a descriptive fraction of the supplied historical counts, without a forecasting model."
      },
      {
        "question": "Can draws be excluded?",
        "answer": "Yes. Select the decisive-match denominator and retain that convention when comparing rates."
      },
      {
        "question": "Are draws half-wins?",
        "answer": "No. This page either includes them in the denominator or excludes them; it does not apply a points system."
      },
      {
        "question": "Why can a 100% target be impossible?",
        "answer": "Existing included non-wins remain in the record. Finite additional wins cannot erase them from that denominator."
      },
      {
        "question": "Should I average session win percentages?",
        "answer": "Combine the outcome counts instead. Session sizes can differ, so an unweighted mean can misstate the overall rate."
      }
    ],
    "limitations": "Descriptive supplied counts and a consecutive-win target identity only. No game affiliation, points-system weighting, skill rating, opponent adjustment or future-outcome prediction. Results use the entered assumptions and do not verify their real-world applicability. Calculator inputs are processed locally by the browser interface. Avoid entering identifying records; save only the quantities and context necessary for your own review.",
    "icon": "🧮",
    "accent": "blue",
    "updatedAt": "2026-10-04",
    "keywords": [
      "winrate calculator"
    ]
  }
];
