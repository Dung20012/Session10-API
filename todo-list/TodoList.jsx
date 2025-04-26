import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = [
        { id: 1, text: "Quét nhà", completed: false },
        { id: 2, text: "Giặt quần áo", completed: true },
        { id: 3, text: "Nấu cơm", completed: false },
    ];

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
