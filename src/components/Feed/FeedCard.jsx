import PropTypes from 'prop-types';

function FeedCard({id,title,content,matchScore,publishedAt,index}){
  const date = new Date(publishedAt);
    return (
      <div className='p-1 py-5 border-t-2 feed-card' key={id}>
      <div className='flex justify-between items-center'>
        <h3 className=''><span className='me-4'>{index}</span>{title}</h3>
        <span className='text-sm'>Matching score : {matchScore}</span>
      </div>
      <div className='text-sm mb-3'>{date.toDateString()}</div>
      <div className='content' dangerouslySetInnerHTML={{__html:content}}></div>
    </div>
    )
}

FeedCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  matchScore: PropTypes.number.isRequired,
  publishedAt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default FeedCard;
