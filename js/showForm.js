function showForm() {
    const form = doc.querySelector('.form');
    form.hidden = false;
    const iconPlus = doc.querySelector('.icon');
    iconPlus.style.transform='rotate(45deg)';
}
function hiddenForm() {
    const form = doc.querySelector('.form');
    form.hidden = true;
    const iconPlus = doc.querySelector('.icon');
    iconPlus.style.transform='rotate(90deg)';
}
function showForm_editMovie() {
    const form = doc.querySelector('.form_editMovies');
    form.hidden = false;
}
function hiddenForm_editMovie() {
    const form = doc.querySelector('.form_editMovies');
    form.hidden = true;
}