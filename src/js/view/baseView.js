export const elements = {
  // Main elements
  salaryInput: document.getElementById('salaryInput'),
  calcBtn: document.querySelector('.result_btn'),
  resultContainer: document.querySelector('.result-container'),
  employeeResults: document.querySelector('.employee-list'),
  employerResults: document.querySelector('.employer-list'),
  contractsDetail: document.querySelector('.contract_details'),
  contractsBtn: document.querySelectorAll('.contracts_btn'),
  employment_checkbox: document.querySelector('.employment_checkbox'),
  mandate_checkbox: document.querySelector('.mandate_checkbox'),
  work_checkbox: document.querySelector('.work_checkbox'),

  // Employment Contract elements
  employmentContract: document.getElementById('employment_contract'),
  accidentInsInputEmp: document.getElementById('accidentInsEmp'),
  ageInputEmp: document.getElementById('ageEmp'),
  stationaryJob: document.getElementById('stationaryJob'),
  freeAmount: document.getElementById('freeAmount'),

  // Mandate Contract elements
  mandateContract: document.getElementById('mandate_contract'),
  accidentInsInputMan: document.getElementById('accidentInsMan'),
  ageInputMan: document.getElementById('ageMan'),
  socialInsCheck: document.getElementById('socialIns'),
  diseaseInsCheck: document.getElementById('diseaseIns'),

  // Work Contract elements
  workContract: document.getElementById('work_contract'),
};

export const getInput = () => parseFloat(elements.salaryInput.value.replace(',', '.'));

export const controlerView = () => {
  switch (true) {
    
    case elements.employmentContract.checked:
      elements.employmentContract.parentNode.classList.add('active');
      elements.mandateContract.parentNode.classList.remove('active');
      elements.workContract.parentNode.classList.remove('active');

      elements.employment_checkbox.style.display = 'block';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.mandateContract.checked:
      elements.employmentContract.parentNode.classList.remove('active');
      elements.mandateContract.parentNode.classList.add('active');
      elements.workContract.parentNode.classList.remove('active');

      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'block';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.workContract.checked:
      elements.employmentContract.parentNode.classList.remove('active');
      elements.mandateContract.parentNode.classList.remove('active');
      elements.workContract.parentNode.classList.add('active');

      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'block';
      break;

    default:
      // console.log('some else');
  }
}

export const enterAmount = () => {
  const markup = `
    <p class="enter_amount">Proszę wpisać kwotę wypłaty</p>
  `;
  elements.salaryInput.insertAdjacentHTML('afterend', markup);
};

export const clearEnterAmount = () => {
  const enterAmountTag = document.querySelector('.enter_amount');
  if (enterAmountTag) {
    enterAmountTag.parentElement.removeChild(enterAmountTag)
  }
};

export const clearResults = () => {
  elements.employeeResults.innerHTML = '';
  elements.employerResults.innerHTML = '';
};