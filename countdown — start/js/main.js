// определим действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');



// делаем расчеты
const currentYear = new Date().getFullYear(); 
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`); 

// устанавливаем год на странице
year.innerText = currentYear + 1;

function updateCounter() {

    const currentTime = new Date(); 
    const diff = nextYear - currentTime;  
    
     //метод floor у обьекта math позволил нам округлить все числа 
    //   все перевелось в секунды минуты часы дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); 
    
    //всего часов и далее остаток от деления на 24 (преобразования в дни)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    
    const secondsLeft = Math.floor(diff / 1000) % 60;
    
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    
    
    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    
    
    

}

updateCounter;

// запуск расчета 1 раз в секунду
setInterval(updateCounter, 1000);


setTimeout(function(){

preloader.remove();
countdown.style.display = 'flex';

}, 1000);