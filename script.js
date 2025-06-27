document.querySelector('.menu__button').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.menu__button').classList.toggle('active', document.querySelector('.sidebar').classList.contains('active'));
});

document.querySelector('.mobile__search__button').addEventListener('click', function () {
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.querySelector('.search__history__container').style.display = 'flex';
    document.querySelector('.mobile__search__bar__header').style.display = 'flex';
    document.querySelector('.mobile__search__bar').focus();
    
});
document.querySelector('.mobile__search__bar__back__button').addEventListener('click', function () {
    document.getElementById('mobile__header').style.display = 'none';
    document.querySelector('.search__history__container').style.display = 'none';
    document.querySelector('.voice__search__container').style.display = 'none';
    document.querySelector('.popup__close__button').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    document.getElementById('header').style.display = 'flex';
});


document.querySelectorAll('.mobile__search__bar__mic__button').forEach(micButton => {
    micButton.addEventListener('click', function() {
        document.querySelector('.voice__search__container').style.display = 'flex';
        document.querySelector('.popup__close__button').style.display = 'block';
    });    
});

document.querySelector('.popup__close__button').addEventListener('click', function() {
    document.querySelector('.voice__search__container').style.display = 'none';
    document.querySelector('.popup__close__button').style.display = 'none';
});

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = e => document.getElementById('voice-search').textContent = e.results[0][0].transcript || 'No speech';
        recognition.onerror = e => document.getElementById('voice-search').textContent = `Error: ${e.error}`;
        function start() {
            document.getElementById('voice-search').textContent = 'Listening...';
            recognition.start();
        }