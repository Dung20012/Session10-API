import React, { useRef, useState } from "react";
import axios from "axios";

const AddTodo = ({ todos, onAdd }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleAdd = async () => {
    const title = input.trim();

    // Validate rỗng
    if (!title) {
      setError("Tên công việc không được để trống.");
      return;
    }

    // Validate trùng
    const isDuplicate = todos.some((todo) => todo.title === title);
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại.");
      return;
    }

    const newTodo = {
      title,
      completed: false
    };

    try {
      const res = await axios.post("http://localhost:3000/libraries", newTodo);
      if (typeof onAdd === "function") {
        onAdd(res.data); // Gửi công việc mới về TodoForm
      }
      setInput("");           // Reset input
      setError("");           // Reset lỗi
      inputRef.current.focus(); // Focus lại input
    } catch (err) {
      console.error("Lỗi khi thêm công việc:", err);
      setError("Đã xảy ra lỗi khi thêm công việc.");
    }
  };

  return (
    <div className="mb-4">
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Thêm công việc mới..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm mới
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default AddTodo;
