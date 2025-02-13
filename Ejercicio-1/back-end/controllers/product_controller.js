const Producto = require("../models/producto");


exports.crearProducto = async(req, res)=>{
    try {
        let producto;
        console.log(req.body);

        producto = new Producto(req.body)

        await producto.save();
        res.json(producto);


    }catch (error){
        console.log(error);
        res.status(500).send('hubo un error');
    };
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos)
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error")
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ msg: 'No existe ese producto' });
        }

        // Actualizar y devolver el producto actualizado
        producto = await Producto.findOneAndUpdate(
            { _id: req.params.id },
            { nombre, categoria, ubicacion, precio }, // Actualización directa con los valores del body
            { new: true } // Devuelve el nuevo documento actualizado
        );

        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
};

exports.obtenerProducto = async (req, res) => {
    try {
        
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({ msg: 'No existe ese producto' });
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({ msg: 'No existe ese producto' });
        }

        await Producto.findOneAndDelete({_id: req.params.id})

        res.json({msg: 'producto eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
};
