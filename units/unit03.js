/* ISP10 · Unidad 3 · Con ritmo. Material original de apoyo a Nuevo Prisma B2, pp. 36–49. */
(() => {
  'use strict';

  const section = (title, body) => `<section class="lesson-block"><h2>${title}</h2>${body}</section>`;
  const choice = (q, options, answer, ex) => ({type: 'choice', q, options, answer, ex});
  const gap = (q, answers, ex) => ({type: 'gap', q, answers, ex});

  const lessons = [
    {id: 'musica-bienestar', index: '01', title: 'Música, danza y bienestar', short: 'Gustos, sensaciones y estrategias de escucha', icon: '♫', minutes: 20, type: 'Léxico y destrezas'},
    {id: 'opinar', index: '02', title: 'Cómo expresar y justificar una opinión', short: 'Expresar un punto de vista y distinguir razones de ejemplos', icon: '✦', minutes: 20, type: 'Gramática'},
    {id: 'argumentar', index: '03', title: 'Construir una argumentación', short: 'Tesis, conectores y respuesta a objeciones', icon: '▤', minutes: 30, type: 'Gramática y destrezas'},
    {id: 'acuerdo', index: '04', title: 'Acuerdo y desacuerdo', short: 'Matizar una postura y debatir sobre la fama musical', icon: '❝', minutes: 25, type: 'Comunicación'},
    {id: 'musica-cultura', index: '05', title: 'Trayectorias musicales y canción social', short: 'David Bisbal, Pablo Alborán y Macaco', icon: '♫', minutes: 25, type: 'Cultura y destrezas'},
    {id: 'pasados', index: '06', title: 'Los pasados del indicativo', short: 'Cuatro tiempos para contar una trayectoria', icon: '◷', minutes: 25, type: 'Gramática'},
    {id: 'biografia', index: '07', title: 'Viengsay Valdés y la biografía', short: 'Del entrenamiento al escenario', icon: '◈', minutes: 30, type: 'Cultura y destrezas'},
    {id: 'entonacion', index: '08', title: 'Entonación y pausas', short: 'Leer en voz alta respetando los grupos sintácticos', icon: '♪', minutes: 20, type: 'Fonética'},
    {id: 'vocabulario3', index: '09', title: 'Vocabulario de la unidad 3', short: 'Música, danza, carácter y expresiones coloquiales', icon: '☷', minutes: 20, type: 'Léxico'},
    {id: 'repaso3', index: '10', title: 'Autoevaluación de la unidad 3', short: 'Argumentación, pasados, léxico y pronunciación', icon: '✓', minutes: 20, type: 'Evaluación'}
  ];

  const pages = {
    'musica-bienestar': {
      introduction: 'Aprende a describir qué música eliges, en qué situación y por qué. Después, lee el diálogo y contesta las cinco preguntas.',
      blocks: section('De los gustos a las sensaciones', `
        <p>Un <strong>género</strong> es un tipo de música, como la salsa o el flamenco. El <strong>ritmo</strong> organiza los sonidos en el tiempo y la <strong>melodía</strong> es la sucesión de notas que reconoces al tararear. Puedes hablar del ritmo de una canción, de lo que cuenta su letra o del modo en que se interpreta.</p>
        <div class="example">Las baladas me traen recuerdos. Para caminar prefiero algo movido. Cuando necesito concentrarme, me apetece escuchar música instrumental.</div>
        <p>En la danza, «seguir el compás» es ajustar los movimientos a la pauta rítmica. Una «coreografía» organiza los movimientos de una pieza. El ballet clásico, la danza contemporánea y los bailes de salón ofrecen distintos puntos de partida para comparar técnica y expresión.</p>`) +
      section('Lee la entrevista y compara las reacciones', `
        <p>La <strong>musicoterapia</strong> utiliza la música y sus elementos con fines terapéuticos. La <strong>danzaterapia</strong> emplea el movimiento expresivo.</p>
        <p>Lee el diálogo y fíjate en dos cosas: qué hizo el grupo con la pieza rápida y cómo reaccionaron dos participantes a la pieza lenta. Si trabajáis en pareja, una persona puede leerlo en voz alta y la otra escuchar.</p><h3>Diálogo ficticio en un taller de música</h3>
        <div class="example"><p>— ¿Qué habéis observado en el taller de música?</p><p>— Con una pieza lenta, algunas personas prefirieron escuchar en silencio. Con otra más rápida, varias empezaron a marcar el pulso con las manos.</p><p>— ¿Reaccionó todo el grupo de la misma manera?</p><p>— Hubo reacciones distintas. Una participante dijo que la primera pieza le traía recuerdos tristes. Otra contó que le ayudaba a tranquilizarse.</p></div>
        <p>Responde con tus propias palabras. ¿Qué hicieron varias personas al oír la pieza rápida? ¿Qué dijo cada una de las dos participantes sobre la pieza lenta? Después, abre «Ver respuesta».</p>
        <details><summary>Ver respuesta</summary><p>Varias personas marcaron el pulso con las manos al oír la pieza rápida. La pieza lenta le trajo recuerdos tristes a una participante y ayudó a otra a tranquilizarse.</p></details>
        `) +
      section('Práctica opcional', `<p>Piensa en dos canciones que conozcas. Para cada una, escribe cuándo la escucharías y por qué.</p><div class="example">Para caminar, elegiría una canción rápida porque me ayuda a mantener el paso. Para leer, pondría música instrumental porque me distrae menos.</div>`),
      exerciseTitle: 'Comprueba lo aprendido',
      exerciseNote: 'Contesta las cinco preguntas. Puedes volver a leer el diálogo para responder la pregunta 4. Al terminar, pulsa «Corregir respuestas».',
      questions: [
        choice('¿Qué elemento reconoces cuando tarareas la sucesión de notas de una canción?', ['La letra', 'La melodía', 'El género'], 1, 'La melodía es una sucesión reconocible de notas.'),
        choice('Todos los bailarines ajustan sus pasos a la pauta rítmica. ¿Qué hacen?', ['Cambian de género', 'Componen la letra', 'Siguen el compás'], 2, 'Seguir el compás implica ajustar los movimientos a la pauta rítmica.'),
        gap('Completa con un sustantivo que empiece por «auto-». «La valoración que una persona hace de sí misma se llama ____».', ['autoestima'], 'Autoestima designa la valoración de uno mismo.'),
        choice('Según el diálogo, ¿qué dijo una de las participantes sobre la pieza lenta?', ['Le ayudó a tranquilizarse.', 'La animó a marcar el pulso con las manos.', 'Produjo la misma reacción en todo el grupo.'], 0, 'Una participante dijo que la pieza lenta la ayudó a tranquilizarse. A otra le trajo recuerdos tristes.'),
        choice('¿Qué frase vincula una preferencia musical con una situación concreta?', ['La música tiene ritmo.', 'Cuando corro, elijo canciones rápidas porque me ayudan a mantener el paso.', 'Existen muchos estilos.'], 1, 'La frase identifica un contexto, una preferencia y su motivo.')
      ]
    },
    opinar: {
      introduction: 'Formula una postura sobre música y personalidad y apóyala con razones que puedas explicar.',
      blocks: section('Afirmar y cuestionar una idea', `
        <p>Para presentar una idea como propia puedes usar <strong>creo que</strong>, <strong>considero que</strong> o <strong>me parece que</strong>, normalmente con indicativo. Cuando rechazas o pones en duda esa idea con <strong>no creo que</strong>, <strong>no considero que</strong> o <strong>no me parece que</strong>, lo habitual es el subjuntivo.</p>
        <div class="example">Considero que el contexto <b>influye</b> en lo que escuchamos. No considero que un género musical <b>defina</b> el carácter de sus oyentes.</div>
        <p>«A mi modo de ver» introduce tu perspectiva. «Según la autora» atribuye una idea a otra persona. Puedes expresar reservas con «yo diría que».</p>`) +
      section('Tesis, razón, ejemplo y evidencia', `
        <p>Imagina un foro donde alguien afirma que un estilo musical revela el carácter. Una <strong>tesis</strong> posible es que los gustos dependen en parte de la situación. Una <strong>razón</strong> sería que una misma persona elige música para actividades diferentes. Un <strong>ejemplo</strong> sería elegir salsa para bailar y música instrumental para leer.</p>
        <p>Un ejemplo concreto ilustra la razón. Si aportas una encuesta o citas a una persona experta, indica qué se estudió y hasta dónde llegan los resultados. Una asociación entre dos rasgos admite varias explicaciones.</p>`),
      exerciseTitle: 'La postura y sus razones',
      questions: [
        gap('Completa en presente. «Considero que los recuerdos ____ (influir) en nuestras preferencias musicales».', ['influyen'], 'La opinión afirmativa presenta la proposición con indicativo.'),
        gap('Completa en presente. «No creo que una lista de reproducción ____ (definir) la personalidad de nadie».', ['defina'], 'La opinión negada presenta esta proposición en subjuntivo.'),
        choice('¿Qué expresión atribuye la idea a una fuente?', ['A mi modo de ver', 'Según la investigadora', 'Yo diría que'], 1, '«Según la investigadora» identifica la procedencia de la idea.'),
        choice('«Ana escucha jazz para cocinar y rock para entrenar». ¿Qué función cumple tras una razón general sobre los contextos de escucha?', ['Cita literal', 'Conclusión', 'Ejemplo'], 2, 'La conducta de Ana ilustra una idea mediante un caso particular.'),
        choice('En una encuesta de un curso, varios aficionados al jazz se describen como reservados. ¿Qué conclusión respeta el alcance del dato?', ['En ese curso, varios encuestados dieron ambas respuestas.', 'El jazz vuelve reservadas a las personas.', 'Todos los aficionados al jazz son reservados.'], 0, 'El dato describe a participantes concretos y permite informar de esa coincidencia.')
      ]
    },
    argumentar: {
      introduction: 'Organiza una postura escrita u oral con razones, un contraargumento y una conclusión.',
      blocks: section('Del tema a la conclusión', `
        <ol><li><strong>Introducción.</strong> Delimita el tema y explica por qué se discute.</li><li><strong>Tesis.</strong> Expresa en una frase la postura que defenderás. Puede aparecer en la introducción.</li><li><strong>Argumentación.</strong> Desarrolla cada razón con un ejemplo, un dato verificable o una fuente pertinente.</li><li><strong>Contraargumentación.</strong> Presenta una objeción plausible y responde a ella.</li><li><strong>Conclusión.</strong> Recupera tu postura y extrae una consecuencia o una propuesta.</li></ol>
        <p>Una pregunta retórica invita a reflexionar. Una cita de autoridad requiere una fuente identificable. Si usas porcentajes, precisa de dónde salen y qué población representan.</p>`) +
      section('Conectores y relaciones', `
        <div class="table-scroll"><table class="content-table"><thead><tr><th>Función</th><th>Recursos</th></tr></thead><tbody>
        <tr><td>Presentar y ordenar</td><td>Para empezar, en primer lugar, por otra parte</td></tr>
        <tr><td>Añadir y ejemplificar</td><td>Además, asimismo, por ejemplo</td></tr>
        <tr><td>Causa y consecuencia</td><td>Puesto que, ya que, por tanto, de ahí que + subjuntivo</td></tr>
        <tr><td>Contraste y concesión</td><td>Sin embargo, en cambio, si bien, aunque</td></tr>
        <tr><td>Atribuir y concluir</td><td>Según, en opinión de, en definitiva, en conclusión</td></tr>
        </tbody></table></div>
        <div class="example"><p><strong>Modelo breve.</strong> Propongo dedicar cinco minutos de clase a una canción. Un estribillo breve facilita la repetición de una expresión nueva. Además, comparar interpretaciones genera conversación. Es cierto que algunas grabaciones son difíciles de seguir. Por eso conviene elegir un fragmento claro y preparar una pregunta de escucha. En definitiva, la canción merece un lugar en clase cuando responde a un objetivo concreto.</p></div>
        <h3>Una propuesta sobre el acceso a la música</h3>
        <div class="example"><p>Las salas municipales deberían publicar grabaciones gratuitas de algunos conciertos con permiso de los artistas. Así podrían escucharlos quienes viven lejos y los grupos llegarían a nuevos públicos. Es cierto que grabar cuesta dinero. Por eso propongo empezar con una actuación al mes y evaluar su alcance.</p></div>
        <p>Identifica la tesis, las dos razones, la objeción y la medida final. Después, redacta una respuesta que añada otra objeción y una forma de resolverla.</p>
        <details><summary>Ver respuesta y réplica posible</summary><p>La tesis es publicar grabaciones gratuitas con permiso de los artistas. Las razones son facilitar el acceso a quienes viven lejos y ampliar el público de los grupos. La objeción es el coste de grabar. La medida final es probar con una actuación mensual y evaluar su alcance.</p><p>Réplica posible. Algunas bandas podrían preferir que su repertorio completo solo se escuche en directo. Se podría acordar con ellas qué piezas publicar.</p></details>`),
      exerciseTitle: 'Organiza y conecta las ideas',
      questions: [
        choice('¿Qué frase es una tesis que puede defenderse?', ['La música en la ciudad', 'El centro cultural debería ceder una sala semanal a grupos principiantes.', 'Por ejemplo, el grupo del barrio.'], 1, 'La tesis enuncia una postura sobre una medida concreta.'),
        choice('Completa con un conector de adición. «La sala tiene buena acústica. ____, es accesible en autobús».', ['Sin embargo', 'Por consiguiente', 'Además'], 2, 'El acceso en autobús añade una ventaja independiente.'),
        choice('Completa con un conector de contraste. «La entrada era gratuita. ____, acudió muy poca gente».', ['Sin embargo', 'Asimismo', 'Por ejemplo'], 0, 'La asistencia escasa contrasta con la expectativa que genera la gratuidad.'),
        choice('Completa con un conector de consecuencia. «El grupo amplió el aforo y pudo ofrecer más entradas. ____, bajó el número de personas en lista de espera».', ['En cambio', 'Por tanto', 'Por ejemplo'], 1, 'La lista de espera se redujo como consecuencia de la mayor disponibilidad.'),
        gap('Completa en presente. «Hay poca luz en el escenario, de ahí que el equipo ____ (pedir) focos nuevos».', ['pida'], 'La construcción «de ahí que» introduce la consecuencia con subjuntivo.'),
        choice('«Es cierto que ampliar el horario cuesta dinero. Podríamos empezar con una prueba mensual». ¿Qué hace el autor?', ['Define el tema', 'Añade un dato estadístico', 'Reconoce una objeción y ofrece una respuesta'], 2, 'La primera frase concede una dificultad y la segunda propone cómo afrontarla.')
      ],
      writing: [{
        id: 'argumentacion',
        title: 'Una propuesta para el centro cultural',
        prompt: 'Redacta entre 150 y 180 palabras. ¿Debería el centro cultural reservar parte de su programación para artistas que todavía no tienen público? Formula una tesis, desarrolla dos razones, responde a una objeción y termina con una propuesta.',
        check: ['Mi tesis se entiende desde el principio.', 'Desarrollo dos razones y doy al menos un ejemplo concreto.', 'Respondo a una objeción plausible.', 'Los conectores expresan la relación adecuada entre las ideas.']
      }]
    },
    acuerdo: {
      introduction: 'Responde a una opinión con el grado de acuerdo que quieres expresar y explica tu postura.',
      blocks: section('Tres maneras de responder', `
        <div class="table-scroll"><table class="content-table"><thead><tr><th>Intención</th><th>Respuesta en contexto</th></tr></thead><tbody>
        <tr><td>Acuerdo</td><td>Comparto tu opinión. El concurso da visibilidad a quienes empiezan.</td></tr>
        <tr><td>Acuerdo parcial</td><td>Hasta cierto punto sí. Da visibilidad, pero la exposición dura poco.</td></tr>
        <tr><td>Desacuerdo</td><td>Yo no lo veo así. La formación musical también cuenta fuera de la televisión.</td></tr>
        </tbody></table></div>
        <p>«En efecto» y «desde luego» suelen confirmar una idea. «Puede ser, pero…» deja espacio para una reserva. «¡Qué va!» expresa rechazo en un registro coloquial. En una intervención formal puedes decir «discrepo en ese punto» y explicar el motivo.</p>`) +
      section('Un intercambio con réplicas', `
        <div class="example"><p>— Los festivales deberían reservar la mitad del cartel a grupos locales.</p><p>— Estoy de acuerdo en darles más espacio, aunque fijaría la cuota después de consultar a los organizadores.</p><p>— Entiendo la cautela. ¿Y si probamos la medida durante una edición y evaluamos la asistencia?</p></div>
        <p>Antes de rebatir, resume el punto concreto que has entendido. Después, aporta una razón y plantea una alternativa que tu interlocutor pueda valorar.</p>`),
      exerciseTitle: 'Reconoce y matiza la postura',
      questions: [
        choice('«En efecto, los ensayos abiertos pueden atraer público nuevo». ¿Qué expresa «en efecto»?', ['Acuerdo', 'Acuerdo parcial', 'Desacuerdo'], 0, 'Confirma la idea anterior.'),
        choice('«Puede ser, pero el festival también debe cuidar el descanso del vecindario». ¿Qué expresa la respuesta?', ['Acuerdo pleno', 'Acuerdo parcial', 'Rechazo sin matices'], 1, 'Acepta parte de la propuesta y formula una reserva.'),
        choice('En una reunión formal, ¿cómo discrepas y aportas una razón?', ['¡Qué va!', 'Claro, totalmente.', 'Discrepo en ese punto porque el presupuesto cubre una sola actuación.'], 2, 'La fórmula expresa desacuerdo en un registro formal y lo justifica.'),
        choice('¿Qué respuesta concede una ventaja y después señala un límite?', ['Entiendo que la televisión amplía el público, aunque la fama puede durar poco.', 'La televisión siempre perjudica a los músicos.', 'Estoy totalmente de acuerdo con todo.'], 0, 'Se reconoce el aumento de público y se matiza su duración.'),
        gap('Completa con el presente de subjuntivo. «No estoy de acuerdo con que el festival ____ (cobrar) a los artistas por actuar».', ['cobre'], 'Se expresa rechazo a la medida con «estar de acuerdo con que» en negativo y subjuntivo.')
      ],
      writing: [{
        id: 'debate',
        title: 'Defiende tu propuesta en voz alta',
        prompt: 'Prepara una intervención de 60 a 90 segundos. Una sala tiene presupuesto para un único concierto. ¿Contratarías a un artista conocido o a un grupo emergente? Reconoce una ventaja de la otra opción, explica tu reserva y justifica tu decisión.',
        check: ['Presento mi postura y doy una razón concreta.', 'Reconozco una ventaja de la otra opción.', 'Cierro con una propuesta que podría debatirse.']
      }]
    },
    'musica-cultura': {
      introduction: 'Compara tres caminos para darse a conocer y analiza cómo una canción puede representar realidades sociales.',
      blocks: section('Televisión, redes y calle', `
        <p><strong>David Bisbal</strong> ganó visibilidad en la primera edición de «Operación Triunfo», tras haber cantado en una orquesta. El concurso le abrió una vía hacia la grabación y los conciertos.</p>
        <p><strong>Pablo Alborán</strong> empezó a componer de joven y difundió interpretaciones en Internet. El «boca a boca» ayudó a que esos vídeos llegaran a más oyentes.</p>
        <p><strong>Macaco</strong>, nombre artístico de Daniel Carbonell, tocó en la calle en Barcelona y reunió a músicos de distintos orígenes. Su repertorio combina influencias como la rumba, el reggae y el funk.</p>
        <p>A partir de los tres perfiles, identifica cómo se dio a conocer cada artista. Luego escribe una semejanza y una diferencia entre Bisbal y Alborán.</p>
        <details><summary>Ver respuesta posible</summary><p>Bisbal ganó visibilidad con un concurso de televisión, Alborán difundió sus interpretaciones en Internet y Macaco tocó en la calle. Bisbal y Alborán ya tenían experiencia musical cuando llegaron a un público más amplio. La televisión fue decisiva para Bisbal y los vídeos en Internet para Alborán.</p></details>`) +
      section('Una canción que cambia de escenario', `
        <p>En «Hijos de un mismo dios», Macaco yuxtapone escenas de distintos lugares. El desempleo, la violencia cotidiana, la desconexión política, la soledad en redes y la presión laboral sirven como puntos de partida para interpretar la canción.</p>
        <h3>Dos escenas originales</h3>
        <div class="example"><p><strong>A.</strong> Cada noche, Irene cena con el portátil abierto. Ha prometido tres veces apagarlo a las ocho, pero sigue contestando mensajes del trabajo hasta que su familia se va a dormir.</p><p><strong>B.</strong> En el barrio de Samir ha cerrado la última fábrica. Todos los lunes, Samir repasa las ofertas con su vecina. Esta semana solo han encontrado un anuncio y pide mudarse a otra ciudad.</p></div>
        <p>Identifica el problema social de cada escena y señala un detalle que apoye tu interpretación. Si estas escenas formaran parte de una canción, ¿qué sonido cotidiano elegirías para cada una y por qué?</p>
        <details><summary>Ver respuesta posible</summary><p>La escena A muestra cómo el trabajo invade el tiempo familiar. Irene sigue contestando mensajes hasta que su familia se acuesta. La escena B sugiere desempleo y falta de oportunidades locales. Ha cerrado la fábrica y la única oferta exige mudarse. Podrían oírse notificaciones en A y, en B, el eco de la puerta metálica de la fábrica.</p></details>`),
      exerciseTitle: 'Trayectorias y lectura cultural',
      questions: [
        choice('¿Qué medio dio a David Bisbal la visibilidad destacada en esta lección?', ['Un concurso televisivo', 'Un grupo formado en la calle', 'Vídeos caseros como primera vía de difusión'], 0, 'Su paso por Operación Triunfo amplió su público.'),
        choice('¿Qué experiencia distingue la trayectoria de Pablo Alborán en esta comparación?', ['Formar una banda callejera en las Ramblas', 'Difundir interpretaciones propias en Internet', 'Entrar en una academia de un concurso televisivo'], 1, 'Los vídeos en Internet ayudaron a difundir sus primeras interpretaciones.'),
        choice('¿Qué artista reunió a músicos de distintos orígenes tras tocar en la calle en Barcelona?', ['David Bisbal', 'Pablo Alborán', 'Macaco'], 2, 'Macaco empezó como músico callejero y formó un grupo multicultural.'),
        choice('Una escena muestra a alguien con muchos contactos en redes que lleva semanas sin visitar a nadie. ¿Qué lectura se apoya mejor en ese detalle?', ['Falta de oportunidades laborales', 'Distancia entre la conexión digital y el trato personal', 'Dificultad para aprender una coreografía'], 1, 'La diferencia entre el número de contactos y la falta de encuentros sugiere soledad.'),
        gap('Completa la expresión que significa difusión de persona a persona. «La grabación se hizo conocida gracias al boca a ____».', ['boca'], 'El boca a boca es la difusión mediante recomendaciones personales.')
      ]
    },
    pasados: {
      introduction: 'Elige el tiempo según el marco temporal y la relación que el hecho guarda con otros momentos.',
      blocks: section('Cuatro perspectivas sobre el pasado', `
        <div class="table-scroll"><table class="content-table"><thead><tr><th>Tiempo</th><th>Uso en una trayectoria</th><th>Ejemplo</th></tr></thead><tbody>
        <tr><td>Pretérito perfecto compuesto</td><td>Experiencia sin fecha concreta, balance vigente o hecho situado en un período que el hablante presenta como abierto.</td><td>En lo que va de temporada, <b>ha actuado</b> tres veces.</td></tr>
        <tr><td>Pretérito indefinido o perfecto simple</td><td>Hecho o etapa presentada como completa, con duración o momento delimitados.</td><td><b>Debutó</b> en 2018. <b>Trabajó</b> allí dos años.</td></tr>
        <tr><td>Pretérito imperfecto</td><td>Descripción, hábito, simultaneidad o acción en curso en el marco del relato.</td><td>De niña <b>ensayaba</b> a diario. Aquel día <b>practicaba</b> cuando recibió la noticia.</td></tr>
        <tr><td>Pretérito pluscuamperfecto</td><td>Hecho ya ocurrido en relación con un punto de referencia pasado.</td><td>Cuando debutó, ya <b>había bailado</b> en dos festivales.</td></tr>
        </tbody></table></div>`) +
      section('Cómo combinar los tiempos', `
        <p>El indefinido puede hacer avanzar el relato y el imperfecto presentar las circunstancias. «El teatro estaba lleno cuando salió al escenario.» El pluscuamperfecto permite retroceder desde ese momento. «Antes de salir, ya había repasado la coreografía.»</p>
        <p>«Hasta entonces nunca había actuado en esa sala» fija un límite en el pasado. «Apenas había terminado el ensayo cuando sonó el teléfono» presenta dos hechos muy próximos. El ensayo sigue siendo anterior a la llamada.</p>
        <p>El reparto entre «he cantado» y «canté» varía entre regiones y hablantes. Algunos usan el simple con «hoy» y «esta semana». Los ejercicios indican cuándo se pide el perfecto compuesto.</p>`),
      exerciseTitle: 'Elige el punto de referencia',
      questions: [
        gap('Usa el perfecto compuesto para un balance vigente. «Hasta ahora, Alba ____ (componer) cuatro piezas para el grupo».', ['ha compuesto'], '«Ha compuesto» se forma con el presente de haber y el participio irregular «compuesto».'),
        gap('Presenta el debut como un hito fechado. «En 2018, Alba ____ (debutar) en un teatro de Cádiz».', ['debutó'], 'El indefinido presenta el debut como un hecho completo en un año cerrado.'),
        gap('Presenta el hábito como fondo de la historia. «De niña, Alba ____ (ensayar) los sábados con su padre».', ['ensayaba'], 'El imperfecto presenta el hábito sin delimitar su final.'),
        gap('Marca la acción anterior al debut. «Cuando debutó, Alba ya ____ (grabar) una maqueta».', ['había grabado'], 'La grabación ya había ocurrido cuando se produjo el debut.'),
        choice('«La compañía actuó en Sevilla durante tres meses en 2022». ¿Qué perspectiva adopta el hablante?', ['Acción simultánea en curso', 'Etapa completa con duración delimitada', 'Experiencia abierta hasta hoy'], 1, 'El indefinido presenta la estancia como un período completo.'),
        choice('¿Qué ocurrió primero en «Apenas había empezado la función cuando se apagaron las luces»?', ['Empezó la función.', 'Se apagaron las luces.', 'El enunciado deja el orden abierto.'], 0, 'El comienzo de la función es el hecho anterior, aunque la separación temporal sea muy corta.'),
        choice('«Era una sala pequeña y el público conversaba cuando salió el guitarrista». ¿Qué verbo introduce el acontecimiento que hace avanzar la escena?', ['era', 'conversaba', 'salió'], 2, '«Salió» presenta el acontecimiento. Los imperfectos describen el entorno.')
      ]
    },
    biografia: {
      introduction: 'Organiza una vida artística en etapas y explica cómo se relacionan la formación, el esfuerzo y los logros.',
      blocks: section('Una trayectoria en el Ballet Nacional de Cuba', `
        <p><strong>Viengsay Valdés</strong> practicaba gimnasia antes de empezar en el ballet. Su abuela la llevó a la escuela Alejo Carpentier y allí comenzó su formación. Cuenta cómo compaginaba las clases con el entrenamiento, qué actividades tuvo que dejar y qué actuaciones recuerda con especial emoción, entre ellas las de México y San Petersburgo.</p>
        <p>La reseña de «De acero y nube», de Carlos Tablada, aporta otra mirada sobre la bailarina. Una entrevista conserva la perspectiva de la persona entrevistada. Una biografía organiza los hechos y les da contexto. Una reseña, además, presenta o valora una obra.</p>
        <p>A partir del perfil anterior, ordena estos hitos y añade una frase sobre la rutina de la bailarina usando el imperfecto. <strong>A.</strong> Actuó en escenarios internacionales. <strong>B.</strong> Practicó gimnasia. <strong>C.</strong> Entró en la escuela Alejo Carpentier.</p>
        <details><summary>Ver respuesta</summary><p>El orden es B → C → A. Una frase posible es «Durante su formación, compaginaba las clases con el entrenamiento».</p></details>`) +
      section('Escribir una biografía breve', `
        <p>Empieza con la identidad de la persona y su campo. Escoge dos o tres hitos verificables y enlázalos con marcas temporales como «por entonces», «años antes» o «a partir de ahí». Explica qué hacía habitualmente, qué había hecho antes de un logro y qué impacto tiene hoy. Si incluyes tu valoración, apóyala en un hecho de la trayectoria.</p>
        <div class="example"><p><strong>Modelo ficticio.</strong> Lucía Mena es coreógrafa. De niña ensayaba en un centro vecinal. Cuando estrenó su primera obra en 2016, ya había dirigido un grupo juvenil. Desde entonces ha creado talleres que acercan la danza a quienes nunca han subido a un escenario. Admiro esa labor porque sus talleres permiten participar a personas con experiencias muy distintas.</p></div>`),
      exerciseTitle: 'Lee y organiza la trayectoria',
      questions: [
        choice('Según la lección, ¿qué experiencia de Valdés precedió a su formación en ballet?', ['La composición musical', 'La gimnasia', 'La dirección de una compañía'], 1, 'Valdés recuerda que ya practicaba gimnasia antes de empezar en el ballet.'),
        choice('¿Qué dato del modelo pertenece a la rutina de infancia de Lucía?', ['Ensayaba en un centro vecinal.', 'Estrenó su primera obra en 2016.', 'Ha creado talleres desde el estreno.'], 0, '«De niña ensayaba» introduce un hábito como fondo de la trayectoria.'),
        choice('¿Qué hizo Lucía antes del estreno de 2016?', ['Fundó todos sus talleres actuales.', 'Dejó el centro vecinal en 2016.', 'Dirigió un grupo juvenil.'], 2, 'El pluscuamperfecto «había dirigido» sitúa esa actividad antes del estreno.'),
        choice('¿Qué frase separa con claridad la valoración del hecho que la apoya?', ['Está claro que es la mejor artista de su época.', 'Admiro su trabajo porque sus talleres abren la danza a personas sin experiencia.', 'Es admirable porque todo el mundo la admira.'], 1, 'La valoración se presenta como propia y se vincula a una aportación concreta.'),
        gap('Completa con el verbo que significa dejar voluntariamente algo. «Para seguir en la compañía tuvo que ____ a parte de sus vacaciones».', ['renunciar'], 'La construcción es «renunciar a» algo.')
      ],
      writing: [{
        id: 'biografia',
        title: 'Escribe la biografía de un artista',
        prompt: 'Redacta entre 150 y 180 palabras sobre un artista de la música o de la danza que admires. Consulta una fuente e identifícala al final. Incluye sus inicios, un hito y su aportación. Cierra con una valoración personal razonada.',
        check: ['Organizo los hechos en etapas y cito una fuente.', 'Uso los pasados según el marco temporal y la perspectiva.', 'Apoyo mi valoración con un hecho de la trayectoria.']
      }]
    },
    entonacion: {
      introduction: 'Localiza dónde puedes respirar y qué palabras conviene mantener juntas en una lectura neutra.',
      blocks: section('Grupos que se pronuncian juntos', `
        <p>En una lectura fluida, solemos pronunciar juntas las palabras estrechamente relacionadas. Una pausa en medio del grupo puede romper el sentido. La intención expresiva, una vacilación o una corrección espontánea pueden alterar el patrón.</p>
        <div class="table-scroll"><table class="content-table"><thead><tr><th>Agrupación</th><th>Ejemplos originales</th></tr></thead><tbody>
        <tr><td>Artículo + nombre, nombre + adjetivo, adjetivo + nombre</td><td>la pista, música suave, breve pausa</td></tr>
        <tr><td>Verbo + adverbio, adverbio + verbo</td><td>suena bien, no canta</td></tr>
        <tr><td>Pronombre átono + verbo</td><td>lo grabaron</td></tr>
        <tr><td>Adverbio + adjetivo, adverbio + adverbio</td><td>muy suave, bastante lejos</td></tr>
        <tr><td>Tiempo compuesto, perífrasis verbal</td><td>había ensayado, volvió a tocar</td></tr>
        <tr><td>Preposición + término</td><td>con la orquesta</td></tr>
        </tbody></table></div>`) +
      section('Lee y compara', `
        <p>La barra marca una pausa posible. «Al terminar el ensayo / la cantante volvió a tocar con la orquesta.» Lee la frase a velocidad normal y repítela haciendo una pausa entre «con» y «la orquesta». Observa cómo cambia la fluidez.</p>
        <h3>Detecta y corrige dos pausas</h3>
        <div class="example"><p>— Antes del ensayo / la directora habló con / el pianista.</p><p>— Al terminar / lo / llamaron para confirmar la hora.</p></div>
        <p>Lee el diálogo siguiendo las barras. Quita una barra de cada frase y explica qué palabras separaba. Si practicas en pareja, leed en voz alta ambas versiones.</p>
        <details><summary>Ver respuesta</summary><p>Las lecturas propuestas son «Antes del ensayo / la directora habló con el pianista» y «Al terminar / lo llamaron para confirmar la hora». Los cortes originales separaban la preposición de su término y el pronombre átono del verbo.</p></details>`),
      exerciseTitle: 'Marca una pausa posible',
      questions: [
        choice('La barra indica una pausa. ¿Qué lectura mantiene juntas las agrupaciones?', ['Tras el / concierto, lo grabaron.', 'Tras el concierto / lo grabaron.', 'Tras el concierto, lo / grabaron.'], 1, 'La pausa puede cerrar el complemento inicial. «El concierto» y «lo grabaron» permanecen unidos.'),
        choice('¿Qué unidad se divide con la pausa en «Ya había / ensayado»?', ['Preposición y término', 'Artículo y nombre', 'Auxiliar y participio de un tiempo compuesto'], 2, '«Había ensayado» forma un pluscuamperfecto.'),
        choice('¿Qué lectura conserva la perífrasis «volvió a cantar»?', ['Al final del acto / volvió a cantar.', 'Al final del acto volvió / a cantar.', 'Al final del acto volvió a / cantar.'], 0, 'La pausa se coloca tras el complemento inicial y deja intacta la perífrasis.'),
        choice('¿Qué grupo se rompe en «con / su banda»?', ['Nombre y adjetivo', 'Preposición y término', 'Pronombre átono y verbo'], 1, '«Su banda» es el término de la preposición «con».'),
        choice('¿Qué corte separa un adverbio del adjetivo que modifica?', ['Cuando llegó / el público aplaudió.', 'Se oía muy / bajo en la sala.', 'Eligieron una melodía muy / suave.'], 2, 'En «muy suave», «muy» modifica al adjetivo «suave». En «se oía muy bajo», «bajo» funciona como adverbio.')
      ]
    },
    vocabulario3: {
      introduction: 'Busca palabras y expresiones de la unidad y fíjate en las combinaciones que aparecen en los ejemplos.',
      blocks: section('Glosario', '<div id="vocab-app"></div>') +
      section('Aprender por combinaciones', '<p>Anota el verbo o la preposición que acompaña a cada expresión. Por ejemplo, «seguir el compás», «renunciar a las vacaciones» y «estar al corriente de las novedades». Usa cada combinación en una frase propia.</p>'),
      exerciseTitle: 'Léxico en contexto',
      questions: [
        choice('¿Qué significa «estar de capa caída» cuando se habla de la carrera de un grupo?', ['Estar de gira', 'Atravesar una etapa de declive', 'Ocultar su identidad'], 1, 'La expresión alude a una pérdida de éxito, ánimo o relevancia.'),
        choice('«El dúo arrasó en el festival». ¿Qué implica en ese contexto?', ['Tuvo mucho éxito.', 'Actuó en secreto.', 'Canceló su actuación.'], 0, 'Arrasar se usa coloquialmente para hablar de un éxito contundente.'),
        choice('¿Quién está al corriente de las novedades?', ['Quien evita hablar de ellas.', 'Quien las inventa.', 'Quien está informado sobre ellas.'], 2, '«Estar al corriente de» significa estar informado.'),
        choice('«Se presentó a varias audiciones y no se comió una rosca». ¿Qué significa?', ['Consiguió un papel pequeño.', 'No consiguió ningún resultado favorable.', 'Solo pudo cantar en un ensayo.'], 1, '«No comerse una rosca» expresa, coloquialmente, falta de éxito.'),
        gap('Completa con la preposición que falta. «Estoy al corriente ____ los cambios en el programa».', ['de'], 'La expresión habitual es «estar al corriente de» algo.')
      ]
    },
    repaso3: {
      introduction: 'Comprueba si puedes defender una idea, contar una trayectoria y leerla con pausas naturales.',
      blocks: section('Antes de corregir', '<p>Localiza la intención comunicativa, la relación entre las ideas y el punto temporal de referencia. En la pregunta de lectura, comprueba qué palabras forman un grupo.</p><p>Tras corregir, vuelve al bloque correspondiente si necesitas revisar una explicación.</p>'),
      exerciseTitle: 'Autoevaluación',
      questions: [
        gap('Completa en presente. «No me parece que una canción ____ (revelar) por sí sola el carácter de quien la escucha».', ['revele'], 'La opinión negada presenta esta proposición con subjuntivo.'),
        choice('¿Qué fórmula introduce un punto de vista ajeno?', ['En definitiva', 'En opinión del jurado', 'A mi modo de ver'], 1, 'La opinión se atribuye al jurado.'),
        choice('¿Qué respuesta expresa acuerdo parcial?', ['No lo veo así en absoluto.', 'Comparto plenamente tu opinión.', 'Coincido en lo del precio, aunque discrepo sobre el horario.'], 2, 'Acepta un aspecto y expresa desacuerdo con otro.'),
        gap('Marca la acción anterior. «Cuando anunciaron el concierto, el grupo ya ____ (firmar) el contrato».', ['había firmado'], 'La firma es anterior al anuncio, ambos situados en el pasado.'),
        gap('Presenta la acción como un hito fechado. «En junio de 2021 la compañía ____ (estrenar) su primera obra».', ['estrenó'], 'El indefinido sitúa el estreno completo en una fecha cerrada.'),
        choice('¿En qué frase la barra marca una pausa compatible con una lectura neutra?', ['Después del recital / la artista habló con el público.', 'Después del recital la / artista habló con el público.', 'Después del recital la artista habló con / el público.'], 0, 'La pausa tras «Después del recital» deja intactos el artículo con el nombre y la preposición con su término.'),
        choice('¿Qué expresión alude a destacar más allá del anonimato?', ['Estar al corriente', 'Dar el salto a la fama', 'Perder el compás'], 1, '«Dar el salto a la fama» indica que una persona pasa a ser muy conocida.'),
        choice('¿Qué frase cierra una argumentación con una propuesta?', ['Por ejemplo, el concierto del sábado.', 'Según el equipo técnico, faltan dos micrófonos.', 'En definitiva, propongo probar el nuevo horario durante un mes.'], 2, 'El conector señala el cierre y la frase formula una medida concreta.')
      ]
    }
  };

  const vocabulary = [
    ['Música', 'ritmo', 'Organización temporal de los sonidos.', 'El ritmo se aceleró al final de la pieza.'],
    ['Música', 'melodía', 'Sucesión de notas que se percibe como una unidad.', 'Todavía recuerdo la melodía del anuncio.'],
    ['Música', 'estribillo', 'Parte de una canción que se repite.', 'El público cantó el estribillo con la banda.'],
    ['Música', 'interpretar', 'Ejecutar una pieza musical con la voz o un instrumento.', 'El dúo interpretó una rumba en directo.'],
    ['Música', 'componer', 'Crear una obra musical.', 'Empezó a componer canciones a los doce años.'],
    ['Música', 'banda sonora', 'Música que acompaña una obra audiovisual o, en sentido figurado, un momento de la vida.', 'Esa canción es la banda sonora de mis veranos.'],
    ['Música', 'musicoterapia', 'Uso terapéutico de la música y sus elementos.', 'La entrevista aborda distintas formas de musicoterapia.'],
    ['Música', 'músico callejero', 'Artista que toca o canta en la vía pública.', 'Un músico callejero tocaba al salir del metro.'],
    ['Música', 'reclutar', 'Reunir o incorporar personas para un fin.', 'La asociación reclutó músicos para el desfile.'],
    ['Danza y bienestar', 'coreografía', 'Organización de los movimientos de una pieza de danza.', 'La coreografía termina con todo el grupo en círculo.'],
    ['Danza y bienestar', 'seguir el compás', 'Ajustarse a la pauta rítmica de una pieza.', 'Seguimos el compás con las palmas.'],
    ['Danza y bienestar', 'cadencia', 'Ritmo o sucesión regular de sonidos o movimientos.', 'La bailarina cambió la cadencia de sus pasos.'],
    ['Danza y bienestar', 'danzaterapia', 'Uso terapéutico de la danza y el movimiento expresivo.', 'El artículo presenta un taller de danzaterapia.'],
    ['Danza y bienestar', 'forma física', 'Condición corporal para realizar una actividad.', 'El entrenamiento ayuda a mantener la forma física.'],
    ['Danza y bienestar', 'bienestar', 'Estado en el que una persona se siente bien en el plano físico o mental.', 'El paseo forma parte de su rutina de bienestar.'],
    ['Danza y bienestar', 'autoestima', 'Valoración de uno mismo.', 'El reconocimiento de sus avances reforzó su autoestima.'],
    ['Danza y bienestar', 'tensión', 'Estado de presión física o emocional.', 'Salió a caminar para aliviar la tensión.'],
    ['Carácter y trayectoria', 'tesón', 'Firmeza y constancia para alcanzar un objetivo.', 'Con tesón, el grupo preparó la obra en pocos meses.'],
    ['Carácter y trayectoria', 'ahínco', 'Intensidad y empeño con que se hace algo.', 'Ensayaron con ahínco antes del estreno.'],
    ['Carácter y trayectoria', 'perseverancia', 'Constancia para continuar a pesar de las dificultades.', 'Su perseverancia le permitió terminar la formación.'],
    ['Carácter y trayectoria', 'terquedad', 'Tendencia a mantener una idea con obstinación.', 'Su terquedad complicó el acuerdo sobre el repertorio.'],
    ['Carácter y trayectoria', 'iniciativa', 'Capacidad de empezar una acción o proponer algo por cuenta propia.', 'Tuvo la iniciativa de organizar un concierto abierto.'],
    ['Carácter y trayectoria', 'introvertido', 'Que tiende a reservar su mundo interior.', 'Es introvertida y prefiere conversar en grupos pequeños.'],
    ['Carácter y trayectoria', 'renunciar a', 'Dejar algo voluntariamente o desistir de conseguirlo.', 'Renunció a varias actuaciones para terminar sus estudios.'],
    ['Carácter y trayectoria', 'consolidar una carrera', 'Dar estabilidad y reconocimiento a una trayectoria profesional.', 'La gira contribuyó a consolidar su carrera.'],
    ['Carácter y trayectoria', 'apodo', 'Nombre informal que se da a alguien en lugar de su nombre habitual.', 'El público lo conocía por su apodo.'],
    ['Carácter y trayectoria', 'dar el salto a la fama', 'Pasar a ser ampliamente conocido.', 'Dio el salto a la fama tras una actuación en televisión.'],
    ['Carácter y trayectoria', 'permanecer en el anonimato', 'Seguir sin darse a conocer públicamente.', 'La compositora prefirió permanecer en el anonimato.'],
    ['Expresiones coloquiales', 'estar de capa caída', 'Atravesar una etapa de pérdida de ánimo, prestigio o éxito.', 'Tras dos giras canceladas, la banda estaba de capa caída.'],
    ['Expresiones coloquiales', 'estar al corriente de', 'Estar informado sobre algo.', 'Estoy al corriente de los cambios de horario.'],
    ['Expresiones coloquiales', 'arrasar', 'Tener un éxito contundente.', 'La cantante arrasó en la final del concurso.'],
    ['Expresiones coloquiales', 'no comerse una rosca', 'No conseguir el éxito que se busca. Expresión coloquial.', 'Hizo tres audiciones y no se comió una rosca.'],
    ['Expresiones coloquiales', 'yogurín', 'Persona muy joven. Puede sonar afectuoso o despectivo según el contexto.', 'Sus compañeros lo llamaban yogurín por ser el menor del grupo.'],
    ['Expresiones coloquiales', 'listillo', 'Persona que presume de lista o intenta sacar ventaja. Suele ser despectivo.', 'Un listillo quiso colarse en la fila.'],
    ['Expresiones coloquiales', 'boca a boca', 'Difusión de información por recomendaciones personales.', 'El boca a boca llenó la sala el segundo día.'],
    ['Argumentación', 'a mi modo de ver', 'Fórmula que introduce una opinión propia.', 'A mi modo de ver, conviene ensayar con público.'],
    ['Argumentación', 'hasta cierto punto', 'Expresión que limita el alcance del acuerdo o de una afirmación.', 'Estoy de acuerdo hasta cierto punto.'],
    ['Argumentación', 'sin embargo', 'Conector que introduce un contraste.', 'La pieza era difícil. Sin embargo, la interpretaron con soltura.'],
    ['Argumentación', 'por consiguiente', 'Conector que presenta una consecuencia.', 'Se agotaron las entradas. Por consiguiente, ofrecieron otra fecha.'],
    ['Argumentación', 'en definitiva', 'Fórmula que introduce una conclusión o síntesis.', 'En definitiva, la sala necesita un horario más amplio.']
  ].map(([category, term, definition, example]) => ({category, term, definition, example}));

  for (const page of Object.values(pages)) {
    page.exerciseNote ??= 'Elige una opción o escribe la forma solicitada. Pulsa «Corregir respuestas» para ver la explicación.';
  }

  window.ISP10_UNITS = window.ISP10_UNITS || {};
  window.ISP10_UNITS[3] = {
    unit: {number: 3, title: 'Con ritmo', book: 'Nuevo Prisma B2', pages: '36–49'},
    lessons,
    pages,
    vocabulary
  };
})();
