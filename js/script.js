const eventos = [

    {
        imagen: "Evento1.jpg",
        descripcion:
            "La presentación de Sara Viloria me permitió conocer su trayectoria profesional y entender por qué el color se ha convertido en una de sus principales áreas de investigación."
    },

    {
        imagen: "Evento2.jpg",
        descripcion:
            "Durante los primeros minutos de la conferencia se planteó una reflexión sobre cómo percibimos visualmente nuestro entorno y cómo el color condiciona gran parte de nuestras decisiones."
    },

    {
        imagen: "Evento3.jpg",
        descripcion:
            "Me llamó la atención la manera en que se relacionó la creatividad con el análisis técnico, demostrando que ambos conceptos pueden coexistir perfectamente."
    },

    {
        imagen: "Evento4.jpg",
        descripcion:
            "Aquí observamos una comparación entre las definiciones de color propuestas por la RAE y el Oxford Dictionary, evidenciando distintas perspectivas sobre un mismo concepto."
    },

    {
        imagen: "Evento5.jpg",
        descripcion:
            "Se exploró la importancia histórica del color y cómo diferentes civilizaciones utilizaron pigmentos para representar poder, prestigio y estatus."
    },

    {
        imagen: "Evento6.jpg",
        descripcion:
            "Esta diapositiva me hizo reflexionar sobre la importancia de dominar el color cuando se diseñan experiencias visuales, productos digitales o piezas gráficas."
    },

    {
        imagen: "Evento7.jpg",
        descripcion:
            "Aprendí que observar el color requiere entrenamiento visual y que muchas veces pasamos por alto detalles fundamentales de nuestro entorno."
    },

    {
        imagen: "Evento8.jpg",
        descripcion:
            "Se presentó una explicación sobre armonías cromáticas y cómo cualquier combinación puede funcionar si existe una intención comunicativa clara."
    },

    {
        imagen: "Evento9.jpg",
        descripcion:
            "Esta parte reforzó la idea de que el significado del color depende del mensaje que queremos transmitir y del contexto donde se utiliza."
    },

    {
        imagen: "Evento10.jpg",
        descripcion:
            "Uno de los momentos más interesantes fue comprender que la percepción visual está influenciada por factores culturales y experiencias personales."
    },

    {
        imagen: "Evento11.jpg",
        descripcion:
            "Se analizaron ejemplos prácticos donde pequeñas variaciones cromáticas generaban cambios importantes en la interpretación visual."
    },

    {
        imagen: "Evento12.jpg",
        descripcion:
            "Sara cuestionó la psicología tradicional del color, proponiendo una visión más flexible basada en experiencias individuales."
    },

    {
        imagen: "Evento13.jpg",
        descripcion:
            "La discusión sobre percepción visual permitió entender cómo nuestro cerebro interpreta la información que recibe constantemente."
    },

    {
        imagen: "Evento14.jpg",
        descripcion:
            "Aquí se explicó el concepto de tono o matiz dentro del círculo cromático y su importancia para construir sistemas visuales coherentes."
    },

    {
        imagen: "Evento15.jpg",
        descripcion:
            "Se profundizó en conceptos como chroma, intensidad y saturación, fundamentales para la creación de paletas visuales equilibradas."
    },

    {
        imagen: "Evento16.jpg",
        descripcion:
            "Aprendí que los contrastes adecuados pueden mejorar significativamente la comunicación visual y la experiencia de usuario."
    },

    {
        imagen: "Evento17.jpg",
        descripcion:
            "Esta sección presentó ejemplos reales de aplicación del color en diseño, moda y comunicación visual."
    },

    {
        imagen: "Evento18.jpg",
        descripcion:
            "Se mostraron métodos para construir armonías análogas, complementarias y esquemas de contraste más complejos."
    },

    {
        imagen: "Evento19.jpg",
        descripcion:
            "La reflexión final me invitó a observar nuevamente los detalles cotidianos que normalmente pasan desapercibidos."
    },

    {
        imagen: "Evento20.jpg",
        descripcion:
            "La despedida de la conferencista cerró una experiencia enriquecedora que cambió mi forma de interpretar el color."
    }

];



