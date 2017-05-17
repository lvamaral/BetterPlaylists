import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <input type="text" placeholder="Search for songs..."/>
        </div>
      )
    }
  }

export default SearchBar;
