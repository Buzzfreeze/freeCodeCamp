---
id: 5900f37f1000cf542c50fe92
title: 'Problem 19: Counting Sundays'
challengeType: 5
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

จากข้อมูลข้างล่าง

<ul>
  <li>1 มกราคม 1900 เป็นวันจันทร์</li>
  <li>เดือนที่มี 30 วันคือ กันยายน <br>เมษายน มิถุนายน และพฤศจิกายน<br>เดือนที่เหลือมี 30 วัน<br>ยกเว้นกุมภาพันธ์<br>ที่จะมี 28 วัน<br>และมี 29 วันในปีอธิกสุรทิน</li>
  <li>ปีอธิกสุรทินคือปีที่หาร 4 ลงตัว แต่ต้องไม่เป็นปีที่หาร 100 ลงตัว ยกเว้นว่าจะหาร 400 ลงตัวด้วย</li>
</ul>

มีวันอาทิตย์กี่วันที่เป็นวันแรกของเดือนในช่วงศตวรรษที่ 20 (1 มกราคม 1901 to 31 ธันวาคม 2000)?

# --hints--

`countingSundays(1943, 1946)` ต้องคืนค่าเป็น number

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` ต้องคืนค่าเป็น 6

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` ต้องคืนค่าเป็น 10

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` ต้องคืนค่าเป็น 171

```js
assert.strictEqual(countingSundays(1901, 2000), 171);
```

# --seed--

## --seed-contents--

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

# --solutions--

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```
