//============================================Sikl topshiriqlar=================================================
//1.Konsolda ismingizni 10 marta chiqaradigan skript yozing

//let ismCount = 10;
// for (let i = 0; i < ismCount; i++) {
//   console.log("Ismim: Abdullajon");
// }

//-----------------------------------------------------------------------
// 2.Jadvalda berilgan N sonigacha bo'lgan sonlarni kvadratini chiqaring
// var N = 8
// -----------------------------------
// Son                   Kvadrat
// -----------------------------------
// 1                            1
// 2                            4
// 3                            9
// 4                           16
// 5                           25
// 6                           36
// 7                           49
// 8                           64

// let N = 8;
// for (let i = 1; i <= N; i++) {
//   console.log(i, Math.pow(i, 2));
// }
//----------------------------------------------------------------------------------
// Jadvalda berilgan N sonigacha bo'lgan juft sonlarni kvadratini chiqaring
// var N = 8
// -----------------------------------
// Son                   Kvadrat
// -----------------------------------
// 2                            4
// 4                           16
// 6                           36
// 8                           64

// let N = 8;
// for (let i = 2; i <= N; i += 2) {
//   console.log(i, Math.pow(i, 2));
// }
//----------------------------------------------------------------------------------
// Havoda erkin tushayotgan jismni har T = 0.5 sekundagini hisoblang.
// g = 9.8   (v=g*T    -   tezlik formulasi)
// var N = 3
// -----------------------------------
// Vaqt                   Tezlik
// -----------------------------------
// 0.0                      0.00
// 0.5                      4.90
// 1.0                       9.80
// 1.5                      14.70
// 2.0                      19.60
// 2.5                      24.50
// 3.0                      29.40

// let T = 0.5;
// let g = 9.8;
// let N = 3;

// for (let i = 0; i <= N; i += 0.5) {
//   let v;
//   console.log(i, (v = i * g).toFixed(2));
// }

//-------------------------------------------------------------------------------------------
//Berilgan N sonigacha bo'lganlarni umumiy summasi hisoblansin. Har bir yig'indini konsolda ko'rsatilsin
// let N = 20;
// let sum = 0;
// for (let i = 1; i < N; i++) {
//   console.log((sum += i));
// }
//-------------------------------------------------------------------------------------------------
// Berilgan N sonigacha juft sonlarni bo'lganlarni  umumiy summasi hisoblansin. Har bir yig'indini konsolda ko'rsatilsin
// let N = 20i
// let sum = 0;
// for (let i = 2; i < N; i += 2) {
//   console.log((sum += i));
// }
//-------------------------------------------------------------------------------------------------
//Berilgan N sonigacha bo'lganlarni umumiy ko'paytmasi hisoblansin. Har bir ko'paytmani konsolda ko'rsatilsin
// let n = 6;
// let kupaytma = 1;
// for (let i = 1; i <= n; i++) {
//   kupaytma *= i;
//   console.log(kupaytma);
// }

//--------------------------------------------------------------------------------------------------
// Berilgan 100 gr ni Price bahosi bo'yicha 1 kg gacha bo'lgan baholar jadvalini chiqaring
// -----------------------------------
// Og'irlik                 Summa
// -----------------------------------
// 100                      1.65
// 200                      3.30
// 300                      4.95
// 400                      6.60
// 500                      8.25
// 600                      9.90
// 700                      11.55
// 800                      13.20
// 900                      14.85
// 1000                     16.50

// let priceKg = 25000;
// let priceGm = priceKg / 1000;

// for (let i = 100; i <= 1000; i += 100) {
//   console.log(i, i * priceGm);
// }
//-------------------------------------------------------------------------------------------------------------
//Pifagor (Karrali) jadval
// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

//=========================================Massiv bo'yicha topshiriqlar========================================================
//Massivni prompt yoki tasodifiy sonlar dan 10 element bilan to'ldiring

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(Math.ceil(Math.random() * 100));
// }
// console.log(arr);
//---------------------------------------------------------------------------------

//massivni  20 ta '#' simvoli bilan to'ldiring

// let arr = [];

// for (let i = 0; i < 20; i++) {
//   arr.push("#");
// }
//--------------------------------------------------------------------------------
//massiv 20 ta o'quvchining 163 va 190 orasida yotuvchi bo'ylarini saqlash uchun foydalaning.

// let massalar = [];

