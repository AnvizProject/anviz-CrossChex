import { getToken } from '@/utils/auth'
var websock = null
var globalCallback = null

// 初始化websocket
function initWebSocket() {
  // ws地址 -->这里是你的请求路径
  var ws = 'ws://47.101.160.190:8081'
  // var ws = 'ws://' + location.hostname + ':8081'
  websock = new WebSocket(ws)
  websock.onmessage = function(e) {
    websocketonmessage(e)
  }
  websock.onclose = function(e) {
    websocketclose(e)
  }
  websock.onopen = function() {
    websocketOpen()
  }

  // 连接发生错误的回调方法
  websock.onerror = function() {
    console.log('WebSocket连接发生错误')
  }
}

// 实际调用的方法
function sendSock(agentData, callback) {
  globalCallback = callback
  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    websocketsend(agentData)
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function() {
      sendSock(agentData, callback)
    }, 10000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function() {
      sendSock(agentData, callback)
    }, 10000)
  }
}

// 数据接收
function websocketonmessage(e) {
  globalCallback(JSON.parse(e.data))
  console.log(e.data)
}

// 数据发送
function websocketsend(agentData) {
  websock.send(JSON.stringify(agentData))
}

// 关闭
function websocketclose(e) {
  console.log('connection closed (' + e.code + ')')
}

// 接收回调函数返回数据的方法
function getConfigResult(res) {
  // console.log(res)
}

// 创建 websocket 连接
function websocketOpen(e) {
  console.log('连接成功')
  const token = getToken()
  websock.send('{"cmd":"login","data":{"access_token":"' + token + '"}}')
  // 心跳包
  setInterval(function() {
    sendSock(JSON.parse('{"cmd":"ping"}'), getConfigResult)
  }, 30000)
}
initWebSocket()

// 将方法暴露出去
export {
  sendSock
}
