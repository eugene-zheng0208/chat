const socket = new WebSocket('ws://localhost:3000/')

socket.onclose = () => {
    console.log('Lost connection!')
    socket.close()
}
socket.onerror = (err) => {
    console.log('Error!: ', err)
}

export default socket