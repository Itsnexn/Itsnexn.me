---
title: HacktivityCon2021 Tsunami writeup
author: 0xNexn
description: Tsunami writeup from HacktivityCon2021
date: 1649522455
tags: ['ctf', 'HacktivityCon', 'spectrogram', 'audio']
---

# Tsunami
### Challenge
**Tag:** _Easy_

**Description:**
Woah! It's a natural disaster! But something doesn't seem so natural about this big wave...

**Attachments:**  [tsunami](#)

### Solve
just like other challenge's I start with file command:
```shell
$ file tsunami

tsunami: RIFF (little-endian) data, WAVE audio, Microsoft PCM, 16 bit, stereo 44100 Hz
```

hmmmmm! intresting!
I had some audio challenges before its mostly its about "Spectrograms"...

Im using **Sonic visualiser** but you can use anything that you comfortable with :)

**Step 0x0:**
hit Ctrl + O or goto _File => Open_ to open up our challenge file!
![step0x0](https://raw.githubusercontent.com/Itsnexn/WriteUps/main/HacktivityCon2021/WarmUp/Tsunami/step0x0.png)

**Step 0x1:**
![step0x1](https://raw.githubusercontent.com/Itsnexn/WriteUps/main/HacktivityCon2021/WarmUp/Tsunami/step0x1.png)

**Step 0x2:**
right click on the screen and goto _Layer => Add spectrogram_...
![step0x2](https://raw.githubusercontent.com/Itsnexn/WriteUps/main/HacktivityCon2021/WarmUp/Tsunami/step0x2.png)

**Step 0x3:**
And boom we got our flag!
![step0x3](https://raw.githubusercontent.com/Itsnexn/WriteUps/main/HacktivityCon2021/WarmUp/Tsunami/step0x3.png)

> Itsnexn for  **Abyssal Cruelty**
