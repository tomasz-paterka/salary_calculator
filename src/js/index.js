import '../scss/style.scss';
import * as contracts from './view/employment_contracts';
import Salary from './model/Salary';
import { elements } from './view/htmlElements';

const state = {};
window.s = state;

contracts.controlerView();
elements.contractsBtn.forEach(el => el.addEventListener('click', contracts.controlerView));

const controler = () => {
  let pay = contracts.getInput();
  let accidentInsPercentage;

  if (pay) {
    contracts.clearResults();
    contracts.clearEnterAmount();
    
    elements.resultContainer.style = 'visibility: visible';

    switch (true) {
      
      case elements.contract.checked:
        accidentInsPercentage = contracts.getAccidentInsInputEmployment();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');

        state.salary = new Salary(pay);
        state.salary.calcInsurance(accidentInsPercentage);
        state.salary.calcTax();

        contracts.renderEmployeeResult(state.salary);
        contracts.renderEmployerResult(state.salary);
        break;
      case elements.mandate.checked:
        accidentInsPercentage = contracts.getAccidentInsInputMandate();
        accidentInsPercentage = accidentInsPercentage.replace(/,/g, '.');
        // console.log(accidentInsPercentage);
        // console.log('mandate');
        break;
      case elements.work.checked:

        // console.log('work');
      default:
        // console.log('some else');
    }
    

  } else if (!pay) {
    const enterAmount = document.querySelector('.enter_amount');
    if (!enterAmount) {
      contracts.enterAmount();
    }
  } 
}

elements.calcBtn.addEventListener('click', controler);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    controler();
  } 
});

