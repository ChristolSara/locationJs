/*function geoFindMe() {
//on recupere les element dom
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

//pour remettre les text à vide
  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }


//si le navigateur ne gere pas la location
//navigateur c un objet js qui a geolocation comme propriéte
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
  document.querySelector("#find-me").addEventListener("click", geoFindMe);

}*/

//methode promesse
function  getUserPosition(){
  return new Promise(function(resolve,reject){
    if (!navigator.geolocation) {
                return reject(new Error('API geolocation not supported'));
            }

      navigator.geolocation.getCurrentPosition(
                // function (position) {
                //     resolve(position);
                // },
                // function (error) {
                //     reject(error);
                // },
                resolve,
                reject
               );

  });
}
function onClickGeolocalizeButton(){

     getUserPosition()
        .then(displayPosition)
        .catch(console.error);

}
function displayPosition(position){
    //on recupere les element dom
                        const status = document.querySelector("#status");
                        const mapLink = document.querySelector("#map-link");

                      //pour remettre les text à vide
                        mapLink.href = "";
                        mapLink.textContent = "";

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;


            status.textContent = "";
            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}
document.querySelector("#find-me").addEventListener("click",onClickGeolocalizeButton);