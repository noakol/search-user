import React, { Component } from "react";
import { BaseApi, Services, Actions } from "../sdk";
import UsersList from "./searchUser.usersList";
import config from './searchUser.config';
import consts from './searchUser.consts';

const ErrorView = ({ username }) => {
  const text = `Sorry we couldn't find any results for ${username}`;
  return <div className="su-errorView">{text}</div>;
};

export default class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.serviceRequest = new BaseApi(config);
    this.state = {
      username: ""
    };
  }

  handleSorting = async (sortBy) => {
    const query = {
      params: {
        q: this.state.currentUsername,
        sort: sortBy,
        order: 'desc'
      }
    };
    try {
      const userListSortedResponse = await Actions.getUsers(
        this.serviceRequest,
        Services.getUsersListUrl,
        query
      );

      this.setState({
        ...this.state,
        userListData: userListSortedResponse
      });
    } catch (error) {
      this.setState({
        ...this.state,
        showErrorView: true
      });
    }
  }

  handleSearchAction = async () => {
    const query = {
      params: {
        q: this.state.username
      }
    };
    try {
      const userListResponse = await Actions.getUsers(
        this.serviceRequest,
        Services.getUsersListUrl,
        query
      );

      this.setState({
        username: '',
        currentUsername: this.state.username,
        userListData: userListResponse
      });
    } catch (error) {
      this.setState({
        ...this.state,
        showErrorView: true
      });
    }
  };

  handleInputChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const { username, showErrorView, userListData } = this.state;
    if (showErrorView) {
      return <ErrorView username={username} />;
    }
    return (
      <div className="su-container">
        <h1>Search For GitHub Users!</h1>
        <label>
          Enter user name
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSearchAction}>search</button>
        </label>
        <div className="su-users-list">
          <UsersList 
            data={userListData}
            config={config}
            handleSorting={this.handleSorting} />
        </div>
      </div>
    );
  }
}
