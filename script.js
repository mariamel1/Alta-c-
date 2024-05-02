const carousel = document.querySelector('.carousels');
const pointsContainer = document.querySelector('.points');
const images = document.querySelectorAll('.carousel-img');
const numImages = images.length;
let currentImageIndex = 0;

for (let i = 0; i < numImages; i++) {
  const point = document.createElement('div');
  point.classList.add('point');
  pointsContainer.appendChild(point);
  point.addEventListener('click', () => {
    goToImage(i);
  });
}
function highlightPoint(index) {
  const points = document.querySelectorAll('.point');
  points.forEach((point, i) => {
    if (i === index) {
      point.classList.add('active');
    } else {
      point.classList.remove('active');
    }
  });
}
function goToImage(index) {
  if (index >= 0 && index < numImages) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentImageIndex = index;
    highlightPoint(index);
  }
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % numImages;
  goToImage(currentImageIndex);
}
setInterval(nextImage, 5000);
highlightPoint(0);

const carousel2 = document.querySelector('.carousels2');
const pointsContainer2 = document.querySelector('.points2');
const images2 = document.querySelectorAll('.carousel-img2');
const numImages2 = images2.length;
let currentImageIndex2 = 0;

for (let i = 0; i < numImages2; i++) {
  const point2 = document.createElement('div');
  point2.classList.add('point2');
  pointsContainer2.appendChild(point2);
  point2.addEventListener('click', () => {
    goToImage(i);
  });
}
function highlightPoint(index) {
  const points2 = document.querySelectorAll('.point2');
  points2.forEach((point2, i) => {
    if (i === index) {
      point2.classList.add('active');
    } else {
      point2.classList.remove('active');
    }
  });
}
function goToImage2(index) {
  if (index >= 0 && index < numImages2) {
    carousel2.style.transform = `translateX(-${index * 100}%)`;
    currentImageIndex2 = index;
    highlightPoint(index);
  }
}
function nextImage2() {
  currentImageIndex2 = (currentImageIndex2 + 1) % numImages2;
  goToImage2(currentImageIndex2);
}
setInterval(nextImage2, 5000);
highlightPoint(0);


document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  const cardsContainer = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 0;
  const visibleCardCount = 4;
  const autoMoveInterval = 5000;
  let isTransitioning = false; 
  let currentIndex = 0;
  let autoMoveTimer;
  function moveForward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex++;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }
  function moveBackward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }
  function startAutoMove() {
    autoMoveTimer = setInterval(moveForward, autoMoveInterval);
  }
  function stopAutoMove() {
    clearInterval(autoMoveTimer);
  }
  startAutoMove();
  cardsContainer.addEventListener("mouseover", stopAutoMove);
  cardsContainer.addEventListener("mouseout", startAutoMove);
  nextButton.addEventListener("click", moveForward);
  prevButton.addEventListener("click", moveBackward);
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton2");
  const prevButton = document.getElementById("prevButton2");
  const cardsContainer = document.querySelector(".cards2");
  const cards = document.querySelectorAll(".card2");
  const cardWidth = cards[0].offsetWidth + 0;
  const visibleCardCount = 4;
  const autoMoveInterval = 5000; 
  let isTransitioning = false;
  let currentIndex = 0;

  function moveForward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex++;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }

  function moveBackward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }

  function startAutoMove() {
    autoMoveTimer = setInterval(moveForward, autoMoveInterval);
  }
  function stopAutoMove() {
    clearInterval(autoMoveTimer);
  }
  startAutoMove();
  cardsContainer.addEventListener("mouseover", stopAutoMove);
  cardsContainer.addEventListener("mouseout", startAutoMove);
  nextButton.addEventListener("click", moveForward);
  prevButton.addEventListener("click", moveBackward);
});



document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton3");
  const prevButton = document.getElementById("prevButton3");
  const cardsContainer = document.querySelector(".cards3");
  const cards = document.querySelectorAll(".card3");
  const cardWidth = cards[0].offsetWidth + 0;
  const visibleCardCount = 4;
  const autoMoveInterval = 4500; 
  let isTransitioning = false;
  let currentIndex = 0;

  function moveForward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex++;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }

  function moveBackward() {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transition = "transform 0.5s ease";
      cardsContainer.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }

  function startAutoMove() {
    autoMoveTimer = setInterval(moveForward, autoMoveInterval);
  }
  function stopAutoMove() {
    clearInterval(autoMoveTimer);
  }
  startAutoMove();
  cardsContainer.addEventListener("mouseover", stopAutoMove);
  cardsContainer.addEventListener("mouseout", startAutoMove);
  nextButton.addEventListener("click", moveForward);
  prevButton.addEventListener("click", moveBackward);
});



function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}
var left2Visible = true;

function toggleDropdowns() {
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function(dropdown) {
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
}

function toggleLeft2() {
  var left2 = document.querySelector('.left2');
  if (left2Visible) {
    left2.style.display = 'none';
    left2Visible = false;
    document.getElementById('toggleLeft2Btn').textContent = 'პროდუქტების ფილტრები                    >';
  } else {
    left2.style.display = 'block';
    left2Visible = true;
    document.getElementById('toggleLeft2Btn').textContent = 'პროდუქტების ფილტრები                     >';
  }
}




window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}
document.getElementById("searchInput").addEventListener("input", function() {
  var searchQuery = this.value.toLowerCase();
  var checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(function(checkbox) {
    var text = checkbox.value.toLowerCase();
    var label = checkbox.nextElementSibling.textContent.toLowerCase();
    if (text.includes(searchQuery) || label.includes(searchQuery)) {
      checkbox.parentElement.style.display = 'block';
    } else {
      checkbox.parentElement.style.display = 'none'; 
    }
  });
});
