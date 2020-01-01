import { elements } from './htmlElements';

export const getInput = () => parseInt(elements.salaryInput.value);

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

export const controlerView = () => {
  let markup;
  
  switch (true) {
    
    case elements.contract.checked:
     
      console.log('employment');
      markup = `
        <div>
          Szczegóły umowy
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('beforebegin', markup);
      break;

    case elements.mandate.checked:
      markup = `
        <div>
          Szczegóły zlecenia
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('beforebegin', markup);
      break;

    case elements.work.checked:
      markup = `
        <div>
          Szczegóły dzieła
        </div>
      `;
      elements.contractsDetail.insertAdjacentHTML('beforebegin', markup);
      break;
    default:
      // console.log('some else');
  }
}


