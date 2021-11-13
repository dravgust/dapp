import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../action";

const Items = () => {
    const dispatch = useDispatch();

    const formHandler = (event) =>{
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addItem(data.id.value, data.title.value));
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name="id" defaultValue="0" />
                </div>
                <div>
                    <input type="text" name="title" defaultValue="default" />
                </div>
                <div>
                    <button type="submit">Add new item</button>
                </div>
            </form>
        </div>
    )
}

export default Items;