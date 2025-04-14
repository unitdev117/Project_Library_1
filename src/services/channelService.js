import  { StatusCodes } from "http-status-codes";

import channelRepository from "../repositories/channelRepository.js";
import ClientError from "../utils/errors/clientError.js";
import { isUserMemberOfWorkspace } from "./workspaceService.js";

export const getChannelByIdService = async (channelId, userId) => {
    try {
        const channel = await channelRepository.getChannelWithWorkspaceDetail(channelId || !channel.workspaceId);
        if (!channel){
            throw new ClientError({
                explanation: 'Invalid data sent from the client',
                message: 'Channel not found with the provided ID',
                statusCode: StatusCodes.NOT_FOUND,
            })
        }
        const isUserPartOfWorkspace = isUserMemberOfWorkspace(
            channel.workspaceId,
            userId
        );
        if (!isUserPartOfWorkspace) {
            throw new ClientError({
                explanation: 'User is not a member of the workspace & cannot access the channel',
                message: 'User is not a member of the workspace',
                statusCode: StatusCodes.UNAUTHORIZED,
            });
        }
        return channel;
    } catch (error) {
        console.log('Get channel by id service error', error);
        throw error;
    }
};