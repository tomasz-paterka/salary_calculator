export default class Salary {
  constructor(payment) {
    this.payment = payment
  }

  calcInsurance(accidentInsPercentage) {
    !accidentInsPercentage ? accidentInsPercentage = 1.67 : accidentInsPercentage = accidentInsPercentage;

    this.employeeRetirementIns = ((this.payment * 9.76) / 100);
    this.employerRetirementIns = ((this.payment * 9.76) / 100);
    this.employeePensiontIns = ((this.payment * 1.50) / 100);
    this.employerPensiontIns = ((this.payment * 6.50) / 100);
    this.diseaseIns = ((this.payment * 2.45) / 100);
    this.socialIns = this.employeeRetirementIns + this.employeePensiontIns + this.diseaseIns;
    this.healthIns = (((this.payment - this.socialIns ) * 9.00) / 100);
    this.taxHealthIns = (((this.payment - this.socialIns ) * 7.75) / 100);
    this.accidentIns = ((this.payment * accidentInsPercentage) / 100);
  };

  calcTax() {
    const taxBase = Math.round((this.payment - (this.employeeRetirementIns + this.employeePensiontIns + this.diseaseIns)) - 250.00);
    this.PIT = Math.round(((taxBase * 0.17) - 43.76) - this.taxHealthIns);
  }

  calcNettoPayment() {
    this.netAmount = this.payment - this.socialIns - this.healthIns - this.PIT;
    console.log(this.netAmount);
  }
};

// kwota wolna 43,76 m-c, cała 525,12

