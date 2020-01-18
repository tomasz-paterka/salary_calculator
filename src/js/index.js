import '../scss/style.scss';
import * as employmentContractView from './view/employmentContractView';
import * as mandateContractView from './view/mandateContractView';
import * as workContractView from './view/workContractView';
import EmploymentContract from './model/EmploymentContract';
import MandateContract from './model/MandateContract';
import WorkContract from './model/WorkContract';
import { elements, getInput, controlerView, enterAmount, clearEnterAmount, clearResults } from './view/baseView';

const state = {};
window.s = state;

controlerView();
elements.contractsBtn.forEach(el => el.addEventListener('click', controlerView));

const controler = () => {
  const pay = getInput();
  let accidentInsPercentage;

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
        console.log(state.salary);
        employmentContractView.renderEmployeeResult(state.salary);
        employmentContractView.renderEmployerResult(state.salary);
        break;

      case elements.mandateContract.checked:
        accidentInsPercentage = mandateContractView.getAccidentInsInputMandate();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');
        
        state.salary = new MandateContract(pay);
        state.salary.calcInsurance(accidentInsPercentage);
        state.salary.calcNettoPayment();
        console.log(state.salary);
        mandateContractView.renderEmployeeResult(state.salary);
        mandateContractView.renderEmployerResult(state.salary);
        break;

      case elements.workContract.checked:
        state.salary = new WorkContract(pay);
        state.salary.calcNettoPayment();

        workContractView.renderEmployeeResult(state.salary);
        workContractView.renderEmployerResult(state.salary);
        
      default:
    }
    

  } else if (!pay) {
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

