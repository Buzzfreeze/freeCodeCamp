---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

React component มี method พิเศษหลายตัวที่จะทำงานตาม lifecycle ของ component 
method พวกนี้เรียกว่า lifecycle method หรือ lifecycle hook 
method พวกนี้จะทำให้เราจัดการ component ได้ตามช่วงของ lifecycle เช่น ก่อนการเรนเดอร์ ก่อนการอัปเดต ก่อนการรับ props ก่อนการเลิกต่อเชื่อม ฯลฯ 
นี่คือตัวอย่างของ lifecycle method: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` 
บทเรียนต่อไปจะอธิบายครอบคลุมถึงกรณีการใช้งานพื้นฐานบางส่วนของ lifecycle methods เหล่านี้

**Note:** lifecycle method ชื่อ `componentWillMount` จะถือว่าเป็น method ที่เลิกใช้งานแล้วใน React เวอร์ชัน 16.X และจะถูกถอดออกใน React เวอร์ชัน 17  [(ที่มา)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) 
(React เวอร์ชันล่าสุด ณ 1 มกราคม 2565 คือ 17.0.2)

# --instructions--

method `componentWillMount()` จะถูกเรียกใช้ก่อน method `render()` เมื่อ component ถูกเชื่อมเข้ากับ DOM 
ใน `componentWillMount()` ให้เขียนโค้ดเพื่อ log ข้อมูลอะไรก็ได้ใน console
คุณต้องเปิดคอนโซลในเบราว์เซอร์เพื่อให้เห็น log

# --hints--

`MyComponent` ต้องเรนเดอร์ `div`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

ต้องเรียกใช้ `console.log` ใน `componentWillMount`

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้เหนือบรรทัดนี้
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    console.log('Component is mounting...');
    // แก้ไขโค้เหนือบรรทัดนี้
  }
  render() {
    return <div />
  }
};
```
