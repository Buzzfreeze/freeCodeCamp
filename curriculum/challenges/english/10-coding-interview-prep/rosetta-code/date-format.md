---
id: 59669d08d75b60482359409f
title: Date format
challengeType: 5
forumTopicId: 302243
dashedName: date-format
---

# --description--

Return array with strings ของวันที่ปัจจุบันสองตัว ตามด้านล่าง:

- ลำดับวันที่ของstringแรกควรเป็นหมายเลขปี หมายเลขเดือน และหมายเลขวันที่คั่นด้วยเครื่องหมายขีดกลาง (`-`)
- ปีของstringแรกควรมีความยาวสี่หลัก
- เดือนและวันของstringแรกไม่ควรมีเลขศูนย์นำหน้า
- ชื่อวันและเดือนของstringที่สองไม่ควรเป็นตัวย่อ
- วันที่ของstringที่สองไม่ควรมีเลขศูนย์นำหน้า

ตัวอย่าง outputs:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` ควรเป็น function.

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` ควร return object.

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` ควร return array มี 2 elements.

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` ควร return วันที่ถูกต้องในรูปแบบที่ถูกต้อง

```js
assert.deepEqual(getDateFormats(), dates, equalsMessage);
```

# --seed--

## --after-user-code--

```js
const getDateSolution = () => {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
};

const dates = getDateSolution();
const equalsMessage = `message: <code>getDataFormats()</code> ควร return <code>["${dates[0]}", "${dates[1]}"]</code>.`;
```

## --seed-contents--

```js
function getDateFormats() {

  return true;
}
```

# --solutions--

```js
function getDateFormats() {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
}
```
