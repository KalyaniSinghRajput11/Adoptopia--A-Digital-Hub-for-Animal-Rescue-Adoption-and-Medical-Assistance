const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file"); // Corrected id name
const imageView = document.getElementById("img-view"); // Corrected id name
inputFile.addEventListener("change", uploadImage);
function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = "none";
}
dropArea.addEventListener("dragover", function(e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function(e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
const showDetails = document.querySelector(".inp");
document.querySelector(".geo-btn").addEventListener("click" , ()=>{
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude , longitude} = position.coords; 
        // Set latitude and longitude values to the input fields
        document.querySelector('input[name="latitude"]').value = latitude;
        document.querySelector('input[name="longitude"]').value = longitude;
      },
      (error)=>{
        console.log(error.message);
      }
    )
  }
});
