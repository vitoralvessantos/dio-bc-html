function alterarTitulo(a) {
            var descricao = document.getElementById("descricao1");
            var titulomovie = document.getElementById("titulo");
            var cover = document.getElementById("cover");
            switch(a){
                case 'flash':
                cover.style.backgroundImage="url('../img/cover2bb.jpg')";
                cover.style.backgroundColor="linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,100%))"
                titulomovie.innerText = "The Flash";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'suits':
                
                titulo.innerText ="Suits";
                descricao.innerText = "Texto Alterado. Case Suits";
                break;

                case 'vikings':
               
                titulo.innerText ="Vikings";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'kkay':
             
                titulo.innerText ="Kobra Kay";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'sthings':
               
                titulo.innerText ="Stranger Thins";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'arrow':
               
                titulo.innerText ="Arrow";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'simpsons':
               
                titulo.innerText ="Os Simpsons";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'lost':
               
                titulo.innerText ="Lost";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'demolidor':
                
                titulo.innerText ="Demolidor";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;

                case 'b99':
                
                titulo.innerText ="Brooklin Nine Nine";
                descricao.innerText = "Texto Alterado. Case Flash";
                break;
                
                default:
                descricao.innerText = "Case Default";  
                break; 

            }
}
