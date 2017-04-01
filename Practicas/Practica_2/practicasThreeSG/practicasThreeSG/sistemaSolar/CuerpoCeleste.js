// Clase principal

CuerpoCeleste = function(radio, textura, nombre,  periodoRotacion,  sentidoRotacion,
     periodoOrbita,  sentidoOrbita, radioOrbita){
			
	// Hereda de Object3D		
	THREE.Object3D.call (this);		
	// Las variables   var   son variables  locales  al constructor. No son accesibles desde los métodos prototipo.
   console.log ('HOLAA!');
	var cargadorTextura = new THREE.TextureLoader();
	
	this.texturaCargada = cargadorTextura.load (textura);
	

	this.elCuerpoCeleste = new THREE.Mesh (
        new THREE.SphereGeometry (radio),
        new THREE.MeshLambertMaterial ({
          color: 0x0f0f0f,
		  emissive: 0x0f0f0f,
          map: this.texturaCargada
        })
    );
	
	var rotacionInicial = { angulo : 0 };
	var rotacionFinal = { angulo : 2 * Math.PI };
	
	///////////////////////////////////////////
	//	Rotación del Cuerpo Celeste
	///////////////////////////////////////////

	// Alamacenamos en la variable local   CuerpoCeleste   una referencia  al atributo this.elCuerpoCeleste
	
	
	var cuerpoCeleste = this.elCuerpoCeleste;
	this.interpolador = new TWEEN.Tween(rotacionInicial).to(rotacionFinal, periodoRotacion*1000)
    .onUpdate (function(){
      // Dentro de esta función podemos acceder a  this.elCuerpoCeleste  
	  // gracias a la referencia que hemos almacenado previamente en CuerpoCeleste
      cuerpoCeleste.rotation.y = rotacionInicial.angulo * sentidoRotacion;
    })
    .repeat (Infinity)
    .start();
  
  
	///////////////////////////////////////////
	//	Translación del CuerpoCeleste
	///////////////////////////////////////////
	this.elCuerpoCeleste.position.x=radioOrbita;
	
	
	///////////////////////////////////////////
	//	Orbita del CuerpoCeleste
	///////////////////////////////////////////
	var rotacionInicialOrb = { angulo : 0 };
	var rotacionFinalOrb = { angulo : 2 * Math.PI };
	var orbita = new THREE.Object3D();//create an empty container
	var interpoladorOrb = new TWEEN.Tween(rotacionInicialOrb).to(rotacionFinalOrb, periodoOrbita*1000)
    .onUpdate (function(){
      // Dentro de esta función podemos acceder a  this.elCuerpoCeleste  
	  // gracias a la referencia que hemos almacenado previamente en CuerpoCeleste
      orbita.rotation.y = rotacionInicialOrb.angulo * sentidoOrbita;
    })
    .repeat (Infinity)
    .start();
	
	orbita.add(this.elCuerpoCeleste);
	
	
	
	this.add (orbita);	
	
	
}



// La clase  Astro  hereda los métodos de su superclase, en este caso la clase  Object3D  de la biblioteca  THREE
CuerpoCeleste.prototype = Object.create (THREE.Object3D.prototype);

// Indicamos cuál es su constructor
CuerpoCeleste.prototype.constructor = CuerpoCeleste;

  // Ahora se añaden los nuevos métodos públicos de la clase. Se añaden como prototipos.

CuerpoCeleste.prototype.startStop = function (onOff) {
  if (onOff) {
    // Recordar. Para acceder a los atributos de la clase hay que usar obligatoriamente la notación this.variable
    this.interpolador.resume();
  } else {
    this.interpolador.pause();
  }
}

// Este método se incluye para explicar como se redefinen métodos y como se haría una llamada al método equivalente de la superclase.
// Se explicará en la clase  Estrella  que hereda de  Astro.
CuerpoCeleste.prototype.metodo = function () {
  console.log ('Soy un CuerpoCeleste');
}