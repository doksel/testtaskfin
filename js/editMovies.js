function editMovies(){
    const doc = document;

    //     doc.querySelector('#form_title').value  = oldElem.querySelector('.title h2').innerHTML;
//    doc.querySelector('#form_country').value  = wraper_films.querySelector('.country').innerHTML;
//    doc.querySelector('#form_year').value  = wraper_films.querySelector('.year').innerHTML;
//    doc.querySelector('#form_genre').value  = wraper_films.querySelector('.genre').innerHTML;
//    doc.querySelector('#form_poster').value  = wraper_films.querySelector('.actors').innerHTML;
//    doc.querySelector('#form_description').value  = wraper_films.querySelector('.text').innerHTML;


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
    title_in.innerHTML = doc.querySelector('#form_title').value;

    const details_film = doc.createElement('div');
    details_film.className = 'details-film';

    const text = doc.createElement('div');
    text.className = 'text';
    text.innerHTML = doc.querySelector('#form_description').value;

    const country = doc.createElement('div');
    country.className = 'country';
    country.innerHTML = doc.querySelector('#form_country').value;

    const year = doc.createElement('div');
    year.className = 'year';
    year.innerHTML = doc.querySelector('#form_year').value;

    const genre = doc.createElement('div');
    genre.className = 'genre';
    genre.innerHTML = doc.querySelector('#form_genre').value;

    const actors = doc.createElement('div');
    actors.className = 'actors';
    actors.innerHTML = doc.querySelector('#form_poster').value;

    const buttons = doc.createElement('div');
    buttons.className = 'buttons';
    const btn_delete = doc.createElement('button');
    btn_delete.className = 'btn btn-delete delete';
    btn_delete.innerHTML = "Delete";
    btn_delete.addEventListener('click', function(event){
        event.preventDefault();
        const elem=this.parentNode.parentNode.parentNode.parentNode.parentNode;
        console.log(elem);
        elem.remove();
    });
    const btn_edit = doc.createElement('button');
    btn_edit.className = 'btn btn-edit edit';
    btn_edit.innerHTML = "Edit";
    btn_edit.addEventListener('click', function(event){
        event.preventDefault();
        const oldElem=this.parentNode.parentNode.parentNode.parentNode.parentNode;
               
    console.log(oldElem);
    });
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

    oldMain.replaceChild(wraper_films, oldElem);





    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";
    
    hiddenForm();
}


