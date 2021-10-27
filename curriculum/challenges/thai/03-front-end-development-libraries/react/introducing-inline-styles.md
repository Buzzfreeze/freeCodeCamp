---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

มีแนวคิดที่ซับซ้อนอื่นๆ ที่เพิ่มความสามารถอันทรงพลังให้กับโค้ด React ของคุณ แต่คุณอาจสงสัยเกี่ยวกับปัญหาที่ง่ายกว่าในตกแต่ง JSX element ที่คุณสร้างใน React คุณน่าจะรู้ว่าการทำงานกับ HTML นั้นไม่เหมือนกับการทำงานกับ JSX เนื่องจาก [วิธีที่คุณใช้คลาสกับ JSX element] ](/learn/front-end-development-libraries/react/define-an-html-class-in-jsx)

หากคุณนำเข้า style จาก stylesheet ลักษณะนั้นไม่แตกต่างกันมากนัก คุณใช้คลาสกับ JSX element โดยใช้ `className` attribute และใช้ style กับคลาสใน stylesheet ของคุณ อีกทางเลือกหนึ่งคือการใช้ inline style ซึ่งเป็นเรื่องที่ใช้กันทั่วไปในการพัฒนา ReactJS

คุณใช้ inline style กับ JSX element คล้ายกับที่คุณทำใน HTML แต่มีความแตกต่างกับ JSX เล็กน้อย ต่อไปนี้คือตัวอย่าง inline style ใน HTML:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX element ใช้ `style` attribute แต่เนื่องจากวิธีที่ JSX ถูก transpile คุณจึงตั้งค่าเป็น `string` ไม่ได้ แต่คุณตั้งค่าให้เท่ากับ `object` ของ JavaScript แทน นี่คือตัวอย่าง:

JSX elements use the `style` attribute, but because of the way JSX is transpiled, you can't set the value to a `string`. Instead, you set it equal to a JavaScript `object`. Here's an example:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

สังเกตว่าเราใช้ camelCase กับ `fontSize` property อย่างไร นี่เป็นเพราะ React จะไม่ยอมรับคีย์ kebab-case ใน style object React จะใช้ชื่อ property ที่ถูกต้องสำหรับเราใน HTML

# --instructions--

เพิ่ม`style` attribute ให้กับ `div` ใน code editor เพื่อให้ข้อความมีสีแดงและขนาดฟอนต์ที่ `72px`

โปรดทราบว่าคุณสามารถเลือกกำหนดขนาดฟอนต์ให้เป็นตัวเลขอย่าเดียวไม่ต้องใส่หน่วย `px` หรือเขียนเป็น `72px` อย่างใดอย่างหนึ่งก็ได้

# --hints--

Component ควรเรนเดอร์ `div` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` element ควรมีสี `red`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

`div` element ควรมีขนาดฟอนต์ที่ `72px`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
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
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```

# --solutions--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```
