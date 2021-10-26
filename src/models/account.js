import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const accountSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const AccountModel = mongoose.models.Account || mongoose.model('Account', accountSchema)


export default AccountModel