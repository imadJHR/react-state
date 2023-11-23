import React, { Component } from 'react';
import './App.css'


class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      show: true,
      person: {
        fullName: 'imad johar',
        bio: 'Full Stack Developer',
        imgSrc: '',
        profession: 'Software Engineer',
      },
    };
 }

 componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ timeElapsed: this.state.timeElapsed + 1 }),
      1000
    );
 }

 componentWillUnmount() {
    clearInterval(this.interval);
 }

 toggleShow = () => {
    this.setState({ show: !this.state.show });
 };

 render() {
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.show && (
          <div className="person-profile">
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h2>{this.state.person.fullName}</h2>
            <h3>{this.state.person.profession}</h3>
            <p>{this.state.person.bio}</p>
          </div>
        )}
        <p>Time elapsed since last mount: {this.state.timeElapsed} seconds</p>
      </div>
    );
 }
}

export default App;