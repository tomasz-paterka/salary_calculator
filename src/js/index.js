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
  
  if (pay) {
    contracts.clearResults();
    contracts.clearEnterAmount();
    
    elements.resultContainer.style = 'visibility: visible';
    
    switch (true) {
      
      case elements.contract.checked:
        
        // console.log('employment');
        state.salary = new Salary(pay);
        contracts.getAccidentInsInput();
        state.salary.calcInsurance();
        contracts.renderEmployeeResult(state.salary);
        contracts.renderEmployerResult(state.salary);
        break;
      case elements.mandate.checked:

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

