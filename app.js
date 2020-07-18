let hoursHand = document.querySelector('.hour-hand'),
    minutesHand = document.querySelector('.minute-hand'),
    secondsHand = document.querySelector('.second-hand');


function updateTime() {

  // get time information. This has to be continously updated, hence why we're declaring it here and not on the global window.
  let today = new Date();

  let hour,
      minute = today.getMinutes(),
      second = today.getSeconds();


  // convert 24-hour based time to 12-hour based time.
  if (today.getHours() <= 12) hour = today.getHours();

  else if (today.getHours() > 12 && today.getHours() <= 24 ) {
    hour = today.getHours() - 12;
  };


  // make each hand on the clock move and reflect the correct time.
  let hoursAngle = hour * 30;
      hoursHand.style.transform = 'translate(-50%, -50%) rotate(' + hoursAngle + 'deg)';

  let minutesAngle = minute * 6;
      minutesHand.style.transform = 'translate(-50%, -50%) rotate(' + minutesAngle + 'deg)';

  let secondsAngle = second * 6;
      secondsHand.style.transform = 'translate(-50%, -50%) rotate(' + secondsAngle + 'deg)';

}


// create a loop and keep the time updated
setInterval(updateTime, 1000);
