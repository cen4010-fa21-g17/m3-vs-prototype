import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const experienceSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    }
})

const ExperienceModel = mongoose.models.Experience || mongoose.model('Experience', experienceSchema)



export default ExperienceModel