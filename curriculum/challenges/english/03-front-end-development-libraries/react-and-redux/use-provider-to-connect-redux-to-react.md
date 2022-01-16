---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

ในแบบทดสอบที่ผ่านมา คุณได้สร้าง Redux store เพื่อจัดการ array ของข้อความและสร้าง action สำหรับการเพิ่มข้อความใหม่ 
ขั้นตอนต่อไปคือการทำให้ React การเข้าถึง Redux store และ action ที่ต้องใช้เพื่อ dispatch ได้ 
ซึ่ง React Redux มีแพ็คเกจ `react-redux` ที่ใช้ทำแบบนี้ได้

React Redux มี API ตัวเล็กๆที่เด่นๆสองตัว คือ `Provider` และ `connect` เราจะเรียนเรื่อง `connect` กันในแบบทดสอบหน้า 
ส่วน `Provider` นั้นเป็น wrapper component ของ React Redux ครอบแอป React ของคุณ 
ตัว `Provider` นี้ช่วยให้คุณเข้าถึงฟังก์ชัน Redux `store` และ `dispatch` ได้จากทุกส่วนใน component ของคุณ 
`Provider` นั้นรับ prop สองตัว คือ Redux store และ child component ของแอปของคุณ 
การใช้ `Provider` สำหรับ component `App` จะเขียนโค้ดได้แบบนี้:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

ตอนนี้ code editor จะแสดงโค้ด Redux และ React ที่เขียนในแบบบทดสอบที่ผ่านมา โดยจะมี Redux store, action และ component `DisplayMessages` และก็จะมี component `AppWrapper` เพิ่มมาที่ด้านล่างด้วย
ให้ใช้ `AppWrapper` นี้เรนเดอร์ `Provider` จาก `ReactRedux` และส่ง Redux store ไปเป็น prop แล้วให้เรนเดอร์ `DisplayMessages` เป็น child ของของ `Provider` นี้ 
ถ้าทำเสร็จแล้ว คุณควรเห็น React component ของคุณเรนเดอร์ไปยังหน้าเพจ

**Note:** ในที่นี้ React Redux จะเป็นตัวแปร global คุณจึงสามารถเข้าถึง Provider ได้โดยใช้ dot notation 
โค้ดใน editor ได้ใช้วิธีนี้เพื่อเก็บ Provider ลงใน const `Provider` เพื่อให้คุณนำใช้ใน method render ของ `AppWrapper`

# --hints--

ต้องเรนเดอร์ `AppWrapper`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

component `Provider` ต้องส่ง Redux store เข้าไปใน prop ชื่อ `store`

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
      return __helpers
        .removeWhiteSpace(getUserInput('index'))
        .includes('<Providerstore={store}>');
    })()
  );
```

`DisplayMessages` ต้องเป็น child ของ `AppWrapper`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1
    );
  })()
);
```

`DisplayMessages` ต้องเรนเดอร์ `h2`, `input`, `button` และ `ul` ไว้ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h2').length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('ul').length === 1
    );
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
    message
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // ใช้ method render และใช้ Provider ใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // แก้ไขโค้ดใต้บรรทัดนี้
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้
};
```
