import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPosts } from "../users/postApi";

export const Search = () => {
    const { search } = useAppSelector(state => state.user);
    console.log(search);

    const dispatch = useAppDispatch()
    const { text } = useParams()
    useEffect(() => {
        dispatch(fetchPosts(String(text)))

    }, [])
    return (
        <>
            <ul>
                {
                    search.map(el => {
                        return (
                            <li key={el.id}>
                                <div className="search mx-auto p-12">
                                    <div className="container mx-auto px-12">
                                        <p className="text-4xl font-extrabold dark:text-white mb-12">Post {el.id}</p>

                                        <p className="text-lg font-normal text-gray-600 lg:text-xl">{el.body}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}