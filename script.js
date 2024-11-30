let contador = 0

let res = document.getElementById("resultado");

function aumentar (){

	contador++
    res.innerHTML = `${contador}`

    document.getElementById ("resultado").style.color = "green"
   
	}

function diminuir (){

    contador--
    if(contador < 0){
        document.getElementById ("resultado").style.color = "red"
    }else {
    document.getElementById ("resultado").style.color = "black"}
    
    res.innerHTML = `${contador}`
    }   

function zerar(){
    document.getElementById ("resultado").style.color = "black"
    contador = 0;
    res.innerHTML = `${contador}`
}


