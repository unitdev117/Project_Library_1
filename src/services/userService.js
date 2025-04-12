import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'

import userRepository from '../repositories/userRepository.js'
import ClientError from '../utils/errors/clientError.js'
import ValidationError from '../utils/errors/validationError.js'
import { createJWT } from '../utils/common/authUtils.js'

export const signUpService = async (data) => {
  try {
    const newUser = await userRepository.create(data)

    return newUser
  } catch (error) {
    console.log('User service error ', error)
    if (error.name === 'ValidationError') {
      throw new ValidationError(
        {
          error: error.errors,
        },
        error.message
      )
    }
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw new ValidationError(
        {
          error: ['A user with same emailor username already exists'],
        },
        'A user with same emailor username already exists'
      )
    }
  }
}


export const signInService = async (data) => {
  try {
    const user = await userRepository.getByEmail(data.email)
    if (!user){
      throw new ClientError({
        explanation : 'Invalid data sent from the client',
        message: 'No registered user found with this email',
        statusCode: StatusCodes.NOT_FOUND
      });
    }
    //match the incoming password with the hashed password
    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new ClientError({
        explanation : 'Invalid data sent from the client',
        message: 'Incorrect password, please try again',
        statusCode: StatusCodes.BAD_REQUEST
      });
    }

    return {
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      token: createJWT({ id: user._id, email: user.email })
    }

  } catch (error) {
    console.log('User service error ', error)
    throw error;

  }
};