---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

แบบทดสอบที่ผ่านมาแสดงให้เห็นว่า React สามารถควบคุมสถานะภายในสำหรับ element บางอย่าง เช่น `input` และ `textarea` ซึ่งทำให้พวกมันกลายเป็น component ควบคุม สิ่งนี้ใช้กับ form element อื่นๆ เช่นกัน รวมถึง HTML `form` element ปกติด้วย

# --instructions--

"MyForm" component ถูกตั้งค่าด้วย `form` ที่ว่างเปล่าพร้อม submit handler ซึ่งจะถูกเรียกใช้งานเมื่อฟอร์มได้ถูก submit

เราได้เพิ่มปุ่มสำหรับ submit แบบฟอร์ม คุณจะเห็นว่ามีการตั้งค่า `type` เป็น submit ซึ่งระบุว่าเป็นปุ่มที่ควบคุมแบบฟอร์ม เพิ่ม `input` element ใน `form` และตั้งค่า `value` และ `onChange()` attribute เหมือนกับแบบทดสอบก่อนหน้านี้ จากนั้นคุณควรสร้าง `handleSubmit` method ให้สำเร็จ เพื่อให้ตั้งค่าคุณสมบัติสถานะ component `submit` เป็นค่า input ปัจจุบันใน local `state`

**Note:** คุณต้องเรียก `event.preventDefault()` ใน submit handler เพื่อป้องกันลักษณะการ submit ฟอร์มเริ่มต้นซึ่งจะรีเฟรชหน้าเว็บ เพื่อความสะดวกผู้เรียน ลักษณะเริ่มต้นนี้ถูกปิดใช้งานที่นี่เพื่อป้องกันการรีเฟรชจากการรีเซ็ตโค้ดของแบบทดสอบนี้

สุดท้าย ให้สร้าง `h1` tag หลัง `form` ซึ่งเรนเดอร์ค่า `submit` จาก `state` ของ component จากนั้นคุณสามารถพิมพ์กรอกแบบฟอร์มและคลิกปุ่ม (หรือกด Enter) และคุณควรเห็นข้อมูลที่คุณป้อนเข้าไปถูกแสดงบนหน้าเพจ

# --hints--
 
`MyForm` ควรจะต้อง return 1 `div` element ที่มี `form` และ an `h1` tag ข้างใน ฟอร์มนี้ควรจะต้องมี `input` และ `button` ด้วย

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

สถานะของ `MyForm` ควรเริ่มต้นด้วย `input` และ `submit` properties ที่ถูกตั้งค่าให้เป็น string เปล่า

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

การพิมพ์กรอกข้อมูลใน `input` ควรจะต้องมีการอัปเดต `input` property ของสถานะของ component

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

การ submit ฟอร์มควรจะต้องทำให้ `handleSubmit` ทำงาน ซึ่งจะเป็นการตั้งค่า `submit` property ในสถานะที่เท่ากับ input ปัจจุบัน

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

`handleSubmit` ควรจะต้องเรียกใช้งาน `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

`h1` header ควรจะต้องเรนเดอร์ ค่าของ `submit` field จากสถานะของ component

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
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
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
