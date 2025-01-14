---
id: 5a23c84252665b21eecc7ffe
title: Sort an array of composite structures
challengeType: 5
forumTopicId: 302306
dashedName: sort-an-array-of-composite-structures
---

# --description--

ให้เขียนฟังก์ชันที่รับ array ของ object และคืนค่าเป็น array ของ object ที่เรียงตามค่าของ key ของ object นั้น

# --hints--

`sortByKey` ต้องเป็นฟังก์ชัน

```js
assert(typeof sortByKey == 'function');
```

`sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])` ต้องคืนค่าเป็น array

```js
assert(
  Array.isArray(
    sortByKey([
      { key: 3, value: 'foo' },
      { key: 2, value: 'bar' },
      { key: 4, value: 'baz' },
      { key: 1, value: 42 },
      { key: 5, value: 'another string' }
    ])
  )
);
```

`sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])` ต้องคืนค่าเป็น `[{key: 1, value: 42}, {key: 2, value: "bar"}, {key: 3, value: "foo"}, {key: 4, value: "baz"}, {key: 5, value: "another string"}]`

```js
assert.deepEqual(
  sortByKey([
    { key: 3, value: 'foo' },
    { key: 2, value: 'bar' },
    { key: 4, value: 'baz' },
    { key: 1, value: 42 },
    { key: 5, value: 'another string' }
  ]),
  [
    { key: 1, value: 42 },
    { key: 2, value: 'bar' },
    { key: 3, value: 'foo' },
    { key: 4, value: 'baz' },
    { key: 5, value: 'another string' }
  ]
);
```

`sortByKey([{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 20, name: "Alice"}, {key: 5, name: "Harry"}])` ต้องคืนค่าเป็น `[{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 5, name: "Harry"}, {key: 20, name: "Alice"}]`

```js
assert.deepEqual(
  sortByKey([
    { key: 3, name: 'Joe' },
    { key: 4, name: 'Bill' },
    { key: 20, name: 'Alice' },
    { key: 5, name: 'Harry' }
  ]),
  [
    { key: 3, name: 'Joe' },
    { key: 4, name: 'Bill' },
    { key: 5, name: 'Harry' },
    { key: 20, name: 'Alice' }
  ]
);
```

`sortByKey([{key: 2341, name: "Adam"}, {key: 122, name: "Bernie"}, {key: 19, name: "David"}, {key: 5531, name: "Joe"}, {key: 1234, name: "Walter"}])` ต้องคืนค่าเป็น `[{key: 19, name: "David"}, {key: 122, name: "Bernie"}, {key: 1234, name: "Walter"}, {key: 2341, name: "Adam"}, {key: 5531, name: "Joe"}]`

```js
assert.deepEqual(
  sortByKey([
    { key: 2341, name: 'Adam' },
    { key: 122, name: 'Bernie' },
    { key: 19, name: 'David' },
    { key: 5531, name: 'Joe' },
    { key: 1234, name: 'Walter' }
  ]),
  [
    { key: 19, name: 'David' },
    { key: 122, name: 'Bernie' },
    { key: 1234, name: 'Walter' },
    { key: 2341, name: 'Adam' },
    { key: 5531, name: 'Joe' }
  ]
);
```

# --seed--

## --seed-contents--

```js
function sortByKey(arr) {

}
```

# --solutions--

```js
function sortByKey (arr) {
  return arr.sort(function(a, b) {
    return a.key - b.key
  });
}
```
