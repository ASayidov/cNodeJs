//1
// let a = 31;
// let b = 18;
// let c = 79;
//console.log(a, b, c);
//2
//console.log(`50\n10`);
//3

//let userName = "Foydalanuvchi";
//console.log(`Assalomu alaykum. ${userName}`);

//6
// let sabziVazni = 2;
// let nokVazni = 5;
// let bodringVazni = 7;
// let nokNarhi = 9000;
// let sabziNarhi = 2000;
// let bodringNarhi = 3000;

// let umumiyNarh =
//   nokNarhi * nokVazni + sabziNarhi * sabziVazni + bodringNarhi * bodringVazni;
//console.log(umumiyNarh);
//7
// let aUrta = 8;
// let bUrta = 2;
// let urtaQiymat = aUrta + bUrta / 2;
//console.log(urtaQiymat);
//8
// let a1 = 5;
// let b1 = 2;
// let kup = a1 * b1;
// let urtaGeoQiymat = Math.sqrt(kup);
// console.log(urtaGeoQiymat);

//9 , 10

// let kvadratTomoni = 25;
// let perimetri = kvadratTomoni * 4;
// let yuzasi = Math.pow(kvadratTomoni, 2);
//console.log(yuzasi);

//11
// let tugriA = 8;
// let tugriB = 2;
// let S = tugriA + tugriB;
// let P = 2 * S;

//12
// let D = 20;
// let L = Math.PI * D;
//13
// let kubA = 7;
// let V = Math.pow(a, 3);
// let maydonS = 6 * Math.pow(a, 2);

//14
// let parA = 5;
// let parB = 3;
// let parC = 4;
// let parV = parA * parB * parC;
// let parS = 2 * (parA * parB + parB * parC + parA * parC);

//15
// let aylanaR = 75;
// let aylanaL = 2 * Math.PI * aylanaR;

//16 va 17
//7 va 8 da berilgan

//18

// let sonA = 85;
// let sonB = 20;
// let sum = sonA + sonB;
// let minus = sonA - sonB;
// let qoldiq = sonA % sonB;

//19
// let uchA = 8;
// let uchB = 2;
// let uchC = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// let uchP = uchA + uchB + uchC;

//20
// let S = 25;
// let D = (S * 4) / Math.PI;
// let L = Math.PI * D;

//21
// let x = 12;
// let y = 18;
// let masofa = Math.abs(x - y);
//---------------------------------------------------------------------------------------
//22
// let x1 = 12;
// x2 = 8;
// y1 = 5;
// y2 = 9;

// let masofa = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//---------------------------------------------------------------------
//24 A, B, C berilgan. A bilan B, B bilan C, C bilan A ning qiymatlarini almashtirib, yangi qiymatdagi o’zgaruvchilarni chop eting
// let a = 1;
// b = 2;
// c = 3;
// let d = a;
// let e = b;
// let j = c;
// a = b;
// b = d;
// console.log(a, b);
// b = c;
// c = e;
// console.log(b, c);
// c = d;
// a = j;
// console.log(c, a);
//-----------------------------------------------------------------------------------------------------
//25
// let x = 15;
// let y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
//-------------------------------------------------------------------------------------------------------
//26
// let x = 15;
// let y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
//-------------------------------------------------------------------------------------------------
//27
// let Tf = 15;
// let Tc = ((Tf - 32) * 5) / 9;

//--------------------------------------------------------------------------------------------------
//28.	 X kg konfet A so’m bo’lsa, 1 kg va Y kg konfet qancha turadi?

// let x = 15,
//   a = 80000;
// let kgNarxi = a / x;
// let yKgNarxi = kgNarxi * yKgNarxi;

//===================================================================================

//================================Shart operatori============================================

//1.	Eldor ning yoshi X, Aziza ning yoshi – Y. Ularning o’rtacha yoshini aniqlang va har bir bolaning o’rtacha yoshdan farqini toping

// let yoshEldor =18;
// let yoshAziza = 17;

// let urtaYosh = (18-17)/2
// let urtaEldorYoshFarqi = urtaYosh-yoshEldor;
// let urtaAzizaYoshFarqi = urtaYosh-yoshAziza;

//----------------------------------------------------------------------------------------
//2.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”
//  let a = -5;
// if(a>0) console.log(`${a} soni musbat`);
// else if(a<0) console.log(`${a} soni musbat emas`);

//---------------------------------------------------------------------------------------------
//3.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni juft”
// let a = 5;
// if (a % 2 === 0) console.log(`${a} soni juft`);
// else if (a % 2 !== 0) console.log(`${a} soni juft son emas`);

//---------------------------------------------------------------------------------------------
//4.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni 5 ga karrali”

// let a = 25;
// if (a % 5 === 0) {
//   console.log("A soni 5 ga karrali");
// }
//----------------------------------------------------------------------------------------------------
//5.	A va B sonlar berilgan. Quyidagi gapni tekshiring: “A > 2 va B<=3”

// let a = 8;
// let b = 2;

// if (a > 2 && b <= 3) {
//   console.log(true);
// } else console.log(false);
//-----------------------------------------------------------------------------------------------------
//6.	A, B va C sonlar berilgan. Quyidagi ifoda to’g’rilini isbotlang. A < B < C

// let a = 5;
// let b = 1;
// let c = 6;

// if (a > b) {
//   if (a > c) {
//     console.log("a kattasi");
//   } else console.log("c kattasi");
// } else if (a < b) {
//   if (b > c) {
//     console.log("b kattasi");
//   } else console.log("c kattasi");
// }
//-------------------------------------------------------------------------------------------
//7.	A va B sonlar berilgan. Quyidagi ifodani tekshiring: “A va B lar biri toq”

