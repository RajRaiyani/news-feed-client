import { useEffect,useState } from 'react';
import {getFeeds} from '../services/api';


export default function Feed() {

  const [ feeds, setFeeds ] = useState([]);
  const [ tokens, setTokens ] = useState([]);
  const [inputString, setInputString] = useState('');

  useEffect(()=>{
    setInputString(localStorage.getItem('tokenString') || '');
  },[])

  useEffect(() => {
    getFeeds(tokens).then((data) => {
      setFeeds(data);
    });
  }, [tokens]);

  function MapFeeds() {
    return feeds.map((feed,index) => {
      const date = new Date(feed.publishedAt);
      return (
        <div className='p-1 py-5 border-t-2 feed-card' key={feed.id}>
          <div className='flex justify-between items-center'>
            <h3 className=''><span className='me-4'>{index}</span>{feed.title}</h3>
            <span className='text-sm'>Matching score : {feed.matchScore}</span>
          </div>
          <div className='text-sm mb-3'>{date.toDateString()}</div>
          <div className='content' dangerouslySetInnerHTML={{__html:feed.content}}></div>
        </div>
      );
    });
  }

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
    setTokens([]);
  }
  return (
    <div>
      <div className='w-fit mx-auto'>
        
        <textarea rows={2} cols={70} className='border-2 rounded mt-2 p-1' placeholder='Tokens...(separated by ",")'
        onChange={handleInput} value={inputString}>
        </textarea>
        <button className='border rounded-lg mx-1 px-1' onClick={apply}>apply</button>
        <button className='border rounded-lg mx-1 px-1' onClick={clear}>clear</button>
      </div>
      <div className='w-[70%] mx-auto'>
      <div>results : {feeds.length}</div>
        <MapFeeds />
      </div>
    </div>
  )
}