const Phone = {}

Phone.onPhonePaste = function (e, setInput) {
    var input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
        var pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
            setInput(prev => ({...prev, phone: inputNumbersValue}))
            return;
        }
    }
}

Phone.onPhoneInput = function (e, setInput, setError) {

    var input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";

    if (!inputNumbersValue) {
        return setInput(prev => ({...prev, phone: ''}));
    }

    if (input.value.length != selectionStart) {
        // Editing in the middle of input, not last symbol
        if (e.data && /\D/g.test(e.data)) {
            // Attempt to input non-numeric symbol
            setInput(prev => ({...prev, phone: inputNumbersValue}))
        }
        return;
    }
   
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = (inputNumbersValue[0] == "7") ? "+7" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
    
    validatePhone(formattedInputValue, setError)
    setInput(prev => ({...prev, phone: formattedInputValue}))
}

Phone.onPhoneKeyDown = function (e, setInput) {

    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 7 && inputValue.length == 1) {
        setInput(prev => ({...prev, phone: ''}))
    }
}

const getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
}

const validatePhone = (value, setError) => {
        
    if(!value) {
        setError(prev => ({...prev, phone: 'Обязательное поле'}))
        return 'error'
    } else if (value.length < 18) {
        setError(prev => ({...prev, phone: 'Номер телефона не может содержать менее 10 сиволов'}))
        return 'error'
    } else {
        setError(prev => ({...prev, phone: false}))
    }
}

export default Phone