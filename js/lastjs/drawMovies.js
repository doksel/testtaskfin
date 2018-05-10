function start(){  
    const doc = document;
    let oldMain = doc.querySelector('main');
    oldMain.innerHTML = "";

    for (var i=0;i<movies.length;i++){
        console.log(movies);
        drawMovies(i);
    }

    function drawMovies(i){
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

        btn_delete.addEventListener('click', deleteMovie);
        }
}

window.onload = start;