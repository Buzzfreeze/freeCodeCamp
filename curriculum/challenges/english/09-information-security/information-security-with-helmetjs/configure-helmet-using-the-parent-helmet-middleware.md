---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-infosec/)

`app.use(helmet())` เปิดการเปิดใช้ middleware ที่เราสอนไปแล้วทั้งหมด (ยกเว้น `noCache()` และ `contentSecurityPolicy()` แต่ก็สามารถเปิดใช้ได้ถ้าต้องการ) 
คุณยังสามารถปิดใช้งานหรือกำหนดค่า middleware อื่นๆ แยกกันได้โดยใช้ configuration object

**ตัวอย่าง:**

```js
app.use(helmet({
  frameguard: {         // ตั้งค่า
    action: 'deny'
  },
  contentSecurityPolicy: {    // ตั้งค่าและเปิดใช้งาน
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // ปิดใช้งาน
}))
```

เราสอน middleware แยกกัน เพื่อให้เข้าใจง่าย และสามารถ test ได้ง่าย 
แต่การใช้ middleware ‘parent’ `helmet()` ในโปรเจคจริงๆ นั้นง่ายมาก

# --hints--

ไม่มีการ test นี้เป็นเพียงแบบทดสอบเพื่ออธิบายเท่านั้น

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
