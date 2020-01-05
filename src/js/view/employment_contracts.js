import { elements } from './htmlElements';

export const getInput = () => parseFloat(elements.salaryInput.value);
export const getAccidentInsInputEmployment = () => elements.accidentInsInputEmp.value;
export const getAccidentInsInputMandate = () => elements.accidentInsInputMan.value;

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
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka rentowa: ${salary.employeePensiontIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employeeResults.insertAdjacentHTML('beforeend', markup);
}

export const renderEmployerResult = salary => {
  const markup = `
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka emerytalna: ${salary.employerRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka rentowa: ${salary.employerPensiontIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Składka wypadkowa: ${salary.accidentIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
}

export const enterAmount = () => {
  const markup = `
    <p class="enter_amount">Proszę wpisać kwotę wypłaty</p>
  `;
  elements.salaryInput.insertAdjacentHTML('afterend', markup);
};

export const clearEnterAmount = () => {
  const enterAmount = document.querySelector('.enter_amount');
  if (enterAmount) {
    enterAmount.parentElement.removeChild(enterAmount)
  }
};