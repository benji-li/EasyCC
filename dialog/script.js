const request = async () => {
    const response = await fetch('http://localhost:3000/transcribe');
    const transcription = await response.json();
    console.log(transcription);
}