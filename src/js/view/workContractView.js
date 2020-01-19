import { elements } from './baseView';

const flatTaxInfo = () => {
  if (elements.flatTax.checked) {
    const flatTaxInfoMarkup = `
      <p>Przy zryczałtowanym podatku dochodowym nie odejmujemy kosztów uzyskania przychodu.</p>
    `;
    elements.result_info.insertAdjacentHTML('afterbegin', flatTaxInfoMarkup);
  }
}

export const renderEmployeeResult = salary => {
  flatTaxInfo();

  const headerMarkup = `
    <p>Wykonawca</p>
  `;
  elements.employee_header.insertAdjacentHTML('afterbegin', headerMarkup);

  const markup = `
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
  
  if (elements.ageInputWork.checked) {
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
  const headerMarkup = `
    <p>Zleceniodawca</p>
  `;
  elements.employer_header.insertAdjacentHTML('afterbegin', headerMarkup);

  const markup = `
    <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
    <li>Koszty pracodawcy: ${salary.employerCosts.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
  `;
  elements.employerResults.insertAdjacentHTML('beforeend', markup);
};