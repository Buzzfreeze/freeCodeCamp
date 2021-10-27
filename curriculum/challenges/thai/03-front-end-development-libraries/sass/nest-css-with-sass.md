---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass สามารถฝังกฎ CSS ได้ ซึ่งเป็นวิธีที่มีประสิทธิภาพในการจัดระเบียบสไตลชีต

โดยปกติแล้วแต่ละ element นั้นถูกตั้งเป้าหมายในโค้ดคนละบรรทัดในการสไตล์ ดังเช่น:

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

ในโปรเจคที่ใหญ่ๆ ไฟล์ CSS นั้นเต็มไปด้วยบรรทัดและกฎต่างๆ ซึ่งการ nesting (ฝัง) จะเข้ามามีส่วนในการจัดระเบียบโค้ดของคุณโดยการวางกฎสไตล์ที่เป็น child ภายใน parent element ของมัน

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

ใช้เทคนิค nesting ดังที่แสดงข้างบนในการจัดระเบียบกฎ CSS ต่างๆ ใหม่ ให้ child ทั้งสองของ `.blog-post` element เพื่อให้ test ผ่าน `h1` ควรมาก่อน `p` element

# --hints--

โค้ดของคุณควรจัดระเบียบกฎ CSS ใหม่ ดังนั้น `h1` และ `p` ควรถูกฝังใน `.blog-post` element ที่เป็น parent

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
