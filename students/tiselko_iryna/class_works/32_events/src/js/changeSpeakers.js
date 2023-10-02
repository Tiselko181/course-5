import authors from "./authors.js";
import { imgPath } from "./vars/variables.js";

function changeSpeakers(addStudentForm) {

    const select = addStudentForm.querySelector('#speakers');
    const speakersWrapper = addStudentForm.querySelector('#card_prev');

    select.addEventListener('change', renderSpeaker);

    function renderSpeaker() {
        const speaker = select.value.trim();

        console.log(authors[speaker]);

        if (speaker && authors[speaker]) {
            const img = speakersWrapper.querySelector('img');
            img.setAttribute('src', imgPath + authors[speaker].img);
            img.setAttribute('alt', authors[speaker].name);

            speakersWrapper.querySelector('.card-title').textContent = authors[speaker].name;
            speakersWrapper.querySelector('.card-text').textContent = authors[speaker].name;

            toggleCardPrev(true);
        } else {
            toggleCardPrev(false);
        }
    }

    function toggleCardPrev(trigger) {
        if (trigger) speakersWrapper.style.display = '';
        else speakersWrapper.style.display = none;
    }

    console.log(select, speakersWrapper)
}

export default changeSpeakers;
