function createCard(item) {
  return `
    <div class="col">
      <img src="${item.image.medium}" alt="${item.name}">  
      <div class="col2">
        <div class="titleAndLike">
          <div class="movieName"> 
            <h2>${item.name}</h2>
          </div>
          <div class="like"> 
            <button data-id="${item.id}">
              <i class="fa fa-heart"></i>
            </button>
            <span id="likes-${item.id}">0</span>
          </div>
        </div>
        <div class="buttons">
          <button>Comments</button>
          <button>Reservations</button>
        </div>
      </div>
    </div>
  `;
}

export default createCard;
