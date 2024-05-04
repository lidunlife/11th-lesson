// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let num1 =+prompt(`Write your first number`)
// let num2 =+prompt(`Write your second number`)
// let num3= num1+num2
// console.log(`The sum of `+ num1 +` and `+ num2 + ` equal to ` + num3);

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring


// let a = `12`
// alert(a +` is `+ typeof a)
// let b = +`12`
// alert(`And now `+b + ` is `+ typeof b)


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering



// let num = Math.round(Math.random()*100)
// alert(num)
// if (num%2===0) {
//     alert(`${num} is juft`)
// } else {
//     alert(`${num} is toq`)
// }



// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin



// let word = prompt(`Write your word`)
// if (word ===`Mars`) {
//     alert(word)
// } else {
//     alert(`Mars IT School`)
// }




// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring


// let arr = [`apple`,`banana`,`pear`, `strawberry`, `pulm`]
// let long_arr =[]
// for (let word of arr) {
//     if(word.length>=5){
//         long_arr.push(word);
//     }
// }
// alert(long_arr)


// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring


// let juft = []
// let toq = []
// for (let i = 1; i < 100; i++) {
//     if (i%2 === 0) {
//        juft.push(i);
//     }
    
//     else {
//         toq.push(i)
//     }
    
// }
// console.log(juft)
// console.log(toq)
