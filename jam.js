
 // request jamcharts
 

var jamChartSettings = {
  "async": true,
  "crossDomain": true,
  // "crossOrigin": anonymous,
  "url": "https://api.phish.net/v3/jamcharts/all?apikey=824BE3C2264A913D97FA",
  "method": "Get",
  "headers": "{Access-Control-Allow-Origin: *}",
  "data": "{}"
}



$.ajax(jamChartSettings).done(function (response) {
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

 // request recent setlist

 let setListDate = document.querySelector('#setListDate');
 let setListVenue = document.querySelector('#setListVenue');
 
 let setListLocation = document.querySelector('#setListLocation');
 let setListDetails = document.querySelector('#setListDetails');
 //let setListNotes = document.querySelector('#setListNotes');
 

 var setlistSettings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.phish.net/v3/setlists/latest?apikey=824BE3C2264A913D97FA",
  "method": "Get",
  "headers": "{Access-Control-Allow-Origin: *}",
  "data": "{}"
}

$.ajax(setlistSettings).done(function (response) {
  let setListInfo = response.response.data[0];
  // let slDateShort = setListInfo.short_date;
  let slDateLong = setListInfo.long_date;
  let slVenue = setListInfo.venue;
  let slLocation = setListInfo.location;
  let slDetails = setListInfo.setlistdata;

  
  
  setListDate.innerText = slDateLong;

  setListVenue.innerHTML = slVenue;
  // console.log(slVenue.getAttributes());
  //console.log(setListVenue.innerHTML.setAttribute('target', '_blank'));

  setListLocation.innerText = slLocation;
  setListDetails.innerHTML = slDetails;
  //setListNotes.innerHTML = slNotes;

});
