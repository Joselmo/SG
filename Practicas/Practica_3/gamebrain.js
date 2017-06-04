/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

GameBrain = function (width, height) {

    this.EEASY = 2.5;
    this.EASY = 2;
    this.NORMAL = 1.7;
    this.HARD = 1.5;
    this.HARDCORE = 1.2;

    this.dificultad = this.EEASY;
    this.contador_obs = 0;
    // this.puntuacion = 0;
    this.max_height = height;
    this.max_width = width;

};

GameBrain.prototype = Object.create();
GameBrain.prototype.constructor = GameBrain;


/**
 * Obtiene los obstaculos superiores e inferiores
 */
GameBrain.prototype.getObstaculo() {
var tope_obs = this.max_height - this.dificultad;
        var x = Math.floor(Math.random() * (tope_obs - 1)) + 1;
        var y = tope_obs - x;
        var obs_inf = new Obstaculo(this.max_width, x, 1, 1, 5);
        var obs_sup = new Obstaculo(this.max_width, y, 1, 1, 5);
        var obstaculos = new Array();
        obstaculos.push(obs_inf);
        obstaculos.push(obs_sup);
        this.contador_obs++;
        return obstaculos;
}

GameBrain.prototype.getScore() {
return this.contador_obs / 2;
};
//Propiedades


        GameBrain.prototype.setWidth(w) {
this.max_width = w;
};
        GameBrain.prototype.setMaxHeight(size) {
max_height = size;
};


