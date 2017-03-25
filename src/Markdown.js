import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Markdown extends Component {
    createMarkup = (content) => {
        const markdown = new Remarkable();
        return {__html: markdown.render(content)};
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.createMarkup(this.props.content)} />
        )
    }
}


export default Markdown;
