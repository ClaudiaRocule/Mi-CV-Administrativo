// Selecciona el elemento con class "navbar" y almacena su posicion superior (offsetTop) en la variable navbaroffsetTop.
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop; //Almacena la distancia desde la parte superior del navbar hasta el borde superior del elemento padre más cercano.

// Selecciona todos los elementos "seccion" y todos los elementos con la class "navbar-link".
const secciones = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Selecciona el elemento con la class "envoltura-barra-progreso" y define un array con porcentajes para la barra de progreso.
const barraProgreso = document.querySelector(".envoltura-barra-progreso"); // Faltaba el punto antes del nombre de la clase
const porcentajeBarraProgreso = [98, 87, 90, 95, 84, 100];

// Agrega un event listener al evento de desplazamiento (scroll) en la ventana que llama a la función 'funcionPrincipal'.
window.addEventListener("scroll", () => {
    funcionPrincipal();
})

// Definición de la función principal.
const funcionPrincipal = () => {
    // Verifica si la posición de desplazamiento vertical (scrollY) es mayor o igual a la posición superior de la barra de navegación.
    // Si es así, agrega la clase "sticky" a la barra de navegación, de lo contrario la elimina.
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    // Itera sobre cada seccion y verifica si la posición de desplazamiento vertical (pageYOffset)
    // es mayor o igual a la posición superior de la seccion - 10. Si es así, actualiza las clases de los enlaces de la barra de navegación.
    secciones.forEach((seccion, i) => {
        if (window.pageYOffset >= seccion.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("cambiar");
            });
            navbarLinks[i].classList.add("cambiar");
        }
    });

    // Verifica si la posición de desplazamiento vertical más la altura de la ventana (window.innerHeight) es mayor o igual
    // a la posición superior de la barra de progreso. Si es así, actualiza el ancho y el texto de los elementos con la clase "porcentaje-progreso".
    if (window.pageYOffset + window.innerHeight >= barraProgreso.offsetTop) {
        document.querySelectorAll(".porcentaje-progreso").forEach((el, i) => {
            el.style.width = `${porcentajeBarraProgreso[i]}%`; // Corrección en el acceso a la propiedad style
            el.previousElementSibling.firstElementChild.textContent = porcentajeBarraProgreso[i];
        });
    }
};

// Llama a la función principal para ejecutarla inicialmente.
funcionPrincipal();

// Agrega un event listener al evento de cambio de tamaño de la ventana (resize) que recarga la página.
window.addEventListener("resize", () => {
    window.location.reload();
});
