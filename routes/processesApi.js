const express = require('express');
const router = express.Router();
const { Processes, Materials, Machines, Extras } = require('../models');

router.get('/', async (req, res) => {

    try {
        const materials = await Processes.findAll()
        res.status(200).json({ data: materials })
    }
    catch (err) {
        res.status(500).json({ message: 'Ha habido un error' })
    }
})

router.get('/:material_name', async (req, res) => {
    const materialName = req.params.material_name.replaceAll('_', ' ');

    try {
        const material = await Materials.findOne({
            where: {
                material_name: materialName
            }
        });

        const process_ = await Processes.findAll({
            where: {
                output_material: material.id
            }
        });

        const data = await getProcess(process_, material.id, [{'material_id': material.id, 'material_name': material.material_name, 'extras': []}])
        .then(data => {
            
            return printSequence(data)
        });

        res.status(200).json({ data});
    } catch (err) {
        res.status(500).json({ message: 'Ha habido un error: ' + err.message });
    }
});
module.exports = router;

async function getProcess(process, original, currentPath, paths = []) {
    for (let element of process) {
        const material = await Materials.findByPk(element.input_material)
        const machine = await Machines.findByPk(element.machine_id)
        
        

        const newPath = [...currentPath, {'id': element.id, 'material_id': element.input_material, 'material_name': material.material_name, 'machine_id': element.machine_id, 'machine_name': machine.machine_name, 'extras': []}];
        
        const extras = await Extras.findAll({
            where: {
                process_id: element.id,
            }
            
        })
        
        
        if(extras.length > 0) {
            for(let extra in extras){
                const materialExtra = await Materials.findByPk(extras[extra].material_id);
                newPath[newPath.length - 1][`extras`].push({'material_id': extras[extra].material_id, 'material_name': materialExtra.material_name, 'quantity': extras[extra].extra_quantity});
                
            }
        }
        

        if (element.input_material !== original) {
            const materialProcess = await Processes.findAll({
                where: {
                    output_material: element.input_material
                }
            });

            if (materialProcess.length !== 0) {
                if (materialProcess.length > 1) {
                    for (let subProcess of materialProcess) {
                        await getProcess([subProcess], original, newPath, paths);
                    }
                } else {
                    await getProcess(materialProcess, original, newPath, paths);
                }
            } else {
                paths.push(newPath);
            }
        } else {
            paths.push(newPath);
            newPath.pop();
        }
    }
    return paths;
}

function printSequence(sequence){
    let printSequence = [];

    for(let element in sequence){
        let sequenceProcess = [];
        let c = 1;
        for(let subProcess of sequence[element]){
            console.log(subProcess);
            if(subProcess.extras.length > 0) {
                for(let extra in subProcess.extras){
                    sequenceProcess.unshift(`Extra: ${subProcess.extras[extra].material_name} ,  ${subProcess.extras[extra].quantity}`)
                }
                //sequenceProcess.unshift(subProcess.extras)
            }
            if(subProcess.machine_name) sequenceProcess.unshift(subProcess.machine_name)

            if(c != 1) sequenceProcess.unshift('=>')

            sequenceProcess.unshift(subProcess.material_name)

            if(c != sequence[element].length) sequenceProcess.unshift('=>')

            c++;
        }
        printSequence.push(sequenceProcess)
        
    }
    return printSequence;
}