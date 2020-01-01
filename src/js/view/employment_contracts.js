import { elements } from './htmlElements';

export const getInput = () => parseInt(elements.salaryInput.value);

const clearContracts = () => {
  elements.contractsDetail.innerHTML = '';
};


export const controlerView = () => {
  clearContracts();

  let markup;
  switch (true) {
    
    case elements.contract.checked:

      elements.contract.parentNode.classList.add('active');
      elements.mandate.parentNode.classList.remove('active');
      elements.work.parentNode.classList.remove('active');
      console.log(elements.contract);
      markup = `
        <div>
          Szczegóły umowy
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.mandate.checked:

      elements.contract.parentNode.classList.remove('active');
      elements.mandate.parentNode.classList.add('active');
      elements.work.parentNode.classList.remove('active');

      console.log(elements.mandate);
      markup = `
        <div>
          Szczegóły zlecenia
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.work.checked:

      elements.contract.parentNode.classList.remove('active');
      elements.mandate.parentNode.classList.remove('active');
      elements.work.parentNode.classList.add('active');
      console.log(elements.work);
      markup = `
        <div>
          Szczegóły dzieła
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('afterbegin', markup);
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
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
}




