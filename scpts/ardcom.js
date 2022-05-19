const { SerialPort } = require('serialport')

const port = new SerialPort({
  path: 'COM12',
  baudRate: 9600,
  autoOpen: false,
  endOnClose: false
})

function checar() {
  try {
    var cont = Object.keys(port.port).length
    if (cont > 0) {
      return true
    }
  } catch (msg) {
    return false
  }
}

function starcom() {
  var porta = document.getElementById('porta').value
  if (porta != '') {
    port.settings.path = porta
    port.open()
  }
}

function writemsg(msg) {
  if (checar()) {
    console.log('enviou')
    console.log(msg)
    port.write(msg, function (err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
    
    // Open errors will be emitted as an error event
    port.on('error', function (err) {
      console.log('Error: ', err.message)
    })
  
  }
}

function writevelo() {
  if (checar()) {
    const fader = ['e','f','g','h','i','j','k','l','m','n','o']
    var slider = document.getElementById('slidervelo').value
    var msg = fader[slider]
    port.write(msg, function (err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
    console.log('enviou')

    // Open errors will be emitted as an error event
    port.on('error', function (err) {
      console.log('Error: ', err.message)
    })
  }
}

function closecom(port) {
  if (checar()) {
    port.close()
  }
}
