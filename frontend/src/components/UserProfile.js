import React, { Component, useState } from "react";
import Header from "./Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import cover from '../assets/cover-pictures/cover.jpg'
import Feeds from '../components/Feeds'
import FeedForm from '../components/FeedForm'
import ChatForm from '../components/ChatForm'
import "./styles/UserProfile.css";

const GET_USER_QUERY = gql`
  query($name: String!) {
    getUser(name: $name) {
      name
      id
      bio
    }
  }
`;

class UserProfile extends Component {

  state={ newPost: false, menuVisible: false, chatJoin: false }
  
  toggleNewPost() {
    this.setState({ newPost: !this.state.newPost });
    this.setState({ menuVisible: false });
    this.setState({ chatJoin: false });
  }

  toggleMenuVisible() {
    this.setState({ menuVisible: !this.state.menuVisible });
    this.setState({ newPost: false });
    this.setState({ chatJoin: false });
  }

  toggleChatJoin() {
    this.setState({ chatJoin: !this.state.chatJoin });
    this.setState({ menuVisible: false });
    this.setState({ newPost: false });
  }

  render() {
    const name = this.props.match.params.name;
    const { newPost, menuVisible, chatJoin } = this.state;
    return (
      <div>
        
        <div className="wrapper">
          <Query query={GET_USER_QUERY} variables={{ name }}>
            {({ data }, loading, error) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              const userData = data?.getUser;
              return data?.getUser ? (
                <div className='userProfile-outer-container'>
                  <div className='cover-image'>
                    <img src={cover} alt='' />
                  </div>
                  <div className='details'>
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                  </div>
                  <Feeds />
                  <ActionBar 
                    toggleNewPost={() => this.toggleNewPost()} 
                    toggleMenuVisible={() => this.toggleMenuVisible()}
                    toggleChatJoin={() => this.toggleChatJoin()} />
                  <FeedForm 
                    newPost={newPost} 
                    toggleNewPost={() => this.toggleNewPost()} />
                  <Header  
                    menuVisible={menuVisible} 
                    toggleMenuVisible={() => this.toggleMenuVisible()} />
                  <ChatForm chatJoin={chatJoin} />
                </div>
              ) : null;
            }}
          </Query>
        </div>
      </div>
    );
  }
}

function ActionBar({ toggleNewPost, toggleMenuVisible, toggleChatJoin }) {
  

  return (
    <div className="actionBar">
      <button className="personalPageButton">
        <img 
          src={require("../assets/icons/newpost.svg")} 
          alt="newpost" 
          onClick={toggleNewPost}/>
      </button>
      <button className="personalPageButton">
        <img
          src={require("../assets/icons/chat.svg")}
          alt="chat"
          onClick={toggleChatJoin}/>
      </button>
      {/* <button className="personalPageButton">
        <img src={require("../assets/icons/search.svg")} alt="search" />
      </button> */}
      <button className="personalPageButton menu">
        <img 
          src={require("../assets/icons/menu.svg")} 
          alt="menu" 
          onClick={toggleMenuVisible} />
      </button>
    </div>
  );
}

export default withRouter(UserProfile);
