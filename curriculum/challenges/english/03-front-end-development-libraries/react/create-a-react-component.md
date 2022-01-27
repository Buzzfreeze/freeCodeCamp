---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

มีอีกวิธีหนึ่งในการสร้าง React component คือการใช้ syntax `class` ของ ES6   

ในตัวอย่างด้านล่าง `kitten` จะ extend มาจาก `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

โค้ดด้านบนจะสร้าง class ของ ES6 ที่ชื่อว่า `Kitten` ซึ่ง extend มาจาก class `React.Component` 
ดังนั้น class `Kitten` จึงใช้ฟีเจอร์ของ React ได้ด้วย เช่น local state และ lifecycle hook ยังไม่ต้องห่วงถ้าคุณไม่รู้ว่าสองตัวนี้คืออะไร เดี๋ยวเราจะได้เรียนเรื่องพวกนี้ในแบบทดสอบอื่น  
แล้วจะเห็นว่า class `Kitten` มี `constructor` ซึ่งเรียกใช้ `super()` ด้วย

`super()` นี้จะเป็นการเรียกใช้ constructor ของ parent class (ในกรณีนี้คือ `React.Component`)  

constructor เป็น method พิเศษที่จะเรียกใช้เมื่อสร้าง object ที่เขียนโดยใช้คีย์เวิร์ด `class`  
วิธีที่ควรทำต้องคือเรียก `constructor` ของ component ด้วย `super` และส่ง `props` เข้าไปเพื่อให้ component ทำงานได้อย่างถูกต้อง  
แต่ตอนนี้แค่รู้ไว้ว่าการเรียกใช้แบบนี้เป็นมาตรฐานในการเขียนโค้ดก็พอ เดี๋ยวเราจะได้เรียนเรื่องการใช้ constructor (รวมถึง `props` ด้วย) ต่อไป

# --instructions--

เราสร้าง `MyComponent` ใน code editor โดยใช้ syntax `class` ให้แล้ว

ให้เขียน method `render` ให้เสร็จ โดยต้องคืนค่าเป็น `div` element ที่มี `h1` อยู่ข้างใน แล้วใน `h1` ก็มีข้อความว่า `Hello React!`

# --hints--

React component จะต้องคืนค่าเป็น `div` element

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

`div` ที่ถูกคืนค่าออกมานั้นจะต้องมี `h1` อยู่ข้างใน

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

`h1` จะต้องมีข้อความข้างในเป็น `Hello React!`

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้



    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
};
```
