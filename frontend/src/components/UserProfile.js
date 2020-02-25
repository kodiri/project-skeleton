import React, { Component } from "react";
import Header from "./Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
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
  render() {
    const name = this.props.match.params.name;
    return (
      <div>
        
        <div className="wrapper">
          <Query query={GET_USER_QUERY} variables={{ name }}>
            {({ data }, loading, error) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              const userData = data?.getUser;
              return data?.getUser ? (
                <div>
                  <p>Name: {userData.name}</p>
                  <p>Id: {userData.id}</p>
                  <p>Bio: {userData.bio}</p>
                </div>
              ) : null;
            }}
          </Query>
        </div>
      </div>
    );
  }
}

function ActionBar() {
  return (
    <div className="actionBar">
      <button className="personalPageButton">
        <img src={require("../assets/icons/newpost.svg")} alt="newpost" />
      </button>
      <button className="personalPageButton">
        <img
          src={require("../assets/icons/notification.svg")}
          alt="notification"
        />
      </button>
      <button className="personalPageButton">
        <img src={require("../assets/icons/search.svg")} alt="search" />
      </button>
      <button className="personalPageButton">
        <img src={require("../assets/icons/menu.svg")} alt="menu" />
      </button>
    </div>
  );
}

export default withRouter(UserProfile);
