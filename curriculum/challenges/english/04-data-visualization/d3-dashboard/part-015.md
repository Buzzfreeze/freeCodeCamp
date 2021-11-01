---
id: 5d8a4cfbe6b6180ed9a1c9ec
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

script ตัวแรกจะเป็น `data.js` file ที่เราได้เพิ่มเข้ามา ซึ่งเราจะสามารถเห็น  data and recommend  ส่วน script ลำดับที่สอง เราจะทำการเพิ่มเพื่อบอกว่า ที่ไหนที่เราจะใช้สำหรับการสร้าง project

ใน script ลำดับที่สอง ให้สร้าง `const` variables ขึ้นมาสามตัว, กำหยดค่า `svgMargin` เป็น `70`,ค่า `svgWidth` เป็น `700` และค่า `svgHeight` เท่ากับ `500`  dashboard ส่วนแรกจะเป็น line graph มันจะใช้ variables เหล่านี้เป็น dimensions

line graph จะประกอบไปด้วย years จาก data variable ส่วน bottom และ scale ทางข้างซ้ายเพื่อแสดงจำนวนของ followers
แต่ละ platform จะมี line ที่ไปสัมผัสกับ graph เพื่อแสดงจำนวนของ followers ของคุณในแต่ละปี

# --hints--

test-text

```js
assert(svgMargin === 70 && svgWidth === 700 && svgHeight === 500);
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
    svgHeight = 500;
  

</script>  
```
