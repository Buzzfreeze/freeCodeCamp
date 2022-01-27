---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

เราส่ง `state` เป็น props ไปยัง child component ได้ แต่การส่งแบบนี้ไม่จำกัดเฉพาะข้อมูลที่เป็น object string int ฯลฯ เท่านั้น 
คุณยังสามารถส่งผ่านฟังก์ชันหรือ method ที่เขียนไว้ใน React component ไปยัง child component ได้ด้วย 
วิธีนี้จะทำให้คุณใช้ child ในการแก้ไขหรือเปลี่ยนแปลง parent ได้ โดยเราจะส่ง method ให้กับ child ได้ด้วยวิธีเดียวกับการส่ง prop ทั่วๆไป 
คุณแค่ต้องตั้งชื่อ method นั้น แล้ว method นั้นก็จะเข้าถึงได้ผ่าน `this.props` ใน child component

# --instructions--

เราได้สร้าง component สามตัวไว้ใน code editor ให้แล้ว  
โดย component `MyApp` เป็น parent ที่จะมี child component เป็น `GetInput` และ `RenderInput` 

ให้คุณเพิ่ม `GetInput` ใน method render ใน `MyApp` และให้ส่ง `inputValue` ใน `state` ของ `MyApp` ไปให้ `GetInput` ผ่านทาง prop ที่ชื่อ `input` 
แล้วให้ส่ง input handler ที่ชื่อ `handleChange` ลงไป ผ่าน prop ที่ชื่อว่า `handleChange`

ต่อไปให้เพิ่ม `RenderInput` ใน method `render` ของ `MyApp` จากนั้นให้ส่ง `inputValue` ของ `state` ผ่าน prop ที่ชื่อ `input` ลงไปให้ `RenderInput` 

ถ้าทำตามขั้นตอนเสร็จและถูกต้องแล้ว เวลาที่คุณพิมพ์ข้อความลงในกล่องข้อความ `GetInput` จะไปเรียก handler method ของ parent (method `handleChange`) ผ่าน props ซึ่งจะไปเปลี่ยนค่า `input` ใน `state` ของ parent

ให้ลองสังเกตการไหลของข้อมูลใน component และสังเกตการที่ข้อมูลที่ใช้จะเก็บอยู่ที่เดียวคือที่ `state` ของ parent component 

เรายอมรับว่าตัวอย่างนี้ซับซ้อนและยากมาก แต่เราอยากให้ทำความเข้าใจให้ได้ จะได้เห็นว่าข้อมูลและ callback ส่งไป-มาระหว่าง React component ได้อย่างไร

# --hints--

ต้องเรนเดอร์ `MyApp` ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

ต้องเรนเดอร์ `GetInput` ได้


```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

ต้องเรนเดอร์ `RenderInput` ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

จะต้องส่ง property `inputValue` ของ `state` ใน `MyApp` ไปให้ `GetInput` ผ่าน props และ `GetInput` ต้องมี `input` element ที่จะไปเปลี่ยนค่า `state` ของ `MyApp` ด้วย

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

จะต้องส่ง property `inputValue` ของ `state` ใน `MyApp` ไปให้ `RenderInput` ผ่าน props

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
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
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
