---
id: 5e7b9f0a0b6c005b0e76f069
title: Dictionaries and Loops
challengeType: 11
videoId: EEmekKiKG70
bilibiliIds:
  aid: 589401038
  bvid: BV1eq4y1X7xU
  cid: 376387132
dashedName: dictionaries-and-loops
---

# --description--

ตัวอย่างเพิ่มเติม:

\- [ตัวอย่างที่ 1](https://www.youtube.com/watch?v=PrhZ9qwBDD8)

# --question--

## --text--

เมื่อรันโค๊ดด้านล่าง จะได้ผลลัพธ์ข้อใด ?

```python
counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    if counts[key] > 10:
        print(key, counts[key])
```

## --answers--

<pre>annie 42
jan 100</pre>

---

<pre>chuck 1
annie 42
jan 100</pre>

---

<pre>chuck 1</pre>

---

<pre>[Error]</pre>

## --video-solution--

1
