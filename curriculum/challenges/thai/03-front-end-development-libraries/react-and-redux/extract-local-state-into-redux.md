---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
forumTopicId: 301428
dashedName: extract-local-state-into-redux
---

# --description--

เกือบสำเร็จแล้ว! จากที่คุณได้เขียนโค้ด Redux ทั้งหมดเพื่อให้ Redux สามารถควบคุมการจัดการ state ของ React messages app ในเมื่อตอนนี้ Redux ได้เชื่อมต่อแล้ว คุณต้องแยกการจัดการ state ออกจาก `Presentational` component และเข้าสู่ Redux ในขณะที่เชื่อมต่อ Redux แล้วนั้น คุณก็กำลังจัดการ state เฉพาะส่วนภายใน `Presentational` component

# --instructions--

ใน`Presentational` component ขั้นแรกให้นำ `messages` property ใน local `state` ออก ข้อความเหล่านี้จะได้รับการจัดการโดย Redux ถัดไปให้แก้ไข `submitMessage()` method เพื่อให้ส่ง `submitNewMessage()` จาก `this.props` และส่งผ่านข้อความปัจจุบันจาก local `state` เป็น argument เนื่องจากคุณลบ `messages` ออกจาก local `state` ให้ลบ `messages` property ออกจากการเรียกใช้  `this.setState()` ด้วย และสุดท้ายแก้ไข `render()` method เพื่อให้ map กับข้อความที่ได้รับจาก `props` แทนที่จะเป็น `state`

เมื่อทำการเปลี่ยนแปลงเหล่านี้แล้ว แอปจะยังคงทำงานเหมือนเดิม ยกเว้น Redux จะจัดการ state ตัวอย่างนี้ยังแสดงให้เห็นว่า component อาจมี local `state` อย่างไร: component ของคุณยังคงติดตามการป้อนข้อมูลของ user ภายในเครื่องใน `state` ของตัวเอง คุณสามารถดูวิธีที่ Redux จัดเตรียมกรอบงานการจัดการ state ที่มีประโยชน์ไว้บน React ได้อย่างไร คุณจะได้รับผลลัพธ์เดียวกันโดยใช้ React's local state เท่านั้นในตอนแรก และมักจะทำได้กับแอปี่เรียบง่ายๆ อย่างไรก็ตามหากแอปของคุณมีขนาดใหญ่ขึ้นและซับซ้อนมากขึ้น การจัดการ state ของคุณก็มีขนาดใหญ่ขึ้นและซับซ้อนมากขึ้นเช่นกัน และนี่คือปัญหาที่ใช้ Redux แก้ไขได้

# --hints--

`AppWrapper` ควรเรนเดอร์ไปยังหน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Presentational` component ควรเรนเดอร์ไปยังหน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` component ควรเรนเดอร์ `h2`, `input`, `button`, และ `ul` elemetn

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

`Presentational` component ควรรับ `messages` จาก Redux store เป็น prop

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

State ของ `Presentational` component ควรมี property `input` หนึ่งอย่าง ที่ค่าเริ่มต้นเป็น string ว่าง

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

การพิมพ์ลงไปใน `input` element ควรอัปเดต state ของ `Presentational` component

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

การส่ง `submitMessage` บน `Presentational` component ควรอัปเดต Redux store และล้างอินพุตใน local state

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

`Presentational` component ควรเรนเดอร์ `messages` จาก Redux store

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

// Change code below this line
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
// Change code above this line

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

// Change code below this line
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
// Change code above this line

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
