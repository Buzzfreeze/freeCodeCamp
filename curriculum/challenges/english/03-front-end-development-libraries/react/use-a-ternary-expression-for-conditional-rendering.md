---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

ก่อนที่เราจะไปเรียนเทคนิคการเรนเดอร์แบบไดนามิก จะมีอีกวิธีหนึ่งในการใช้ JavaScript เพื่อเรนเดอร์สิ่งที่คุณต้องการ เราเรียกวิธีนี้ว่า <dfn>ternary operator</dfn> 
ternary operator มักจะถูกใช้เป็นการเขียน `if/else` แบบสั้นๆ ใน JavaScript ถึงแม้จะมีข้อจำกัดมากกว่า `if/else` แบบปกติ แต่กลับเป็นที่นิยมอย่างมากในคนที่เขียน React 
สาเหตุหนึ่งเป็นเพราะวิธีการคอมไพล์ JSX ทำให้แทรก `if/else` ลงในโค้ด JSX ได้โดยตรง 
ในแบบทดสอบที่ผ่านมาคุณน่าจะเห็นแล้วว่า เวลาเราใช้ `if/else` คำสั่งนี้จะ *อยู่นอก* คำสั่ง `return` เสมอ 
Ternary expression เป็นทางเลือกที่ดีถ้าอยากเขียนเงื่อนไขใน JSX
ถ้ายังจำได้ ternary operator จะมีสามส่วน แต่คุณก็รวม ternary expression หลายๆตัวเข้าด้วยกันได้ 
ลองดู syntax พื้นฐานกันก่อน:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

code editor มีค่าคงที่ 3 ค่าที่กำหนดไว้ใน method `render()` ของ component `CheckUserAge` คือ `buttonOne`, `buttonTwo` และ `buttonThree` 
ซึ่งได้เขียน JSX ที่แสดง button ไว้ให้แล้ว 

ขั้นแรกให้ตั้งค่าเริ่มต้นของ state ของ `CheckUserAge` ให้มี property `input` และ `userAge` โดยมีค่าเป็น string ว่าง

เมื่อ component เรนเดอร์ข้อมูลแล้ว user จะใช้ปุ่มเหล่านี้ได้ 

ในคำสั่ง `return` ของ component ให้เขียน ternary expression โดยมีเงื่อนไขตามนี้: 

1. เมื่อโหลดหน้าเว็บครั้งแรกให้แสดงปุ่ม submit หรือ `buttonOne` 
2. เมื่อ user กรอกอายุและคลิกปุ่ม ให้แสดงปุ่มใหม่ตามอายุ 
3. ถ้า user ใส่อายุน้อยกว่า `18` ให้แสดง `buttonThree` 
4. ถ้า user ใส่อายุตั้งแต่ `18` ขึ้นไป ให้แสดง `buttonTwo`

# --hints--

`CheckUserAge` ต้องแสดง `input` และ `button` อย่างละหนึ่งตัว

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

state เริ่มต้นของ `CheckUserAge` ต้องมี property `userAge` และ `input` โดยทั้งสองตัวนี้จะต้องมีค่าเป็น string ว่าง

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

เมื่อ `CheckUserAge` ถูกเรนเดอร์ไปยัง DOM ในตอนแรกข้อความใน `button` ต้องเป็น Submit

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

เมื่อ user ระบุตัวเลขน้อยกว่า 18 เข้ามาที่ `input` และ `button` ถูกคลิก ข้อความข้างใน `button` จะถูกเปลี่ยนเป็นคำว่า `You Shall Not Pass`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

เมื่อ user ระบุตัวเลขตั้งแต่ 18 ขึ้นไป เข้ามาที่ `input` และ `button` ถูกคลิก ข้อความข้างใน `button` จะถูกเปลี่ยนเป็นคำว่า `You May Enter`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

ถ้า user ส่งข้อมูลโดยคลิก `Submit` แล้ว และหลังจากนั้นค่าของ `input` เปลี่ยนไป ข้อความใน `button` จะต้องกลับไปเป็น `Submit`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

ห้ามใช้ `if/else` ในโค้ด

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    Enzyme.mount(React.createElement(CheckUserAge)).instance().render.toString()
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

        {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
