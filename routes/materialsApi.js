const express = require('express');
const router = express.Router();
const { Materials } = require('../models');

router.get('/', async (req, res) => {

    try{
        const materials = await Materials.findAll({
            attributes: ['material_name']
        })
        res.status(200).json({data: materials})
    }
    catch(err){
        res.status(500).json({message: 'Ha habido un error'})
    }
})

router.get('/:material_name', async (req, res) => {
    const materialName = req.params.material_name;
    try{
        const materials = await Materials.findOne({
            where: {
                material_name: materialName
            }
        })
        
        res.status(200).json({data: materials})
    }
    catch(err){
        res.status(500).json({message: 'Ha habido un error'})
    }
})
module.exports = router;

