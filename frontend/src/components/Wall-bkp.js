import React from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import "./styles/Wall.css";
// import Listitems from "./Listitems";

const NEW_POST_MUTATION = gql`
  mutation NEW_POST_MUTATION($author: String!, $text: String!) {
    newPost(author: $author, text: $text) {
      author
      text
    }
  }
`;

export default class Wall extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "",
      author: ""
    };
  }

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <User>
        {({ data }) => (
          <Mutation mutation={NEW_POST_MUTATION} variables={this.state}>
            {(newPost, { error, loading }) => {
              return (
                <form method="post"
                  className="userWall"
                  onSubmit={async e => {
                    e.preventDefault();
                    const author = data.me.name;
                    this.setState({ author });
                    await newPost();
                  }}>
                  <div className='user-container'>
                    <textarea
                      className="userInput"
                      type="text"
                      placeholder="Enter Text"
                      value={this.state.text}
                      onChange={this.saveToState}
                      name="text"
                      rows="3"
                    />
                  </div>
                  <button type="submit">Post</button>
                </form>
              )
            }}
          </Mutation>
        )}
      </User>
      // <div className="Wall">
      //   <header>
      //     <form
      //       className="userWall"
      //       onSubmit={this.addItem}>
      //       <div className='user-container'>
      //         <textarea
      //           className="userInput"
      //           type="text"
      //           placeholder="Enter Text"
      //           value={this.state.currentItem.text}
      //           onChange={this.handleInput}
      //           rows="3"
      //         />
      //         <button
      //           type="submit"
      //         >
      //           Post
      //       </button>
      //       </div>
      //     </form>
      //   </header>
      //   <Listitems items={this.state.items}
      //     deleteItem={this.deleteItem}
      //     setUpdate={this.setUpdate} />

      // </div>
    );
  }
}
