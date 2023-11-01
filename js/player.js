const playPauseButton = document.getElementById('playPauseButton');
const audioPlayer = document.getElementById('audioPlayer');

playPauseButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
    }
});

// Обработка события окончания воспроизведения
audioPlayer.addEventListener('ended', function () {
    playPauseButton.textContent = 'Play';
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
});