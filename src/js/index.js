import '../scss/style.scss';
import * as contracts from './view/employment_contracts';
import Salary from './model/Salary';
import { elements } from './view/htmlElements';

const addNewSalary = (pay, salary) => {
  pay = contracts.getInput();
  salary = new Salary(pay);
  
  salary.calcInsurance();
  console.log(salary);
  return salary;
}

elements.calcBtn.addEventListener('click', addNewSalary);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    addNewSalary();
  } 
});



