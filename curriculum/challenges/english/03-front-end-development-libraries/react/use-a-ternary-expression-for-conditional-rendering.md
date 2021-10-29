---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

ก่อนที่จะไปยังเทคนิคการเรนเดอร์แบบไดนามิก มันมีวิธีสุดท้ายในการใช้เงื่อนไข JavaScript ในตัวเพื่อเรนเดอร์สิ่งที่คุณต้องการ: <dfn>ternary operator</dfn> ternary operator มักจะถูกใช้เป็นทางลัดสำหรับคำสั่ง `if/else` ใน JavaScript พวกมันไม่ค่อยแข็งแกร่งเท่าคำสั่ง `if/else` แบบดั้งเดิม แต่เป็นที่นิยมอย่างมากในหมู่นักพัฒนา React สาเหตุหนึ่งเป็นเพราะวิธีการคอมไพล์ JSX คำสั่ง `if/else` ไม่สามารถแทรกลงในโค้ด JSX ได้โดยตรง คุณอาจสังเกตเห็นได้ในแบบทดสอบสองสามครั้งที่ผ่านมา — เมื่อจำเป็นต้องมีคำสั่ง `if/else` มันมักจะ *อยู่นอก* คำสั่ง `return` เสมอ Ternary expressions อาจเป็นทางเลือกที่ดีหากคุณต้องการใช้ตรรกะแบบมีเงื่อนไขภายใน JSX ของคุณ จำได้ว่า ternary operator มีสามส่วน แต่คุณสามารถรวม ternary expressions หลายตัวเข้าด้วยกันได้ และนี่คือ syntax พื้นฐาน:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

code editor มีค่าคงที่ 3 ค่าที่กำหนดไว้ภายใน `render()` method ของ `CheckUserAge` component เรียกว่า `buttonOne`, `buttonTwo` และ `buttonThree` แต่ละรายการเหล่านี้ถูกกำหนดนิพจน์ JSX อย่างง่ายซึ่งแสดง button element ขั้นแรกให้เริ่มต้น state ของ `CheckUserAge` โดย `input` และ `userAge` ทั้งสองตั้งค่าเป็นค่าของ string ว่าง

เมื่อ component เรนเดอร์ข้อมูลไปยังเพจแล้ว users ควรมีวิธีการโต้ตอบกับมัน ภายในคำสั่ง `return` ของ component ให้ตั้งค่า ternary expression ที่ใช้ตรรกะต่อไปนี้: เมื่อโหลดหน้าเว็บครั้งแรกให้เรนเดอร์ปุ่ม submit หรือ `buttonOne` ไปยังเพจ จากนั้นเมื่อ user กรอกอายุและคลิกปุ่มนั้น ให้เรนเดอร์ปุ่มที่แตกต่างกันตามอายุ หาก user ป้อนตัวเลขที่น้อยกว่า `18` ให้เรนเดอร์ `buttonThree` หากผู้ใช้ป้อนตัวเลขที่มากกว่าหรือเท่ากับ `18` ให้เรนเดอร์ `buttonTwo`

# --hints--

`CheckUserAge` component ควรเรนเดอร์ด้วย `input` element และ `button` element อย่างละหนึ่ง

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

State ของ `CheckUserAge` component ควรเริ่มต้นด้วย property ของ `userAge` และ property ของ `input` ให้ทั้งคู่มี value เท่ากับ string ว่าง

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

เมื่อ `CheckUserAge` component เรนเดอร์ครั้งแรกไปยัง DOM ข้อความข้างในของ `button` ควรเป็น Submit

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

เมื่อได้รับการใส่ตัวเลขที่น้อยกว่า 18 เข้ามาที่ `input` element และ `button` ได้โดนถูกคลิก ข้อความข้างใน `button` จะถูกเปลี่ยนเป็นคำว่า `You Shall Not Pass`

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

เมื่อได้รับการใส่ตัวเลขที่มากกว่าหรือเท่ากับ 18 เข้ามาที่ `input` element และ `button` ได้โดนถูกคลิก ข้อความข้างใน `button` จะถูกเปลี่ยนเป็นคำว่า `You May Enter`

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

เมื่อตัวเลขได้ส่งมากแล้ว ค่าของ `input` ได้เปลี่ยนไปอีกครั้ง ข้อความใน `button` ควรจะกลับไปเป็น `Submit`

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

โค้ดของคุณไม่ควรมีคำสั่ง `if/else` เลย

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
    // Change code below this line

    // Change code above this line
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
        {/* Change code below this line */}

        {/* Change code above this line */}
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
