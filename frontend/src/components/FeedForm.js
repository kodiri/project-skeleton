import React from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import "./styles/FeedForm.css";
// import Listitems from "./Listitems";

const NEW_POST_MUTATION = gql`
  mutation NEW_POST_MUTATION($author: String!, $text: String!) {
    newPost(author: $author, text: $text) {
      author
      text
    }
  }
`;

export default class FeedForm extends React.Component {

  constructor(props) {
    super(props);
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
                <div className={`userFeedFormContainer${this.props.newPost ? '' : ' hidden'}`}>
                  <form method="post"
                    className='userFeedForm'
                    onSubmit={async e => {
                      e.preventDefault();
                      const author = data?.me.name;
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
                    <button 
                      type="submit"
                      onClick={() => this.props.toggleNewPost()}>
                      <h3>Post</h3>
                    </button>
                  </form>
                </div>
              )
            }}
          </Mutation>
        )}
      </User>
      // <div className="FeedForm">
      //   <header>
      //     <form
      //       className="userFeedForm"
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
