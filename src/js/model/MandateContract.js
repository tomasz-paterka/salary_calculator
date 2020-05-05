import { elements } from '../view/baseView';

export default class MandateContract {
  constructor(payment) {
    this.payment = payment
  }

  calcInsurance(accidentInsPercentage) {
    if (!accidentInsPercentage) {
      accidentInsPercentage = 1.67
    }
    this.minimumSalary = 2600.00;
    this.diseaseInsLimit = 13067.50;
    
    if (elements.socialInsCheck.checked) {
      this.employeeRetirementIns = ((this.payment * 9.76) / 100);
      this.employerRetirementIns = ((this.payment * 9.76) / 100);
      this.employeePensionIns = ((this.payment * 1.50) / 100);
      this.employerPensionIns = ((this.payment * 6.50) / 100);
      this.accidentIns = ((this.payment * accidentInsPercentage) / 100);
      this.socialIns = this.employeeRetirementIns + this.employeePensionIns;
      this.socialInsEmployer = this.employerRetirementIns + this.employerPensionIns;
      this.payment >= this.minimumSalary ? this.laborFund = ((this.payment * 2.45) / 100) : this.laborFund = 0;
      this.contributionFGSP = ((this.payment * 0.10) / 100);
    }

    if (elements.diseaseInsCheck.checked) {
      this.payment >= this.diseaseInsLimit ? this.diseaseIns = 320.15 : this.diseaseIns = ((this.payment * 2.45) / 100);
      !this.socialIns ? this.socialIns = 0 : this.socialIns += this.diseaseIns;
    }

    if (elements.healthInsCheck.checked) {
      if (!this.socialIns && this.diseaseIns) {
        this.healthIns = (((this.payment - this.diseaseIns) * 9.00) / 100);
        this.taxHealthIns = (((this.payment - this.diseaseIns) * 7.75) / 100);
      } else if (!this.socialIns && !this.diseaseIns)  {
        this.healthIns = ((this.payment * 9.00) / 100);
        this.taxHealthIns = ((this.payment * 7.75) / 100);
      } else {
        this.healthIns = (((this.payment - this.socialIns ) * 9.00) / 100);
        this.taxHealthIns = (((this.payment - this.socialIns ) * 7.75) / 100);
      }
    } 
    else {
      this.healthIns = 0;
      this.taxHealthIns = 0;
    }

    if (!this.socialInsEmployer) {
      this.employerCosts = this.payment;
    } else {
      this.employerCosts = this.payment + this.socialInsEmployer + this.accidentIns + this.laborFund + this.contributionFGSP;
    }
  }

  calcTax() {
    let costGettingIncome, costGettingIncomePercentage, taxBase;
    const taxBasePercentage = 0.17;

    if (elements.mandateContractCosts20.checked) {
      costGettingIncomePercentage = 0.2;
    } else if (elements.mandateContractCosts50.checked) {
      costGettingIncomePercentage = 0.5;
    }
    
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