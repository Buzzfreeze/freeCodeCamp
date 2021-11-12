---
id: 594810f028c0303b75339ad4
title: Word wrap
challengeType: 5
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

แม้กระทั่งทุกวันนี้ ด้วยfontตามสัดส่วนและlayoutที่ซับซ้อน ยังมีบางกรณีที่คุณต้องตัดข้อความในคอลัมน์ที่ระบุ งานพื้นฐานคือการตัดย่อหน้าของข้อความด้วยวิธีง่ายๆ

# --instructions--

เขียนฟังก์ชันที่สามารถตัดข้อความนี้ให้เป็นอักขระจำนวนเท่าใดก็ได้ ตัวอย่างเช่น ข้อความที่มีอักขระ 80 ตัวควรมีลักษณะดังนี้:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>

# --hints--

wrap ควรเป็น function.

```js
assert.equal(typeof wrap, 'function');
```

wrap ควร return a string.

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

wrap(80) ควร return 4 lines.

```js
assert(wrapped80.split('\n').length === 4);
```

`wrap` function ควร return ตาม text.

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

wrap(42) ควร return 7 lines.

```js
assert(wrapped42.split('\n').length === 7);
```

`wrap` function ควร return ตาม text.

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
