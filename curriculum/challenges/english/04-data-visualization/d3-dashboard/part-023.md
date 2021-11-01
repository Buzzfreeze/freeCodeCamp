---
id: 5d8a4cfbe6b6180ed9a1c9f4
title: Part 23
challengeType: 0
dashedName: part-23
---

# --description--

`range` function ใช้อธิบายเพื่อ map domain values เพื่อแสดงค่าบนกราฟ ตัวอย่างเช่นมี 5000 followers เราจะไม่สามารถแสดงค่า 5000 บน y-coordinate ใน SVG หรือบน graph ดังนั้นเราจึงจำเป็นต้องปรับค่าให้เหมาะสมและอยู๋ใน range ของ top และ bottom ของ graph 

`range` function ข้างล่าง จะใช้`domain` เพื่อปรับค่าให้อยู่ใน range โดยpass ค่าไปใน array ด้วย `svgHeight - svgMargin` และ `svgMargin` ซึ่งจะแปลงค่าไปเป็น `[430, 70]` ซึ่งค่าพวกนี้จะเป็นค่าของ top และ bottom ของ graph ดังนั้น data point ที่มี 5000 followers จะ map ค่าไปเป็น 430 บน y-coordinate และ 0 followers จะอยู่ที่ตำแหน่ง 70 บน y-coordinate 

graph จะมี margin เหมือน axes และ labels โดย data จะแสดงค่าภายใน margin area

# --hints--

test-text

```js
const range = yScale.range();
assert(range.length === 2 && range[0] === 430 && range[1] === 70);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <style>
      body {
        background-color: #ccc;
        padding: 100px 10px;
      }

      .dashboard {
        width: 980px;
        height: 500px;
        background-color: white;
        box-shadow: 5px 5px 5px 5px #888;
        margin: auto;
        display: flex;
        align-items: center;
      }
    </style>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

## --seed-contents--

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
    svgWidth = 700,
    svgHeight = 500,
    twitterColor = '#7cd9d1',
    tumblrColor = '#f6dd71',
    instagramColor = '#fd9b98';

  const lineGraph = d3.select('.dashboard')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const yScale = d3.scaleLinear()
    .domain([0, 5000])


</script>
```

# --solutions--

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
    svgWidth = 700,
    svgHeight = 500,
    twitterColor = '#7cd9d1',
    tumblrColor = '#f6dd71',
    instagramColor = '#fd9b98';

  const lineGraph = d3.select('.dashboard')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const yScale = d3.scaleLinear()
    .domain([0, 5000])
    .range([svgHeight - svgMargin, svgMargin]);


</script>  
```
