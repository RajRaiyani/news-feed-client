import { useEffect,useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import FeedCard from '../components/Feed/FeedCard'
import useGetFeeds from '../hooks/useGetFeeds';


export default function Feed() {


  const [inputString, setInputString] = useState('');

  const {feeds,tokens,setTokens,hasMore,resultCount,next} = useGetFeeds({pageSize:25});


  useEffect(()=>{
    setInputString(localStorage.getItem('tokenString') || '');
  },[])



  function handleInput(e){
    setInputString(e.target.value);
  }

  function apply(){
    localStorage.setItem('tokenString',inputString)
    let string = inputString; 
    if(inputString.endsWith(',')) string = inputString.slice(0,-1);
    let tokens = string.split(',').map((token) => token.trim());
    setTokens(tokens);
  }

  function clear(){
    if(tokens.length) setTokens([]);
  }


  return (
    <div>
      <div className='bg-white sticky top-0'>

        <div className='w-fit mx-auto'>
          <div>
            <textarea rows={2} cols={70} className='border-2 rounded mt-2 p-1' placeholder='Tokens...(separated by ",")'
            onChange={handleInput} value={inputString}>
            </textarea>
            <button className='border rounded-lg mx-1 px-1' onClick={apply}>apply</button>
            <button className='border rounded-lg mx-1 px-1' onClick={clear}>clear</button>
          </div>
          <div>results : {resultCount}</div>
        </div>
      </div>

      <div className='w-[70%] mx-auto'>

        <InfiniteScroll
          loadMore={next}
          hasMore={hasMore}
          loader={<span key="">Loading ...</span>}
        >
          {
            feeds.map((feed,index) => {
              return (
                <FeedCard 
                  key={feed.id}
                  id={feed.id}
                  title={feed.title}
                  content={feed.content}
                  matchScore={feed.matchScore}
                  publishedAt={feed.publishedAt}
                  index={index+1}
                />
              );
            })
          }
        </InfiniteScroll>

      </div>
    </div>
  )
}