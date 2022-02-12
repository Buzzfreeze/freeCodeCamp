---
id: 59669d08d75b60482359409f
title: Date format
challengeType: 5
forumTopicId: 302243
dashedName: date-format
---

# --description--

ให้คืนค่าเป็น array ของสตริงของวันที่ปัจจุบันสองตัว ตามเงื่อนไขด้านล่าง:

- สตริงตัวแรกควรเป็น ปี เดือน และวันที่ โดยคั่นด้วยเครื่องหมายขีดกลาง (`-`)
- ปีของสตริงตัวแรกควรมีความยาวสี่หลัก
- เดือนและวันของสตริงตัวแรกไม่ควรมีเลขศูนย์นำหน้า
- ชื่อวันและเดือนของสตริงที่สองไม่ควรเป็นตัวย่อ
- วันที่ของสตริงตัวที่สองไม่ควรมีเลขศูนย์นำหน้า

ตัวอย่าง output:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` ต้องเป็นฟังก์ชัน

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` ต้องคืนค่าเป็น object

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` ต้องคืนค่าเป็น array ที่มี 2 elements

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` ต้องคืนค่าเป็นวันที่ถูกต้องในรูปแบบที่ระบุ

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
const equalsMessage = `message: <code>getDataFormats()</code> ต้องคืนค่าเป็น <code>["${dates[0]}", "${dates[1]}"]</code>.`;
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
