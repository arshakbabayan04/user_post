import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { Product } from "../types";
import { useNavigate } from "react-router";

const Home: FC = () => {

    const [time, setTime] = useState('');

    const getTime = () => {
        const date = new Date();
        const showTime = date.getHours()
            + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
            + ":" + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())

        return showTime;
    }

    useEffect(() => {
        setTime(getTime());
        const interval = setInterval(() => {
            setTime(getTime());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Product>()

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const add = (data: any) => {
        navigate(`/search/${data.title}`)
    }


    return (
        <>

            <div className="home min-h-screen p-10" style={{ background: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat' }}>
                <div className="container mx-auto px-12">
                    <p className="text-center text-6xl bold text-white">Curent Time</p>
                    <p className="text-center mt-5 text-4xl text-white">{time}</p>

                    <form className="mt-10 w-1/2 mx-auto" onSubmit={handleSubmit(add)}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search"
                                {...register("title", {
                                    required: "Field is required",
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Enter letter",
                                    },
                                })} />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                        {errors.title && (
                            <p className="text-red-600">{errors.title.message}</p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;