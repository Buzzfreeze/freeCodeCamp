---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

เราสามารถใช้ Sass เพื่อเอา CSS มาซ้อนกันได้ ซึ่งมีประโยชน์มากถ้าเราอยากให้ style sheet ของเราเป็นระเบียบ

ปกติแล้วเราจะเขียน CSS เพื่อให้เลือก element แต่ละตัวแยกกัน เหมือนตัวอย่างนี้:

```scss
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

ถ้าแอพเราใหญ่มากๆ ไฟล์ CSS ของเราจะมีค่าหลายตัวมากๆ ซึ่งการนำ CSS มาซ้อนกันจะทำให้โค้ดเราเป็นระเบียบขึ้นมาก 

โดยวิธีการคือ เราจะใส่ CSS ของ child element ไว้ใน parent element:

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

```

# --instructions--

ให้ใช้วิธีด้านบน CSS มาจัดระเบียบ CSS ใหม่ให้กับ child ทั้งสองตัวของ `.blog-post` element 

เพื่อให้เราตรวจสอบโค้ดของคุณได้ ให้เขียน `h1` element ไว้บน `p` element

# --hints--

คุณต้องจัดระเบียบ CSS ใหม่ ดังนั้น `h1` และ `p` ต้องไปซ้อนอยู่ใน `.blog-post` element ซึ่งเป็น parent

```js
assert(
  code.match(
    /\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  .blog-post {

  }
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    font-size: 20px;
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```
