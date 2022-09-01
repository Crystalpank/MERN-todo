const {Schema, model, Types} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{type: Types.ObjectId, ref: 'Todo'}],
    description: {type: String}
})


module.exports = model("User", User)