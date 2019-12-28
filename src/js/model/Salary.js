export default class Salary {
  constructor(payment) {
    this.payment = payment.toFixed(2);
  }

  calcInsurance() {
    this.employeeRetirementIns = ((this.payment * 9.76) / 100).toFixed(2);
    this.employerRetirementIns = ((this.payment * 9.76) / 100).toFixed(2);
    this.employeePensiontIns = ((this.payment * 1.50) / 100).toFixed(2);
    this.employerPensiontIns = ((this.payment * 6.50) / 100).toFixed(2);
    this.diseaseIns = ((this.payment * 2.45) / 100).toFixed(2);
    this.healthIns = ((this.payment * 9.00) / 100).toFixed(2);
    this.taxHealthIns = ((this.payment * 7.75) / 100).toFixed(2);
    this.accidentIns = ((this.payment * 1.67) / 100).toFixed(2);
  };
};