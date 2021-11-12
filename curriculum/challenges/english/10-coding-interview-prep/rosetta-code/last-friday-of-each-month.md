---
id: 5a23c84252665b21eecc7edc
title: Last Friday of each month
challengeType: 5
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

เขียนฟังก์ชันที่ส่งกลับวันที่ของวันศุกร์สุดท้ายของเดือนและสำหรับปีที่กำหนด

# --hints--

`lastFriday` ควรเป็น function.

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` ควร return number.

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` ควร return `26`.

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` ควร return `24`.

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` ควร return `30`.

```js
assert.equal(lastFriday(2012, 3), 30);
```

`lastFriday(1900, 4)` ควร return `27`.

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` ควร return `26`.

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` ควร return `30`.

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` ควร return `30`.

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` ควร return `26`.

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
