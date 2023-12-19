var name = prompt('ISM')
var b = prompt('YOSH')
var elTitle = document.querySelector('.title')

if(b > 18){
    elTitle.textContent = name +  ' Oq yol!'
}else if(b < 18){
    elTitle.textContent = name + ' Hali yoshsan'
}else if(b == 18){
    elTitle.textContent = name + ' Oq yol! Ehtiyot bol!'
}
