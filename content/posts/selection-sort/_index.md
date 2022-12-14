---
title: "Selection Sort"
date: 2022-12-06T15:25:21+01:00
tags: []
draft: false
description: Learn How selection sort works & it's implementation in javascript
type: posts
author: Zineb Elguil
authorEmail: devzinochan@gmail.com
authorBio: Front-end Web Developer
tags:
  - algorithms
  - javascript
  - sorting
stack:
  - js
  - ts
---

## What is Selection sort ?

Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

## Working of Selection sort

1. the first element is set to be the current smallest element
2. the array is traversed and every time an element smaller than the current element is found we set it to be the current smallest element.
   3.after all element are traversed the smallest element is swaped with the element at the first position and the process is repeated with the second element and so on.

### Example

let's consider the following array [6, 4, 2, 1]

#### First pass

the whole array is traversed from index 0 to 3 sequentially. The first position where 6 is stored as the current small element presently, after traversing whole array it is clear that 1 is the lowest value, so the 6 is swaped with the 1.

```js
[1, 4, 2, 6];
```

#### Second pass

4 is set to be the current smallest element, again the traverse of the rest of the array shows that 2 is the smallest element. swap 4 with 2

```js
[1, 2, 4, 6];
```

finally the array is sorted.

## Implementation of selection sort

```js
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let curr_min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[curr_min]) {
        curr_min = j;
      }
    }
    // swap after the end of the traverse
    [array[curr_min], array[j]] = [array[j], array[curr_min]];
  }
  return array;
}
```
