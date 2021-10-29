---
id: 5e9a093a74c4063ca6f7c167
title: Python Iteration and Modules
challengeType: 11
videoId: XzosGWLafrY
bilibiliIds:
  aid: 633068913
  bvid: BV1db4y127M4
  cid: 409024056
dashedName: python-iteration-and-modules
---

# --description--

*ผู้เรียนสามารถใช้ Google Colab แทน notebooks.ai ที่สาธิตใน Videoได้*

แหล่งเรียนรู้เพิ่มเติม:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

เราจะทำการวนซ้ำ (iterate) และ print ตัว key และ value ของ dictionary ชื่อ `user` ได้อย่างไร?

## --answers--

```python
for key in user.items():
    print(key)
```

---

```python
for key, value in user.all():
    print(key, value)
    print(value)
```

---

```python
for key, value in user.items():
    print(key, value)
```

---

```python
for key, value in user
    print(key, value)
```

## --video-solution--

3

