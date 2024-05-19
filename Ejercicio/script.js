//Crear un arreglo contener los libros 
const libros = [
    {
        id: 1,
        titulo: "Cash Out ",
        autor: " Acción, Crimen, Suspenso ",
        genero: "Fantasía",
        año: 2024,
        resena: "Criminal mastermind Mason is about to execute the score of a lifetime when his lover and key member of his crew, Decker, takes the team down and reveals she’s an undercover Interpol agent. Heartbroken, Mason escapes and retires from the life of crime until his younger brother Shawn is out of his league taking on a big bank heist all on his own. Mason has no choice left but to come to the rescue, while Interpol brings Decker in hoping to unnerve him. Before the SWAT teams storm the bank, Mason must use every tool in his arsenal to not only escape with the prize, but also the love of his life.",
        calificacion: 3.5,
        image: "Imágenes/Cash Out.jpg"
    },

    {
        id: 2,
        titulo: "Arthur",
        autor: "Simon Cellan Jones",
        genero: " Drama, Aventura ",
        año: 2024,
        resena: "Mikael Lindnord, el capitán del equipo sueco de atletismo de aventura, tuvo un extraño encuentro durante la carrera de 400 millas en la jungla ecuatoriana, cuando en su camino se cruzó un perro callejero. Tras el momento en el que Lindnord le alimentó, el perro le siguió por el resto del recorrido, haciendo incluso los tramos más complicados del planeta. Tras finalizar la carrera, Lindnord decidió adoptar al perro, llamarlo Arthur y llevarlo con él a Suecia.",
        calificacion: 3.5,
        image: "Imágenes/Arthur.jpg"
    },

    {
        id: 3,
        titulo: "Dune: Parte dos",
        autor: "Denis Villeneuve",
        genero: " Ciencia ficción, Aventura ",
        año: 1967,
        resena: "Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia. Al enfrentarse a una elección entre el amor de su vida y el destino del universo conocido, Paul se esfuerza por evitar un futuro terrible que solo él puede prever.",
        calificacion: 4.0,
        image: "Imágenes/Dune 2.jpg"
    },

    {
        id: 4,
        titulo: "Vermin: La plaga",
        autor: "Sébastien Vaniček",
        genero: "Terror",
        año: 2023,
        resena: "Kaleb está a punto de cumplir 30 años y nunca ha estado más solo. Está peleando con su hermana por un asunto de herencia y ha cortado los lazos con su mejor amigo. Apasionado por los animales exóticos, un día llega a casa con una araña venenosa y accidentalmente la deja escapar.",
        calificacion: 3.5,
        image: "Imágenes/Infested.jpg"
    },

    {
        id: 5,
        titulo: "Sangre en los labios",
        autor: "Rose Glass",
        genero: " Crimen, Romance, Suspenso",
        año: 2024,
        resena: "Jackie está decidida a triunfar como culturista y se dirige a Las Vegas para participar en una competición. En su camino, pasa por un pequeño pueblo de Nuevo México donde conoce a Lou, la solitaria gerente del gimnasio local. El padre de Lou es traficante de armas y lleva las riendas de un sindicato del crimen. Jackie y Lou se enamoran. Pero su relación provoca violencia y ambas se ven inmersas en las maquinaciones de la familia de Lou.",
        calificacion: 3.8,
        image: "Imágenes/Labios.jpg"
    },

    {
        id: 6,
        titulo: "Godzilla y Kong: El nuevo imperio",
        autor: "Adam Wingard",
        genero: " Acción, Ciencia ficción, Aventura",
        año: 2024,
        resena: "Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida escondida dentro de nuestro mundo. La nueva y épica película profundizará en las historias de estos titanes, sus orígenes y los misterios de Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre.",
        calificacion: 4.0,
        image: "Imágenes/GodzillaKong2.jpg"
    }

] 

function mostrarLibros(librosAMostrar){
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";


if(librosAMostrar.length === 0){
    bookList.innerHTML = "<p>No se encontraron resultados</p>";
}else{
    librosAMostrar.forEach(libros => {
        const bookCard = `
        <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${libros.image}" class="card-img-top" alt"${libros.titulo}">
        <div class="card-body">
          <h5 class="card-title">${libros.titulo}</h5>
          <h6 class="card-subtitle">${libros.resena}</h6>
          <p class="card-text">Año: ${libros.año}<p>
          <p class="card-text">Genero: ${libros.genero}<p>
          <p class="card-text">Calificación: ${libros.calificacion}<p>
          <button type="button" class="btn btn-primary">Detalles</button>
        </div>
      </div>
       `;
       bookList.innerHTML += bookCard;
   }); 

}
}

//Evento listeners a los botones de detalles

const detalleBotones = document.querySelectorAll(".details-btn");
detalleBotones.forEach((button, index) => {
    const libroSeleccionado = libros [index];
    const modalBody = `
    <img src="${libroSeleccionado.image}" class="card-img-top" alt"${libroSeleccionado.titulo}">
    <p><strong>titulo:</strong>${libroSeleccionado.titulo}<p>
    <p><strong>autor:</strong>${libroSeleccionado.autor}</p>   
    `;
    const modalBodyElement = document.getElementById(bookModalBody);
    modalBodyElement.innerHTML  = modalBody;
    const bookModal = new bootstrap.Modal(document.getElementById('bookModal'));
    bookModal.show();

});





//Función buscar libros

function busquedaLibros(query){
    const terminoBusqueda = query.trim().toLowerCase();

    //filtrar
    const filtroLibros = libros.filter(libro =>{
        return(
            libro.titulo.toLowerCase().includes(terminoBusqueda) ||
            libro.autor.toLowerCase().includes(terminoBusqueda) ||
            String(libro.año).includes(terminoBusqueda)
        );
    });

//Mostrar peliculas

mostrarLibros(filtroLibros)

}

document.addEventListener("DOMContentLoaded",() => {
    mostrarLibros(libros);
})

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input",() => {
    busquedaLibros(searchInput.value);
})
