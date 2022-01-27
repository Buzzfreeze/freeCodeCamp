---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
forumTopicId: 301428
dashedName: extract-local-state-into-redux
---

# --description--

อีกนิดเดียว! 

จากที่คุณได้เขียนโค้ด Redux ทั้งหมดเพื่อให้ Redux สามารถควบคุมการจัดการ state ของแอป React ได้
เมื่อ Redux ได้เชื่อมต่อแล้ว คุณต้องแยกการจัดการ state ออกจาก component `Presentational` และเอาไปเก็บใน Redux แทน
ถึงตอนนี้คุณจะเชื่อมต่อ Redux แล้ว แต่การจัดการ state ก็ยังเป็นแค่การจัดการในขอบเขตของ `Presentational` เท่านั้น

# --instructions--

ให้แก้ไขโค้ดใน component `Presentational` 
โดยขั้นแรกให้นำ property `messages` ใน local `state` ออก เราจะใช้ Redux จัดการ `messages` พวกนี้แทน
ต่อไปให้แก้ไข method `submitMessage()` เพื่อให้ dispatch `submitNewMessage()` จาก `this.props` โดยให้ argument เป็น `input` ของ local `state`

ให้ลบ property `messages` ออกจากการเรียกใช้ `this.setState()` ด้วย เพราะว่าคุณได้ลบ `messages` ออกจาก local `state` ไปแล้ว
และสุดท้ายให้แก้ method `render()` เพื่อให้ map `messages` จาก `props` แทนที่จะเป็น `state`

ถ้าแก้โค้ดตามเงื่อนไขข้างบนเสร็จแล้ว แอปจะยังคงทำงานเหมือนเดิม แต่ Redux จะเป็นตัวที่จัดการ state แทน 

# --hints--

ต้องเรนเดอร์ `AppWrapper` ไปยังหน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

ต้องเรนเดอร์ `Presentational` ไปยังหน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` ต้องมี `h2`, `input`, `button`, และ `ul` อยู่ภายใน

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

`Presentational` ต้องรับ `messages` เป็น prop จาก Redux store 

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

state ของ `Presentational` ต้องมี property แค่ตัวเดียวคือ `input` โดยมีค่าเริ่มต้นเป็น string ว่าง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalState = mockedComponent
      .find('Presentational')
      .instance().state;
    return (
      typeof PresentationalState.input === 'string' &&
      Object.keys(PresentationalState).length === 1
    );
  })()
);
```

การพิมพ์ลงไปใน `input` element ต้องไปอัปเดต state ของ `Presentational`

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const testValue = '__MOCK__INPUT__';
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  let initialInput = mockedComponent.find('Presentational').find('input');
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const updated = await changed();
  const updatedInput = updated.find('Presentational').find('input');
  assert(
    initialInput.props().value === '' &&
      updatedInput.props().value === '__MOCK__INPUT__'
  );
};
```

การ dispatch `submitMessage` ใน `Presentational` ต้องไปอัปเดต Redux store และล้าง `input` ของ local state

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === ''
  );
};
```

`Presentational` ต้องใช้ `messages` จาก Redux store ไม่ใช่ local state

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === '' &&
      afterClick.find('ul').childAt(0).text() === testValue
  );
};
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// แก้ไขโค้ดใต้บรรทัดนี้
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
    this.setState((state) => ({
      input: '',
      messages: state.messages.concat(state.input)
    }));
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
// แก้ไขโค้ดเหนือบรรทัดนี้

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// แก้ไขโค้ดใต้บรรทัดนี้
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
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
          {this.props.messages.map( (message, idx) => {
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
// แก้ไขโค้ดเหนือบรรทัดนี้

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
