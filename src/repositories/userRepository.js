import User from '../schema/user.js'
import crudRepository from './crudRepository.js'

const userRepository = {
  ...crudRepository(User), //this would destructure the curdRepository and add all the methods to the userRepository

  getByEmail: async function (email) {
    const user = await User.findOne({ email })
    return user
  },
  getByUsername: async function (username) {
    const user = await User.findOne({ username }).select('-password') // Exclude password from the result
    return user
  },
}

export default userRepository
