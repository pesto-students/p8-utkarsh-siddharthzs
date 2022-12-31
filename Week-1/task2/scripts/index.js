const togglePlay = (element) => {
    if (element.classList.contains('la-play')) {
        element.classList.remove('la-play');
        element.classList.add('la-pause');
    }
    else {
        element.classList.remove('la-pause');
        element.classList.add('la-play');
    }

}
