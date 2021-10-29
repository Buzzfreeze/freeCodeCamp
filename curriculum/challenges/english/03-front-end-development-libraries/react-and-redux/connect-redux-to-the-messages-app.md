---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
forumTopicId: 301427
dashedName: connect-redux-to-the-messages-app
---

# --description--

เมื่อคุณเข้าใจวิธีใช้ `connect` เพื่อเชื่อมต่อ React กับ Redux แล้ว คุณสามารถใช้สิ่งที่คุณได้เรียนรู้กับ React component ที่ใช้จัดการข้อความได้

ในบทเรียนที่แล้ว component ที่คุณเชื่อมต่อกับ Redux มีชื่อว่า `Presentational` และสิ่งนี้ไม่ได้เกิดขึ้นโดยบังเอิญ คำนี้ *โดยทั่วไป* หมายถึง React components ที่ไม่ได้เชื่อมต่อโดยตรงกับ Redux พวกมันมีหน้าที่รับผิดชอบในการนำเสนอ UI และทำสิ่งนี้เป็นเสมือน function ของ props ที่พวกเขาได้รับ ในทางตรงกันข้าม container components เชื่อมต่อกับ Redux โดยทั่วไปแล้วสิ่งเหล่านี้จะรับผิดชอบในปล่อย action ต่างๆ ไปยังหน่วยความจำ และมักจะส่งผ่าน state ของหน่วยความจำ ไปยัง child components เป็น props

# --instructions--

จนถึงตอนนี้ code editor มีโค้ดทั้งหมดที่คุณได้เขียนไปแล้วในบทเรียนนี้ การเปลี่ยนแปลงเพียงอย่างเดียวคือ React component ถูกเปลี่ยนชื่อเป็น `Presentational` ให้คุณสร้าง component ใหม่ที่ถูกเก็บไว้ใน constant ที่เรียกว่า `Container` ซึ่งใช้ `connect` เพื่อเชื่อมต่อ `Presentational` component กับ Redux จากนั้นใน `AppWrapper` ให้เรนเดอร์ React Redux `Provider` component ส่ง `Provider` ไปที่ Redux `store` ให้เป็น prop และเรนเดอร์ `Container` เป็น child เมื่อตั้งค่าทุกอย่างแล้ว คุณจะเห็นแอปข้อความถูกเรนเดอร์ในหน้าเพจอีกครั้ง

# --hints--

`AppWrapper` ควรเรนเดอร์ไปที่หน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Presentational` component ควรเรนเดอร์ไปที่หน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` component ควรเรนเดอร์ `h2`, `input`, `button` และ `ul` elements

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

`Presentational` component ควรครับค่า `messages` จาก Redux store เป็น prop

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

`Presentational` component ควรรับ `submitMessage` action creator เป็น prop

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

// Define the Container component here:


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
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
