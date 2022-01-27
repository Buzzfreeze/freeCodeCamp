---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--


คุณอาจสังเกตเห็นแล้วว่า inline styles นี้มีส่วนอื่นของ syntax ที่ต่างจาก HTML นอกเหนือจากการที่ attribute `style` รับค่าเป็น object ของ JavaScript  
อันดับแรกชื่อของ property ที่ใช้ใน CSS style จะใช้หลัก camelCase เช่น แบบทดสอบที่แล้วจะกำหนดขนาดฟอนต์ด้วย `fontSize` แทนที่จะใช้ `font-size`  
ชื่อของ property ของ object ของ JavaScript จะไม่ใช้ `-` ดังนั้น React จึงต้องใช้ camelCase ด้วย  
ด้วยกฎข้อนี้ property ทุกตัวของ style ที่ใช้ `-` เขียนจะถูกเขียนเป็น camelCase แทนใน JSX

property ที่รับค่าเป็นความยาว (เช่น `height`, `width`, และ `fontSize`) จะถือว่าค่าที่รับเข้ามามีหน่วยเป็น `px` ถ้าไม่ระบุหน่วย 
ถ้าคุณต้องการใช้หน่วย `em`  คุณต้องพิมพ์ทั้งค่าและหน่วยในเครื่องหมายคำพูด เช่น `{fontSize: "4em"}` ซึ่งถ้าไม่ได้ระบุหน่วยในเครื่องหมายคำพูด หน่วยของค่านั้นจะถือเป็น `px` ทันที

# --instructions--

ถ้าคุณมี style หลายตัว คุณจะเก็บค่าของ style `object` ไว้ในตัวแปรคงที่เพื่อให้โค้ดเป็นระเบียบก็ได้  
ให้ประกาศ const `styles` ให้เป็นตัวแปร global ที่ส่วนบนของไฟล์  
ให้เขียน `style` constant โดยให้ `object` นี้มี style property 3 ตัว 

1. ให้ `div` เป็นสี `purple` 
2. ให้ font-size เป็น `40`
3. border เป็น `2px solid purple` 

จากนั้นนำ const `styles` ไปใช้กับ attribute `style`

# --hints--

ตัวแปร `styles` ควรจะต้องเป็น `object` ที่มี 3 property

```js
assert(Object.keys(styles).length === 3);
```

ตัวแปร `styles` ต้องมี property `color` เป็น `purple`

```js
assert(styles.color === 'purple');
```

ตัวแปร `styles` ต้องมี property `fontSize` เป็น `40`

```js
assert(styles.fontSize === 40);
```

ตัวแปร `styles` ต้องมี property `border` เป็น `2px solid purple`

```js
assert(styles.border === '2px solid purple');
```

component ต้องแสดง `div`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

`div` ต้องมี style ที่กำหนดโดย `styles` object

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
// แก้ไขโค้ดเหนือบรรทัดนี้
class Colorful extends React.Component {
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // แก้ไขโค้ดเหนือบรรทัดนี้
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
// แก้ไขโค้ดเหนือบรรทัดนี้
class Colorful extends React.Component {
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    return (
      <div style={styles}>Style Me!</div>
    );
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
};
```
