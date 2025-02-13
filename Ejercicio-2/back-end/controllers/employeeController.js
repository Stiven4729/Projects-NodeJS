const employee = require('../models/employee')
const Employee = require('../models/employee')

// endpoints

//create employee
exports.newEmployee = async(req, res) => {
    try{
        let employee
        console.log(req.body)


        employee = new Employee(req.body)

        await employee.save()
        res.json(employee)


    }catch (error){
        console.log("Hay un error " + error)
    }
}

//get employeers
exports.everyEmployees = async(req, res)=>{
    try{
        //.find used for gets employeers
        const employees = await Employee.find()
        console.log(employees)
        res.json(employees)

    }catch(error){
        console.log(error)
    }
}

// get a employee
exports.searchEmployee = async(req, res) => {
    try{
        //findById use for get id the employee
        let employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({msg: "the employee was not found"})
        }

        res.json(employee)

    }catch (error){
        console.log(error)
    }

}

//delete employee
exports.deleteEmployee = async(req, res) => {
    try{
        //findById use for get id the employee
        let employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({msg: "the employee was not found"})
        }

        //se usa findOneAndDelete
        await Employee.findOneAndDelete({_id: req.params.id})
        res.json({msg: "Delete the employee is correct "})

    }catch (error){
        console.log(error)
    }

}

exports.updateEmployee = async (req, res) => {
    try {
        const { nombre, edad, sexo, cargo } = req.body;
        
        let employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'the employee no found' });
        }

        // Actualizar y devolver el employee actualizado
        employee = await Employee.findOneAndUpdate(
            { _id: req.params.id },
            { nombre, edad, sexo, cargo }, // Actualización directa con los valores del body
            { new: true } // Devuelve el nuevo documento actualizado
        );

        res.json(employee);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
};