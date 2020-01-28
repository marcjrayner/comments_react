import React, {Component} from 'react';

class CommentForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this); // CONTEXT = constructor and render cannot see each other at all, in order for the methods in the form, we need to pass it into the constructor, bind them into the constructor in order for them to work.
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return(
      <form className='comment-form'>
        <input
          type="text"
          placeholder="Author name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="comment"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Add Comment"/>
      </form>
    );
  }
}
export default CommentForm
