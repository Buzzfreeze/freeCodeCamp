---
id: 5e7b9f0d0b6c005b0e76f075
title: 'Networking: Using urllib in Python'
challengeType: 11
videoId: 7lFM1T_CxBs
bilibiliIds:
  aid: 546908270
  bvid: BV1Xq4y1H7e6
  cid: 377331524
dashedName: networking-using-urllib-in-python
---

# --question--

## --text--

ผลลัพธ์ของโค้ดต่อไปนี้ จะเป็นอย่างไร ?

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

เนื้อหาของ "romeo.txt"

---

หัวข้อและเนื้อหาของ "romeo.txt"

---

ห้อข้อด้านบน ด้านล่าง และเนื้อหาของ "romeo.txt"

## --video-solution--

1
