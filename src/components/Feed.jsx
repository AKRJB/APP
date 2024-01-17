import Post from "./post"

const Feed = ({data, setData}) => {

  return (
    <div>
      <div className='bio'>
        {data.map((post) => (
          <Post key={post.id} post={post} data={data} setData={setData} />
        ))}
      </div>
    </div>
  )
}

export default Feed
