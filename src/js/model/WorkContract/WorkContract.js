import { elements } from '../../view/baseView';

/** Class representing salary object */
export default class WorkContract {
  /**
   * @param  {number} payment
   */
  constructor(payment) {
    this.payment = payment;
    this.employerCosts = payment;
  }

  /**
   * Calculating salary tax
   */
  calcTax() {
    let costGettingIncome, costGettingIncomePercentage, taxBase;
    
    /**
     * Determination costs of getting income
     */
    if (elements.workContractCosts20.checked) {
      costGettingIncomePercentage = 0.2;
    } else if (elements.workContractCosts50.checked) {
      costGettingIncomePercentage = 0.5;
    }
    
    /**
     * Determining the tax base depending on whether it is a flat-rate tax
     */
    if (!elements.flatTax.checked) {
      costGettingIncome = Math.round(this.payment * costGettingIncomePercentage);
      taxBase = Math.round(this.payment - costGettingIncome);
    } else {
      taxBase = Math.round(this.payment);
    }

    this.PIT = Math.round(taxBase * 0.17);
  }

  /**
   * Calculating netto payment 
   * if(elements.ageInputWork.checked) person is above 26 year old so we calculate the tax and payment, else is under 26 year and calculate only the payment
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