// while (massalar.length < 20) {
//   let massa = Math.ceil(Math.random() * 200);
//   if (massa >= 163 && massa <= 190) {
//     massalar.push(massa);
//   }
// }

// console.log(massalar);
//-----------------------------------------------------------------------------------------------------------
//Massivni a va b orasida yotuvchi n ta tasodifiy sonlar bilan to'ldiring

// let arr = [];
// let a = 80;
// b = 12;
// n = 20;
// while (arr.length < 20) {
//   let tasEl = Math.ceil(Math.random() * 100);
//   if (tasEl <= a && tasEl >= b && arr.length < 20) {
//     arr.push(tasEl);
//   }
// }
// for (let i = 0; arr.length < 20; i++) {
//   let tasEl = Math.ceil(Math.random() * 100);
//   if (tasEl <= a && tasEl >= b && arr.length < 20) {
//     arr.push(tasEl);
//   }
// }

// console.log(arr);
//---------------------------------------------------------------------------------------------------------------
//Massivni teskari tarzda chop eting

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr2.push(arr[i]);
// }
// console.log(arr2);

//------------------------------------------------------------------------------------------------------------
//massivga n ta 2 ning darajalarini joylashtiring

// let n = 25;
// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr.push(Math.pow(2, i));
// }

// console.log(arr);

//---------------------------------------------------------------------------------------------------
//massivni fibonachchi sonlari bilan to'ldiring
// let fibSerStart = [0, 1];
// let n = 20;
// for (let i = 0; fibSerStart.length < n; i++) {
//   fibSerStart.push(fibSerStart[i] + fibSerStart[i + 1]);
// }

// console.log(fibSerStart);
//----------------------------------------------------------------------------------------------------
//massivni 10 ta takrorlanmas tasodifiy sonlar bilan to'ldiring

// let arr = [];

// for (let i = 0; arr.length < 10; i++) {
//   let el = Math.ceil(Math.random() * 100);
//   if (arr[i] !== el) {
//     arr.push(el);
//   }
// }

// console.log(arr);

//--------------------------------------------------------------------------------------------------------
// Massiv tasodifiy sonlar bilan to'ldirilgan va chop etish lozim:
// a) barcha manfiy sonlarni
// b) 100 dan kichik bo'lgan sonlarni

// let arr = [];
// for (let i = 0; i < 25; i++) {
//   arr.push(Math.ceil(Math.random() * 1000));
//   arr.push(Math.ceil(Math.random() * -100));
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//   }
//   if (arr[i] < 100) {
//     console.log(arr[i]);
//   }
// }

//-----------------------------------------------------------------------------------------------------
// Massiv tasodifiy sonlar bilan to'ldirilgan va chop etish lozim:
// a) barcha juft sonlarni
// b) nol bilan tugaydigan sonlarni

// let arr = [];
// for (let i = 0; i < 25; i++) {
//   arr.push(Math.ceil(Math.random() * 1000));
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
//   if (arr[i] % 10 == 0) {
//     console.log(arr[i]);
//   }
// }

//------------------------------------------------------------------------------------------------------
// Massiv tasodifiy sonlar bilan to'ldirilgan va chop etish lozim:
// a) 2chi, 4chi va hokazo elementlarni
// b) 3chi, 6chi va hokazo elementlarni
// let arr = [];
// for (let i = 2; i < 25; i++) {
//   arr.push(Math.ceil(Math.random() * 1000));
// }
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
// for (let i = 0; i < arr.length; i += 3) {
//   console.log(arr[i]);
// }

//-----------------------------------------------------------------------------------------------------
// Massiv tasodifiy sonlar bilan to'ldirilgan
// a) massivning barcha elementlar yigindisi
// b) massivning barcha elementlari ko'paytmasi
// c) barcha elementlar summasi kvadrati
// d) massivning birinchi 6 ta elementi summasi
// e) elementlar o'rta arifmetigi

//---------------------------------------------------------------------------------------------------------
// massivning eng katta elementini toping
// let arr = [2, 8, 9, 5, 1, 7, 15, 26, 78, 94];
// let maxEl = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxEl) {
//     maxEl = arr[i];
//   }
// }

// console.log(maxEl);
//------------------------------------------------------------------------------------------------------------
// massivning eng katta va eng kichik elementlari joylarini almashtiring

