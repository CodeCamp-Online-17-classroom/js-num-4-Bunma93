// write code here
function transform() {
    let num = Number(prompt("กรอกตัวเลข"));
    let result = num.toFixed(2);
    return result;
}

let result = transform();
alert(result);