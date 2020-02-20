import React from "react";
import "./styles/Wall.css";
import Listitems from "./Listitems";

export default class Wall extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: { text: e.target.value, key: Date.now() }
    });
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
          text: "",
          key: ""
        }
      });
    }
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ items: items });
  }

  deleteItem(key){
      const filteredItems = this.state.items.filter(item => item.key !== key)
      this.setState({items: filteredItems})
  }

  render() {
    return (
      <div className="Wall">
        <header>
          <form 
           className="userWall" 
           onSubmit={this.addItem}>
            <input
              className="userInput"
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button
              style={{
                backgroundColor: "rgb(202,156,24)",
                height: "50px",
                width: "80px",
                color: "white",
              }}
              type="submit"
            >
              Post
            </button>
          </form>
        </header>
        <Listitems items={this.state.items} 
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate} />

      </div>
    );
  }
}
