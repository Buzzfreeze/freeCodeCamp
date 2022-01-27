---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

ถึงตอนนี้คุณได้ลองเรนเดอร์ React components บน client ไปแล้ว ซึ่งส่วนใหญ่คุณก็จะให้ React ไปเรนเดอร์บน client แบบนี้แหละ
แต่ว่าในบางกรณีคุณก็จะอยากให้ React component ไปเรนเดอร์บนเซิร์ฟเวอร์เลยมากกว่า 
ซึ่งคุณจะให้ React ไปเรนเดอร์บนเซิร์ฟเวอร์ได้ด้วย เพราะ React เป็น library ของ JavaScript ที่ใช้จัดการการแสดงผล แล้วคุณก็ใช้ JavaScript บนเซิร์ฟเวอร์ได้ถ้าใช้ Node
เราจะควบคุมการเรนเดอร์แบบนี้ได้ ถ้าเราใช้ method `renderToString()` ของ React

มีเหตุผลหลักๆสองข้อ ว่าทำไมในบางกรณีเราถึงต้องไปเรนเดอร์ React บนเซิร์ฟเวอร์

1. ข้อแรกเลย ถ้าให้ React ไปเรนเดอร์บน client จะทำให้ในตอนแรกที่เปิดเว็บ แอปของคุณก็จะเป็นแค่ไฟล์ HTML ที่แทบไม่มีอะไรเลย กับโค้ด JavaScript ของแอปทั้งแอป การที่แอปของคุณเป็น HTML โล่งๆแบบนี้ อาจทำให้ search engine (อย่าง Google หรือ Bing) ไม่รู้ว่าหน้าของคุณมีข้อมูลอะไร และจะเอาไปแสดงเป็นผลการค้นหาไม่ได้  
แต่ถ้าคุณทำให้แอปของคุณเรนเดอร์ HTML ตั้งแต่บนเซิร์ฟเวอร์แล้วค่อยส่งไปยัง client จะทำให้ search engine รู้ว่าข้อมูลในหน้านี้เป็นอะไร แล้วก็แสดงเป็นผลการค้นหาให้ผู้ใช้ได้ 
2. ข้อที่สองการให้ React เรนเดอร์ตั้งแต่บนเซิร์ฟเวอร์จะทำให้ผู้ใช้โหลดหน้าของคุณในครั้งแรกเร็วขึ้น เพราะว่า HTML ที่ถูกเรนเดอร์มีขนาดเล็กกว่าโค้ด JavaScript ของแอปทั้งแอป

# --instructions--

ใน `ReactDOMServer` ที่เป็น global object จะมี method `renderToString()` และ method นี่จะรับ argument เป็น React element หนึ่งตัว

ให้ใช้ `ReactDOMServer` กับ method `renderToString()` เพื่อทำให้ `App` กลายเป็น string

# --hints--

component `App` ต้องเรนเดอร์เป็น string โดยใช้ `ReactDOMServer.renderToString`

```js
(getUserInput) =>
  assert(
    getUserInput('index')
      .replace(/ /g, '')
      .includes('ReactDOMServer.renderToString(<App/>)') &&
      Enzyme.mount(React.createElement(App)).children().name() === 'div'
  );
```

# --seed--

## --before-user-code--

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้
ReactDOMServer.renderToString(<App/>);
```
