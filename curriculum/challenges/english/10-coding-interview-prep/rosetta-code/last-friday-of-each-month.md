---
id: 5a23c84252665b21eecc7edc
title: Last Friday of each month
challengeType: 5
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

ให้เขียนฟังก์ชันที่คืนค่าเป็นวันที่ของวันศุกร์สุดท้าย ของเดือนและปีที่ระบุ

# --hints--

`lastFriday` ต้องเป็นฟังก์ชัน

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` ต้องคืนค่าเป็น `26`

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` ต้องคืนค่าเป็น `24`

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` ต้องคืนค่าเป็น `30`

```js
assert.equal(lastFriday(2012, 3), 30);
```

`lastFriday(1900, 4)` ต้องคืนค่าเป็น `27`

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` ต้องคืนค่าเป็น `26`

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` ต้องคืนค่าเป็น `30`

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` ต้องคืนค่าเป็น `30`

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` ต้องคืนค่าเป็น `26`

```js
assert.equal(lastFriday(2005, 8), 26);
```

# --seed--

## --seed-contents--

```js
function lastFriday(year, month) {

}
```

# --solutions--

```js
function lastFriday(year, month) {
  var i, last_day;
  i = 0;
  while (true) {
    last_day = new Date(year, month, i);
    if (last_day.getDay() === 5) {
      return last_day.getDate();
    }
    i -= 1;
  }
}
```
