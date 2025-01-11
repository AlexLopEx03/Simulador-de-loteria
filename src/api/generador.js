class generadorDeLoteria{
    static generarNumeros(cantidad, minimo, maximo){
        const numeros = []
        for(let i = 0; i < cantidad; i ++){
            const numeroAleatorio = (Math.floor(Math.random() * maximo) + minimo);
            numeros.push(('00000' + numeroAleatorio).slice(-5));
        }
        return numeros;
    }
}
export default generadorDeLoteria;