---
id: 5ddb965c65d27e1512d44db0
title: Part 25
challengeType: 0
dashedName: part-25
---

# --description--

จงใช้ ternary operator เพื่อกำหนดค่าของ `maxCalories` ternary operator มี syntax ดังนี้: `condition ? expressionTrue : expressionFalse`.

ยกตัวอย่างเช่น `(5 - 3 === 4) ? "Yes" : "No"` ทำงานเช่นเดียวกับ if else statement:

```js
if (5 - 3 === 4) {
  return 'Yes';
} else {
  return 'No';
}
```

`document.getElementById('female').checked` จะคืนค่า `true` หากมีการคลิกเลือก หรือ `false` หากไม่ได้คลิกเลือก จงใช้ ternary operator เพื่อคืนค่า 2000 หากมีการคลิกเลือก และคืนค่า 2500 หากไม่ได้คลิกเลือก

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  /const\s*maxCalories\s*=\s*document\.getElementById\([\'\"\`]female[\'\"\`]\)\.checked\s*\?\s*2000\s*\:\s*2500/.test(
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

    const maxCalories = document.getElementById('female').checked;
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
  }
</script>
```
