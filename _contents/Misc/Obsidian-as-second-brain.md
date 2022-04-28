---
title: How I use obsidian as my second brain
author: 0xNexn
description: "Like many, I have struggled with my note-taking and I couldn't find a good system to organize them. so I started to try different popular workflows and I stumbled upon the P.A.R.A method. in this post i'll show you my workflow and we will setup a second brain using obsidian together."
date: 1651158642
tags: [
    "Note Taking",
    "Obsidian",
    "PARA technique",
    "personal knowledge management",
    "PKM"
]
---
link: [[Blog Posts MOC]]

information is the key to everything. and we can't just "use our head" to remember everything that we know this is where note-taking or building a second brain comes in. the key to good note-taking is being able to collect as much as possible and have it accessible. but the problem is if you couldn't keep them organized this can lead to a flood of information.

> ![Obsidian graph](https://i.imgur.com/2ZUd2Yb.png)
> massive graph from [@myownslave](#)



I've spent a lot of time thinking about how to optimize my notes and I tried so many different ways of taking notes. here is some places to start if you'd like to:

- [How to take smart notes](https://takesmartnotes.com/)
- [Build a second brain](https://www.buildingasecondbrain.com/)
- [Building a Second Brain: The Illustrated Notes](https://maggieappleton.com/basb)
- [PKM for Knowledge Workers](https://tinylittlebusinesses.com/zettelkasten-method)
- [The PARA Method: A System for Organizing Digital Information](https://fortelabs.co/blog/para/)

A perfect **Personal Knowledge Management** system should be:
- _Universal_ — able to receive all types of information from any source
- _Flexible_ — able to adapt to any project or activity I would take on now or in the future
- _Cross-Platform_ — compatible with the variety of different applications I use as part of my productivity system
- _Outcome Oriented_ — structured in such a way that helps move my work and projects forward
- _Modular_ — allowing me to both zoom out for a big picture view and zoom in for the details when necessary
- _Opportunistic_ — taking advantage of work already being performed instead of requiring dedicated overhead time

the method that I'll show you here is **P.A.R.A**

## what application you should use?
This is one of the interesting topics about note-taking one of the questions that I get a lot is that:

> what is the best application for note-taking ?

Well, it depends on you. what do you want from a note-taking application ?

these are my factors for a good note-taking application:
- _Cross-platform_ — able to run applications in different operating systems.
- Minimal
- _Customizable_ — I like to be able to customize my environment. for example changing the font or color scheme.
- [Open Source](https://en.wikipedia.org/wiki/Open-source_software) —
- Having vim like keybinding — With VIM binding your hand never need to leave the main keyboard. VIM bindings are not "keyboard shortcuts", they are a real-time human-computer interaction language. It takes a while to learn, but once you do you'll never want to use anything else.
- Support [Markdown](https://en.wikipedia.org/wiki/Markdown) — **Markdown** is a lightweight markup language for creating formatted text using a plain-text editor. having markdown language and vim together makes writing 4 times easier.

I tried lots of applications but none of them were good as **Obsidian**. here is my thought about applications that I tried before using Obsidian:

#### [Notion](https://www.notion.so/)
Pros:
- It kind of supports markdown
- Notion databases
- Flexible pages
- Free
- Web clipper
Cons:
- No VIM mode
- No offline support
- Privacy
#### [Vim Wiki](https://github.com/vimwiki/vimwiki)
Pros:
- Full Markdown support
- Flexible linking
- Free
- Open Source
- Full VIM bindings
Cons:
- No preview
- Tables are limited. you can't use it like notion databases.
- No Plugin
- The tags are working weirdly...
#### [EverNote](https://www.evernote.com)
I just didn't like it...
Cons:
- No markdown support
- bad explorer
- Pricey

now let's talk about obsidian and why I chose obsidian over all of these. Obsidian has its own pros and cons but it was the best choice for me.
- VIM keybindings
- Powerful markdown live-preview
- you can literally customize the whole graphical interface.
- community plugins
- and Javascript API

## Getting started with my method of note taking
my custom system of note-taking is a combination of **P.A.R.A system** and **IMF system**.
PARA so lets talk about them.

### Summary of P.A.R.A
**P.A.R.A** Stands for Projects - Areas - Resources - Archives, which are the four top-level categories in the system which all information is categorized under.

1. A **project** is “a series of tasks linked to a goal, with a deadline.”
2. An **area of responsibility** is “a sphere of activity with a standard to be maintained over time.”
3. A **resource** is “a topic or theme of ongoing interest.”
4. **Archives** include “inactive items from the other three categories.”

Complete [Article about PARA](https://fortelabs.co/blog/para/)

### Summary The IMF Framework
IMF stands for "**Index** and **Maps of Content** and other fluid **Frameworks**"
> Its actually stands for index and maps of content and frameworks framework but i think fluid frameworks is better and it means the same thing.

#### Why IMF?
Equipping your library with an Index, Maps, and other fluid Frameworks enhances your working experience.
It is robust, flexible, and able to match your changing needs—which are undoubtably unique to you—both today and deep into your future.

#### What is IMF
1. **The Index** - This can act as your homebase to ground you, and as a launching pad into your note library.
2. **Maps of Content** (MOCs) - These are like having curated worktables with all your relevant index cards placed on them. They are the mitochondria of a digital library. Once you use them, you'll be able to overcome the overwhelm that arises from having notes scattered everywhere. More on this later.
3. **Fluid Frameworks** -  Adding structure to your notes has gotten a bad rap lately. But if you know how to keep your structures fluid, you'll get the best of both worlds: order *and* chaos; excellent note retrieval *and* the serendipity of discovery. More on this later.

### Setup Obsidian for this method
#### 1. Install Obsidian
you can install obsidian from https://obsidian.md or you can use your package manager to download it.

#### 2. plugins
- Advanced Tables
- Dataview
- Excalidraw
- File Explorer note count
- Sliding Panes
- Reading time

#### 3. Customize
first things that I'll do is to enable VIM mode and spell check. for the theme i wrote my own theme which I'm planning for adding that to github soon.

#### 4. Setup Directory structure
1. Create your P.A.R.A Structure
2. Create your index file in the root directory.
3. Create categories for your notes inside of the para directory.
4. link your category MOC to the index file.

even though I'm using P.A.R.A system to organize my notes I really like them to be in separated directories depending on their topic. my directory structure would be something like:

now add your notes as you go. you can organize them by numbers. the way I'm done it is simple.
basically I created my categories inside para directories then created category index at number 000. then I created my MOC depending how big they can get. like this:

```
Areas/
    \_ Programming/
        \_ 000. _Programming
        \_ 001. Useful Links
        \_ 010. __Assembly
        \_ 011. Basic instructions
        \_ 010. stack
        \_ 020. __C programming
        \_ 021. STDIO
        \_ 022. Pointers
        \_ 050. __Python programming
        \_ 051. Flask
        \_ 052. Django
        \_ 053. Numpy
        \_ 100. __Methodolologies
        \_ 110. Authentication
index
```

then you can add your notes whenever you want and you just have to increment the number by one for each category. in this way if you sort the files [A-Z] you will be amazed how organized your notes are. you can also have a `attachment` directory inside of your category directory and use it to store all the images and other files that you want to attach to your notes.

#### 5. Setup templates for notes
having a templates for different notes is important to automate the process of taking-notes. I use default template plugin for this process but if you want more customizability you can check out templater plugin.
