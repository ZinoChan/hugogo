---
title: "Insertion Sort"
date: 2022-11-28T12:07:38+01:00
draft: false
description: Learn How insertion sort works & it's implementation in javascript
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

## What is insertion sort

insertion sort is a sorting algorithm where you insert each element into its proper place in the sorted array, by comparing it to the previous elements.

## Working of insertion sort

In each iteration, insertion sort compares the current element with the next element and determines whether the current element is greater than the one it was compared to.

If this is true, then it leaves the element in its place and moves on to the next element. If it is false, then it finds its correct position in the sorted array and moves it to that position by shifting all the elements which are larger in the sorted array to one position ahead.

## Example

take this array

```
let arr = [2,3,1,0]
```

we start at position 1 where arr[1] = 3, and we compare 3 with the element before it which is 2, 2 is smaller than 3 so we do nothing.
next position is 2 where arr[2] = 1 here 1 is compared with 3 so 1 is less than 3, but we don't do anything yet because there are still elements to compare 1 with the idea is to find the correct final place for 1 so we continue and compare 1 with 2 so 1 is smaller and there is no more elements left to compare with so all element are shifted so that 1 takes it's correct position.

```
arr = [1,2,3,0]
```

the last element to find it's place is now arr[3] = 0, the proccess is repeated and all element are shifted so 0 can be inserted in it's correct place

```
arr = [0,1,2,3]
```

## Implementation of insertion sort

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // we look to insert number at it's correct position starting from index 1
    let numToInsert = array[i];
    for (let j = i - 1; j >= 0 && array[j] > numToInsert; j--) {
      //compare the number to insert with it's previous numbers in the array
      //if there is a number that is greater than numToInsert shift the number one position to the right
      array[j + 1] = array[j];
    }
    array[j + 1] = numToInsert;
  }
  return array;
}
```
