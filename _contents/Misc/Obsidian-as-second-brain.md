---
title: How I use obsidian as my second brain
author: 0xNexn
description: "Like many, I have struggled with my note-taking and I couldn't find a good system to organize them. so I started to try different popular workflows and I stumbled upon the P.A.R.A method. in this post i'll show you my workflow and we will setup a second brain using obsidian together."
date: 1651017727
tags: [
    "Note Taking",
    "Obsidian",
    "PARA technique",
    "personal knowledge management",
    "PKM"
]
---
information is the key to everything. and we can't just "use our head" to remember everything that we know this is where note-taking or building a second brain comes in. the key to good note-taking is being able to collect as much as possible and have it accessible. but the problem is if you couldn't keep them organized this can lead to a flood of information.

> ![Obsidian graph](https://i.imgur.com/2ZUd2Yb.png)
> massive graph from [@myownslave](#) over 3,639 notes

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

## Getting started
### Summary of P.A.R.A

**P.A.R.A** Stands for Projects - Areas - Resources - Archives, which are the four top-level categories in the system which all information is categorized under. 

1. A **project** is “a series of tasks linked to a goal, with a deadline.”
2. An **area of responsibility** is “a sphere of activity with a standard to be maintained over time.”
3. A **resource** is “a topic or theme of ongoing interest.”
4. **Archives** include “inactive items from the other three categories.”

## Tools/Applications
This is one of the interesting topics about note-taking. one of the questions that I get a lot is that:

> what is the best application for note-taking? or what is your favorite application for note-taking?

Well, it depends on you. what do you want from a note-taking application ?

these are my factors for a good note-taking application:
- Cross-platform
able to run applications in different operating systems.
- Minimal
- Customizable
I like to be able to customize my environment. for example changing the font or color scheme.
- [Open Source](https://en.wikipedia.org/wiki/Open-source_software)
- Having vim like keybinding
With VIM binding your hand never need to leave the main keyboard. VIM bindings are not "keyboard shortcuts", they are a real-time human-computer interaction language. It takes a while to learn, but once you do you'll never want to use anything else.
- Support for [Markdown](https://en.wikipedia.org/wiki/Markdown)
**Markdown** is a lightweight markup language for creating formatted text using a plain-text editor. having markdown language and vim together makes writing 4 times easier.


I tried lots of applications but none of them were good as **Obsidian**. here is a table of applications that I tried before using Obsidian:

#### 1. [Notion](https://www.notion.so/)
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

#### 2. [Vim Wiki](https://github.com/vimwiki/vimwiki)
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

#### 3. [EverNote](https://www.evernote.com)
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

### Setup Obsidian for P.A.R.A
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
even though I'm using P.A.R.A system to organize my notes I really like them to be in separated directories depending on their topic. my directory structure would be something like:

```
Obsidian Vault Directory:
    |__ 1. Projects
    |      \_ ...
    |__ 2. Areas
    |      \_ Hacking
    |      \_ Linux
    |      \_ Programming
    |      \_ Blog
    |__ 3. Resources
    |      \_ Books
    |            \_ Library
    |__ 4. Archive
    |      \_ Books
    |            \_ Library
    |      \_ Blog
    \__ templates
```

I also have a index file in the root directory which I use that to link my MOC (Map Of Content) files.

#### 5. Setup templates for notes
having a templates for different notes is important to automate the process of taking-notes. I use default template plugin for this process but if you want more customizability you can check out templater plugin.
