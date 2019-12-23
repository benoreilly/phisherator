
 // request jamcharts
 
//  var data = "{}";

//  var xhr = new XMLHttpRequest();
// //  xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
// //  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//  xhr.overrideMimeType("application/json");


//  xhr.addEventListener("readystatechange", function() {
//      if(this.readyState === this.DONE){
//          //console.log(this.responseText);
//      }
//  });

//  xhr.open("GET", "https://api.phish.net/v3/jamcharts/all?apikey=824BE3C2264A913D97FA", true);

//  xhr.send(data);



var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.phish.net/v3/jamcharts/all?apikey=824BE3C2264A913D97FA",
  "method": "GET",
  "headers": {},
  "data": "{}"
}



$.ajax(settings).done(function (response) {
    var jamInfo = response.response.data;
    let jamCollection = document.querySelector('.collection');

    for (let i = 0; i < jamInfo.length; i++) {
        
        const li = document.createElement('li');
        li.className = 'collection-item songItem';

        let songItemSong = document.createElement('span');
        songItemSong.className = 'songContext context';

        let songTitle = jamInfo[i].song;
        songItemSong.textContent = songTitle;
        li.appendChild(songItemSong);

        const link = document.createElement('a');
        let songLink = jamInfo[i].link;
        link.className = 'song-link secondary-content';
        link.setAttribute('href', songLink);
        link.setAttribute('target', '_blank');
        link.innerHTML = '<i class="material-icons">launch</i>';
        li.appendChild(link);
       
        
        jamCollection.appendChild(li);
      }


});

