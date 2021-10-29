---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

มาถึงตอนนี้ คุณได้เห็นการใช้งานหลายอย่างของ การ render แบบมีเงื่อนไข และการใช้ inline styles ไปแล้ว และต่อจากนี้จะเป็นอีกตัวอย่างที่รวมเราทั้งสองหัวข้อนี้ไว้ด้วยกัน คุณสามารถ render CSS แบบมีเงื่อนไขที่ขึ้นอยู่กับสถานะของ React component ทำได้โดยให้คุณตรวจสอบเงื่อนไขก่อน และเงื่อนไขนั้นตรงตามที่กำหนดมา คุณจึงแก้ไข styles object ที่กำหนดให้กับ JSX elements ใน render method

ตัวอย่างนี้เป็นสิ่งสำคัญที่ต้องทำความเข้าใจ เพราะมันเป็นการเปลี่ยนแปลงอย่างมากจากวิธีการดั้งเดิมในการใช้ style โดยการปรับแต่ง DOM element โดยตรง (ซึ่งเป็นเรื่องที่ใช้ทำกันมากกับ jQuery) ในวิธีการนั้นคุณจะต้องติดตามเมื่อ element มีการเปลี่ยนแปลง และยังต้องจัดการการเปลี่ยนแปลงนั้นโดยตรง การติดตามการเปลี่ยนแปลงต่างๆ อาจจะเป็นเรื่องยาก และอาจจะทำให้ UI ของคุณนั้นคาดการณ์ไม่ได้ เมื่อคุณตั้งค่า style object ตามเงื่อนไข และคุณได้กำหนดว่า UI ควรดูว่าเป็นฟังก์ชันของสถานะของแอปพลิเคชันอย่างไร มีการส่งผ่านข้อมูลที่ชัดเจนที่เคลื่อนที่ไปในทิศทางเดียวเท่านั้น นี่เป็นวิธีการที่ยอมรับในการเขียนแอปพลิเคชันด้วย React

# --instructions--

ในส่วนของ code editor มี input component ควบคุมที่เรียบง่าย พร้อมกับมีกรอบที่ถูกตกแต่งมาแล้ว คุณต้องการที่จะตกแต่งกรอบนี้ให้เป็นสีแดงถ้าหาก user พิมพ์ข้อความเข้ามามากกว่า 15 ตัวอักษรในกล่อง input เพิ่มเงื่อนไขในการตรวจสอบเหตุการณ์นี้ และ เมื่อเงื่อนไขนั้นถูกต้อง ให้ตั้ง style ของกรอบ input เป็น `3px solid red` คุณสามารถลองตรวจสอบโดยการพิมพ์ข้อความใน input

# --hints--

`GateKeeper` component จะต้องแสดงผล `div` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`GateKeeper` component จะต้องเริ่มด้วยคีย์สถานะ `input` ตั้งค่าเป็น string ว่าง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

`GateKeeper` component จะต้องแสดงผลของ `h3` tag และ `input` tag

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('h3').length === 1 &&
      mockedComponent.find('input').length === 1
    );
  })()
);
```

`input` tag ควรมีค่า style เริ่มต้นคือ `1px solid black` สำหรับ `border` property

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('input').props().style.border === '1px solid black'
    );
  })()
);
```

`input` tag จะต้องเปลี่ยน style ของ border เป็น `3px solid red` หากค่า input ในสถานะมีความยาวเกิน 15 ตัวอักษร

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  let initialStyle = mockedComponent.find('input').props().style.border;
  const state_1 = () => {
    mockedComponent.setState({ input: 'this is 15 char' });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const state_2 = () => {
    mockedComponent.setState({
      input: 'A very long string longer than 15 characters.'
    });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const style_1 = await state_1();
  const style_2 = await state_2();
  assert(
    initialStyle === '1px solid black' &&
      style_1 === '1px solid black' &&
      style_2 === '3px solid red'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
