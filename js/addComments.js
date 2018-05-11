const addCommentButton = doc.querySelector(".add");
addCommentButton.addEventListener('click', addMovies);

function addComments(){
    event.preventDefault();

    showForm_addComment();
    idComments = event.target.getAttribute('data-movie-id');
    for(let i=0; i<movies.length;i++){
        if(movies[i].id == id){
            const indexComment = movies.comments.indexOf(movies[i]);

            showForm_editMovie();
            
            movies[i].comments.splice(movies[i].comments.indexOf(movies[i].comments), 1);
            
            const newComment = doc.querySelector("#form_addComment_description").value;

            movies.comments.push(newComment);

            showForm_addComment();
            start();

            doc.querySelector("#form_addComment_description").value = '';
        }
    }
}