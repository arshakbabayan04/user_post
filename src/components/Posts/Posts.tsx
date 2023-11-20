import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import PostItem from "../PostItem/PostItem";
import { fetchUserPost } from "../users/userApi";
import { FC } from "react";

const Posts: FC = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(state => state.user);
    useEffect(() => {
        dispatch(fetchUserPost(String(id)))
    }, [id])
    console.log(posts)

    return (

        <div className="search mx-auto p-12">
            <div className="container mx-auto px-12">
                <ul>
                    {posts.map((el: any) => <PostItem key={el.id} elm={el} />)}
                </ul>
            </div>
        </div>
    )
}

export default Posts;