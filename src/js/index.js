import '../scss/style.scss';
import * as employmentContractView from './view/employmentContractView';
import * as mandateContractView from './view/mandateContractView';
import EmploymentContract from './model/EmploymentContract';
import MandateContract from './model/MandateContract';
import { elements, getInput, controlerView, enterAmount, clearEnterAmount, clearResults } from './view/baseView';

const state = {};
window.s = state;

controlerView();
elements.contractsBtn.forEach(el => el.addEventListener('click', controlerView));

const controler = () => {
  let pay = getInput();
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

        employmentContractView.renderEmployeeResult(state.salary);
        employmentContractView.renderEmployerResult(state.salary);
        break;

      case elements.mandateContract.checked:
        accidentInsPercentage = mandateContractView.getAccidentInsInputMandate();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');
        
        state.salary = new MandateContract(pay);
        state.salary.calcInsurance(accidentInsPercentage);
        console.log(state.salary);
        // console.log(accidentInsPercentage);
        // console.log('mandate');
        break;

      case elements.workContract.checked:

        // console.log('work');
      default:
        // console.log('some else');
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

