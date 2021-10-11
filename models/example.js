import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

export default mongoose.models.Example || mongoose.model('Example', exampleSchema)