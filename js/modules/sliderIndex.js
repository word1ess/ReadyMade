// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
function sliderIndex() {
  const swiper = new Swiper(".slider-reviews__container", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,
  });
}

export default sliderIndex;
