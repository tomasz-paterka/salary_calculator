import { elements } from '../../view/baseView';

/** Class representing salary object */
class WorkContract {
  /**
   * @param {number} payment - salary from work
   */
  constructor(payment) {
    this.payment = payment;
    this.employerCosts = payment;
  }

  /**
   * Calculating salary tax,
   * determination costs of getting income,
   * the tax base depending on whether it is a flat-rate tax
   */
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

  /**
   * Calculating netto payment. 
   * If input over 26 years old is checked - person is above 26 year old and we calculating the tax and payment, else is under 26 year and we only calculating only the payment
   */
  calcNettoPayment() {
    if (elements.ageInputWork.checked) {
      this.calcTax();
      this.netAmount = this.payment - this.PIT;
    } else {
      this.netAmountUnderAge = this.payment;
    }
  }
}

export default WorkContract;