import React, { Component } from 'react';

export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = { liked: props.liked };
  }

  onClickLike() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.title}!</h1>
        <button onClick={() => this.onClickLike()}>{this.state.liked ? "いいね済み" : "いいね！" }</button>
      </div>
    );
  }
}
