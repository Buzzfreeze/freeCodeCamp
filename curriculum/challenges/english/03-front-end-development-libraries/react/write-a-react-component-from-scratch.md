---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

เมื่อคุณได้เรียนรู้พื้นฐานของ JSX และ React components แล้ว ก็ถึงเวลาเขียน component ด้วยตัวเอง React component เป็นบล็อกโครงสร้างหลักของแอปพลิเคชัน React ดังนั้นจึงเป็นเรื่องสำคัญที่ต้องทำความคุ้นเคยกับการเขียนพวกมัน โปรดจำไว้ว่า React component ทั่วไปคือ `class` ของ ES6 ซึ่งขยาย `React.Component` มี render method ที่ return HTML (จาก JSX) หรือ `null` นี่เป็นรูปแบบพื้นฐานของ React component เมื่อคุณเข้าใจสิ่งนี้ดีแล้ว คุณก็พร้อมที่จะเริ่มสร้างโปรเจค React ที่ซับซ้อนมากขึ้น

# --instructions--

กำหนดคลาส `MyComponent` ที่ขยาย `React.Component` และ render method ของมันควร return `div` ที่มีแท็ก `h1` พร้อมข้อความ: `My First React Component!` อยู่ในนั้น ใช้ข้อความตามนี้ทุกประการทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ อย่าลืมเรียกใช้ Constructor สำหรับ component ของคุณด้วย

เรนเดอร์ component นี้ไปยัง DOM โดยใช้ `ReactDOM.render()` มันมี `div` ที่มี `id='challenge-node'` ให้คุณใช้งาน

# --hints--

มันควรมี React component ชื่อว่า `MyComponent`

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` ควรมี `h1` tag พร้อมกับข้อความ `My First React Component!` ควรพิมพ์ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ตามโจทย์ทุกประการ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```


`MyComponent` ควรเรนเดอร์ไปที่ DOM

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` ควรมี constructor ที่เรียกใช้ `super` กับ `props`

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
