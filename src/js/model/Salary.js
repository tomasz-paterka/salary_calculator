import { elements } from '../view/htmlElements';

export default class Salary {
  constructor(payment) {
    this.payment = payment
  }

  calcInsurance(accidentInsPercentage) {
    !accidentInsPercentage ? accidentInsPercentage = 1.67 : accidentInsPercentage = accidentInsPercentage;

    this.employeeRetirementIns = ((this.payment * 9.76) / 100);
    this.employerRetirementIns = ((this.payment * 9.76) / 100);
    this.employeePensionIns = ((this.payment * 1.50) / 100);
    this.employerPensionIns = ((this.payment * 6.50) / 100);
    this.diseaseIns = ((this.payment * 2.45) / 100);
    this.socialIns = this.employeeRetirementIns + this.employeePensionIns + this.diseaseIns;
    this.healthIns = (((this.payment - this.socialIns ) * 9.00) / 100);
    this.taxHealthIns = (((this.payment - this.socialIns ) * 7.75) / 100);
    this.accidentIns = ((this.payment * accidentInsPercentage) / 100);
    this.laborFund = ((this.payment * 2.45) / 100);
    this.contributionFGSP = ((this.payment * 0.10) / 100);
    this.employerCosts = this.payment + this.employerRetirementIns + this.employerPensionIns + this.accidentIns + this.laborFund + this.contributionFGSP;
  };

  calcTax() {
    let costGettingIncome, taxFreeAmount;
    elements.stationaryJob.checked ? costGettingIncome = 250.00 : costGettingIncome = 300.00;
    elements.freeAmount.checked ? taxFreeAmount = 43.76 : taxFreeAmount = 0;
    
    const taxBase = Math.round((this.payment - (this.employeeRetirementIns + this.employeePensionIns + this.diseaseIns)) - costGettingIncome);
    this.PIT = Math.round(((taxBase * 0.17) - taxFreeAmount) - this.taxHealthIns);
  };

  calcNettoPayment() {
    if (elements.ageInputEmp.checked) {
      this.calcTax();
      this.netAmount = this.payment - this.socialIns - this.healthIns - this.PIT;
    } else {
      this.netAmountUnderAge = this.payment - this.socialIns - this.healthIns;
    }
  }
};