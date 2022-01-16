---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

ในแบบทดสอบที่แล้วเราได้ให้เห็นวิธีรวม component เข้าด้วยกันไปวิธีนึงแล้ว แต่ก็ยังมีวิธีอื่นที่ใช้รวม component ใน React ได้อีก

การรวม Component เป็นอีกฟีเจอร์ที่มีประโยชน์มากๆของ React 
ถ้าคุณใช้ React สิ่งสำคัญต้องมอง UI ของคุณว่าเป็น component เช่น แอปในแบบทดสอบที่แล้ว คุณได้แบ่ง UI ของคุณออกเป็นส่วนๆ แล้วเราก็ได้สร้าง component สำหรับแต่ละส่วนที่แบ่งออกมา 
การแบ่ง UI ออกเป็นส่วนๆแบบนี้ จะช่วยแยกโค้ดที่จัดการ UI ออกจากโค้ดที่จัดการ logic ในแอปพลิเคชันของคุณ 
ซึ่งจะลดความซับซ้อนในการพัฒนาและบำรุงรักษาของโปรเจคใหญ่ๆได้อย่างมาก

# --instructions--

เราได้สร้าง functional component สองตัวไว้ให้ใน code editor แล้วคือ `TypesOfFruit` และ `Fruits` 
ให้นำ component `TypesOfFruit` ไป*ซ้อน*ใน component `Fruits` แล้วนำ component `Fruits` ไปซ้อนใน component `TypesOfFood` อีกต่อหนึ่ง 
ผลลัพธ์ที่ได้จะเป็น child component ซ้อนอยู่ใน parent component ที่ซ้อนอยู่ใน parent component อีกทีนึง!

# --hints--

component `TypesOfFood` ต้องคืนค่าเป็น `div` element ตัวเดียว

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

component `TypesOfFood` ต้องคืนค่าเป็น component `Fruits` ออกมา

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

component `Fruits` ต้องคืนค่าเป็น component `TypesOfFruit` ออกมา

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

component `TypesOfFruit` ต้องคืนค่าเป็น `h2` และ `ul` element

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

      { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <TypesOfFruit />
      { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <Fruits />
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```
