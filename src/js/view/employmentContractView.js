import { elements } from './baseView';

export const getAccidentInsInputEmployment = () => elements.accidentInsInputEmp.value;

export const renderEmployeeResult = salary => {
  const markup = `
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
  
  if (elements.ageInputEmp.checked) {
    const markupAboveAge = `
      <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    `;
    elements.employeeResults.insertAdjacentHTML('beforeend', markupAboveAge);
  } else {
    const markupUnderAge = `
      <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    `;
    elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
  }
};

export const renderEmployerResult = salary => {
  const markup = `
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(+)Składka emerytalna: ${salary.employerRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(+)Składka rentowa: ${salary.employerPensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(+)Składka wypadkowa: ${salary.accidentIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(+)Fundusz Pracy: ${salary.laborFund.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>(+)FGŚP: ${salary.contributionFGSP.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Koszty pracodawcy: ${salary.employerCosts.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
};

