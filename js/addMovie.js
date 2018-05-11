const doc = document;
let oldMain = doc.querySelector('main');
const addButton = doc.querySelector(".add");
addButton.addEventListener('click', addMovies);

function addMovies(event){
    event.preventDefault();

    let id = (new Date().getTime());
    doc.querySelector('.wraper_films').setAttribute('data-movie-id', id);
    doc.querySelector('.delete').setAttribute('data-movie-id', id);
    const newMovie = 
    {
        id: id,
        title: doc.querySelector('#form_title').value,
        text:  doc.querySelector('#form_description').value,
        country: doc.querySelector('#form_country').value,
        year: doc.querySelector('#form_year').value,
        genre: doc.querySelector('#form_genre').value,
        actors: doc.querySelector('#form_poster').value,
        comments: []
    }
    movies.push(newMovie);
    let serialMovies = JSON.stringify(movies);
    localStorage.setItem('movies', serialMovies);

    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";

    showForm();
    start();
};



