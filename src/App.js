import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onChange(editorState) {
    this.setState({
      editorState: editorState
    });
  }
  render() {
    return (
      <div className="blog-editor">
        <div>Draft JS Test </div>
        <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default App;
