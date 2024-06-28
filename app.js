export function arrSum(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
}
