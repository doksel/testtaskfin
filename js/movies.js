const firstMovie = [
    {
        title: 'Martianin',
        text:  'Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impending sandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm.The mission, considering him dead...',
        country: 'USA',
        year: '2016',
        genre: 'Fantasy',
        actors: 'Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica  Chastain, Kate Mara, Kristen Wiig, Matt Damon, Mishael Pena, Sean Bean, Sebastian Stan'
    }
];

let serialMovies = JSON.stringify(firstMovie);
localStorage.setItem('movies', serialMovies);
//  Вначале я записал в localStorage данные первого фильма Марсианин и закомментировал
//  12 и 13 строки, что бы не было перезаписи localStorage при перезагрузки страницы
let movies = JSON.parse(localStorage.getItem("movies"));
// Дальше отображаю все сохраненные в localStorage фильмы
function start(){
    for (var i=0;i<movies.length;i++){
        drawMovies(i);
    }
}

// Создание фильмотеки, сохраненной в localStorage 
function drawMovies(i) {
    const doc = document;
    let oldMain = doc.querySelector('main');

    const wraper_films = doc.createElement('div');
    wraper_films.className = 'wraper_films';
    const films = doc.createElement('section');
    films.className = 'films';
    const films_main = doc.createElement('div');
    films_main.className = 'films_main';
    const wrap = doc.createElement('div');
    wrap.className = 'wrap';

    const film_img = doc.createElement('div');
    film_img.className = 'film_img';

    const title = doc.createElement('div');
    title.className = 'title';
    const title_in = doc.createElement('h2');
    title_in.innerHTML = movies[i].title;

    const details_film = doc.createElement('div');
    details_film.className = 'details-film';

    const text = doc.createElement('div');
    text.className = 'text';
    text.innerHTML = movies[i].text;

    const country = doc.createElement('div');
    country.className = 'country';
    country.innerHTML = movies[i].country;

    const year = doc.createElement('div');
    year.className = 'year';
    year.innerHTML = movies[i].year;

    const genre = doc.createElement('div');
    genre.className = 'genre';
    genre.innerHTML = movies[i].genre;

    const actors = doc.createElement('div');
    actors.className = 'actors';
    actors.innerHTML = movies[i].actors;

    const buttons = doc.createElement('div');
    buttons.className = 'buttons';
    const btn_delete = doc.createElement('button');
    btn_delete.className = 'btn btn-delete delete';
    btn_delete.innerHTML = "Delete";
    btn_delete.setAttribute('data-name', title_in.innerHTML);
    const btn_edit = doc.createElement('button');
    btn_edit.className = 'btn btn-edit edit';
    btn_edit.innerHTML = "Edit";

    buttons.appendChild(btn_edit);
    buttons.appendChild(btn_delete);
 
    details_film.appendChild(country);
    details_film.appendChild(year);
    details_film.appendChild(genre);
    details_film.appendChild(actors);

    title.appendChild(title_in);

    wrap.appendChild(buttons);
    wrap.appendChild(details_film);
    wrap.appendChild(text);
    wrap.appendChild(title);
    wrap.appendChild(film_img);
    
    films_main.appendChild(wrap);
    films.appendChild(films_main);
    wraper_films.appendChild(films);

    oldMain.appendChild(wraper_films);

    // Вешаю события на кнопки
    btn_delete.addEventListener('click', function(event){
        event.preventDefault();
        const elem=this.parentNode.parentNode.parentNode.parentNode.parentNode;
       
        console.log(this.getAttribute('data-name'));
        movies.splice(this.getAttribute('data-name'),1);
        let serialMovies = JSON.stringify(movies);
        localStorage.setItem('movies', serialMovies);
        elem.remove();
    });
    btn_edit.addEventListener('click', function(event){
        event.preventDefault();
        const oldElem=this.parentNode.parentNode.parentNode.parentNode.parentNode;
    
        doc.querySelector('#form_title').value  = oldElem.querySelector('.title h2').innerHTML;
        doc.querySelector('#form_country').value  = wraper_films.querySelector('.country').innerHTML;
        doc.querySelector('#form_year').value  = wraper_films.querySelector('.year').innerHTML;
        doc.querySelector('#form_genre').value  = wraper_films.querySelector('.genre').innerHTML;
        doc.querySelector('#form_poster').value  = wraper_films.querySelector('.actors').innerHTML;
        doc.querySelector('#form_description').value  = wraper_films.querySelector('.text').innerHTML;

        showForm_editMovies();
    });
};


window.onload = start;