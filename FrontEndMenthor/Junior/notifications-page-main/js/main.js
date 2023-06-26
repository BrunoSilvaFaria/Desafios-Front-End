const json = "./js/data.json";
const xmlhttp = new XMLHttpRequest();
// const card = document.querySelector('card');
// const card__conteiner = document.querySelector('.card__conteiner');
// const notification = document.querySelector('.notification');

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const myObj = JSON.parse(this.responseText);
        for (let i = 0; i < myObj.length; i++) {
            // pegando elementos criados
            const pai = document.querySelector('.cards');
            // Criando elementos
            const div = document.createElement('div');
            const img = document.createElement('img');
            const span = document.createElement('span');
            // Add elementos
            pai.appendChild(div);
            div.classList.add('card-js');
            //   === Criando a estrutura padrão ===
            div.innerHTML = `
            <article class="card__conteiner">
                <div class="card__post">
                    <div class="card ">
                    <img src="${myObj[i].img}" alt="Foto de avatar" class="img">
                        <div>
                            <div>
                                <div class="notify">
                                    <span class="name">
                                        ${myObj[i].name}
                                    </span>
                                    <span class="notification">
                                        ${myObj[i].notification}
                                    </span>
                                    <span class="icon-check"></span>
                                    </div>
                                    <span class="time">
                                    <span class="time__count">${myObj[i].time}</span> 
                                    ago
                                    </span>
                                </div>
                                <div class="mesage alinhamento">
                                    <p class="mesage__text alinhamento">${myObj[i].mensage}</p>
                                </div>
                            </div> 
                        </div>
                        <img src="${myObj[i].coment}" alt="Foto de postagem" class="card__post-coment post">
                    </div>
                </article> 
            `
        }

        // === Verifica quantas notificações foram lidas e exibe no navegador ===
        function showCount() {
            const countNum = myObj.filter(function (item) {
            if (item.read === false) {
                return true;
            } else {
                return false;
            }
        });

            document.querySelector('.count').innerHTML = countNum.length;
        }

        showCount();

        for (let i = 0; i < myObj.length; i++) {
            // Pegando elementos:
            const notification = document.querySelectorAll('.notification');
            const cardConteiner = document.querySelectorAll('.card__conteiner');
            const iconCheck = document.querySelectorAll('.icon-check');
            const mensagem = document.querySelectorAll('.mesage');
            const post = document.querySelectorAll('.post');
            const mark = document.querySelector('.mark');
            const cardPost = document.querySelectorAll('.card__post');
            

            // Criando elementos:
            span = document.createElement('span');

            // === Marcando TODOS como lido ==
            mark.addEventListener('click', () => {
                myObj[i].read = true;
                read();
                showCount();
            })

            //  Verificando se é clube
            if (myObj[i].group !== '') {
                notification[i].appendChild(span);
                span.classList.add('group');
                span.innerHTML = myObj[i].group;
            }
            
            //  Verificando se é content
            if (myObj[i].content !== '') {
                notification[i].appendChild(span);
                span.classList.add('content');
                span.innerHTML = myObj[i].content;
            } 

            //  Verificando se é mensagem privada
            if (myObj[i].mensage !== '') {
                mensagem[i].style.display = 'block';
            } else {
                mensagem[i].style.display = 'none';
            }

            //  Verificando se é postagem
            if (myObj[i].coment !== '') {
                post[i].style.display = 'block';
                cardPost[i].classList.add('card__post-size');
            } else {
                post[i].style.display = 'none';
                cardPost[i].classList.remove('card__post-size');
            }
            //  Verificando se a notificação foi lida
            function read() {
                if (!myObj[i].read) {
                    cardConteiner[i].classList.add('card__conteiner--unread');
                    iconCheck[i].style.display = 'inline-block';
                } else {
                    cardConteiner[i].classList.remove('card__conteiner--unread');
                    iconCheck[i].style.display = 'none';
                }
            }

            read();
        }
    }
};
xmlhttp.open("GET", json, true);
xmlhttp.send(); 

        // <article class="card__conteiner card__conteiner--unread">
        //     <div class="card__img">
        //         <div class="card ">
        //         <img src="${myObj.img}" alt="Foto de avatar" class="img">
        //         <div>
        //             <div class="notify">
        //             <span class="name">
        //                 ${myObj.img}
        //             </span>
        //             <span class="notification">
        //                 ${myObj.name}
        //             </span>
        //             <span class="icon-check"></span>
        //             </div>
        //             <span class="time">
        //             <p class="time__count">${myObj.notification}</p> ago
        //             </span>
        //         </div>
        //         </div>
        //         <img src="./assets/images/image-chess.webp" alt="" class="card__img-coment">
        //     </div>
        // </article>

