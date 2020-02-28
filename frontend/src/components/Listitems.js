import React from 'react';
import './styles/Feeds.css';


function ListItems(props) {
    const items = props.items;
    const listItems = items
        .map(item => {
            return (
                <div className='list' key={item.key}>
                    <p>
                        <textarea className='input' type="text"
                            id={item.key}
                            value={item.text}
                            onChange={(e) => { props.setUpdate(e.target.value, item.key) }}
                        />
                        <button onClick={() => props.deleteItem(item.key)}>delete</button>
                    </p>

                </div>)
        })

    return (
        <div>{listItems}</div>

    );
}

export default ListItems;