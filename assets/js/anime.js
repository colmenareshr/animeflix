// JavaScript (anime.js)
import { fetchAnimeById } from './api.js';

async function displayAnimeInfo() {
  try {
    // Obtener el ID del anime desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id');

    if (!animeId) {
      // Si no se proporciona un ID de anime, redireccionar a la página principal
      window.location.href = 'index.html';
      return;
    }

    // Obtener los datos del anime por su ID
    const anime = await fetchAnimeById(animeId);

    // Mostrar la información del anime en la página
    const animeInfoContainer = document.getElementById('anime-info');
    const { coverImage, posterImage, titles, description, popularityRank } =
      anime.attributes;

    animeInfoContainer.innerHTML = `
  <div class="anime__hero-section" style="height: 40vh; background-image: url(${coverImage.large})"></div>
  <div class="anime-details-container">
    <div class="poster-column">
      <img src="${posterImage.medium}" alt="Poster de ${titles.en_jp}" class="anime-image">
    </div>
    <div class="info-column" style="margin-left: 20px;">
      <h2>${titles.en_jp}</h2>
      <span>Ranking de popularidade: ${popularityRank}</span>
      <p>${description}</p>
      <button id="back-button" type="button">Voltar</button>
    </div>
    </div>
`;
    const backButton = document.getElementById('back-button');

    backButton.addEventListener('click', (e) => {
      history.back();
    });
  } catch (error) {
    console.error(error.message);
  }
}

displayAnimeInfo();
