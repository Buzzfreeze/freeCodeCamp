---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

มีอีกหลายอย่างที่จะเพิ่มศักภาพของแอป React ของคุณได้ แต่คุณอาจสงสัยในเรื่องที่ง่ายๆอีกเรื่อง เช่นการใช้ style กับ JSX element 
คุณคงรู้แล้วว่าการใช้ style ใน JSX จะไม่เหมือนกับใน HTML เพราะ [วิธีประกาศ class ใน JSX element](/learn/front-end-development-libraries/react/define-an-html-class-in-jsx)

ถ้าคุณใช้ style จาก stylesheet การนำ style มาใช้กับ JSX ก็จะไม่ต่างจาก HTML มาก 
คุณแค่ต้องระบุ class ให้กับ JSX element โดยใช้ attribute ชื่อ `className` แล้วก็เลือกใช้ class ตาม stylesheet ของคุณ 
อีกทางหนึ่งคือการใช้ inline style ซึ่งเป็นเรื่องปกติในการเขียน ReactJS

การใช้ inline style กับ JSX element จะคล้ายกับ HTML แต่ก็จะต่างกับ JSX อยู่เล็กน้อย 
ลองดูตัวอย่างการใช้ inline style ใน HTML ก่อน:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX element ก็จะใช้ attribute `style` เหมือนกัน แต่เพราะว่า JSX จะต้องถูก transpile คุณจึงใช้เป็น `string` ไม่ได้ แต่ต้องใช้เป็น `object` ของ JavaScript แทน ลองดูตัวอย่าง:


```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

จะเห็นว่าเราใช้ camelCase กับ property `fontSize` นี่เป็นเพราะ React จะไม่ยอมรับคีย์ที่เป็น kebab-case ใน object นี้ 
แต่ React จะ transpile ไปเป็น HTML ที่ถูกต้องให้เราเอง

# --instructions--

เพิ่ม attribute `style` ให้กับ `div` ใน code editor เพื่อให้ข้อความมีสีแดงและขนาดฟอนต์เป็น `72px`

คุณจะระบุขนาดฟอนต์เป็นตัวเลขเฉยๆ เช่น `72` หรือจะเป็น string ที่มี `px` ตามหลัง เช่น `72px` ก็ได้

# --hints--

component ต้องเรนเดอร์ `div` ไว้ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` ต้องมี attribute `color` เป็น `red`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

`div` ต้องมีขนาดฟอนต์เป็น `72px`

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
