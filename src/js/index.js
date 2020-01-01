import '../scss/style.scss';
import * as contracts from './view/employment_contracts';
import Salary from './model/Salary';
import { elements } from './view/htmlElements';

const state = {};
window.s = state;

const controler = () => {
  let pay = contracts.getInput();


  if (pay) {
    contracts.clearResults();
    elements.resultContainer.style = 'visibility: visible';

    switch (true) {

      case elements.contract.checked:
        
        console.log('employment');
        state.salary = new Salary(pay);
        state.salary.calcInsurance();
        contracts.renderEmployeeResult(state.salary);
        contracts.renderEmployerResult(state.salary);
        break;
      case elements.mandate.checked:

        console.log('mandate');
        break;
      case elements.work.checked:

        console.log('work');
      default:
        // console.log('some else');
    }

  } else if (!pay) {
    console.log('wpisz kwotę wypłaty')
  }
}



contracts.controlerView();
elements.agreements.forEach(el => el.addEventListener('click', contracts.controlerView))

elements.calcBtn.addEventListener('click', controler);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    controler();
  } 
});

