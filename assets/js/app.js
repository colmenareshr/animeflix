import { fetchAnimeData, fetchAnimeById } from './api.js';

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

let colorIndex = 0;
function createAnimeCard(anime) {
  const {posterImage, titles, coverImage } = anime.attributes;
  const animeId = anime.id;
  
  const {
    name: colorNamePt,
    en: colorNameEn,
    color,
    textColor,
  } = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;

  const animeCard = document.createElement('div');
  animeCard.classList.add('flip-card');
  animeCard.dataset.animeId = animeId;
  animeCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${posterImage.large}" alt="Poster de ${
    titles.en_jp
  }" class="border" style="padding: 12px; width: 80%">
            <h2>${colorNamePt}</h2>
          </div>
          <div class="flip-card-back anime-card" style="background-color: ${color}; color:${textColor}" >
            <div class="flip-card-back-info">
              <img src="${coverImage.large}" alt="Imagen da Anime ${
    titles.en_jp
  }" class="round-image" >
              <h3 style= "color: ${textColor}; font-size: 1.3rem" > ${
    titles.en_jp
  } </h3>
            </div>
            <a class="anime-link" href="anime.html?id=${animeId}">Saiba Mais</a>
            <h4>${
              colorNameEn.charAt(0).toUpperCase() + colorNameEn.slice(1)
            }</h4>
          </div>
        </div>
      `;
  return animeCard;
}

async function displayAnimeCards() {
  try {
    const data = await fetchAnimeData();
    const cardContainer = document.getElementById('card-container');
    data.forEach((anime) => {
      const animeCard = createAnimeCard(anime);
      cardContainer.appendChild(animeCard);
    });
  } catch (error) {
    console.error(error.message);
  }
}

displayAnimeCards();
