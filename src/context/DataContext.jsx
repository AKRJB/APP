import {createContext, useContext, useState, useEffect} from "react"
import api from '../api/post';
import useAxiosFetch from '../hooks/useAxiosFetch';



const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const { post, isLoading, fetchError } = useAxiosFetch('http://localhost:3500/posts')
  
    useEffect(() => {
      setData(post);
    }, [post])
  
    const deletePost = async(id) => {
      try {
        await api.delete(`/posts/${id}`);
        const postList = data.filter(post => post.id !== id);
        setData(postList);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
    const handleUpdate = async (id) => {
        const updateDetails = {id, name:editName, email:editEmail, number: editNumber, website:editWebsite};
        try {
          const response = await api.put(`posts/${id}`, updateDetails);
          setData((prevData) => prevData.map((prev) => prev.id === id ? {...response.data } : prev));
    
          setEditName('');
          setEditEmail('');
          setEditNumber('');
          setEditWebsite('');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }


    return (
        <DataContext.Provider value={{
            fetchError, isLoading, data, setData, deletePost
        }}>
            {children}
        </DataContext.Provider>
    )
}







export default DataContext;