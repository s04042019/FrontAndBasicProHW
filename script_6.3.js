const str = prompt("admission is free for everyone?"); 
const maxlength = prompt("what is the maxlength?");
function cutString(str, maxlength) {
    if (str.length > maxlength) {
        console.log(str.slice(0, maxlength - 1) + '…');
    } else {
        console.log(str);
    }
}
 
cutString("admission", 4);