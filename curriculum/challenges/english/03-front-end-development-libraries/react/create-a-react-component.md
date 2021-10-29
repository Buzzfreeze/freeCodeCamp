---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

อีกวิธีหนึ่งในการกำหนด React component คือการใช้ ES6 `class` syntax ในตัวอย่างต่อไปนี้ `kitten` ขยาย `React.Component`:

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

สิ่งนี้จะสร้าง ES6 class `Kitten` ซึ่งขยาย `React.Component` class ดังนั้น `Kitten` class จึงสามารถเข้าถึงคุณสมบัติ React ที่มีประโยชน์มากมาย เช่น local state และ lifecycle hooks อย่ากังวลหากคุณยังไม่คุ้นเคยกับคำศัพท์เหล่านี้ เราจะกล่าวถึงรายละเอียดเพิ่มเติมในแบบทดสอบอื่นๆ ข้างหน้า นอกจากนี้ให้สังเกตว่า `Kitten` class มี `constructor` ที่ถูกกำหนดไว้ภายในคลาสมันเองซึ่งเรียกการทำงานของ `super()` มันใช้ `super()` เพื่อเรียกการทำงาน constructor ของ parent class ในกรณีนี้คือ `React.Component` Constructor เป็น method พิเศษที่ใช้ในระหว่างการเริ่มต้นของ object ที่สร้างด้วยคีย์เวิร์ด `class` แนวทางปฏิบัติที่ดีที่สุดคือการเรียก `Constructor` ของ component ด้วย `super` และส่งผ่าน `props` ไปยังทั้งคู่ เพื่อให้แน่ใจว่าcomponent ได้เริ่มทำงานอย่างถูกต้อง สำหรับตอนนี้ให้รู้ว่ามันเป็นมาตรฐานปกติสำหรับการรวมโค้ดนี้ไปด้วยกัน คุณจะเห็นการใช้งานอื่นๆ สำหรับ constructor เช่นเดียวกับ `props` ในอีกไม่ช้า

# --instructions--

`MyComponent` ถูกกำหนดใน code editor โดยใช้ class syntax เขียน `render` method ให้เสร็จ แล้วมันจึงจะสามารถ return `div` element ที่มี `h1` ที่มีข้อความว่า `Hello React!`

# --hints--

React component ควรจะต้อง return `div` element

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

`div` ที่ถูก return มานั้นจะต้องเรนเดอร์ `h1` header อยู่ภายใน

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

`h1` header ควรจะต้องมี string `Hello React!`

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
    // Change code below this line



    // Change code above this line
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
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
