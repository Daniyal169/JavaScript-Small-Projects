let qrInput = document.getElementById("qrInput");
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let QRbox = document.getElementById("QRbox");

generateQR = () => {
    if (qrInput.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
        QRbox.classList.add("QRbox")
    }
    else {
        QRbox.classList.add("empBox")

    }

}