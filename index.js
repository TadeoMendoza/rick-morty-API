function getCharacters (done){
    const results = fetch( "https://rickandmortyapi.com/api/character" );
    results
        .then(response => response.json())
        .then(data => {
        done(data)
    });
    

}

getCharacters(data => {
    console.log(data);

    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
        <article>
        <div class="card" style="">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${personaje.name}</h5>
              <p class="card-text">Estado: ${personaje.status}</p>
              <p class="card-text">info del personaje</p>
              <p class="card-text">info del personaje</p>
              <p class="card-text">info del personaje</p>
              <a href="#" class="btn btn-primary">boton no se para que</a>
            </div>
          </div>
    </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
    });
})