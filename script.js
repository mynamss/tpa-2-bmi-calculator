function BMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  if (isNaN(weight) || isNaN(height)) {
    return (document.getElementById("result").innerHTML = `<p style="color: red;">Make sure the input is a <b>number</b>.</p>`);
  } else {
    return result();
  }
}

function result() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / (((height / 100) * height) / 100);
  let bmiRound = bmi.toFixed(1);
  if (bmiRound < 18.5) {
    return (document.getElementById("result").innerHTML = `<p>Your BMI is <b>${bmiRound}</b>. You are <b>Underweight</b>.</p>`);
  } else if (bmiRound >= 18.5 && bmiRound < 25) {
    return (document.getElementById("result").innerHTML = `<p>Your BMI is <b>${bmiRound}</b>. You are <b>Normal</b>.</p>`);
  } else if (bmiRound >= 25 && bmiRound < 30) {
    return (document.getElementById("result").innerHTML = `<p>Your BMI is <b>${bmiRound}</b>. You are <b>Overweigth</b>.</p>`);
  } else if (bmiRound >= 30) {
    return (document.getElementById("result").innerHTML = `<p>Your BMI is <b>${bmiRound}</b>. You are <b>Obesity</b>.</p>`);
  }
}
// Underweight = <18.5
// Normal weight = 18.5 – 24.9
// Overweight = 25 – 29.9
// Obesity = BMI of 30 or greater
