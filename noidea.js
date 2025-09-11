
navigator.mediaDevices.getUserMedia({ video:true})
    .then(stream => {
        video.srcObject = stream
    }
    .catch(error=>{
        console.error("Camera access error:", error);
        alert("Failed to access camera:" + error.message);
    })