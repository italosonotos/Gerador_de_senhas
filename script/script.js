const passInput = document.querySelector('#inputPassword');
const lenInput = document.querySelector('#inputLength');
const infoLenght = document.querySelector('label[ for="labelLenght"]');
const btn = document.querySelector('#btn');

const  chkLower=document.querySelector( "#chkLower" );
const  chkUpper  =  document.querySelector( "#chkUpper" );
const  chkNumber  =  document.querySelector( "#chkNumber" );
const  chkSymbols  =  document.querySelector( "#chkSymbo" );

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLenght.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

btn.addEventListener("click", () => {
    generatePassword(
      chkNumber.checked,
      chkSymbols.checked,
      chkLower.checked,
      chkUpper.checked,
      lenInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght
  ) => {
    const newArray = [
      ...(hasNumbers ? numbers : []),
      ...(hasSymbols ? symbols : []),
      ...(hasLowercase ? LowercaseCaracters : []),
      ...(hasUppercase ? UppercaseCaracters : []),
    ];
    if (newArray.length === 0) return;

    let password = "";
  
    for (let i = 0; i < lenght; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      password += newArray[randomIndex];
    }
  
    passInput.value = password;
};