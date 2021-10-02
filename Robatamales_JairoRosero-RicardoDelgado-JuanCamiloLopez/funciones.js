function calcular() {
    
    tamales = document.getElementById("num_tamales").value;
    miembros = document.getElementById("num_miembros").value;

    if (tamales && miembros) {

        
        if (tamales>=0 && tamales<=1000000) {
            
            if ((miembros>=2 && miembros<=100)) {
                               
                if (isOdd(tamales) == 1) {

                    lider = (tamales / 2) + 0.5;
                    restotamal = tamales - lider;

                    do {
                        if (restotamal % (miembros - 1) == 0) {
                            restobanda = restotamal / (miembros - 1);
                        } else {
                            resto = restotamal % (miembros - 1)
                            lider = lider + resto;
                            restobanda = (restotamal - resto) / (miembros - 1);
                            restotamal = restotamal - resto;

                        }
                    } while (restotamal % (miembros - 1) !== 0);

                } else {
                    
                    lider = tamales / 2;
                    restotamal=tamales-lider;

                    //restobanda = (tamales - lider) / (miembros - 1)
                    do {
                        if (restotamal % (miembros - 1) == 0) {
                            restobanda = restotamal / (miembros - 1);
                        } else {
                            resto = restotamal % (miembros - 1)
                            lider = lider + resto;
                            restobanda = (restotamal - resto) / (miembros - 1);
                            restotamal = restotamal - resto;

                        }
                    } while (restotamal % (miembros - 1) !== 0);
                }

                //alert('Tamales del lider : ' + lider + 'Tamales por cada miembro restante' + restobanda)
                restomiembros=miembros-1;
                Swal.fire({
                    title: 'Repartición',
                    text: ('El Lider tomara '+ lider+  ' tamales, mientras que los otros '+restomiembros+ ' miembros de la banda tomaran de a '+restobanda+' tamales'),
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })
            }else{
                Swal.fire({
                    title:'Error de calculos',
                    text:('debe haber entre 2 y 100 miembros en la banda')
                })
            }
        
        }else{
            Swal.fire({
                title:'Error de calculos',
                text:('Los tamales deben estar entre 0 y un 1 millón')
            })
        }
    }else{
        Swal.fire({
            title:'Por favor digite los numeros',
            text:('para poder realizar el calculo ')
        })
    }
}

function isOdd(num) { return num % 2;}