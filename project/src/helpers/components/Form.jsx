import { useState } from "react";

const Form = ({setValueEmoji}) => {
    const [value, setValue] =  useState('');
    //отслеживание изменений в форме
    //handleSearch - обработка поиска
    const handleSearch = e => {
        //Основной способ – это воспользоваться объектом event.
        //Для отмены действия браузера существует стандартный метод event.preventDefault().
        //
        e.preventDefault();
        setValueEmoji(value);
         console.log(value);
    }

    return (
        <section className="form">
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="some emoji word..." 
                    //при изменени данных мы устанавливаем для е значение 
                    onChange={e => setValue(e.target.value)}
                    />
            </form>
        </section>
    );
}

export default Form;