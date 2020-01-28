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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value})
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  // handleSubmit() good to write down what a function actually does
  // 1 Validation
  // 2 Update list with new comment
  // 3 Reset form's field

  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if ( !text || !author ) { // this is one way of validating form submit to have both fields
      return
    }
    this.props.onCommentSubmit({
      author: author,
      text: text
    })
    this.setState({author: '', text: ''})
  }

  render() {
    return(
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Author name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          required
        />
        <input
          type="text"
          placeholder="comment"
          value={this.state.text}
          onChange={this.handleTextChange}
          required
        />
        <input type="submit" value="Add Comment"/>
      </form>
    );
  }
}
export default CommentForm
