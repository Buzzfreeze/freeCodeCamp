---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

ในการทำแบบทดสอบนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-npm/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-npm)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้


ไฟล์ `package.json` เป็นศูนย์กลางของโปรเจค Node.js หรือแพ็กเกจ npm โดยไฟล์นี้จะเก็บข้อมูลเกี่ยวกับโปรเจคของคุณ คล้ายกับที่ส่วน &lt;head> ไฟล์ HTML ที่เก็บข้อมูลที่จะใช้บนหน้าเว็บ `package.json` 
ไฟล์นี้จะเก็บข้อมูลเป็น JSON object แบบ key-value pair และมีฟิลด์ที่จำเป็นแค่สองตัว คือ "name" และ "version" โดยสิ่งที่ควรทำคือการใส่ของมูลเกี่ยวกับโปรเจคของคุณไว้ ทำให้คนที่จะทำงานต่อจากคุณในภายหลักทำงานได้ง่ายยิ่งขึ้น

หากคุณดูรายการของไฟล์ในโปรเจคของคุณ คุณจะพบไฟล์ package.json อยู่บนสุดของรายการไฟล์ นี่คือไฟล์ที่คุณจะต้องใช้ในแบบทดสอบต่อไป


ข้อมูลอย่างหนึ่งที่สำคัญไฟล์นี้คือ `author` ที่จะใช้ระบุว่าใครเป็นผู้สร้างโปรเจค โดยจะเก็บค่าเป็นสตริง หรือ object ที่เกี่ยวข้องกับผู้ที่สร้างโปรเจค  ถ้าโปรเจคของคุณใหญ่มากๆ เราแนะนำให้เก็บเป็น object แต่ในที่นี้เราจะเก็บเป็นสตริงไปก่อน

```json
"author": "Jane Doe",
```

# --instructions--

ให้เพิ่มชื่อ `author` ของโปรเจคของคุณในไฟล์ package.json

**Note:** โปรดจำไว้ว่าในการเขียน JSON การใส่ชื่อของทุกฟิล์ดต้องมีเครื่องหมาย (") และถ้าจะแยกฟิลด์ออกจากกันให้ใช้เครื่องหมาย (,)

# --hints--

package.json ต้องมีคีย์ "author" และค่าของคีย์นี้

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
