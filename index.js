let img = document.querySelector("#user_photo");
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon5 = document.querySelector("#icon5");
let p1 = document.querySelector("#user_title");
let p2 = document.querySelector("#user_value");

fetch('https://randomuser.me/api')
  .then(r => r.json())
  .then(function(data){
    let inf = data.results[0];
    return inf;
  })
  .then(function(value){ 
    img.src=`${value.picture.large}`;
    p1.textContent = "Hi, My name is";
    p2.textContent =`${value.name.first} ${value.name.last}`; 
    icon1.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com2.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "Hi, My name is";
      p2.textContent =`${value.name.first} ${value.name.last}`; 
    })
    icon2.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com2.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "My birthday is";
      p2.textContent =`${value.dob.date.slice(0, 10)} (${value.dob.age})`; 
    })
    icon3.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com2.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "My email address is";
      p2.textContent =`${value.email}`; 
    })
    icon4.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com2.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "I live in";
      p2.textContent =`${value.location.city} (${value.location.country})`; 
    })
    icon5.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com2.svg`
      p1.textContent = "My phone number is";
      p2.textContent =`${value.phone}`; 
    })
    
  })
  

  