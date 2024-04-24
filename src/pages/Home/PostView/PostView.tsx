import { Div } from "../../../components/Div/Div"
import { Post } from "../../../components/Post/Post"


const PostView = () => {
  return (
    <div className='post-view-detail'>
        <Div title="Our Recent news"/>
        <Post/>
    </div>
  )
}

export default PostView