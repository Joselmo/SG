// Clase principal

Mapa = function (width, height, widthSegments, heightSegments) {

    // Hereda de Object3D		
    THREE.Object3D.call(this);

    this.pause = false;


    this.cuerpo = new THREE.Object3D();
    this.objetos = new THREE.Object3D();
    this.objetos1 = new THREE.Object3D();

//    //this.todoObjetos = [this.objetos,this.objetos1];
//
//    this.todoObjetos = new Array(10);
//    this.todoObjetos.push(this.objetos);
//    this.todoObjetos.push(this.objetos1);

    this.mesh = null;

    

    var geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
    var material = new THREE.MeshBasicMaterial({color: 0x0000ff, side: THREE.DoubleSide});
    this.mesh = new THREE.Mesh(geometry, material);

    if (this.mesh != null) {

        this.cuerpo.add(this.mesh);
    }
    ////////////////////////////////////////
    ////	Carrusel 
    ////////////////////////////////////////
    this.carrusel = [];

    var inter0 = getInterpolator(this.objetos, 0000, 1);
    var inter1 = getInterpolator(this.objetos1, 3000, 2);
    var inter2 = null;
    var inter3 = null;
    var inter4 = null;
    var inter5 = null;
    var inter6 = null;
    var inter7 = null;
    var inter8 = null;
    var inter9 = null;

    inter0.start();
    inter1.start();

    /*      NO BORRARR!!!!!!!!!!!!NO BORRARR!!!!!!!!!!!!NO BORRARR!!!!!!!!!!!!NO BORRARR!!!!!!!!!!!!
     var posicionInicial = {respawn: 20};
     var posiscionFinal = {respawn: -20};
     var periodoRecorrido = 10;
     var objetos_aux = this.todoObjetos[0];
     this.interpoladorObstaculos = new TWEEN.Tween(posicionInicial).to(posiscionFinal, periodoRecorrido * 1000)
     .onUpdate(function () {
     objetos_aux.position.x = posicionInicial.respawn;
     
     NO BORRARR!!!!!!!!!!!!
     if (objetos_aux.position.x === posiscionFinal.respawn) {
     objetos_aux.remove(objetos_aux.children[0]);
     console.log('fin');
     }
     })
     .repeat(Infinity)
     .delay(0000)
     .easing(TWEEN.Easing.Linear.None) //velocidad linear
     //.onStart( function() {g.position.y= 10; } )
     .start();
     
     NO BORRARR!!!!!!!!!!!!
     var posicionInicial1 = {respawn: 20};
     var posiscionFinal1 = {respawn: -20};
     var periodoRecorrido1 = 10;
     var objetos_aux1 = this.todoObjetos[1];
     this.interpoladorObstaculos1 = new TWEEN.Tween(posicionInicial1).to(posiscionFinal1, periodoRecorrido1 * 1000)
     .onUpdate(function () {
     objetos_aux1.position.x = posicionInicial1.respawn;
     
     NO BORRARR!!!!!!!!!!!!
     if (objetos_aux1.position.x === posiscionFinal1.respawn) {
     objetos_aux1.remove(objetos_aux1.children[0]);
     console.log('fin1');
     }
     })
     .repeat(Infinity)
     .delay(2000)
     .easing(TWEEN.Easing.Linear.None) //velocidad linear
     //.onStart( function() {g.position.y= 10; } )
     .start();
     NO BORRARR!!!!!!!!!!!!NO BORRARR!!!!!!!!!!!!NO BORRARR!!!!!!!!!!!!
     */

    this.cuerpo.add(this.objetos);
    this.cuerpo.add(this.objetos1);
//    this.cuerpo.add(this.todoObjetos.pop());
//    this.cuerpo.add(this.todoObjetos.pop());
    this.add(this.cuerpo);
}; // Fin Mapa


Mapa.prototype = Object.create(THREE.Object3D.prototype);
Mapa.prototype.constructor = Mapa;


Mapa.prototype.pause = function () {

    if (this.pause) {
        this.interpolador.resume();
        this.interpoladorOrb.resume();
        this.interpoladorComOrb.resume();
        this.pause = false;
    } else {
        this.interpolador.pause();
        this.interpoladorOrb.pause();
        this.interpoladorComOrb.pause();
        this.pause = true;
    }
};

/*	Metodo: metodo
 *	Funcionamiento: da una breve descripción del objeto.
 */
Mapa.prototype.metodo = function () {

    console.log('Mapa cargado');
};

/*	Metodo: addSatelite
 *	Parametro: Mapa
 *	Funcionamiento: añade un objeto de tipo Mapa a la lista de satelites 
 *	pertenecientes a este objeto
 */
Mapa.prototype.addSatelite = function (sat, id) {

    console.log('Añado satelite');

    //  this.todoObjetos[id-1];
    if (id === 1)
        this.objetos.add(sat);
    else
        this.objetos1.add(sat);
};

var getInterpolator = function (objetos, retraso, id) {
    //

    //objetos_aux = objetos;
    if (id === 1) {
        objetos_aux1 = objetos;
        posicionInicial = {respawn: 20};
        posiscionFinal = {respawn: -20};
        periodoRecorrido = 10;

        return Object.create(new TWEEN.Tween(posicionInicial).to(posiscionFinal, periodoRecorrido * 1000)
                .onUpdate(function () {

                    objetos_aux1.position.x = posicionInicial.respawn;
                    if (objetos_aux1.position.x < -20) {
                        objetos_aux1.remove(objetos_aux1.children[0]);
                        console.log('fin');
                    }


                })
                .repeat(Infinity)
                .delay(retraso)
                .easing(TWEEN.Easing.Linear.None)); //velocidad linear

    } else {
        objetos_aux2 = objetos;
        posicionInicial1 = {respawn: 20};
        posiscionFinal1 = {respawn: -20};
        periodoRecorrido1 = 10;

        return Object.create(new TWEEN.Tween(posicionInicial1).to(posiscionFinal1, periodoRecorrido1 * 1000)
                .onUpdate(function () {

                    objetos_aux2.position.x = posicionInicial1.respawn;
                    if (objetos_aux2.position.x < -20) {
                        objetos_aux2.remove(objetos_aux2.children[0]);
                        console.log('fin');
                    }


                })
                .repeat(Infinity)
                .delay(retraso)
                .easing(TWEEN.Easing.Linear.None)); //velocidad linear
    }



    return null;

};


