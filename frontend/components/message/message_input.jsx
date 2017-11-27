import React, { Component } from 'react';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannelMessage(this.state).then(
      () => this.setState({
      body: ''
      })
    );
  }

  updateMessage(e) {
    this.setState({
      body: e.target.value
    });
  }

  render () {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Message"
          onChange={e => this.updateMessage(e)}
        />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}