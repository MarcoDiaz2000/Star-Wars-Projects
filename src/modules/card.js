function createCard(item, likes) {
  const card = document.createElement('div');
  card.classList.add('col');

  card.innerHTML = `
    <img src="${item.image.medium}" alt="${item.name}">  
    <div class="col2">
      <div class="titleAndLike">
        <div class="movieName"> 
          <h2>${item.name}</h2>
        </div>
        <div class="like"> 
          <button data-id="${item.id}">
          <i class="far fa-heart"></i>
          </button>
          <span id="likes-${item.id}">${likes}</span>
        </div>
      </div>
      <div class="buttons">
        <button>Comments</button>
        <button>Reservations</button>
      </div>
    </div>
  `;

  return card;
}

export default createCard;
