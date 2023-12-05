export var video = document.querySelector("video");
export function startWebCam() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                  video.srcObject = stream;
            })
            .catch(function (err0r) {
                  console.log("Something went wrong!");
            });
    }
}
``