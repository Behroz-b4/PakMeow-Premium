const menuButton = document.querySelector('.menu__button');
const sideBar = document.querySelector('.sidebar');
const mobileSearchButton = document.querySelector('.mobile__search__button');
const mobileSearchHeader = document.getElementById('mobile__header')
const mobileSearchBar = document.querySelector('.mobile__search__bar');
const mobileSearchContainer = document.querySelector('.search__history__container');
const mobileSearchBack = document.querySelector('.mobile__search__bar__back__button');
const VoiceSearchButton = document.querySelectorAll('.mobile__search__bar__mic__button');
const VoiceSearch = document.querySelector('.voice__search__container');
const popupCloseButton = document.querySelector('.popup__close__button');
const speechText = document.getElementById('voice-search');
const header = document.getElementById('header');
const main = document.getElementById('main');
const mobileSpeechInput = document.getElementById('mobile-speech-input');
const SpeechInput = document.getElementById('speech-input');
const settingButton = document.getElementById('settings-button');
const settingsContainer = document.getElementById('settings-container');
const descriptionParagraph = document.getElementById('description');
const speechSearch = new (window.SpeechRecognition || window.webkitSpeechRecognition) ();


menuButton.addEventListener('click', function() {
    sideBar.classList.toggle('active');
    menuButton.classList.toggle('active', sideBar.classList.contains('active'));
});

mobileSearchButton.addEventListener('click', function () {
    header.style.display = 'none';
    main.style.display = 'none';
    mobileSearchContainer.style.display = 'flex';
    mobileSearchHeader.style.display = 'flex';
    mobileSearchBar.focus();
    
});

mobileSearchBack.addEventListener('click', function () {
    mobileSearchHeader.style.display = 'none';
    mobileSearchContainer.style.display = 'none';
    VoiceSearch.style.display = 'none';
    popupCloseButton.style.display = 'none';
    main.style.display = 'flex';
    header.style.display = 'flex';
});

VoiceSearchButton.forEach(micButton => {
    micButton.addEventListener('click', function() {
        VoiceSearch.style.display = 'flex';
        popupCloseButton.style.display = 'block';
    });    
});

popupCloseButton.addEventListener('click', function() {
    VoiceSearch.style.display = 'none';
    popupCloseButton.style.display = 'none';
});

speechSearch.lang = 'en-US';
speechSearch.onresult = (event) => { 
    var speech = event.results[0][0].transcript || 'No speech';
    speechText.textContent = speech;
    SpeechInput.value = speech;
    mobileSpeechInput.value = speech;

    if (speech !== '') {
        setTimeout( function() {
        VoiceSearch.style.display = 'none';
        popupCloseButton.style.display = 'none';
        }, 1400);
    }
}
speechSearch.onerror = event => speechText.textContent = `Error: ${event.error}`;
function start() {
    speechText.textContent = 'Listening...';
    speechSearch.start();
}

settingButton.addEventListener('click', function() {
    if (settingsContainer.style.display === 'none' || settingsContainer.style.display === '') {
        settingsContainer.style.display = 'flex';
    } else {
        settingsContainer.style.display = 'none';
    } 
});

function logOut() {
    if (confirm('Are you sure you want to log out?') == true) {
        window.location.href = 'authentication.html';
    }
}

const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: true,
    video: {
        url: 'https://raw.githubusercontent.com/Behroz-b4/PakMeow-Premium/refs/heads/main/Oggy%20and%20the%20Cockroaches.mp4',
        pic: 'poster.jpg',
    },
});

function expandBtn() {
    if (descriptionParagraph.style.maxHeight === '20px' || descriptionParagraph.style.maxHeight === '') {
        descriptionParagraph.style.maxHeight = 'none';
        document.querySelector('.description__container').style.display = 'grid';
        document.getElementById('expand-button').textContent = 'Show less'
    } else {
        descriptionParagraph.style.maxHeight = '20px';
        document.querySelector('.description__container').style.display = 'flex';
        document.getElementById('expand-button').textContent = '...More'
    }
}