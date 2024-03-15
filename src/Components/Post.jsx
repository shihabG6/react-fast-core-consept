export default function Post ({post}){
  const {id,title,body}=post;
  return (
    <div>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {body}</p>
    </div>
  )
}