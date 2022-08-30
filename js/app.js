function bmi () {

    let feet = document.getElementById("height-feet").value;
    let inches = document.getElementById("height-inches").value;
    let metre = feet + "." + inches;
    let height = metre/3.2808;

    let weight = document.getElementById("weight").value;

    let bmi1 = weight / Math.pow(height,2);
    let bmi = (Math.round(bmi1*100)/100).toFixed(2);

    let result = document.querySelector(".result")
    let age = document.getElementById("age").value;

    if( bmi < 18.5){
        result.innerHTML = "Under weight: " + bmi + "<br>" + "Age: " + age;
    }else if( bmi >=18.6 && bmi < 24.9) {
        result.innerHTML = "Normal weight: " + bmi + "<br>" + "Age: " + age;
    }else {
        result.innerHTML = "Over weight: " + bmi + "<br>" + "Age: " + age;
    }

}

document.querySelector(".btn").addEventListener("click", bmi);