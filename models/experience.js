import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const experienceSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    content: {
        type: String,
        required: true
    },
    skills: [{
        type: String
    }]
})

const ExperienceModel = mongoose.models.Experience || mongoose.model('Experience', experienceSchema)



export default ExperienceModel