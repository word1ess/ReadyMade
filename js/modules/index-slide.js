function slideIndexFaq() {
  $(document).ready(function () {
    $(".item-faq__title").click(function name(event) {
      $(this).toggleClass("faq-active").next().slideToggle(300);
    });
  });
}

export default slideIndexFaq;
