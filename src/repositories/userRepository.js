import User from ' ../schema/user.js';
import crudRepository from './crudRepository';

const userRepository = {
    ...crudRepository(User),    //this would destructure the curdRepository and add all the methods to the userRepository

    getByEmail: async function (email) {
        const user = await User.findOne({ email });
        return user;
    },
    getByUsername: async function (username) {
        const user = await User.findOne({ username });
        return user;
    }
};

export default userRepository;