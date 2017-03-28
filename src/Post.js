import React, { Component } from 'react';
import Moment from 'moment';

import Markdown from './Markdown';

class Post extends Component {
    state = {
        isExpanded: false
    }

    handleDelete = (postID) => {
        this.props.onPostDelete(postID);
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isExpanded: !prevState.isExpanded
            }
        });
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

        const expandedClass = (this.state.isExpanded ? 'is-expanded' : '');

        return (
            <article className={`panel panel-default ${expandedClass}`}>
                <div className="panel-heading" onClick={this.handleClick}>
                    <h3 className="panel-title">
                        {title}
                    </h3>
                    <span className="panel-time">
                        ({this.date()})
                    </span>
                </div>

                <div className="panel-body">
                    <Markdown content={content} />
                </div>

                <div className="panel-footer text-right">
                    <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        onClick={this.handleDelete.bind(null, id)}
                    >
                        Delete
                    </button>
                </div>
            </article>
        )
    }
}

export default Post;
