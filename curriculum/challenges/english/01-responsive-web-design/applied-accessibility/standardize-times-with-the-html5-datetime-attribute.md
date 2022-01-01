---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

มาต่อกันด้วย date theme
HTML5 ได้มีการเพิ่ม `time` element ที่มาพร้อมกับ `datetime` attribute เพื่อใช้กำหนดเวลาให้เป็นมาตรฐาน
`time` element เป็น inline element ที่สามารถเก็บ วัน หรือ เวลา ไว้ในหน้านั้น ๆ ได้
`datetime` attribute จะเก็บ format ที่ถูกต้องของวันที่นั้นไว้
สิ่งนี้จะเป็นค่าที่ถูกเข้าถึงด้วย assistive devices
มันช่วยป้องกันความสับสนที่จะเกิดขึ้นโดยการตั้งมาตรฐานสำหรับการเขียนวันที่
นี่เป็นตัวอย่าง:

```html
<p>
  Master Camper Cat officiated the cage match between Goro and Scorpion
  <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.
</p>
```

# --instructions--

ผลจากแบบสำรวจ Mortal Kombat ของ Camper Cat มาแล้ว!
จงใช้ `time` tag เก็บข้อความที่เขียนว่า `Thursday, September 15<sup>th</sup>` และเพิ่ม `datetime` attribute ให้กับมันแล้วจึงตั้งค่าให้มันเท่ากับ `2016-09-15`.

# --hints--

โค้ดของคุณควรมี `p` element ที่มีข้อความ `Thank you to everyone for responding to Master Camper Cat's survey.` และจงเพิ่ม `time` element เข้าไป

```js
assert(timeElement.length);
```

`time` tag ที่คุณเพิ่มเข้ามาควรจะเก็บข้อความที่เขียนว่า `Thursday, September 15<sup>th</sup>`.

```js
assert(timeElement.length && $(timeElement).html().trim() === 'Thursday, September 15<sup>th</sup>');
```

`time` tag ที่คุณเพิ่มเข้ามาควรมี `datetime` attribute อันหนึ่งที่ไม่ได้ว่างเปล่า

```js
assert(datetimeAttr && datetimeAttr.length);
```

`datetime` attribute ที่คุณเพิ่มเข้ามาควรถูกกำหนดให้มีค่าเป็น `2016-09-15`

```js
assert(datetimeAttr === '2016-09-15');
```

# --seed--

## --after-user-code--

```html
<script>
  const pElement = $('article > p').filter((_, elem) =>
    $(elem).text().includes("Thank you to everyone for responding to Master Camper Cat's survey."),
  );
  const timeElement = pElement[0] ? $(pElement[0]).find('time') : null;
  const datetimeAttr = $(timeElement).attr('datetime');
</script>
```

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Only change code below this line -->

    <p>
      Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat
      tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!
    </p>

    <!-- Only change code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>
          Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time>
        </p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>
          Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time>
        </p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>
          Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time>
        </p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <p>
      Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat
      tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time
      >. May the best ninja win!
    </p>

    <section>
      <h3>Comments:</h3>
      <article>
        <p>
          Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time>
        </p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>
          Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time>
        </p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>
          Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time>
        </p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
