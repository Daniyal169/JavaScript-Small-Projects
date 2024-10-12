let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");
let allVoices = [];

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener("change", () => {
    speech.voice = allVoices[voiceSelect.value];
});

window.speechSynthesis.onvoiceschanged = () => {
    allVoices = window.speechSynthesis.getVoices();
    speech.voice = allVoices[0]

    allVoices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}