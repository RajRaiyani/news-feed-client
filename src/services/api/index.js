import {GET} from './http';
import { serverDetails } from '../../config/var';


export const getFeeds = ({tokens=[],offset=0,limit=100,resultCount=false})=>{
    const url = `${serverDetails.serverProxyURL}/api/v1/feeds`;
    const params = {limit,offset,tokens,resultCount};
    return GET({url,params})
}