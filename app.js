// For Loop

// 1-Masala
{
    let n = 4, k = 7
    for (let i = 0; i < n; i++) {
        console.log(k);
    }
}


// 2-Masala
{
    let a = 6, b = 12
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}


// 3-Masala
{
    let a = 3, b = 8, num = 0;
    for (let i = b - 1; i > a; i--) {
        console.log(i);
        num++;
    }
    console.log(`Chiqirilgan sonlar soni: ${num}`);
}


// 4-Masala
{
    let kgNarxi = 12.5;
    for (let i = 1; i <= 10; i++) {
        let narx = kgNarxi * i;
        console.log(`${i} kg konfet narxi: ${narx}`);
    }
}


// 5-Masala
{
    let kgNarxi = 12.5;
    for (let i = 1; i <= 10; i++) {
        let miqdor = i / 10;
        let narx = kgNarxi * miqdor;
        console.log(`${miqdor} kg konfet narxi: ${narx}`);
    }
}


// 6-Masala
{
    let kgNarxi = 12.5, miqdorlar = [1.2, 1.4, 2];
    for (let miqdor of miqdorlar) {
        let narx = kgNarxi * miqdor;
        console.log(`${miqdor} kg konfet narxi: ${narx}`);
    }
}


// 7-Masala
{
    let a = 3, b = 7, yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i;
    }
    console.log(`Yig'indisi: ${yigindi}`);
}


// 8-Masala
{
    let a = 2, b = 5, kopaytma = 1;
    for (let i = a; i <= b; i++) {
        kopaytma *= i;
    }
    console.log(`sonlar ko'paytmasi: ${kopaytma}`);
}


// 9-Masala
{
    let a = 2, b = 6, yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i * i;
    }
    console.log(`A va B yig'indisi: ${yigindi}`);
}


// 10-Masala
{
    let n = 7, s = 0
    for (let i = 1; i <= n; i++)
        s += 1 / i; {
        console.log(s);
    }
}