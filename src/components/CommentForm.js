import React, {Component} from 'react';

class CommentForm extends Component{
  render() {
    return(
      <form className='comment-form'>
        <input type="text" placeholder="Author name"/>
        <input type="text" placeholder="comment"/>
        <input type="submit" value="Add Comment"/>
      </form>
    ;
  }
}
export default CommentForm
