# Web Sockets

可以创建和服务器进行双向会话的高级技术，取代了曾经使用的轮询方法。
> demo请参见：[https://github.com/Raaabbit/MyBlog/tree/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/WebSockets](https://github.com/Raaabbit/MyBlog/tree/master/docs/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/WebSockets)

![Ajax轮询与WebSocket](./title.png)
## API

- WebSocket：用于连接WebSocket服务器的对象
- CloseEvent：关闭连接时WebSocket对象触发的事件
- MessageEvent：从服务器获取到消息的时候，WebSocket触发的事件


## WebSocket对象

WebSocket对象用于创建和管理WebSockets连接，并通过这个连接发送和接受

参数：
- url：要连接的url,ws或wss
- protocols：协议名字字符串或数组，子协议，默认为空

异常：
- SECURITY_ERR：表示试图连接的端口被屏蔽

方法：
- WebSocket.close([code,[reason]])
  - 关闭WebSocket连接或停止正在进行的连接请求
  - 参数
    - code：关闭连接的状态号，默认为1000
    - reason：字符串，连接被关闭的原因
  - 异常
    - INVALID_ACCESS_ERR：无效的code
    - SYNTAX_ERR：reason太长

- WebSocket.send(data)
  - 通过连接向服务器发送数据
  - 参数
    - data：发送的数据
  - 异常
    - INVALID_STATE_ERR：当前的连接状态不是open
    - SYNTAX_ERR：数据不合法

属性：

| 属性名         | 类型          | 描述                                              |
| :------------- | ------------- | ------------------------------------------------- |
| binaryType     | string        | 传输的二进制内容类型，blob/arrayBuffer            |
| bufferedAmount | long          | 调用send方法后，队列中等等待数据的大小，发送后为0 |
| extensions     | string        | 服务器选定的扩展                                  |
| onclose        | EventListener | 监听close                                         |
| onerror        | EventListener | 监听error                                         |
| onmessage      | EventListener | 监听message，消息到达触发                         |
| onopen         | EventListener | 监听连接打开事件，readyState为open时触发          |
| protpcol       | string        | 服务器选定的子协议的字符串                        |
| readyState     | short         | 连接的当前状态                                    |
| url            | string        | 传入构造器的url                                   |

readyState常量：

| 常量       | 值   | 描述                     |
| ---------- | ---- | ------------------------ |
| CONNECTING | 0    | 连接尚未开启             |
| OPEN       | 1    | 连接已经开启，准备通信   |
| CLOSING    | 2    | 连接正在关闭             |
| CLOSED     | 3    | 连接已经关闭或者无法建立 |

## 例子

url来自http://www.blue-zero.com/WebSocket/

```javascript
// Create WebSocket connection.
const socket = new WebSocket('ws://121.40.165.18:8800');

// Connection opened
socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});

// Listen for closed
socket.addEventListener('close', function (event) {
  console.log('Message from server ', event.data);
});
```

同时WebSocket需要服务器端支持，比如Node.js端可以使用以下常用的库：

- Socket.IO
- WebSocket-Node
- ws

## Socket.IO例
### 客户端
```javascript
let socket = io('http://localhost');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('clientMsg', { my: 'data' });
});
```
### 服务端
首先要安装socket.io模块
```
npm install socket.io --save
```
> 或者在本目录下执行 `npm install`

在 `serve.js` 中粘贴如下代码
```javascript
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('clientMsg', function (data) {
    console.log(data);
  });
});
```

执行 `node serve.js`并访问`http://localhost:80`

关于socket.io的其他API，文档以后再补充