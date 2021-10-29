---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
forumTopicId: 301431
dashedName: manage-state-locally-first
---

# --description--

คุณจะสร้าง `DisplayMessages` component ให้สำเร็จในแบบทดสอบนี้

# --instructions--

ขั้นแรกใน `render()` method ให้ component เรนเดอร์ `input` element, `button` element, และ `ul` element เมื่อ`input` element เปลี่ยนไป มันทำให้ `handleChange()` method ทำงาน นอกจากนี้ `input` element ควรเรนเดอร์ค่าของ `input` ที่อยู่ใน state ของ component `button` element ควรทำให้ `submitMessage()` method ทำงาน เมื่อตัวมันถูกคลิก

ขั้นต่อมาให้เขียนสอง methods นี้ คือ `handleChange()` method ที่จะต้องอัปเดต `input` ด้วยข้อความที่ user กำลังพิมพ์ และ `submitMessage()` method ควรเชื่อมข้อความปัจจุบัน (เก็บไว้ใน `input`) กับ `messages' array ใน local state และล้างค่าของ `input`

สุดท้าย ใช้ `ul` เพื่อ map array ของ `messages` และเรนเดอร์ไปยังบนหน้าจอเป็นลิสต์ของ `li` elements 

# --hints--

`DisplayMessages` component ควรมีค่าเริ่มต้นด้วย state เท่ากับ `{ input: "", messages: [] }`

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

`DisplayMessages` component ควรเรนเดอร์ `div` ที่มี `h2` element, `button` element, `ul` element และ `li` `element เป็น child ของมัน

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

`.map` ควรถูกใช้บน `messages` array

```js
assert(code.match(/this\.state\.messages\.map/g));
```

`input` element ควรเรนเดอร์ค่าของ `input` ใน local state

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

การเรียกใช้ method `handleChange` ควรอัปเดตค่า `input` ใน state เป็น input ปัจจุบัน

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

การคลิก `Add message` button ควรเรียกใช้ method `submitMessage` ที่จะเพิ่ม `input` ปัจจุบันไปใน `messages` array ใน state

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

`submitMessage` method ควรเคลีย input ปัจจุบัน

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
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }

        { /* Change code above this line */ }
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
