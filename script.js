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
      { name: 'Vermelho', en: 'red', color: '#c83349', textColor: '#ffffff' },
      { name: 'Azul', en: 'blue', color: '#2472A4', textColor: '#ffffff' },
      { name: 'Verde', en: 'green', color: '#138A72', textColor: '#ffffff' },
      { name: 'Branco', en: 'white', color: '#FFFFFF', textColor: '#000000' },
      { name: 'Laranja', en: 'orange', color: '#f2ae72', textColor: '#000000' },
      { name: 'Roxo', en: 'purple', color: '#8E44AD', textColor: '#ffffff' },
      { name: 'Rosa', en: 'pink', color: '#f9d5e5', textColor: '#000000' },
      { name: 'Cinza', en: 'gray', color: '#d6d4e0', textColor: '#000000' },
      { name: 'Amarelo', en: 'yellow', color: '#ffcc5c', textColor: '#000000' },
      { name: 'Marrom', en: 'brown', color: '#a2836e', textColor: '#ffffff' },
    ];

    data.forEach((anime, index) => {
      const animeCard = document.createElement('div');
      animeCard.classList.add('flip-card');

      const { posterImage, titles, synopsis, coverImage } = anime.attributes;
      //Mostramos un número de palabras para la sinopsis
      const maxWords = 40;
      const shortSynopsis = synopsis.split(' ').slice(0, maxWords).join(' ');
      //Fin//

      const colorNamePt = colors[index].name;
      //mostrar el título de colores en capitalize
      const colorNameEn = colors[index].en;
      const titleNameColorEn =
        colorNameEn.charAt(0).toUpperCase() + colorNameEn.slice(1);

      const colorsName = colors[index % colors.length];

      animeCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${posterImage.large}" alt="Poster de ${titles.en_jp}" class="border" style="padding: 12px; width: 80%">
            <h2>${colorNamePt}</h2>
          </div>
          <div class="flip-card-back" style="background-color: ${colorsName.color}; color:${colorsName.textColor}" >
            <div class="flip-card-back-info">
                <img src="${coverImage.large}" alt="Imagen da Anime ${titles.en_jp}" class="round-image" >
              <h3 style= "color: ${colorsName.textColor}; font-size: 1.3rem" > ${titles.en_jp} </h3>
            </div>
            <a href="anime.html ">Mais informação</a>
            <h4> ${titleNameColorEn} </h4>
          </div>
        </div>
      `;
      cardContainer.appendChild(animeCard);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
