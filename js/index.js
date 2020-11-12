$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-customers").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newCollectionTime = new Date(`January 15 2021 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newCollectionTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);

anime
  .timeline({ loop: true })
  .add({
    targets: ".comingsoon .comingsoon-word",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 600,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".comingsoon",
    opacity: 0,
    duration: 600,
    easing: "easeOutExpo",
    delay: 1000,
  });

new ProductList(new Cart());

document.getElementById("weekday").addEventListener("click", textType);

function textType() {
  const day = document.getElementById("weekday");
  let now = new Date();
  if (now.getDay() == 0) {
    var i = -1;
    const txt =
      "Relax today with 'Fruit Kag Tappig Kit'! Tomorrow a new week srarts";
    const speed = 60;
    const typingTxt = document.getElementById("weekday");
    typingTxt.textContent = typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("weekday").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  if (now.getDay() == 1) {
    var i = -1;
    const txt =
      "Monday is a hard day. 'Funny Silicone Egg Mold' will help you to start the week with smile! :)";
    const speed = 40;
    const typingTxt = document.getElementById("weekday");
    typingTxt.textContent = typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("weekday").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }

  if (now.getDay() == 2) {
    var i = -1;
    const txt =
      "It's Tuesday! Soon time for Pizza with 'Bicycle Pizza Cutter'!";
    const speed = 40;
    const typingTxt = document.getElementById("weekday");
    typingTxt.textContent = typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("weekday").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }

  if (now.getDay() == 3) {
    weekday.textContent =
      "Wednesday is a middle of the working week. Have prefect tea due to 'Silicone Tea Infuser'";
  }
  if (now.getDay() == 4) {
    weekday.textContent =
      "It's Thusday and it's time for Pizza with friend and 'Bicycle Pizza Cutter'!";
  }
  if (now.getDay() == 5) {
    weekday.textContent =
      "It's Friday! 'Rock'n'Roll Oven Mitt advices being ready to rock!";
  }
  if (now.getDay() == 6) {
    weekday.textContent =
      "It's weekend fortunatelly! Enjoy an ice-cream with 'Popsicle Molds'";
  }
}
