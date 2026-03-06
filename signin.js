function iniciarSesion(){
  const key = document.getElementById("key").value.trim();
  const url = document.getElementById("url").value.trim();
  if(key){
    sessionStorage.setItem("apiKey", key);
    sessionStorage.setItem("url", url);
    window.location.href = "shat.html";
  }
}