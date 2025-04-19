 
//Modal Form Styles

function openForm() {
  document.getElementById("orderForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}

then(result => {
  console.log("Server response:", result);
 
})