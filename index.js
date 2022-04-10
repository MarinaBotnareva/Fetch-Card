fetch('https://randomuser.me/api')
  .then(r => r.json())
  .then(function(data){
    let inf = data.results[0];
    let img = document.querySelector("#user_photo");
    img.src=`${inf.picture.large}`;
    let icon1 = document.querySelector("#icon1");
    let icon2 = document.querySelector("#icon2");
    let icon3 = document.querySelector("#icon3");
    let icon4 = document.querySelector("#icon4");
    let icon5 = document.querySelector("#icon5");
    let p1 = document.querySelector("#user_title");
    let p2 = document.querySelector("#user_value");
    p1.textContent = "Hi, My name is";
    p2.textContent =`${inf.name.first} ${inf.name.last}`; 
    icon1.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com2.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "Hi, My name is";
      p2.textContent =`${inf.name.first} ${inf.name.last}`; 
    })
    icon2.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com2.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "My birthday is";
      p2.textContent =`${inf.dob.date.slice(0, 10)} (${inf.dob.age})`; 
    })
    icon3.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com2.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "My email address is";
      p2.textContent =`${inf.email}`; 
    })
    icon4.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com2.svg`
      icon5.src = `./phone-call-svgrepo-com.svg`
      p1.textContent = "I live in";
      p2.textContent =`${inf.location.city} (${inf.location.country})`; 
    })
    icon5.addEventListener('click', () => {
      icon1.src = `./avatar-svgrepo-com.svg`
      icon2.src = `./calendar-svgrepo-com.svg`
      icon3.src = `./mail-svgrepo-com.svg`
      icon4.src = `./map-svgrepo-com.svg`
      icon5.src = `./phone-call-svgrepo-com2.svg`
      p1.textContent = "My phone number is";
      p2.textContent =`${inf.phone}`; 
    })
    
  })
  

  