//add EventListen
const btn = document.querySelector('.btn').addEventListener('click',function(e){
//hide the result and show the Loader
    document.getElementById('results').style.display = 'none';
//show the loader
    document.getElementById('loading').style.display = "block";

    setTimeout(CalculateResults,2000);
    e.preventDefault();

});

function CalculateResults(){
const amount = document.getElementById('Amount');
const rateofinterest = document.getElementById('Interest');
const yearstoberepay = document.getElementById('Years');
const monthlypayment = document.getElementById('monthly-payment');
const totalpayment = document.getElementById('total-payment');
const totalinterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const interest = parseFloat(rateofinterest.value) / 100 / 12;
const years = parseFloat(yearstoberepay.value) * 12;

//compute Monthly payment
    const x = Math.pow(1 + interest, years);
    const monthly = (principal* x *interest)/(x-1);

    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * years).toFixed(2);
        totalinterest.value = ((monthly * years) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = "none";

    }else {

    const errmsg = document.createElement('div');
    errmsg.className = "alert alert-danger";
    errmsg.appendChild(document.createTextNode('Please Enter the details'));
    const card = document.querySelector('.card');
    const form = document.querySelector('.heading');
    card.insertBefore(errmsg,form);
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = "none";

    setTimeout(clearerror,3000);
    }
}
function clearerror(){
    document.querySelector('.alert').remove();

}