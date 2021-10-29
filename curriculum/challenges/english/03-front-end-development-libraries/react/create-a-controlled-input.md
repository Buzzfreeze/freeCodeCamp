---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
forumTopicId: 301385
dashedName: create-a-controlled-input
---

# --description--

แอปพลิเคชันของคุณอาจมีการโต้ตอบที่ซับซ้อนมากขึ้นระหว่าง `state` และ UI ที่แสดงผล ตัวอย่างเช่น form control element สำหรับการป้อนข้อความ เช่น `input` และ `textarea` จะคงสถานะของตนเองใน DOM เมื่อ user พิมพ์ 
ด้วย React คุณสามารถย้ายสถานะที่ไม่แน่นอนนี้ไปยัง `state` ของ React component ได้ อินพุตของ user จะกลายเป็นส่วนหนึ่งของ `state` ของแอปพลิเคชัน ดังนั้น React จะควบคุมค่าของ input field นั้น โดยปกติหากคุณมี React component ที่มี input field ที่ผู้ใช้สามารถพิมพ์ลงไปได้ มันจะเป็นแบบฟอร์มการป้อนข้อมูลที่มีการควบคุม

# --instructions—

Code editor มีโครงร่างของ component ที่เรียกว่า `ControlledInput` เพื่อสร้าง `input` element ที่มีการควบคุม `state` ขอ component ได้รับการเริ่มต้นด้วย `input` property ที่มี string ว่าง ค่านี้แสดงถึงข้อความที่ user พิมพ์ลงในช่อง `input`

ขั้นแรก สร้าง method ชื่อ `handleChange()` ที่มีพารามิเตอร์ชื่อ `event` เมื่อเรียก method จะได้รับ `event` object ที่มี string ข้อความจาก `input` element คุณสามารถเข้าถึง string นี้ด้วย `event.target.value` ภายใน method อัปเดต`input` property ของ `state` ของ componentด้วย string ใหม่นี้

ใน`render` method ให้สร้าง `input` element เหนือ "h4" tag เพิ่ม `value` attribute ซึ่งเท่ากับ `input` property ของ `state` ของ component จากนั้นเพิ่ม`onChange()` event handler ที่ตั้งค่าเป็น `handleChange()` method

เมื่อคุณพิมพ์ลงในช่องใส่ข้อความ ข้อความนั้นจะถูกประมวลผลโดย `handleChange()` method ตั้งค่าเป็น `input` property ใน local `state` และแสดงผลเป็นค่าในกล่อง 'input' บนหน้าเพจ component `state` เป็นแหล่งข้อมูลเพียงแหล่งเดียวเกี่ยวกับข้อมูลที่ป้อนเข้า

สุดท้ายแต่ไม่ท้ายสุด อย่าลืมเพิ่มการ binding ที่จำเป็นใน constructor

# --hints--

`ControlledInput` ควรจะต้อง return `div` element ที่มี `input` และ a `p` tag ข้างใน

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

สถานะของ `ControlledInput` ควรจะต้องเริ่มต้นด้วย `input` property ที่มีค่าเป็น string ว่าง

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(ControlledInput)).state('input'),
  ''
);
```

การพิมพ์กรอกข้อมูลใน input element ควรจะต้องอัปเดตสถานะและค่าของ input แล้วจึงแสดงผลสถานะที่คุณพิมพ์เข้ามาใน `p` element

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
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
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
