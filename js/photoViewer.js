document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".photo-scroll-wrapper");
  const images = document.querySelectorAll(".photo-scroll img");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");

  let currentIndex = 0;

  const getImageMap = () => {
    let imageMap = {};
    images.forEach((img, index) => {
      imageMap[index] = img.clientWidth;
    });
    return imageMap;
  };

  const calculateScrollWidth = (currentIndex) => {
    const imageMap = getImageMap();
    let scrollWidth = 0;
    Object.keys(imageMap).forEach((key) => {
      if (parseInt(key) < currentIndex) {
        scrollWidth += imageMap[key] + 5;
      }
    });
    return scrollWidth;
  };

  function updateScrollPosition() {
    let scrollWidth = calculateScrollWidth(currentIndex);

    scrollWrapper.scrollTo({
      left: scrollWidth,
      behavior: "smooth",
    });
  }

  leftButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateScrollPosition();
    }
  });

  rightButton.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateScrollPosition();
    }
  });

  window.addEventListener("resize", updateScrollPosition);
});
