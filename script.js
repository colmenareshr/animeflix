fetch('https://kitsu.io/api/edge/trending/anime')
  .then((response) => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(({ data }) => {
    const cardContainer = document.getElementById('card-container');
    console.log('Body:', data);

    data.map((anime) => {
      const animeCard = document.createElement('div');
      animeCard.classList.add('flip-card');

      const { posterImage, titles } = anime.attributes;

      animeCard.innerHTML = `
      <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${posterImage.large}" alt="${titles.en}" class="w3-border" style="padding: 12px; width: 80%">
              <h2>${titles.en}</h2>
            </div>
            <div class="flip-card-back">
              <h2>${titles.en}</h2>
              <p>Synopsis</p>
              <p>XXXXXXXXX</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.appendChild(animeCard);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
