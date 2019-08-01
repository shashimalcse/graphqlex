import React, { Component } from 'react'

export default class Link extends Component {
    render() {
        return (
            <div>
                {this.props.link.description} ({this.props.link.url})
            </div>
        )
    }
}
