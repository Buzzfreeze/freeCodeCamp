from googletrans import Translator
import os
import glob

translator = Translator()

folder_path = '/home/oak/freeCodeCamp/curriculum/challenges/thai/01-responsive-web-design/basic-html-and-html5'
for filename in glob.glob(os.path.join(folder_path, '**','*.*'), recursive=True):
  with open(filename, 'r') as f:
    # print(filename)
    text = f.read()
    # print(text)
    result = translator.translate(text, src = 'zh-TW', dest='th')
    # print(result.text)
  with open(filename, 'w') as f:
    f.write(result.text)
    f.flush()
