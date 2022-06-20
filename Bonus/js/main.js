// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


// creo l'arrey ad oggetti
const userArray = [
    {
        id:1 ,
        name: 'Aglieglie Brazorf ',
        profilepic : 'https://unsplash.it/300/300?image=1',
        date : '06/25/2021',
        post : 'https://unsplash.it/600/300?image=171',
        textpost :'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        like: 21,
    },
    {
        id:2,
        name: 'Giacomo Poretti',
        profilepic : null ,
        date : '06/25/2021',
        post : 'https://unsplash.it/600/300?image=420',
        textpost :'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        like: 74,
    },
    {
        id:3,
        name: 'Giovanni Storti',
        profilepic : 'https://unsplash.it/300/300?image=9',
        date : '06/25/2021',
        post : null,
        textpost :'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        like: 24,
    }
]
drawAllPost(userArray)

    // FUNZIONE DEL CLICK

    // Al click del pulsante like:
    // incremento il numero di like di 1 
    // e aggiungo la classe .like-button--liked per cambiare il colore del pulsante like

    const allLikeBtn = document.querySelectorAll('.js-like-button');
    const allLikeCounter = document.querySelectorAll('.js-likes-counter');
    for( let i=0; i < allLikeBtn.length; i++){
        likeBtn = allLikeBtn[i];

        likeBtn.addEventListener ('click', function(event) {
            event.preventDefault();
            if(!this.classList.contains('like-button--liked')){
                this.classList.add('like-button--liked');

                const relatedNumerLike = allLikeCounter[i];

                let relatedLike = parseInt(relatedNumerLike.innerHTML);

                relatedLike++

                relatedNumerLike.innerHTML = relatedLike;

            } else {
                this.classList.remove('like-button--liked');

                const relatedNumerLike = allLikeCounter[i];

                let relatedLike = parseInt(relatedNumerLike.innerHTML);

                relatedLike--

                relatedNumerLike.innerHTML = relatedLike;
            }                   
        });

    }


// ----------
// FUNZIONI
// ----------


function drawAllPost(postObjectsArray) {
        for(let i = 0; i < postObjectsArray.length; i++) {
            const thisPost = postObjectsArray[i];
            // richiamo la funzione per stampare in pagina
            drawSinglePost(thisPost);
        }
    }


    // funzione per creare la card e stamparla in pagina 

    function drawSinglePost(postObject) {

        const {name, profilepic, date, post, textpost, like} = postObject;
        const postContainer = document.getElementById('container');
       
        const postToDraw = `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
               ${profilepic === null ? splitName(name) :`<img class="profile-pic" src="${profilepic}" alt="${name}"></img>`} 
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${italianDate(date)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${textpost}</div>
        <div class="post__image">
            <img src=${post} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
         
        postContainer.innerHTML += postToDraw;
    }


    
// FUNZIONE per cambiare il tipo di data

function italianDate(date){
    const redate = date.split ("/");
    const redate2 = redate[1] + '/' + redate[0] + '/' + redate[2];
    return redate2
}


// FUNZIONE per prendersi le iniziali del nome e del cognomme
// faccio il returno di una stringa in modo tale da poter dare lo stile all'immegine del profilo con le iniziali 

function splitName(name){
    const rename = name.split (" ");
    const rename2 =rename[0][0] + rename[1][0];
    return `<span class="profile-pic-default ">${rename2}</span>`
}
