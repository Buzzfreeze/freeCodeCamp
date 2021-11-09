---
id: 5ddb965c65d27e1512d44dad
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

เรามี array `[1, 3, 5]` ชื่อ `arr` และเราต้องการนำตัวเลขทั้งหมดมาบวกกัน

เราสามารถใช้ฟังก์ชัน reduce function ได้ดังนี้:

```js
arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

ที่ `arr[0]`, ฟังก์ชันคือ `(0, 1) => { return 0 + 1 }`, เนื่องจาก `arr[0] = 1 = currentValue`.

ที่ `arr[1]`, ฟังก์ชันคือ `(1, 3) => 1 + 3`,

สุดท้ายที่ `arr[2]`, ฟังก์ชันคือ `(4, 5) => 4 + 5` ตอนนี้ accumulator คือ `9` และเนื่องจากเราได้วนอ่านทุก item ใน `arr` แล้ว `reduce()` method จะคืนค่า `9`

ในส่วน body ของ the callback function จงแทนที่ `/* code to run */` ด้วย `return accumulator + currentValue`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /reduce\(\(accumulator\,currentValue\)\=\>{returnaccumulator\+currentValue\;?},0\)/
    )
);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <form id="calorie-form">
        <h2 class="center">Calorie Counter</h2>
        <div class="grid">
          <legend>Sex</legend>
          <div>
            <input type="radio" name="sex" id="female" value="F" checked />
            <label for="female">
              Female (2,000 calories)
            </label>

            <div>
              <input type="radio" name="sex" id="male" value="M" />
              <label for="male">
                Male (2,500 calories)
              </label>
            </div>
          </div>
        </div>
        <div class="grid" id="entries">
          Breakfast
          <input
            type="number"
            min="0"
            class="cal-control"
            id="breakfast"
          /><br />
          Lunch
          <input type="number" min="0" class="cal-control" id="lunch" /><br />
          Dinner <input type="number" min="0" class="cal-control" id="dinner" />
        </div>
        <button type="button" class="btn-add" id="add">
          Add Entry
        </button>
        <button type="submit" class="btn-solid" id="calculate">
          Calculate
        </button>
        <button type="button" class="btn-outline" id="clear">
          Clear
        </button>
      </form>
      <div id="output"></div>
    </div>
  </body>
</html>
```

## --after-user-code--

```html
  </body>
</html>
```

## --seed-contents--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => {
        /* code to run */
      }, 0);
  }
</script>
```

# --solutions--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  }
</script>
```
