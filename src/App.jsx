import React, { Component } from 'react';


import Input from './Input.jsx'
import Output from './Output.jsx'
import axios from 'axios';
import styles from './styles/App.css'
import headerPic from './lyft.jpg'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string_to_cut: '',
      return_string: '',
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      string_to_cut: e.target.value,

    });
  }

  submitHandler(event) {
    event.preventDefault();
    const input = {
      string_to_cut: this.state.string_to_cut

    }

    axios.post('//localhost:3001/test', input)

      .then((res) => {
        console.log(input)
        console.log(res.data)
        console.log(res.data.return_string)
        // const updatedString = res.data.return_string
        // console.log(updatedString)

        this.setState({ return_string: res.data.return_string })

      })
      .catch((error) => {
        console.log('error')
      })

  }



  render() {

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.imageWrap}>
            <img className={styles.headerPic} src={headerPic} />
          </div>
          <Input submit={this.submitHandler} onChange={this.handleChange} input={this.state.string_to_cut} />
          <Output alteredStr={this.state.return_string} />
        </div>
      </div>
    );
  }
}

export default App;