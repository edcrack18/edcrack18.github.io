const firebaseConfig = {
      apiKey: sessionStorage.getItem("apiKey"),
      authDomain: "otrochatgem.firebaseapp.com",
      databaseURL: sessionStorage.getItem("url"),
      projectId: "otrochatgem"
    };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function enviarMensaje() {
      const nombre = document.getElementById("nombre").value.trim();
      const texto = document.getElementById("mensaje").value.trim();
      if (nombre && texto) {
        db.ref("mensajes").push({ nombre, texto });
        document.getElementById("mensaje").value = "";
      }
    }

db.ref("mensajes").on("child_added", (snapshot) => {
      const datos = snapshot.val();
      const chat = document.getElementById("chat");
      const p = document.createElement("p");
      p.textContent = datos.nombre + ": " + datos.texto;
      chat.appendChild(p);
    });