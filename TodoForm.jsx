import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoFilter";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FooterActions from "./FooterActions";
import axios from "axios";

const TodoForm = () => {
    const [listData, setListData] = useState([]);

    const handleGetListData = async () => {
        axios.get(`http://localhost:3000/libraries`).then((res) => {
            setListData(res.data);
        });
    };

    useEffect(() => {
        handleGetListData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                <h1 className="text-center text-2xl font-semibold mb-4">
                    Quản lý công việc
                </h1>
                <AddTodo />
                <TodoFilter />
                <TodoList todos={listData} />
                <FooterActions />
            </div>
        </div>
    );
};

export default TodoForm;
