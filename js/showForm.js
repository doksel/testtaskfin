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

function showComments() {
    const form = doc.querySelector('.comments');
    const icon_comments = doc.querySelector('.icon_comments')
    if(form.style.display == 'none'){
        form.style.display = "flex";
        form.style.zIndex = 9999;
        icon_comments.style.transform='rotate(180deg)';
    }else{
        form.style.display = "none";
        icon_comments.style.transform='rotate(360deg)';
    }
}
