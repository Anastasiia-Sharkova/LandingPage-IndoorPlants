document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

const videoPlayer = document.querySelector('#media__container');
const video = videoPlayer.querySelector('.media__video');
const playButton = videoPlayer.querySelector('.media__button');
const videoVolume = videoPlayer.querySelector('.media__volume');
const muted = videoPlayer.querySelector('.media__muted');

playButton.addEventListener('click', (e) => {
  if(video.paused) {
    video.play();
    video.volume = videoVolume.value;
    e.target.style.display = 'none';
  } else {
    video.pause();
    e.target.innerHTML = '▶';
  }
})

video.addEventListener('click', (e) => {
  if(video.paused) {
    video.play();
    playButton.style.display = 'none';
    video.volume = videoVolume.value;
  } else {
    video.pause();
    playButton.style.display = 'block';
    playButton.innerHTML = '▶';
  }
})

videoVolume.addEventListener('mousemove', (e) => {
  video.volume = e.target.value;

  if(videoVolume.value === '0' || video.volume === '0') {
    muted.style.display = 'block';
  } else {
    muted.style.display = 'none';
  }
})

muted.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  video.volume = '0.5';
  videoVolume.value = '0.5';
})

videoPlayer.onmouseover = function(e) {
  videoVolume.style.display = 'block';

  if(video.volume === '0' || videoVolume.value === '0') {
    muted.style.display = 'block';
  } else {
    muted.style.display = 'none';
  }
};

videoPlayer.onmouseout = function(e) {
  if(video.paused && videoVolume.value === '0') {
    videoVolume.style.display = 'block';
    muted.style.display = 'block';
  } else if(video.paused && videoVolume.value > '0') {
    videoVolume.style.display = 'block';
    muted.style.display = 'none';
  } else {
    videoVolume.style.display = 'none';
    muted.style.display = 'none';
  }
};

/* swiper */

new Swiper('.page__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  slidesPerView: 2,
  watchOverflow: true,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});
