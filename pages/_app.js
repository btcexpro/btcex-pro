import React from 'react'
import App from 'next/app';
import io from 'socket.io-client';
import { appWithTranslation } from '../i18n';


class MyApp extends App {
  componentDidMount() {
    const socket = io();
    socket.on('connection', (socket) => {
      console.log("Connected with server");
    });
    socket.on('update', () => {
        
    });
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp);
