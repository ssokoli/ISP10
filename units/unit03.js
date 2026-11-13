/* ISP10 · Unidad 3 · Compartir un edificio. */
(() => {
  'use strict';
  window.ISP10_UNITS = window.ISP10_UNITS || {};
  window.ISP10_UNITS[3] = {
    "unit": {
      "number": 3,
      "title": "Compartir un edificio",
      "intro": "Lee avisos, pide colaboración y negocia acuerdos en una comunidad de vecinos. Empieza por el bloque 01 y termina redactando un aviso para el portal."
    },
    "lessons": [
      {
        "id": "avisos-comunidad",
        "title": "Leer avisos de una comunidad",
        "short": "Distinguir hechos, plazos y excepciones",
        "icon": "▤",
        "minutes": 15,
        "index": "01"
      },
      {
        "id": "describir-incidencias",
        "title": "Describir una incidencia con precisión",
        "short": "Observaciones, alcance y consecuencias",
        "icon": "◈",
        "minutes": 15,
        "index": "02"
      },
      {
        "id": "pedir-colaboracion",
        "title": "Pedir colaboración con tacto",
        "short": "Peticiones, razones y fórmulas de cortesía",
        "icon": "❝",
        "minutes": 20,
        "index": "03"
      },
      {
        "id": "condiciones-alternativas",
        "title": "Plantear condiciones y alternativas",
        "short": "Si, siempre que y en caso de que",
        "icon": "✦",
        "minutes": 20,
        "index": "04"
      },
      {
        "id": "transmitir-mensajes",
        "title": "Transmitir mensajes a otras personas",
        "short": "Estilo indirecto y referencias de tiempo",
        "icon": "↗",
        "minutes": 20,
        "index": "05"
      },
      {
        "id": "negociar-espacios",
        "title": "Negociar el uso de un espacio común",
        "short": "Prioridades, concesiones y propuestas concretas",
        "icon": "⇄",
        "minutes": 20,
        "index": "06"
      },
      {
        "id": "mediar-entre-vecinos",
        "title": "Explicar a otra persona lo esencial",
        "short": "Mediación y adaptación de un aviso",
        "icon": "◎",
        "minutes": 20,
        "index": "07"
      },
      {
        "id": "intervenir-reunion",
        "title": "Tomar la palabra y aclarar malentendidos",
        "short": "Turnos, reformulación y confirmación",
        "icon": "♪",
        "minutes": 15,
        "index": "08"
      },
      {
        "id": "lexico-convivencia",
        "title": "Usar el vocabulario de la convivencia",
        "short": "Expresiones frecuentes en avisos y reuniones",
        "icon": "☷",
        "minutes": 15,
        "index": "09"
      },
      {
        "id": "reto-patio-comun",
        "title": "Resolver un caso de convivencia",
        "short": "Actividad final de lectura, mediación y escritura",
        "icon": "✓",
        "minutes": 25,
        "index": "10"
      }
    ],
    "pages": {
      "avisos-comunidad": {
        "introduction": "Lee un aviso del edificio ficticio de la plaza del Olmo y decide qué harías en cada situación.",
        "blocks": "<section class=\"lesson-block\"><h2>Aviso en el portal</h2><div class=\"example\"><p>El martes, entre las 9:00 y las 13:00, se cortará el agua para reparar una tubería. Antes de las nueve, llenad una jarra si vais a quedaros en casa. El ascensor seguirá funcionando. Si a las 13:30 todavía no hay agua, avisad a la administración e indicad vuestro piso. El personal de mantenimiento avisará en el portal si cambian los horarios.</p></div><p>Antes de contestar, separa en tres columnas lo que ocurrirá, lo que se pide hacer y lo que solo se hará si se cumple una condición.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿Qué servicio seguirá disponible durante la reparación?",
            "options": [
              "El agua",
              "El ascensor",
              "La atención presencial"
            ],
            "answer": 1,
            "ex": "El aviso dice que el ascensor seguirá funcionando."
          },
          {
            "type": "choice",
            "q": "Son las 13:40 y sigue sin haber agua. ¿Qué debes hacer?",
            "options": [
              "Esperar hasta el día siguiente",
              "Avisar al personal del ascensor",
              "Avisar a la administración e indicar tu piso"
            ],
            "answer": 2,
            "ex": "La condición para avisar se cumple a partir de las 13:30."
          },
          {
            "type": "choice",
            "q": "¿Para qué sirve «si vais a quedaros en casa»?",
            "options": [
              "Indica a quién se dirige la sugerencia de llenar una jarra.",
              "Fija la hora del corte.",
              "Explica la causa de la avería."
            ],
            "answer": 0,
            "ex": "La recomendación interesa especialmente a quienes estarán en casa durante el corte."
          }
        ]
      },
      "describir-incidencias": {
        "introduction": "Redacta un aviso que permita a otra persona localizar el problema y decidir qué hacer.",
        "blocks": "<section class=\"lesson-block\"><h2>Una observación que se puede comprobar</h2><p>Indica dónde ocurre el problema, desde cuándo y en qué condiciones aparece. Añade qué impide hacer. Si desconoces la causa, describe lo que observas y formula cualquier explicación como hipótesis.</p><div class=\"example\">Desde el lunes, la puerta del patio se atasca al cerrarse. Esta mañana ha quedado entreabierta durante veinte minutos. Quizá el pestillo esté desalineado. ¿Podéis revisar el cierre?</div><p>Reescribe «Esto vuelve a fallar» como si hablaras de la luz de la escalera. Añade dos detalles que permitirían comprobar el fallo.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿Qué mensaje permite localizar y reproducir el fallo?",
            "options": [
              "La luz se apaga a los cinco segundos en el rellano del segundo.",
              "Otra vez lo mismo con las luces.",
              "Hay un problema eléctrico grave."
            ],
            "answer": 0,
            "ex": "El mensaje identifica el lugar y el tiempo que tarda en apagarse la luz."
          },
          {
            "type": "choice",
            "q": "¿Qué frase presenta una causa como hipótesis?",
            "options": [
              "El rellano está a oscuras.",
              "Tal vez haya fallado el temporizador.",
              "El fallo empezó ayer."
            ],
            "answer": 1,
            "ex": "«Tal vez» y el subjuntivo presentan la explicación como posible."
          },
          {
            "type": "choice",
            "q": "¿Qué dato describe una consecuencia para los vecinos?",
            "options": [
              "Hay un interruptor junto al ascensor.",
              "La bombilla parpadea.",
              "Al apagarse la luz, cuesta distinguir los peldaños."
            ],
            "answer": 2,
            "ex": "La frase explica cómo afecta el fallo a quien usa la escalera."
          }
        ]
      },
      "pedir-colaboracion": {
        "introduction": "Adapta una petición al canal y a la persona que puede atenderla.",
        "blocks": "<section class=\"lesson-block\"><h2>Una petición concreta</h2><p>En un mensaje a alguien con quien te tuteas, puedes usar <em>¿podrías…?</em>. A la administración puedes escribir <em>¿podrían…?</em> o <em>les agradecería que…</em>. Esta última fórmula se construye aquí con imperfecto de subjuntivo.</p><div class=\"example\"><p>Hola, Leo. ¿Podrías dejar libre la entrada del patio esta tarde? A las cinco viene una técnica con un carro.</p><p>Buenos días. Les agradecería que confirmaran antes del viernes si se puede acceder al patio desde la calle.</p></div><p>Escribe dos versiones de una petición para cambiar la hora de una visita. Dirige una a un vecino y otra a la empresa que hará la visita.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "gap",
            "q": "Completa con el imperfecto de subjuntivo. «Les agradecería que me ____ (enviar) el horario».",
            "answers": [
              "enviaran",
              "enviasen"
            ],
            "ex": "Ambas terminaciones del imperfecto de subjuntivo son válidas."
          },
          {
            "type": "choice",
            "q": "¿Qué petición indica qué hacer y explica por qué?",
            "options": [
              "A ver si dejáis de hacer eso.",
              "Necesito hablar con vosotros.",
              "¿Podéis dejar libre el pasillo? Mañana llevarán muebles al tercero."
            ],
            "answer": 2,
            "ex": "La petición identifica la acción y explica para qué se necesita."
          },
          {
            "type": "choice",
            "q": "¿Qué fórmula se dirige a una sola persona a la que tuteas?",
            "options": [
              "¿Podrías confirmar la hora?",
              "¿Podrían confirmar la hora?",
              "Les ruego que confirmen la hora."
            ],
            "answer": 0,
            "ex": "«Podrías» corresponde a la segunda persona del singular."
          }
        ]
      },
      "condiciones-alternativas": {
        "introduction": "Explica cuándo sería viable una propuesta y qué opción quedaría si surge un problema.",
        "blocks": "<section class=\"lesson-block\"><h2>Dos planes para el patio</h2><div class=\"example\"><p>Si mañana llueve, la reunión será en el portal. Podemos reunirnos en el patio siempre que dejemos libre el paso. En caso de que venga mucha gente, reservaremos la sala del centro vecinal.</p></div><p>Para una condición futura que presentas como posible, puedes usar <em>si</em> con presente de indicativo: <em>si llueve</em>. Cuando <em>siempre que</em> significa «con la condición de que», lleva subjuntivo, igual que <em>en caso de que</em>.</p><p>Imagina que quieres organizar un intercambio de libros. Escribe una condición para usar el portal y un plan alternativo si falta espacio.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "gap",
            "q": "Completa en presente de indicativo. «Si ____ (llover), moveremos las cajas al portal».",
            "answers": [
              "llueve"
            ],
            "ex": "La condición futura se expresa aquí con «si» y presente de indicativo."
          },
          {
            "type": "gap",
            "q": "Completa en presente de subjuntivo. «Podemos usar la sala siempre que ____ (dejar, nosotros) todo en orden».",
            "answers": [
              "dejemos"
            ],
            "ex": "«Siempre que» introduce una condición para usar la sala."
          },
          {
            "type": "choice",
            "q": "¿Qué oración ofrece un plan alternativo?",
            "options": [
              "La sala tiene dos puertas.",
              "Si no cabemos en el portal, nos reuniremos por videollamada.",
              "Habrá una reunión a las seis."
            ],
            "answer": 1,
            "ex": "La videollamada es la alternativa si el primer espacio no basta."
          }
        ]
      },
      "transmitir-mensajes": {
        "introduction": "Resume lo que alguien ha dicho y adapta las referencias al momento en que lo cuentas.",
        "blocks": "<section class=\"lesson-block\"><h2>Del chat a la reunión</h2><p>El lunes por la mañana, Nuria escribió: «Hoy no puedo abrir el patio. Mañana dejaré la llave en recepción». El miércoles, Leo explicó: «Nuria dijo que aquel día no podía abrir el patio y que dejaría la llave en recepción al día siguiente».</p><p>En este relato retrospectivo, <em>puedo</em> pasa a <em>podía</em> y <em>dejaré</em> a <em>dejaría</em>. Adapta <em>hoy</em> y <em>mañana</em> si contar el mensaje más tarde cambia su significado. Para transmitir una petición, puedes usar <em>pidió que</em> con imperfecto de subjuntivo: «Pidió que esperáramos en el portal».</p><p>Transforma «Estoy fuera y volveré mañana». Imagina que transmites el mensaje dos días después.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "El mensaje de Nuria se escribió el lunes. ¿A qué día se refería con «mañana»?",
            "options": [
              "Al lunes",
              "Al martes",
              "Al miércoles"
            ],
            "answer": 1,
            "ex": "«Mañana» se interpreta desde el día en que Nuria escribió el mensaje."
          },
          {
            "type": "gap",
            "q": "Completa con el condicional. «El lunes, Nuria dijo que ____ (dejar) la llave en recepción al día siguiente».",
            "answers": [
              "dejaría"
            ],
            "ex": "El condicional presenta una acción posterior a lo que dijo el lunes."
          },
          {
            "type": "choice",
            "q": "¿Qué frase transmite una petición?",
            "options": [
              "Nuria dijo que el patio estaba cerrado.",
              "Nuria preguntó a qué hora abría el patio.",
              "Nuria pidió que cerráramos el patio."
            ],
            "answer": 2,
            "ex": "«Pidió que cerráramos» comunica la acción que quería que hiciéramos."
          }
        ]
      },
      "negociar-espacios": {
        "introduction": "Distingue las necesidades de cada persona y busca un acuerdo que se pueda probar.",
        "blocks": "<section class=\"lesson-block\"><h2>Dos usos para el patio</h2><div class=\"example\"><p>Eva: Necesito un sitio para dejar la bici durante el día. No cabe en casa.</p><p>Adil: Me preocupa que las bicicletas estrechen el paso. Mi padre usa un andador.</p><p>Eva: ¿Y si marcamos una zona junto a la pared y comprobamos que el paso quede libre? Podemos probarlo una semana.</p></div><p>Una necesidad explica qué importa. Una propuesta concreta dice quién hará qué, dónde y durante cuánto tiempo. Una prueba con fecha de revisión permite comprobar si la solución funciona.</p><p>Imagina que una familia quiere instalar una mesa de intercambio de libros en el portal. Formula una objeción concreta y una propuesta que permita probar la idea.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿Qué necesidad señala Adil?",
            "options": [
              "Tener un sitio para guardar su bicicleta.",
              "Mantener el paso accesible para su padre.",
              "Pintar la pared del patio."
            ],
            "answer": 1,
            "ex": "Le preocupa que su padre pueda pasar con el andador."
          },
          {
            "type": "choice",
            "q": "¿Qué elemento hace que la propuesta sea reversible?",
            "options": [
              "Se puede probar durante una semana.",
              "Eva usa la bicicleta de día.",
              "La pared está en el patio."
            ],
            "answer": 0,
            "ex": "El plazo permite evaluar el cambio antes de mantenerlo."
          },
          {
            "type": "choice",
            "q": "¿Cuál sería un criterio concreto para evaluar la prueba?",
            "options": [
              "Que todos piensen igual.",
              "Que la idea parezca moderna.",
              "Que se pueda pasar con un andador sin mover ninguna bicicleta."
            ],
            "answer": 2,
            "ex": "El criterio permite comprobar si se ha resuelto la dificultad planteada."
          }
        ]
      },
      "mediar-entre-vecinos": {
        "introduction": "Convierte un aviso formal en un mensaje breve para alguien que necesita saber cómo actuar.",
        "blocks": "<section class=\"lesson-block\"><h2>Aviso de recogida de objetos</h2><div class=\"example\">La recogida de muebles tendrá lugar el jueves entre las 18:00 y las 20:00 en la entrada del garaje. Cada vivienda podrá dejar dos objetos. Los electrodomésticos quedan excluidos. Para solicitar ayuda para bajar un mueble, avise a la portería antes del miércoles a las 12:00.</div><p>Tu vecina Rosa tiene una silla y una nevera. También necesita ayuda para bajar la silla. Elige la información útil para ella. Puedes cambiar el registro y el orden sin cambiar el contenido.</p><details><summary>Ver un mensaje posible</summary><p>Hola, Rosa. Puedes dejar la silla el jueves, de seis a ocho de la tarde, en la entrada del garaje. La nevera queda fuera de esta recogida. Pide ayuda en portería antes del miércoles a mediodía.</p></details></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿Qué objeto puede dejar Rosa en esta recogida?",
            "options": [
              "La nevera",
              "La silla",
              "Los dos"
            ],
            "answer": 1,
            "ex": "La silla es un mueble. El aviso excluye los electrodomésticos."
          },
          {
            "type": "choice",
            "q": "¿Cuándo debe pedir ayuda?",
            "options": [
              "Antes del miércoles a las 12:00",
              "El jueves a las 18:00",
              "Después de bajar la silla"
            ],
            "answer": 0,
            "ex": "El aviso fija ese plazo para solicitar ayuda."
          },
          {
            "type": "choice",
            "q": "¿Qué versión mantiene el sentido de «entre las 18:00 y las 20:00»?",
            "options": [
              "A partir de las ocho de la tarde",
              "A las seis de la mañana",
              "De seis a ocho de la tarde"
            ],
            "answer": 2,
            "ex": "La versión mantiene las dos horas y el tramo del día."
          }
        ],
        "writing": [
          {
            "id": "mensaje-rosa",
            "title": "Adapta el aviso a otro vecino",
            "prompt": "Tu vecino Bruno quiere dejar tres sillas y puede bajarlas sin ayuda. Escríbele un mensaje de 40 a 60 palabras. Explícale qué puede hacer y cuándo, usando solo la información del aviso.",
            "check": [
              "Incluyo el lugar y el horario.",
              "Explico el límite por vivienda.",
              "Uso un tono adecuado para un mensaje entre vecinos."
            ],
            "instructions": "Escribe en el recuadro. Usa las casillas para revisar tu texto. Puedes descargarlo para conservar una copia."
          }
        ]
      },
      "intervenir-reunion": {
        "introduction": "Practica tres intervenciones breves para que una reunión avance con claridad.",
        "blocks": "<section class=\"lesson-block\"><h2>De la duda al acuerdo</h2><div class=\"example\"><p>— ¿Puedo añadir algo? Falta decidir quién guarda la llave.</p><p>— Cuando dices «recepción», ¿te refieres a la portería del edificio?</p><p>— Entonces, la llave se queda en portería y podemos recogerla hasta las ocho. ¿Lo he entendido bien?</p></div><p>La primera intervención pide turno, la segunda aclara una palabra y la tercera confirma el acuerdo. Lee el diálogo en voz alta y cambia el lugar, el objeto y la hora. Después, prueba a decirlo sin leer. Puedes practicar a solas.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿Qué fórmula sirve para pedir turno?",
            "options": [
              "¿Puedo añadir algo?",
              "Entonces, cerramos a las ocho.",
              "¿Te refieres al portal?"
            ],
            "answer": 0,
            "ex": "La pregunta abre espacio para intervenir sin cortar el intercambio."
          },
          {
            "type": "choice",
            "q": "¿Qué pregunta aclara la referencia de una palabra?",
            "options": [
              "¿Puedo hablar primero?",
              "Cuando dices «sala», ¿te refieres a la del sótano?",
              "¿A quién le toca escribir el acta?"
            ],
            "answer": 1,
            "ex": "La pregunta identifica qué lugar designa «sala»."
          },
          {
            "type": "choice",
            "q": "¿Qué intervención comprueba que se ha entendido el acuerdo?",
            "options": [
              "Eso es imposible.",
              "Queda otro punto.",
              "Entonces, abrimos el sábado a las diez. ¿Es así?"
            ],
            "answer": 2,
            "ex": "La persona reformula el acuerdo y pide confirmación."
          }
        ]
      },
      "lexico-convivencia": {
        "introduction": "Busca las expresiones del glosario y úsalas en situaciones nuevas.",
        "blocks": "<section class=\"lesson-block\"><h2>Glosario</h2><div id=\"vocab-app\"></div><p>Busca «hacerse cargo». Usa la expresión para explicar quién asume una tarea en una reunión. Después, busca «dar parte» y redacta un mensaje de una línea sobre una incidencia.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "gap",
            "q": "Completa con la preposición que falta. «Marta se hará cargo ____ la reserva».",
            "answers": [
              "de"
            ],
            "ex": "La construcción es «hacerse cargo de algo»."
          },
          {
            "type": "choice",
            "q": "En un edificio, ¿qué significa «dar parte de una avería»?",
            "options": [
              "Informar de la avería a quien corresponda.",
              "Repartir el coste de la reparación.",
              "Decidir cómo se produjo."
            ],
            "answer": 0,
            "ex": "«Dar parte de» significa comunicar formalmente un hecho o una incidencia."
          },
          {
            "type": "choice",
            "q": "¿Qué quiere decir «dejar constancia del acuerdo»?",
            "options": [
              "Aplazar la decisión",
              "Cambiar el acuerdo en privado",
              "Registrar lo acordado para poder consultarlo"
            ],
            "answer": 2,
            "ex": "Una nota o un acta permite comprobar más adelante qué se acordó."
          }
        ]
      },
      "reto-patio-comun": {
        "introduction": "Aplica lo aprendido y redacta un aviso completo a partir de un acuerdo.",
        "blocks": "<section class=\"lesson-block\"><h2>El caso de la mesa de intercambio</h2><p>La comunidad prueba durante dos sábados una mesa de intercambio de libros en el portal, de 10:00 a 12:00. Clara colocará la mesa junto a la pared. Si dificulta el paso, Diego la llevará al patio. Quien deje libros deberá volver a las 12:00 para recoger los que queden. Al acabar el segundo sábado, la comunidad revisará la prueba.</p><p>Primero identifica qué se ha decidido, quién hace cada tarea y qué ocurrirá si hay un problema. Responde las preguntas y luego redacta el aviso.</p></section>",
        "exerciseTitle": "Comprueba lo aprendido",
        "exerciseNote": "Contesta las tres preguntas y pulsa «Corregir respuestas».",
        "questions": [
          {
            "type": "choice",
            "q": "¿En qué caso se trasladará la mesa al patio?",
            "options": [
              "Si sobran libros.",
              "Si la mesa dificulta el paso.",
              "Siempre después de las diez."
            ],
            "answer": 1,
            "ex": "El traslado está previsto para mantener el paso libre."
          },
          {
            "type": "choice",
            "q": "¿Quién recoge a las 12:00 los libros que nadie se ha llevado?",
            "options": [
              "Diego recoge todos.",
              "Clara recoge todos.",
              "Cada persona recoge los libros que haya dejado."
            ],
            "answer": 2,
            "ex": "El texto asigna la recogida a quien deja los libros."
          },
          {
            "type": "choice",
            "q": "¿Qué frase transmite fielmente la duración del acuerdo?",
            "options": [
              "Se probará dos sábados y luego se revisará.",
              "Será todos los sábados a partir de ahora.",
              "El segundo sábado se cancelará la mesa."
            ],
            "answer": 0,
            "ex": "El acuerdo establece una prueba de dos sábados y una revisión posterior."
          }
        ],
        "writing": [
          {
            "id": "aviso-intercambio",
            "title": "Redacta el aviso para el portal",
            "prompt": "Escribe un aviso de 90 a 120 palabras. Incluye el horario, el lugar previsto, el plan alternativo, las responsabilidades y el momento de revisión. Si te falta alguna fecha concreta, conserva la formulación del caso.",
            "check": [
              "Se entiende cuándo, dónde y cuánto dura la prueba.",
              "La condición del traslado es clara.",
              "He indicado quién coloca, traslada y recoge.",
              "El aviso se entiende sin haber asistido a la reunión."
            ],
            "instructions": "Escribe en el recuadro. Usa las casillas para revisar tu texto. Puedes descargarlo para conservar una copia."
          }
        ]
      }
    },
    "vocabulary": [
      {
        "category": "Espacios",
        "term": "portal",
        "definition": "Entrada común de un edificio.",
        "example": "Nos vemos en el portal a las seis."
      },
      {
        "category": "Espacios",
        "term": "rellano",
        "definition": "Espacio al que se llega al terminar un tramo de escalera.",
        "example": "La luz del rellano se apaga sola."
      },
      {
        "category": "Espacios",
        "term": "portería",
        "definition": "Lugar desde el que se atiende la entrada del edificio.",
        "example": "Dejaron la llave en portería."
      },
      {
        "category": "Espacios",
        "term": "dejar libre el paso",
        "definition": "Evitar que un objeto dificulte la circulación.",
        "example": "Pon las cajas junto a la pared para dejar libre el paso."
      },
      {
        "category": "Mantenimiento",
        "term": "avería",
        "definition": "Fallo que impide que algo funcione bien.",
        "example": "La avería afecta a los dos ascensores."
      },
      {
        "category": "Mantenimiento",
        "term": "atascarse",
        "definition": "Quedarse bloqueado y dejar de moverse con normalidad.",
        "example": "La puerta se atasca cuando hace frío."
      },
      {
        "category": "Mantenimiento",
        "term": "dar parte de",
        "definition": "Comunicar formalmente una incidencia a quien corresponda.",
        "example": "Dimos parte de la avería por correo."
      },
      {
        "category": "Acuerdos",
        "term": "hacerse cargo de",
        "definition": "Asumir una tarea o responsabilidad.",
        "example": "Luis se hará cargo de avisar a los vecinos."
      },
      {
        "category": "Acuerdos",
        "term": "dejar constancia de",
        "definition": "Registrar algo para poder comprobarlo después.",
        "example": "Dejaron constancia del acuerdo en el acta."
      },
      {
        "category": "Acuerdos",
        "term": "llegar a un acuerdo",
        "definition": "Encontrar una decisión que las partes aceptan.",
        "example": "Llegaron a un acuerdo sobre el horario."
      },
      {
        "category": "Acuerdos",
        "term": "poner a prueba",
        "definition": "Comprobar si una idea funciona en la práctica.",
        "example": "Van a poner a prueba la nueva distribución."
      },
      {
        "category": "Acuerdos",
        "term": "fijar un plazo",
        "definition": "Establecer el tiempo disponible para hacer algo.",
        "example": "Fijaron un plazo de una semana para enviar propuestas."
      }
    ]
  };
})();
