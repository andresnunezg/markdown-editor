import React from 'react'

import Editor from './components/Editor';
import Previewer from './components/Previewer';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMarkdown: '',
    };
  }
  handleChangeEditor = (e) => {
    this.setState({
      textMarkdown: e.target.value,
    })
  }
  render () {
    return (
      <div className="App">
        <div className="Main__container">
          <Editor
           handleChangeEditor={this.handleChangeEditor}
           textMarkdown={this.state.textMarkdown}
          />
          <Previewer textMarkdown={this.state.textMarkdown} />
        </div>
      </div>
    )
  };
}

export default App;