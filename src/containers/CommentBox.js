import React, {Component} from 'react';
import CommentList from '../components/CommentList';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <h2>Comments</h2>
          <CommentList/>
      </div>
    )
  }
}

export default CommentBox;