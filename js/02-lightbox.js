import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = () => {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href= ${original}>
                <img
                    class="gallery__image"
                    // src=${preview}
                    // alt=${description}
                />
                </a>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
};
createGallery();
let galleryLightBox = new SimpleLightbox(".gallery a", {
  showCounter: false,
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
galleryLightBox.on("shown.simplelightbox", function () {
  const caption = document.querySelector(".sl-caption.pos-bottom");
  caption.style.textAlign = "center";
});


// Importuje tablicę danych galleryItems z pliku gallery-items.js.
// Pobiera referencję do elementu HTML o klasie "gallery".
// Definiuje funkcję createGallery(), która przetwarza tablicę danych galleryItems na łańcuch znaków zawierający kod HTML dla elementów galerii. Wykorzystuje metodę map() do iteracji po tablicy danych i tworzenia dla każdego elementu znacznika <a> z odpowiednimi atrybutami i zawierającymi obraz <img>. Następnie łączy te znaczniki w jeden łańcuch znaków za pomocą metody join() i wstawia je do elementu galerii za pomocą metody insertAdjacentHTML().
// Wywołuje funkcję createGallery() w celu utworzenia i wstawienia elementów galerii do dokumentu HTML.
// Tworzy obiekt galleryLightBox klasy SimpleLightbox, przypisując go do zmiennej o tej samej nazwie. Ten obiekt tworzy okno modalne, które pojawia się po kliknięciu na element galerii. W konstruktorze SimpleLightbox przekazuje dwa argumenty: selektor, który wybiera elementy <a> w galerii i opcje konfiguracyjne. W tym przypadku opcje to:
// showCounter: false - wyłącza wyświetlanie licznika zdjęć.
// captions: true - włącza wyświetlanie podpisów pod obrazkami.
// captionsData: "alt" - ustawia treść podpisów na wartość atrybutu "alt" obrazka.
// captionDelay: 250 - ustawia opóźnienie wyświetlania podpisów na 250 milisekund po otwarciu obrazka.
// Rejestruje funkcję obsługi zdarzenia "shown.simplelightbox" dla obiektu galleryLightBox. Ta funkcja jest wywoływana po otwarciu okna modalnego. W funkcji ta pobiera referencję do elementu HTML z podpisem i ustawia jego styl "text-align" na "center", aby wyśrodkować podpis pod obrazkiem.