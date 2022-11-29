---
title: "Quicksort Algorithm"
date: 2022-11-25T18:03:40+01:00
draft: false
description: Learn How quicksort works & it's implementation in javascript
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

## What is quicksort

Quicksort is a sorting algorithm based on the divide and conquer approach.

## Working of Quicksort Algorithm

### 1. Selecting the pivot element

the pivot is just a random number from the array some quicksort implementation uses the middle or the first or the last element
for example take this array:

```js
const arr = [2, 4, 1, 7, 6];
```

the last element here is 5 so the pivot elment is now 5

### 2. Rearange the array

here the array is going to be rearranged in a way that the final result is the same array but with the pivot element setting in it's correct sorted place and the elements smaller than it are in it's left while the elements greater than it are in it's right.
array after rearrangement:

```js
const arr = [2, 4, 1, 6, 7];
//                 ↑
// pivot position after rearrangement
```

after each rearrangement the array is split into two sub arrays the left one that starts from the beginning of the array to the pivot index - 1 and the right sub which start from the pivot index + 1 to the end of the array. and each sub will be splited further into two sub arrays using the same principle.

**_NOTE:_**
we don't create new sub arrays the array stays the same and we only change the pointers to the start and end of each sub inside of it.

so to divide the array we need a way to now where is the pivot element after each rearrangement so we use a helper function.

#### 2.1 Rearrangement (partitioning)

a partition funtion is used to rearrange the array and return the pivot index in it's correct place

```js
function partition(array, startIndex, endIndex)
```

- array: the array we want to sort
- startIndex: the index of the first element of the sub array
- endIndex: the index of the last element in the sub array

```js
function partion(array, startIndex, endIndex) {
  // Set the endIndex to be the pivotindex
  let pivotIndex = endIndex;

  // Set the startIndex to be the current greater element
  let greaterElementIndex = startIndex;

  //loop through the array starting form the startIndex to the endIndex (sub array)
  for (let i = startIndex; i < endIndex; i++) {
    //if the element at index i is less than the pivot element means it should be on the left side of the sub array
    // so swap both the element at i and the element at greaterElementIndex
    if (array[i] <= array[pivotIndex]) {
      [array[i], array[greaterElementIndex]] = [
        array[greaterElementIndex],
        array[i],
      ];
      //after swap the index of the current greater element need to be updated to the next index
      greaterElementIndex++;
    }
  }
  //after the loop is done all element less than the pivot will be on the right side of the greaterElementIndex
  // and all the element greater than the pivot will be on it's right
  // the only step left is to swap the greater element with the pivot element
  [array[pivotIndex], array[greaterElementIndex]] = [
    array[greaterElementIndex],
    array[pivotIndex],
  ];

  // finaly return the index of the current greater element as it's now the position of the pivot
  return greaterElementIndex;
}
```

### The quickSort function

the function keeps dividing the array recursivly until only one element is left, rearrange these sub arrays and return the full array

```js
function quickSort(array, startIndex = 0, endIndex = array.length - 1) {
  //check if it is possible to divide the array
  if (startIndex < endIndex) {
    // get the pivot index by calling the partition function
    let pivotIndex = partition(array, startIndex, endIndex);
    //recursively call quick sort on  left part of the pivotIndex
    quickSort(array, startIndex, pivotIndex - 1);

    //recursively call quick sort on  right part of the pivotIndex
    quickSort(array, pivotIndex + 1, endIndex);
  }
  return array;
}
```
