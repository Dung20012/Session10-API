import React from 'react'


export default function FooterActions() {
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
        if (confirmDelete) {
          
          deleteTodo(id);
        }
      };
      
    return (
        <div className="flex justify-between">
            <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 cursor-pointer">
                Xóa công việc hoàn thành
            </button>
            <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 cursor-pointer">
                Xóa tất cả công việc
            </button>
        </div>
    )
}
