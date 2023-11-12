// array propiedades en arriendo
const propiedades_alquiler = [
    {
        nombre: 'Hermosa casa en arriendo 1',
        src: './assets/imgs/arriendo1.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'Vitacura',
        habitaciones: 4,
        banos: 3,
        costo: 900000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Hermosa casa en arriendo 2',
        src: './assets/imgs/arriendo2.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'Las Condes',
        habitaciones: 3,
        banos: 2,
        costo: 1000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Hermosa casa en arriendo 3',
        src: './assets/imgs/arriendo3.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'Puerto Varas',
        habitaciones: 3,
        banos: 3,
        costo: 900000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Hermosa casa en arriendo 4',
        src: './assets/imgs/arriendo4.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'Concepción',
        habitaciones: 4,
        banos: 2,
        costo: 900000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Hermosa casa en arriendo 5',
        src: './assets/imgs/arriendo5.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'La Dehesa',
        habitaciones: 5,
        banos: 3,
        costo: 1100000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Hermosa casa en arriendo 6',
        src: './assets/imgs/arriendo6.png',
        descripcion: 'Se arrienda acogedora casa ubicada en una tranquila zona residencial',
        ubicacion: 'Viña del Mar',
        habitaciones: 4,
        banos: 3,
        costo: 1000000,
        smoke: true,
        pets: true
    }    
]

// array propiedades en venta
const propiedades_venta = [
    {
        nombre: 'Hermosa casa en venta 1',
        src: './assets/imgs/venta1.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'Las Condes',
        habitaciones: 5,
        banos: 3,
        costo: 600000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Hermosa casa en venta 2',
        src: './assets/imgs/venta2.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'Vitacura',
        habitaciones: 4,
        banos: 3,
        costo: 500000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Hermosa casa en venta 3',
        src: './assets/imgs/venta3.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'Chiloé',
        habitaciones: 6,
        banos: 5,
        costo: 800000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Hermosa casa en venta 4',
        src: './assets/imgs/venta4.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'La Dehesa',
        habitaciones: 4,
        banos: 3,
        costo: 600000000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Hermosa casa en venta 5',
        src: './assets/imgs/venta5.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'Viña del Mar',
        habitaciones: 5,
        banos: 3,
        costo: 400000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Hermosa casa en venta 6',
        src: './assets/imgs/venta6.png',
        descripcion: 'Se vende lujosa casa',
        ubicacion: 'Lo Barnechea',
        habitaciones: 4,
        banos: 3,
        costo: 600000000,
        smoke: false,
        pets: false
    } 
]

let saleCard = '';
let saleHTML = document.querySelector ('#id_sale')
let contarVta = 0;

for (let sale of propiedades_venta){

    let showSmoke = '';
    let showPets = '';
    
    if (sale.smoke)
        showSmoke = '<p class="text-success"><i class="fas fa-smoking"></i>Permitido fumar</p>';
    else
        showSmoke = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    if (sale.pets)
        showPets = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    else 
        showPets = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'

    saleCard+=`
    <div class="col-md-4 mb-4">
    <div class="card">
        <img src="${sale.src}" class="card-img-top" alt="imagen de la casa"/>
        <div class="card-body">
            <h5 class="card-title">
                ${sale.nombre}</h5>
            <p class="card-text">
                ${sale.descripcion}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${sale.ubicacion}</p>
            <p>
                <i class="fas fa-bed"></i> ${sale.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${sale.banos} Baños
            </p>
            <p>
                <i class="fas fa-dollar-sign"></i> ${sale.costo}</p>
                ${showSmoke}
                ${showPets}
        </div>
      </div>
    </div>
    `
    contarVta++

    if (contarVta >=3 && codPage == 0)
        break
}

if (saleHTML)
    saleHTML.innerHTML = saleCard;

let rentCard ='';
let rentHTML = document.querySelector('#id_rent')
let contarRent = 0;

for (let rent of propiedades_alquiler){

    let showSmoke ='';
    let showPets = '';

    if (rent.smoke)
        showSmoke = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    else 
        showSmoke = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

    if (rent.pets)
        showPets = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    else
        showPets = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'

    rentCard+=`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${rent.src}" class="card-img-top" alt="imagen de la casa"/>
      <div class="card-body">
        <h5 class="card-title">
          ${rent.nombre}</h5>
        <p class="card-text">
          ${rent.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${rent.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${rent.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${rent.banos} Baños
        </p>
        <p>
          <i class="fas fa-dollar-sign"></i> ${rent.costo}</p>
          ${showSmoke}
          ${showPets}  
      </div>
    </div>
    </div> 
    `

    contarRent++

    if (contarRent >=3 && codPage == 0)
        break
}

if (rentHTML)
    rentHTML.innerHTML = rentCard;





