import '../scss/style.scss';
import * as employmentContractView from './view/employmentContractView';
import * as mandateContractView from './view/mandateContractView';
import * as workContractView from './view/workContractView';
import EmploymentContract from './model/EmploymentContract';
import MandateContract from './model/MandateContract';
import WorkContract from './model/WorkContract';
import { elements, getInput, controlerView, enterAmount, clearEnterAmount, clearResults, clearConvertInput, formatNumbers, diseaseInsLimitInfo } from './view/baseView';

const state = {};

controlerView();
elements.contractsBtn.forEach(el => el.addEventListener('click', controlerView));

const controler = () => {
  const pay = getInput();
  let accidentInsPercentage, salaryFixedObj;

  if (pay) {
    clearResults();
    clearEnterAmount();
    
    elements.resultContainer.style = 'visibility: visible';

    switch (true) {
      
      case elements.employmentContract.checked:
        accidentInsPercentage = employmentContractView.getAccidentInsInputEmployment();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');

        state.salary = new EmploymentContract(pay);
        state.salary.calcInsurance(accidentInsPercentage);
        state.salary.calcNettoPayment();

        salaryFixedObj = formatNumbers(state.salary)
        employmentContractView.renderEmployeeResult(salaryFixedObj);
        employmentContractView.renderEmployerResult(salaryFixedObj);
        clearConvertInput();
        break;

      case elements.mandateContract.checked:
        accidentInsPercentage = mandateContractView.getAccidentInsInputMandate();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');
        
        state.salary = new MandateContract(pay);
        state.salary.calcInsurance(accidentInsPercentage);
        state.salary.calcNettoPayment();
        diseaseInsLimitInfo(state.salary);
        
        salaryFixedObj = formatNumbers(state.salary)
        mandateContractView.renderEmployeeResult(salaryFixedObj);
        mandateContractView.renderEmployerResult(salaryFixedObj);
        clearConvertInput();
        break;

      case elements.workContract.checked:
        state.salary = new WorkContract(pay);
        state.salary.calcNettoPayment();

        salaryFixedObj = formatNumbers(state.salary)
        workContractView.renderEmployeeResult(salaryFixedObj);
        workContractView.renderEmployerResult(salaryFixedObj);
        clearConvertInput();
        break;
      default:
    }
  } 
  else if (!pay) {
    const enterAmountTag = document.querySelector('.enter_amount');
    if (!enterAmountTag) {
      enterAmount();
    }
  } 
}

elements.calcBtn.addEventListener('click', controler);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    controler();
  } 
});

