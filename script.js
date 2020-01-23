/**
 * @author Imelda Medina
 * @version 1.0
 * @type {heeHaw}
 */
document.getElementById('btn').onclick = heeHaw;

function heeHaw() {
    let num = document.getElementById('num').value;

    document.getElementById("answer").innerHTML="";
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.getElementById("answer").innerHTML+= " Hee Haw!, ";
        } else
        if (i % 3 == 0) {
            document.getElementById("answer").innerHTML+=" Hee!, ";
        } else
        if (i % 5 == 0) {
            document.getElementById("answer").innerHTML+= " Haw!, ";
        } else {
            document.getElementById("answer").innerHTML+= ", " + i;
        }
    }
}