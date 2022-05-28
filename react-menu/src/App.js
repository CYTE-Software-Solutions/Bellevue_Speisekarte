import './App.css';

import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // State of your application
  state = {
    menus: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer fbb1434fc7733f02531cd3bf29ccd22991cf71bd5ed163127ada159a80acc5e05ec24d1abcfc1f5204f4cdea3bb34d532562da805808b0e8d8d46ce14a305ecfbba95417d44f5a108a275f9965060ecf6f230badaa4694288bb2a176cf95c86b1cd71b6611ccd8bd8b19da878c296f5d08ad851ae6a6819a7a23187d4b6dfe1d` }
    };
      const response = await axios.get('http://localhost:1337/api/menus',config);
      console.log(response.data);
      this.setState({ menus: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, restaurant } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          
          {
            this.state.menus.map(restaurant => (
              <li key={restaurant.id}>{restaurant.attributes.Name}</li>
            ))
          /*this.state.menus.data.map(restaurant => (
            <li key={restaurant.id}>{restaurant.Name}</li>
          ))*/}
        </ul>
      </div>
    );
  }
}

export default App;
