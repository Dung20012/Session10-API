import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);

    const todos = [
        { id: 1, text: "Quét nhà", completed: false },
        { id: 2, text: "Giặt quần áo", completed: true },
        { id: 3, text: "Nấu cơm", completed: false },
        { id: 4, text: "Học React", completed: true },
        { id: 5, text: "Đi dạo", completed: false },
        { id: 6, text: "Xem phim", completed: true },
        { id: 7, text: "Đọc sách", completed: false },
        { id: 8, text: "Chơi thể thao", completed: true },
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setTodoList(todos);
            setLoading(false);
        }, 2000);
    }, []);

    // Xóa công việc
    const deleteTodo = (todoId) => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
        if (confirmed) {
            setTodoList(todoList.filter((todo) => todo.id !== todoId));
        }
    };

    return (
        <div className="border border-gray-300 rounded p-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
            {loading ? (
                <div className="flex justify-center items-center" style={{ height: "100%" }}>
                    <ClipLoader size={50} color="#3498db" loading={loading} />
                </div>
            ) : (
                <ul className="space-y-2">
                    {todoList.slice(0, 6).map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
                    ))}
                </ul>
            )}
        </div>
    );
}
