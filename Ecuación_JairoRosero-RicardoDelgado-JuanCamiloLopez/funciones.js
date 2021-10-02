function calcular() {
    a1 = document.getElementById("a1").value;
    b1 = document.getElementById("b1").value;
    c1 = document.getElementById("c1").value;
    a2 = document.getElementById("a2").value;
    b2 = document.getElementById("b2").value;
    c2 = document.getElementById("c2").value;

    if (a1 && b1 && c1 && a2 && b2 && c2) {
        g = a1 * b2 - b1 * a2;
        if (g == 0) {
            Swal.fire('No hay solución de esta ecuación')
        } else {
            x = (c1 * b2 - b1 * c2) / g;
            y = (a1 * c2 - c1 * a2) / g;
            Swal.fire('Valor de X : ' + x.toFixed(3) + '\n' + 'Valor de Y: ' + y.toFixed(3))
        }

        /*

        SE realizo despejando X y  Y  despues remplazamos y ya

        puedes construir unas "funciones" que nos proporcionen directamente x e y:

        x = ( c e  -  b f )  /  ( a e  -  b d )                   y = ( a f  -  c d )  /  ( a e  -  b d )

        */
        
    }else{
       swal.fire({
            icon:'error',
            title:'Incompleto',
            text:'Por favor llene todos los campos'
       });
    }


}