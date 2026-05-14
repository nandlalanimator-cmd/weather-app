var field = document.getElementById("field")
var temper = document.getElementById("temper")
var city = document.getElementById("cityname")
var image = document.getElementById("image")
var like = document.getElementById("like")
var mini = document.getElementById("mini")
var max = document.getElementById("maxi")
var humid = document.getElementById("humidity")





function search(){



var url = `https://api.openweathermap.org/data/2.5/weather?q=${field.value}&appid=4fcd41771cc91187db1651ddcc10916f`

console.log(url)

fetch(url)

.then((success) => {
return success.json()

})

.then((data) => {
   
var temp = (Math.floor(data.main.temp -273.15))
var flike = (Math.floor(data.main.feels_like -273.15))
var minimum = (Math.floor(data.main.temp_min -273.15))
var maximum = (Math.floor(data.main.temp_max -273.15))
var hum = (data.main.humidity)

 
var cname = (data.name)
console.log(cname)

    image.style.display = "block";
    
  
if(temp <= 11){
   image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqCJzNaX47bzMRmUphXuGsM5_5dMZY8KVng&s"

}
else if(temp <= 25){
   image.src='https://png.pngtree.com/png-vector/20221225/ourmid/pngtree-weather-icon-png-image_6535514.png'

}
else if(temp >= 40){
    image.src = "https://static.vecteezy.com/system/resources/previews/048/411/355/non_2x/volcano-erupting-down-isolated-on-transparent-background-free-png.png"
}
else{
 image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwKIB2-qXIwal8-d5kM92XjSy9_cxvmHRpA&s'
  
}



temper.innerText = temp + "C"

city.innerText = cname

like.innerText = `Feels like: ${flike}C`

mini.innerText = `Min Temp: ${minimum}C`

max.innerText = `Max Temp: ${maximum}C`

humid.innerText = `Humidity: ${hum}%`




})

.catch((err) => {

alert("Incorrect value")

})

}