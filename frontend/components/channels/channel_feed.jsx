import React, { Component } from 'react';
import Message from '../message/message';

class ChannelFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
  }

  componentWillReceiveProps(nextProps) {
    const oldChannelId = this.props.match.params.channelId;
    const currentChannelId = nextProps.match.params.channelId;
    if (oldChannelId !== currentChannelId) {
      Promise.all([
        this.props.addSubscriberToChannel(currentChannelId).then(
        () => this.props.fetchChannelUsers(currentChannelId)),
        this.props.fetchChannelMessages(currentChannelId),
        this.props.fetchChannels(),
      ]).then(() => this.props.setSocket(
        this.props.channels[currentChannelId].channel_name))
        .then(() => this.setState({loading: false}));
    }

  }

  componentWillMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.addSubscriberToChannel(channelId).then(
      () => this.props.fetchChannelUsers(channelId)),
      this.props.fetchChannelMessages(channelId),
      this.props.fetchChannels()
    ]).then(() => this.props.setSocket(
      this.props.channels[channelId].channel_name))
      .then(() => this.setState({loading: false}));
  }


  render () {
    if (!this.state.loading) {
      return (
        <div className='feed'>
          <h4 className='channel-title'>{`#${this.props.channels[this.props.match.params.channelId].channel_name}`.toLowerCase()}</h4>
          <div className='message-list'>
            <ul>
              {
                this.props.messages.map(
                  (message) => {
                    if (this.props.match.params.channelId == message.interface_id) {
                      return (
                        <Message
                        key={message.id}
                        user={this.props.users[message.user_id]}
                        message={message}
                        />);
                    } else {
                      return null;
                    }
                  })
                }
            </ul>
          </div>
        </div>
        );
    } else {
      return (
        <div>
        Loading...
      </div>
      );
    }
  }

}
export default ChannelFeed;
