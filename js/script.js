var x = "";
var y = "";
var conta = 0;
var pares = 0;
var impares = 0;
var pos = 0;
var neg = 0;
var arr = [];
do {
    a = parseInt(prompt("Ingrese un número por el teclado", 0));
    conta += a;
    arr.push(a);
    if(a % 2 == 0){
        pares ++;
    }if(a %2 != 0){
        impares ++;
    }

    if(a > 0){
        pos ++;
    }
    if(a < 0){
        neg ++;
    }


    b = prompt("Desea ingresar más valore si o no?",);

    
}while(b != "no")

alert("Suma de todos los numeros pares e impares " +conta);
alert("Cantidad de numeros pares ingresados " +pares);
alert("Cantidad de numeros impares ingresados "+ impares );
alert("Cantidad de numeros positivos ingresados "+ pos);
alert("Cantidad de numeros negativos ingresados " + neg);
alert("Media de todos los numeros "+ cont / arr.length);


