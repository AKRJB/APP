import Post from "./post"
import { useContext } from 'react';
import DataContext from '../context/DataContext'

const Feed = () => {

  const { data,setData, deletePost } = useContext(DataContext);
  return (
    <div>
      <div className='bio'>
        {data.map((post) => (
          <Post key={post.id} post={post}  deletePost={deletePost} setData={setData} />
        ))}
      </div>
    </div>
  )
}

export default Feed
