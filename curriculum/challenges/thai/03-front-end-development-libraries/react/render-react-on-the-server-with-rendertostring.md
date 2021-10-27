---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

ถึงตอนนี้คุณได้ลองเรนเดอร์ React components บน client และนี้จะเป็นสิ่งที่คุณจะได้ทำบ่อยๆ อย่างไรก็ตามมีบางกรณีการใช้งานที่มันจะเหมาะสมกว่าในการเรนเดอร์ React component บนเซิร์ฟเวอร์ เนื่องจาก React เป็น JavaScript view library และคุณสามารถเรียกใช้ JavaScript บนเซิร์ฟเวอร์ด้วย Node ได้ อันที่จริง React มี `renderToString()` method ที่คุณสามารถใช้ได้เพื่อจุดประสงค์นี้

มีเหตุผลหลักสองประการที่ทำให้การเรนเดอร์บนเซิร์ฟเวอร์อาจถูกใช้ในแอปในการใช้งานจริง ข้อแรกเลยหากไม่ทำเช่นนี้แอป React ของคุณจะประกอบด้วยไฟล์ HTML ที่ค่อนข้างว่างเปล่าและชุด JavaScript ขนาดใหญ่เมื่อโหลดเข้าสู่เบราว์เซอร์ในตอนแรก ซึ่งอาจไม่เหมาะ search engines ที่พยายามจัดทำดัชนีเนื้อหาของหน้าเว็บเพื่อให้ผู้อื่นสามารถค้นหาคุณได้ หากคุณแสดงมาร์กอัป HTML เริ่มต้นบนเซิร์ฟเวอร์และส่งไปยัง client การโหลดหน้าแรกจะมีมาร์กอัปของหน้าเว็บทั้งหมดซึ่ง search engines สามารถรวบรวมข้อมูลได้ ประการที่สองการทำเช่นนี้จะสร้างประสบการณ์การโหลดหน้าแรกที่เร็วขึ้น เนื่องจาก HTML ที่ถูกเรนเดอร์มีขนาดเล็กกว่าโค้ด JavaScript ของแอปทั้งหมด React จะยังคงสามารถจดจำแอปของคุณและจัดการได้หลังจากการโหลดครั้งแรก

# --instructions--

`renderToString()` method มีให้ใน `ReactDOMServer' ซึ่งเป็น global object และ method นี่รับหนึ่ง argument ซึ่งเป็น React element ให้ใช้สิ่งนี้เพื่อเรนเดอร์ `App` เป็น string

# --hints--

`App` component ควรเรนเดอร์เป็น string โดยใช้ `ReactDOMServer.renderToString`

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

// Change code below this line
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

// Change code below this line
ReactDOMServer.renderToString(<App/>);
```
