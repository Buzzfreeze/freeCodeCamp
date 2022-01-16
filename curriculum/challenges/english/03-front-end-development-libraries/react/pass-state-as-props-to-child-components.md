---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

คุณได้เห็นตัวอย่างการส่ง props ไปยัง child JSX elements และ child React components ในแบบทดสอบที่ผ่านมาแล้ว 
ตอนนี้คุณน่าจะสงสัยว่า props พวกนี้มาจากไหน 
ปกติแล้วจะเกิดจากการที่คุณมี stateful component ที่มีส่วนหนึ่งของ `state` ที่จำเป็นต้องใช้ในการเรนเดอร์ child component
ถ้าเป็นแบบนี้ child component จะจำเป็นที่จะต้องเข้าถึงส่วนหนึ่งของ `state` นั้นได้ผ่าน props

เช่น คุณอาจมี component `App` ที่แสดง `Navbar` และ component อื่นๆอยู่ 
แล้วตอนนี้ใน `App` มี `state` ที่มีข้อมูลของ user อยู่ ทำให้ `Navbar` จำเป็นจะต้องเข้าถึงค่า username ของ user เพื่อที่จะเอาไปแสดงผลได้ 
ทำให้คุณต้องส่งส่วนของ `state` ที่ต้องใช้นั้นไปยัง component `Navbar` โดยใช้ prop

วิธีนี้จะทำให้เราเห็นรูปแบบที่สำคัญใน React สองรูปแบบ:

- อย่างแรกก็คือ *unidirectional data flow* 
แปลว่าการส่ง State ไปในทิศทางเดียว ซึ่งก็คือในทิศทางจาก parent ลงไปหา child โดย child component จะได้แค่ส่วนของ state ที่ต้องใช้เท่านั้น 
- อย่างที่สองคือการที่แอปเป็นแบบ stateful ที่มีความซับซ้อน จะแบ่งออกเป็น stateful component ตัวย่อยๆได้
การแบ่ง component ออกแบบนี้จะทำให้ child component แค่ต้องรับ state จาก parent ผ่าน props และเรนเดอร์ UI จาก state นั้น 
วิธีนี้จะทำให้เราแยกส่วนที่จัดการ state ออกจากส่วนที่เรนเดอร์ UI ได้
หลักการแยก state logic ออกจาก UI logic นี้เป็นหนึ่งในหลักการสำคัญของ React ซึ่งถ้าใช้ถูกต้อง จะทำให้คุณเขียนแอปที่เป็นแบบ stateful ที่ซับซ้อนได้ง่ายขึ้นมาก

# --instructions--

`MyApp` เป็น component แบบ stateful และมี `Navbar` เป็น child component
ให้คุณส่ง property `name` ของ `state` ลงไปที่ child component จากนั้นให้แสดง `name` ในแท็ก `h1` โดยใช้ method `render` ของ `Navbar` 
และต้องแสดง `name` ไว้หลังข้อความ `Hello, my name is:` ด้วย (ให้ใส่ไว้ในแท็ก `h1` เดียวกัน)

# --hints--

`MyApp` ต้องเรนเดอร์ `Navbar` ไว้ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

ต้องส่ง property `name` จาก `state` ของ `MyApp` เป็น props ไปให้ `Navbar` ด้วย

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

`h1` ใน `Navbar` ต้องเรนเดอร์ค่าของ `props.name` ด้วย

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* แก้ไขโค้ดใต้บรรทัดนี้ */}
         <Navbar />
         {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* แก้ไขโค้ดใต้บรรทัดนี้ */}
      <h1>Hello, my name is: </h1>
      {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
