let arr = [1, 2, 3, 4, 5, 4, 2, 8, 7, 2, 0];
let total = arr.reduceRight((total, curr) => total + curr, 0);
// console.log(total)
let words = ["wife", "my", "love", "I"];
let proposal = words.reduceRight((propose, word)=>`${propose} ${word}`);
// console.log(proposal);




