// меню бургер
function burger() {
  $(document).ready(function () {
    $(".header__burger").click(function name(event) {
      $(".header__burger,.header__menu").toggleClass("burger-active");
    });
  });
}

export default burger;
