// definición de las constantes que servirán para los arrays
const productos = [] 
const carrito = []
const ordenadoCantidad = []

// definición de la clase Producto
class Producto {
    constructor(id, nombre, cantidad, importe) {
        this.Identificador = id
        this.Nombre = nombre
        this.Cantidad = cantidad
        this.Importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
} 

// creación de un identificador aleatorio automático
const creoID = ()=> parseInt(Math.random() * 10000)

// input de datos del producto a cargar por el usuario
const agregarProducto = ()=> {
    let id = creoID()
    let nombre = prompt("Nombre del nuevo producto:").toUpperCase()
    let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"))
    let importe = parseFloat(prompt("Importe del producto (sin IVA):"))
        productos.push(new Producto(id, nombre, cantidad, importe))
}

// función para listar el array con productos cargados
function listarProductos() {
    console.table(productos)
}

// comprobación de carga
do {
    var comprobacion = prompt ("¿Quiere agregar un nuevo producto? (responder sí o no)")
    if (comprobacion === "no" || comprobacion === "NO" || comprobacion === "No") {
        break
    } else {
        agregarProducto(productos)
    }
}
while (comprobacion != "no" || comprobacion != "NO" || comprobacion != "NO")

listarProductos()

// ordenar listado por cantidad
function ordenar() {
    let productosOrdenados = productos.sort((a, b)=> {
        if (a.Cantidad > b.Cantidad) {
            return 1
        }
        if (a.Cantidad < b.Cantidad) {
            return -1
        }
        return 0
    })
    console.table(productosOrdenados)
}
