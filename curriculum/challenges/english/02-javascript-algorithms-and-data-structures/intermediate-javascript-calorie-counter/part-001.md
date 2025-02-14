---
id: 5ddb965c65d27e1512d44d9a
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

เมื่อ browser โหลดหน้า page ขึ้นมา จะมีการสร้าง Document Object Model (DOM) ของ page ซึ่งประกอบด้วย ทุก HTML elements ที่อยู่ใน tree structure

ในภาษา JavaScript คุณสามารถเข้าถึง DOM โดยการอ้างถึง global `document` object

การตรวจดู DOM ให้ log ที่หน้า console ด้วยคำสั่ง `console.log(document)`


# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(code.replace(/\s/g, '').match(/console\.log\(document\)/));
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
          Breakfast <input type="number" min="0" class="cal-control" id="breakfast" /><br>
          Lunch <input type="number" min="0" class="cal-control" id="lunch" /><br>
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
```

## --after-user-code--

```html
  </body>
</html>
```

## --seed-contents--

```html
<script>

</script>
```

# --solutions--

```html
<script>
console.log(document);
</script>
```
