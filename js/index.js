//                      FORM
const formDatos = document.querySelector('#formDatos');
const btnSend = document.querySelector('formSend');

formDatos.onsubmit = function (event) {
    event.preventDefault();
    
    
    document.querySelector('#formDatos').remove();

    let mostre = document.querySelector('.article')

    mostre.innerHTML += 
        `
        <div class="sucessSentClass">

            <h2 id="successfullySent">Dados enviados com sucesso!</h2>

        </div>
            

        `
};

//                        PRODUCTS



function creatingCatalog(data) {

    let forProducts = []

    const catalogProducts = data.products
    
    catalogProducts.forEach(function(product) {

        forProducts.push(

            `
        
            <div class="produto-single">

                <div class="productsLogo"> <img class="productsLogo" src='${product.image}'></div>

                <p class="nameProduct"> ${product.name} </p>
    
                <p class="descriptionProduct"> ${product.description} </p>
    
                <p class="oldPrice"> R$ ${product.oldPrice},90 </p>

                <p class="currentPrice"> R$ ${product.price},90</p>

                <p class="installments"> ou ${product.installments.count} x de R$ ${product.installments.value}</p>

                <button class="buttonProduct">Comprar</button>

            </div>
        `

        )

    })

    document.querySelector('.product').innerHTML = forProducts.join('')

}

const moreProducts = document.querySelector('.moreProducts')

let page = 1
    
moreProducts.addEventListener('click', function() {
    page++
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    console.log(url)
    
    fetch(url)
    .then(response => response.json())
    .then(data => creatingCatalog(data))
    .catch(e => console.log("Ocorreu um erro:" + e.message))
    
})



fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
.then(response => response.json())
.then(data => creatingCatalog(data))
.catch(e => console.log("Ocorreu um erro:" + e.message))



//                      FORM - FRIEND

const formFriend = document.querySelector('.formFriend')


formFriend.onsubmit = function(event) {
    event.preventDefault()


    document.querySelector('#formFriendId').remove()

    let mostre = document.querySelector('.productsList')

    mostre.innerHTML += 
    `
        
         <div> 

            <h1 class="friendSendSucess"> Muito obrigado! Dados cadastrados com sucesso! </h1>
            
        </div>

        `

}