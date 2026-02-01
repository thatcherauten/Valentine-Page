const noAudio = new Audio("./sad_violin.mp3");
noAudio.preload = "auto";

const yesAudio = new Audio("./Fitz And The Tantrums - Out Of My League.mp3");
yesAudio.preload = "auto";

function showMessage(response) {
  let videoPlayed = false;
  if (response === "No") {
    noAudio.currentTime = 0;
    noAudio.play();


    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/crying_cat.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide the name message
    document.getElementById("question").textContent =
      "😢";
    document.getElementById("name").style.display = "none";

    // Add a mouseover event listener to the "No" button
    noButton.addEventListener("mouseover", () => {
      // if (!videoPlayed) {
      //   const videoElement = document.createElement("video");
      //   videoElement.src = "./Maroon 5 - Sugar.mp4#t=42";
      //   videoElement.autoplay = true;
      //   videoElement.controls = false;
      //   videoElement.style.position = "fixed";
      //   videoElement.style.top = "31%";
      //   videoElement.style.left = "50%";
      //   videoElement.style.zIndex = "0";
      //   videoElement.style.transform = "translate(-50%, -50%)";
      //   videoElement.style.width = "50px"
      //   document.body.appendChild(videoElement);

      //   const audio = document.createElement("audio");
      //   audio.src = "./sad_violin.mp3";
      //   audio.autoplay = true;
      //   audio.volume = 1.0;

      //   No need to append it visually — audio plays even if not added to DOM
      //   document.body.appendChild(audio);

      //   Set the flag to true after playing the video
      //   videoPlayed = true;
      // }

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    noAudio.pause();        // stop sad violin
    noAudio.currentTime = 0;

    yesAudio.currentTime = 0;
    yesAudio.play();        // start the yes song

    emailjs.send("service_ynddsb9", "template_sxxy8ss", {
      message: "",
      from_page: "Valentine Page",
      to_email: "thatcherauten@ksu.edu"
    })
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error("Email failed:", error);
    });


    // Remove the name message and the "No" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Create an audio element to play the sound
    // const audioElement = document.createElement("audio");
    // audioElement.src = "./Fitz And The Tantrums - Out Of My League.mp3"; // Source of the sound
    // audioElement.preload = "auto"; // Preloading the audio
    // audioElement.play() // Play the sound
    //   .catch(e => console.error("Audio playback failed:", e)); // Catch and log playback errors

    // Update the text content, display the message, and change the image to "excited_roderick.jpg"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "see you on the 14th mi amor 🫶";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/excited_roderick.jpg";

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
    
  }

}
