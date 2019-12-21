import '../scss/style.scss';
import * as contracts from './view/employment_contracts';
import Salary from './model/Salary';

document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13 || e.which === 13) {
    let pay = contracts.getInput();
    let salary = new Salary(pay);
    
    salary.calcInsurance();
    console.log(salary);
  } 
});