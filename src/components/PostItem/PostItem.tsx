import { FC } from "react";
import { Post } from "../types";
import { useAppDispatch } from "../../store/hooks";
import { deletePost } from "../users/userSlice";

const PostItem: FC<{ elm: Post }> = ({ elm }) => {

    const dispatch = useAppDispatch()

    return (

        <li key={elm.id}>
            <div className="search mx-auto  p-12">
                <div className="container mx-auto px-12">
                    <p className="text-4xl font-extrabold dark:text-white mb-12">Post {elm.id}</p>
                    <p className="text-2xl font-extrabold dark:text-white mb-12">{elm.title}</p>
                    <p className="text-lg font-normal text-gray-600 lg:text-xl">{elm.body}</p>

                    <button onClick={() => dispatch(deletePost(elm.id))} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10">Delete Post</button>
                </div>
            </div>
        </li>

    );
}

export default PostItem;