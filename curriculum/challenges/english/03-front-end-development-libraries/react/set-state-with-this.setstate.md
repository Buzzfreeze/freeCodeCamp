---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

แบบทดสอบก่อนหน้านี้ได้พูดถึงถึง component `state` และวิธีเริ่มต้น state ใน `constructor` นอกจากนี้ยังมีวิธีการเปลี่ยน `state` ของ component อีกด้วย React ได้จัดเตรียม method อัปเดต component `state` ที่เรียกว่า `setState` คุณเรียกใช้ `setState` method ภายในคลาส component ของคุณดังนี้: `this.setState()` จะส่งผ่าน object ที่มีคู่ key-value ซึ่ง key คือ state properties ของคุณและ value คือข้อมูล state ที่อัปเดตแล้ว ตัวอย่างเช่น หากเราจัดเก็บ `username` ไว้ใน state และต้องการอัปเดตมัน ซึ่งจะมีลักษณะดังนี้:

```jsx
this.setState({
  username: 'Lewis'
});
```

React จะไม่ให้คุณแก้ไข `state` โดยตรง แต่ควรจะใช้ `this.setState()` ทุกครั้งเมื่อมีการเปลี่ยนแปลง state นอกจากนี้คุณควรทราบด้วยว่า React อาจแบทช์การอัพเดตหลาย state เพื่อปรับปรุงประสิทธิภาพ หมายความว่า state อัพเดตผ่าน `setState` method สามารถเป็น asynchronous ได้ มันยังมี syntax แบบอื่นสำหรับ `setState` method ซึ่งมีวิถีทางแก้ไขปัญหานี้ สิ่งนี้ไม่จำเป็นมากนักแต่ควรจำไว้! โปรดดู[React documentation](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous) สำหรับรายละเอียดเพิ่มเติม

# --instructions--

มี `button` element ใน code editor ซึ่งมี `onClick()` handler ตัวจัดการนี้จะถูกทำให้ทำงานเมื่อ `button` ได้รับ click event ในเบราว์เซอร์ และเรียกใช้ `handleClick` method ที่กำหนดไว้ใน `MyComponent` ภายใน `handleClick` method ให้อัปเดต component `state` โดยใช้ `this.setState()` ตั้งค่า `name` property ใน `state` ให้เท่ากับ string 'React Rocks!'

คลิกปุ่มและดูการอัปเดต state ที่เรนเดอร์ อย่ากังวลหากคุณไม่เข้าใจวิธีการทำงานของโค้ด click handler อย่างถ่องแท้ในตอนนี้ มันจะถูกอธิบายในแบบทดสอบข้างหน้า

# --hints--

State ของ `MyComponent` ควรเริ่มต้นด้วยคู่ key value `{ name: Initial State }`

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` ควรเรนเดอร์ `h1` header

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

`h1` header ที่ถูกเรนเดอร์แล้วควรมีข้อความที่ถูกเรนเดอร์จาก state ของ component

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

การเรียกใช้ `handleClick` method บน `MyComponent` ควรตั้งค่าให้ name property ใน state เท่ากับ `React Rocks!`

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
    // Change code below this line

    // Change code above this line
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
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
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
