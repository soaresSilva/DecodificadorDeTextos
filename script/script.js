function Mudarestado(parametro) {
    var display = document.getElementById(parametro).style.display;
    if(display)
        document.getElementById(parametro).style.display = 'hidden';
    else
        document.getElementById(parametro).style.display = 'none';
}

Mudarestado(imgLateral);