// let a = 5;
// let b = 6;

// if (a % 2 == 1 || b % 2 == 1) {
//   console.log("A va B lar biri toq");
// }
//----------------------------------------------------------------------------------------------
//8.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda o’zgarishsiz qolsin. Natijani chop eting

// let a = -5;
// if (a > 0) {
//   console.log(++a);
// } else console.log(a);

//--------------------------------------------------------------------------------------------------

//9.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda ikkiga kamaytirilsin. Natijani chop eting
// let a = -4;
// if (a > 0) {
//   console.log(++a);
// } else console.log(a - 2);

//-------------------------------------------------------------------------------------------------
//10.	A soni berilgan. Agarda musbat bo’lsa qiymati ikki barobar oshirilsin, aks holda 2 ga kamaytirilsin, agarda 0 ga teng bo’lsa, qiymatini 10 bilan almashtirilsin. Natijani chop eting

// let a = 6;
// if (a > 0) {
//   console.log(a * 2);
// } else if (a === 0) {
//   console.log((a = 10));
// } else console.log(a - 2);

//--------------------------------------------------------------------------------------------------
//11.	A va B sonlar berilgan. Ularning orasidan kattasini hisoblang

// let a = 5;
// let b = 6;
// if (a > b) {
//   console.log("a katta b dan");
// } else console.log("b katta a dan");
//------------------------------------------------------------------------------------------------
//12.	A, B va C sonlar berilgan. Ularning orasidan eng kichkinasi topilsin

// let a = 2;
// let b = 3;
// let c = 1;

// if (a < b) {
//   if (a < c) {
//     console.log("a eng kichigi");
//   } else console.log("c eng kichigi");
// } else if (b < a) {
//   if (b < c) {
//     console.log("b eng kichigi");
//   } else console.log("c eng kichigi");
// }

//------------------------------------------------------------------------------------------------
//13
// let x = 5;
// if (x > 0) {
//   f = 2 * Math.sin(x);
// } else if (x <= 0) 6 - x;

//----------------------------------------------------------------------------------------------

//14
// let x = 5;
// if (x < -2 || x > 2) {
//   f = 2 * x;
// } else f = -3 * x;

//----------------------------------------------------------------------------------------------
//15
// let x = 5;
// if (x <= 0) {
//   f = -x;
// } else if (x > 0 && x < 2) f = Math.pow(x, 2);
// else if (x >= 2) f = 4;

//---------------------------------------------------------------------------------------------
//16.	N soni berilgan. N ga to’g’ri keluvchi hafta kunini chop eting
// let n = 5;
// if (n === 1) {
//   console.log("Dushanba");
// } else if (n === 2) console.log("Seshanba");
// else if (n === 3) console.log("Chorhsnba");
// else if (n === 4) console.log("Payshanba");
// else if (n === 5) console.log("Shanba");
// else if (n === 6) console.log("Yakhsanba");
// else console.log("Bunday raqamga to'gri keluvchi xafta kuni yo'q");
//----------------------------------------------------------------------------------------------
//17.	M soni berilgan. M ga to’g’ri keluvchi oy nomini chop eting

// let m = 5;
// if (m === 1) {
//   console.log("Yanvar");
// } else if (m === 2) console.log("Fevral");
// else if (m === 3) console.log("Mart");
// else if (m === 4) console.log("Aprel");
// else if (m === 5) console.log("May");
// else if (m === 6) console.log("Iyun");
// else if (m === 6) console.log("Iyul");
// else if (m === 6) console.log("Avgust");
// else if (m === 6) console.log("Sentyabr");
// else if (m === 6) console.log("Oktyabr");
// else if (m === 6) console.log("Noyabr");
// else if (m === 6) console.log("Dekabr");
// else console.log("Bunday raqamga to'gri keluvchi oy yo'q");

//------------------------------------------------------------------------------
//18.	Y soni berilgan. Berilgan Y qiymatdagi yilning kabisaligini tekshiring
// let y = 1204;
// if (y % 100 === 0 && y % 400 !== 0) {
//   console.log(`Bu ${y} yil kabisa yili emas`);
// } else if (y % 4 === 0) console.log(`Bu ${y} yil kabisa yili`);
// else console.log(`Bu ${y} yil kabisa yili emas`);
//-------------------------------------------------------------------------------------------------------
//19.	Bokschining vazni berilgan. Vazn qiymatiga qarab. Yengil vazn (60gacha), Birinchi o’rta vazn (64gacha), O’rta vazn (69gacha). Qaysi kategoriyaga to’g’ri kelishini aniqlang

// let bokVazni = 62;

// if (bokVazni <= 60) {
//   console.log(`${bokVazni} kg og'irlik yengil vazn hisoblanadi`);
// } else if (bokVazni >= 61 && bokVazni <= 64)
//   console.log(`${bokVazni} kg og'irlik birinchi o'rta vazn hisoblanadi`);
// else if (bokVazni >= 65 && bokVazni <= 69)
//   console.log(`${bokVazni} kg og'irlik o'rta vazn hisoblanadi`);
// else console.log(`${bokVazni} kg og'irlik nenormal vazn hisoblanadi`);

//---------------------------------------------------------------------------------------------------
//20
// let x = 15;
// if (x <= 0) f = -x;
// else if (x > 0 && x < 2) f = Math.pow(x, 2);
// else if (x >= 2) f = 4;
//-----------------------------------------------------------------------------------------------------
