// alert('Hi')


const adviceId = document.querySelector('#adviceId');
const adviceBody = document.querySelector('#adviceText');
const btn = document.querySelector('.btn');



fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = adviceNum;
    adviceText.innerHTML = `<p>"${advice}"</p>`;
}).catch(error => {
    console.log(error);
});

btn.addEventListener("click", refreshPage)

function refreshPage() {
    window.location.reload();
}