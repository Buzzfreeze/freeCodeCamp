---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

คุณส่ง props ไปยัง stateless functional component เป็นแล้วใช่มั้ย?

component พวกนี้จะทำงานเหมือนฟังก์ชันปกติเลย คือจะรับ props เป็น input แล้วก็คืนค่า UI ออกมาเหมือนเดิมถ้าเราส่ง props ตัวเดิมเข้าไป 

ตอนนี้คุณอาจสงสัยแล้วว่า เอ๊ะ แล้ว state คืออะไร? 
เราจะคุยกันเรื่อง state แบบละเอียดกันในแบบทดสอบหน้า 
แต่ตอนนี้เรามารื้อฟื้นคำศัพท์ในเรื่อง component ที่เรียนไปแล้วกันก่อน

*stateless functional component* คือฟังก์ชันที่รับค่าเป็น props และคืนค่าเป็น JSX
โดย *stateless component* จะ extend มาจาก `React.Component` แต่ไม่ได้ใช้ state ในตัว (จะอธิบายในแบบทดสอบถัดไป) 
และสุดท้าย *stateful component* เป็น class component ที่ใช้ state ของตัวเอง ปกติเราจะเรียก stateful component สั้นๆว่า component หรือ React component

โดยทั่วไปแล้วเราจะพยายามลดความเป็น stateful ให้ได้มากที่สุด และจะสร้าง stateless functional component ในทุกที่ที่ทำได้
การทำแบบนี้จะช่วยให้การพัฒนาและปรับปรุงแอพง่ายขึ้น เพราะว่าการใช้ state น้อยลงจะทำให้จุดที่เราต้องดูผลกระทบจากการเปลี่ยนแปลงของ state น้อยลงตามไปด้วย

# --instructions--

ใน code editor มี component ที่ชื่อ `CampSite` อยู่ซึ่งจะที่เรนเดอร์ `Camper` เป็น child 
ให้สร้าง component ชื่อ `Camper` ตามเงื่อนไขนี้

1. กำหนดให้มี default props เป็น `{ name: 'CamperBot' }` 
2. ใน `Camper` จะเขียนให้เรนเดอร์อะไรก็ได้ แต่ต้องให้มี `p` element หนึ่งตัวที่แสดงค่าของ `prop` ที่ชื่อ `name` 
3. ให้ตั้งค่า `propTypes` ใน `Camper` โดยตั้งค่าให้ต้องระบุ prop `name` และต้องเป็นประเภท `string`

# --hints--

component `CampSite` ต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

component `Camper` ต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

`Camper` ต้องตั้งค่า default props โดยมี key ที่ชื่อ `name` ซึ่งมีค่าเป็น string `CamperBot`

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

ต้องตั้งค่า propTypes ใน `Camper` โดยกำหนดให้ prop `name` เป็น `string`

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

`Camper` ต้องมี `p` element ที่แสดงแค่ข้อความจาก prop `name`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return (
      mockedComponent.find('p').text() ===
      mockedComponent.find('Camper').props().name
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// แก้ไขโค้ดใต้บรรทัดนี้

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};
```
