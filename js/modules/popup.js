function popup() {
  const deponingBtn = document.querySelector(".deponingBtn");
  const searchBtn = document.querySelector(".searchingBtn");
  const signInBtn = document.querySelector(".profile");
  const timeBtn = document.querySelector(".timeBtn");
  const callbackBtn = document.querySelector(".header-bottom__callback");
  const thanksBtn = document.querySelector(".callback__send");
  const closeThanksBtn = document.querySelector(".thanks-ordering__close");

  const deponingBLock = document.querySelector(".deponing");
  const searchBLock = document.querySelector(".search");
  const signInBLock = document.querySelector(".sign-in");
  const timeBLock = document.querySelector(".timeBlock");
  const callbackBlock = document.querySelector(".callback");
  const thanksBLock = document.querySelector(".thanks-ordering");

  closeThanksBtn.onclick = () => {
    thanksBLock.classList.remove("popup-active");
  };

  function openPopup(btn, block) {
    btn.onclick = () => {
      const closeBtn = block.querySelector("#close");
      const wrapper = document.querySelector(".wrapper");

      block.classList.add("popup-active");
      wrapper.classList.add("popup-active");

      closeBtn.onclick = () => {
        block.classList.remove("popup-active");
        wrapper.classList.remove("popup-active");
      };
    };
  }

  function hoverPopup(btn, block) {
    btn.addEventListener("mouseover", () => {
      block.classList.add("popup-active");
    });
    btn.addEventListener("mouseout", () => {
      block.classList.remove("popup-active");
    });
  }
  if (deponingBtn) openPopup(deponingBtn, deponingBLock);
  if (searchBtn) openPopup(searchBtn, searchBLock);
  if (signInBtn) openPopup(signInBtn, signInBLock);
  if (callbackBtn) openPopup(callbackBtn, callbackBlock);
  if (thanksBtn) openPopup(thanksBtn, thanksBLock);
  if (timeBtn) hoverPopup(timeBtn, timeBLock);
}

export default popup;
