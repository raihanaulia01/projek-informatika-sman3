
const collapsibleHandler = (wrappersClass, collapsiblesClass) => {
  const wrappers = document.getElementsByClassName(wrappersClass);
  const collapsibles = document.getElementsByClassName(collapsiblesClass);
  const scrollToElement = (element) => {
    const parentPosition = element.getBoundingClientRect().top + window.scrollY;
    const navHeight = document.querySelector("nav").offsetHeight;
    window.scroll({
      top: parentPosition-navHeight-16,
      behavior: "smooth"
    });
    // console.log(`${element} ${parentPosition}, ${navHeight}`);
  }

  for (let i = 0; i < wrappers.length; i++) {
    wrappers[i].addEventListener("click", () => {
      collapsibles[i].classList.toggle("active");
      const link = document.querySelector(`#solution${i+1} a`);
      link.textContent === "See more" ? link.textContent="Collapse" : link.textContent="See more";
      // scrollToElement(wrappers[i]);
    });

    const links = document.querySelectorAll(`.${wrappersClass} a`);
    links[i].addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
}

export default collapsibleHandler;