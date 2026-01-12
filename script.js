let currentAudio = null;

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.preload = "auto";

        // 🔑 Handle play promise to avoid Cypress failure
        const playPromise = currentAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {});
        }
    });
});

document.querySelector(".stop").addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
