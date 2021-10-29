---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

ยกเว้นแบบทดสอบที่ผ่านมา คุณได้ส่ง props ไปยัง stateless functional components components เหล่านี้ทำหน้าที่เหมือนฟังก์ชันธรรมดา พวกมันยอมรับ props เป็น input และ return มุมมองเดิมทุกครั้งที่ถูกส่ง props เดียวกัน คุณอาจสงสัยว่า state คืออะไรในแบบทดสอบต่อไปจะกล่าวถึงมันในรายละเอียดเพิ่มเติม ก่อนอื่นนี่คือการทบทวนคำศัพท์ต่างๆ สำหรับ components

*stateless functional component* คือฟังก์ชันใดๆ ที่คุณเขียนซึ่งยอมรับ props และ return JSX ในทางกลับกัน *stateless component* เป็นคลาสที่ขยาย `React.Component` แต่ไม่ได้ใช้ state ภายใน (จะอธิบายในแบบทดสอบถัดไป) สุดท้าย *stateful component* เป็น class component ที่รักษา state ภายในของตัวเอง คุณอาจเห็น stateful components ที่เรียกสั้นๆ ว่า components หรือ React components

โดยทั่วไปแล้วเราจะพยายามลด statefulness ให้เหลือน้อยที่สุดและสร้าง stateless functional components ในทุกที่ที่ทำได้ ซึ่งจะช่วยให้มีการจัดการ state ในพื้นที่เฉพาะของแอปพลิเคชันของคุณ สิ่งนี้ช่วยปรับปรุงการพัฒนาและบำรุงรักษาแอปของคุณโดยทำให้ง่ายต่อการติดตามว่าการเปลี่ยนแปลง state ส่งผลต่อพฤติกรรมของแอปอย่างไร

# --instructions--

code editor มี `CampSite` component ที่เรนเดอร์ `Camper` component เป็น child กำหนดให้ `Camper` component และกำหนด props เริ่มต้นของ `{ name: 'CamperBot' }` ให้เรนเดอร์โค้ดใดๆ ที่คุณต้องการภายใน`Camper` component แต่ต้องให้มี `p` element หนึ่งรายการที่มีเฉพาะ`name` value ที่ส่งผ่านเป็น `prop` สุดท้ายกำหนด `propTypes` บน`Camper` component เพื่อเรียกให้ระบุ `name` เป็น prop และตรวจสอบว่าเป็นประเภท `string`

# --hints--

`CampSite` component ควรเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

`Camper` component ควรเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

`Camper` component ควรมี props เริ่มต้นที่มีการระบุ string `CamperBot` ไปยัง key `name`

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

`Camper` component ควรมี prop types ที่กำหนดให้ `name` prop เป็น `string`

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

`Camper` component ควรมี `p` element ที่มีเพียงข้อความจาก `name` prop

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
// Change code below this line
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
// Change code below this line

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
