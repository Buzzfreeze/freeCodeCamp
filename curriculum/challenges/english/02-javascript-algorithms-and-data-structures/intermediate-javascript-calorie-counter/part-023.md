---
id: 5ddb965c65d27e1512d44dae
title: Part 23
challengeType: 0
dashedName: part-23
---

# --description--

ตอนนี้เรามีตัวเลข `total` ของแคลอรี่ที่ผู้ใช้งานกรอกเข้ามาแล้ว จากนั้น เราต้องการหาแคลอรี่สูงสุด (maximum calories) ที่พวกเค้าควรได้รับ

ลองดูที่ form และสังเกตว่า มี radio buttons ที่เป็น Female และ Male อยู่ ถ้า Female ถูกเลือก ค่า  maximum calories ที่ควรได้รับ ควรเป็น 2000 แต่ถ้า Male ถูกเลือก ค่า maximum calories ที่ควรได้รับ ควรเป็น 2500

ถ้าคุณวิเคราะห์ Female radio button ให้คุณสังเกต id: `<input type="radio" name="sex" id="female" value="F" checked="">`

จงสร้างตัวแปรชื่อ `maxCalories` และกำหนดให้มีค่าเท่ากับ document element ที่มี id เป็น `female`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  /const\s*maxCalories\s*=\s*document\.getElementById\([\'\"\`]female[\'\"\`]\)/.test(
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

    const maxCalories = document.getElementById('female');
  }
</script>
```
