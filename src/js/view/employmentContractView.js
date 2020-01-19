import { elements, laborFundInfo } from './baseView';

export const getAccidentInsInputEmployment = () => elements.accidentInsInputEmp.value;

export const renderEmployeeResult = salary => {
  const headerMarkup = `
    <p>Pracownik</p>
  `;
  elements.employee_header.insertAdjacentHTML('afterbegin', headerMarkup);

  const markup = `
    <li>Brutto: ${salary.payment}</li>
    <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
    <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
    <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
    <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
  `;
  elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
  
  if (elements.ageInputEmp.checked) {
    const markupAboveAge = `
      <li>(-)Zaliczka PIT: ${salary.PIT}</li>
      <li>Netto: ${salary.netAmount}</li>
    `;
    elements.employeeResults.insertAdjacentHTML('beforeend', markupAboveAge);
  } else {
    const markupUnderAge = `
      <li>Netto: ${salary.netAmountUnderAge}</li>
    `;
    elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
  }
};

export const renderEmployerResult = salary => {
  const headerMarkup = `
    <p>Pracodawca</p>
  `;
  elements.employer_header.insertAdjacentHTML('afterbegin', headerMarkup);

  laborFundInfo(salary);

  const markup = `
    <li>Brutto: ${salary.payment}</li>
    <li>(+)Składka emerytalna: ${salary.employerRetirementIns}</li>
    <li>(+)Składka rentowa: ${salary.employerPensionIns}</li>
    <li>(+)Składka wypadkowa: ${salary.accidentIns}</li>
    <li>(+)Fundusz Pracy: ${salary.laborFund}</li>
    <li>(+)FGŚP: ${salary.contributionFGSP}</li>
    <li>Koszty pracodawcy: ${salary.employerCosts}</li>
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
};

