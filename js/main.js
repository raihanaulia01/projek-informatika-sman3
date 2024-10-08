const companyLogosWrapper = document.getElementById("company-logos");
const scrollers = document.querySelectorAll(".scroll-container");
const collapsibles = document.getElementsByClassName("collapsible");
const solutionWrappers = document.getElementsByClassName("solution__wrapper");

// const populatePlaceholderLogos = (logosWrapper) => {
//   const url = "img/company-logos/Group-";
//   for (let i = 0; i < 18; i++) {
//     const img = document.createElement("img");
//     img.src = url + i + ".svg";
//     img.className="company-logo";
//     logosWrapper.appendChild(img);
//   }
// }

populateRealLogos = (logosWrapper) => {
  const logoFileNames = [
    "badaklng.svg",
    "batindo.svg",
    "boc.png",
    "chevron.svg",
    "conocophillips.svg",
    "eni-spa.svg",
    "exxonmobil.svg",
    "indofoodcbp.svg",
    "Kalbe_Farma.svg",
    "MedcoEnergi_Logo1.png",
    "mubadala.png",
    "pertamina.svg",
    "PetroChina-Logo.wine.svg",
    "pln.png",
    "premier-oil.webp",
    "skkmigas.svg",
    "TotalEnergies_logo.svg"
  ]
  const url = "img/logos/";
  for (let i = 0; i < logoFileNames.length; i++) {
    const img = document.createElement("img");
    img.src = url + logoFileNames[i];
    img.className="company-logo";
    logosWrapper.appendChild(img);
  }
}

const addAnimation = () => {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true);
    
    const scrollerInner = scroller.querySelector("#company-logos");
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const scrollToElement = (element) => {
  const parentPosition = element.getBoundingClientRect().top + window.scrollY;
  const navHeight = document.querySelector("nav").offsetHeight;
  window.scroll({
    top: parentPosition-navHeight-16,
    behavior: "smooth"
  });
  console.log(`${element} ${parentPosition}, ${navHeight}`);
}

for (let i = 0; i < solutionWrappers.length; i++) {
  solutionWrappers[i].addEventListener("click", () => {
    collapsibles[i].classList.toggle("active");
    const link = document.querySelector(`#solution${i+1} a`);
    link.textContent === "See more" ? link.textContent="Collapse" : link.textContent="See more";
    scrollToElement(solutionWrappers[i]);
  });

  const links = document.querySelectorAll(".solution__wrapper a");
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// populatePlaceholderLogos(companyLogosWrapper);
populateRealLogos(companyLogosWrapper);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

