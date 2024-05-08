//Ejercicio par/impar
//Brandon Medina

import * as rls from 'readline-sync';
let numero_ingresado : number = rls.questionInt("Ingrese un numero: ");
    if(numero_ingresado == 0){
        console.log('El numero ingresado es "CERO" ----> ' + numero_ingresado );
    
    }else if(numero_ingresado % 2 == 0){
        console.log('El numero ingresado es "PAR" ----> ' + numero_ingresado);
    
    }else{
        console.log('El numero ingresado es "IMPAR" ----> ' + numero_ingresado);
    }