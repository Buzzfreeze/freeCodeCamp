---
id: 5e7b9f0b0b6c005b0e76f06d
title: Comparing and Sorting Tuples
challengeType: 11
videoId: dZXzBXUxxCs
bilibiliIds:
  aid: 931886163
  bvid: BV1HM4y1T7TK
  cid: 376533673
dashedName: comparing-and-sorting-tuples
---

# --description--

ตัวอย่างเพิ่มเติม :

\- [ตัวอย่างที่ 1](https://www.youtube.com/watch?v=EhQxwzyT16E)

# --question--

## --text--

โค๊ดในข้อใด ให้ผลลัพธ์เหมือนกับโค๊ดที่ให้มา ?

```python
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)
```

## --answers--

```python
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
```

---

```python
print( [ (k,v) for k,v in counts.items().sorted() ] )
```

---

```python
print( sorted( [ (v,k) for k,v in counts.keys() ] ) )
```

---

```python
print( [ (k,v) for k,v in counts.values().sort() ] )
```

## --video-solution--

1
