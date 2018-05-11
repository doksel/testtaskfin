function showForm() {
    const form = doc.querySelector('.form');
    const iconPlus = doc.querySelector('.icon');
    if(form.hidden == true){    
        form.hidden = false;
        iconPlus.style.transform='rotate(45deg)';
    }else{
        form.hidden = true;
        iconPlus.style.transform='rotate(90deg)';
    }
}

function showForm_editMovie() {
    const form = doc.querySelector('.form_editMovies');
    if(form.hidden == true){    
        form.hidden = false;
    }else{
        form.hidden = true;
    }
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

function showForm_addComment() {
    const form = doc.querySelector('.form_addComment');
    if(form.hidden == true){    
        form.hidden = false;
    }else{
        form.hidden = true;
    }
}
