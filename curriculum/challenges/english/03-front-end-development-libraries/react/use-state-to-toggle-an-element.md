---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

บางครั้งคุณอาจจำเป็นต้องทราบ state ก่อนหน้าเมื่อมีการอัปเดต state อย่างไรก็ตาม การอัปเดต state อาจเป็นแบบ asynchronous ซึ่งหมายความว่า React อาจรวมการเรียกใช้งานของ `setState()` หลายชุดไว้ในการอัปเดตครั้งเดียว ซึ่งหมายความว่าคุณไม่สามารถพึ่งพาค่าก่อนหน้าของ `this.state` หรือ `this.props` เมื่อกำลังคำนวณค่าถัดไป ดังนั้น คุณไม่ควรใช้โค้ดเช่นนี้:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

คุณควรส่งฟังก์ชัน `setState` ที่อนุญาตให้คุณเข้าถึง state และ props แทน การใช้ฟังก์ชันที่มี `setState` จะรับประกันว่าคุณกำลังทำงานกับค่า state และ props ที่เป็นปัจจุบันที่สุด ซึ่งคุณควรเขียนโค้ดข้างต้นใหม่เป็น:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

คุณยังสามารถใช้แบบฟอร์มที่ไม่มี `props` หากคุณต้องการเพียง `state`:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

โปรดทราบว่าคุณต้อง object ในวงเล็บ มิฉะนั้น JavaScript จะคิดว่าเป็นบล็อกของโค้ด

# --instructions--

`MyComponent` มี `visibility` property ซึ่งค่าเริ่มต้นเป็น `false` ซึ่ง render method จะreturn มุมมองหนึ่งหากค่าของ `visibility` เป็นจริง และมุมมองอื่นหากเป็นเท็จ

ตอนนี้ยังไม่มีวิธีอัปเดต `visibility` property ใน `state` ของ component ค่าของมันควรสลับไปมาระหว่างจริงและเท็จ มันมี click handler บนปุ่มซึ่งเรียกใช้งาน class method ที่เรียกว่า `toggleVisibility()` ส่งฟังก์ชันไปที่ `setState` เพื่อกำหนด method นี้ เพื่อให้ `state` ของ ` visibility` สลับเป็นค่าที่ตรงกันข้ามเมื่อมีการเรียกใช้งาน method ส่งผลให้หาก `visibility` เป็น `false` method จะตั้งค่าเป็น `true` และในทางกลับกันก็จะตั้งค่าเป็น `false`

สุดท้าย ให้คลิกปุ่มเพื่อดูการเรนเดอร์ตามเงื่อนไขของ component ตาม `state` ของมัน

**Hint:** อย่าลืมผูกคีย์เวิร์ด `this` กับ method ใน `constructor`!

# --hints--

`MyComponent` ควร return `div` element ที่มี `button` ข้างใน

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

State ของ `MyComponent` ควรมีค่าเริ่มต้นด้วย `visibility` property ตั้งค่าเป็น `false`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

การคลิก element ปุ่มควรจะเป็นการสลับค่า `visibility` property ใน state เป็นค่าระหว่าง `true` และ `false`

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

ฟังก์ชันที่ไม่ระบุชื่อควรถูกส่งไปยัง `setState`

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

`this` ไม่ควรถูกใช้ภายใน `setState`

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
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
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
