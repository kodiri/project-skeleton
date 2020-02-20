import React from 'react';
import './styles/Wall.css'

class Wall extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: [],
            currentItem: { text: '', key: '' }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(e) {
        this.setState({
            currentItem: { text: e.target.value, key: Date.now() }
        })
    }

    addItem(e) {
        e.preventDefault(); //prevent default behavior//
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem.text !== "") {
            const newItems = [newItem, ...this.state.items];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    render() {
        return (
            <div className='Wall'>
                <header>
                    <form className='userWall' onSubmit={this.addItem}>
                        <input type='text' placeholder='Enter Text'
                            value={this.state.currentItem.text}
                            onChange={this.handleInput} />
                        <button
                            style={{ backgroundColor: 'rgb(202,156,24)', height: '50px', width: '80px', color: 'white' }}
                            type='submit'>Post</button>
                    </form>
                </header>
                <ListItems items={this.state.items} />
            </div>
        );
    }
}

function ListItems(props) {
    const items = props.items;
    const listItems = items
        .map(item => {
            return (
                <div className='list' key='item.key'>
                    <p>{item.text}</p>
                </div>)
        })

    return (
        <div>{listItems}</div>
    );
}


export default Wall;