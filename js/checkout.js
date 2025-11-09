
const REGEX = {
	text: /^[a-zA-Z]{3,}$/,
	phone: /^\d{9}$/,
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
	address: /^[\w\s,.-]{3,}$/,
	email: /^\S+@\S+\.\S+$/
}

/**
 * @param {HTMLElement} inputElement
 * @param {boolean} isValid 
 * @param {HTMLElement} errorElement 
 * @returns {boolean} 
 */
const toggleInputError = (inputElement, isValid, errorElement) => {
    if (!isValid) {
        inputElement.classList.remove('is-valid');
        inputElement.classList.add('is-invalid');
		if(errorElement){
			errorElement.style.display ="block"
		}
    } 
    else {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
		if (errorElement) {
            errorElement.style.display = 'none';
    	}
	}   
    return isValid;
}

const validate = () => {
	let error = 0;
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fPassword = document.getElementById("fPassword")
	const fAddress = document.getElementById("fAddress");
	const fPhone = document.getElementById("fPhone");

	const errorName = document.getElementById("errorName");
	const errorLastN = document.getElementById("errorLastN");
	const errorEmail = document.getElementById("errorEmail");
	const errorPassword = document.getElementById("errorPassword");
	const errorAddress = document.getElementById("errorAddress");
	const errorPhone = document.getElementById("errorPhone");
	
	const isNameValid = REGEX.text.test(fName.value);
	if (!toggleInputError(fName, isNameValid, errorName)){
		error++;
	}

	const isLastNameValid = REGEX.text.test(fLastN.value);
	if (!toggleInputError(fLastN, isLastNameValid, errorLastN)){
		error++;
	}

	const isEmailFormatValid = REGEX.email.test(fEmail.value)
	if (!toggleInputError(fEmail, isEmailFormatValid, errorEmail)){
		error++
	}

	const isPasswordValid = REGEX.password.test(fPassword.value)
	if (!toggleInputError(fPassword, isPasswordValid, errorPassword)){
		error++
	}

	const isAddressValid = REGEX.address.test(fAddress.value);
	if (!toggleInputError(fAddress, isAddressValid, errorAddress)){
		error++;
	}

	const isPhoneValid = REGEX.phone.test(fPhone.value)
	if (!toggleInputError(fPhone, isPhoneValid, errorPhone)){
		error++
	}

	if(error > 0){
    return false; 
		} else {
    return true; 
	}

}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const isValid = validate(); 
        });
    }
});