import React from 'react';
import './styles/Feeds.css'
import Listitems from './Listitems'

export default class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(newIndex) {
    const items = this.state.items;
    const newItems = items.filter((item, index) => index !== newIndex);
    this.setState({ items: newItems });
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
      <div>
        <header>
          <div className={`userFeedFormContainer${this.props.newPost ? '' : ' hidden'}`} >
            <form 
              className='userFeedForm'
              onSubmit={this.addItem}>
              <div className='user-container'>
                <textarea 
                  className="userInput"
                  type='text' 
                  placeholder='Enter Text'
                  value={this.state.currentItem.text}
                  onChange={this.handleInput} 
                  name="text"
                  rows="3"/>
              </div>
              <button
                type='submit'
                onClick={() => this.props.toggleNewPost()}>
                <h3>Post</h3>
              </button>
            </form>
          </div>
        </header>
        <Listitems items={this.state.items} deleteItem={(index) => this.deleteItem(index)} />
      </div>
    );
  }
}


// Old one?

// import React from "react";
// import "./styles/Wall.css";
// import Listitems from "./Listitems";

// export default class Wall extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [],
//       currentItem: { text: "", key: "" }
//     };

//     this.handleInput = this.handleInput.bind(this);
//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
//   }

//   handleInput(e) {
//     this.setState({
//       currentItem: { text: e.target.value, key: Date.now() }
//     });
//   }

//   addItem(e) {
//     e.preventDefault(); //prevent default behavior//
//     const newItem = this.state.currentItem;
//     console.log(newItem);
//     if (newItem.text !== "") {
//       const newItems = [newItem, ...this.state.items];
//       this.setState({
//         items: newItems,
//         currentItem: {
//           text: "",
//           key: ""
//         }
//       });
//     }
//   }

//   setUpdate(text, key) {
//     const items = this.state.items;
//     items.map(item => {
//       if (item.key === key) {
//         item.text = text;
//       }
//     });
//     this.setState({ items: items });
//   }

//   deleteItem(key) {
//     const filteredItems = this.state.items.filter(item => item.key !== key)
//     this.setState({ items: filteredItems })
//   }

//   render() {
//     return (
//       <div className="Wall">
//         <header>
//           <form
//             className="userWall"
//             onSubmit={this.addItem}>
//             <div className='user-container'>
//               <textarea
//                 className="userInput"
//                 type="text"
//                 placeholder="Enter Text"
//                 value={this.state.currentItem.text}
//                 onChange={this.handleInput}
//                 rows="3"
//               />
//               <button
//                 type="submit"
//               >
//                 Post
//             </button>
//             </div>
//           </form>
//         </header>
//         <Listitems items={this.state.items}
//           deleteItem={this.deleteItem}
//           setUpdate={this.setUpdate} />

//       </div>
//     );
//   }
// }
