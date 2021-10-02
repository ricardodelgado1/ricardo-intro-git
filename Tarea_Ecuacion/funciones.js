function calcular()
{
    a1 = document.getElementById("a1").value;
    b1 = document.getElementById("b1").value;
    c1 = document.getElementById("c1").value;
    a2 = document.getElementById("a2").value;
    b2 = document.getElementById("b2").value;
    c2 = document.getElementById("c2").value;  


    g=a1*b2-b1*a2;

    x=(c1*b2-b1*c2)/g;y=(a1*c2-c1*a2)/g;

    alert("valor de x :"+x+"  valor de y : "+y);

    /*

    SE realizo despejando X y  Y  despues remplazamos y ya

    puedes construir unas "funciones" que nos proporcionen directamente x e y:

    x = ( c e  -  b f )  /  ( a e  -  b d )                   y = ( a f  -  c d )  /  ( a e  -  b d )

    */


}