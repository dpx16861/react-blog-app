import React, { Component } from 'react';

class Tabs extends Component {
    state = {
        selected: this.props.selected || 0
    };

    handleClick(e, index) {
        e.preventDefault();

        this.setState({
            selected: index
        });
    }

    render() {
        return (
            <div className="tabs">
                <ul className="nav nav-tabs">
                    {
                        this.props.children.map((child, index) => {
                            const activeClass = (this.state.selected === index ? 'active' : '');
                            return (
                                <li className={activeClass} key={index}>
                                    <a href="#" onClick={(e) => this.handleClick(e, index)}>
                                        {child.props.label}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="tab-content">
                    {this.props.children[this.state.selected]}
                </div>
            </div>
        )
    }
}

export default Tabs;
