---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

React components มี method พิเศษหลายอย่างที่ให้โอกาสในการดำเนินการ ณ จุดเฉพาะใน lifecycle ของ component สิ่งเหล่านี้เรียกว่า lifecycle methods หรือ lifecycle hooks ที่จะช่วยให้คุณสามารถจับ components ได้ในบางช่วงเวลา ซึ่งอาจจะเกิดขึ้นก่อนเรนเดอร์ ก่อนอัปเดต ก่อนรับ props ก่อนเลิกต่อเชื่อม และอื่นๆ ต่อไปนี้คือลิสต์รายการของ lifecycle methods: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` บทเรียนต่อไปจะอธิบายครอบคลุมถึงกรณีการใช้งานพื้นฐานบางส่วนของ lifecycle methods เหล่านี้

**Note:** `componentWillMount` lifecycle methods จะเลิกใช้งานในเวอร์ชันอนาคตของ 16.X และถูกถอดออกในเวอร์ชัน 17  [(ที่มา)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

# --instructions--

`componentWillMount()` method ถูกเรียกใช้ก่อน `render()` method เมื่อ component ถูกเชื่อมเข้ากับ DOM บันทึกบางอย่างลงในคอนโซลภายใน `componentWillMount()` - คุณอาจต้องเปิดคอนโซลเบราว์เซอร์ของคุณเพื่อดูผลลัพธ์

# --hints--

`MyComponent` ควรเรนเดอร์ `div` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` ควรถูกเรียกใช้ใน `componentWillMount`

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
    // Change code below this line

    // Change code above this line
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
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
