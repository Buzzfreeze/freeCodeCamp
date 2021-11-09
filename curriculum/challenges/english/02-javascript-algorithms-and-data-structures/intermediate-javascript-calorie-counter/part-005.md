---
id: 5ddb965c65d27e1512d44d9e
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

ตามปกติแล้ว `onsubmit` จะส่ง event object เป็น parameter เข้าไปในฟังก์ชันที่เรียก เรามักเรียกกันว่า `e` ย่อมาจาก event จงปรับแก้ฟังก์ชัน `calculate()` ให้รับ `e` เป็น parameter

ตัวอย่างต่อไปนี้เป็น empty function ชื่อ `square` ที่รับ `number` เป็น parameter:

```js
function square(number) {}
```

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(calculate.toString().match(/function calculate\(\s*e\)\s*\{\s*\}/));
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

  function calculate() {}
</script>
```

# --solutions--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {}
</script>
```
