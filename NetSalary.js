/* Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site. */


/*
    Basic salary- 50k
    Benefits- 10k
    Gross salary= basic salary + benefits/allowances= 60k
    Deductions- incl personal relief, insurance relief, pension, housing relief etc. eg.5k
    Taxable Income= Gross salary - Total deductions = 55k.
    pitisha kwa slabs to get PAYE
    Net salary=gross-all deductions
    
*/
//overall function for calculating net salary
function calculateNetSalary(basicSalary, benefits) {
    const nssfTier1Limit = 7000;
    const nssfTier2Limit = 36000;
    const nssfRate = 0.06;
    const housingLevyRate = 0.015;

    //calculate grossSalary
    const grossSalary = basicSalary + benefits;

    //calculate annualGrossSalary
    const annualGrossSalary = grossSalary * 12;
    
    //calculate paye
    function calculatePAYE(_annualGrossSalary) {
        const taxBrackets = [
            { limit: 288000, rate: 0.1 },
            { limit: 388000, rate: 0.25 },
            { limit: 6000000, rate: 0.3 },
            { limit: 9600000, rate: 0.325 },
            { limit: Infinity, rate: 0.35 }
        ];

        let taxableIncome = annualGrossSalary;
        let totalTax = 0;

        for (let i = 0; i < taxBrackets.length; i++) {
            const bracket = taxBrackets[i];
            const previousLimit = i > 0 ? taxBrackets[i - 1].limit : 0;
            const taxableAmountInBracket = Math.min(taxableIncome, bracket.limit - previousLimit);

            totalTax += taxableAmountInBracket * bracket.rate;
            taxableIncome -= taxableAmountInBracket;

            if (taxableIncome <= 0) break;
        }

        return totalTax;
    }


    //calculate annual PAYE
    const annualPAYE = calculatePAYE(annualGrossSalary);

    //calc monthly PAYE
    const monthlyPAYE = annualPAYE / 12;
    
    //calculate nhif
    function calculateNHIF(_grossSalary) {
        const nhifRates = [
            { limit: 5999, deduction: 150 },
            { limit: 7999, deduction: 300 },
            { limit: 11999, deduction: 400 },
            { limit: 14999, deduction: 500 },
            { limit: 19999, deduction: 600 },
            { limit: 24999, deduction: 750 },
            { limit: 29999, deduction: 850 },
            { limit: 34999, deduction: 900 },
            { limit: 39999, deduction: 950 },
            { limit: 44999, deduction: 1000 },
            { limit: 49999, deduction: 1100 },
            { limit: 59999, deduction: 1200 },
            { limit: 69999, deduction: 1300 },
            { limit: 79999, deduction: 1400 },
            { limit: 89999, deduction: 1500 },
            { limit: 99999, deduction: 1600 },
            { limit: Infinity, deduction: 1700 }
        ];

        for (let i = 0; i < nhifRates.length; i++) {
            if (grossSalary <= nhifRates[i].limit) {
                return nhifRates[i].deduction;
            }
        }
    }

    const nhifDeduction = calculateNHIF(grossSalary);

    const nssfTierI = Math.min(nssfTier1Limit, grossSalary) * nssfRate;//math.min ensures NssfTierI does not exceed the nssfTierLimit
    const nssfTierII = Math.max(0, Math.min(nssfTier2Limit, grossSalary) - nssfTier1Limit) * nssfRate;
    const nssfDeduction = nssfTierI + nssfTierII;

    //housing levy the rate is 0.015
    const housingLevy = grossSalary * housingLevyRate;

    //sum up the deductions
    const totalDeductions = monthlyPAYE + nhifDeduction + nssfDeduction + housingLevy;

    //net salary
    const netSalary = grossSalary - totalDeductions;

    return {
        basicSalary: basicSalary,
        benefits: benefits,
        grossSalary: grossSalary,
        paye: monthlyPAYE,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        housingLevy: housingLevy,
        netSalary: netSalary
    };
}

function runCalculator() {
    const basicSalary = parseFloat(prompt("Enter your basic monthly salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for your basic salary and benefits!");
        return;
    }

    const result = calculateNetSalary(basicSalary, benefits);

    //use .toFixed(2) to give the results in two decimapl places
    console.log(`
        Basic Salary: Ksh ${result.basicSalary.toFixed(2)} 
        Benefits: Ksh ${result.benefits.toFixed(2)}
        Gross Salary: Ksh ${result.grossSalary.toFixed(2)}
        PAYE (Tax): Ksh ${result.paye.toFixed(2)}
        NHIF Deduction: Ksh ${result.nhifDeduction.toFixed(2)}
        NSSF Deduction: Ksh ${result.nssfDeduction.toFixed(2)}
        Housing Levy: Ksh ${result.housingLevy.toFixed(2)}
        Net Salary: Ksh ${result.netSalary.toFixed(2)}
    `);
}
  
