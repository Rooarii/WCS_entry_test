window.onload = function(){
    const form = document.querySelector("form");
    form.addEventListener("submit", envoyerFormulaire);

    function envoyerFormulaire(event){
        // le code event.preventDefault(); permet d'éviter le fonctionnement par défaut de l'événement
        event.preventDefault();
        console.log("Formulaire envoyé !");
        alert("Form sent!");
    }
}