---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

bar and scatter plot charts จะทำการ plot data โดยตรงลงไปที่ SVG canvas อย่างไรก็ตามถ้าความสูงของ bar หรือ data points จดใดจุดนึง มีค่ามากกว่าความกว้างหรือความยาวของ SVG ค่าเหล่าน้นขะไปอยู่ที่ด้านนอกของพื้นที่ของ SVG

ใน D3 มี scales ที่ใช่ในการช่วย plot data `scales` เป็น functions ที่บอก program ว่าจะ set raw data points ไปเป็น pixels ใน the SVG canvas อย่างไร

ตัวอย่างเช่น หากเรามี 100x500-sized SVG canvas และต้องการ plot Gross Domestic Product (GDP) สำหรับจำนวนของประเทศ set ของจำนวนอาจจะมีช่วงความกว้างเป็นพันล้าน แต่เราสามารถใช้ D3 เพื่อ scale ค่าของ GDP ไปสู่พื่นที่ขนาด 100x500-sized ได้

ซึ่งจะไม่เหมือนกับการ plot raw data ที่ก่อน plot เราสามารถ scale data set ทั้งหทดได้ ทำให้ค่า `x` และ `y` พอดีกับความกว่้างและความยาวของ canvas

D3 มีหลาย scale types สำหรับ linear scale (ใช้งานบ่อยใน quantitative data)จะมี D3 method `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

scale ใช้ระบุความสัมพันธ์ ค่าของ input จะเท่ากับค่าของ output ในบทเรียนอื่นจะพูดถึงอีกครั้งสำหรับการเปลี่ยนค่าเหล่านี้

# --instructions--

เปลี่ยน `scale` variable เพื่อสร้าง linear scale. จากนั้นกำหนด `output` variable สำหรัยเรียกใช้ scale ด้วย argument ที่เท่ากับ `50`.

# --hints--

text ใน `h2` ควรเป็น `50`.

```js
assert($('h2').text() == '50');
```

ควรใช้ `scaleLinear()` method.

```js
assert(code.match(/\.scaleLinear/g));
```

`output` variable ควรถูกเรียกใช้ `scale` ที่มี argument เป็น `50`.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
