const {Router} = require("express")
const Todo = require("../models/Todo")
const router = Router()
const authMiddleware = require("../middleware/auth.middleware")


router.post('/add', authMiddleware, async (req, res) => {
    try{
        const {task, userId} = req.body

        const todo = await Todo.create({
            text: task.text,
            owner: userId,
            important: false,
            completed: false,
            id: task.id,
        })

        res.json(todo)
    }catch(e){
        console.log(e)
    }
})

router.get('/', authMiddleware, async(req, res) => {
    try{
        const {userId} = req.query

        const todo = await Todo.find({owner: userId})

        res.json(todo)

    }catch(e) {
        console.log(e)
    }
})

router.delete('/delete/:id', authMiddleware, async(req, res) => {
    try{
        const todo = await Todo.findOneAndDelete({id: req.params.id, owner: req.user.id})
        res.json(todo)
    }catch(e){
        console.log(e)
    }
})

router.put('/complete/:id', authMiddleware, async(req, res) => {
    try {
        const todo = await Todo.findOne({id: req.params.id, owner: req.user.id})
        todo.completed = !todo.completed
        await todo.save()
        res.json(todo)
    } catch (e) {
        console.log(e)
    }
})

router.put('/important/:id', authMiddleware, async(req, res) => {
    try {
        const todo = await Todo.findOne({id: req.params.id, owner: req.user.id})
        todo.important = !todo.important
        await todo.save()
        res.json(todo)
    } catch (e) {
        console.log(e)
    }
})


module.exports = router