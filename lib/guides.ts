import { trafficGuides } from "@/lib/traffic-guides";

export type GuideSource = { name: string; url: string; note: string };
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type GuideTable = { caption: string; headers: string[]; rows: string[][]; note?: string };
export type GuideFaq = { question: string; answer: string };
export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  publishedAt?: string;
  reviewedAt: string;
  readingMinutes: number;
  quickAnswer: string;
  takeaways: string[];
  sections: GuideSection[];
  tables?: GuideTable[];
  example?: { heading: string; paragraphs: string[]; steps?: string[] };
  faqs?: GuideFaq[];
  relatedTools: string[];
  relatedGuides: string[];
  sources: GuideSource[];
  limitation: string;
};

const editorialSource: GuideSource = {
  name: "SolvePilot editorial and calculation policy",
  url: "/editorial-policy/",
  note: "Explains our sourcing, testing, update and correction standards.",
};

export const guides: Guide[] = [
  {
    slug: "how-electricity-bills-are-calculated-in-pakistan",
    title: "How Electricity Bills Are Calculated in Pakistan",
    description: "Understand units, slabs, protected status, taxes and adjustments before estimating a Pakistan electricity bill.",
    category: "Electricity",
    icon: "⚡",
    reviewedAt: "2026-09-18",
    readingMinutes: 9,
    quickAnswer: "A Pakistan electricity bill is not simply units multiplied by one price. Energy charges may be applied by slab or consumer category, then fixed charges, taxes, fuel-cost adjustments, quarterly adjustments and provider-specific items can change the payable total.",
    takeaways: ["Use the exact billing-period units, not a rounded monthly average.", "Check whether the connection is protected, non-protected, domestic, commercial or another category.", "Treat any calculator result as a planning estimate until it is compared with the latest tariff and the actual bill."],
    sections: [
      {heading:"Start with units and the billing period",paragraphs:["One electricity unit is one kilowatt-hour (kWh). A 1,000-watt appliance running for one hour uses about one unit; a 100-watt appliance running for ten hours also uses about one unit. The meter records accumulated energy, while the bill normally shows the difference between the previous and current readings.","Billing periods are not always exactly 30 days. That matters because a longer reading period can increase units and may move consumption into a different slab or status. Use the units printed on the bill when checking a past invoice."],bullets:["Confirm previous and current meter readings.","Check the number of billing days.","Look for estimated or corrected readings."]},
      {heading:"Understand slabs and consumer status",paragraphs:["Domestic tariffs can use consumption slabs, but the treatment of units depends on the current tariff schedule and consumer status. A progressive calculation applies each rate to the part of usage inside its band; some tariff structures or categories may instead apply a rate based on the reached band.","Protected status, sanctioned load, time-of-use metering and domestic or commercial classification can materially change the bill. Never copy a neighbour's effective rate without checking whether both connections have the same classification and recent consumption history."]},
      {heading:"Add charges beyond energy cost",paragraphs:["The energy charge is only the starting point. A bill may contain fixed charges, GST or other taxes, fuel-cost adjustment, quarterly tariff adjustment, financing or debt-related surcharges, TV fee and arrears. The names and rates can change through notifications.","For planning, separate editable items from the core energy charge. This makes the estimate easier to update and shows exactly why a calculated result differs from a provider bill."],bullets:["Energy charge", "Fixed or load-based charges", "Taxes and duties", "Fuel and quarterly adjustments", "Arrears, late-payment surcharge or credits"]},
      {heading:"Check your result safely",paragraphs:["First reproduce a recent bill using its exact units and visible adjustments. If the estimate is close before one-off adjustments, the assumptions are useful. If it is far away, verify the selected tariff, protected status and whether all units were treated correctly.","For a future month, calculate appliance-level units separately and add them to the normal household baseline. This is more reliable than guessing a percentage increase." ]},
    ],
    relatedTools:["electricity-bill-calculator-pakistan","electricity-slab-rate-calculator-pakistan","appliance-electricity-cost-calculator-pakistan","electricity-bill-appliance-share-calculator"],
    relatedGuides:["how-to-size-a-solar-system-in-pakistan","ups-and-battery-sizing-guide"],
    sources:[{name:"NEPRA tariff information",url:"https://www.nepra.org.pk/tariff/Tariff.php",note:"Primary source for tariff determinations and notifications."},editorialSource],
    limitation:"Tariffs and adjustments can change by provider, category and billing month. This guide explains the structure but does not reproduce an official DISCO invoice.",
  },
  {
    slug: "pakistan-salary-tax-slabs-explained",
    title: "Pakistan Salary Tax Slabs Explained",
    description: "Learn how progressive salary tax, annualisation, allowances and payroll withholding work in Pakistan.",
    category: "Tax",
    icon: "💼",
    reviewedAt: "2026-09-18",
    readingMinutes: 10,
    quickAnswer: "Pakistan salary tax is normally calculated on annual taxable salary using the rules for the relevant tax year. Progressive slabs mean the highest applicable rate does not usually apply to the entire salary—each band contributes its own amount to the final tax.",
    takeaways:["Convert recurring monthly salary to the correct annual taxable amount.","Use the tax year that covers the payment period.","Payroll withholding is not always the same as the final liability on an income-tax return."],
    sections:[
      {heading:"Why salary is annualised",paragraphs:["Payroll may be paid monthly, but salary slabs are expressed on an annual basis. A stable monthly salary can be multiplied by twelve, while bonuses, increments, joining dates, unpaid leave and irregular allowances require a more careful projection.","An employer may revise monthly withholding later in the tax year when the expected annual salary changes. That is why two employees with the same current monthly salary can temporarily see different deductions."]},
      {heading:"How progressive slabs work",paragraphs:["A progressive system divides taxable income into bands. Income below an exempt threshold may carry no tax; the next portion is charged at its band rate; higher portions are charged at higher rates. The total is the sum of the amounts calculated for all applicable bands.","A common mistake is multiplying the complete annual salary by the top rate. A proper slab calculation instead uses any fixed amount specified for the completed bands and applies the marginal rate only to the excess above the current threshold."],bullets:["Identify annual taxable salary.","Find the matching slab for the correct tax year.","Add the slab's fixed amount.","Apply the marginal percentage only to the stated excess."]},
      {heading:"Allowances, benefits and other income",paragraphs:["Not every payment labelled an allowance receives the same tax treatment. Cash allowances, employer benefits, reimbursements and exempt items can be treated differently depending on current law and documentation.","Freelance income, property income, capital gains and other sources are outside a simple salary-only estimate. They can affect the final return even when payroll withholding was correct for salary alone."]},
      {heading:"Use an estimate responsibly",paragraphs:["Use the calculator to understand the order of magnitude, compare job offers and check payroll arithmetic. Keep payslips and the employer's annual certificate, then reconcile them with current FBR guidance when filing.","If the estimate differs from payroll, first compare the selected tax year, annual salary projection, taxable allowances, bonus treatment and deductions already made." ]},
    ],
    relatedTools:["salary-tax-calculator-pakistan","annual-to-monthly-salary-calculator-pakistan","bonus-tax-estimator-pakistan","salary-allowance-calculator-pakistan"],
    relatedGuides:["filer-vs-non-filer-pakistan","how-loan-emi-is-calculated-pakistan"],
    sources:[{name:"Federal Board of Revenue — Income Tax",url:"https://www.fbr.gov.pk/income-tax/142261/131271",note:"Official income-tax information and resources."},{name:"Federal Board of Revenue — Budget documents",url:"https://www.fbr.gov.pk/budget-2025-26/174",note:"Check the relevant year's Finance Act and budget material."},editorialSource],
    limitation:"This guide cannot determine an individual's taxable salary, exemptions, credits or final return liability. Confirm material decisions with current FBR publications or a qualified tax professional.",
  },
  {
    slug:"how-to-size-a-solar-system-in-pakistan",
    title:"How to Size a Solar System in Pakistan",
    description:"Calculate solar kW, panel count, inverter capacity and realistic generation from your own electricity use.",
    category:"Solar",icon:"☀️",reviewedAt:"2026-09-18",readingMinutes:10,
    quickAnswer:"Start with daily energy use in kWh, divide it by realistic peak-sun-hours and total system efficiency, then round the array to available panel sizes. Check inverter limits, daytime load, roof area, shade and any battery requirement separately.",
    takeaways:["Size energy from several recent bills, not one unusually low month.","Panel kW, inverter kW and battery kWh solve different problems.","A site survey and qualified electrical design are still required before installation."],
    sections:[
      {heading:"Convert bills into daily energy",paragraphs:["Collect at least three to twelve months of units so seasonal air-conditioning, heating or business loads are visible. Divide the selected monthly units by the number of billing days to obtain average daily kWh.","Decide whether the system should offset the full annual average, only the daytime load or a smaller budget-limited target. Oversizing without understanding export rules and daytime consumption can weaken the financial result."]},
      {heading:"Estimate array capacity",paragraphs:["A planning formula is required array kW = daily kWh ÷ (peak-sun-hours × system efficiency). System efficiency accounts for temperature, inverter conversion, wiring, dust, mismatch and other losses.","For example, 20 daily kWh divided by 5 peak-sun-hours and 0.80 efficiency gives about 5 kW. This is a planning size, not a production guarantee; location, orientation, shade and weather change generation."],bullets:["Use conservative peak-sun-hours for the city and season.","Allow realistic losses instead of panel nameplate output.","Round using the wattage and count of actual modules."]},
      {heading:"Check panels, inverter and roof",paragraphs:["Panel count equals required array watts divided by one panel's wattage, rounded to a practical string layout. The chosen inverter must accept the strings' voltage and current within its MPPT limits under hot and cold conditions.","Roof area is not the only constraint. Setbacks, walkways, water tanks, shade, wind loading, structure and maintenance access reduce usable space. A physical layout prevents unrealistic panel counts."]},
      {heading:"Treat batteries as a separate design",paragraphs:["Grid-tied energy offset does not automatically provide outage backup. Battery sizing begins with essential backup watts and required hours, then accounts for voltage, usable depth of discharge and conversion losses.","Ask installers for expected monthly generation, loss assumptions, warranties, protection equipment, earthing and an itemised quotation. Compare these with your own estimate before selecting a proposal."]},
    ],
    relatedTools:["solar-system-calculator-pakistan","solar-panel-output-calculator-pakistan","solar-roof-area-calculator-pakistan","solar-inverter-size-calculator-pakistan","solar-payback-calculator-pakistan"],
    relatedGuides:["how-electricity-bills-are-calculated-in-pakistan","ups-and-battery-sizing-guide"],
    sources:[{name:"NEPRA",url:"https://www.nepra.org.pk/",note:"Official electricity regulation, licensing and applicable distributed-generation material."},editorialSource],
    limitation:"Solar production and savings depend on the site, weather, tariff, export arrangement, equipment and installation. Obtain a site survey and qualified design before purchasing equipment.",
  },
  {
    slug:"filer-vs-non-filer-pakistan",
    title:"Filer vs Non-Filer in Pakistan: What Changes?",
    description:"Understand ATL status, withholding differences and why filer status is not the same as having no tax liability.",
    category:"Tax",icon:"🧾",reviewedAt:"2026-09-18",readingMinutes:8,
    quickAnswer:"A filer commonly means a person whose name appears on FBR's Active Taxpayers List (ATL). ATL status can affect withholding rates on specified transactions, but it does not prove that every return is correct or that no further tax is payable.",
    takeaways:["Verify ATL status through an official FBR channel.","Compare rates for the exact transaction rather than using one universal filer percentage.","Withholding may be adjustable, minimum or final depending on the provision."],
    sections:[
      {heading:"What filer status actually means",paragraphs:["In everyday language, filer usually refers to an individual or entity appearing on the Active Taxpayers List. Filing a return and appearing on the ATL are related but not always simultaneous because timing, surcharge or compliance rules can apply.","The ATL is evidence of current listed status, not a complete judgement on the accuracy of declarations. Use the official verification service rather than screenshots or a seller's claim."]},
      {heading:"Where different rates may appear",paragraphs:["Pakistan's withholding system covers many transaction types. Banking transactions, vehicle registration or transfer, property transactions, contracts, goods, services, dividends and other payments may have status-dependent rates.","There is no single percentage that describes the total cost of being a non-filer. The difference depends on the section, transaction value, date, province where relevant, and whether the collected amount can later be adjusted."],bullets:["Identify the exact transaction.","Check the applicable legal section and current rate.","Determine whether the amount is adjustable against final liability."]},
      {heading:"Withholding is not always final tax",paragraphs:["An amount deducted at source can be a collection mechanism rather than the final calculation. A return may reconcile tax already deducted with income, deductions and other liabilities.","This distinction matters when comparing a filer and non-filer estimate. A higher upfront deduction can affect cash flow even where later adjustment may be available, subject to current law and the taxpayer's circumstances."]},
      {heading:"A practical checking process",paragraphs:["Verify status, keep transaction certificates and use the current tax-year rate for the exact activity. If a large property, vehicle or business transaction is planned, obtain professional advice before relying on a simplified calculator.","SolvePilot's comparison tool should be used as a scenario model: enter verified rates and compare the immediate deduction, then separately consider final return treatment." ]},
    ],
    relatedTools:["filer-vs-non-filer-calculator-pakistan","withholding-tax-calculator-pakistan","property-transfer-cost-estimator-pakistan","vehicle-token-tax-estimator-pakistan"],
    relatedGuides:["pakistan-salary-tax-slabs-explained","how-pta-mobile-tax-works"],
    sources:[{name:"FBR Active Taxpayer List",url:"https://www.fbr.gov.pk/active-taxpayer-list-income-tax/51147/30859",note:"Official ATL information and verification guidance."},{name:"Federal Board of Revenue",url:"https://www.fbr.gov.pk/",note:"Current tax laws, circulars and rates."},editorialSource],
    limitation:"Tax status and transaction treatment depend on current law and individual facts. This guide is educational and is not legal or tax advice.",
  },
  {
    slug:"how-pta-mobile-tax-works",
    title:"How PTA Mobile Tax and DIRBS Registration Work",
    description:"Understand IMEI registration, device valuation and why unofficial PTA-tax estimates can differ from the PSID amount.",
    category:"Mobiles",icon:"📱",reviewedAt:"2026-09-18",readingMinutes:8,
    quickAnswer:"Imported phones used on Pakistani mobile networks must meet DIRBS registration requirements. The official amount is generated for the device and registration route; estimates can differ because customs valuation, exchange rates, device identity and current duties may not match the retail receipt.",
    takeaways:["Verify the exact IMEI and device status through official channels.","Treat purchase price as an input estimate, not guaranteed customs valuation.","Only the official PSID or DIRBS assessment confirms the payable amount."],
    sections:[
      {heading:"IMEI and DIRBS basics",paragraphs:["Every cellular device has one or more IMEI identifiers. Dual-SIM phones commonly have two, and registration checks should cover every IMEI. DIRBS is used to identify compliant devices operating on Pakistani mobile networks.","A device sold as PTA approved should be checked independently. Matching the IMEI shown in software, on the box and on supporting documentation reduces the risk of relying on the wrong identity." ]},
      {heading:"Why tax estimates vary",paragraphs:["An online estimator normally starts with a model or USD value and applies a simplified band. The official assessment can use customs valuation and current duties rather than the buyer's discounted, used or foreign retail price.","Exchange rates, CNIC or passport route, device category and notifications can also change results. A precise-looking estimate should never be represented as a confirmed government amount."],bullets:["Exact model and storage variant", "Declared or assessed value", "Registration route", "Current exchange rate and duty schedule"]},
      {heading:"Safer buying and registration steps",paragraphs:["Before paying for a used or imported phone, check every IMEI, keep proof of purchase and avoid sellers who provide only a screenshot. For an unregistered device, generate the official assessment through the authorised process before deciding whether the complete cost is worthwhile.","Compare total ownership cost: phone price, registration, accessories, repair availability, warranty and resale value. A cheaper unregistered unit can become more expensive than an officially approved alternative." ]},
      {heading:"How to use the estimator",paragraphs:["Choose the appropriate registration method, enter a defensible USD value and current exchange rate, and read the result as a range or planning figure. If the official PSID differs, use the official amount.","Do not pay an unknown intermediary merely because an estimate looks favourable. Follow PTA and FBR instructions and retain the payment evidence." ]},
    ],
    relatedTools:["pta-tax-calculator-pakistan","used-phone-condition-score-pakistan","phone-value-score-calculator-pakistan","phone-finder-pakistan"],
    relatedGuides:["mobile-buying-guide-pakistan","filer-vs-non-filer-pakistan"],
    sources:[{name:"PTA Device Identification Registration and Blocking System",url:"https://dirbs.pta.gov.pk/",note:"Official device-registration and status service."},{name:"Pakistan Telecommunication Authority",url:"https://www.pta.gov.pk/",note:"Official notices and consumer guidance."},editorialSource],
    limitation:"Rates and valuation practices can change. SolvePilot cannot check an IMEI or issue a PSID; the official DIRBS assessment controls.",
  },
  {
    slug:"ups-and-battery-sizing-guide",
    title:"UPS and Battery Sizing Guide for Pakistan",
    description:"Size inverter VA, battery Ah and expected backup time without confusing watts, volt-amperes and watt-hours.",
    category:"Energy",icon:"🔋",reviewedAt:"2026-09-18",readingMinutes:10,
    quickAnswer:"Add simultaneous running watts, allow surge and safety headroom to select inverter VA, then calculate battery energy from load watts and desired hours. Apply depth-of-discharge and conversion losses before converting watt-hours into amp-hours.",
    takeaways:["Running load determines energy use; startup surge can determine inverter size.","Battery Ah has meaning only with voltage and usable depth of discharge.","Lead-acid and lithium batteries should not be compared by Ah alone."],
    sections:[
      {heading:"Build a realistic load list",paragraphs:["List only appliances that must run during an outage and record quantity, running watts and likely simultaneous use. Nameplate values are a starting point; measured input is better where available.","Refrigerators, pumps and some air conditioners have a startup surge. Lights and electronics may have smaller peaks, but poor power factor can still make VA demand higher than watts."],bullets:["Essential running watts", "Largest startup surge", "Hours required for each load", "Loads that can be switched off"]},
      {heading:"Choose inverter capacity",paragraphs:["A simplified estimate divides watts with headroom by power factor to obtain VA. For example, 800 W with 25% headroom and a 0.8 power factor suggests at least 1,250 VA before surge verification.","Check continuous watts, surge rating, DC battery voltage, charging current, waveform and manufacturer limits. A large VA label does not guarantee that every motor will start reliably." ]},
      {heading:"Convert backup hours into battery capacity",paragraphs:["Required usable energy is load watts multiplied by hours. Battery nominal energy is voltage multiplied by amp-hours, but only part may be usable after depth-of-discharge limits, inverter loss, battery age and high discharge current.","A planning formula is Ah = required Wh ÷ (battery voltage × usable fraction × inverter efficiency). Use conservative values and avoid routinely discharging lead-acid batteries too deeply." ]},
      {heading:"Compare battery technologies",paragraphs:["Lead-acid batteries are commonly rated at a specified discharge rate and may deliver less capacity at high current. Lithium products can offer more usable depth, cycle life and stable voltage, but require compatible battery management and charging settings.","Confirm cable size, fuses, ventilation, earthing, polarity and safe installation with a qualified technician. Battery banks can deliver dangerous fault current even at low voltage." ]},
    ],
    relatedTools:["battery-backup-calculator-pakistan","inverter-load-calculator-pakistan","load-shedding-battery-calculator-pakistan","lithium-vs-lead-acid-battery-calculator","ups-runtime-multiple-appliances-calculator"],
    relatedGuides:["how-to-size-a-solar-system-in-pakistan","how-electricity-bills-are-calculated-in-pakistan"],
    sources:[editorialSource],
    limitation:"This guide cannot verify battery health, motor surge, wiring, protection or product compatibility. Electrical installation should be checked by a qualified professional.",
  },
  {
    slug:"how-loan-emi-is-calculated-pakistan",
    title:"How Loan EMI Is Calculated in Pakistan",
    description:"Understand reducing-balance instalments, flat-rate quotations, total repayment and affordability checks.",
    category:"Finance",icon:"🏦",reviewedAt:"2026-09-18",readingMinutes:9,
    quickAnswer:"For a fixed reducing-balance loan, EMI is calculated from principal, monthly rate and number of payments. Real financing can also include processing fees, insurance or takaful, changing benchmark rates and early-settlement conditions.",
    takeaways:["Compare total repayment, not only the advertised monthly instalment.","Ask whether the quoted rate is flat or reducing-balance.","Stress-test affordability if the rate or household expenses rise."],
    sections:[
      {heading:"Reducing balance versus flat rate",paragraphs:["In a reducing-balance schedule, interest or markup is calculated on the outstanding balance, so the finance portion falls as principal is repaid. A standard EMI keeps the payment broadly level while its principal and finance components change.","A flat-rate quotation applies a percentage to the original principal for the quoted period. The headline percentage is therefore not directly comparable with a reducing-balance annual percentage." ]},
      {heading:"The EMI inputs",paragraphs:["The standard fixed-payment formula uses principal P, monthly rate r and payment count n. Small differences in rate and term can materially change total repayment even when the monthly payment looks manageable.","Use the financed amount after any down payment, enter the rate exactly as defined by the lender, and match the term to the true number of instalments."],bullets:["Principal actually financed", "Rate basis and whether it can change", "Number and frequency of payments", "Upfront and recurring fees"]},
      {heading:"Check affordability and total cost",paragraphs:["Add the down payment, processing fee, documentation, insurance or takaful, tracker charges and any balloon payment to understand full cost. Compare that with the cash price rather than focusing only on EMI.","A debt-to-income check can show whether the payment leaves a reasonable buffer for rent, food, utilities, emergencies and variable income." ]},
      {heading:"Before accepting an offer",paragraphs:["Request the repayment schedule and key facts in writing. Check late-payment charges, variable benchmark language, early-settlement cost and what happens if a payment is missed.","Run at least three scenarios: the offered term, a shorter term and a conservative rate or expense case. The best instalment is not necessarily the cheapest loan." ]},
    ],
    relatedTools:["loan-emi-calculator-pakistan","loan-affordability-calculator-pakistan","debt-to-income-calculator-pakistan","early-loan-payment-calculator-pakistan","personal-loan-comparison-calculator-pakistan"],
    relatedGuides:["pakistan-salary-tax-slabs-explained","ecommerce-profit-guide-pakistan"],
    sources:[{name:"State Bank of Pakistan — consumer information",url:"https://www.sbp.org.pk/cpd/cpd-cons.asp",note:"Official consumer-protection and banking information."},editorialSource],
    limitation:"A calculator cannot reproduce every bank product or determine approval. The lender's written schedule and terms are authoritative.",
  },
  {
    slug:"ecommerce-profit-guide-pakistan",
    title:"E-commerce Profit Calculation Guide for Pakistan",
    description:"Calculate real product profit after marketplace fees, COD returns, advertising, delivery and payment costs.",
    category:"Business",icon:"📦",reviewedAt:"2026-09-18",readingMinutes:10,
    quickAnswer:"Real product profit equals collected revenue minus product cost, platform and payment fees, fulfilment, advertising, expected returns, packaging, taxes and overhead. Revenue from placed orders is not the same as collected revenue from delivered orders.",
    takeaways:["Calculate contribution profit per delivered order.","Include COD return and failed-delivery losses.","Separate profit from cash flow and marketplace settlement timing."],
    sections:[
      {heading:"Begin with collected sales",paragraphs:["For COD businesses, placed orders can exaggerate performance. Build the calculation from delivered and collected orders, while tracking cancelled, refused and returned parcels separately.","Discounts, vouchers and platform-funded promotions should be assigned according to who actually bears their cost. Use the settlement statement rather than the storefront price alone." ]},
      {heading:"Include every variable cost",paragraphs:["Product cost, commission, payment fee, shipping contribution, packaging and per-order advertising reduce contribution profit. Return shipping and unrecoverable packaging should be spread across successful deliveries.","For example, if one in five dispatched parcels fails, the successful orders must economically cover the failed-delivery cost unless the price or process changes."],bullets:["Product and inbound freight", "Marketplace or payment commission", "Outbound and return courier cost", "Packaging", "Advertising cost per acquired order", "Refunds, damage and other leakage"]},
      {heading:"Do not ignore fixed costs and cash timing",paragraphs:["Software, staff, storage, internet, equipment and professional services are fixed or semi-fixed costs. Contribution profit shows whether each sale helps, while net profit also allocates these operating costs.","A profitable month can still create a cash shortage when inventory is paid before settlements arrive. Track inventory lead time, settlement delay and the cash tied up in returns." ]},
      {heading:"Use scenarios before setting a price",paragraphs:["Calculate expected, conservative and break-even cases. Vary return rate, ad cost, supplier cost and discount instead of assuming every variable remains stable.","Reconcile calculator results with actual platform, courier and payment statements every month. Update the model when a category commission or commercial term changes." ]},
    ],
    relatedTools:["daraz-profit-calculator-pakistan","cod-order-profit-calculator-pakistan","cod-return-loss-calculator-pakistan","product-pricing-calculator-pakistan","business-break-even-calculator-pakistan"],
    relatedGuides:["how-loan-emi-is-calculated-pakistan","freelancer-rate-guide-pakistan"],
    sources:[editorialSource],
    limitation:"Platform agreements, taxes, courier charges and return behaviour vary by seller. Reconcile estimates with current contracts and actual statements.",
  },
  {
    slug:"vehicle-fuel-cost-guide-pakistan",
    title:"How to Calculate Vehicle Fuel Cost in Pakistan",
    description:"Estimate trip and monthly fuel expense using measured mileage, distance and current pump price.",
    category:"Vehicles",icon:"⛽",reviewedAt:"2026-09-18",readingMinutes:7,
    quickAnswer:"Fuel required equals distance divided by real-world kilometres per litre. Multiply the litres by the current fuel price, then add tolls, parking and maintenance if you need total travel cost rather than fuel cost alone.",
    takeaways:["Use tank-to-tank mileage instead of the dashboard's best reading.","Separate city, motorway and loaded-driving efficiency.","Fuel is only one part of ownership or commercial-trip cost."],
    sections:[
      {heading:"Measure mileage accurately",paragraphs:["Fill the tank consistently, reset the trip meter, drive normally, refill and divide kilometres travelled by litres added. Repeat across several tanks to reduce the effect of pump cut-off and one unusual journey.","City traffic, idling, air conditioning, tyre pressure, passenger load and driving style can make the real figure very different from marketing claims." ]},
      {heading:"Calculate trip and monthly cost",paragraphs:["For a trip, litres equal route distance divided by mileage. For monthly planning, include commuting, errands and weekend distance rather than multiplying one ideal route.","Add a return journey where required and use the latest verified pump price. If several passengers share cost, decide whether only fuel or the wider trip cost will be divided." ]},
      {heading:"Compare petrol, hybrid and electric options",paragraphs:["A fair comparison uses the same distance and includes energy price, efficiency, routine maintenance and purchase-price difference. For an EV, convert efficiency into kWh per kilometre and apply the actual charging tariff and charging losses.","Payback estimates are sensitive to daily distance. A high purchase premium may take many years to recover for a low-mileage driver even when energy cost is lower." ]},
      {heading:"Move from fuel cost to ownership cost",paragraphs:["Insurance, token tax, financing, depreciation, tyres, repairs and parking often exceed the fuel difference over a long ownership period. Commercial drivers should also include platform commission and unpaid waiting time.","Use fuel calculation for short-term budgeting, then run a complete ownership model before changing vehicles." ]},
    ],
    relatedTools:["fuel-cost-calculator-pakistan","car-fuel-average-calculator-pakistan","trip-fuel-sharing-calculator-pakistan","ev-vs-petrol-calculator-pakistan","car-ownership-cost-calculator-pakistan"],
    relatedGuides:["how-electricity-bills-are-calculated-in-pakistan","how-loan-emi-is-calculated-pakistan"],
    sources:[{name:"Pakistan State Oil — fuel prices",url:"https://psopk.com/en/fuel-prices",note:"Check current retail prices; official notifications control."},editorialSource],
    limitation:"Actual mileage and prices change. The calculation cannot predict traffic, vehicle condition or future fuel prices.",
  },
  {
    slug:"house-construction-cost-guide-pakistan",
    title:"House Construction Cost Planning in Pakistan",
    description:"Turn covered area, specification and local quotations into a safer preliminary construction budget.",
    category:"Construction",icon:"🏗️",reviewedAt:"2026-09-18",readingMinutes:10,
    quickAnswer:"A preliminary budget multiplies measured scope by current local rates, but cost per square foot alone is not enough. Structure, finishes, services, site conditions, professional fees, approvals and contingency must be estimated separately.",
    takeaways:["Use drawings and a bill of quantities when decisions become serious.","Compare quotations with the same specification and inclusions.","Keep contingency outside the contractor's base estimate."],
    sections:[
      {heading:"Define area and scope first",paragraphs:["Plot size is not covered area. Covered area may include floors, stair structures, balconies and other built portions according to the estimator's definition. Measure from drawings and record what is included.","Decide whether the estimate covers grey structure, complete finishes, external works, utility connections, design fees and approvals. Two rates cannot be compared if their scopes differ." ]},
      {heading:"Break cost into work sections",paragraphs:["A more useful budget separates excavation and foundations, concrete and steel, masonry, plaster, waterproofing, electrical, plumbing, doors, windows, flooring, ceilings, paint, kitchens and sanitary fixtures.","Quantity calculators help test materials, but structural steel and foundations must come from engineering design rather than a generic per-square-foot assumption."],bullets:["Structure and masonry", "Electrical and plumbing services", "Finishes and fixtures", "External and utility work", "Professional, approval and supervision cost"]},
      {heading:"Use current local quotations",paragraphs:["Cement, steel, bricks, sand, labour and finishes vary by city, brand, grade, quantity and delivery access. Date every quotation and record taxes, transport and wastage.","Ask contractors to price the same specification and quantities. A low total may exclude essential items or use materially different brands and workmanship standards." ]},
      {heading:"Control uncertainty",paragraphs:["Keep a contingency for design development, price movement and unexpected site conditions. Track committed cost, paid amount and forecast-to-complete separately throughout the project.","Before purchasing bulk materials, have quantities and storage needs checked. Over-ordering can create damage and cash pressure, while under-ordering can cause delays and inconsistent batches." ]},
    ],
    relatedTools:["house-construction-cost-calculator-pakistan","concrete-volume-calculator-pakistan","brick-quantity-calculator-pakistan","cement-sand-calculator-pakistan","steel-weight-calculator-pakistan"],
    relatedGuides:["how-loan-emi-is-calculated-pakistan","how-electricity-bills-are-calculated-in-pakistan"],
    sources:[editorialSource],
    limitation:"This is preliminary budgeting guidance, not a bill of quantities, structural design, valuation or contractor quotation. Use qualified professionals and local measurements.",
  },
  {
    slug:"university-merit-and-cgpa-guide-pakistan",
    title:"University Merit, GPA and CGPA Guide for Pakistan",
    description:"Calculate admission aggregates and academic percentages without assuming every institution uses one formula.",
    category:"Education",icon:"🎓",reviewedAt:"2026-09-18",readingMinutes:8,
    quickAnswer:"Admission aggregate combines specified academic and test components using the institution's published weights. GPA and CGPA use the university's grade-point rules; converting CGPA to percentage is only valid when that institution publishes a conversion method.",
    takeaways:["Copy weights from the current admission prospectus.","Keep percentages and raw marks in the units required by the formula.","Never use a generic CGPA multiplier for an official application unless accepted by the institution."],
    sections:[
      {heading:"Admission aggregate is institution-specific",paragraphs:["One university may combine matric, intermediate and entry-test percentages, while another may use different qualifications, subject weights, quotas or interview marks. Programmes within the same institution can also differ.","Write the formula before entering numbers. Confirm whether weights total 100%, whether marks must be normalised, and which result date or test attempt is accepted." ]},
      {heading:"Calculate weighted components",paragraphs:["Convert each result to a percentage when required, multiply it by its weight, then add the weighted contributions. A 70% test score with 50% weight contributes 35 aggregate points, not 70.","Do not round each component too early. Keep several decimal places until the final aggregate because small differences can matter near a closing merit." ]},
      {heading:"Understand GPA and CGPA",paragraphs:["Semester GPA normally weights grade points by course credit hours. CGPA combines completed courses or semesters according to the institution's rules. Repeated, withdrawn, pass/fail and transferred courses may receive special treatment.","A percentage conversion is not universal. Multiplying a 4.0-scale CGPA by 25 is a mathematical convenience, not evidence that an institution recognises that percentage." ]},
      {heading:"Verify before applying",paragraphs:["Use the current prospectus, admissions portal and registrar guidance. Keep a screenshot or document version of the formula used for planning.","A calculator can estimate competitiveness, but closing merit changes with applicants, seats, quotas and policy. Do not treat last year's closing number as a guaranteed threshold." ]},
    ],
    relatedTools:["university-merit-calculator-pakistan","mdcat-aggregate-calculator-pakistan","ecat-aggregate-calculator-pakistan","semester-gpa-calculator","cgpa-percentage-calculator-pakistan"],
    relatedGuides:["mobile-buying-guide-pakistan","freelancer-rate-guide-pakistan"],
    sources:[{name:"Higher Education Commission Pakistan",url:"https://www.hec.gov.pk/",note:"Official higher-education information; institution-specific rules still control."},editorialSource],
    limitation:"Admissions and grading rules differ. The relevant institution's current published formula and official result remain authoritative.",
  },
  {
    slug:"mobile-buying-guide-pakistan",
    title:"Mobile Buying Guide for Pakistan",
    description:"Compare performance, battery, camera, PTA status, warranty and long-term value instead of specifications alone.",
    category:"Mobiles",icon:"📲",reviewedAt:"2026-09-18",readingMinutes:9,
    quickAnswer:"Choose a phone by workload and ownership cost. Verify PTA status, exact storage variant, official or seller warranty, software-support period, sustained performance, battery health and repair availability before comparing price.",
    takeaways:["Prioritise three real use cases instead of chasing every specification.","Check sustained gaming tests, not only chipset peak scores.","For used phones, verify IMEI, accounts, parts and battery condition in person."],
    sections:[
      {heading:"Turn needs into priorities",paragraphs:["Set the total budget including registration and accessories. Rate gaming, camera, battery, display, compactness and software support, then identify features that are genuinely mandatory.","A phone optimised for gaming can trade camera quality, weight or updates. A balanced shortlist is usually more useful than ranking every device by one benchmark." ]},
      {heading:"Compare evidence, not labels",paragraphs:["Chipset name alone does not guarantee sustained speed. Cooling, power limits, RAM, storage speed and game optimisation affect frame rate and stability. Look for long-session tests at the same settings.","For cameras, compare daylight, indoor, motion and video samples. Megapixels do not directly measure processing quality, autofocus or stabilisation." ]},
      {heading:"Calculate ownership value",paragraphs:["Include PTA registration where applicable, warranty strength, likely repair cost, software-support years and resale value. A lower initial price can be poor value if the battery, display or board has hidden damage.","Storage should include system space, games, messaging media, photos and a free-space reserve. Buying too little non-expandable storage can shorten useful ownership." ]},
      {heading:"Inspect a used phone",paragraphs:["Match every IMEI, check network and PTA status, remove account locks, test display, touch, cameras, speakers, microphones, charging, biometrics, sensors and connectivity. Inspect for frame separation, water signs and non-original parts.","Meet safely, keep seller and payment evidence, and do not let a condition score replace technical inspection or ownership verification." ]},
    ],
    relatedTools:["phone-finder-pakistan","phone-comparison-score-calculator","mobile-gaming-fps-estimator","phone-storage-requirement-calculator","used-phone-condition-score-pakistan"],
    relatedGuides:["how-pta-mobile-tax-works","university-merit-and-cgpa-guide-pakistan"],
    sources:[{name:"Pakistan Telecommunication Authority",url:"https://www.pta.gov.pk/",note:"Official consumer and device-compliance information."},editorialSource],
    limitation:"Prices, availability and firmware change. SolvePilot does not claim personal testing unless explicitly stated and cannot authenticate a seller or device.",
  },
  {
    slug:"freelancer-rate-guide-pakistan",
    title:"How to Set a Freelance Rate in Pakistan",
    description:"Build an hourly or project rate from income goals, billable capacity, platform fees, revisions and payment costs.",
    category:"Business",icon:"💻",reviewedAt:"2026-09-18",readingMinutes:8,
    quickAnswer:"A sustainable freelance rate covers target income, business expenses, unpaid work, payment fees, tax reserve and downtime. Divide the required monthly revenue by realistic billable hours, then convert to a project quote with scope and risk allowance.",
    takeaways:["Not every working hour is billable.","Price scope, revision limits and payment risk into project work.","Track effective hourly earnings after fees and rework."],
    sections:[
      {heading:"Calculate required revenue",paragraphs:["Start with personal income needed, then add software, internet, equipment, workspace, learning, professional services and a tax reserve. Include unpaid leave and quiet months rather than assuming twelve perfect months.","This produces the revenue the business needs, not merely a desired salary." ]},
      {heading:"Estimate billable capacity",paragraphs:["Client communication, proposals, bookkeeping, portfolio work and learning consume time but are rarely billed directly. A person working 160 hours may have only 80 to 110 billable hours.","Divide required revenue by conservative billable hours. If the result is above the market for current skill and proof, improve positioning, reduce cost or raise utilisation rather than silently accepting an unsustainable rate." ]},
      {heading:"Convert time into a project quote",paragraphs:["Estimate discovery, implementation, meetings, testing, deployment and reasonable revisions. Add contingency for unclear requirements, then state deliverables and exclusions in writing.","Platform commission, currency conversion and withdrawal fees reduce received PKR. Calculate from the expected net amount, not only the USD headline." ]},
      {heading:"Improve the rate with evidence",paragraphs:["Track estimated versus actual hours and the number of revisions. Effective hourly rate equals net received amount divided by all time spent.","Raise rates when demand, proof and delivery quality improve. Strong case studies and a clear niche often support pricing better than sending more generic proposals." ]},
    ],
    relatedTools:["freelance-hourly-rate-calculator-pakistan","freelance-project-quote-calculator-pakistan","freelancer-platform-fee-calculator-pakistan","payoneer-withdrawal-calculator-pakistan","salary-to-hourly-rate-calculator-pakistan"],
    relatedGuides:["ecommerce-profit-guide-pakistan","pakistan-salary-tax-slabs-explained"],
    sources:[editorialSource],
    limitation:"Rates depend on skill, proof, market, scope and negotiation. This planning framework cannot guarantee clients, income or tax treatment.",
  },
  ...trafficGuides,
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
export const guideForTool = (toolSlug: string) => guides.find((guide) => guide.relatedTools.includes(toolSlug));
