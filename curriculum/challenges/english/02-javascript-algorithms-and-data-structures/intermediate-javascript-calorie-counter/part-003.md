---
id: 5ddb965c65d27e1512d44d9c
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

ตอนนี้เราต้องกำหนดว่า จะให้ form ทำอะไรต่อ เมื่อผู้ใช้งานกดปุ่ม Calculate เพื่อ submit ข้อมูล

form มี `onsubmit` event ที่สามารถรันฟังก์ชันเมื่อ form ถูก submit

ตัวอย่างเช่น ในโค้ด `document.getElementById('my-form').onsubmit = processForm;` ฟังก์ชัน `processForm` จะรันเมื่อ form ถูก submit

จงกำหนดฟังก์ชัน `calculate` ให้กับ `onsubmit` event ใน form ของคุณ

คุณจะสร้างฟังก์ชัน `calculate` ในภายหลัง

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /document\.getElementById\([\'\"\`]calorie\-form[\'\"\`]\)\.onsubmit\=calculate/
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
  document.getElementById('calorie-form');
</script>
```

# --solutions--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;
</script>
```
