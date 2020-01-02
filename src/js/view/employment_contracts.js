import { elements } from './htmlElements';

export const getInput = () => parseInt(elements.salaryInput.value);
export const getAccidentInsInput = () => console.dir(elements.accidentInsInput.value);

// const clearContracts = () => {
//   elements.contractsDetail.innerHTML = '';
// };


export const controlerView = () => {
  switch (true) {
    
    case elements.contract.checked:

      elements.contract.parentNode.classList.add('active');
      elements.mandate.parentNode.classList.remove('active');
      elements.work.parentNode.classList.remove('active');

      elements.employment_checkbox.style.display = 'block';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.mandate.checked:

      elements.contract.parentNode.classList.remove('active');
      elements.mandate.parentNode.classList.add('active');
      elements.work.parentNode.classList.remove('active');

      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'block';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.work.checked:

      elements.contract.parentNode.classList.remove('active');
      elements.mandate.parentNode.classList.remove('active');
      elements.work.parentNode.classList.add('active');

      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'block';

      break;
    default:
      // console.log('some else');
  }
}

export const clearResults = () => {
  elements.employeeResults.innerHTML = '';
  elements.employerResults.innerHTML = '';
};

export const renderEmployeeResult = salary => {
  const markup = `
    <li>Brutto: ${salary.payment}</li>
    <li>Składka emerytalna: ${salary.employeeRetirementIns}</li>
    <li>Składka rentowa: ${salary.employeePensiontIns}</li>
    <li>Składka chorobowa: ${salary.diseaseIns}</li>
    <li>Składka zdrowotna: ${salary.healthIns}</li>
  `;
  elements.employeeResults.insertAdjacentHTML('beforeend', markup);
}

export const renderEmployerResult = salary => {
  const markup = `
    <li>Brutto: ${salary.payment}</li>
    <li>Składka emerytalna: ${salary.employerRetirementIns}</li>
    <li>Składka rentowa: ${salary.employerPensiontIns}</li>
    <li>Składka wypadkowa: ${salary.accidentIns}</li>
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
}




