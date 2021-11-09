---
id: 5e302e8ce003129199103c79
title: Part 22
challengeType: 0
dashedName: part-22
---

# --description--

ตอนนี้เรามาทำให้ `reduce()` callback function อยู่ในรูปอย่างง่ายกัน

ตอนนี้ callback function ปัจจุบันคือ `(accumulator, currentValue) => { return accumulator + currentValue }` เนื่องด้วยมีเพียง expression เดียวใน
function body เราจึงสามารถละ `{}` ออกได้ นอกจากนี้ เรายังละคีย์เวิร์ด `return` ได้อีกด้วย เนื่องจากเวลาที่ใช้ arrow function ก็จะมีการเรียกใช้คีย์เวิร์ดนี้เบื้องหลังอยู่แล้ว 

ดังนั้น ฟังก์ชันจึงสามารถเขียนในรูปอย่างง่ายคือ `(accumulator, currentValue) => accumulator + currentValue`

จงแทนที่ callback function argument ในฟังก์ชัน `reduce()` ให้เป็นรูปอย่างง่ายดังตัวอย่างด้านบน

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /reduce\(\(accumulator\,currentValue\)\=\>accumulator\+currentValue\,0\)/
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
        //console.log({ accumulator });
        //console.log({ currentValue });
        return accumulator + currentValue;
      }, 0);

    //console.log({ total });
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
  }
</script>
```
