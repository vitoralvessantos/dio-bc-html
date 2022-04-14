function alterarTitulo(a) {
            var descricao = document.getElementById("descricao1");
            var titulomovie = document.getElementById("titulo");
            var cover = document.getElementById("cover");

            var imgName = "cover-" + a +".jpg";
            var urlImg = "url('/Projetos/InterfaceNetflix/img/" + imgName +"'";

            /*cover.style.background = 'linear-gradient(red, blue)';*/
            cover.style.backgroundPosition = "center";

            
            switch(a){
                case 'flash':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText = "The Flash";
                descricao.innerText = "Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.";
                break;

                case 'suits':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Suits";
                descricao.innerText = "Mike Ross (Patrick J. Adams) é um garoto que abandonou a faculdade de direito mas, brilhante como é, consegue uma entrevista com o respeitado Harvey Specter (Gabriel Macht), um dos melhores advogados de Manhattan. Quando percebe o talento nato e a memória fotográfica do garoto, Harvey o contrata e, juntos, eles formam uma dupla imbatível.";
                break;

                case 'vikings':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Vikings";
                descricao.innerText = "Vikings segue a vida de Ragnar Lothbrok (Travis Fimmel), o maior guerreiro da sua era. Lider de seu bando, com seus irmãos e sua família, ele ascende ao poder e torna-se Rei da tribo dos vikings. Além de guerreiro implacável, Ragnar segue as tradições nórdicas e é devoto dos deuses. As lendas contam que ele descende diretamente de Odin, o deus da guerra.";
                break;

                case 'ckai':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Cobra Kai";
                descricao.innerText = "Esta sequência de Karate Kid pega 30 anos depois dos eventos do All Valley Karate Tournament de 1984 e encontra Johnny Lawrence em busca de redenção reabrindo o infame dojo de karate Cobra Kai . Isso reacende sua antiga rivalidade com o bem-sucedido Daniel LaRusso, que vem trabalhado para manter o equilíbrio em sua vida sem o seu mentor Miyagi.";
                break;

                case 'sthings':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Stranger Thins";
                descricao.innerText = "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.";
                break;

                case 'arrow':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Arrow";
                descricao.innerText = "Inspirada nos quadrinhos do Arqueiro Verde, esta série acompanha as aventuras do playboy que se torna super-herói e luta contra vilões armado apenas com arco e flechas.";
                break;

                case 'simpsons':
                cover.style.backgroundImage = urlImg;    
                titulomovie.innerText ="Os Simpsons";
                descricao.innerText = "Os Simpsons moram na cidade de Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança em uma usina de energia nuclear, Marge tenta manter a paz em sua família, Bart é um travesso garoto de 10 anos, Lisa, de 8 anos, é a inteligente da família que adora tocar saxofone e é vegetariana e a pequena Maggie conquista todos enquanto não larga sua chupeta. ";
                break;

                case 'lost':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Lost";
                descricao.innerText = "Os sobreviventes de um voo que estava milhas fora do curso caem em uma ilha que abriga um sistema de segurança monstruoso, uma série de abrigos subterrâneos e um grupo de sobrevivencialistas violentos escondidos nas sombras.";
                break;

                case 'demolidor':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Demolidor";
                descricao.innerText = "Cego desde pequeno, Matt Murdock luta contra a injustiça durante o dia como advogado e à noite nas ruas de Hell’s Kitchen, Nova York.";
                break;

                case 'b99':
                cover.style.backgroundImage = urlImg;
                titulomovie.innerText ="Brooklin Nine Nine";
                descricao.innerText = "O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.";
                break;
                
                default:
                descricao.innerText = "Case Default";  
                break; 

            }
}
