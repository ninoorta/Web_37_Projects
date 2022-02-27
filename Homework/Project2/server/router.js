const express = require('express')

const router = new express.Router()

const
    {
        listsToDo,
        createListToDo,
        clearLists
    } = require('./modules/list')

router.get('/list', async (req, res, next) => {
    try {
        let lists = await listsToDo();
        console.log(lists);
        res.json(lists)
    } catch (err) {
        next(err)
    }
})



router.post('/list', async (req, res, next) => {
    try {
        let newList = req.body
        let createdList = await createListToDo(newList)
        res.json(createdList)
    } catch (err) {
        next(err)
    }
})

router.delete('/list', async (req, res, next) => {
    let data = await clearLists()
    res.json(data)
})



module.exports = router