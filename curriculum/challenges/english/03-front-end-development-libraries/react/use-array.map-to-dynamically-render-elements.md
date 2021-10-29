---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

การเรนเดอร์แบบมีเงื่อนไขมีประโยชน์ แต่คุณอาจต้องการให้ components ของคุณเรนเดอร์ elements ที่ไม่ทราบจำนวนจนมากเกินไป บ่อยครั้งในการเขียนโปรแกรมเชิงโต้ตอบ โปรแกรมเมอร์ไม่มีทางรู้ได้เลยว่าแอพพลิเคชั่นนั้นอยู่ในสถานะใดจนถึงรันไทม์ เพราะโดยมากอยู่กับการโต้ตอบของผู้ใช้กับโปรแกรมนั้น โปรแกรมเมอร์จำเป็นต้องเขียนโค้ดเพื่อจัดการกับสถานะที่ไม่รู้จักนั้นอย่างถูกต้องล่วงหน้า การใช้ `Array.map()` ใน React แสดงให้เห็นภาพถึงแนวคิดนี้

ตัวอย่างเช่น เมื่อคุณสร้างแอป "To Do List" แบบง่ายๆ ในฐานะโปรแกรมเมอร์คุณไม่มีทางรู้ได้เลยว่าผู้ใช้อาจมีไอเท็มกี่รายการในลิสต์ของพวกเขา คุณต้องตั้งค่า component ของคุณเพื่อเรนเดอร์จำนวน list elements ที่ถูกต้องแบบไดนามิกมาก่อนที่ผู้ใช้โปรแกรมจะตัดสินใจว่าวันนี้เป็นวันซักผ้า

# --instructions--

code editor มีการเซ็ท `MyToDoList` component เกือบทั้งหมดไว้แล้ว โค้ดบางส่วนนี้อาจดูคุ้นเคยหากคุณทำโจทย์ controlled form เสร็จแล้ว คุณจะสังเกตเห็น `textarea` และ `button` พร้อมด้วย method สองสาม method ที่ใช้ติดตาม states ของพวกมัน แต่ยังไม่มีการเรนเดอร์ไปยังหน้าเพจ

ภายใน `constructor` ให้สร้าง `this.state` object และกำหนดสอง state คือ: `userInput` ให้เริ่มต้นเป็น string ว่าง และ `toDoList`" ให้เริ่มต้นเป็น array ว่าง แล้วให้ลบ comment ใน `render()` method ข้างตัวแปร `items` ให้ map `toDoList` array ที่จัดเก็บไว้ใน state ภายในของ component และเรนเดอร์ `li` สำหรับแต่ละรายการแบบไดนามิก ลองป้อน string `eat, code, sleep, repeat` ลงใน `textarea` จากนั้นคลิกปุ่มและดูว่าเกิดอะไรขึ้น

**Note:** คุณอาจรู้ว่า child elements ที่อยู่ใน parent เดียวกันทั้งหมดที่สร้างขึ้นโดยการ mapping เช่นนี้ จำเป็นต้องมีการกำหนด `key` attribute ที่ไม่ซ้ำกัน แต่ไม่ต้องกังวลนี่เป็นหัวข้อของแบบทดสอบต่อไป

# --hints--

MyToDoList component ควรมีและเรนเดอร์บนหน้าเพจ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

Child แรกของ `MyToDoList` ควรเป็น `textarea` element

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

Child ที่สองของ `MyToDoList` ควรเป็น `br` element

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

Child ที่สามของ `MyToDoList` ควรเป็น `button` element

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

State ของ `MyToDoList` ควรเริ่มต้นด้วย `toDoList` ที่เป็น array ว่าง

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

State ของ `MyToDoList` ควรเริ่มต้นด้วย `userInput` ที่เป็น string ว่าง

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

เมื่อปุ่ม `Create List` ถูกคลิก `MyToDoList` ควร return ul แบบไดนามิก ที่มีรายการของ item element ของทุกลิสต์รายการที่แยกด้วย comma ที่ถูกพิมพ์ลงไปใน `textarea` element

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
    // Change code below this line

    // Change code above this line
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
    const items = null; // Change this line
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
