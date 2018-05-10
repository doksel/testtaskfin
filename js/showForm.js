function showForm() {
    const form = document.querySelector('.form');
    form.hidden = false;
    const iconPlus = document.querySelector('.icon');
    iconPlus.style.transform='rotate(45deg)';
}
function hiddenForm() {
    const form = document.querySelector('.form');
    form.hidden = true;
    const iconPlus = document.querySelector('.icon');
    iconPlus.style.transform='rotate(90deg)';
}
function showForm_editMovies() {
    const form = document.querySelector('.form_editMovies');
    form.hidden = false;
}
function hiddenForm_editMovies() {
    const form = document.querySelector('.form_editMovies');
    form.hidden = true;
}