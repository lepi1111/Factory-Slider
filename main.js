const topSlider = document.querySelector(".top-slider");
const bottomSlider = document.querySelector(".bottom-slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgs = document.querySelectorAll(".img");

next.addEventListener("click", function () {
  setTimeout(function () {
    topSlider.prepend(topSlider.lastElementChild);
  }, 300);

  setTimeout(function () {
    bottomSlider.prepend(bottomSlider.lastElementChild);
  }, 300);
});

prev.addEventListener("click", function () {
  setTimeout(function () {
    topSlider.append(topSlider.firstElementChild);
  }, 300);
  imgs.forEach(function (img) {
    img.style.transform = `translateX(0px)`;
  });
  setTimeout(function () {
    bottomSlider.append(bottomSlider.firstElementChild);
  }, 300);
});

count++;
switch (count) {
  case 1:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(260px)`;
    });
    break;
  case 2:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(460px)`;
    });
    break;
  case 3:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(680px)`;
    });
    break;
  case 4:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(810px)`;
    });
    break;
  case 5:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(1010px)`;
    });
    break;
  case 6:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(1210px)`;
    });
    count = 0;
    break;
}
console.log(count);

count--;
if (count < 0) {
  count = 5;
}
if (count === 0) {
  imgs.forEach(function (img) {
    img.style.transform = `translateX(10px)`;
  });
}
switch (count) {
  case 1:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(260px)`;
    });
    break;
  case 2:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(460px)`;
    });
    break;
  case 3:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(680px)`;
    });
    break;
  case 4:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(810px)`;
    });
    break;
  case 5:
    imgs.forEach(function (img) {
      img.style.transform = `translateX(1010px)`;
    });
    break;
}
