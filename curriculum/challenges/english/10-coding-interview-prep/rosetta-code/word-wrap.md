---
id: 594810f028c0303b75339ad4
title: Word wrap
challengeType: 5
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

ให้ลองเขียนฟังก์ชันที่ทำการตัดข้อความ (Wrap Text)

# --instructions--

ให้เขียนฟังก์ชันที่ตัดข้อความตามความยาวที่ระบุ 


โดยถ้าตัดข้อความให้มีความยาว 80 ตัวอักษรต้องมีลักษณะดังนี้:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>

# --hints--

`wrap` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof wrap, 'function');
```

`wrap` ต้องคืนค่าเป็นสตริง

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

`wrap(80)` ต้องคืนค่าเป็นสตริงที่แบ่งเป็น 4 บรรทัด

```js
assert(wrapped80.split('\n').length === 4);
```

`wrap` ต้องคืนค่าเป็นสตริงตามที่ส่งเข้าไป

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

`wrap(42)` ต้องคืนค่าเป็นสตริงที่แบ่งเป็น 7 บรรทัด

```js
assert(wrapped42.split('\n').length === 7);
```

`wrap` ต้องคืนค่าเป็นสตริงตามที่ส่งเข้าไป

```js
assert.equal(wrapped42.split('\n')[0], firstRow42);
```

# --seed--

## --after-user-code--

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

## --seed-contents--

```js
function wrap(text, limit) {
  return text;
}
```

# --solutions--

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```
