let fruits = [
    {
        id: 1,
        title: 'Яблоки',
        price: 20,
        text: 'яблоки среднего размера, красные, спелые, сорт антоновка',
        img: 'https://proza.ru/pics/2018/10/03/1345.jpg'
    },
    {
        id: 2,
        title: 'Мандарины',
        price: 30,
        text: 'мандарины, производства Израиль, среднего размера, легко отчищающиеся от кожуры, без листьев',
        img: 'https://foodcity.ru/storage/products/October2018/XDN89hC298SEmtKbJT1V.jpg'
    },
    {
        id: 3,
        title: 'Бананы',
        price: 40,
        text: 'бананы крупные, оптимальной спелости, гроздьями по 10 штук',
        img: 'https://i-fakt.ru/wp-content/uploads/2013/09/fakty-banan.jpg'
    },
]


const toHTML = fruit => `
        <div class="col">
            <div class="card">
                <img src="${fruit.img}"
                     class="card-img-top"
                     style="height: 300px; width: 300px;"
                     alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Описание</a>
                    <a href="#" class="btn btn-danger" data-btn="delete" data-id="${fruit.id}">Удалить</a>
                </div>
            </div>
        </div>
        `

function render() {
    // const html = fruits.map(toHTML).join('')
    const html = fruits.map(fruit => toHTML(fruit)).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Закрыть', type: 'primary', handler() {
                priceModal.close()
            }
        }
    ]
})

document.addEventListener("click", ev => {
    ev.preventDefault()
    const btnType = ev.target.dataset.btn
    const id = +ev.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
    
    if (btnType == 'price') {
        priceModal.setContent(`
            <p>Цена на ${fruit.title}:
                <strong>$${fruit.price.toFixed(2)}</strong>
            </p>`)
        priceModal.open()
    } else if (btnType == 'delete') {
        $.confirm({
            title: `Подтвердите`,
            content: `<p>Вы уверены что хотите удалить <strong>${fruit.title}?</strong></p>`
        })
            .then(()=>{
                fruits = fruits.filter(f => f.id !== id)
                render()
            })
            .catch(()=>{
                //
            })
    }
})


