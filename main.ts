let numero: number = 5;
let nombre: string = 'Juan';

let nombres: string[] = [];
let nombres2: Array<string> = [];

nombres = ['Pedro', 'Maria', 'Jose'];
nombres.unshift('Rebeca');
nombres.push('Luis');
console.log(nombres);

nombres.pop();
console.log(nombres);

nombres.shift();
console.log(nombres);

console.log(nombres[0]);

console.log(nombres.length);
nombres.splice(1, 1);

console.log(nombres);

nombres[1] = 'saul';

console.log(nombres);

nombres.splice(1, 0, 'raul');

console.log(nombres);

const mascotas: string[] = ['Perro', 'Gato', 'Tortuga', 'Gallina', 'Gallina'];
mascotas.push('Caballo');
console.log('Iteracion old school');
for (let index = 0; index < mascotas.length; index++) {
    console.log(mascotas[index]);
}

console.log('Iteracion for of');
for (let mascota of mascotas) {
    console.log(mascota);
}

console.log('Iteracion for each')
mascotas.forEach(function (mascota: string, index: number, array: string[]) {
    console.log(mascota, index, array);
});

console.log('Iteracion for each con funcion de flecha')
mascotas.forEach((mascota: string, index: number, array: string[]) => {
    console.log(mascota, index, array);
});

let mascotasFiltradas = mascotas.filter((mascota: string) => mascota === 'Gallina');
console.log(mascotasFiltradas);

type Direccion = {
    codigoPostal: number;
    ciudad: string;
}

type Producto = {
    id: number;
    nombre: string;
    precio: number;
    direccion: Direccion;
};

let productos: Producto[] = [];

let producto: Producto = {
    id: 1,
    nombre: 'Cell',
    precio: 99,
    direccion: {
        codigoPostal: 22855,
        ciudad: 'Ensenada'
    }
};
productos.push(producto);

productos.push({
    id: 2,
    nombre: 'Sofa',
    precio: 150,
    direccion: {
        codigoPostal: 22856,
        ciudad: 'Rosarito'
    }
});

productos.push({
    id: 3,
    nombre: 'Mesa',
    precio: 150,
    direccion: {
        codigoPostal: 22855,
        ciudad: 'Ensenada'
    }
});

//El filter regresa un nuevo arreglo, no modifica el existente
let productosCaros: Producto[] = productos.filter((producto: Producto) => producto.precio === 150);

console.log('Productos caros filtratos');
console.log(productosCaros);


let productosDeEnsenada1: Producto[] = productos.filter((producto: Producto) => producto.direccion.codigoPostal === 22855);
console.log('Productos por codigo postal');
console.log(productosDeEnsenada1);


let productosDeEnsenada2: Producto[] = productos.filter((producto: Producto) => {
    //Por si necesito realizar alguna otra operacion
    return producto.direccion.codigoPostal === 22855;
});
console.log('Productos por codigo postal');
console.log(productosDeEnsenada2);

//Find: Encuentra un elemento
let productoDeRosarito: Producto | undefined = productos.find((producto: Producto) => producto.direccion.ciudad === 'Rosarito');
if (productoDeRosarito) {
    console.log('El objeto se encontro: ', productoDeRosarito);
} else {
    console.log('El objeto no se encontro :(', productoDeRosarito);
}

//FindIndex: Encuentra el indice del elemento
let indice: number = productos.findIndex((producto: Producto) => producto.direccion.ciudad === 'Rosarito');
if (indice !== -1) {
    console.log('El indice se encontro: ', indice, productos[indice]);
} else {
    console.log('El indice no se encontro :(', indice);
}

//Map: Convierte el arreglo en uno nuevo

const personas4: { id: number, nombre: string }[] = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Pedro'
    }
];

let nombresPersonas: string[] = personas4.map((persona: { id: number, nombre: string }) => {
    return persona.nombre;
})

console.log('MAP, nombres de personas')
console.log(nombresPersonas);


let productosDummy = {
    "products": [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 0,
            "brand": "OPPO",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei???s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 0,
            "brand": "Apple",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/6/1.png",
                "https://i.dummyjson.com/data/products/6/2.jpg",
                "https://i.dummyjson.com/data/products/6/3.png",
                "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/7/1.jpg",
                "https://i.dummyjson.com/data/products/7/2.jpg",
                "https://i.dummyjson.com/data/products/7/3.jpg",
                "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/8/1.jpg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey ??? 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/9/1.jpg",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 0,
            "brand": "HP Pavilion",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/10/1.jpg",
                "https://i.dummyjson.com/data/products/10/2.jpg",
                "https://i.dummyjson.com/data/products/10/3.jpg",
                "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
            ]
        }
    ]
};

let productosConvertidos = productosDummy.products.map((pruducto) => {
    return {}
})

productosConvertidos.forEach((producto: any) => {
    let div = document.createElement('div');
    div.innerText = producto.description;
});

type ProductoDummy = {
    title:string;
    price:number;
};   
