const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener('click', cancelForm);

function cancelForm(event){
    event.preventDefault();
    doc.querySelector('#form_title').value = "";
    doc.querySelector('#form_country').value = "";
    doc.querySelector('#form_year').value = "";
    doc.querySelector('#form_genre').value = "";
    doc.querySelector('#form_poster').value = "";
    doc.querySelector('#form_description').value = "";
};