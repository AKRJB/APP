import { useEffect, useState, useContext } from 'react';
import api from '../api/post';
import DataContext from '../context/DataContext';

const EditForm = ({ handleEditFormClose, post }) => {
  const { data, setData } = useContext(DataContext);

  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const [editWebsite, setEditWebsite] = useState('');

  useEffect(() => {
    setEditName(post.name);
    setEditEmail(post.email);
    setEditNumber(post.number);
    setEditWebsite(post.website);
  }, [post]);

  const handleUpdate = async (id) => {
    const updateDetails = { id, name: editName, email: editEmail, number: editNumber, website: editWebsite };
    try {
      const response = await api.put(`posts/${id}`, updateDetails);
      setData((prevData) => prevData.map((prev) => (prev.id === id ? { ...response.data } : prev)));

      setEditName('');
      setEditEmail('');
      setEditNumber('');
      setEditWebsite('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default behavior for now, you can add custom validation logic here if needed
    handleUpdate(post.id);
    handleEditFormClose();
  };

  return (
    <div className='editBox'>
      <div className='parent'>
        <div className='sibling'>
          <h4>Basic Modal</h4>
          <button className='closeButton' onClick={handleEditFormClose}>
            X
          </button>
        </div>
        <div className='sibling-1'>
          <form>
            <div className='input-class'>
              <label className='label' htmlFor='name'>
                <sup style={{ color: 'red' }}>*</sup>Name:
              </label>
              <input
                className='inputBox'
                type='text'
                id='name'
                value={editName}
                required
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className='input-class'>
              <label className='label' htmlFor='email'>
                <sup style={{ color: 'red' }}>*</sup>Email:
              </label>
              <input
                className='inputBox'
                type='email'
                id='email'
                value={editEmail}
                required
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className='input-class'>
              <label className='label' htmlFor='phone'>
                <sup style={{ color: 'red' }}>*</sup>Phone:
              </label>
              <input
                className='inputBox'
                type='text'
                id='phone'
                value={editNumber}
                required
                onChange={(e) => setEditNumber(e.target.value)}
              />
            </div>

            <div className='input-class'>
              <label className='label' htmlFor='website'>
                <sup style={{ color: 'red' }}>*</sup>Website:
              </label>
              <input
                className='inputBox'
                type='text'
                id='website'
                value={editWebsite}
                required
                onChange={(e) => setEditWebsite(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button className='clear-button' onClick={handleEditFormClose}>
                Cancel
              </button>
              <button type='submit' className='okButton clear-button' onClick={handleSubmit}>
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
