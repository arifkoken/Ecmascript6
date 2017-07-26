/**
 * Let Örnekleri
 */
 let deger1 =10;
 deger1=5; //deger1 let ile tanımlandığı için degişiklik yapılabilir.
 console.log(deger1);

 /**
  * Const Örnekleri
  */
 const deger2 =1;
 //deger2=3; 
 //deger2 const ile tanımlandığı için degişiklik yapılamaz.
 console.log(deger2);


const arr = [1, 2, 3];
arr.push(4);//Const ile tanımlanan dizinin içersine eleman eklenebilir.
//arr = [1, 2, 3, 4];
//Const ile tanımlanan dizi yeni bir dizi değeri ile güncellenemez.
console.log(arr);


const obj = { key1: 'value1', key2: 'value2' };
obj.key3 = 'value3'; //Const ile tanımlanan bir objenin key değeri güncellenebilir.
//obj = {};
//Cost ile tanımlanan obje yeni bir obje ile iliikilendirilemez.
