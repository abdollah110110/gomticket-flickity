function disableSubmit() {
    var submitBtn = document.getElementById('submit-btn');
    if (submitBtn.disabled) {
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';		
    } else {
        submitBtn.disabled = true;
        submitBtn.style.cursor = 'not-allowed';
		alert ("امکان خرید از سایت قم تیکت، مستلزم پذیرش قوانین میباشد.");
    }
}