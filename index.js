var puntos = [];

//Arreglo

console.log(`La cantidad de puntos son: ${puntos.length}`);

var fecha = new Date('2020-02-29 12:17:37');
for(var i = 0; i < puntos.length; i++) {
    let hour = (fecha.getHours() < 10) ? ('0' + fecha.getHours()) : fecha.getHours();
    let minutes = (fecha.getMinutes() < 10) ? ('0' + fecha.getMinutes()) : fecha.getMinutes();
    let seconds = (fecha.getSeconds() < 10) ? ('0' + fecha.getSeconds()) : fecha.getSeconds();
    persona = puntos[i].time = '<time>2020-02-29T' + hour + ':' + minutes + ':' + seconds + 'Z</time>';
    console.log(puntos[i].inicio);
    console.log(`<ele>${puntos[i].ele}</ele>`);
    console.log(puntos[i].time);
    console.log(puntos[i].fin);
    if(puntos[i].ele >= 2573) {        
        if(i > 0) {
            if(puntos[i].ele < puntos[i - 1].ele) {
                fecha.setSeconds(fecha.getSeconds() + 5);
            } else {
                fecha.setSeconds(fecha.getSeconds() + 15);
            }        
        } else {
            fecha.setSeconds(fecha.getSeconds() + 20);
        }        
    } else {        
        //fecha.setSeconds(fecha.getSeconds() + 10);  
        fecha.setSeconds(fecha.getSeconds() + 12);  
    }
    
}