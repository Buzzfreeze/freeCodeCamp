---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
forumTopicId: 301431
dashedName: manage-state-locally-first
---

# --description--

ในแบบทดสอบนี้คุณต้องเขียน component `DisplayMessages` ให้เสร็จ

# --instructions--

ขั้นแรกใน method `render()` ให้เรนเดอร์ `input`, `button`, และ `ul` 
ใน `input` ให้ event `onChange` เรียกใช้ method `handleChange()` และ `input` ต้องแสดงค่าของ `input` ที่อยู่ใน state ของ component 
การคลิก `button` ต้องเรียกใช้ method `submitMessage()`

ขั้นต่อมาให้เขียน method 2 ตัว คือ 

1. method `handleChange()` ที่จะต้องอัปเดต `input` ใน state เป็นข้อความที่ user กำลังพิมพ์
2. method `submitMessage()` ต้องนำข้อความจาก `input` ที่อยู่ใน state ไปเพิ่มลงใน array `messages` ใน state และล้างค่าของ `input`

สุดท้าย ให้ใช้ `ul` เพื่อ map array ของ `messages` และเรนเดอร์เป็น `li` หนึ่งตัว ต่อข้อความหนึ่งข้อความใน `messages`

# --hints--

component `DisplayMessages` ต้องมี state เริ่มต้นเป็น `{ input: "", messages: [] }`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      initialState.messages.length === 0
    );
  })()
);
```

component `DisplayMessages` ต้องมี `div` ที่มี `h2`, `button` และ `ul` เป็น child โดยใน `ul` ต้องมี `li` อยู๋ด้านในด้วย

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const state = () => {
    mockedComponent.setState({ messages: ['__TEST__MESSAGE'] });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state();
  assert(
    updated.find('div').length === 1 &&
      updated.find('h2').length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('ul').length === 1 &&
      updated.find('li').length > 0
  );
};
```

ต้องใช้ `.map` กับ array `messages`

```js
assert(code.match(/this\.state\.messages\.map/g));
```

element `input` ต้องแสดงค่าของ `input` จาก local state

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const testValue = '__TEST__EVENT__INPUT';
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const updated = await changed();
  assert(updated.find('input').props().value === testValue);
};
```

การเรียกใช้ method `handleChange` ควรอัปเดตค่า `input` ใน state เป็นค่าปัจจุบันของ element input 

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__TEST__EVENT__MESSAGE__';
  const changed = () => {
    causeChange(mockedComponent, testMessage);
    return waitForIt(() => mockedComponent);
  };
  const afterInput = await changed();
  assert(
    initialState.input === '' &&
      afterInput.state().input === '__TEST__EVENT__MESSAGE__'
  );
};
```

การคลิกปุ่ม `Add message` ต้องไปเรียกใช้ method `submitMessage` ที่จะเพิ่ม `input` ปัจจุบันไปใน array `messages` ใน state

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage_1 = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage_1);
    return waitForIt(() => mockedComponent);
  };
  const firstResult = await firstChange();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterSubmit_1 = await firstSubmit();
  const submitState_1 = afterSubmit_1.state();
  const testMessage_2 = '__SECOND__MESSAGE__';
  const secondChange = () => {
    causeChange(mockedComponent, testMessage_2);
    return waitForIt(() => mockedComponent);
  };
  const secondResult = await secondChange();
  const secondSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterSubmit_2 = await secondSubmit();
  const submitState_2 = afterSubmit_2.state();
  assert(
    initialState.messages.length === 0 &&
      submitState_1.messages.length === 1 &&
      submitState_2.messages.length === 2 &&
      submitState_2.messages[1] === testMessage_2
  );
};
```

method `submitMessage` ต้องเคลียข้อความใน input ด้วย

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage);
    return waitForIt(() => mockedComponent);
  };
  const firstResult = await firstChange();
  const firstState = firstResult.state();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterSubmit = await firstSubmit();
  const submitState = afterSubmit.state();
  assert(firstState.input === testMessage && submitState.input === '');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // เขียน handleChange() and submitMessage() ได้บรรทัดนี้

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* เขียน input, button, และ ul ใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
```
