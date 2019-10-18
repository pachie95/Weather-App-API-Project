// formula -((K-273.15)*1.8)+32 

function weatherChange(){

    let city = $("#change-form input[name=City]").val()
    let country = $("change-form input[name=Country").val()


    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=661bf9f901580637811beeb33735e6b5', function (data){


        $("#Weather-Section").removeClass("vis-hidden")

        let high_temp = Math.floor(((data.main.temp_max-273.15)*1.8)+32) 
        $("#temphigh0").text(high_temp + '\xB0' + 'F')
        let low_temp = Math.floor(((data.main.temp_min-273.15)*1.8)+32) 
        $("#templow0").text(low_temp + '\xB0' + 'F')
        let forecast = data.weather[0].main
        $("#forecast0").text(forecast)
        let humidity = data.main.humidity
        $("#humidity0").text(humidity) 


        
    })

}