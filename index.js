const requestTarget = document.querySelector('#request-target');
const itemContainer = document.querySelector('#item-container');
const intersectionOptions = {
    threshold: 1
}

let apiUrl = 'https://rickandmortyapi.com/api/episode';
let loading = false;

const onIntersect = ([entry]) => {
    if(apiUrl && !loading && entry.isIntersecting)
        makeRequest();
}

const makeRequest = () => {
    loading = true;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cleanUp(data.info.next);
            renderItems(data.results);
        });
}

const cleanUp = nextPage => {
    apiUrl = nextPage;
    loading = false;
}

const renderItems = results => {
    results.forEach(item => {
        itemContainer.appendChild(createItem(item));
    });
}

const createItem = item => {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = (
        `
        <div class="col-12">
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#${item.episode}" >
              ${item.episode}  ${item.name}
            </button>
          </h2>
          <div id="${item.episode}" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
            <div class="accordion-body">
             <p class=""> Episodio lanzado el ${item.air_date}</p>
             <p class=""> Los personajes que aparecen son:</p>
             <a class="btn btn-primary" href="./episodio.html?epi=${item.id}">Ver Personajes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        `
    );
    return newItem;
}

let observer = new IntersectionObserver(onIntersect, intersectionOptions);

observer.observe(requestTarget);

