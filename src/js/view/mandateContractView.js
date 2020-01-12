import { elements } from './baseView';

export const getAccidentInsInputMandate = () => elements.accidentInsInputMan.value;

export const renderEmployeeResult = salary => {
  let markup, markupUnderAge;

  const headerMarkup = `
    <p>Zleceniobiorca</p>
  `;
  elements.employee_header.insertAdjacentHTML('afterbegin', headerMarkup);

  switch (true) {
    /* Cases above 26 year old */
    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
            <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
            <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
            `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

      /* Cases under 26 year old */
    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
          <li>(-)Składka chorobowa: ${salary.diseaseIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
          <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      markupUnderAge = `
          <li>Netto: ${salary.netAmountUnderAge.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    default:
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Netto: ${salary.netAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
  }
};

export const renderEmployerResult = salary => {
  const headerMarkup = `
    <p>Zleceniodawca</p>
  `;
  elements.employer_header.insertAdjacentHTML('afterbegin', headerMarkup);

  let markup, defaultEmployerMarkup;

  switch (true) {
/* Cases under 26 year old */
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:  
/* Cases above 26 year old */
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:    
      markup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Koszty pracodawcy: ${salary.employerCosts.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employerResults.insertAdjacentHTML('beforeend', markup);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    default:
      defaultEmployerMarkup = `
        <li>Brutto: ${salary.payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(+)Składka emerytalna: ${salary.employerRetirementIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(+)Składka rentowa: ${salary.employerPensionIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(+)Składka wypadkowa: ${salary.accidentIns.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(+)Fundusz Pracy: ${salary.laborFund.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>(+)FGŚP: ${salary.contributionFGSP.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
        <li>Koszty pracodawcy: ${salary.employerCosts.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',')}</li>
      `;
      elements.employerResults.insertAdjacentHTML('beforeend', defaultEmployerMarkup);
  }
};