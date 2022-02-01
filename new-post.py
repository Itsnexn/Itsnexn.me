#!/usr/bin/env python3
import os, datetime

# Get script directory
script_dir = os.path.dirname(os.path.realpath(__file__))

# ansi colors
class bcolors:
    RED = '\033[91m'
    GREEN = '\033[92m'
    ORANGE = '\033[93m'
    BOLD = '\033[1m'
    RESET = '\033[0m'

def main():
    categories = []    

    for i in os.listdir(script_dir + '/_contents'):
        if os.path.isdir(script_dir + '/_contents/' + i):
            categories.append(i)

    title = input(bcolors.BOLD + bcolors.ORANGE + 'Title: ' + bcolors.RESET)
    author = input(bcolors.BOLD + bcolors.ORANGE + 'Author: ' + bcolors.RESET)
    description = input(bcolors.BOLD + bcolors.ORANGE + 'Description: ' + bcolors.RESET)
    date = datetime.datetime.now().strftime("%s")
    tags = input(bcolors.BOLD + bcolors.ORANGE + 'Tags [seperated by ","]: ' + bcolors.RESET)
    tags = [ i for i in [i.strip() for i in tags.split(',')] if i]

    while True:
        for i, category in enumerate(categories, start=1):
            print(f"{i} - {bcolors.GREEN}{category}{bcolors.RESET}")
        print(f"{i+1} - {bcolors.ORANGE}New Category{bcolors.RESET}")
        try:
            choice = input(bcolors.BOLD + bcolors.ORANGE + '>>> ' + bcolors.RESET)
            if int(choice) <= len(categories):
                category = categories[int(choice)-1]
                break
            elif int(choice) == len(categories) + 1:
                category = input(f"{bcolors.BOLD}New Category: {bcolors.RESET}")
                if category in categories:
                    print(f"{bcolors.RED}Category already exists{bcolors.RESET}")
                    continue
                else:
                    try:
                        os.mkdir(script_dir + '/_contents/' + category)
                    except:
                        print(f"{bcolors.RED}Could not create category{bcolors.RESET}")
                        exit(1)
                    print(f"{bcolors.GREEN}Category created{bcolors.RESET}")
                    break
            else:
                print(f"{bcolors.RED}Invalid input{bcolors.RESET}")
        except KeyboardInterrupt:
            print("\nBye!")
            exit(1)
        except Exception as e:
            print(f"{bcolors.RED}Unexpected Error: {bcolors.RESET}\n{e}")
            exit(1)
    while True:
        slug = input(bcolors.BOLD + bcolors.ORANGE + 'Slug [Spaces will be replaced with "-"]: ' + bcolors.RESET).replace(" ", "-")
        if os.path.exists(f"{script_dir}/_contents/{category}/{slug}.md"):
            print(f"{bcolors.RED}File already exists{bcolors.RESET}")
            continue
        break
    with open(f"{script_dir}/_contents/{category}/{slug}.md", 'w') as f:
        f.write(f"""---
title: {title}
author: {author}
description: {description}
date: {date}
category: {category}
tags: {tags}
---
""")
    choice = input(f"{bcolors.GREEN}Open file in default $EDITOR? [y/n]: {bcolors.RESET}")
    if choice.strip() == "y":
        os.system(f"$EDITOR {script_dir}/_contents/{category}/{slug}.md")

if __name__ == '__main__':
    main()