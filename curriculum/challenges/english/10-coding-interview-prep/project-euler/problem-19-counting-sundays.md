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
  <li>1 Jan 1900 was a Monday.</li>
  <li>Thirty days has September,<br>April, June and November.<br>All the rest have thirty-one,<br>Saving February alone,<br>Which has twenty-eight, rain or shine.<br>And on leap years, twenty-nine.</li>
  <li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li>
</ul>

มีวันอาทิตย์กี่วันที่เป็นวันแรกของเดือนในช่วงศตวรรษที่ 20 (1 Jan 1901 to 31 Dec 2000)?

# --hints--

`countingSundays(1943, 1946)` ควร return number.

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` ควร return 6.

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` ควร return 10.

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` ควร return 171.

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
