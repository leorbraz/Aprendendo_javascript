
const n1 = 3;
const n2 = 5;
const n3 = 5;

const media = ((n1 + n2 + n3) / 3);

console.log(media);

if (media <= 5){
    console.log("Reprovação.");
}
else if (media >= 5 && media <= 7){
    console.log("Recuperação.");
}
else (media > 7);
    console.log("Passou de semestre.")