fetch('https://kitsu.io/api/edge/trending/anime')
  .then(response => {
    console.log('Status:', response.status)
    console.log('Headers:', response.headers)
    return response.json()
  })
  .then(({ data }) => {
    const cardContainer = document.getElementById('card-container')
    console.log('Body:', data)

    const colors = [
      'red',
      'blue',
      'green',
      'white',
      'orange',
      'purple',
      'pink',
      'grey',
      'Yellow',
      'brown'
    ]

    data.forEach((anime, index) => {
      const animeCard = document.createElement('div')
      animeCard.classList.add('flip-card')

      const { posterImage, titles, synopsis, description } = anime.attributes

      const backgroundColor = colors[index % colors.length]

      animeCard.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${posterImage.large}" alt="${titles.en}" class="border" style="padding: 12px; width: 80%">
            <p>${backgroundColor}</p>
          </div>
          <div class="flip-card-back" style="background-color: ${backgroundColor}">
            <h2>${titles.en}</h2>
          </div>
        </div>
      `
      cardContainer.appendChild(animeCard)
    })
  })
  .catch(error => {
    console.error('Error:', error)
  })
