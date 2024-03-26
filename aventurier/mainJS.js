/*
const aventurierLocal=

[
    {
        "id": "1",
        "nom":"AurelSanne",
        "couleur":"#f45896",
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": "2",
        "nom":"mikahBurnne",
        "couleur":"#3250a8",
        "avatar": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": "3",
        "nom":"jarmen",
        "couleur":"#b30505",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": "4",
        "nom":"budesky",
        "couleur":"#480154",
        "avatar": "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
        "id": "5",
        "nom":"freidmann",
        "couleur":"#485444",
        "avatar": "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
*/
//creation d'un objet de type carte avec les informations de lobjets creer a partir de la constante AVENTURIER

function creerCarte(aventurier)
{$("#aventuriers").append(`
 <div class="card" style="width: 18rem;">
  <img src="${aventurier.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${aventurier.nom}</h5>
    <p class="card-text">${aventurier.id}</p>
    <input type="color" value="${aventurier.couleur}" id="hero-${aventurier.id}" disabled>
    <a href="#" class="btn btn-primary">Voir détails</a>
  </div>
</div>
`)

}
/*LOCALEMENT*//*
aventurierLocal.forEach(function(aventurier)
    {
        creerCarte(aventurier)
    }
)
*/
/*
$.getJSON('aventurier.json').done(function (aventuriers){
    aventuriers.forEach(function (aventurier){
        creerCarte(aventurier);
    });
})
.fail(function (error){
    $('.alert').text(error.status).removeClass('d-none')
})
*/ //<<-------------------------

/*         FAIT JAVASCRIPT (SANS BIBLIOTHÈQUE)                          */
fetch('aventurier.json')
    .then(reponse=>{
        //Un problème s'est produit
        if(!reponse.ok){
            //Lancer une exception (pas de distinction de syntaxe entre exception et erreur)
            throw new Error ("Erreur "+reponse.status);
        }
        return reponse.json();
    })
    .then(function (aventurier){
    aventurier.forEach(function (aventurier){
       creerCarte(aventurier)
    });
    })
    //Attraper et gérer
    .catch(function (erreur){
        $('alert').text(erreur.message).removeClass('d-none');
    });