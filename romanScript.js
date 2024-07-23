const numberInput = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const arabicToRoman = (num) =>{
  let romanNumber="";
  for(let i = 0; i<13; i++){
    while (num >= arabic[i]) {
      romanNumber += roman[i];
      num -= arabic[i];
    }
  }
  return romanNumber;
}
const checkUserInput = () => {
  if(numberInput.value<0){
    output.classList.add("alert");
      output.textContent = "Please enter a number greater than or equal to 1";
      return;
  }
  else if(!numberInput.value){
    output.classList.add("alert");
      output.textContent = "Please enter a valid number";
      return;
  }
  else if(numberInput.value>3999){
    output.classList.add("alert");
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
  }
  else{
    output.classList.remove("alert");
    output.classList.remove("hide");
    output.textContent = arabicToRoman(numberInput.value);
    }
  numberInput.value = "";
  
};

btn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});