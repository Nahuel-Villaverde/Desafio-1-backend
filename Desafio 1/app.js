class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        //valido que esten todos los campos
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios")
            return;
        }

        //valido que el campo "code" no esté repetido
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.error("El código ya está en uso ")
                return;

            }
        }

        //genero el ID autoincremental
        const productId = this.products.length + 1;

        //creo el producto
        const newProduct = {
            id: productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        //pusheo el producto actual al array "products" del constructor
        this.products.push(newProduct);
    }


    //muestro los productos guardados en el array "products" del constructor
    getProducts() {
        return this.products
    }

    getProductById(id) {

        //busco los productos guardados en el array "products" del constructor, que coincidan con el id
        const productEncontrado = this.products.find(product => product.id === id);

        //si el producto no es encontrado tira error, si es encontrado devuelve el producto encontrado
        if (!productEncontrado) {
            console.error("El producto con el ID proporcionado no existe");
            return
        }

        return productEncontrado;

    }

}

//creo una nueva instancia
const manager = new ProductManager();

//agrego productos
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc122", 25);

//muestro los productos del array 
console.log("Productos:", manager.getProducts());

//busco productos por id
console.log("Producto con ID 1:", manager.getProductById(1));
console.log("Producto con ID 3:", manager.getProductById(3));