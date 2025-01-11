import generadorDeLoteria from './generador.js';
import datos from './datos/datos.js';
const premios = datos.pedirDatos();
class comprobadorDeLoteria{
    static comprobarNumeros(numeros){
        let premioTotal = 0;
        let cantidadDePremios = 0;
        for(let i = 0; i < numeros.length; i++){
            for(let j = 0; j <= 10; j++){
                if(numeros[i] === premios['loteria-navidad'][j].numero){
                    premioTotal += premios['loteria-navidad'][j].cantidad;
                    console.log(premios['loteria-navidad'][j].premio);
                    cantidadDePremios ++;
                    break;
                }
                    /*
                    Validación de 
                    Número anterior y posterior al 1.er premio: 2.000 euros
                    Número anterior y posterior al 2.º premio: 1.250 euros
                    Número anterior y posterior al 3.er premio: 960 euros
                    */
            }
            /*  
                Falta añadir
                Centenas del 1.º, 2.º, 3.er y 4.º premio: 100 euros
                Números que coinciden con las dos últimas cifras del 1.º, 2.º y 3.er premio: 100 euros
                Reintegro (números que terminan en la misma cifra que el primer premio): 20 euro
                Pedrea: 100 euros
            */
        }
        console.log('Han caído ' + cantidadDePremios + ' premios.');
        return premioTotal;
    }
}
for(let i = 0; i < 1 ; i ++){
    console.log(i)
    const numeros = generadorDeLoteria.generarNumeros(1000000, 1, 99999);
    console.log('Has ganado ' + comprobadorDeLoteria.comprobarNumeros(numeros) + '€');
    console.log('--------------------');
}
export default comprobadorDeLoteria;