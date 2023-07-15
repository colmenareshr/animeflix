fetch('https://kitsu.io/api/edge/trending/anime')
  .then((response) => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(({ data }) => {
    const cardContainer = document.getElementById('card-container');
    console.log('Body:', data);

    const colors = [
      { name: 'Vermelho', en: 'red'  },
      { name: 'Azul', en: 'blue' },
      { name: 'Verde', en: 'green' },
      { name: 'Branco', en: 'white' },
      { name: 'Laranja', en: 'orange' },
      { name: 'Roxo', en: 'purple' },
      { name: 'Rosa', en: 'pink' },
      { name: 'Cinza', en: 'grey' },
      { name: 'Amarelo', en: 'yellow' },
      { name: 'Marrom', en: 'brown' },
    ];

    data.forEach((anime, index) => {
      const animeCard = document.createElement('div');
      animeCard.classList.add('flip-card');

      const { posterImage, titles, synopsis } = anime.attributes;
      //Mostramos un número de palabras para la sinopsis
      const maxWords = 50;
      const shortSynopsis = synopsis.split(' ').slice(0, maxWords).join(' ')
      //Fin//

      const backgroundColor = colors[index % colors.length];

      animeCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${posterImage.large}" alt="Poster de ${titles.en}" class="border" style="padding: 12px; width: 80%">
            <h2>${backgroundColor.en}</h2>
          </div>
          <div class="flip-card-back" style="background-color: ${backgroundColor.en}">
            <h3>${titles.en}</h3>
            <p> ${shortSynopsis} </p>
            <p> ${backgroundColor.name} </p>
          </div>
        </div>
      `;
      cardContainer.appendChild(animeCard);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
