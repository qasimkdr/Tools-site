export type ToolSource = { name: string; url: string };
export type ToolTrust = { method: string; sources: ToolSource[] };

const categoryTrust: Record<string, ToolTrust> = {
  Energy:{method:"Uses the values you enter with transparent energy, power and efficiency relationships. Provider tariffs and equipment specifications should be replaced with current figures.",sources:[{name:"NEPRA tariff and electricity information",url:"https://www.nepra.org.pk/"}]},
  Solar:{method:"Uses editable energy demand, sunlight, equipment and loss assumptions. It is a planning model rather than a site survey or electrical design.",sources:[{name:"NEPRA distributed-generation information",url:"https://www.nepra.org.pk/"}]},
  Money:{method:"Uses standard financial arithmetic with editable rates and terms. Tax, bank and product-specific rules require current official confirmation.",sources:[{name:"State Bank of Pakistan",url:"https://www.sbp.org.pk/"},{name:"Federal Board of Revenue",url:"https://www.fbr.gov.pk/"}]},
  Business:{method:"Calculates revenue, cost and profit from the commercial assumptions entered. Reconcile results with current platform, courier, payment and tax statements.",sources:[{name:"Federal Board of Revenue",url:"https://www.fbr.gov.pk/"}]},
  Vehicles:{method:"Uses distance, efficiency, price and ownership assumptions entered by the user. Actual performance depends on route, vehicle condition and changing prices.",sources:[{name:"Pakistan State Oil fuel prices",url:"https://psopk.com/en/fuels/fuel-prices"}]},
  Technology:{method:"Uses device specifications and user-entered assumptions. Official device status, network policy and real-world benchmarks should be verified separately.",sources:[{name:"Pakistan Telecommunication Authority",url:"https://www.pta.gov.pk/"}]},
  Education:{method:"Applies the displayed arithmetic to marks, weights or credit hours. The relevant institution's current formula remains authoritative.",sources:[{name:"Higher Education Commission Pakistan",url:"https://www.hec.gov.pk/"}]},
  Home:{method:"Uses measured dimensions and editable local rates for preliminary planning. It is not a bill of quantities, structural design or valuation.",sources:[]},
  Everyday:{method:"Applies the displayed mathematical relationship directly to the values entered. Users should verify units and any institution-specific interpretation.",sources:[]},
};

const overrides: Record<string, ToolTrust> = {
  "electricity-bill-calculator-pakistan":{method:"Applies configured consumption slabs to the relevant units, then adds editable taxes and adjustments. It is checked against the worked example and should be compared with a recent bill.",sources:[{name:"NEPRA tariff determinations",url:"https://www.nepra.org.pk/tariff/Tariff.php"}]},
  "salary-tax-calculator-pakistan":{method:"Annualises taxable salary and applies the selected tax year's progressive bands. The highest rate is applied only to income above its threshold.",sources:[{name:"FBR income-tax resources",url:"https://www.fbr.gov.pk/income-tax/142261/131271"},{name:"FBR budget documents",url:"https://www.fbr.gov.pk/budget-2025-26/174"}]},
  "pta-tax-calculator-pakistan":{method:"Uses editable value bands and registration method to provide a planning estimate. It cannot reproduce device-specific customs valuation or an official PSID.",sources:[{name:"PTA DIRBS",url:"https://dirbs.pta.gov.pk/"},{name:"Pakistan Telecommunication Authority",url:"https://www.pta.gov.pk/"}]},
  "filer-vs-non-filer-calculator-pakistan":{method:"Compares user-entered withholding rates for one transaction. It does not assume one universal filer or non-filer percentage.",sources:[{name:"FBR Active Taxpayer List",url:"https://www.fbr.gov.pk/active-taxpayer-list-income-tax/51147/30859"},{name:"Federal Board of Revenue",url:"https://www.fbr.gov.pk/"}]},
};

export const trustForTool = (slug:string, category:string):ToolTrust => overrides[slug] || categoryTrust[category] || categoryTrust.Everyday;
