function slideCartFaq() {
  $(document).ready(function () {
    $(".tabs-faq__title").click(function name(event) {
      $(this)
        .toggleClass("faq-active")
        .next()
        .toggleClass("faq-active")
        .slideToggle(300);
    });
  });
}

export default slideCartFaq;
