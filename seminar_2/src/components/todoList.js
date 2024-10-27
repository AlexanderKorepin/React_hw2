// Задание 3 (тайминг 40 минут)
// ● Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.
import { useState } from "react";

function TodoList() {
    //состояние для хранения списка дел
    const [todos, setTodos] = useState([]);
    //Сщстщяние для хранения текущего ввода в текстовом поле
    const [currentTodo, setCurrentTodo] = useState("");
    //Обработчик добавления нового дела в список
    const addTodo = (event) => {
        event.preventDefault();//Предотвращаем перезагрузку формы
        if (!currentTodo.trim()) return;//игнорируем пустые строки
        setTodos([...todos, currentTodo]);//Добавляем текущее дело в список
        setCurrentTodo('');//Очищаем текстовое поле
    };
    //Обработчик измененения текстового поля
    const handleInputChange = (event) => {
        setCurrentTodo(event.target.value);
    }


    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text"
                    value={currentTodo}
                    onChange={handleInputChange}
                />
                <button type="submit">Добавить</button>
            </form>
            <ul>{todos.map((todo, index) => (
                <li key={index}>{todo}</li>//используем индекс как ключ
            ))}
            </ul>
        </div>
    );
}

export default TodoList;