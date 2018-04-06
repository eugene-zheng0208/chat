const path = require('path')
const express = require('express')
const app = express()
const http = require('http')
const WebSocket = require('ws')
const { port } = require('./src/config/config.js')
  
// initialize http server
const server = http.createServer(app)

// instatiate the server to websocket
const wss = new WebSocket.Server({ server })

let chatHistory = []
let clients = []

const clearHistory = () => chatHistory = []

const cacheQueriedData = (message, sentences, sentence) => {
  const robotAnswer = sentences

  const sendIn = new Date().toLocaleString("en-US")
  const UserMessage = JSON.stringify({typing: true, sendIn, messageType: 'out', message})
  const RobotMessage = JSON.stringify({typing: false, sendIn, messageType: 'in', message: robotAnswer[sentence]})

  return {
    sendIn,
    UserMessage,
    RobotMessage
  }
}

const clearDuplicateHistory = history => chatHistory.filter((item, i, self) => self.indexOf(item) === i)

// socket presets
wss.on('connection', ws => {
  ws.on('message', message => {
      // here its local
      const sentences = require('./src/sentences')
      const sentence = Math.floor(Math.random() * sentences.length)
      const incomingData = cacheQueriedData(message, sentences, sentence)
      const timeResponse = 500 * Math.ceil(Math.random() * 3)

      // Broadcast to all connected.
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          if(message === '#pdvend') {
            return [clearHistory(), client.send(JSON.stringify({clear: 'clearHistory'}))]
          }

          new Promise((resolve, reject) => resolve(client.send(incomingData.UserMessage)))
            .then(() => chatHistory.push(incomingData.UserMessage))
            .then(() => chatHistory.push(incomingData.RobotMessage))
            .then(() => {
              setTimeout(() => {
                try {
                  client.send(incomingData.RobotMessage)
                } catch(e) {
                  console.log(e)
                }
              }, timeResponse)
            })
        }
    });
  })
  
  ws.on('close', () => {
    ws.close()
    console.log('disconnected')
  })

  // issue of ws package, need this to not throw error
  ws.on('error', () => (''))

  ws.send(JSON.stringify({status: 'ok', message: 'ws connection stabilished', chatHistory: clearDuplicateHistory(chatHistory)}))
})



// configuration of statics file
app.use(express.static(path.resolve(__dirname, 'client/build')))
// route to load react app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')))

server.listen(port, () => console.log(`server running at ${port}`))