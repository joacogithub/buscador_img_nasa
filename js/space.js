//  Escuchamos el evento de click en el botón de buscar
document.querySelector('#btnBuscar').addEventListener('click', getAndSearchData)

// Obtenemos los valores ingresados en el Input
let busqueda = document.querySelector('#inputBuscar').value

//  Realiza solicitud a API, agrega formato y presenta en HTML
function getAndSearchData() {
  let busqueda = document.querySelector('#inputBuscar').value

  //  Se realiza la solicitud
  fetch(`https://images-api.nasa.gov/search?q=${busqueda}`)
    .then((response) => response.json())
    .then((data) => {
      //  Selecciona los contenedores y los vacía en caso de tener Info
      const contenedor = document.querySelector('#contenedor')
      contenedor.innerHTML = ''
      //  Recorre array de objetos
      data.collection.items.forEach((item) => {
        const imgHref = item.links[0].href
        const title = item.data[0].title
        const description = item.data[0].description
        const date = item.data[0].date_created
        //  Se da formato a la información y se presenta en el HTML
        const contenedor = document.querySelector('#contenedor')

        const divImg = document.createElement('div')
        divImg.className = 'texto'
        divImg.innerHTML = `<img src="${imgHref}" alt="${title}">`

        const divTxt = document.createElement('div')
        divTxt.className = 'texto'
        divTxt.innerHTML = `
                    <h2>${title}</h2>
                    <p>Descripcion: ${description}</p>
                    <p>Fecha: ${date}</p>
                    `
        contenedor.appendChild(divImg)
        contenedor.appendChild(divTxt)
      })
    })
    .catch((error) => console.error('Error al realizar la solicitud: ', error))
}
