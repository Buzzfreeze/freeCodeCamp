---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: "https://scrimba.com/c/cmzMgtz"
forumTopicId: 301025
dashedName: standardize-times-with-the-html5-datetime-attribute
---

# --description--

มาคุยเรื่องวันกันต่อ

HTML5 ได้มีการเพิ่ม element `time` โดยมี attribute `datetime` ติดมาด้วย เพื่อใช้กำหนดเวลาให้เป็นมาตรฐาน
โดย `time` element เป็น inline element ที่สามารถเก็บวันหรือเวลาไว้ในหน้านั้น ๆ ได้

`datetime` attribute จะเก็บรูปแบบที่ถูกต้องของวันที่นั้นไว้
ซึ่งจะถูกอ่านด้วย assistive device โดยจะช่วยป้องกันความสับสนในการเขียนเวลาในรูปแบบต่างๆกัน

ลองดูตัวอย่าง:

```html
<p>
  Master Camper Cat officiated the cage match between Goro and Scorpion
  <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.
</p>
```

# --instructions--

เราได้ผลจากแบบสำรวจ Mortal Kombat ของนาย Camper Cat มาแล้ว!
ให้ใช้แท็ก `time` เก็บข้อความที่เขียนว่า `Thursday, September 15<sup>th</sup>` และเพิ่ม attribute `datetime` โดยกำหนดค่าเป็น `2016-09-15`

# --hints--

โค้ดของคุณต้องมี `p` element ที่มีข้อความว่า `Thank you to everyone for responding to Master Camper Cat's survey.` โดยมี `time` element อยู่ข้างในด้วย

```js
assert(timeElement.length);
```

แท็ก `time` ที่คุณเพิ่มเข้ามา ต้องเก็บข้อความที่เขียนว่า `Thursday, September 15<sup>th</sup>`

```js
assert(
  timeElement.length &&
    $(timeElement).html().trim() === "Thursday, September 15<sup>th</sup>"
);
```

แท็ก `time` ที่คุณเพิ่มเข้ามา ต้องมี attribute `datetime` โดยที่ต้องระบุค่าด้วย

```js
assert(datetimeAttr && datetimeAttr.length);
```

attribute `datetime` ที่คุณเพิ่มเข้ามา ต้องมีค่าเป็น `2016-09-15`

```js
assert(datetimeAttr === "2016-09-15");
```

# --seed--

## --after-user-code--

```html
<script>
  const pElement = $("article > p").filter((_, elem) =>
    $(elem)
      .text()
      .includes(
        "Thank you to everyone for responding to Master Camper Cat's survey."
      )
  );
  const timeElement = pElement[0] ? $(pElement[0]).find("time") : null;
  const datetimeAttr = $(timeElement).attr("datetime");
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
      Thank you to everyone for responding to Master Camper Cat's survey. The
      best day to host the vaunted Mortal Kombat tournament is Thursday,
      September 15<sup>th</sup>. May the best ninja win!
    </p>

    <!-- Only change code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>
          Posted by: Sub-Zero on
          <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time>
        </p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>
          Posted by: Doge on
          <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time>
        </p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>
          Posted by: The Grim Reaper on
          <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time>
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
      Thank you to everyone for responding to Master Camper Cat's survey. The
      best day to host the vaunted Mortal Kombat tournament is
      <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time
      >. May the best ninja win!
    </p>

    <section>
      <h3>Comments:</h3>
      <article>
        <p>
          Posted by: Sub-Zero on
          <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time>
        </p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>
          Posted by: Doge on
          <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time>
        </p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>
          Posted by: The Grim Reaper on
          <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time>
        </p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
