var songList = document.getElementById("song-list");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("I Hope you Dance by LeAnn Womak on the album I Hope You Dance");
songs.unshift("Just to See You Smile by Tim McGraw on the album Everywhere");

for (i = 0; i < songs.length; i++) {
  songs[i]=songs[i].replace(/!/g, "");
  songs[i]=songs[i].replace(/@/g, "");
  songs[i]=songs[i].replace(">", "-");
  songs[i]=songs[i].replace("*", "");
  songList.innerHTML += "<section class='alternating-colors'>" + songs[i] + "</section>";

}

console.log(songs);
// songList.innerHTML = songs;





