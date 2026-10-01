let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=caf7337cb8db27135b038170eb13f7b8')
    .then(card => card.json())
    .then(info => {
        let temp = info.main.temp
        let feel_like = info.main.feels_like - 273.15
        let temp_min = info.main.temp_min - 273.15
        let temp_max = info.main.temp_max - 273.15
        document.getElementById('weather').innerHTML +=
            `
    
     <div id="demo">
                <p class="name">📍 ${info.name} , ${info.sys.country}</p>
                <div class="mid">
                    <div class="temperature">
                        <h1 class="degree">${temp.toFixed(0)}°</h1>
                        <div class="sunny ">
                            <p class="fs-4 my-0">${info.weather[0].description}</p>
                            <p class="text-sm">Feels_Like : ${feel_like.toFixed(0)} °C</p>
                        </div>
                    </div>
                    <div class="sun">
                        <i class="fa-regular fa-sun"></i>
                        <p class='bright'>Bright sun and pleasent breez in the afternoon</p>
                    </div>
                </div>
                <div class="temp my-4">
                    <p>⬆️ High : ${temp_max.toFixed(0)}</p>
                    <p>⬇️ Low : ${temp_min.toFixed(0)}</p>
                </div>
           </div>
  

    `
        document.getElementById('cards').innerHTML =
            `
    
        <div class="boxes  d-flex gap-3 justify-content-center">
            <div class="card p-4 gap-3">
                <div class="def d-flex gap-3 align-items-center ">
                    <div class="bg-info rounded-2"  style="width: 40px ; height: 40px"></div>
                    <h4>Humidity</h4>
                </div>
                <h4>${info.main.humidity} %</h4>
                <div class="progress">
                    <div class="progress-bar bg-info">${info.main.humidity} %</div>
                </div>
            </div>
            <div class="card p-4 gap-3">
                <div class="def d-flex gap-3">
                    <div class="bg-primary rounded-2"  style="width: 40px ; height: 40px"></div>
                    <h4>Wind-speed</h4>
                </div>
                <h4>${info.wind.speed} %</h4>
                <div class="progress">
                    <div class="progress-bar bg-primary">${info.wind.speed} %</div>
                </div>
            </div>
            <div class="card p-4 gap-3">
                <div class="def d-flex gap-3">
                    <div class="bg-success rounded-2"  style="width: 40px ; height: 40px"></div>
                    <h4>Pressure</h4>
                </div>
                <h4>${info.main.pressure} %</h4>
                <div class="progress">
                    <div class="progress-bar bg-success">${info.main.pressure} %</div>
                </div>
            </div>
        </div>
    
    `


    })







