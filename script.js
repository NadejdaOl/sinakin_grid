const product_container = document.querySelector('.box_best_deal')

const showProduct = (arrayOfProducts) => {
    arrayOfProducts.slice(1, 12).forEach((product) => {
        const{images, title, price, description} = product

        const productCard = document.createElement('div')
        productCard.classList.add('productDiv')

        const imageElement = document.createElement('img')
        imageElement.src = images[0]

        const titleElement = document.createElement('h3')
        titleElement.innerText = title

        const priceElement = document.createElement('p')
        priceElement.innerText = price

        const descriptionElement = document.createElement('p')
        description.innerText = description

        const button = document.createElement('button')
        button.innerText = 'Add to cart'

        productCard.append(imageElement, titleElement, priceElement, descriptionElement, button)
        product_container.append(productCard)
    });
}

const productData = (callback) => {
    fetch ('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => callback (data.products))
}

productData ((arrayOfProducts) => showProduct(arrayOfProducts))