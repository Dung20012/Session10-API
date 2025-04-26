import { useState, useEffect } from "react";
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
    setLoading(true); // Bật loading khi bắt đầu gọi API
    // Giả lập việc gọi API bằng setTimeout
    setTimeout(() => {
      setTodoList(todos);
      setLoading(false); // Tắt loading khi dữ liệu đã có
    }, 2000); // Giả lập 2s tải dữ liệu
  }, []);

  return (
    <div className="border border-gray-300 rounded p-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
      {loading ? (
        // Hiển thị spinner khi đang tải
        <div className="flex justify-center items-center" style={{ height: "100%" }}>
          <ClipLoader size={50} color="#3498db" loading={loading} />
        </div>
      ) : (
        <ul className="space-y-2">
          {todoList.slice(0, 6).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
