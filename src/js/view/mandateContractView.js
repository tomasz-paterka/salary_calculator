/** @module mandateContractView */
import { elements, laborFundInfo } from './baseView';

/**
 * Gets percentage of accident insurance value
 * @function
 * @returns {string}
 */
export const getAccidentInsInputMandate = () => elements.accidentInsInputMan.value;

/**
 * Function that renders employee results
 * @function
 * @param {Object} salary - salary object
 * @returns {HTMLElement} - created markup
 */
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
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      break;

    /* Cases under 26 year old */
    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka chorobowa: ${salary.diseaseIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
      `;
      markupUnderAge = `
        <li>Netto: ${salary.netAmountUnderAge}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
      elements.employeeResults.insertAdjacentHTML('beforeend', markupUnderAge);
      break;

    default:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(-)Składka emerytalna: ${salary.employeeRetirementIns}</li>
        <li>(-)Składka rentowa: ${salary.employeePensionIns}</li>
        <li>(-)Składka zdrowotna: ${salary.healthIns}</li>
        <li>(-)Zaliczka PIT: ${salary.PIT}</li>
        <li>Netto: ${salary.netAmount}</li>
      `;
      elements.employeeResults.insertAdjacentHTML('afterbegin', markup);
  }
};

/**
 * Function that renders employer results
 * @function
 * @param {Object} salary - salary object
 * @returns {HTMLElement} - created markup
 */
export const renderEmployerResult = salary => {
  const headerMarkup = `
    <p>Zleceniodawca</p>
  `;
  elements.employer_header.insertAdjacentHTML('afterbegin', headerMarkup);

  laborFundInfo(salary);

  let markup;

  switch (true) {
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:    /* Cases under 26 year old */
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && !elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && !elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:   /* Cases above 26 year old */
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case !elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>Koszty pracodawcy: ${salary.employerCosts}</li>
      `;
      elements.employerResults.insertAdjacentHTML('beforeend', markup);
      break;

    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case elements.socialInsCheck.checked && elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    case elements.socialInsCheck.checked && !elements.diseaseInsCheck.checked && !elements.healthInsCheck.checked && elements.ageInputMan.checked:
    default:
      markup = `
        <li>Brutto: ${salary.payment}</li>
        <li>(+)Składka emerytalna: ${salary.employerRetirementIns}</li>
        <li>(+)Składka rentowa: ${salary.employerPensionIns}</li>
        <li>(+)Składka wypadkowa: ${salary.accidentIns}</li>
        <li>(+)Fundusz Pracy: ${salary.laborFund}</li>
        <li>(+)FGŚP: ${salary.contributionFGSP}</li>
        <li>Koszty pracodawcy: ${salary.employerCosts}</li>
      `;
      elements.employerResults.insertAdjacentHTML('beforeend', markup);
  }
};