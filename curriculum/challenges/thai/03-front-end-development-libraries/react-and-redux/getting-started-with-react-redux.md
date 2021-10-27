---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

แบบทดสอบชุดนี้จะอธิบายวิธีการใช้ Redux กับ React อันดับแรกนี่คือการทบทวนหลักการสำคัญบางประการของแต่ละเทคโนโลยี React คือไลบรารีมุมมองที่คุณจัดเตรียมไว้กับข้อมูล จากนั้นจึงเรนเดอร์มุมมองด้วยวิธีที่มีประสิทธิภาพและคาดการณ์ได้ Redux เป็นเฟรมเวิร์กการจัดการ state ที่คุณสามารถใช้เพื่อทำให้การจัดการสถานะแอปพลิเคชันของคุณง่ายขึ้น โดยปกติในแอป React Redux คุณจะสร้างร้าน Redux เดียวที่จัดการสถานะของแอปทั้งหมดของคุณ React components ของคุณจะเข้าไปใช้งานเฉพาะส่วนของข้อมูลใน store ที่เกี่ยวข้องกับบทบาทของพวกมัน จากนั้นคุณส่ง action ต่างๆ โดยตรงจาก React components ซึ่งทำให้การอัปเดต store  ทำงาน

แม้ว่า React component สามารถจัดการ state ของตนเองในเครื่องได้ แต่เมื่อคุณมีแอปที่ซับซ้อน โดยทั่วไป การรักษา state ของแอปไว้ในที่เดียวด้วย Redux จะเป็นวิธีดีกว่า มีข้อยกเว้นเมื่อ components แต่ละรายการอาจมี state เฉพาะสำหรับ components เหล่านั้นเท่านั้น สุดท้าย เนื่องจาก Redux ไม่ได้ออกแบบมาให้ทำงานกับ React ได้ตั้งแต่เริ่มต้น คุณจึงต้องใช้แพ็คเกจ `react-redux` มันมีวิธีให้คุณส่ง Redux `state` และ `dispatch` ไปยัง React component ของคุณเป็น `props`

ในอีกสองสามแบบทดสอบหลังจากนี้ คุณจะต้องสร้าง React component แบบง่ายๆ ซึ่งช่วยให้คุณสามารถป้อนข้อความใหม่ได้ ข้อความเหล่านี้จะถูกเพิ่มลงใน array และนำแสดงใน view นี่ควรเป็นการทบทวนที่ดีเกี่ยวกับสิ่งที่คุณได้เรียนรู้ในบทเรียน React จากนั้นคุณจะต้องสร้าง Redux store และ actions ที่จัดการสถานะของ array ข้อความ สุดท้ายคุณจะต้องใช้ `react-redux` เพื่อเชื่อมต่อ Redux store กับ component ของคุณ ซึ่งจะแยก state ในเครื่องออกจาก Redux store

# --instructions--

เริ่มต้น`DisplayMessages` component ให้เพิ่ม constructor ให้กับ component นี้และเริ่มมันด้วย state ที่มี 2 property คือ: `input` ที่ตั้งค่าเป็น string ว่าง และ `messages` ที่ตั้งค่าเป็น array ว่าง

# --hints--

`DisplayMessages` component ควรเรนเดอร์ `div` element เปล่า

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

`DisplayMessages` constructor ควรถูกเรียกใช้อย่างถูกต้องด้วย `super` ส่งต่อใน `props`

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('constructor(props)') &&
        noWhiteSpace.includes('super(props')
      );
    })()
  );
```

`DisplayMessages` component ควรมี state เริ่มต้นเท่ากับ `{input: "", messages: []}`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      Array.isArray(initialState.messages) &&
      initialState.messages.length === 0
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```
