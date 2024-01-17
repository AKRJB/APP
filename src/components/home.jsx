import Feed from './Feed'
import { useContext } from 'react'
import DataContext from '../context/DataContext'


const Home = () => {
  const { data, fetchError, isLoading } = useContext(DataContext);
  return (
    <main>
      {isLoading && <p>Loading data....</p>}
      {!isLoading && fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (data.length ? (
        <Feed />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      ))}
    </main>
  )
}

export default Home