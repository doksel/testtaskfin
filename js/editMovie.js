const form = doc.querySelector('.form_editMovies');
let changeMovieButton = form.querySelector(".edit_movie");
changeMovieButton.addEventListener('click', changeMovie);

let movieId, id;

function editMovie(event){
    event.preventDefault();

    id = event.target.getAttribute('data-movie-id');
    movie=document.querySelector(`[data-movie-id="${id}"]`);
    for(let i=0; i<movies.length;i++){
        if(movies[i].id == id){
            const indexMovie = movies.indexOf(movies[i]);

            doc.querySelector('#form_editMovies_title').value  = movie.querySelector('.title h2').innerHTML;
            doc.querySelector('#form_editMovies_country').value  = movie.querySelector('.country').innerHTML;
            doc.querySelector('#form_editMovies_year').value  = movie.querySelector('.year').innerHTML;
            doc.querySelector('#form_editMovies_genre').value  = movie.querySelector('.genre').innerHTML;
            doc.querySelector('#form_editMovies_poster').value  = movie.querySelector('.actors').innerHTML;
            doc.querySelector('#form_editMovies_description').value  = movie.querySelector('.text').innerHTML;
            showForm_editMovie();
            
            movies.splice(movies.indexOf(movies[i]), 1);
        }
    }
}

function changeMovie(event){
    event.preventDefault();

    const newMovie = 
    {
        id: +id,
        title: doc.querySelector('#form_editMovies_title').value,
        text:  doc.querySelector('#form_editMovies_description').value,
        country: doc.querySelector('#form_editMovies_country').value,
        year: doc.querySelector('#form_editMovies_year').value,
        genre: doc.querySelector('#form_editMovies_genre').value,
        actors: doc.querySelector('#form_editMovies_poster').value,
        comments: []
    }
    movies.push(newMovie);

    let serialMovies = JSON.stringify(movies);
    localStorage.setItem('movies', serialMovies);

    start();
    showForm_editMovie();

    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";
}
