---
id: 5d8a4cfbe6b6180ed9a1ca0d
title: Part 48
challengeType: 0
dashedName: part-48
---

# --description--

path ถูกใช้เพื่อบอกว่า data ใช้งานอย่างไร 
เพิ่ม `attr` function และกำหนด `d` ให้กับ `twitterLine(data)`เพื่อ path ที่ใช้งานใน `twitterLine` function 

Note: `d` ใช้ในกรณีที่ path attribute จะวาด line ซึ่งแตกต่างจาก "d function"

หลังจากที่เพิ่ม code จะเห็น data flow เพิ่มความเข้าใจว่าจะเกิดเหตุการณ์อะไรบ้าง หาก pass data array ให้กับ `twitterLine` function เมื่อกำหนดค่า x and y ที่ใช้ใน "d functions" โดยที่ "d functions" จะ pass แต่ละ item ใน array และจะ pass item สำหรับแต่ละ scale เพื่อหา coordinates ที่เหมาะสมเมื่อขั้นตอนเหล่านี้เสร็จแล้วค่าที่กำหนดจะถูกสร้างขึ้นและส่งกลับ โดยผลจะเป็น string ของจำนวนและ coordinates จะบิก path สำหรับการวาด

# --hints--

test-text

```js
assert($('svg path')[2].getAttribute('d').length === 151);
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
    .range([svgHeight - svgMargin, svgMargin]);

  const xScale = d3.scaleLinear()
    .domain([2012, 2020])
    .range([svgMargin, svgWidth - svgMargin]);

  const yAxis = d3.axisLeft(yScale)
    .ticks(6, '~s');

  const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format(''))
    .tickPadding(10);

  lineGraph.append('g')
    .call(yAxis)
    .attr('transform', `translate(${svgMargin}, 0)`)
    .style('font', '10px verdana');

  lineGraph.append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
    .selectAll('text')
    .style('transform', 'translate(-12px, 0) rotate(-50deg)')
    .style('text-anchor', 'end')
    .style('cursor', 'pointer')
    .style('font', '10px verdana');

  const twitterLine = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.followers.twitter));

  lineGraph.append('path')


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

  const xScale = d3.scaleLinear()
    .domain([2012, 2020])
    .range([svgMargin, svgWidth - svgMargin]);

  const yAxis = d3.axisLeft(yScale)
    .ticks(6, '~s');

  const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format(''))
    .tickPadding(10);

  lineGraph.append('g')
    .call(yAxis)
    .attr('transform', `translate(${svgMargin}, 0)`)
    .style('font', '10px verdana');

  lineGraph.append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
    .selectAll('text')
    .style('transform', 'translate(-12px, 0) rotate(-50deg)')
    .style('text-anchor', 'end')
    .style('cursor', 'pointer')
    .style('font', '10px verdana');

  const twitterLine = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.followers.twitter));

  lineGraph.append('path')
    .attr('d', twitterLine(data))



</script>
```
