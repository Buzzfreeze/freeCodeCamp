---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

นอกจากการตั้งค่าและอัปเดต `state` แล้ว คุณยังสามารถระบุ methods สำหรับ component class ของคุณได้ โดยทั่วไปแล้ว class method จำเป็นต้องใช้คีย์เวิร์ด `this`จึงจะสามารถเข้าถึง property ต่างๆ บน class ภายในขอบเขตของ method ได้ (อย่างเช่น `state` และ `props`) ซึ่งมีสองสามวิธีที่จะทำให้ class method ของคุณสามารถเข้าถึง `this`

วิธีทั่วไปวิธีหนึ่งคือการผูก `this` ใน constructor จึงทำให้ `this` ถูกผูกไว้กับ class method เมื่อ component เริ่มทำงาน จากบททดสอบที่ผ่านมาคุณจะเห็นได้ว่ามีการใช้ `this.handleClick = this.handleClick.bind(this)` สำหรับ `handleClick` method ของมันภายใน constructor จากนั้นเมื่อคุณเรียกใช้ฟังก์ชันอย่าง `this.setState()` ภายใน class method `this` ในที่นี้จะหมายถึง class และจะไม่ได้เป็น `undefined` 

**Note:** คีย์เวิร์ด `this` เป็นสิ่งหนึ่งที่ชวนสับสนที่สุดของ JavaScript แต่มันมีบทบาทสำคัญใน React เนื่องจากบทเรียนนนี้ไม่ใช่บทเรียนที่เกี่ยวกับกับ `this` ในเชิงลึก เราค่อยไปเจาะรายละเอียดและทำความเข้าใจเกี่ยวกับ `this` ในบทเรียนอื่นๆ ต่อไป

# --instructions--

ภายในส่วนของโค้ดมี component พร้อมกับ `state` ที่ติดตามการเปลี่ยนแปลงของข้อความ มันยังมี method ที่ให้คุณสามารถตั้งค่าข้อความไปเป็น `You clicked!` อีกด้วย แต่ method นี้ยังไม่สามารถทำงานได้ เนื่องจาก method นี้ใช้คีย์เวิร์ด `this` ที่เป็น undefined แก้ไขได้โดยการผูก `this` กับ `handleClick()` method ให้ชัดเจนใน constructor ของ component

ต่อไปให้เพิ่มตัวจัดการการคลิกไปที่ `button` element ใน render method มันควรจะทำให้ `handleClick()` method ทำงานเมื่อปุ่มนั้นได้รับ click event โปรดทราบว่า method ที่คุณได้ส่งต่อไปยัง ตัวจัดการ `onClick` ต้องมีวงเล็บปีกกาเพราะมันควรที่จะได้รับการแปลโดยตรงในฐานะ JavaScript

เมื่อคุณทำตามขั้นตอนข้างบนจนครบถ้วนแล้ว คุณควรจะสามารถที่จะคลิกที่ปุ่มและเห็นข้อความว่า `You clicked!`

# --hints--

`MyComponent` จะต้อง return `div` element ที่ครอบ 2 element คือ button และ `h1` element ตามลำดับ

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

สถานะของ `MyComponent` ควรเริ่มต้นด้วยคู่ key value `{ text: "Hello" }`

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

การคลิกที่ `button` element ควรทำให้ `handleClick` method ทำงานและตั้งสถานะ `text` ไปเป็น `You clicked!`

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
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
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
