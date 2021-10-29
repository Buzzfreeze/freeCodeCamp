---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--


คุณอาจจะสังเกตได้ในแบบทดสอบก่อนหน้านี้ว่ามีความแตกต่างของ syntax อื่นๆ อีกหลายประการจาก HTML inline styles นอกเหนือจาก `style` attribute ที่มีใน JavaScript object 
อันดับแรกชื่อต่างๆ ของ CSS style properties ใช้หลัก camel case ยกตัวอย่างเช่น แบบทดสอบที่ผ่านมานั้นกำหนดให้ขนาดของฟอนต์ด้วย `fontSize` แทนที่จะใช้ `font-size` คำที่ใช่ `-` นั้นเป็น syntax ที่ไม่ถูกต้องสำหรับ JavaScript object properties ดังนั้น React จึงต้องใช้ camel case ด้วย ด้วยกฎข้อนี้ style properties ที่ใช่ `-` เขียนจะถูกเขียนเป็น canel case ใน JSX

หน่วยความยาวของ property ทั้งหมด (เช่น `height`, `width`, และ `fontSize`) จะเป็น `px` โดยเบื้องต้นหากไม่มีการระบุเฉพาะก่อน หากคุณต้องการใช้หน่วย `em` คุณต้องพิมพ์ทั้งค่าและหน่วยในเครื่องหมายคำพูด เช่น `{fontSize: "4em"}` ซึ่งหากไม่ได้ระบุหน่วยในเครื่องหมายคำพูดแล้ว หน่วยของค่าดังกล่าวจะเป็น `px` โดยทันที

# --instructions--

หากคุณมีชุดของ style จำนวนมาก คุณสามารกำหนด style `object` ให้เป็น constant เพื่อให้โค้ดเป็นระเบียบ ประกาศ styles constant ของคุณเป็นตัวแปร global ในด้านบนของไฟล์ เริ่มสร้าง `style` constant และกำหนด `object` ให้มี 3 style properties พร้อมทั้งค่าต่างๆ ด้วย กำหนดให้ `div` มีสี `purple`, มี font-size ที่ `40`, และ border ที่ `2px solid purple` จากนั้นตั้งค่า `style` attribute ให้เท่ากับ `style` constant

# --hints--

ตัวแปร `styles` ควรจะต้องเป็น `object` ที่มี 3 property

```js
assert(Object.keys(styles).length === 3);
```

ตัวแปร `styles` ควรจะต้องมี `color` property ที่มีค่า `purple`

```js
assert(styles.color === 'purple');
```

ตัวแปร `styles` ควรจะต้องมี `fontSize` property ที่มีค่า `40`

```js
assert(styles.fontSize === 40);
```

ตัวแปร `styles` ควรจะต้องมี `border` property ที่มีค่า `2px solid purple`

```js
assert(styles.border === '2px solid purple');
```

Component จะต้องแสดงผลของ `div` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

`div` element ควรจะต้องมี style ที่กำหนดโดย `style` object

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return (
      mockedComponent.props().style.color === 'purple' &&
      mockedComponent.props().style.fontSize === 40 &&
      mockedComponent.props().style.border === '2px solid purple'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};
```

# --solutions--

```jsx
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
```
