---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

ในแบบทดสอบที่ผ่านมา คุณได้สร้าง Redux store เพื่อจัดการ array ข้อความและสร้าง action สำหรับการเพิ่มข้อความใหม่ ขั้นตอนต่อไปคือการให้การเข้าถึง React กับ Redux store และ action ที่จำเป็นในการส่งการอัปเดต ซึ่ง React Redux มีแพ็คเกจ `react-redux` เพื่อช่วยให้งานเหล่านี้สำเร็จ

React Redux มี API ขนาดเล็กพร้อมคุณสมบัติหลักสองประการ คือ: `Provider` และ `connect` ในแบบทดสอบอื่นๆ จะอธิบายครอบคลุมเนื้อหาของ `connect` ในส่วนของ `Provider` นั้นเป็น wrapper component จาก React Redux ที่รวมแอพ React ของคุณ ส่วน Wrapper นี้ช่วยให้คุณเข้าถึงฟังก์ชัน Redux `store` และ `dispatch` ทั่วทั้งโครงสร้าง component ของคุณ ตัว `Provider` นั้นรับ prop สองรายการ ได้แก่ Redux store และ child components แอปของคุณ การกำหนด `Provider` สำหรับ component แอปเขียนโค้ดได้ดังนี้:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

ตอนนี้ code editor จะแสดงโค้ด Redux และ React ทั้งหมดของคุณจากแบบบทดสอบต่างๆ ที่ผ่านมา มันประกอบด้วย Redux store, actions และ `DisplayMessages` component สิ่งใหม่ที่เพิ่มมาสิ่งเดียวคือ `AppWrapper` component ที่ด้านล่าง ใช้ component ระดับบนสุดนี้เพื่อเรนเดอร์ `Provider` จาก `ReactRedux` และส่งผ่าน Redux store เป็น prop จากนั้นเรนเดอร์`DisplayMessages` component เป็น child ของมัน เมื่อคุณทำเสร็จแล้ว คุณควรเห็น React component ของคุณเรนเดอร์ไปยังหน้าเพจ

**Note:** ในที่นี้ React Redux พร้อมใช้งานในฐานะ ตัวแปร global ดังนั้นคุณจึงสามารถเข้าถึง Provider ด้วยเครื่องหมายจุด โค้ดใน editor ใช้ประโยชน์จากสิ่งนี้และตั้งค่าให้เป็น constant `Provider` เพื่อให้คุณใช้ใน`AppWrapper` render method 

# --hints--

ควรเรนเดอร์ `AppWrapper`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Provider` wrapper component ควรมี prop จาก `store` ที่ถูกส่งมาที่มันซึ่งก็คือ Redux store

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

`DisplayMessages` ควรเรนเดอร์เป็น child ของ `AppWrapper`

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

`DisplayMessages` component ควรเรนเดอร์ `h2`, `input`, `button` และ `ul` element

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
  // Render the Provider below this line

  // Change code above this line
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
  // Change code below this line
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // Change code above this line
};
```
