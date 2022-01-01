---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

เมื่อคุณสร้าง string คุณจำเป็นต้องเริ่มและจบด้วย single (`'`) หรือ double quote (`"`)จะเกิดอะไรขึ้นเมื่อคุณจำเป็นต้องมี `"` หรือ `'` ใน string ของคุณ

คุณสามารถทำให้ JavaScript มองว่าเครื่องหมายที่คุณระบุเป็นส่วนหนึ่งของ string ได้ โดยวิธีการนี้เรียกว่าการ <dfn>escape</dfn> ซึ่งทำได้โดยวางเครื่องหมาย <dfn>backslash</dfn> (`\`) ไว้หน้าเครื่องหมาย single หรือ double quote


```js
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

การเขียนในรูปแบบนี้จะเป็นการบอก JavaScript ว่าเครื่องหมายคำพูดต่อไปนี้ไม่ได้ใส่มาเพื่อปิด string นะ แต่เป็นส่วนหนึ่งของสตริงต่างหาก ดังนั้น หากคุณแสดงผล string นี้บน console คุณเห็นข้อความดังนี้:


```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

จงใช้เครื่องหมาย <dfn>backslash</dfn> ในการกำหนด string ให้กับตัวแปร `myStr` ซึ่งถ้าพิมพ์ออกมาบน console จะเห็นผลลัพธ์ดังนี้

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

คุณควรใช้ double quotes 2 ตัว (`"`) และ escaped double quotes 4 ตัว (`\"`)

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

ตัวแปร myStr ควรเก็บค่า string: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
var myStr = ""; // แก้ไขบรรทัดนี้
```

# --solutions--

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
