const urlJson = "lobinhos.json"
const section_mensage = document.querySelector(".section-list");

var currentIndex = 0;

function createCard(nomeLobo, idadeLobo, desLobo, imgLobo){
    //imagem
    let new_wolf = document.createElement("div");
    let img_div = document.createElement("div");
    let background_div = document.createElement("div");
    let wolf_fig = document.createElement("figure");
    let wolf_img = document.createElement("img");

    new_wolf.classList.add("new-wolf");
    img_div.classList.add("img-div");
    background_div.classList.add("background-div");
    wolf_fig.classList.add("wolf-fig");
    wolf_img.classList.add("wolf-img");


    // descrições
    let description_div = document.createElement("div");
    let name_wolf = document.createElement("h3");
    let wolf_age = document.createElement("p");
    let wolf_des = document.createElement("p");
    let btn_adot= document.createElement("button");


    description_div.classList.add("description-div");
    name_wolf.classList.add("name-wolf");
    wolf_age.classList.add("wolf-age");
    wolf_des.classList.add("wolf-des");
    btn_adot.classList.add("btn-adot");

    // adicionando os parametros
    wolf_img.src = imgLobo;
    btn_adot.innerHTML = "Adotar";
    btn_adot.setAttribute("href", "adotar-lobos.html");
    btn_adot.addEventListener("click", function(){ window.location.href = "adotar-lobos.html" })
    name_wolf.innerHTML = nomeLobo;
    wolf_age.innerHTML = (idadeLobo + " Anos");
    wolf_des.innerHTML = desLobo;

    wolf_fig.append(wolf_img);
    img_div.append(background_div);
    img_div.append(wolf_fig);
    description_div.append(btn_adot);
    description_div.append(name_wolf);
    description_div.append(wolf_age);
    description_div.append(wolf_des);
    new_wolf.append(img_div);
    new_wolf.append(description_div);

    section_mensage.append(new_wolf);
}

function getMensages(){

    section_mensage.innerHTML = "";

    const fetchConfig = {
        "method": "GET"
    }
    
    fetch(urlJson, fetchConfig)
        .then((resposta)=>{
            resposta.json()
                .then((resposta)=>{
                    resposta.slice(0, 4).map((mensage)=>{
                        createCard(mensage.nome, mensage.idade, mensage.descricao, mensage.imagem)
                    })
                })
                .catch((error)=>{
                    console.log("error 2")
                    console.log(error)
                })
        })
        .catch((error)=>{
            console.log("error 1")
            console.log(error)
        })
}

getMensages();