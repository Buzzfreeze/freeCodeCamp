---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX เป็น syntax ที่จะถูก compile เป็น JavaScript 
ซึ่งในบางครั้งเพื่อให้โค้ดอ่านง่าย คุณอาจต้องเพิ่ม comment ไปในโค้ดด้วย 
โดย JSX ก็จะมีวิธีในการเขียน comment เป็นของตัวเอง

ในการเขียน comment ใน JSX คุณจะต้องใช้ syntax `{/* */}` ครอบ comment นั้น

# --instructions--

ใน code editor ด้านขวาจะมี JSX element ที่คล้ายๆกับโค้ดที่คุณเขียนในแบบทดสอบที่แล้ว 
ให้คุณเพิ่ม comment ตรงไหนก็ได้ใน `div` element ที่ให้มา โดยที่ไม่ต้องแก้ไข `h1` หรือ `p` element ที่มีอยู่

# --hints--

`JSX` ต้องเก็บค่าของ `div` element

```js
assert(JSX.type === 'div');
```

`div` นี้ต้องมี `h1` เป็น element แรกข้างใน

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` นี้ต้องมี `p` เป็น element ที่สองข้างใน

```js
assert(JSX.props.children[1].type === 'p');
```

ห้ามเปลี่ยนแปลง `h1` และ `p` ที่มีให้

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

ต้องเขียน comment syntax ใน `JSX` ให้ถูกต้อง

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
