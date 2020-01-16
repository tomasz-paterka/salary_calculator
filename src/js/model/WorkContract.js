import { elements } from '../view/baseView';

export default class WorkContract {
  constructor(payment) {
    this.payment = payment;
    this.employerCosts = this.payment;
  }

  calcTax() {
    let costGettingIncome, costGettingIncomePercentage, taxBase;
    
    if (elements.workContractCosts20.checked) {
      costGettingIncomePercentage = 0.2;
    } else if (elements.workContractCosts50.checked) {
      costGettingIncomePercentage = 0.5;
    }
    
    if (!elements.flatTax.checked) {
      costGettingIncome = Math.round(this.payment * costGettingIncomePercentage);
      taxBase = Math.round(this.payment - costGettingIncome);
    } else {
      taxBase = Math.round(this.payment);
    }

    this.PIT = Math.round(taxBase * 0.17);
  }

  calcNettoPayment() {
    if (elements.ageInputWork.checked) {
      this.calcTax();
      this.netAmount = this.payment - this.PIT;
    } else {
      this.netAmountUnderAge = this.payment;
    }
  }
}