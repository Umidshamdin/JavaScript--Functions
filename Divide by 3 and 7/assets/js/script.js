let a = 42;
let b = 41;
function divide(num) {
    if (num % 3 == 0 && num % 7 == 0) {
        console.log("3-ə və 7-ə bölünür");
    } else {
        console.log("3-ə və ya 7-ə bölünmür");
    }
}
divide(a);
divide(b);