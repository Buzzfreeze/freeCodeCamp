---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
forumTopicId: 301427
dashedName: connect-redux-to-the-messages-app
---

# --description--

เมื่อคุณเข้าใจวิธีใช้ `connect` เพื่อเชื่อมต่อ React กับ Redux แล้ว คุณจะเอาเรื่องนี้มาใช้กับ React component ที่จัดการกับข้อความได้

ในบทเรียนที่แล้ว component ที่คุณเอามาเชื่อมต่อกับ Redux มีชื่อว่า `Presentational` เราไม่ได้เลือกคำนี้มาโดยไม่ได้คิดอะไร 
แต่การใช้คำนี้ *โดยทั่วไป*จะหมายถึง React component ที่ไม่ได้เชื่อมต่อกับ Redux โดยตรง
component พวกนี้มีหน้าที่ในการแสดง UI โดยทำงานเป็นเหมือนฟังก์ชันที่แสดงผลตาม props ที่ได้รับ 
แต่ก็มี component อีกแบบซึ่งทำงานตรงกันข้ามกันเลย คือ container ซึ่งเป็น component ที่เชื่อมต่อกับ Redux โดยตรง
ปกติ container จะมีหน้าที่ dispatch action ไปยัง store และส่ง state ของ store เป็น props ไปยัง child component

# --instructions--

ใน code editor จะมีโค้ดทั้งหมดที่คุณได้เขียนไปในบทเรียนนี้ อย่างเดียวที่ต่างคือ React component ถูกเปลี่ยนชื่อเป็น `Presentational` 
ให้คุณสร้าง component ใหม่และเก็บลงใน const `Container` ซึ่งจะใช้ `connect` เพื่อเชื่อมต่อ `Presentational` กับ Redux 
จากนั้นใน `AppWrapper` ให้เรนเดอร์ React Redux `Provider` component และส่ง Redux `store` เป็น prop ไปให้ `Provider` แล้วก็เรนเดอร์ `Container` เป็น child ของ `Provider` ตัวนี้
ถ้าทำตามเงื่อนไขนี้เสร็จ คุณจะเห็นแอปถูกเรนเดอร์ในหน้าเพจอีกครั้ง

# --hints--

`AppWrapper` ต้องเรนเดอร์ไปที่หน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Presentational` ต้องเรนเดอร์ไปที่หน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` ต้องมี `h2`, `input`, `button` และ `ul` อยู่ภายใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    return (
      PresentationalComponent.find('div').length === 1 &&
      PresentationalComponent.find('h2').length === 1 &&
      PresentationalComponent.find('button').length === 1 &&
      PresentationalComponent.find('ul').length === 1
    );
  })()
);
```

`Presentational` ต้องได้รับค่า `messages` เป็น prop จาก Redux store

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return Array.isArray(props.messages);
  })()
);
```

`Presentational` ต้องรับ `submitMessage` action creator เป็น prop

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// ประกาศ component Container ตรงนี้:


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // เขียนคำสั่ง return ให้เสร็จตามเงื่อนไข:
    return (null);
  }
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
