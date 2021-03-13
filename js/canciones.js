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
				y la firmó sobre los rios<br/><br/>
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
				hermosos son los pues de los que anuncian paz.
				`;
				break;
		default:
				html+=`Letra de la Canción 5`;
				break;
}

box_music.innerHTML=html;
}
