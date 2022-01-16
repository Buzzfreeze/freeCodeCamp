---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

การเรนเดอร์แบบมีเงื่อนไขนั้นมีประโยชน์ แต่บางทีคุณอาจอยากเรนเดอร์ component ที่คุณไม่รู้มาก่อนว่าจะต้องเรนเดอร์กี่ตัว
หลายๆครั้งในการเขียนโปรแกรมให้ผู้ใช้ใช้งาน โปรแกรมเมอร์ไม่มีทางรู้ได้เลยว่าแอปนั้นจะได้รับข้อมูลอะไรมา เพราะส่วนมากข้อมูลจะขึ้นอยู่กับสิ่งที่ผู้ใช้กรอกหรือระบุเข้ามา
โปรแกรมเมอร์จำเป็นต้องเขียนโค้ดให้รับมือข้อมูลที่ไม่รู้ล่วงหน้านั้นได้อย่างถูกต้อง 
การใช้ `Array.map()` ใน React ก็เป็นตัวอย่างหนึ่งของการทำงานแบบนี้

เช่น ถ้าคุณสร้างแอป "To Do List" (รายการของสิ่งที่ต้องทำ) ในฐานะโปรแกรมเมอร์ คุณไม่มีทางรู้ได้เลยว่าผู้ใช้จะเพิ่มสิ่งที่ต้องทำเข้ามากี่รายการในลิสต์ คุณจึงจำเป็นต้องเขียน component ของคุณให้เรนเดอร์จำนวน list element แบบไดนามิกให้ได้

# --instructions--

เราได้เขียน component `MyToDoList` ใน code editor ไว้ให้จนเกือบเสร็จแล้ว
คุณอาจคุ้นๆกับโค้ดในนี้ถ้าได้เรียนเรื่อง controlled form ไปแล้ว 
คุณจะเห็นว่ามี `textarea` และ `button` กับ method สองสามตัว ที่ใช้จัดการ states ของ input พวกนี้ แต่จะยังไม่มีการนำข้อมูลไปแสดงผล

ให้สร้าง object `this.state` ใน `constructor` และกำหนด property ใน state ไว้สองตัวคือ: 

1. `userInput` ให้มีค่าเริ่มต้นเป็น string ว่าง และ
2. `toDoList` ให้มีค่าเริ่มต้นเป็น array ว่าง 

แล้วใน method `render()` ให้ลบ comment  หลังตัวแปร `items` ออก
หลังจากนั้นให้ map array `toDoList` ที่อยู่ใน state ของ component เพื่อให้ `items` เก็บค่าเป็น array ของ `li` แทน 
แล้วให้ลองป้อน string `eat, code, sleep, repeat` ลงใน `textarea` จากนั้นคลิกปุ่มและดูว่าเกิดอะไรขึ้น

**Note:** คุณอาจรู้มาก่อนแล้วว่า child element ที่อยู่ใน parent เดียวกันที่สร้างขึ้นจากการ mapping แบบนี้ จำเป็นต้องมี attribute `key` ที่ไม่ซ้ำกัน แต่ไม่ต้องห่วง นี่เป็นหัวข้อของแบบทดสอบต่อไป

# --hints--

ต้องมี `MyToDoList` และต้องเรนเดอร์ได้ด้วย

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

child ตัวแรกของ `MyToDoList` ต้องเป็น `textarea`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

child ตัวที่สองของ `MyToDoList` ต้องเป็น `br`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

child ตัวสามของ `MyToDoList` ต้องเป็น `button`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

state เริ่มต้นของ `MyToDoList` ต้องมี property `toDoList` ที่เป็น array ว่าง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

state เริ่มต้นของ `MyToDoList` ต้องมี property `userInput` ที่เป็น string ว่าง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

เมื่อคลิกปุ่ม `Create List` แล้ว `MyToDoList` ควรต้องคืนค่าออกมาเป็นแท็ก ul แบบไดนามิก ที่มี li อยู่ข้างในหลายๆตัว โดย li แต่ละตัวนี้จะต้องได้ค่ามาจากข้อมูลที่พิมพ์เข้ามาใน `textarea` แล้วก็เอาไปแบ่งออกเป็นแต่ละ li โดยใช้ comma

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // แก้บรรทัดนี้
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
