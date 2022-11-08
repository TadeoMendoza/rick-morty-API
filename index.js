function getCharacters (done){
  const results = fetch( "https://rickandmortyapi.com/api/character" );
  results
      .then(response => response.json())
      .then(data => {
      done(data)
  });
  
}





function getEpisodes (ep){
    const episodios = fetch( "https://rickandmortyapi.com/api/episode" );
    episodios
        .then(response => response.json())
        .then(data => {
        ep(data)
    });
    

}



getEpisodes(data => {
    console.log(data);

    data.results.forEach(episodios => {
        const article = document.createRange().createContextualFragment(`
    <div class="col-12">
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#${episodios.episode}" >
              ${episodios.episode}  ${episodios.name}
            </button>
          </h2>
          <div id="${episodios.episode}" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
            <div class="accordion-body">
             <p class=""> Episodio lanzado el ${episodios.air_date}</p>
             <p class=""> Los personajes que aparecen son:</p>
             <a class="btn btn-primary" href="/episodio.html?epi=${episodios.id}">Ver Personajes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `);

    const main = document.querySelector("main");
    main.append(article);
    
    });
  
  })
  
 
              
  