// let arr = [2, 8, 9, 5, 1, 7, 15, 26, 78, 94];
// let maxEl = arr[0];
// let minEl = arr[0];
// let idMax = 0;
// let idMin = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxEl) {
//     maxEl = arr[i];
//     idMax = i;
//   }
//   if (minEl > arr[i]) {
//     minEl = arr[i];
//     idMin = i;
//   }
// }

// arr[idMax] = minEl;
// arr[idMin] = maxEl;

// console.log(arr);
//---------------------------------------------------------------------------------------------------------------
// massivning birinchi tub sonli element topilsin

// let arr = [27, 6, 5, 8, 9, 7, 11, 13];

// for (let i = 0; i < arr.length; i++) {
//   let check = true;
//   for (let j = 2; j < arr[i]; j++) {
//     if (arr[i] % j == 0) {
//       check = false;
//       break;
//     }
//   }
//   if (check) {
//     console.log(arr[i]);
//     break;
//   }
// }

//---------------------------------------------------------------------------------------------------------------

//===================================================== String bo'yicha topshiriqlar====================================================================

// 1. so'z berilgan uning k-simvolni chiqaring

// let str = "assalkmu alaykum";
// let k = 5;
// if (str[k] !== " ") {
//   console.log(str[k]);
// } else console.log("simvol topilmadi");

//------------------------------------------------------------------------------------------------------------

// 2. so'z berilgan uning ohirgi simvoli chiqarilsin

// let str = "assalamu alaykum";

// console.log(str[str.length - 1]);
//--------------------------------------------------------------------------------------------------------------

// 3. so'z berilgan uning 1- 2- va 3- simvollar bir xillikka Tekshiring
// let str = "assalamu alaykum";
// if (str[1] === str[2] && str[2] === str[3]) {
//   console.log(true);
// } else console.log("simvollar bir xil emas");

//------------------------------------------------------------------------------------------------------------

// 4. so'z berilgan bu so'z boshlangan simvol shu simvol bilan tugaydimi?

// let suz = "dasturlash";

// for (let i = 0; i < suz.length; i++) {
//   if (condition) {

//   }

// }

//---------------------------------------------------------------------------------------------------------

// 5. so'z berilgan uning 2- 4- 6- simvollarinidan tashkil topgan yangi so'zni chiqaring
// let suz = "dasturlash";
// let yangiSuz = `${suz[2]}${suz[4]}${suz[6]}`;
// console.log(yangiSuz);

//--------------------------------------------------------------------------------------------------------

// 6. so'z berilgan uning k-chidan boshlangan m ta harfni chiqaring.

// let suz = "uzbekistan";
// let k = 2;
// m = 7;
// console.log(suz.slice(k, m));

//----------------------------------------------------------------------------------------------------------

// 7. berilgan matndagi "hammaga" so'zni "barchaga" ga almashtiring.

// let suz = "hammaga";
// let suz2 = "barcha";

// let natija = suz.replace("hamma", "barcha");
// console.log(natija);

//-----------------------------------------------------------------------------------------------------------

// 8. berilgan matndagi "pashsha"dan "fil" qiling

// let suz = "pashsha";
// let suz2 = "fil";

// let natija = suz.replace(suz, suz2);
// console.log(natija);

//-----------------------------------------------------------------------------------------------------------

// 9. so'z berilgan undagi boshidan k ta harfni ohiriga o'tkazing

// let suz = "dasturlash";
// let k = 3;

// let suz1 = suz.slice(0, 3);
// let suz2 = suz.slice(3, suz.length);
// let natija = suz2 + suz1;

// console.log(natija);

//------------------------------------------------------------------------------------------------------------

// 10. s1 so'z berilgan s2 so'zni s1ning juft o'rindagi harflardan yasang

// let s1 = "dasturlash";
// let s2 = "";
// for (let i = 1; i < s1.length; i += 2) {
//   s2 += s1[i];
// }

// console.log(s2);

//--------------------------------------------------------------------------------------------------------------

// 11. ikkita so'z berilgan. birinchi so'zdagi simvollar sonicha ikkinchi so'zdagi simvolni almashtiring.

// let suz1 = " dars";
// let suz2 = "developer";

// let natija = suz1 + suz2.slice(0, suz1.length - 1);

// console.log(natija);

//---------------------------------------------------------------------------------------------------------------

// 12. matn berilgan. matndagi u harfi mavjud bo'lgan so'zlarni chop eting

