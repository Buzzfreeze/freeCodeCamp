---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
forumTopicId: 301385
dashedName: create-a-controlled-input
---

# --description--

คุณอาจต้องเขียนแอปให้ `state` กับ UI ทำงานด้วยกันซับซ้อนมากขึ้น
เช่น การใช้ form control เพื่อป้อนข้อความ อย่างการใช้ `input` และ `textarea` ซึ่งจะมี state ของตัวเองใน DOM เมื่อ user พิมพ์ข้อความเข้ามา 
ถ้าใช้ React คุณจะย้าย state ของ element พวกนี้ไปไว้ใน `state` ของ React component ได้ 
สิ่งที่ user กรอกเข้ามาก็จะกลายเป็นส่วนหนึ่งของ `state` ของแอป ทำให้ React จะควบคุมค่าของ input นั้นได้ 
ถ้าคุณใส่ input ที่ user พิมพ์ลงไปได้ไว้ใน React component เราจะเรียก input นั้นว่าเป็น Controlled Input ซึ่งแปลว่า input ที่ React ควบคุมได้

# --instructions—

ใน code editor เราได้เขียนโครงของ component ชื่อ `ControlledInput` ไว้ให้แล้ว
แล้วตอนนี้เราก็ได้เขียนค่าเริ่มต้นของ `state` ไว้ให้แล้วด้วย ซึ่ง `state` เริ่มตต้นของ component นี้จะมี property `input` ที่มีค่าเป็น string ว่าง โดย property นี้จะเก็บข้อมูลที่ user พิมพ์เข้าไปใน input

ขั้นแรก ให้สร้าง method ชื่อ `handleChange()` ที่รับพารามิเตอร์ชื่อ `event` 
เมื่อเรียกใช้ method ก็จะส่ง `event` object ที่มี string ที่เป็นข้อความที่พิมพ์ลงใน `input` element 
คุณจะอ่านค่าของ string นี้ได้จาก `event.target.value` ภายใน method นี้
แล้วให้เอา string ที่ user พิมพ์เข้ามานี้ไปอัปเดต property `input` ของ `state` ใน component นี้

ใน method `render` ให้สร้าง `input` element ไว้บน `h4` โดยให้มี attribute ชื่อ `value` เป็นค่าของ property `input` ของ `state` 
แล้วให้ event handler ที่ชื่อ `onChange` โดยให้เรียกใช้ method `handleChange()`

เมื่อคุณพิมพ์ข้อความลงใน `input` box ข้อความนั้นจะถูกประมวลผลโดย method `handleChange()` แล้วจะเก็บค่าลงใน property `input` ของ `state` และจะเอาค่านั้นไปแสดงผลใน `input` box บนหน้าเว็บ 
`state` ของ component นี้ก็จะเป็นที่เดียวเท่านั้นที่เก็บข้อมูล โดยไม่สนว่าข้อมูลจะมาจากไหน

แล้วก็ อย่าลืมเพิ่มการ binding ที่จำเป็นใน constructor ด้วย

# --hints--

`ControlledInput` ต้องคืนค่าเป็น `div` ที่มี `input` และ `p` อยู่ข้างใน

```js
assert(
  Enzyme.mount(React.createElement(ControlledInput))
    .find('div')
    .children()
    .find('input').length === 1 &&
    Enzyme.mount(React.createElement(ControlledInput))
      .find('div')
      .children()
      .find('p').length === 1
);
```

state เริ่มต้นของ `ControlledInput` ต้องมี property `input` ที่มีค่าเป็น string ว่าง

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(ControlledInput)).state('input'),
  ''
);
```

การพิมพ์ข้อมูลใน input element จะต้องอัปเดต `state` และค่าของ property `input` แล้วจึงแสดงค่าของ `state` นี้ใน `p` element

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(ControlledInput));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return waitForIt(() => mockedComponent.state('input'));
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => ({
      state: mockedComponent.state('input'),
      text: mockedComponent.find('p').text(),
      inputVal: mockedComponent.find('input').props().value
    }));
  };
  const before = await _1();
  const after = await _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.text === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
  render() {
    return (
      <div>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */}

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange} />
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
