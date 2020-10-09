console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
  fetchDogBreeds();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/12"

function fetchDogImages() {
  // let data = await fetch(imgUrl)
  // console.log(data.json())
  // .then

  fetch(imgUrl)
  .then(response => response.json())
  .then(dogData => dogData.message.forEach(dogImg => renderDogImg(dogImg))
  )
}

function renderDogImg(dogImg){
  let container = document.querySelector('#dog-image-container')
  let dogEl = document.createElement('img')
  dogEl.src = dogImg
  
  dogEl.style.height = "200px"
  container.appendChild(dogEl)
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogBreeds(){
  fetch(breedUrl)
  .then(response => response.json())
  .then(dogData => Object.entries(dogData.message).forEach(dogBreed => renderDogBreed(dogBreed)))
  }

function renderDogBreed(dogBreed) {
  let ul = document.querySelector('#dog-breeds')
  let breedEl = document.createElement('li')
  if (dogBreed[1] == []) {
    breedEl.innerText = dogBreed
    ul.appendChild(breedEl)
  } else {
     dogBreed[1].forEach(breed => {
      breedEl.innerText = `${breed} ${dogBreed[0]}`
      ul.appendChild(breedEl)})
  }
}

const getLis = document.querySelectorAll('li')
const liListeners = [...getLis].forEach(li => li.addEventListener('click', (event) => event.target.style.color = "red"))


