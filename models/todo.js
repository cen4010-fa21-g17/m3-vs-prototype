import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', todoSchema)

// Usage:

// Creating a new todo to be stored in the database:
// const todo = new TodoModel({
//    text: 'Do homework'
// })

// Saving it to database:
// todo.save()

// Some Methods available from TodoModel

// Query all todos from database
// TodoModel.find()

// Query a todo with a specific ID
// TodoModel.findById(id)

export default TodoModel