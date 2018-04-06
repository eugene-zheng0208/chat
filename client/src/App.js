import React, { Component } from 'react';
import './app.css'

import ChatHeader from './components/header/ChatHeader'
import ChatMessageList from './components/messageList/ChatMessageList'
import ChatFeatures from './components/chat/ChatFeatures'
import HeaderDescription from './components/header/headerDescription/HeaderDescription';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="chat">

          {/* COMPONENT: CHAT HEADER & DESCRIPTION */}
          <ChatHeader>
            <HeaderDescription/>
          </ChatHeader>

          {/* COMPONENT: CHAT MESSAGELIST */}
          <ChatMessageList/>

          {/* COMPONENT: CHAT MESSAGE CONTROL */}
          <ChatFeatures/>

        </div>
      </div>
    );
  }
}

export default App;