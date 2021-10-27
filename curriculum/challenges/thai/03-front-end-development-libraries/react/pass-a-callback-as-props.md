---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

คุณสามารถส่ง `state` เป็น props ไปยัง child component ได้ แต่ไม่จำกัดเพียงแค่การส่งข้อมูลเท่านั้น คุณยังสามารถส่งผ่านฟังก์ชันตัวจัดการหรือ method ใดๆ ที่กำหนดไว้บน React component ไปยัง child component ได้ นี่คือวิธีที่คุณอนุญาตให้ child component โต้ตอบกับ parent component ได้ คุณส่งต่อ method ให้กับ child เหมือนกับ prop ทั่วไป มีการกำหนดชื่อและคุณสามารถเข้าถึงชื่อ method นั้นภายใต้ `this.props` ใน child component

# --instructions--

มีสามองค์ประกอบที่ระบุไว้ใน code editor ให้ `MyApp` component เป็น parent ที่จะเรนเดอร์ `GetInput` และ `RenderInput` child component เพิ่ม `GetInput` component ให้กับ render method ใน `MyApp` จากนั้นส่ง prop ที่เรียกว่า `input` ให้มันที่กำหนดให้กับ `inputValue` จาก `state` ของ `MyApp` แล้วสร้าง prop ที่เรียกว่า `handleChange` และส่ง input handler 'handleChange' ไปให้

ถัดไป เพิ่ม 'RenderInput' ให้กับ render method ใน `MyApp` จากนั้นสร้าง prop ที่เรียกว่า `input` และส่ง `inputValue` จาก `state` ไปให้มัน เมื่อคุณทำเสร็จแล้ว คุณจะสามารถพิมพ์ใน `input` field ใน `GetInput` component ซึ่งจะเรียก handler method ใน parent ของมันผ่าน props สิ่งนี้จะอัปเดต input ใน `state` ของ parent ซึ่งส่งผ่านเป็น props ให้กับ child ทั้งสอง สังเกตว่าข้อมูลไหลระหว่าง component อย่างไร และแหล่งที่มาของความจริงเพียงแหล่งเดียวยังคงเป็น "สถานะ" ขององค์ประกอบหลัก ตัวอย่างนี้ค่อนข้างยุ่งยาก แต่ควรทำให้สำเร็จเพื่อแสดงให้เห็นว่าข้อมูลและ callback สามารถส่งผ่านระหว่าง React component ได้อย่างไร

# --hints--

`MyApp` component ควรจะเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

`GetInput` component ควรจะเรนเดอร์


```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

`RenderInput` component ควรจะเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

`GetInput` component ควรได้รับ `MyApp` state property `inputValue` เป็น props และ มี `input` element ที่จะปรับแต่ง `MyApp` state

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

`RenderInput` component ควรจะได้รับ `MyApp` state property `inputValue` เป็น props

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
