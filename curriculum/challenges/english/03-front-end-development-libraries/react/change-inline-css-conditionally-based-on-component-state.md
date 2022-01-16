---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

ถึงตอนนี้ คุณได้เห็นการ render แบบมีเงื่อนไขไป และการใช้ inline style ไปแล้ว 
คราวนี้ ถึงเวลาแล้วที่เราจะรวมทั้งสองหัวข้อนี้เข้าด้วยกัน คุณจะ render CSS ตามเงื่อนไขโดยใช้ค่าของ state ใน React component ได้
การใช้วิธีนี้ คุณจะต้องตรวจสอบเงื่อนไขก่อน ถ้าตรงตามเงื่อนไข คุณก็ไปเปลี่ยน style object ที่ใช้กับ JSX element ใน method render 

คุณจำเป็นต้องเข้าใจตัวอย่างนี้ เพราะวิธีการใช้ style แบบนี้จะต่างจากแบบของ HTML ที่ทำโดยการแก้ DOM element โดยตรงอย่างมาก (การแก้ DOM โดยตรงจะนิยมมากถ้าใช้ jQuery) 
ในการใช้วิธีของ HTML นี้คุณจะต้องดูการเปลี่ยนแปลงของ element แล้วก็ยังต้องจัดการการเปลี่ยนแปลงนั้นโดยตรง ซึ่งอาจทำให้การจัดการการเปลี่ยนแปลงยาก และอาจทำให้ UI ทำงานไม่เหมือนกับที่คิดไว้ 
การที่คุณจะเขียน style object ที่เปลี่ยนค่าตามเงื่อนไขแบบนี้ จะเป็นเหมือนการเขียนฟังก์ชันที่เปลี่ยน UI ตาม state แล้วจะทำให้ข้อมูลเคลื่อนที่ไปในทิศทางเดียว
การที่เขียนให้ข้อมูลเคลื่อนที่ไปในทิศทางเดียวแบบนี้ เป็นสิ่งที่ควรทำในการเขียน React

# --instructions--

ในส่วนของ code editor มี controlled component อยู่ตัวหนึ่งที่เป็น input ที่ใช้ style ในการเขียนกรอบ 
คุณต้องเปลี่ยนสีของกรอบของ input นี้ให้เป็นสีแดงเมื่อ user พิมพ์ข้อความที่ยาวกว่า 15 ตัวอักษรลงในกล่อง input 
ให้เขียนคำสั่งที่จะเช็คเงื่อนไขนี้ และถ้าเงื่อนไขนี้เป็น `true` ให้เปลี่ยน property `border` ของ style object ที่ใช้กับ input เป็น `3px solid red` 
แล้วลองพิมพ์ข้อความลงในกล่อง input ดู เพื่อดูการเปลี่ยนแปลง

# --hints--

`GateKeeper` ต้องมี `div` ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

ในตอนแรก state ของ `GateKeeper` ต้องมี property `input` ที่มีค่าเป็น string ว่าง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

`GateKeeper` ต้องมีแท็ก `h3` และ `input` อยู่ข้างใน

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

ในตอนแรกแท็ก `input` ต้องมีค่าของ property `border` ใน style เป็น `1px solid black`

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

แท็ก `input` จะต้องเปลี่ยน property `border` ใน style เป็น `3px solid red` ถ้าค่า input ใน state ยาวเกิน 15 ตัวอักษร

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
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
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
