import { useEffect, useState } from "react";
import { getFeeds } from "../services/api";

function useGetFeeds({tokens:defaultTokens = [],pageSize = 25}) {
  
  const [ feeds, setFeeds ] = useState([]);
  const [ tokens, setTokens ] = useState(defaultTokens);
  const [ offset, setOffset ] = useState(0);
  const [ hasMore, setHasMore ] = useState(true);
  const [ resultCount, setResultCount ] = useState(0);

  function next(){

    getFeeds({tokens,limit:pageSize,offset,resultCount:(feeds.length === 0?true:false)}).then((data) => {
      if(data.list.length === 0) setHasMore(false);
      if (feeds.length === 0) setResultCount(data.count);
      setFeeds(feeds.concat(data.list));
      setOffset(offset+pageSize);
    });

  }

  useEffect(()=>{
    setFeeds([]);
    setOffset(0);
    setHasMore(true);
    setTokens(tokens);
  },[tokens])
  
  return {feeds,tokens,setTokens,next,hasMore,resultCount}
}

export default useGetFeeds;