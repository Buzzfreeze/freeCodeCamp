---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

โปรดทราบว่าโปรเจคนี้ถูกสร้างจากโปรเจคเริ่มต้นบน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) หรือโคลนมาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/)

`app.use(helmet())` จะรวม middleware ทั้งหมดที่แนะนำข้างต้นโดยอัตโนมัติ ยกเว้น `noCache()` และ `contentSecurityPolicy()` แต่สิ่งเหล่านี้สามารถเปิดใช้งานได้หากจำเป็น คุณยังสามารถปิดใช้งานหรือกำหนดค่า middleware อื่นๆ แยกกันได้โดยใช้ configuration object

**Example:**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

เราได้แนะนำ middleware แยกกันเพื่อเหตุผลทางการสอนและเพื่อความสะดวกในการ test การใช้ ‘parent’ `helmet()`
 middleware ในโปรเจคจริงๆ นั้นง่ายมาก

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
