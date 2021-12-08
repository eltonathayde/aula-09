

function verificar(){
    let aviso = parseInt(prompt('Qual tabuada você deseja saber os resultados ? \n \n 1 - Entre 0 e 2 \n 2 - Entre 3  a 5 \n 3 - Entre 6 a 8 \n 4 - Entre 9 a 11 \n 5- Entre 12 a 14' ))
    console.log(aviso)

     if(aviso ==1){
         let resultado = document.getElementById('resultado')
         for(let numero = 1;numero <=2; numero=numero+1 ){
             for(let multiplica = 0; multiplica<=10;multiplica=multiplica+1){
                 let multiplicacao = numero * multiplica;
                 let linha = "" + numero + " * " + multiplica + "=" + multiplicacao + "<br>";
                   resultado.innerHTML += (linha);
             }
         }
     }else if(aviso == 2){
        let resultado = document.getElementById('resultado')
        for(let numero = 3;numero <=5; numero=numero+1 ){
            for(let multiplica = 0; multiplica<=10;multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + "=" + multiplicacao + "<br>";
                  resultado.innerHTML += (linha);
            }
        }
     } else if (aviso==3){
        let resultado = document.getElementById('resultado')
        for(let numero = 6;numero <=8; numero=numero+1 ){
            for(let multiplica = 0; multiplica<=10;multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + "=" + multiplicacao + "<br>";
                  resultado.innerHTML += (linha);
            }

        }
     } else if (aviso==4){
        let resultado = document.getElementById('resultado')
        for(let numero = 9;numero <=11; numero=numero+1 ){
            for(let multiplica = 0; multiplica<=10;multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + "=" + multiplicacao + "<br>";
                  resultado.innerHTML += (linha);
            }
        }
    }else if (aviso ==5){
        let resultado = document.getElementById('resultado')
        for(let numero = 12;numero <=14; numero=numero+1 ){
            for(let multiplica = 0; multiplica<=10;multiplica=multiplica+1){
                let multiplicacao = numero * multiplica;
                let linha = "" + numero + " * " + multiplica + "=" + multiplicacao + "<br>";
                  resultado.innerHTML += (linha);

            }
        }
    }
}