---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

แบบทดสอบชุดนี้จะอธิบายวิธีการใช้ Redux กับ React 

เรามาเริ่มที่การทบทวนหลักการสำคัญของแต่ละตัวกันก่อน  
React คือไลบรารีการแสดงผล ที่คุณจะให้ข้อมูลเข้าไป แล้ว React ก็จะแสดงผล ออกมาให้อย่างมีประสิทธิภาพ  
ส่วน Redux เป็นเฟรมเวิร์กการจัดการ state ใช้เพื่อทำให้การจัดการ state ในแอปง่ายขึ้น 

โดยปกติในแอป React Redux คุณจะสร้าง Redux store แค่ตัวเดียวที่จัดการ state ทั้งหมดในแอปของคุณ แล้ว React component ของคุณจะใช้งานข้อมูลของ store แค่ส่วนที่เกี่ยวข้อง 
แล้ว React component ก็จะทำการ dispatch ซึ่งจะทำให้ค่าใน store ถูกอัปเดท

ถึง React component จะจัดการ state ของตัวเองได้ แต่พอแอปมีความซับซ้อนมากขึ้น การใช้ state ตัวเดียวใน Redux จะดีกว่า 
ยกเว้นว่า component ตัวนั้นๆจะมี state ที่ใช้แค่ในขอบเขตของตัวเอง 

สุดท้าย เนื่องจาก Redux ไม่ได้ออกแบบมาให้ทำงานกับ React ได้ตั้งแต่เริ่มต้น คุณจึงต้องใช้แพ็คเกจ `react-redux` ซึ่งจะทำให้ใช้ Redux `state` และ `dispatch` เป็น `props` ไปยัง React component ได้

ในแบบทดสอบต่อๆไป คุณจะต้องสร้าง React component แบบง่ายๆ ที่รับข้อความที่ผู้ใช้พิมพ์เข้ามา และข้อความนี้จะถูกเก็บลงใน array และนำไปแสดงใน view ส่วนนี้จะช่วยรื้อฟื้นความรู้ของคุณในเรื่อง React ได้
จากนั้นคุณจะต้องสร้าง Redux store และ action ที่จัดการ state ที่เป็น array ของข้อความ 
สุดท้ายคุณจะต้องใช้ `react-redux` เพื่อเชื่อมต่อ Redux store กับ component ของคุณ ซึ่งจะนำ state ที่อยู่ใน component ไปเก็บใน Redux store แทน

# --instructions--

ให้เริ่มเขียนที่ component `DisplayMessages` โดยเพิ่ม constructor และตั้งค่าให้ค่าเริ่มต้นของ state มี property 2 ตัว คือ: 

1. `input` โดยให้มีค่าเป็น string ว่าง 
2. `messages` โดยให้มีค่าเป็น array ว่าง

# --hints--

component `DisplayMessages` ต้องมี `div` เปล่าอยู่ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

constructor ของ `DisplayMessages` ต้องเรียกใช้ `super` และส่ง `props` เข้าไปด้วย

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

component `DisplayMessages` ต้องมี state เริ่มต้นเป็น `{input: "", messages: []}`

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
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
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
