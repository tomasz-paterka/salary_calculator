import { elements } from '../../view/baseView';
import { retirementInsPercentage,
   employeePensionInsPercentage, 
   employerPensionInsPercentage, 
   diseaseInsPercentage, 
   healthInsPercentage, 
   taxHealthInsPercentage, 
   laborFundPercentage, 
   percentageOfFGSP  } from '../insurancePercentages';


/** Class representing salary object */
export default class EmploymentContract {
  /**
   * @param {number} payment
   */
  constructor(payment) {
    this.payment = payment;
  }
  
  /**
   * @param  {number} accidentInsPercentage - percentage of accident insurance
   * Calculating salary insurances
   */
  calcInsurance(accidentInsPercentage) {
    if (!accidentInsPercentage) {
      accidentInsPercentage = 1.67
    }
    
    const {payment} = this;

    this.minimumSalary = 2600.00;
    this.employeeRetirementIns = ((payment * retirementInsPercentage) / 100);
    this.employerRetirementIns = ((payment * retirementInsPercentage) / 100);
    this.employeePensionIns = ((payment * employeePensionInsPercentage) / 100);
    this.employerPensionIns = ((payment * employerPensionInsPercentage) / 100);
    this.diseaseIns = ((payment * diseaseInsPercentage) / 100);
    this.socialIns = this.employeeRetirementIns + this.employeePensionIns + this.diseaseIns;
    this.healthIns = (((payment - this.socialIns ) * healthInsPercentage) / 100);
    this.taxHealthIns = (((payment - this.socialIns ) * taxHealthInsPercentage) / 100);
    this.accidentIns = ((payment * accidentInsPercentage) / 100);
    payment >= this.minimumSalary ? this.laborFund = ((payment * laborFundPercentage) / 100) : this.laborFund = 0;
    this.contributionFGSP = ((payment * percentageOfFGSP) / 100);
    this.employerCosts = payment + this.employerRetirementIns + this.employerPensionIns + this.accidentIns + this.laborFund + this.contributionFGSP;
  }

  /**
   * Calculating salary tax
   */
  calcTax() {
    let costGettingIncome, taxFreeAmount, taxBasePercentage;
    /**
     * Determination costs of getting income and free amount
     */
    elements.stationaryJob.checked ? costGettingIncome = 250.00 : costGettingIncome = 300.00;
    elements.freeAmount.checked ? taxFreeAmount = 43.76 : taxFreeAmount = 0;
    
    const taxBase = Math.round((this.payment - this.socialIns) - costGettingIncome);

    /**
     * Tax scale
     */
    if (taxBase > 85528) {
      taxBasePercentage = 0.32;
      this.PIT = Math.round(((14539.76 - taxFreeAmount) + ((taxBase - 85528) * taxBasePercentage)) - this.taxHealthIns);
    } else if (taxBase <= 85528) {
      taxBasePercentage = 0.17;
      this.PIT = Math.round(((taxBase * taxBasePercentage) - taxFreeAmount) - this.taxHealthIns);
    }
  }

  /**
   * Calculating netto payment 
   * if(elements.ageInputEmp.checked) person is above 26 year old and we calculating the tax and payment, else is under 26 year and we only calculating only the payment
   */
  calcNettoPayment() {
    if (elements.ageInputEmp.checked) {
      this.calcTax();
      this.netAmount = this.payment - this.socialIns - this.healthIns - this.PIT;
    } else {
      this.netAmountUnderAge = this.payment - this.socialIns - this.healthIns;
    }
  }
}