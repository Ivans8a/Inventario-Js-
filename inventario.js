class Inventario {
    constructor() {
        this.vector = [];
    }

    agregar(producto) {
        this.vector[this.vector.length] = producto
    }

    eliminar(codigo) {
        for (let i = this.obtenerIndice(codigo); i < this.vector.length - 1; i++) {
            this.vector[i] = this.vector[i + 1]
        }
        this.vector.pop(this.vector.length)
        return this.vector
    }

    obtenerIndice(codigo) {
        for (let i = 0; i < this.vector.length; i++) {
            if (codigo === this.vector[i].codigo) {
                return i
            }
        }
        return "No existe"
    }

    buscar(codigo) {
        for (let i = 0; i < this.vector.length; i++) {
            if (codigo === this.vector[i].codigo) {
                return this.vector[i]
            }
        }
        return "No existe"
    }

    listado() {
        let lista = ""
        for (i = 0; i < this.vector.length; i++) {
            lista +=
                `
                ID:${this.vector[i].codigo} NOMBRE: ${this.vector[i].nombre} (${this.vector[i].cantidad}) $${this.vector[i].costo}`
        }
        return lista
    }

    listadoInverso() {
        let listaInvertida = "";
        let vecInvertido = []
        for (let i = this.vector.length - 1; i >= 0; i--) {
            vecInvertido.push(this.vector[i])
        }
        for (let j = 0; j < vecInvertido.length; j++) {
            listaInvertida +=
                `
                ID:${vecInvertido[j].codigo} NOMBRE: ${vecInvertido[j].nombre} (${vecInvertido[j].cantidad}) $${vecInvertido[j].costo}`

        }
        return listaInvertida
    }
}

class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}

let i = new Inventario();
let p1 = new Producto(123, "teclado", 4, 200);
let p2 = new Producto(132, "mouse", 6, 50);
let p3 = new Producto(222, "Lapiz", 10, 5);
let p4 = new Producto(333, "Borrador", 15, 4);

i.agregar(p1)
i.agregar(p2)
i.agregar(p3)
i.agregar(p4)

console.log(i.listado())


let v = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function eliminar1(i) {
    v[i] = v[i + 1]
    v[i + 1] = v[i + 2]
}
v[5] = v[6]
v[6] = v[7]
v[7] = v[8]
v.pop(8)

//console.log(v)