import { useEffect,useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import FeedCard from '../components/Feed/FeedCard'
import useGetFeeds from '../hooks/useGetFeeds';
import TagsInput from '../components/TagInput/TagInput';


export default function Feed() {


  const [tags, setTags] = useState(JSON.parse(localStorage.getItem('tokens'))||[]);

  const {feeds,tokens,setTokens,hasMore,resultCount,next} = useGetFeeds({pageSize:25});


  useEffect(()=>{
    localStorage.setItem('tokens',JSON.stringify(tags));
  },[tags])

  function apply(){
    setTokens(tags);
  }

  function clear(){
    if(tokens.length) setTokens([]);
  }

  return (
    <>
      <div className='bg-white sticky top-0 w-full'>

        <div className='w-[70%] mx-auto'>
          <div className=' w-[70%] flex items-end mx-auto'>
            <TagsInput
              tags={tags}
              onTagsChange={setTags}
            />
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
    </>
  )
}