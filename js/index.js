let alerts = document.getElementById('alerts');
let amount = document.getElementById('amount');
let numberOfPeople = document.getElementById('numberOfPeople');
let chooseService = document.getElementById('chooseService');
let btn = document.getElementById('button');
let tipAmount;
let totalAmount;
let perPerson;




const show = () => {
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('answer').innerHTML = `<div class="answerDiv">  <h3>Tip Amount: ${tipAmount}</h3><br> 
                                                                                <h3>Total Amount: ${totalAmount}</h3><br>
                                                                                <h3>Each person owes: ${perPerson}</h3>
                                                        </div>`;
        
    }, 2000);
    setTimeout(() => {
        document.getElementById('answer').innerHTML = '';
    }, 20000);
}

const doAlert = () => {
    alerts.innerHTML = '';
    if(amount.value === '' || amount.value <= '0'){
        alerts.classList.add('show');
        alerts.innerHTML += `<h4 class="alert" id="nullAmount">Bill Amount Cannot Be Blank or Less then 1</h4>`
    }

    if(numberOfPeople.value == '' || numberOfPeople.value <= '1'){
        alerts.classList.add('show');
        alerts.innerHTML += `<h4 class="alert" id="nullPerson">Number Of Users Must Be Greater Than Zero</h4>`; 
    }

    if(chooseService.value == 0){
        alerts.classList.add('show');
        alerts.innerHTML += `<h4 class="alert" id="nullService">You Must Select A Service</h4>`;
        
    }

    setTimeout(() => {
        alerts.classList.remove('show')
    }, 5000);
}

const calculate = () => {
    if(amount.value == '' || numberOfPeople.value == '' || chooseService.value == 0 || amount.value <= 0){
        doAlert();
    }else{
        tipAmount = (chooseService.value/100) * amount.value;
        totalAmount =  tipAmount + Number(amount.value);
        perPerson = totalAmount / numberOfPeople.value;
        amount.value = '';
        numberOfPeople.value = '';
        chooseService.value = '0';
        show();
    }
}

btn.addEventListener('click', calculate);








