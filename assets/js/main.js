// Variables para los botones y elementos de la página
const continueButton = document.getElementById('continueButton');
const birthdayMessage = document.getElementById('birthdayMessage');
const extraButtons = document.getElementById('extraButtons');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const poemContainer = document.getElementById('poemContainer');
const poemTitle = document.getElementById('poemTitle');
const poemText = document.getElementById('poemText');
const finalButton = document.getElementById('finalButton');
const finalMessage = document.getElementById('finalMessage');

// Poemas para mostrar
const poems = {
  first: {
    title: 'Un mensaje de amor',
    text: `Hola, otro día más, te mando un beso,\n
    que te quiero y te anhelo, más que todo en mi presente.\n
    Pero hoy me trae escribiendo esto, de nuevo por ti.\n
    Igual es bueno, no te veré hoy, ni mañana,\n
    quizá tampoco la otra semana.\n
    \n
    Te deseo un feliz cumpleaños, no hay muchas más palabras,\n
    solo momentos buenos y malos, pero más que todo, tus palabras.\n
    Lastimaron ayer, lastimarán mañana,\n
    ya no comprendo los deseos que quieres en tus mañanas.\n
    \n
    Quizá porque ya no logro escuchar lo que amo,\n
    ya que en mi mente solo hay torbellino, torbellino de lo que me hace bien\n
    o de lo que me hace daño; solo quiero que estés en mi mañana.\n
    \n
    Es un caos que me mata, pero ya fui asesinado,\n
    desde que perdí estas ganas; no confundas lo que digo.\n
    Hoy tengo deseos, pero en el ayer, antes de ti, no habían ganas.\n
    \n
    Hablando del ayer, perdí el deseo, el deseo de hablar con amigos,\n
    el deseo de hablar con amores; incluso hoy, ya no tengo ganas de hablar con mis padres,\n
    aquellos que me dieron la vida, aquellos que veré morir en el mañana.\n
    \n
    Hoy no le encuentro sentido a nada,\n
    a mi sobrevivencia mecánica.\n
    Trabajo, comida, casa, son cosas que ya tengo,\n
    pero siento que tengo nada.\n
    \n
    El corto tiempo que viví contigo\n
    me hace tener deseos de seguir adelante,\n
    querer besarte, amarte, desearte y mil palabras,\n
    y esto me mata; el deseo de volver a hacer lo de antes me llama.\n
    \n
    Quizá no me veas como antes; yo te veo sin deseos,\n
    de salir, de apropiarte de mis mañanas.\n
    Lo que una vez dijiste también me mata, pero\n
    más me mata mi mente, que te desea hasta el alma.\n\n
    
    Después de todo, esto es un mensaje de aquel que te ama,\n
    que una y otra vez, cada día, se acaba. Tus acciones no transmiten\n
    algo que calme, pero espero que el mío haga que ames que te ame.\n
    
    Te eligió un día mi subconsciente, aunque el tuyo aún no lo acepte;\n
    quiero estar aquí cuando sí lo haga, ya que este camino\n
    duele cuando avanzas, te quemas, cortas y mucho.\n
    Pero igual algo se gana, al menos, los recuerdos en tu alma.\n
    
    Y finalmente, finalizo, que deseo completamente,\n
    que tus logros y sueños lleguen con fervor,\n
    porque tú, chica, te los mereces con fervor.\n
    Un beso, guapa.`
  },
  second: {
    title: 'Compartiendo mi todo',
    text: `En varias ocasiones he pensado,\n
    según recibo tus mensajes,\n
    en crisis he entrado.\n\n
    
    No uno, sino varias veces,\n
    que me alejé o te dejé en mi pasado,\n
    y he pensado, ¿te han abandonado?\n\n
    
    ¿Una? ¿Dos? ¿Cuántas veces?\n
    Y yo aquí queriendo estar a tu lado.\n
    No lo deseo, no quiero\n
    que escribas o que intentes alejarme,\n
    no digo de amistad solo,\n
    sino de más.\n\n
    
    Desde que tuve esos cortos encuentros contigo,\n
    no deseo nada más, un poco o mucho de ti.\n
    Si hoy me das un 20% de ti, yo te doy mi 80%.\n
    Si mañana me das 60%, yo te doy 40%.\n\n
    
    Se trataba de ser un equipo,\n
    y hoy soy solo yo el que lo intenta.\n
    Y aunque digas en un... mes, año, décadas,\n
    yo te quiero en mi presente, aunque duela.\n\n
    
    De tanto rendirme aprendí\n
    a no rendirme por lo que realmente quisiera.\n
    Como dicen por ahí, prefiero dar mi 100\n
    para no arrepentirme.\n\n
    
    ¿Y tú qué piensas? ¿Te arrepientes de no dar tu 100?\n\
    Porque aquí estoy, destruyendo la versión que se quiere rendir\n
    y construyendo la que te anhela, que da una y otra vez,\n
    para seguir aquí, en tu espera.\n\n
    
    Es difícil, créeme. Si fuera aquel... ya no te respondería,\n
    porque quisiera estar tratando de dejar ir lo que hubiera.\n
    Pero es muy pronto decir que ya el final llega.\n
    Si hace falta de mí, enamorarte, repetiría\n
    una y otra vez, porque la pena valdría,\n
    si es a ti a quien tuviera.`
  }
};

// Estado para verificar si ambos poemas han sido leídos
let poemsRead = {
    first: false,
    second: false
};

// Función para mostrar el poema con efecto de escritura
function showPoem(poem) {
    poemContainer.style.display = 'flex';
    poemTitle.textContent = poem.title;
    poemText.innerHTML = ''; // Cambiar a innerHTML para permitir <br>
    let i = 0;

    function typeWriter() {
        if (i < poem.text.length) {
            // Manejar el salto de línea
            if (poem.text.charAt(i) === '\n') {
                poemText.innerHTML += '<br>'; // Agregar <br> en lugar de salto de línea
            } else {
                poemText.innerHTML += poem.text.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Lógica para mostrar el botón continuar solo cuando ambos poemas han sido leídos
function checkPoemsRead() {
    if (poemsRead.first && poemsRead.second) {
        finalButton.style.display = 'block';
    }
}

// Listener para el botón continuar
continueButton.addEventListener('click', () => {
    birthdayMessage.style.opacity = '0';
    setTimeout(() => {
        birthdayMessage.textContent = 'Ayer estaba un poco liado de la cabeza, y solo me puse a escribir un poco...';
        birthdayMessage.style.opacity = '1';
    }, 500);

    continueButton.style.display = 'none';
    extraButtons.style.display = 'block';
});

// Al hacer clic en el primer botón, mostrar el primer poema
firstButton.addEventListener('click', () => {
    birthdayMessage.style.display = 'none';
    poemsRead.first = true;
    showPoem(poems.first);
    firstButton.style.display = 'none'; // Ocultar el botón después de usarlo
    checkPoemsRead();
});

// Al hacer clic en el segundo botón, mostrar el segundo poema
secondButton.addEventListener('click', () => {
    birthdayMessage.style.display = 'none';
    poemsRead.second = true;
    showPoem(poems.second);
    secondButton.style.display = 'none'; // Ocultar el botón después de usarlo
    checkPoemsRead();
});

// Mostrar el mensaje final después de leer ambos poemas
finalButton.addEventListener('click', () => {
    poemContainer.style.display = 'none'; // Ocultar el contenedor del poema
    finalButton.style.display = 'none'; // Ocultar el botón continuar
    finalMessage.style.display = 'block'; // Mostrar el mensaje final
});
