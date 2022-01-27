---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

แบบทดสอบที่แล้วเราจะเห็นแล้วว่า React สามารถควบคุม state ใน element บางตัว เช่น `input` และ `textarea` ได้  
เราจะเรียก element ที่ถูก React ควบคุม state ว่า Controlled Component
ซึ่งการควบคุม state แบบนี้จะใช้ได้กับ form element อื่นๆ รวมถึง HTML `form` element แบบปกติด้วย

# --instructions--

เราได้สร้าง component ชื่อ `MyForm` ไว้ให้แล้ว โดยข้างใน component นี้จะมี `form` ที่ยังไม่มีข้อมูลอยู่ด้วย และ `form` นี้ก็ได้มีการตั้งค่า submit handler ไว้แล้ว ซึ่งจะถูกเรียกใช้งานเมื่อฟอร์มถูก submit

เราได้เพิ่มปุ่มที่ใช้ submit `form` ให้แล้ว คุณจะเห็นว่ามีการตั้งค่า `type` ของ `button` เป็น submit ซึ่งเป็นการระบุว่าปุ่มนี้จะใช้ควบคุม `form`  
ให้คุณเพิ่ม `input` element ใน `form` และตั้งค่า attribute `value` และ `onChange()`  ให้เหมือนกับแบบทดสอบที่แล้ว  
จากนั้นให้เขียน method `handleSubmit` โดย method นี้จะทำงานโดยการ เปลี่ยนค่าของ `submit` ใน `state` เป็นค่าปัจจุบันของ input ใน `state`

**Note:** คุณต้องเรียกใช้ `event.preventDefault()` ใน submit handler เพื่อไม่ให้การ submit ไปรีเฟรชหน้าเว็บ  
(จริงๆแล้ว ตอนนี้เราได้ปิดการรีเฟรชหน้าเว็บไว้ให้แล้ว แต่คุณควรเรียกใช้ method ด้วยนี้เพื่อให้เข้าใจการทำงาน)้

สุดท้าย ให้สร้างแท็ก `h1` ไว้ใต้ `form` ซึ่งจะดึงค่าของ `submit` จาก `state` ของ component มากแสดง  
ถ้าทำเสร็จแล้วและถูกต้อง ให้ลองพิมพ์ข้อความในช่อง input และคลิกปุ่ม `Submit!` (หรือกด Enter)  จากนั้นคุณจะเห็นข้อความที่พิมพ์ลงไปแสดงบนหน้าเว็บ

# --hints--
 
`MyForm` ควรจะต้องคืนค่าเป็น `div` ที่มี `form` และ `h1` อยู่ข้างใน โดยใน `form` นี้จะต้องมี `input` และ `button` ด้วย

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

ค่าเริ่มต้นของ state ของ `MyForm` ต้องมี property `input` และ `submit` ที่มีค่าเป็น string ว่าง

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

การพิมพ์ข้อความลงใน `input` จะต้องไปอัปเดท property `input` ใน state ของ component

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

การ submit จะต้องไปเรียกใช้ `handleSubmit` ซึ่งจะต้องไปเปลี่ยนค่าของ property `submit` ใน `state` ไปเป็นค่าปัจจุบันของ property `input` ใน `state`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` ต้องไปเรียกใช้งาน method `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

`h1` ต้องแสดงค่าของ property `submit` ที่ดึงมากจาก state ของ component

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

          {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
          <button type='submit'>Submit!</button>
        </form>
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

        {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
