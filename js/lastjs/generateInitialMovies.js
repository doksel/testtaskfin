let movies = [
    {
        title: 'Martianin',
        text:  'Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impending sandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm.The mission, considering him dead...',
        country: 'USA',
        year: '2016',
        genre: 'Fantasy',
        actors: 'Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica  Chastain, Kate Mara, Kristen Wiig, Matt Damon, Mishael Pena, Sean Bean, Sebastian Stan'
    }
];
// 13-14 строки для отображения первого фильма. Их потом или сразу нужно закомментировать
// чтобы каждый раз не перезаписывать localStorage (не удалять содержимое)
let serialMovies = JSON.stringify(movies);
localStorage.setItem('movies', serialMovies);
movies = JSON.parse(localStorage.getItem("movies"));