document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("eventos-container");

    if (contenedor) {

        let html = "";

        eventos.forEach((evento, index) => {

            html += `
            
            <div class="col-md-4 mb-4 fade-up">

                <div class="card gallery-card h-100 shadow">

                    <img 
                        src="img/${evento.imagen}" 
                        class="card-img-top"
                        alt="Img ${index + 1}"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            Img ${index + 1}
                        </h5>

                        <p class="card-text">
                            ${evento.descripcion}
                        </p>

                        <button
                            class="btn btn-fashion mt-auto "
                            data-Img="${index}">
                            
                        </button>

                    </div>

                </div>

            </div>

            `;

        });

        contenedor.innerHTML = html;

    }

});



const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".fade-up").forEach((elemento) => {

        observer.observe(elemento);

    });

});


document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("ver-detalle")) return;

    const indice = e.target.dataset.evento;

    const evento = eventos[indice];

    const modalTitulo =
        document.querySelector("#modalInfo .modal-title");

    const modalBody =
        document.querySelector("#modalInfo .modal-body");

    modalTitulo.textContent =
        `Evento ${Number(indice) + 1}`;

    modalBody.innerHTML = `

        <img
            src="img/${evento.imagen}"
            class="img-fluid rounded mb-4"
            alt="Evento"
        >

        <p>
            ${evento.descripcion}
        </p>

        <hr>

        <p>
            Esta imagen forma parte de mi recorrido por Moda ECCI.
            Cada actividad permitió fortalecer mi comprensión sobre
            teoría del color, diseño visual, experiencia de usuario,
            creatividad y comunicación gráfica.
        </p>

    `;

    const modal =
        new bootstrap.Modal(
            document.getElementById("modalInfo")
        );

    modal.show();

});



window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".glass-navbar");

    if (!navbar) return;

    if (window.scrollY > 100) {

        navbar.style.background =
            "rgba(0,0,0,0.85)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.55)";

    }

});

const btnTop = document.createElement("button");

btnTop.innerHTML =
    '<i class="bi bi-arrow-up"></i>';

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "25px";
btnTop.style.right = "25px";
btnTop.style.width = "55px";
btnTop.style.height = "55px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.cursor = "pointer";
btnTop.style.zIndex = "999";
btnTop.style.display = "none";
btnTop.style.color = "#fff";
btnTop.style.fontSize = "1.3rem";
btnTop.style.background =
    "linear-gradient(135deg,#ff0080,#7b2ff7,#00d4ff)";
btnTop.style.boxShadow =
    "0 10px 25px rgba(0,0,0,.25)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


function animarNumero(elemento, objetivo) {

    let valor = 0;

    const incremento = objetivo / 100;

    const intervalo = setInterval(() => {

        valor += incremento;

        elemento.textContent =
            Math.floor(valor);

        if (valor >= objetivo) {

            elemento.textContent =
                objetivo;

            clearInterval(intervalo);

        }

    }, 20);

}



window.addEventListener("DOMContentLoaded", () => {

    const tooltipTriggerList =
        [].slice.call(
            document.querySelectorAll(
                '[data-bs-toggle="tooltip"]'
            )
        );

    tooltipTriggerList.map(

        (tooltipTriggerEl) =>

            new bootstrap.Tooltip(
                tooltipTriggerEl
            )

    );

});



window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



document.querySelectorAll(".nav-link")
.forEach((link) => {

    link.addEventListener("click", () => {

        const navbar =
            document.querySelector(".navbar-collapse");

        if (
            navbar &&
            navbar.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbar);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


window.addEventListener("DOMContentLoaded", () => {

    console.log(`
    ====================================
            MODA ECCI
    ====================================

    Proyecto académico ADSO

    HTML5
    CSS3
    JavaScript
    Bootstrap

    Desarrollado para GitHub Pages
    ====================================
    `);

});
