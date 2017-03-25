import React, { Component } from 'react';
import Markdown from './Markdown';

class Editor extends Component {
    state = {
        title: '',
        content: ''
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handlePostAdd = (e) => {
        e.preventDefault();

        if (this.state.title && this.state.content) {
            this.props.onPostAdd({ ...this.state, id: Date.now(), timestamp: new Date() });
            this.resetState();
        }
    }

    resetState() {
        this.setState({
            title: '',
            content: ''
        });
    }

    render() {
        const {
            title,
            content
        } = this.state;

        return (
            <form
                className="editor container"
                onSubmit={this.handlePostAdd}
            >
                <div className="tabs">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#">Write</a>
                        </li>
                        <li>
                            <a href="#">Preview</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active">
                            <div className="form-group">
                                <input
                                    className="editor-input form-control"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    autoFocus
                                    onChange={this.handleTitleChange}
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    className="editor-textarea form-control"
                                    rows={10}
                                    placeholder="Tell your story..."
                                    value={content}
                                    onChange={this.handleContentChange}
                                />
                            </div>
                        </div>

                        <div className="tab-pane">
                            {title && <h1>{title}</h1>}
                            {content && <Markdown content={content} />}
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Publish
                    </button>
                </div>
            </form>
        )
    }
}

export default Editor;
