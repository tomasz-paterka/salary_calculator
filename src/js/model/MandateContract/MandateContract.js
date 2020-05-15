import { elements } from '../../view/baseView';
import { retirementInsPercentage,
  employeePensionInsPercentage, 
  employerPensionInsPercentage, 
  diseaseInsPercentage, 
  healthInsPercentage, 
  taxHealthInsPercentage, 
  laborFundPercentage, 
  percentageOfFGSP,
  minimumSalary } from '../insurancePercentages';

/** Class representing salary object */
export default class MandateContract {
  /**
   * @param {number} payment
   */
  constructor(payment) {
    this.payment = payment
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
    
    /**
     * if(elements.socialInsCheck.checked) calculate social insurances 
     */
    if (elements.socialInsCheck.checked) {
      this.employeeRetirementIns = ((payment * retirementInsPercentage) / 100);
      this.employerRetirementIns = ((payment * retirementInsPercentage) / 100);
      this.employeePensionIns = ((payment * employeePensionInsPercentage) / 100);
      this.employerPensionIns = ((payment * employerPensionInsPercentage) / 100);
      this.accidentIns = ((payment * accidentInsPercentage) / 100);
      this.socialIns = this.employeeRetirementIns + this.employeePensionIns;
      this.socialInsEmployer = this.employerRetirementIns + this.employerPensionIns;
      payment >= minimumSalary ? this.laborFund = ((payment * laborFundPercentage) / 100) : this.laborFund = 0;
      this.contributionFGSP = ((payment * percentageOfFGSP) / 100);
    }

    /**
     * if(elements.diseaseInsCheck.checked) calculate disease insurance and check payment limit 
     */
    this.diseaseInsLimit = 13067.50;
    if (elements.diseaseInsCheck.checked) {
      payment >= this.diseaseInsLimit ? this.diseaseIns = 320.15 : this.diseaseIns = ((this.payment * diseaseInsPercentage) / 100);
      !this.socialIns ? this.socialIns = 0 : this.socialIns += this.diseaseIns;
    }
    
    /**
     * if(elements.healthInsCheck.checked) calculate health insurance and the part that we deduct from tax
     */
    if (elements.healthInsCheck.checked) {
      if (!this.socialIns && this.diseaseIns) {
        this.healthIns = (((payment - this.diseaseIns) * healthInsPercentage) / 100);
        this.taxHealthIns = (((payment - this.diseaseIns) * taxHealthInsPercentage) / 100);
      } else if (!this.socialIns && !this.diseaseIns)  {
        this.healthIns = ((payment * healthInsPercentage) / 100);
        this.taxHealthIns = ((payment * taxHealthInsPercentage) / 100);
      } else {
        this.healthIns = (((payment - this.socialIns ) * healthInsPercentage) / 100);
        this.taxHealthIns = (((payment - this.socialIns ) * taxHealthInsPercentage) / 100);
      }
    } else {
      this.healthIns = 0;
      this.taxHealthIns = 0;
    }

    if (!this.socialInsEmployer) {
      this.employerCosts = payment;
    } else {
      this.employerCosts = payment + this.socialInsEmployer + this.accidentIns + this.laborFund + this.contributionFGSP;
    }
  }

  /**
   * Calculating salary tax
   */
  calcTax() {
    let costGettingIncome, costGettingIncomePercentage, taxBase;
    const taxBasePercentage = 0.17;

    /**
     * Determination costs of getting income
     */
    if (elements.mandateContractCosts20.checked) {
      costGettingIncomePercentage = 0.2;
    } else if (elements.mandateContractCosts50.checked) {
      costGettingIncomePercentage = 0.5;
    }

    /**
     * Determination of the tax base dependent on selected insurances
     */
    if (!this.socialIns && this.diseaseIns) {
      costGettingIncome = Math.round((this.payment - this.diseaseIns) * costGettingIncomePercentage);
      taxBase = Math.round((this.payment - this.diseaseIns) - costGettingIncome);
    } 
    else if (this.socialIns && !this.diseaseIns || this.socialIns && this.diseaseIns && !this.healthIns || this.socialIns && this.diseaseIns && this.healthIns) {
      costGettingIncome = Math.round((this.payment - this.socialIns) * costGettingIncomePercentage);
      taxBase = Math.round((this.payment - this.socialIns) - costGettingIncome);
    } 
    else {
      costGettingIncome = Math.round(this.payment * costGettingIncomePercentage);
      taxBase = Math.round(this.payment - costGettingIncome);
    }
    this.PIT = Math.round((taxBase * taxBasePercentage) - this.taxHealthIns);
  }

  /**
   * Calculating netto payment 
   * if(elements.ageInputMan.checked) person is above 26 year old so we calculate the tax and payment, else is under 26 year and calculate only the payment
   */
  calcNettoPayment() {
    if (elements.ageInputMan.checked) {
      this.calcTax();
      if (!this.socialIns && this.diseaseIns) {
        this.netAmount = this.payment - this.diseaseIns - this.healthIns - this.PIT;
      } else if (!this.socialIns && !this.diseaseIns) {
        this.netAmount = this.payment - this.healthIns - this.PIT;
      } else if (!this.socialIns && !this.diseaseIns && !this.healthIns) {
        this.netAmount = this.payment - this.PIT;
      } else {
        this.netAmount = this.payment - this.socialIns - this.healthIns - this.PIT;
      }
    } 
    else {
      if (!this.socialIns && this.diseaseIns) {
        this.netAmountUnderAge = this.payment - this.diseaseIns - this.healthIns;
      } else if (!this.socialIns && !this.diseaseIns) {
        this.netAmountUnderAge = this.payment - this.healthIns;
      } else if (!this.socialIns && !this.diseaseIns && !this.healthIns) {
        this.netAmountUnderAge = this.payment;
      } else {
        this.netAmountUnderAge = this.payment - this.socialIns - this.healthIns;
      }
    }
  }
}