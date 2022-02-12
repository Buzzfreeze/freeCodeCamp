---
id: 5966f99c45e8976909a85575
title: Day of the week
challengeType: 5
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

บริษัทตัดสินใจว่าเมื่อใดก็ตามที่คริสต์มาสตรงกับวันอาทิตย์ พวกเขาจะให้วันหยุดพิเศษแก่คนงานทั้งหมด เพื่อที่คนงานจะไม่ต้องทำงานในสัปดาห์ถัดไป (ระหว่าง 25 ธันวาคมถึง 1 มกราคม) 

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าปีเริ่มต้นและปีสิ้นสุด คืนค่าเป็น array ของปีที่มีวันที่ 25 ธันวาคมเป็นวันอาทิตย์

# --hints--

`findXmasSunday` ต้องเป็นฟังก์ชัน

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` ต้องคืนค่าเป็น array

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` ต้องคืนค่าเป็น `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` ต้องคืนค่าเป็น `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

```js
assert.deepEqual(findXmasSunday(2008, 2121), secondSolution);
```

# --seed--

## --after-user-code--

```js
const firstSolution = [1977, 1983, 1988, 1994, 2005, 2011, 2016];
const secondSolution = [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118];
```

## --seed-contents--

```js
function findXmasSunday(start, end) {

  return true;
}
```

# --solutions--

```js
function findXmasSunday(start, end) {
  const xmasSunday = [];
  for (let year = start; year <= end; year++) {
    const xmas = new Date(year, 11, 25);
    if (xmas.getDay() === 0) {
      xmasSunday.push(year);
    }
  }
  return xmasSunday;
}
```
