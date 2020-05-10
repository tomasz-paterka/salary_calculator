export const elements = {
  // Main elements
  salaryInput: document.getElementById('salaryInput'),
  calcBtn: document.querySelector('.result_btn'),
  resultContainer: document.querySelector('.result-container'),
  employeeResults: document.querySelector('.employee-list'),
  employerResults: document.querySelector('.employer-list'),
  contractsDetail: document.querySelector('.contract-details'),
  contractsBtn: document.querySelectorAll('.contract-type__btn'),
  employment_checkbox: document.querySelector('.employment'),
  mandate_checkbox: document.querySelector('.mandate'),
  work_checkbox: document.querySelector('.work'),
  employee_header: document.querySelector('.employee_header'),
  employer_header: document.querySelector('.employer_header'),
  result_info: document.querySelector('.result_info'),
  iconContainer: document.querySelector('.result-btn__icon'),

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
  healthInsCheck: document.getElementById('healthIns'),
  mandateContractCosts20: document.getElementById('mandate_contract_20'),
  mandateContractCosts50: document.getElementById('mandate_contract_50'),

  // Work Contract elements
  workContract: document.getElementById('work_contract'),
  ageInputWork: document.getElementById('ageWork'),
  flatTax: document.getElementById('flatTax'),
  workContractCosts20: document.getElementById('work_contract_20'),
  workContractCosts50: document.getElementById('work_contract_50'),
};

export const getInput = () => parseFloat(elements.salaryInput.value.replace(',', '.'));

export const formatNumbers = object => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const salaryFixedObj = Object.assign({}, ...keys.map((key, i) => ({ [key]: values[i].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',') })));

  return salaryFixedObj;
};

export const convertInput = () => {
  if (elements.salaryInput.value !== '') {
    const markup = `
      <i class="icon ion-md-arrow-round-back"></i>
      <p>Przelicz</p>
    `;
    elements.iconContainer.insertAdjacentHTML('beforeend', markup);
  }
};

export const diseaseInsLimitInfo = obj => {
  if (obj.payment >= obj.diseaseInsLimit && elements.diseaseInsCheck.checked) {
    const diseaseInsLimitMarkup = `
      <p>W roku 2020 miesięczny limit podstawy wymiaru dobrowolnej składki na ubezpieczenie chorobowe wynosi ${obj.diseaseInsLimit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')} zł</p>
    `;
    elements.result_info.insertAdjacentHTML('beforeend', diseaseInsLimitMarkup);
  }
};

export const clearConvertInput = () => {
  elements.iconContainer.innerHTML = '';
};

export const controlerView = () => {
  switch (true) {
    
    case elements.employmentContract.checked:
      clearConvertInput();
      convertInput();
      elements.employmentContract.parentNode.classList.add('active');
      elements.mandateContract.parentNode.classList.remove('active');
      elements.workContract.parentNode.classList.remove('active');
      
      elements.employment_checkbox.style.display = 'block';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.mandateContract.checked:
      clearConvertInput();
      convertInput();
      elements.employmentContract.parentNode.classList.remove('active');
      elements.mandateContract.parentNode.classList.add('active');
      elements.workContract.parentNode.classList.remove('active');
      
      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'block';
      elements.work_checkbox.style.display = 'none';
      break;

    case elements.workContract.checked:
      clearConvertInput();
      convertInput();
      elements.employmentContract.parentNode.classList.remove('active');
      elements.mandateContract.parentNode.classList.remove('active');
      elements.workContract.parentNode.classList.add('active');
      
      elements.employment_checkbox.style.display = 'none';
      elements.mandate_checkbox.style.display = 'none';
      elements.work_checkbox.style.display = 'block';
      break;

    default:
  }
}

export const enterAmount = () => {
  const markup = `
    <p class="salary__enter-amount">Proszę wpisać kwotę wypłaty</p>
  `;
  elements.salaryInput.insertAdjacentHTML('afterend', markup);
};

export const clearEnterAmount = () => {
  const enterAmountTag = document.querySelector('.salary__enter-amount');
  if (enterAmountTag) {
    enterAmountTag.parentElement.removeChild(enterAmountTag)
  }
};

export const clearResults = () => {
  elements.employeeResults.innerHTML = '';
  elements.employerResults.innerHTML = '';
  elements.employee_header.innerHTML = '';
  elements.employer_header.innerHTML = '';
  elements.result_info.innerHTML = '';
};

export const laborFundInfo = obj =>  {
  if (obj.laborFund === '0,00') {
    const laborFundMarkup = `
      <p>Poniżej kwoty minimalnego wynagrodzenia, które wynosi ${obj.minimumSalary} zł <br> w roku 2020, nie liczymy składki na Fundusz Pracy.</p>
    `;
    elements.result_info.insertAdjacentHTML('afterbegin', laborFundMarkup);
  }
};