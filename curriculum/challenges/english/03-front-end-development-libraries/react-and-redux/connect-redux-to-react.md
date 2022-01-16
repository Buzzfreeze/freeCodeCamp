---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

ตอนนี้คุณได้เขียนทั้งฟังก์ชัน `mapStateToProps()` และ `mapDispatchToProps()` แล้ว 
คุณสามารถใช้ฟังก์ชันสองตัวนี้เพื่อ map `state` และ `dispatch` กับ `props` ของ React component ได้แล้ว 
การใช้ method `connect` ของ React Redux จะทำส่วนนี้ได้ ซึ่ง method `connect` นี้รับ optional argument (optional argument คือ argument ที่จะส่งไปให้ method หรือไม่ส่งไปก็ได้) สองตัวคือ `mapStateToProps()` และ `mapDispatchToProps()` 
สาเหตุที่เป็น optional argument ก็เพราะว่า component ของเราอาจต้องการเข้าถึงแค่ `state` แต่ไม่ต้องการเข้าถึง `dispatch` หรืออาจต้องการเข้าถึง `dispatch` แต่ไม่ต้องการเข้าถึง `state` ทำให้เราเลือกที่จะส่งแค่ argument ตัวใดตัวหนึ่งได้

ถ้าต้องการใช้ method นี้ ให้ส่งฟังก์ชันเป็น argument แล้วเรียกใช้ผลลัพธ์ด้วย component ของคุณทันที 
syntax นี้จะดูแปลกสักหน่อย ลองดูตัวอย่าง:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Note:** ถ้าต้องการส่ง argument ของ method `connect` แค่ตัวเดียว จะต้องส่ง `null` ไปแทน argument อีกตัวที่ไม่ส่ง เช่น `connect(null, mapDispatchToProps)(MyComponent)`

# --instructions--

เราได้เขียนฟังก์ชัน `mapStateToProps()` กับ `mapDispatchToProps()` และ React component ใหม่ที่ชื่อ `Presentational` ใน code editor ให้แล้ว 
ให้เชื่อม component นี้กับ Redux ด้วย method `connect` โดยใช้ `ReactRedux` ที่เป็น object แบบ global และเรียกใช้โดยส่ง component `Presentational` เข้าไปทันที 
และให้เก็บค่าลงอ `const` ตัวใหม่ที่ชื่อ `ConnectedComponent` ซึ่งจะเป็น component ที่เชื่อมต่อกับ Redux แล้ว 
ให้ลองเปลี่ยน argument ของ `connect` เป็น `null` และดูการเปลี่ยนแปลง

# --hints--

`Presentational` ต้องเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` ต้องรับ prop `messages` ผ่านทาง `connect`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

`Presentational` ต้องรับ prop `submitNewMessage` ผ่านทาง `connect`

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
// แก้ไขโค้ดใต้บรรทัดนี้
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
// แก้ไขโค้ดใต้บรรทัดนี้

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
