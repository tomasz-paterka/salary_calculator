export default class Salary {
  constructor(payment) {
    this.payment = payment;
  }

  calcInsurance() {
    this.socialIns = parseFloat((((this.payment * (100 * 0.1952)) / 2) / 100).toFixed(2));
    
    console.log(this.socialIns);
  }
};