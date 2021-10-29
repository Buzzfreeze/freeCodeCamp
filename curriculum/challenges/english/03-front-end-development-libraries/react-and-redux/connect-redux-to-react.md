---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

ตอนนี้ได้ลองเขียนทั้งฟังก์ชัน `mapStateToProps()` และ `mapDispatchToProps()` แล้ว คุณสามารถใช้มันเพื่อ map `state` และ `dispatch` กับ `props` ของหนึ่งใน React components การใช้ `connect` method จาก React Redux สามารถใช้จัดการงานนี้ได้ ซึ่ง method ใช้นี้ใช้ argument ทางเลือกสองแบบคือ `mapStateToProps()` และ `mapDispatchToProps()` พวกมันเป็นทางเลือก เนื่องจากคุณอาจมี component ที่เพียงต้องการเข้าถึงแค่ `state` เท่านั้น แต่ไม่จำเป็นต้องดำเนินการอื่นใดอีก หรืออาจจะคิดในทางกลับกันก็ได้

หากต้องการใช้ method นี้ ให้ส่งผ่านฟังก์ชันเป็น argument แล้วเรียกใช้ผลลัพธ์ด้วย component ของคุณทันที ตัวอย่าง syntax นี้อาจจะดูแปลกเล็กน้อย:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Note:** หากคุณต้องการละเว้นหนึ่งใน arguments ของ `connect` method คุณจะต้องส่งค่า `null` แทนตำแหน่งของมัน

# --instructions--

code editor มีฟังก์ชัน `mapStateToProps()` และ `mapDispatchToProps()` และ React component ใหม่ที่เรียกว่า `Presentational` ให้เชื่อมต่อ component นี้กับ Redux ด้วย `connect` method `ReactRedux` global object และเรียกใช้ทันทีบน`Presentational` component ให้กำหนดผลลัพธ์ให้กับ `const` ใหม่ที่เรียกว่า `ConnectedComponent` ซึ่งแสดงถึง component ที่ได้เชื่อมต่อ เพียงแค่นี้คุณก็จะเชื่อมต่อกับ Redux แล้ว! ลองเปลี่ยน arguments ของ `connect` เป็น `null` และสังเกตผลลัพธ์ของการทดสอบนี้

# --hints--

`Presentational` component ควรเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` component ควรรับ prop `messages` ผ่านทาง `connect`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

`Presentational` component ควรรับ prop `submitNewMessage` ผ่านทาง `connect`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
const store = Redux.createStore(
  (state = '__INITIAL__STATE__', action) => state
);
class AppWrapper extends React.Component {
  render() {
    return (
      <ReactRedux.Provider store = {store}>
        <ConnectedComponent/>
      </ReactRedux.Provider>
    );
  }
};
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
