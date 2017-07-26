const arr = [1, 2, 3, 4, 5];
const [key1, key2, ...rest] = arr;
//Yukarıdaki örnekde key1=1, key2=2, rest=[3,4,5] ataması yapacak.
console.log(rest);
