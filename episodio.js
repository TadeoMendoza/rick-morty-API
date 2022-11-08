var queryString = window.location.search;
var urlParanse = new URLSearchParams (queryString);
var episodio = urlParanse.get('epi');


console.log(episodio)


function getEpisodes (ep){
    const episodios = fetch("https://rickandmortyapi.com/api/episode/" + episodio);
    episodios
        .then(response => response.json())
        .then(data => {
        ep(data)
    });
    

}



getEpisodes(data => {

    console.log(data);
    a = data.characters;
    a= a.map(e=> e.split ("/").reverse()[0]);
    a= a.map(e=> e.split ("/").reverse()[0].join(","))
    
    data.characters.forEach(episodios => {

        
        const article = document.createRange().createContextualFragment(`
    <article>
       <div>${episodios} </div>
    </article>
    `);
    console.log(episodio)


    function getEpisodes (ep){
        const episodios = fetch("https://rickandmortyapi.com/api/character/1,183" + a);
        episodios
            .then(response => response.json())
            .then(data => {
            ep(data)
        });
        
    
    }
    const main = document.querySelector("main");
    main.append(article);
    
    });
  
  })