---
id: 5ddb965c65d27e1512d44db2
title: Part 27
challengeType: 0
dashedName: part-27
---

# --description--

ถ้า `difference` มีค่าเป็นบวก total calories ที่ผู้ใช้งานกินเข้าไปมีค่ามากกว่า `maxCalories` ที่แนะนำ หรือเรียกว่า calories surplus แต่ในทางกลับกัน หาก `difference` มีค่าติดลบ หมายถึง ผู้ใช้งานได้รับ calorie ไม่เพียงพอ

ในการหาว่า ได้รับ calorie เกินหรือขาด ให้สร้างตัวแปรชื่อ `surplusOrDeficit` เพื่อตรวจสอบว่าผลต่างเป็นค่าบวกหรือไม่ (`difference > 0`).

ถ้าเป็นบวก `surplusOrDeficit` ควรมีค่าเป็น string "Surplus" แต่ถ้าเป็นลบ ให้มีค่า "Deficit"

จงใช้ ternary syntax เหมือนกับที่คุณใช้ในการหาค่า `maxCalories`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  /const\s*surplusOrDeficit\s*\=\s*difference\s*\>\s*0\s*\?\s*[\'\"\`]Surplus[\'\"\`]\s*\:\s*[\'\"\`]Deficit[\'\"\`]/.test(
    code
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
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

    const difference = total - maxCalories;
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
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

    const difference = total - maxCalories;

    const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';
  }
</script>
```
