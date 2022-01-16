---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

แบบทดสอบที่ผ่านมาเราได้สอนเรื่อง `state` ของ component และวิธีสร้าง state ใน `constructor` ไปแล้ว
คราวนี้เรามาเรียนเรื่องวิธีการเปลี่ยน `state` ของ component กันดีกว่า 
React มี method ที่ใช้อัปเดต `state` ของ component คือ `setState` 
เราจะใช้ method `setState` ภายใน class component ได้แบบนี้ `this.setState()` โดยส่ง object ที่มี key กับ value เข้าไป 
ซึ่ง key คือ property ของ state และ value คือข้อมูลใหม่ที่อยากให้เป็น 
เช่น ถ้าเราเก็บ `username` ไว้ใน state และต้องการอัปเดตค่านี้ เราจะใช้โค้ดนี้:

```jsx
this.setState({
  username: 'Lewis'
});
```

React จะไม่ให้คุณแก้ไข `state` โดยตรง แต่จะต้องใช้ `this.setState()` ทุกครั้งเมื่อมีถ้าจะเปลี่ยนแปลง `state` 
ที่ต้องรู้อีกอย่างคือ React อาจรวมการอัปเดท state หลายๆครั้งเข้าด้วยกันให้ได้ประสิทธิภาพที่ดีกว่า 
แปลว่าการอัปเดท state โดยใช้ method `setState` อาจเป็น asynchronous ได้ 
ซึ่งก็มี syntax อื่นสำหรับการเรียกใช้ method `setState` เพื่อให้เป็นแบบ synchronous น้อยครั้งมากๆที่เราจะต้องเรียกใช้แบบนี้ แต่ถ้ารู้ไว้ก็ดี 
ลองอ่าน [React documentation](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous) เพื่อให้เข้าใจเรื่องนี้มากขึ้น

# --instructions--

ใน code editor มี `button` element ที่ใช้ `onClick()` handler อยู่
`onClick` นี้จะทำงานเมื่อ `button` ถูกคลิกในเบราว์เซอร์ และเรียกใช้ method `handleClick` ที่เขียนไว้ใน `MyComponent` 
ภายใน method `handleClick` ให้อัปเดต `state` โดยใช้ `this.setState()` แล้วตั้งค่า property `name` ของ `state` เป็น string 'React Rocks!'

ลองคลิกปุ่มและดูการเปลี่ยนแปลงของ UI เมื่อ state เปลี่ยนแปลง
ไม่ต้องกังวลถ้ายังไม่เข้าใจหลักการทำงานของ click handler ในตอนนี้ 
เราจะอธิบายเรื่องนี้ในภายหลัง

# --hints--

state ของ `MyComponent` ต้องมีค่าเริ่มต้นเป็น `{ name: Initial State }`

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` ต้องเรนเดอร์ `h1`

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

`h1` ที่เรนเดอร์ออกมา ต้องแสดงข้อความที่ดึงมาจาก state ของ component

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(/<h1>TestName<\/h1>/.test(firstValue));
};
```

การเรียกใช้ method `handleClick` ใน `MyComponent` ต้องเปลี่ยนค่าของ property `name` ใน state เป็น `React Rocks!`

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'Before' });
    return waitForIt(() => mockedComponent.state('name'));
  };
  const second = () => {
    mockedComponent.instance().handleClick();
    return waitForIt(() => mockedComponent.state('name'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Before' && secondValue === 'React Rocks!');
};
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
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // แก้ไขโค้ดใต้บรรทัดนี้
    this.setState({
      name: 'React Rocks!'
    });
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
