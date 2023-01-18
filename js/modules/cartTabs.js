function cartTabs() {
  const tabsBtns = Array.from(document.querySelectorAll(".tabs__link"));
  const tabsBlocks = Array.from(document.querySelectorAll(".tabs__item"));

  if (tabsBtns) {
    tabsBtns[0].classList.add("tab-active");
    tabsBlocks[0].classList.add("tab-active");
    for (const btn of tabsBtns) {
      btn.onclick = () => {
        hideAll();
        btn.classList.add("tab-active");
        let index = tabsBtns.indexOf(btn);
        tabsBlocks[index].classList.add("tab-active");
      };
      function hideAll() {
        tabsBlocks.forEach((block) => {
          block.classList.remove("tab-active");
        });
        tabsBtns.forEach((btn) => {
          btn.classList.remove("tab-active");
        });
      }
    }
  }
}

export default cartTabs;
