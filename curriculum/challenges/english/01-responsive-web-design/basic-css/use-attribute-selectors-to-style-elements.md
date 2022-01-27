---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/cnpymfJ"
forumTopicId: 301092
dashedName: use-attribute-selectors-to-style-elements
---

# --description--

คุณได้ลองเพิ่ม style ให้ element โดยใช้ `id` หรือ `class` ไปแล้ว
ซึ่งรูปแบบที่คุณได้เขียนไปนั้น เราเรียกว่า id selector (`#`) และ class selector (`.`)
โดย CSS ก็จะมี selector ตัวอื่นอีกที่จะช่วยให้เราเลือก element ที่จะตกแต่งได้ง่ายขึ้น

เราจะกลับมาใช้ CatPhotoApp อีกครั้ง เพื่อฝึกการใช้ CSS Selector

ในแบบฝึกหัดนี้ คุณจะได้ใช้ attribute selector ที่มีหน้าตาแบบนี้ `[attr=value]` เพื่อตกแต่ง checkbox ใน CatPhotoApp
โดย selector นี้จะหา element ที่ตรงกับ attribute ที่เราระบุ และตกแต่ง element นั้น
เช่น โค้ดด้านล่างจะเปลี่ยน margin ของทุก element ที่มี attribute `type` เป็น `radio`:

```css
[type="radio"] {
  margin: 20px 0px 20px 0px;
}
```

# --instructions--

ให้ใช้ attribute selector เลือก element โดยใช้ `type`
เพื่อตกแต่ง checkbox ใน CatPhotoApp ให้มี `margin-top` เป็น `10px` และมี `margin-bottom` เป็น `15px`

# --hints--

ต้องใช้ attribute selector ที่เลือก element ตาม `type` เพื่อเลือก checkbox

```js
assert(
  code.match(
    /<style>[\s\S]*?\[\s*?type\s*?=\s*?("|')checkbox\1\s*?\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi
  )
);
```

`margin-top` ของ checkbox ต้องมีค่าเป็น `10px`

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css("marginTop") === "10px") {
        count++;
      }
    });
    return count === 3;
  })()
);
```

`margin-bottom` ของ checkbox ต้องมีค่าเป็น `15px`

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css("marginBottom") === "15px") {
        count++;
      }
    });
    return count === 3;
  })()
);
```

# --seed--

## --seed-contents--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form
    action="https://freecatphotoapp.com/submit-cat-photo"
    id="cat-photo-form"
  >
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
  [type="checkbox"] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form
    action="https://freecatphotoapp.com/submit-cat-photo"
    id="cat-photo-form"
  >
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
