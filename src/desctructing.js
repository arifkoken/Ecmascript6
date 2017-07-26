/**
 * Array Kullanımı
 */
const [a,b,c] = [1,2,3,4];
//const olarak tanımadığımız içerisinde a, b, c değerleri bulunan dizi ile 
//bu diziyi eşitlediğimiz içerisinde 1,2,3,4 değerleri bulunan dizinin aynı
//index numarasına sahip elemanların atama  işlemleri otomatik olarak gerçekleştirildi.
console.log(a + " " + b + " " + c);
//Çıktı: 1 2 3

/**
 * Object Kullanımı
 */

const kimlik = { isim : "UMUT", soyisim : "KÖKEN" };
const { isim : ad , soyisim : soyad } = kimlik;
//Değişken tanımlaması yapılırken tanımlanan değişkenlere bir oject değer ataması yapıldığında
//ojenin  içerisinde key değişken oluşturma  bölümünden direk ulaşılabilir : ile devam edilir 
//ve bir isim verilerse uygulama içersinden bu isimle erişilebilir.  
console.log(ad + " " + soyad);
//Çıktı: UMUT KÖKEN


const araba = { marka : "BMW" , model : "320i" };
const { marka : mrk } = araba;
//Object ataması yapıldığında  tüm değerleri kullanmak sorunda diğiliz.
//Yukarıdaki örnekde sadece marka değerini kullandık ve mrk isminde erişime açtık.
//console.log ile mrk değerini ekrana yazdırdık.
console.log(mrk);
// Çıktı :BMW


/**
 * Nested  object kullanıldığında değerlere aşağıdaki gibi erişebiliriz.
 */
const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: {
    key1: 'value6',
    key2: 'value7',
  },
};
const { prop6: { key1: var1 } } = props;
//Props objesini atama yaptık props objesi içersindeki props6 value sunun altındaki key1 valuesunu
//var1 olarak isimlendirdik.
console.log(var1);
