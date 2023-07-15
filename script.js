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
      { name: 'Vermelho', en: 'red', color: '#c83349' },
      { name: 'Azul', en: 'blue', color: '#2472A4', textColor: '#f4f4f4' },
      { name: 'Verde', en: 'green', color: '#138A72' },
      { name: 'Branco', en: 'white' },
      { name: 'Laranja', en: 'orange' },
      { name: 'Roxo', en: 'purple', color: '#8E44AD' },
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
      const maxWords = 60;
      const shortSynopsis = synopsis.split(' ').slice(0, maxWords).join(' ')
      //Fin//

      //mostrar el título de colores en capitalize 
      const colorNameEn = colors[index % colors.length].en;
      const titleNameColorEn = colorNameEn.charAt(0).toUpperCase() + colorNameEn.slice(1) 


      const backgroundColor = colors[index % colors.length];

      animeCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${posterImage.large}" alt="Poster de ${titles.en}" class="border" style="padding: 12px; width: 80%">
            <h2>${titleNameColorEn}</h2>
          </div>
          <div class="flip-card-back" style="background-color: ${backgroundColor.color}" "color:${backgroundColor.textColor}" >
            <h3> ${titles.en} </h3>
            <p> ${shortSynopsis} </p>
            <h4> ${backgroundColor.name} </h4>
          </div>
        </div>
      `;
      cardContainer.appendChild(animeCard);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
