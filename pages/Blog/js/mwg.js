//toggle active
function toggleActive(s) {
  var btns = document.querySelectorAll(s);
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (btn) {
      for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("active")) {
          btns[i].classList.remove("active");
        }
      }
      this.classList.add("active");
    });
  }
}
toggleActive(".nav-link");

/* Big Bang */
/** Vertical movement in page */
document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(
    ".big-bang .image-container"
  );
  const bullets = document.querySelectorAll(".big-bang .bullet");
  let currentIndex = 0;
  let isTransitioning = false;

  function showImage(index) {
    if (isTransitioning) return; // Prevent overlapping transitions
    isTransitioning = true;
    imageContainers.forEach((container, i) => {
      container.style.transition = "transform 0.7s ease"; // Add smooth transition
      container.style.transform = `translateY(-${index * 100}%)`; // Move images smoothly
    });
    bullets.forEach((bullet, i) => {
      if (i === index) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
    currentIndex = index;
    setTimeout(() => {
      isTransitioning = false; // Reset transition flag after transition is complete
    }, 500);
  }
  function navigate(index) {
    if (index === currentIndex || index < 0 || index >= imageContainers.length)
      return;
    showImage(index);
  }

  function nextImage() {
    navigate(currentIndex + 1);
  }

  function prevImage() {
    navigate(currentIndex - 1);
  }

  function handleBulletClick(event) {
    const index = parseInt(event.target.dataset.index);
    navigate(index);
  }
  function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      prevImage();
    } else if (event.key === "ArrowDown") {
      nextImage();
    }
  }
  if (
    document.getElementById("upButton") ||
    document.getElementById("downButton")
  ) {
    document.getElementById("upButton").addEventListener("click", prevImage);
    document.getElementById("downButton").addEventListener("click", nextImage);
  }

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", handleBulletClick);
  });
  function handleScroll(event) {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      nextImage();
    } else if (delta < 0) {
      prevImage();
    }
  }
  showImage(currentIndex);
  document.addEventListener("keydown", handleKeyDown);
  window.addEventListener("wheel", handleScroll);
});

/**add elements(imgs+bultts)in DOM */
let imageCarousel = document.querySelector(".big-bang .image-carousel"),
  bullets = document.querySelector(".big-bang .bullets");
for (let i = 1; i <= 51; i++) {
  //create imgs
  let itemImage = document.createElement("div");
  itemImage.classList.add("image-container");
  itemImage.innerHTML = `<img src="imgs/big_bang_imgs/k(${i}).jpeg" alt="Image ${i}" />
    <div class="gradient"></div>
    <div class="carousel-caption d-none d-md-block">
      <h4 class="fs-1 fw-bold">HABITAT</h4>
      <p>
      There is nothing closer to every human’s heart than their bed, and that is what the Habitat campaign was all about. We wanted to give the audience the feel of nostalgia, making them aware of the fact that one of the most essential aspects of their lives from beginning to end was the comfort of their own bed and the quality of their mattress. That’s why the campaign was named “Ehna Etrabeina 3aleiha”. This brand has been in all of our homes since generations
      </p>
      <div class="see-more">
        <div>
          <a class="btn btn-outline-danger" href="./pages/big_bang/big_${i}.html">See more</a>
        </div>
      </div>
    </div>`;
  if (imageCarousel) imageCarousel.appendChild(itemImage);
  //create bullets
  let bullet = document.createElement("li");
  bullet.classList.add("bullet");
  bullet.setAttribute("data-index", `${i - 1}`);
  if (bullets) bullets.appendChild(bullet);
}

/** portofolio section*/
//add elements in wrapper
let wrapper = document.querySelector(".our-portofolio .wrapper");
let rowOfImgs = document.querySelector(".our-portofolio .wrapper .row");
for (let i = 1; i <= 66; i++) {
  let item = document.createElement("div");
  item.className = "container-project col-sm-12 col-lg-3";
  item.innerHTML += `
      <div class="project" style="background-image: url(./imgs/portofolio_imgs/i_${i}.jpeg)">
        <a href="./pages/portofolio/portf_${i}.html" class="content">
          <div class="gradient"></div>
          <h4>Naguib Selim</h4>
          <p>For Naguib Selim, we created a 360 campaign</p>
        </a>
      </div>
    `;
  if (rowOfImgs) rowOfImgs.appendChild(item);
}

let allProjects = document.querySelectorAll(
  ".our-portofolio .wrapper .row .container-project"
);
let linksOfPortfolio = document.querySelectorAll(
  ".our-portofolio .list-unstyled .nav-link"
);
let btnLoadMore = document.createElement("div");
btnLoadMore.className = "load-more text-center mt-3";
btnLoadMore.innerHTML = `<p class="d-inline m-0 me-1">LOAD MORE</p><i class="fa-solid down fa-angle-down"></i>`;
if (wrapper) wrapper.appendChild(btnLoadMore);
//handel appearing of element by navbar of portofolio ,handle btn load more for appreaing all element

hideProjects(1);
function hideProjects(i) {
  if (i == 1) {
    for (let i = 9; i < allProjects.length; i++) {
      allProjects[i].style.display = "none";
    }
    btnLoadMore.style.display = "block";
  } else if (i == 2) {
    for (let i = 0; i < allProjects.length; i++) {
      allProjects[i].style.display = "none";
    }
    btnLoadMore.style.display = "none";
  } else {
    for (let i = 0; i < allProjects.length; i++) {
      allProjects[i].style.display = "block";
    }
    btnLoadMore.style.display = "none";
  }
}
btnLoadMore.addEventListener("click", function () {
  allProjects.forEach((project) => {
    project.style.display = "block";
  });
  hideProjects(0);
});
/*add addEventListener for each link */
linksOfPortfolio.forEach((li, i) => {
  li.addEventListener("click", () => {
    if (i == 0 || i == 2 || i == 3 || 5 == i) {
      allProjects.forEach((project) => {
        project.style.display = "block";
      });
      hideProjects(1);
    } else if (i == 1) {
      hideProjects(2);
      allProjects[39].style.display = "block";
    } else if (i == 4) {
      hideProjects(2);
      for (let j = 0; j < 6; j++) {
        allProjects[j].style.display = "block";
      }
    } else if (i == 6) {
      hideProjects(2);
      allProjects[6].style.display = "block";
      allProjects[23].style.display = "block";
    }
  });
});

/** videos section*/
// add embded link in iframe from btn
let btnsVideo = document.querySelectorAll(".videos .video button");
let iframe = document.querySelector(".modal .modal-dialog .modal-body iframe");
let rowOfvideos = document.querySelector(".videos .row");
btnsVideo.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    iframe.setAttribute("src", `${btn.dataset.frame}`);
  });
});
for (let i = 1; i <= 3 * 17; i++) {
  let video = document.createElement("div");
  video.className = "container-video col-sm-12 col-lg-3";
  video.innerHTML = `<div class="video">
          <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
              data-frame="https://www.youtube.com/embed/PqHw0P577cA"
              >
              <i class="fa-solid fa-play"></i>
            </button>
            <div class="gradient"></div>
            </div>
            <h4>Cynosure "Be confident be sure"</h4>`;
  if(rowOfvideos)rowOfvideos.appendChild(video);
}
let videos = document.querySelectorAll(".videos .container-video .video");
videos.forEach(function (video, i) {
  video.style.backgroundImage = `url(./imgs/v${(i + 1) % 12 || 12}.jpeg)`;
});
