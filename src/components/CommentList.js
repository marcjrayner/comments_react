import React, {Component} from 'react';
import Comment from './Comment'

class CommentList extends Component {
  render() {
    return(
      <div className = "comment-list">
        <Comment author="Colin">React is a great framework</Comment>
        <Comment author="Sandy">I am dreaming in React</Comment>
      </div>
    )
  }
}

export default CommentList;