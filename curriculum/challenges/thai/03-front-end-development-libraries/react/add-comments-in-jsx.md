---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX คือ syntax ที่ถูก compile เป็น JavaScript ที่ถูกต้อง ในบางครั้งเพื่อให้ทำความเข้าใจโค้ดได้ง่ายมากขึ้น คุณอาจะต้องการเพิ่ม comment ไปในโค้ดด้วย เช่นเดียวกับการเขียนโปรแกรมทั่วไป JSX มีวิธีการของมันในการเขียน comment

เพื่อที่จะใส่ comment ใน JSX คุณจะต้องใช้ syntax `{/* */}` ครอบข้อความ comment นั้น

# --instructions--

ในส่วนที่เขียนโค้ดมี JSX element คล้ายกับสิ่งที่คุณได้สร้างในแบบทดสอบที่ผ่านมา ให้คุณเพิ่ม comment ในที่ใดก็ได้ภายใน `div` element ที่ให้มา โดยที่ไม่ต้องแก้ไข `h1` หรือ `p` element ที่มีอยู่

# --hints--

ค่าคงที่ `JSX` ควรจะ return `div` element

```js
assert(JSX.type === 'div');
```

`div` นั้นควรจะต้องมี `h1` tag ที่เป็น element แรกข้างใน

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` นั้นควรจะต้องมี `p` tag ที่เป็น element ที่สองข้างใน

```js
assert(JSX.props.children[1].type === 'p');
```

ไม่ควรที่จะแก้ไขอะไร กับ `h1` และ `p` element ที่มีอยู่

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

`JSX` ควรใช้ comment syntax ที่ถูกต้อง

```js
assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```
