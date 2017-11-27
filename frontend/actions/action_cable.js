import { receiveMessage } from './message.js';

export const setSocket = (channelName) => (dispatch) => {
  // debugger;
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(channelName, dispatch);
};

export const removeSocket = () => {
  window.App.cable.subscriptions.remove(window.App.channel);
};

export const addSocket = (channelName, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'ChannelChannel',
    channel_name: channelName
  }, {
    connected: () => {
      console.log("connected");
    },
    disconnected: () => {},
    received: (data) => {
      if (data.message) {
        dispatch(receiveMessage(data.message));
      }
    }
  });
};
