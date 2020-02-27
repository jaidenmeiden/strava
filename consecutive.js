function makeArrayConsecutive2(statues) {
    var sorted = statues.sort((a,b) => a - b);
    var full = sorted[sorted.length - 1] - sorted[0] + 1;
    return full - sorted.length;
}
let t = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(t));