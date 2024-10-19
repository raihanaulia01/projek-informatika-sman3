import collapsibleHandler from "./collapsibles.js";

const companyLogosWrapper = document.getElementById("company-logos");
const scrollers = document.querySelectorAll(".scroll-container");

// const populatePlaceholderLogos = (logosWrapper) => {
//   const url = "img/company-logos/Group-";
//   for (let i = 0; i < 18; i++) {
//     const img = document.createElement("img");
//     img.src = url + i + ".svg";
//     img.className="company-logo";
//     logosWrapper.appendChild(img);
//   }
// }

collapsibleHandler("solution__wrapper", "collapsible");

const populateRealLogos = (logosWrapper) => {
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


// populatePlaceholderLogos(companyLogosWrapper);
populateRealLogos(companyLogosWrapper);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

