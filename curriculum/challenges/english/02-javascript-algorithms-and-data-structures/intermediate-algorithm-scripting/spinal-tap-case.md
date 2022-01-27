---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
challengeType: 5
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

จงแปลง string ให้เป็น spinal case  
spinal case คือการนำคำมาต่อกันด้วย `-` และเป็นตัวอักษรพิมพ์เล็กทั้งหมด  
ตัวอย่างเช่น all-lowercase-words-joined-by-dashes

# --hints--

`spinalCase("This Is Spinal Tap")` ต้องคืนค่าเป็น string `this-is-spinal-tap`

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` ต้องคืนค่าเป็น string `this-is-spinal-tap`

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` ต้องคืนค่าเป็น string `the-andy-griffith-show`

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` ต้องคืนค่าเป็น string `teletubbies-say-eh-oh`

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` ต้องคืนค่าเป็น string `all-the-small-things`

```js
assert.strictEqual(spinalCase('AllThe-small Things'), 'all-the-small-things');
```

# --seed--

## --seed-contents--

```js
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```

# --solutions--

```js
function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```
