---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

บางครั้งเราอาจต้องอ่านค่าของ state ก่อนที่จะไปอัปเดต state แต่การการอัปเดต state อาจเป็น asynchronous ก็ได้
แปลว่า React อาจรวมการอัปเดท state หลายๆครั้งเข้าด้วยกัน ทำให้เราไม่ควรเชื่อค่าของ `this.state` หรือ `this.props` ในการคำนวณค่าถัดไป จึงไม่ควรใช้โค้ดแบบนี้:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

เราควรส่งฟังก์ชันที่เข้าถึง state และ props ได้เข้าไปใน `setState` แทน การส่งฟังก์ชันเข้าไปใน `setState` จะรับประกันว่าเราจะใช้ state และ props ที่เป็นตัวล่าสุด 
โค้ดข้างบนก็จะเขียนได้ใหม่เป็น:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

ถ้าไม่ใช้ `props` จะใช้แค่ `state` ก็ได้:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

อย่าลืมว่าถ้าจะให้ arrow function รับ argumnet 2 ตัว จะต้องครอบ argumnet ทั้งสองตัวนั้นไว้ในวงเล็บ 

# --instructions--

`MyComponent` มี property ชื่อ `visibility` ซึ่งมีค่าเริ่มต้นเป็น `false` ซึ่ง method `render` จะแสดงผลเป็นแบบหนึ่งถ้าค่าของ `visibility` เป็น `true` และแสดงผลเป็นอีกแบบหนึ่งถ้าเป็น `false`

ตอนนี้ยังไม่มีโค้ดที่อัปเดทค่าของ property `visibility` ใน `state` ของ component 
ค่าของ property นี้ควรสลับไปมาระหว่าง `true` กับ `false` 
ตอนนี้ปุ่มของเรามี click handler ที่เรียกใช้งาน method `toggleVisibility()` แล้ว

ให้เขียน method นี้ แล้วให้ method นี้ทำงานโดยจะส่งฟังก์ชันไปใน `setState` เพื่อให้ `visibility` ใน `state` เปลี่ยนไปเปลี่ยนมาได้
ถ้าเราเรียกใช้ method นี้ตอนที่ `visibility` เป็น `false`  ค่าต้องถูกเปลี่ยนเป็น `true` แต่ถ้า `visibility` เป็น `true` อยู่ ก็ต้องเปลี่ยนเป็น `false`

สุดท้าย ให้ลองคลิกปุ่มเพื่อดูการเรนเดอร์ของ component ตามเงื่อนไขของ `state` ที่เปลี่ยนไป

**Hint:** อย่าลืมผูกคีย์เวิร์ด `this` กับ method ใน `constructor`!

# --hints--

`MyComponent` ต้องคืนค่าเป็น `div` ที่มี `button` ข้างใน

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

ค่าเริ่มต้นของ state ใน `MyComponent` ต้องมี property `visibility` ที่มีค่าเป็น `false`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

การคลิกปุ่มต้องเป็นเป็นการสลับค่า property `visibility` ใน state เป็น `true` หรือ `false`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ visibility: false });
    return mockedComponent.state('visibility');
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const third = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(!firstValue && secondValue && !thirdValue);
})();
```

ต้องส่ง anonymous function เข้าไปใน `setState`

```js
const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?';
assert(
  new RegExp(
    'this\\.setState\\((function\\(' +
      paramRegex +
      '\\){|([a-zA-Z$_]\\w*|\\(' +
      paramRegex +
      '\\))=>)'
  ).test(__helpers.removeWhiteSpace(code))
);
```

ต้องไม่ใช้ `this` ใน `setState`

```js
assert(!/this\.setState\([^}]*this/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // แก้โค้ดใต้บรรทัดนี้

    // แก้โค้ดเหนือบรรทัดนี้
  }
  // แก้โค้ดใต้บรรทัดนี้

  // แก้โค้ดเหนือบรรทัดนี้
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```
