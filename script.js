let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '4b5b70c60ce7ed60a5a4945b7b7f8beb';
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad)
    };
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data));
};

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`; 

    const iconInfo = document.createElement('img');
    iconInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconInfo);
};







