import React from 'react';

const List = (data) => {
    console.log(data);
    return (
        <div>
            <ul>
                {data.items.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default List;