//let matn =
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// let matn1 = matn.split(" ");
// let matn2 = [];

// for (let i = 0; i < matn1.length; i++) {
//   if (matn1[i].includes("u")) {
//     matn2.push(matn1[i]);
//   }
// }
// let natija = matn2.join(" ");
// console.log(matn);

//------------------------------------------------------------------------------------------------------------

// 13. matndagi 'sh' harfni ш ga almashtiring

// let matn = "Shamol yomgir shisha shurp";
// let natija = matn.split("sh").join("ш").replace("Sh", "Ш");

// console.log(natija);

//------------------------------------------------------------------------------------------------------------

// 14. matn berilgan. matndagi so'zlarda bir xil bo'lgan qo'shni harflar mavjud so'zlarni chop eting.
// let matn =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
// let arr = matn.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   let arr2 = arr[i];

//   for (let j = 0; j < arr2.length; j++) {
//     if (arr2[j] === arr2[j + 1]) {
//       console.log(arr2);
//     }
//   }
// }


// -------------------------------------------------------------------------------------
// 15. matn berilgan. matnda eng ko'p uchragan harfni toping

// let matn =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// let harflar = matn.split("");

// let harf = "";
// let maxCount = 0;
// let reCount = 0;

// for (let i = 0; i < harflar.length; i++) {
//   reCount = 0;

//   for (let j = 0; j < harflar.length; j++) {
//     if (harflar[i] === harflar[j] && harflar[i] === harflar[i + 1]) {
//       reCount++;
//     }
//   }
//   if (reCount > maxCount) {
//     harf = harflar[i];
//     maxCount = reCount;
//   }
// }
// console.log(harf);
//----------------------------------------------------------------------------------------
// 16. matn berilgan. matnda eng ko'p uchragan harfni o'chiring

// let matn =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// let harflar = matn.split("");

// let harf = "";
// let maxCount = 0;
// let reCount = 0;

// for (let i = 0; i < harflar.length; i++) {
//   reCount = 0;

//   for (let j = 0; j < harflar.length; j++) {
//     if (harflar[i] === harflar[j] && harflar[i] === harflar[i + 1]) {
//       reCount++;
//     }
//   }
//   if (reCount > maxCount) {
//     harf = harflar[i];
//     maxCount = reCount;
//   }
// }

// let natija = harflar.join("").split(harf).join("");
// console.log(natija);

//----------------------------------------------------------------------------------------

// 17. matndagi eng uzun so'zni a harfiga almashtiring
// let matn =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// let matn2 = matn.split(" ");

// let matnLen = 0;
// let longWord = "";
// for (let i = 0; i < matn2.length; i++) {
//   for (let j = 0; j < matn2.length; j++) {
//     if (matnLen < matn2[j].length) {
//       matnLen = matn2[j].length;
//       longWord = matn2[j];
//     }
//   }
// }
// let natija = matn.split(longWord).join("a");
// console.log(natija);
//------------------------------------------------------------------------------------
// 18. matndagi eng qisqa uzunlikdagi so'zni uzunligini chiqaring

// let matn =
//   "Lorem Ipsum simply dummy text the printing and typesetting industry.";

// let matn2 = matn.split(" ");
// let matnLen = 0;
// let shortLongWord = "";

// for (let i = 0; i < matn2.length; i++) {
//   for (let j = 0; j < matn2.length; j++) {
//     if (matn2[i].length < matn2[j].length) {
//       matnLen = matn2[i].length;
//       shortLongWord = matn2[j];
//     }
//   }
// }
// console.log(shortLongWord);

//-------------------------------------------------------------------

// let arr1 = [1, 3];
// let arr2 = [2, 4];
// var findMedianSortedArrays = function (nums1, nums2) {
//   let arr = nums1.concat(nums2);

//   let sorted = arr.sort((a, b) => a - b);
//   console.log(sorted);

//   let mer2 = sorted[Math.floor(sorted.length / 2)];
//   let mer1 = sorted[Math.floor(sorted.length / 2 - 1)];
//   console.log(mer1 + mer2/2);;

//   if (sorted.length % 2 !== 0) {
//     return sorted[Math.floor(sorted.length / 2)];
//   } else {
//     return mer3 / 2;
//   }
// };

// let natija = findMedianSortedArrays(arr1, arr2);

// console.log(natija);

