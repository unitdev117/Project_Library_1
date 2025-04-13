import Channel from '../schema/channel.js';
import crudRepository from './crudRepository.js';

const channelRepository = {
  ...crudRepository(Channel), //this would destructure the curdRepository and add all the methods to the userRepository
};

export default channelRepository;
