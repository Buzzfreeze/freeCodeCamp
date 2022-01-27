---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

หลังจากที่ได้เรียนพื้นฐานของ JSX และ React component มาแล้ว ก็ได้เวลาเขียน component ด้วยตัวเองแล้วล่ะ

React component เป็นแกนกลางของแอปพลิเคชันที่สร้างด้วย React ดังนั้นการเขียน component ให้ได้จึงสำคัญ 
ถ้ายังจำได้ ปกติแล้ว React component ก็คือ `class` ของ ES6 ที่ extend มาจาก `React.Component` ซึ่งมี method `render` ที่คืนค่าออกมาเป็น HTML (ที่เป็น JSX) หรือ `null` 

ที่ได้อธิบายไปนี้เป็น React component แบบพื้นฐาน ซึ่งถ้าเข้าใจเรื่องนี้ คุณก็จะพร้อมสร้างโปรเจค React ที่ซับซ้อนมากขึ้นแล้ว

# --instructions--

ให้สร้างคลาส `MyComponent` ที่ extend มาจาก `React.Component` 

method `render` จะต้องคืนค่าเป็น `div` ที่มีแท็ก `h1` พร้อมข้อความ `My First React Component!` อยู่ในนั้น (ให้ใช้ข้อความนี้เป๊ะๆ ถ้าตัวใหญ่ตัวเล็กไม่ตรง หรือเว้นวรรคไม่ตรงเราจะไม่ให้ผ่านนะ) 

อย่าลืมเรียกใช้ constructor ใน component ของคุณด้วย

แล้วให้เรนเดอร์ component นี้ไปยัง DOM `div` ที่มี `id='challenge-node'` โดยใช้ `ReactDOM.render()` (เราสร้าง `div` ตัวนี้ไว้ให้แล้ว)

# --hints--

ต้องมี React component ที่ชื่อว่า `MyComponent`

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` ต้องมี `h1` พร้อมกับข้อความ `My First React Component!` อยู่ข้างใน (ต้องใช้ตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่ เว้นวรรค และเครื่องหมาย ตามโจทย์เป๊ะๆ)

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```


ต้องเรนเดอร์ `MyComponent` ไปที่ DOM

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` ควรมี constructor ที่เรียกใช้ `super` และส่งค่า `props` เข้าไป

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```jsx
// แก้ไขโค้ดใต้บรรทัดนี้
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
