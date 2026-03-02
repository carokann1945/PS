const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [Aline, Bline] = fs.readFileSync(filePath).toString().trim().split(/\s+/);

const A = Number(Aline);
const B = Bline; // 문자열로 두면 자리수 뽑기 편함

const b1 = Number(B[2]); // 일의 자리
const b10 = Number(B[1]); // 십의 자리
const b100 = Number(B[0]); // 백의 자리

const out = [];
out.push(String(A * b1));
out.push(String(A * b10));
out.push(String(A * b100));
out.push(String(A * Number(B)));

console.log(out.join("\n"));
