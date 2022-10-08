class Inventario {
    constructor() {
        this.vector = [];
    }

    agregar(producto) {
        this.vector[this.vector.length] = producto
    }

    eliminar(codigo) {
        if (this.obtenerIndice(codigo) == this.vector.length + 1) {

        } else {
            for (let i = this.obtenerIndice(codigo); i < this.vector.length - 1; i++) {
                this.vector[i] = this.vector[i + 1]
            }
            this.vector.pop(this.vector.length)
        }

        return this.vector
    }

    obtenerIndice(codigo) {
        for (let i = 0; i < this.vector.length; i++) {
            if (codigo === this.vector[i].codigo) {
                return i
            }
        }
        return this.vector.length + 1
    }

    buscar(codigo) {
        for (let i = 0; i < this.vector.length; i++) {
            if (codigo === this.vector[i].codigo) {
                return this.vector[i]
            }
        }
        return null
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
i.eliminar(0)


let a = 10;
let b = 20;