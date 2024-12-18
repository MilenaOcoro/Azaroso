// Elements
const welcomePage = document.getElementById("welcome-page");
const gamePage = document.getElementById("game-page");
const startButton = document.getElementById("start-button");
const buttonSound = document.getElementById("button-sound");
const exitButton = document.getElementById("exit-button");
const addUserButton = document.getElementById("add-user");
const userList = document.getElementById("user-list");
const userNameInput = document.getElementById("user-name");

// Event Listeners

startButton.addEventListener("click", () => {
  buttonSound.play();
  welcomePage.style.display = "none";
  gamePage.style.display = "block";
});

exitButton.addEventListener("click", () => {
  gamePage.style.display = "none";
  welcomePage.style.display = "flex";
});

addUserButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    addUserToList(userName);
    userNameInput.value = "";
  } else {
    alert("Por favor, introduce un nombre válido.");
  }
});

// Functions
function addUserToList(name) {
  if (userList.children.length < 4) {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.id = userList.children.length;


    const button_delete = document.createElement("button"); 
    button_delete.textContent = "❌";
    button_delete.addEventListener("click", () => deleteUser(userElement));


    const button_edit = document.createElement("button"); 
    button_edit.textContent = "✏️";
    button_edit.addEventListener("click", () => editUser(userElement));


    const userChangeElement = document.createElement("div");
    userChangeElement.classList.add("user-change")
    userChangeElement.appendChild(button_delete);
    userChangeElement.appendChild(button_edit);
    
    const userNameSpan = document.createElement("span");
    userNameSpan.textContent = name;

    const button = document.createElement("button");
    button.classList.add("mystic-button");
    button.textContent = "🔮";
    button.addEventListener("click", () => revealMessage(button));

    userElement.appendChild(userChangeElement);
    userElement.appendChild(userNameSpan);
    userElement.appendChild(button);
    userList.appendChild(userElement);
  } else {
    alert("Solo puedes agregar hasta 4 usuarios a la vez.");
  }
}

function revealMessage(button) {
  const messages = [
    "¿Cómo es posible que no seas famosa teniendo ese talento? ¿Eh? ¡Explícamelo!",
    "¡No tengo tiempo para esto! Soy una mujer ocupada... pero venga, cuéntamelo todo.",
    "Yo soy una visionaria, pero a veces la gente no está preparada para mi visión.",
    "¿Un Gin-Tonic? ¡Eso lo cura todo! Hasta un mal casting.",
    "El ‘show business’ es duro, cariño, pero más dura soy yo.",
    "Si crees en ti misma, puedes comerte el mundo... y si no, pues me llamas y te ayudo.",
    "El talento está sobrevalorado. Lo importante es la actitud.",
    "Cariño, en esta vida no hay papeles pequeños, solo actrices que no saben brillar.",
    "Un poquito de Spanx, maquillaje y, hala, ¡lista para arrasar!",
    "¿Drama? Drama es quedarte sin cobertura en pleno casting.",
    "Tengo más contactos que una centralita, ¡confía en mí!",
    "¡Este es tu año! Bueno, eso digo todos los años, pero este lo siento de verdad.",
    "Tienes que aprender a decir que no. Pero di que sí a todo lo que te propongan, ¿vale?",
    "En esta vida hay que ser como un camaleón: adaptarse o morir.",
    "Yo no soy representante, soy una madre para mis artistas.",
    "¡Qué disgusto, hija! Pero bueno, que no se note... sonrisa y  seguir.",
    "Cariño, la fama es una montaña rusa. Un día estás arriba, y al siguiente en mi oficina llorando.",
    "Una estrella no se hace, se nace. Y tú naciste para brillar... aunque ahora estés un poco apagada.",
    "Que si tienes que llorar, lloras, pero no se te corra el rímel, ¿vale?",
    "Al final, lo importante no es ganar. Bueno, sí, es ganar, pero con estilo.",
    "¡Es que me parece fortísimo!",
    "Soy representante, pero ante todo soy una amiga.",
    "A mí no me llames pesada, llámame insistente, que suena mejor.",
    "¿Sabes lo que es una actriz todoterreno? Pues eso es lo que tú tienes que ser, cariño.",
    "En esta vida no se trata de tener éxito, sino de parecer que lo tienes.",
    "Me voy a tomar un Gin-Tonic, porque ya sabes que con uno todo se ve más claro.",
    "No hay casting pequeño, cariño. Si te lo crees, te lo comes.",
    "La fama sube como la espuma... y a veces se va por el desagüe.",
    "En esta oficina no somos muchas, pero somos apañadas.",
    "¿Que tienes miedo? Pues te lo tragas, sonríes y sigues para adelante.",
    "Me quedo loca con la mediocridad de esta industria, hija.",
    "Cariño, tú eres como un diamante en bruto... aunque ahora estés un poco más en bruto que en diamante.",
    "El mundo no está preparado para una estrella como tú. Pero yo sí, así que confía.",
    "Lo importante no es caer, lo importante es saber levantarse... y hacerlo con estilo.",
    "El talento está sobrevalorado; lo que importa es saber moverte.",
    "¿Sabes lo que necesita esta industria? Más gente como yo.",
    "No se puede ser buena todo el rato, cariño. A veces hay que ser zorra.",
    "En el fondo, la vida es un casting constante, y yo siempre voy preparada.",
    "Yo soy como el Ave Fénix: me hundo, me quemo y luego resurjo divina.",
    "Si la vida te da limones, pides tequila y los exprimes.",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

/*
    "El destino te sonríe, pero primero debes atreverte a soñar.",
    "La fortuna está cerca, mantén tu corazón y tu mente abiertos.",
    "Tus acciones de hoy traerán grandes recompensas mañana.",
    "Un cambio inesperado traerá felicidad a tu vida.",
    "El éxito está escrito en tu futuro, ¡confía en el camino!",
    "No temas a los desafíos; cada uno te acerca a tu destino.",
     "Un extraño te traerá noticias importantes.",
    "La prosperidad te espera, pero recuerda, el esfuerzo la atrae.",
    "La rueda de la fortuna gira a tu favor, aprovecha la oportunidad.",
    "El amor toca tu puerta, no lo ignores cuando llegue.",
    "Un viaje revelará un nuevo comienzo para ti.",
    "La sabiduría de tus ancestros te guía hacia la decisión correcta.",
    "Hoy es el día perfecto para intentar algo nuevo.",
    "Una sorpresa inesperada cambiará tu semana para mejor.",
    "La clave de tu éxito está en tu sonrisa, úsala con confianza.",
    "El universo conspira para cumplir tu más profundo deseo.",
    "La paciencia será tu mayor aliada en los días que vienen.",
    "Tu intuición es fuerte, confía en ella para tomar decisiones.",
    "La abundancia llega cuando menos la esperas, prepárate.",
    "Una puerta cerrada hoy abrirá una ventana mañana.",
*/

function deleteUser(button) {
  const confirm_user = confirm(" ¿ Quieres eliminar el participante ?")
  if (confirm_user === true) {
    const userElement = document.getElementById(button.id);
    if (userElement !== null) {
      userElement.remove()
    }
  }

}

function editUser(button) {
  const userElement = document.getElementById(button.id);
  if (userElement !== null) {
    const spanElement = userElement.querySelector("span"); 
    const new_name_user = prompt("Editar" ,spanElement.textContent);

    if (typeof new_name_user === "string") {
      spanElement.textContent = new_name_user;
    }

  }

}