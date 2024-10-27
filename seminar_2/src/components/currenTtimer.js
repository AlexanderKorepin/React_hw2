// Задание 4* (тайминг 20 минут)
// ● Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

import { useState, useEffect } from'react';

function Timer() {
    const [time, setTime] = useState(new Date());
     // Использовать useState для хранения текущего времени
     

    useEffect(() =>{
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    return ( 
         // Вывод текущего времени в реальном времени
         // Использовать setInterval для установки и очистки интервала
         // Выводить текущее время в консоль для демонстрации
         // Использовать useState для хранения текущего времени
         // Использовать useEffect для установки и очистки интервала
         <div>
            <p>Время: {time.toLocaleTimeString()}</p>
         </div>
         
        
     );
}

export default Timer;