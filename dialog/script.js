// const transcribeRequest = async () => {
//     const response = await fetch('http://localhost:3000/transcribe');
//     const transcription = await response.json();
//     console.log(transcription.message);
//     document.querySelector('#captions').textContent = transcription.message;
//     console.log(document.querySelector('#captions').textContent);
// };

// (async () => {
//     await transcribeRequest();
// })();

window.setInterval(async () => {
  const response = await fetch('http://localhost:3000/transcribe');
  const transcription = await response.json();
  document.querySelector('#captions').textContent = transcription.message;
  console.log(transcription.message);
});

// console.log("hi");
// document.querySelector('#captions').textContent = "Hi";