import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

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

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList(todos);
    }, []);

    return (
        <div
            className="border border-gray-300 rounded p-4"
            style={{ maxHeight: "300px", overflowY: "auto" }}
        >
            <ul className="space-y-2">
                {todoList.slice(0, 6).map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
