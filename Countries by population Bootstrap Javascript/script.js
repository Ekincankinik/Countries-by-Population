



const btn = document.getElementById('button')

const container = document.querySelector('.container')

const title = document.querySelector('.total-pop')

let sortedCountries = countries_data.sort((a, b) => b.population - a.population)

function calcWorldPopulation() {

  let toplam = 0
  
  sortedCountries.forEach(country => {
    toplam += country.population
  })
  return toplam
}

btn.addEventListener('click', () => {

  sortedCountries.forEach(country => {

    const div = document.createElement('div')

    div.className = 'card'
    div.style.width = '18rem'
    div.style.height = '30rem'

    const flag = document.createElement('img')

    flag.className = 'card-img-top'
    flag.setAttribute('src', country.flag)
    flag.style.width = '100%'
    div.appendChild(flag)

    const card = document.createElement('div')

    card.className = 'card-body'
    card.style.height = '40%'

    const name = document.createElement('h2')

    name.className = 'card-title'
    name.textContent = country.name
    name.style.color = 'indigo'
    card.appendChild(name)

    const capital = document.createElement('h3')

    capital.className = 'card-text'
    capital.textContent = country.capital
    capital.style.color= 'darkseagreen'
    card.appendChild(capital)

    const population = document.createElement('p')

    population.className = 'card-text'
    population.textContent = `Nüfus: ${country.population}`
    card.appendChild(population)

    div.appendChild(card)

    const percent_of_pop = document.createElement('div')

    percent_of_pop.className = 'card-footer d-flex justify-content-center'

    const percent_text = document.createElement('a')

    percent_text.className = 'btn btn-dark success'

    let percent = Number(((country.population / calcWorldPopulation()) * 100).toFixed(5))




    percent_text.textContent = `${percent}%`

    percent_of_pop.appendChild(percent_text)
    div.appendChild(percent_of_pop)

    if (percent >= 3) {
      percent_of_pop.style.background = 'green'
    } else {
      percent_of_pop.style.background = 'red'
    }


    title.textContent = `Toplamda ${sortedCountries.length} ülke var. Toplam nüfus: ${calcWorldPopulation()}`

    title.style.margin='100px'



    container.appendChild(div)
  })
})