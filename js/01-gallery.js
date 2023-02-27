import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
galleryContainer.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalSrc = event.target.dataset.source;
  const imageAlt = event.target.alt;

  // Otworzenie okna modalnego po kliknięciu w element galerii.
  const instance = basicLightbox.create(`
    <img src="${originalSrc}" alt="${imageAlt}" />
  `);

// dodaję słuchacza  zdarzeń -> dodatkowe zadanie 
  // a słuchacz  przeszkadza i trzeba duzo klikać żeby zamknąć :/

//   const gallery = document.querySelector(".gallery");
//   const lightbox = basicLightbox.create(`
//   <img src="" width="800" height="600">
// `);

   

//   gallery.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (event.target.classList.contains("gallery__image")) {
//       const imageUrl = event.target.dataset.source;
//       lightbox.element().querySelector("img").src = imageUrl;
//       lightbox.show();
//       document.addEventListener("keydown", onEscKeyDown);
//     }
//   });

//   function onEscKeyDown(event) {
//     if (event.code === "Escape") {
//       lightbox.close();
//       document.removeEventListener("keydown", onEscKeyDown);
//     }
//   }
  
  // Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem.
       instance.show();
}

