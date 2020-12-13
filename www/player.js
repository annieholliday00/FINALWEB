/* below uses stuff from index in the java */

	const background = document.querySelector('#background'); 
	const thumbnail = document.querySelector('#thumbnail'); 
	const song = document.querySelector('#song'); 

	const songArtist = document.querySelector('.song-artist'); 
	const songTitle = document.querySelector('.song-title');
	const progressBar = document.querySelector('#progress-bar'); 
	let pPause = document.querySelector('#play-pause'); 

/* if you want to add new songs then remember to increase the index and add a new increment thingy */

songIndex = 6; /*REMEMBER TO CHANGE THIS*/
songs = ['assets/music/gorillaz.mp3', 'assets/music/molchat.mp3', 'assets/music/lime.mp3', 'assets/music/everything.mp3', 'assets/music/stauber.mp3', 'assets/music/glass.mp3']; // object storing paths for audio
thumbnails = ['assets/images/gorillaz.png', 'assets/images/molchat.png', 'assets/images/lime.png', 'assets/images/everything.png', 'assets/images/stauber.png', 'assets/images/glass.png']; // object storing paths for album covers
songArtists = ['gorillaz', 'molchat doma', 'lime cordiale', 'everything everything', 'jack stauber', 'glass animals']; // object storing track artists
songTitles = ["desole", "toska", 'robbery', 'schoolin', 'tea errors', 'black mambo']; // object storing track titles

/* pause and play shenanigans below */

	let playing = true;
	function playPause() {
		if (playing) {
			const song = document.querySelector('#song'),
			thumbnail = document.querySelector('#thumbnail');
	
			pPause.src = "assets/icons/play.png"
			thumbnail.style.transform = "scale(1.15)";
        
			song.play();
			playing = false;
		} else {
			pPause.src = "assets/icons/play.png"
			thumbnail.style.transform = "scale(1)"
			
			song.pause();
			playing = true;
		}
	}
	
//* my attempt to make an open button *//
function show()
{
	var div = document.getElementById("player");
	div.style.display = "block";
	}

//* my attempt to make a close button, hopefully this works *//
function shutdown() 
{
	var div = document.getElementById("player");
	div.style.display = "none";
	}

//* play the next song when done *//
	song.addEventListener('ended', function(){
		nextSong();
	});

//* function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track *//
function nextSong() 
{
    songIndex++;
    if (songIndex > 1) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

//* function to play next track *// 
function nextSong() 
{
    songIndex++;
    if (songIndex > 2) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

//* function to play next track again *//
function nextSong() 
{
    songIndex++;
    if (songIndex > 3) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

//* function to play next track again *//
function nextSong() 
{
    songIndex++;
    if (songIndex > 4) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

//* function to play next track again *//
function nextSong() 
{
    songIndex++;
    if (songIndex > 5) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

//* changes the progress time *//
function updateProgressValue() 
{
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

//* shows progress *//
setInterval(updateProgressValue, 500);

//* changes the place in the song *//
function changeProgressBar() {
    song.currentTime = progressBar.value;
};