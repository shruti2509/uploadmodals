// import React from 'react'

// function WebCam() {
//     document.addEventListener("DOMContentLoaded")
//     return
//     () => {
//         let but = document.getElementById("but");
//         let video = document.getElementById("vid");
//         let mediaDevices = navigator.mediaDevices;
//         video.muted = true;
//         but.addEventListener("click");
//         return () => {
 
//             // Accessing the user camera and video.
//             mediaDevices
//                 .getUserMedia({
//                     video: true,
//                     audio: true,
//                 },[])
//                 .then((stream) => {
 
//                     // Changing the source of video to current stream.
//                     video.srcObject = stream;
//                     video.addEventListener("loadedmetadata");
//                     return
//                     ()=> {
//                         video.play();
//                     };
//                 },[])
//                 .catch(alert);
//         };
//     };

//   return (
//     <>
//      <div style={{display: "flex",  justifyContent: "center"}}>
//         <video id="vid"></video>
//     </div>
//     <br/>
//     <button id="but" >
//         Open WebCam
//     </button>
    


//     </>
//   )
// }

// export default WebCam




