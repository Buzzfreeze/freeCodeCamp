---
id: 5966f99c45e8976909a85575
title: Day of the week
challengeType: 5
forumTopicId: 302245
dashedName: day-of-the-week
---

# --description--

บริษัทตัดสินใจว่าเมื่อใดก็ตามที่คริสต์มาสตรงกับวันอาทิตย์ พวกเขาจะให้วันหยุดพิเศษทั้งหมดแก่คนงาน เพื่อที่คนงานจะไม่ต้องทำงานในสัปดาห์ถัดไป (ระหว่าง 25 ธันวาคมถึง 1 มกราคม) ร่วมกับวันหยุดนักขัตฤกษ์

# --instructions--

เขียนฟังก์ชันที่ใช้ปีเริ่มต้นและปีสิ้นสุด และreturn arrayของปีที่ 25 ธันวาคมจะเป็นวันอาทิตย์

# --hints--

`findXmasSunday` ควรเป็น function.

```js
assert(typeof findXmasSunday === 'function');
```

`findXmasSunday(2000, 2100)` ควร return array.

```js
assert(typeof findXmasSunday(2000, 2100) === 'object');
```

`findXmasSunday(1970, 2017)` ควร return `[1977, 1983, 1988, 1994, 2005, 2011, 2016]`

```js
assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
```

`findXmasSunday(2008, 2121)` ควร return `[2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]`

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
