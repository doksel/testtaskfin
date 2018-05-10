const doc = document;
let oldMain = doc.querySelector('main');

const addButton = doc.querySelector(".add");
addButton.addEventListener('click', function(event){
    event.preventDefault();
    fullMovies();

    console.log(window.localStorage.length);
    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";

    hiddenForm();
});


const cancelButton = doc.querySelector(".cancel");
cancelButton.addEventListener('click', function(event){
    event.preventDefault();
    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";
});

const editButton = doc.querySelector("form .edit");
editButton.addEventListener('click', function(event){
    event.preventDefault();
    // const oldElem=this.parentNode.parentNode.parentNode.parentNode.parentNode;
    
    // doc.querySelector('#form_title').value  = oldElem.querySelector('.title h2').innerHTML;
    // doc.querySelector('#form_country').value  = wraper_films.querySelector('.country').innerHTML;
    // doc.querySelector('#form_year').value  = wraper_films.querySelector('.year').innerHTML;
    // doc.querySelector('#form_genre').value  = wraper_films.querySelector('.genre').innerHTML;
    // doc.querySelector('#form_poster').value  = wraper_films.querySelector('.actors').innerHTML;
    // doc.querySelector('#form_description').value  = wraper_films.querySelector('.text').innerHTML;
   
    // const form = document.querySelector('.form');
    // form.hidden = false;
    // const iconPlus = document.querySelector('.icon');
    // iconPlus.style.transform='rotate(45deg)';

    // oldMain.replaceChild(newElem, oldElem);

    hiddenForm_editMovies();
});