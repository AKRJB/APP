import { useState, useContext } from 'react';
import { FaEdit, FaRegHeart, FaTrash, FaUser, FaEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import EditForm from './editForm';
import { IoMdGlobe } from 'react-icons/io';
import DataContext from '../context/DataContext';

const Post = ({ post }) => {
  const [isEditing, setEditing] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const { data, setData, deletePost } = useContext(DataContext);

  const handleLikePost = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditFormClose = () => {
    setEditing(false);
  };

  return (
    <main className='main'>
      <div className='card'>
        <div className='profile'>
          <img src='/Antonette.svg' className='card-img' alt='Profile' />
        </div>
        <article className='article'>
          <h3>{post.name}</h3>
          <p className='data'>
            <FaEnvelope /> {post.email}
          </p>
          <p className='data'>
            <FiPhone /> {post.number}
          </p>
          <p className='data'>
            <IoMdGlobe /> {post.website}
          </p>
        </article>
        <div className='footer'>
          <div className='icons'>
            <img
              src={isLiked ? '/liked.svg' : '/like.svg'}
              alt='like'
              width={20}
              height={20}
              onClick={handleLikePost}
              className='like'
            />
          </div>
          <div className='icons second-icon'>
            <FaEdit className='button edit' onClick={handleEditClick} />
          </div>
          <div className='icons'>
            <FaTrash className='button trash' onClick={() => deletePost(post.id)} />
          </div>
        </div>

        {/* Conditionally render EditForm */}
        {isEditing && <EditForm handleEditFormClose={handleEditFormClose} data={data} setData={setData} post={post} />}
      </div>
    </main>
  );
};

export default Post;
