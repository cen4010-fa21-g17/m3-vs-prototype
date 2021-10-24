import mongoose from 'mongoose'

// Create a schema of the data to be stored in the database
const accountSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId },
    username: {
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