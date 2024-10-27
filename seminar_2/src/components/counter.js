// Задание 1 (тайминг 25 минут)
// ● Создать компонент Counter, который отображает кнопку и
// число.
// ● Число увеличивается на 1 каждый раз, когда пользователь
// нажимает на кнопку.
import {useState} from "react";
function Counter() {
    const [count, setCount] = useState(7)
    const updateCount = () => { 
        setCount(count +1);
    }
    return ( 
        <div>
            
            <button onClick={updateCount}>click +</button>
            <p>{count}</p>
        </div>
     );
}

export default Counter;