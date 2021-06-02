window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
  else if (bmi >= 18.6 && bmi <= 25.0)
    result.innerHTML = `Normal : <span>${bmi}</span>`;
  else if (bmi >= 25.1 && bmi <= 30.0)
    result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  else result.innerHTML = `Obese : <span>${bmi}</span>`;
}
