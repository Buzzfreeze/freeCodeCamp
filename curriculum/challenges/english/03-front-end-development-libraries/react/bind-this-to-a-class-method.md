---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

นอกจากการตั้งค่าและอัปเดต `state` แล้ว เรายังสร้าง method ใน component class ได้ด้วย  
ปกติแล้ว class method จำเป็นต้องใช้คีย์เวิร์ด `this` เพื่อเข้าถึง property ใน class ที่อยู่ในขอบเขตของ method (อย่างเช่น `state` และ `props`)  
ซึ่งมีสองสามวิธีที่จะทำให้ class method ของเราสามารถเข้าถึง `this` ได้

วิธีปกติคือการผูก `this` ใน constructor วิธีนี้จะทำให้ `this` ถูกผูกไว้กับ class method ตั้งแต่ตอนที่ component เริ่มทำงานเลย  
คุณอาจสังเกตเห็นว่าในบททดสอบที่แล้วมีการใช้ `this.handleClick = this.handleClick.bind(this)` ใน constructor  
ทำให้เมื่อเรียกใช้ฟังก์ชันอย่าง `this.setState()` ภายใน class method `this` ในที่นี้จะอ้างอิงตัว class เลย และจะไม่ได้เป็น `undefined` 

**Note:** คีย์เวิร์ด `this` เป็นหนึ่งในส่วนที่คนงงที่สุดใน JavaScript แต่ก็มีบทบาทสำคัญใน React  
แต่เพราะว่าบทเรียนนี้ไม่ใช่บทเรียนเรื่อง `this` เราค่อยไปเจาะรายละเอียดและทำความเข้าใจเกี่ยวกับ `this` ในบทเรียนอื่นๆ ต่อไป

# --instructions--

ใน code editor มี component ที่ใช้ค่าของ text จาก `state` และยังมี method ที่จะเปลี่ยน text เป็น `You clicked!` อีกด้วย  
แต่ method นี้ยังทำงานไม่ได้ เพราะว่าในตอนนี้คีย์เวิร์ด `this` ใน method นี้ยังมีค่าเป็น undefined อยู่
ซึ่งเราจะแก้ไขได้โดยการผูก `this` กับ method `handleClick()` ใน constructor ของ component

ต่อไปใน method `render` ให้เพิ่ม click handler ใน `button` element ซึ่งจะทำให้ method `handleClick()` ทำงานเมื่อปุ่มนั้นถูกคลิก  
อย่าลืมว่า method ที่ใช้ใน `onClick` handler ต้องมีวงเล็บปีกกาครอบเพราะโค้ดส่วนนี้จะทำงานเป็น JavaScript

เมื่อคุณทำตามขั้นตอนข้างบนจนครบถ้วนแล้ว เมื่อคุณคลิกที่ปุ่มคุณจะเห็นข้อความ `You clicked!`

# --hints--

`MyComponent` จะต้องคืนค่าออกมาเป็น `div` ที่ครอบ element 2 ตัวคือ `button` และ `h1` ตามลำดับ

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

state ของ `MyComponent` ต้องมีค่าเป็น `{ text: "Hello" }` ในตอนแรก

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

การคลิกที่ `button` ต้องทำให้ method `handleClick` ทำงานและเปลี่ยน `text` ใน `state` เป็น `You clicked!`

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <button>Click Me</button>
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```
