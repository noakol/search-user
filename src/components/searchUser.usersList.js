import React, { Component } from "react";
import {sortingOptions} from './searchUser.consts';

const TableHeader = ({handleSorting}) => {
  return (
    <tr>
      <th>
        <a onClick={() => handleSorting(sortingOptions.id)}>Id</a>
      </th>
      <th>
        <a onClick={() => handleSorting(sortingOptions.login)}>Login</a>
      </th>
      <th>
        <a onClick={() => handleSorting(sortingOptions.avatar)}>Avatar</a>
      </th>
    </tr>
  );
}


export default class SearchUsers extends Component {
  constructor(props) {
    super(props);
  }

  getTableRows() {
    const {data, config} = this.props;
    if (data && data.items) {
      return data.items.map((user) => {
        return (
        <tr>
          <td>
            {user.id}
          </td>
          <td>
            {user.login}
          </td>
          <td>
            <img class="su-avatar"src={user.avatar_url} alt={`Avatar pic`} />
          </td>
        </tr>);
      })
    }
    return null;
  }
  render() {
    const {handleSorting, data} = this.props;
    if (data) {
      return (
        <div className="su-user-list-container">
          <table>
            <TableHeader handleSorting={handleSorting}/>
            {this.getTableRows()}
          </table>
        </div>
      );
    }
    return null;
  }
}
