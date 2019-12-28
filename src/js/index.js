import '../scss/style.scss';
import * as contracts from './view/employment_contracts';
import Salary from './model/Salary';
import { elements } from './view/htmlElements';

const state = {};
window.s = state;


const controler = () => {
  let pay = contracts.getInput();
  
  if (pay) {
    state.salary = new Salary(pay);
    console.log(state.salary);
    contracts.clearResults();
    state.salary.calcInsurance();

    elements.resultContainer.style = 'visibility: visible';
    contracts.renderEmployeeResult(state.salary);
    contracts.renderEmployerResult(state.salary);
  } else if (!pay) {
    console.log('wpisz kwotę wypłaty')
  }
}

elements.calcBtn.addEventListener('click', controler);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    controler();
  } 
});

