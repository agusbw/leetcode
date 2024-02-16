/**
 Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
}

merge(nums1, m, nums2, n);

console.log(nums1);
