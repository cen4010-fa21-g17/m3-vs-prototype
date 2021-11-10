import axios from 'axios'

const UserService = {
    async getAllUsers() {
        const users = await axios.get('/api/user')
        return users.data
    }
}

export default UserService 