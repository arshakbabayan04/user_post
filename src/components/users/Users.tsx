import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { User } from "../types";
import { fetchUsers } from "./userApi";

const Users: FC = () => {
    const dispatch = useAppDispatch()
    const { users } = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    return (
        <>
            <div className="users p-12 min-h-screen" style={{ background: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat' }}>
                <div className="container mx-auto px-12">
                    <p className="text-center text-6xl bold text-white mb-5">Users</p>

                    <ul role="list" className="divide-y divide-gray-100 w-1/2 mx-auto">

                        {users.map((el: any) =>
                            <li key={el.id} className="flex justify-between gap-x-6 py-5 bg-white rounded-xl p-5 mb-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={el.image} alt="" />
                                    <div className="min-w-0 flex items-center">
                                        <p className="text-sm font-semibold leading-6 text-gray-900 ">{el.firstName} {el.lastName}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <Link to={`/posts/${el.id}`} className="text-sm leading-6 text-gray-900">See Post</Link>
                                    <Link to={`/add-post/${el.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add Post</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Users;