function calcular(){

    tamales = document.getElementById("num_tamales").value;
    miembros = document.getElementById("num_miembros").value;
    
  
    if(isOdd(tamales) == 1){

        lider = (tamales/2)+0.5;
        restotamal = tamales-lider;    

        console.log(restotamal % (miembros - 1))

        do {
            if (restotamal % (miembros - 1) == 0) {
                restobanda = restotamal / (miembros - 1);
            } else {
                resto= restotamal % (miembros - 1);
                lider=lider+resto;
                restobanda=(restotamal-resto)/(miembros-1);
                restotamal=restotamal-resto;
              
            }
        } while (restotamal % (miembros - 1) !== 0);
    }
    else{
        lider = tamales/2
        restobanda = (tamales-lider)/(miembros-1)
    }

  /*    

    if(isOdd(tamales) == 1){

        lider = (tamales/2)+0.5
        restotamal = tamales-lider

        console.log(8 % 5)
        

        if(isOdd(restotamal) == 1)
        {
            if(restotamal%(miembros-1) == 0)
            {
                       restobanda = ((restotamal)/(miembros-1))

            }
            else
            {
                lider = lider+1
                restobanda = ((restotamal-1)/(miembros-1))
            }

            
        }
        else
        {
            restobanda = (restotamal)/(miembros-1)
        }
     
    }
    else{
        lider = tamales/2
        restobanda = (tamales-lider)/(miembros-1)
    }

    */

    alert('Tamales del lider : '+lider+'Tamales por cada miembro restante'+restobanda)


}

function isOdd(num) { return num % 2;}
