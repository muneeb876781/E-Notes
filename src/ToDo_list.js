import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import ToDoLiatsItems from './ToDoListsItems';
import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let gretting = '';
const CurruntTime = new Date();
CurruntTime.getHours();

if (CurruntTime > '1' && CurruntTime <= '12') {
    gretting = 'good morning';
} else if (CurruntTime > '12' && CurruntTime <= '19') {
    gretting = 'good evening';
}
else {
    gretting = 'good night';
}

function ToDo_list() {
    const [items, setitens] = useState('');
    const [allItems, setallItems] = useState([]);
    const [toggleButton, settoggleButton] = useState(true);
    const [isEditItem, setisEditItem] = useState(null);



    function eventHandler(event) {
        setitens(event.target.value)
    };

    function onAdd() {
        if (!items) {
            alert('please enter any item')
        }
        else if (items && !toggleButton) {
            setallItems(
                allItems.map((elements) => {
                    if (elements.id === isEditItem) {
                        return { ...elements, name: items }
                    }
                    return elements;
                })
            )
            settoggleButton(true);
            setitens('');
            setisEditItem(null);
        }

        else {
            setallItems((oldItems) => {
                const allitemmsss = { id: new Date().getTime().toString(), name: items }
                return [...oldItems, allitemmsss];
            });
            setitens('');
        }
    };

    function deleteItem(index) {
        setallItems((oldItems) => {
            return oldItems.filter((arrElement) => {
                return index !== arrElement.id;
            })
        })
    }

    function removeAll() {
        setallItems([]);
    }

    function editItem(id) {
        const newEditItem = allItems.find((elements) => {
            return elements.id === id
        })
        console.log('clicked');
        settoggleButton(false);
        setitens(newEditItem.name);
        setisEditItem(id);
    }

    return (
        <>
            <div className="main">
                <div className="content">
                    <h1>HELLO!! <spam>{gretting}</spam></h1>
                    <p>This is a basic E Notes App</p>
                    <button onClick={() => {
                        alert('use add items feild to enter items')
                    }}>GET STARTED</button>
                </div>
                <div className="center">
                    <br />
                    <h1>E Notes</h1>
                    <br />
                    <input type="text"
                        placeholder="Add an Item"
                        onChange={eventHandler}
                        value={items} />
                    {
                        toggleButton ? <i title="add item" onClick={onAdd} className="fa fa-plus" area-hidden="true"></i> :
                            <i title="edit item" onClick={onAdd} className="fa fa-edit edit1" area-hidden="true"></i>
                    }
                    <ol>
                        {allItems.map((allItemsValue) => {
                            return (
                                <div className="todo_style">
                                    <i title="delete item" onClick={() => {
                                        deleteItem(allItemsValue.id)
                                    }} className="fa fa-trash" area-hidden="true"></i>
                                    <i title="edit item" onClick={() => {
                                        editItem(allItemsValue.id)
                                    }} className="fa fa-edit" area-hidden="true"></i>
                                    <li>{allItemsValue.name}</li>

                                </div>
                                // <ToDoLiatsItems
                                // text = {allItemsValue.name}
                                // id = {allItemsValue.id}
                                // // key = {index}
                                // onselect = {deleteItem}
                                // />
                            );
                        })}
                    </ol>
                    <button title='remove all items' className='remove' onClick={removeAll}>REMOVE ALL</button>
                </div>
            </div>
        </>
    );
};

export default ToDo_list;