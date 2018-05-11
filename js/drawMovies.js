function start(){  
    const doc = document;
    let oldMain = doc.querySelector('main');
    oldMain.innerHTML = "";

    for (let i=0;i<movies.length;i++){
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

        const film_footer = doc.createElement('div');
        film_footer.className = 'film_footer';
        film_footer.innerHTML = 'Comments:';
        const icon_comments = doc.createElement('div');
        icon_comments.className = 'icon_comments';
        const count_comments = doc.createElement('div');
        count_comments.className = 'count_comments';
        count_comments.innerHTML =  movies[i].comments.length;
        const comments = doc.createElement('div');
        comments.className = 'comments';
        if(movies[i].comments.length){
            for(let j=0; j<movies[i].comments.length;j++){
                const line = doc.createElement('hr');
                line.className = 'line';
                const textComment = doc.createElement('p');
                textComment.className = 'textComment';
                textComment.innerHTML = movies[i].comments[j];
                              
                comments.appendChild(line);
                comments.appendChild(textComment);
            }
        }else{
            movies[i].comments.innerHTML = '';
            count_comments.innerHTML = 0;
        }  

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

        film_footer.appendChild(count_comments);
        film_footer.appendChild(icon_comments);
        films.appendChild(film_footer);
        films.appendChild(comments);

        oldMain.appendChild(wraper_films);

        wraper_films.setAttribute('data-movie-id',  movies[i].id);
        btn_delete.setAttribute('data-movie-id',  movies[i].id);    
        btn_edit.setAttribute('data-movie-id',  movies[i].id); 
        comments.setAttribute('data-movie-id',  movies[i].id); 

        btn_edit.addEventListener('click', editMovie);
        btn_delete.addEventListener('click', deleteMovie);
        film_footer.addEventListener('click', showComments);
        comments.addEventListener('click', showComments);           
    }
}

window.onload = start;