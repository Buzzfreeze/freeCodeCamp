---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

คุณเห็นตัวอย่างมากมายที่ส่งผ่าน props ไปยัง child JSX elements และ child React components ในแบบทดสอบครั้งก่อน คุณอาจสงสัยว่า props เหล่านั้นมาจากไหน รูปแบบทั่วไปคือการมี stateful component ที่มี `state` ที่สำคัญต่อแอปของคุณ ซึ่งจะเรนเดอร์ child components ต่อ คุณต้องการให้ components เหล่านี้เข้าถึงบางส่วนของ `state` นั้น ซึ่งถูกส่งผ่านเป็น props

ตัวอย่างเช่นคุณอาจมี `App` component ที่แสดง `Navbar` รวมถึง components อื่นๆ คุณมี `state` ที่มีข้อมูล user จำนวนมากภายใน `App` แต่ `Navbar` ต้องการสิทธิ์เข้าถึง username ของ user เท่านั้นจึงจะสามารถแสดงผลได้ คุณส่งชิ้นส่วนของ `state` นั้นไปยัง ` Navbar` component เป็น prop

รูปแบบนี้แสดงให้เห็นถึงรูปแบบที่สำคัญบางอย่างใน React อย่างแรกคือ *unidirectional data flow* State เคลื่อนไปในทิศทางเดียวตามแผนผังของ components ของแอปพลิเคชันของคุณ ตั้งแต่ stateful parent component ไปจนถึง child components โดย child components จะได้รับข้อมูล state ที่ต้องการเท่านั้น อย่างที่สองคือ stateful apps ที่ซับซ้อนสามารถแบ่งออกเป็นส่วนน้อยหรืออาจเป็น stateful component เพียงส่วนเดียว components ที่เหลือของคุณเพียงแค่รับ state จาก parent เป็น props และเรนเดอร์ UI จาก state นั้น มันเริ่มสร้างการแยกที่มีการจัดการ state ในส่วนของโค้ดและการเรนเดอร์ UI ในส่วนอื่น หลักการแยก state logic ออกจาก UI logic นี้เป็นหนึ่งในหลักการสำคัญของ React เมื่อใช้อย่างถูกต้องจะทำให้การออกแบบ stateful applications ที่ซับซ้อนได้ง่ายขึ้นมาก

# --instructions--

component `MyApp` มีการเก็บ state และเรนเดอร์ `Navbar` component เป็น child ส่งคุณสมบัติ `name` property ใน `state` ลงไปที่ child component จากนั้นแสดง `name` ในแท็ก `h1` ซึ่งเป็นส่วนหนึ่งของ method การเรนเดอร์ `Navbar` `name` ควรปรากฏหลังข้อความ `Hello, my name is:`

# --hints--

`MyApp` component ควรเรนเดอร์ให้มี `Navbar` component ข้างใน

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

`Navbar` component ควรรับ `MyApp` state property `name` เป็น props

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

`h1` element ใน `Navbar` ควรเรนเดอร์ `name` prop

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
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
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
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
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
