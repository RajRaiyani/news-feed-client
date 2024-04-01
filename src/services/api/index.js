import {GET} from './http';
import { serverDetails } from '../../config/var';


export const getFeeds = (tokens=[],limit=100,offset = 0)=>{
    const url = `${serverDetails.serverProxyURL}/api/v1/feeds`;
    const params = {limit,offset,tokens};
    return GET({url,params})
}