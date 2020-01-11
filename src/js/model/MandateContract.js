import { elements } from '../view/baseView';

export default class MandateContract {
  constructor(payment) {
    this.payment = payment
  }

  calcInsurance(accidentInsPercentage) {
    !accidentInsPercentage ? accidentInsPercentage = 1.67 : accidentInsPercentage = accidentInsPercentage;

    if (elements.socialInsCheck.checked) {
      this.employeeRetirementIns = ((this.payment * 9.76) / 100);
      this.employerRetirementIns = ((this.payment * 9.76) / 100);
      this.employeePensionIns = ((this.payment * 1.50) / 100);
      this.employerPensionIns = ((this.payment * 6.50) / 100);
      this.accidentIns = ((this.payment * accidentInsPercentage) / 100);
      this.socialIns = this.employeeRetirementIns + this.employeePensionIns;
      this.socialInsEmployer = this.employerRetirementIns + this.employerPensionIns;
      this.payment >= 2600.00 ? this.laborFund = ((this.payment * 2.45) / 100) : this.laborFund = 0;
      this.contributionFGSP = ((this.payment * 0.10) / 100);
    }

    if (elements.diseaseInsCheck.checked) {
      this.diseaseIns = ((this.payment * 2.45) / 100);
      this.socialIns += this.diseaseIns;
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
    } else {
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
    let costGettingIncome;
    let taxBase;
    if (!this.socialIns && this.diseaseIns) {
      costGettingIncome = Math.round((this.payment - this.diseaseIns) * 0.2);
      taxBase = Math.round((this.payment - this.diseaseIns) - costGettingIncome);
    } 
    else if ((this.socialIns && !this.diseaseIns) || (this.socialIns && this.diseaseIns && !this.healthIns) || (this.socialIns && this.diseaseIns && this.healthIns)) {
      costGettingIncome = Math.round((this.payment - this.socialIns) * 0.2);
      taxBase = Math.round((this.payment - this.socialIns) - costGettingIncome);
    } 
    else {
      costGettingIncome = Math.round(this.payment * 0.2);
      taxBase = Math.round(this.payment - costGettingIncome);
    }
    console.log(costGettingIncome);
    console.log(taxBase);
    this.PIT = Math.round((taxBase * 0.17) - this.taxHealthIns);
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
    } else {
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