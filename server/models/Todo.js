const {Schema, model, Types} = require("mongoose")

const Todo = new Schema()
Todo.add({
    owner: {type: Types.ObjectId, ref: "User"},
    text: {type: String},
    completed: {type: Boolean, default: false},
    important: {type: Boolean, default: false},
    id: {type: String, default: ""}
})


module.exports = model("Todo", Todo)