const enlace01= document.getElementById('box1');
const enlace02= document.getElementById('box2');
const enlace03= document.getElementById('box3');
const enlace04= document.getElementById('box4');
const enlace05= document.getElementById('box5');
const enlace06= document.getElementById('box6');
const enlace07= document.getElementById('box7');
const enlace08= document.getElementById('box8');
const enlace09= document.getElementById('box9');
const enlace010= document.getElementById('box10');
const box_music=document.getElementById('box_music');
const title_music=document.getElementById('title_music');

enlace01.addEventListener('click', function(){
    cambiarCancion(1);
    cambiarTituloDeCancion("Tu Rostro en la eternidad");
})
enlace02.addEventListener('click', function(){
    cambiarCancion(2);
    cambiarTituloDeCancion("Si yo creo en Dios");
})
enlace03.addEventListener('click', function(){
    cambiarCancion(3);
    cambiarTituloDeCancion("Salmo 24");
})
enlace04.addEventListener('click', function(){
    cambiarCancion(4);
    cambiarTituloDeCancion("Se mi luz");
})
enlace05.addEventListener('click', function(){
    cambiarCancion(5);
    cambiarTituloDeCancion("Romanos 10");
})
enlace06.addEventListener('click', function(){
    cambiarCancion(6);
    cambiarTituloDeCancion("El lo hará");
})
enlace07.addEventListener('click', function(){
    cambiarCancion(7);
    cambiarTituloDeCancion("No existe");
})
enlace08.addEventListener('click', function(){
    cambiarCancion(8);
    cambiarTituloDeCancion("A la puerta está");
})
enlace09.addEventListener('click', function(){
    cambiarCancion(9);
    cambiarTituloDeCancion("Nueva etapa");
})
enlace010.addEventListener('click', function(){
    cambiarCancion(10);
    cambiarTituloDeCancion("El amor es sin final");
})
// ===========	 Declarar funciones 	=======================
// ===========	 Función para cambiar el titulo 	=======================
/* Recibe como parametro el titulo a colocar */
function cambiarTituloDeCancion(titulo){
    title_music.innerText = titulo
}
function cambiarCancion (numero){

    let html='';

switch (numero) {
		case 1:
				html+=`Yo no conocia de Dios, no sabia de su amor<br/>
				que Jesús se habia entregado para darme salvación.<br/>
				Fue un tiempo sin consuelo, dias que no hallé la paz.<br/>
				era mi vida un desastre, no habia en quien confiar.<br/><br/>
				Entonces, me enconontraste tu y comprendí lo que es amar<br/>
				ahora tengo la esperanza de mirar tu Rostro en la eternidad.<br/><br/>
				Es que siempre me buscaste aunque yo te ignoré<br/>
				por tu gran misericordia no llegué a perecer.<br/><br/>
				//Entonces, me enconontraste tu y comprendí lo que es amar<br/>
				ahora tengo la esperanza de mirar tu Rostro en la eternidad.//<br/>`;
				break;
		case 2:
				html+=`Si yo creo en Dios una frase tan común el día de hoy<br/>
				más sus vidas no reflejan su amor, han perdido la humildad y el temor<br/>
				Si yo creo en Dios en el templo me reuno a darle loor<br/>
				más saliendo de la puerta sin explicación.<br/>
				No hay diferencia entre el mundo y yo.<br/><br/>
				Si yo creo en Dios mientras que a mi vida no venga la tempestad<br/>
				mientras siga oculto en la comodidad de mi hogar<br/>
				mientras que el mundo se pierde y yo sin hablar de su salvación.<br/><br/>
				Si yo creo en Dios pero aún sigo durmiendo en su labor<br/>
				su palabra se enpolva en algún rincón y mi corazón frio ya no escucha su voz.`;
				break;
		case 3:
				html+=`De Jehova es la tierra y su plenitud<br/>
				el mundo y los que en Él habitan<br/>
				Porque Él la fundó sobre los mares<br/>
				y la afirmó sobre los rios<br/><br/>
				//¿Quién subirá al monte de Jehova?<br/>
				¿Y quién a su lugar santo?//<br/>
				//El limpio de manos y de corazón<br/>
				que no ha hecho cosas vanas//<br/>
				Él entrará.<br/><br/>
				Tal es la generación de quién te busca<br/>
				de quien busca tu Rostro oh Dios<br/>
				El recibirá bendición de Jehova<br/>
				y justicia del Dios de salvación<br/>`;
				break;
		case 4:
				html+=`Se mi luz cuando no pueda ver<br/>
				se mi corazón si no hay nada en el<br/>
				se el consuelo si llego a caer.<br/>
				Se la paz que llenará mi ser<br/>
				se el motivo por el que viviré<br/>
				se el camino cuando perdido esté. <br/>
				<br/>
				Porque sin Dios mis ojos solo verian oscuridad<br/>
				no sabria realmente lo que es amar<br/>
				si cayere no podria volverme a levantar<br/>
				Porque sin Dios no tendria fuerzas para continuar<br/>
				todo en esta vida se me haria igual<br/>
				sin Dios en el camino no podria encontrar. <br/>
				<br/>
				Se mi luz cuando no pueda ver<br/>
				se mi corazón si no hay nada en el<br/>
				se el consuelo si llego a caer.<br/>
				Se la paz que llenará mi ser<br/>
				se el motivo por el que viviré<br/>
				se el camino cuando perdido esté.<br/>`;
				break;
		case 5:
				html+=`¿Cómo invocarán a quien no han creído?<br/>
				¿Cómo creerán de quien no han oído?<br/>
				¿Y cómo oirán si no hay quien les predicare?<br/>
				Hermosos son los pies de los que anuncian paz.<br/><br/>
				¿Quién dirá?<br/>
				El reino de los cielos se ha acerado,<br/>
				si Dios no ha regresado es porque está esperando<br/>
				que vengas a ÉL.<br/><br/>
				¿Quién está dispuesto a servir?<br/>
				¿Quién dirá Señor heme aquí?<br/>
				¿Quién de entre nosotros llevará las buenas nuevas?<br/>
				hermosos son los pues de los que anuncian paz.`;
				break;
		case 6:
				html+=`Te alabaré oh Señor con tada mi razón<br/>
				yo contaré Señor tus maravillas, yo contaré<br/>
				yo tus maravillas siempre hablaré<br/>
				todas tus maravillas yo contaré, yo contaré<br/>
				por amor a ti Señor.<br/><br/>
				Aunque el malo me proponga, aunque el malo me persiga<br/>
				Señor tu nombre conservaré, yo tu voluntad haré.<br/><br/>
				Me alegraré oh Señor, me regocijo en ti<br/>
				yo cantaré Señor tus bendiciones, yo cantaré<br/>
				todas tus bendiciones yo hablaré<br/>
				todas tus bendiciones yo mostraré, yo mostraré<br/>
				por amor a ti lo haré<br/><br/>
				De su gran justicia yo hablaré<br/>
				toda su gran justicia nos mostrará<br/>
				te juzgará con justicia el Señor lo hará<br/>
				con toda rectitud el hará<br/>
				El Señor asi lo hará.<br/><br/>
				Aunque el malo me proponga, aunque el malo me persiga<br/>
				El Señor siempre, me cuidará, la victoria me dará<br/>
				El gran Señor, el lo hará.`;
				break;
		case 7:
				html+=`No existe en la vida tanto amor<br/>
				comparable amigo con el de Jesús<br/>
				No existe en la vida un amigo eterno<br/>
				un amigo puro como mi Señor.<br/><br/>
				Jesucristo ofrece vida y plenitud<br/>
				con favor de nuestra pobre aflicción<br/>
				y no hay esperanza despues de la vida<br/>
				despues de la vida si no tienes a Dios.<br/><br/>
				Señor (Señor) entra en mi vida<br/>
				Señor (Señor) entra en mi ser<br/>
				Señor (Jesús) entra en mi tiempo<br/>
				amoroso Cristo de ti quiero ser.<br/><br/>
				No existe poder más piadoso y Santo<br/>
				que aquel mostrado por mi gran Señor<br/>
				nada tiene brillo cómo el de su Rostro<br/>
				nada tiene brillo de su esplendor.<br/><br/>
				Ven amigo al Cristo nuestro redentor<br/>
				hoy ha llamado ven atiende hoy<br/>
				levanta tu mano a favor de tu alma<br/>
				busca hoy a Cristo el tiene el poder.<br/>`;
				break;
		case 8:
				html+=`Mirando hacia el cielo estás y no te puedes explicar<br/>
				la maravilla del Señor, de que un día te hará volar<br/>
				las señales ya se ven, las profesias cumpliendose están<br/>
				porque muy pronto volverá, Jesucristo a la puerta ya está.<br/><br/>
				Más aun vives aquí en este mundo de maldad<br/>
				y mientras estés aquí la salvación debes de anunciar<br/>
				cristiano levantate, en el nombre del Señor esfuerzate<br/>
				ya no mires tu aflicción tu confianza sea en el Señor<br/>
				cristiano levantate aunque el maligno te aceche, esfuerzate<br/>
				haciendo el bien vencerás el mal y al final Cristo la victoria te dará<br/><br/>
				La esperanza es Jesús y lo esperas con gran fe<br/>
				que con gran gloria y poder verás a Cristo descender.`;
				break;
		case 9:
				html+=`¿Cómo no estar agradecida con el Señor Dios<br/>
		  	de los cielos por todo lo que tienes?<br/>
				hoy por su gracia recibes bendición<br/>
				quinceaños te brindó, cómo no agradecer.<br/><br/>
				Porque una nueva etapa hoy comienzas en tu vida<br/>
				se una ofrenda para Dios<br/>
				En esta nueva etapa tu fe mantenla firme<br/>
				jamás te alejes del Señor<br/>
				¡Quinceañera felicidades!<br/><br/>
				Hoy tus padres le dan gracias al Creador por haber<br/>
				cuidado de ti, de la infancia hasta el dia de hoy<br/>`;
				break;
		case 10:
				html+=`Un día llegué a este lugar donde se predica la palabra de Dios<br/>
				Él tocó mi corazón y enseguida acepté a Jesús como mi Salvador<br/>
				Fue entonces ahí donde te conocí y nunca pensé que fueras hacer tú<br/>
				la que Dios pusiera en mi camino para estar delante de Él en el altar.<br/><br/>
				La boda celebrando hoy bajo la voluntad del Señor<br/>
				Dios nos unió para amarnos construir una vida<br/>
				juntos sirviendole de todo corazón<br/>
				el amor es sin final soplarán tempestades las pruebas vendrán<br/>
				nuestra llama de amor ni las muchas aguas podrán apagar<br/>
				El amor es sin final.<br/><br/>
				Disfrutamos en Cristo de nuestra juventud<br/>
				honramos nuestros padres obedientes a Jesús<br/>
				y con gratitud hoy venimos delante de Él en el altar.`;
				break;
		default:
				html+=`Letra de la Canción 5`;
				break;
}
box_music.innerHTML=html;
}
