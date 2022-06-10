const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//  setting the giveaway deadline
const items = document.querySelectorAll(".deadline-format h4");
const giveaway = document.querySelector(".giveaway");
// the date we want
const newDate = new Date(2022, 6, 12, 11, 30);

// year 2022
const year = newDate.getFullYear();
// day tuesday 12
let day = newDate.getDay();
day = weekdays[day];
// month july
let month = months[newDate.getMonth()];

// hours
const hour = newDate.getHours();

// minutes
const minute = newDate.getMinutes();
const text = "Giveaway Ends On ";

giveaway.textContent = `${text} ${day}, 12 ${month} ${year} ${hour}:${minute} am`;

function timer() {
  // calculating how much left
  let futureDate = new Date(2022, 6, 12, 11, 30).getTime();
  let currentDate = new Date().getTime();
  let countDown = futureDate - currentDate;

  //   setting the values in ms
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const oneSecond = 1000;

  // calculating each container
  let remainingDays = Math.floor(countDown / oneDay);
  let remainingHours = Math.floor((countDown % oneDay) / oneHour);
  let remainingMinutes = Math.floor((countDown % oneHour) / oneMinute);
  let remainingSeconds = Math.floor((countDown % oneMinute) / oneSecond);
  // creating array for better code instead of hardcoding every container....
  const values = [
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ];
  // we want to have a 0 before number in case it is less than 0
  function format(number) {
    if (number < 10) {
      return (number = `0${number}`);
    } else {
      return number;
    }
  }
  // instead of hardcoding them we loop over them all and have the array with the index that start from 0 .... so we get every item in the array display in it perfect place
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
}

let countDownDisplay = setInterval(timer, 1000);
timer();
