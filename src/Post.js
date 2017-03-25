import React, { Component } from 'react';
import Moment from 'moment';
import Markdown from './Markdown';

class Post extends Component {
    handleDelete = (postID) => {
        this.props.onPostDelete(postID);
    }

    date() {
        return Moment(this.props.timestamp).fromNow();
    }

    render() {
        const {
            id,
            title,
            content
        } = this.props;

        return (
            <article className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-meta">
                        <h3 className="panel-title">
                            {title}
                        </h3>
                        <span className="panel-time">
                            ({this.date()})
                        </span>
                    </div>


                    <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        onClick={this.handleDelete.bind(null, id)}
                    >
                        Delete
                    </button>
                </div>

                <div className="panel-body">
                    <Markdown content={content} />
                </div>
            </article>
        )
    }
}

export default Post;
