import Channel from '../schema/channel.js';
import crudRepository from './crudRepository.js';

const channelRepository = {
  ...crudRepository(Channel), //this would destructure the curdRepository and add all the methods to the userRepository
  getChannelWithWorkspaceDetail: async function (channelId){
    const channel = await Channel.findById(channelId).populate('workspaceId');
    return channel
  }
};

export default channelRepository;
