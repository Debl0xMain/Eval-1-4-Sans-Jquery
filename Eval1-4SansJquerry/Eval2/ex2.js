const ex2 = () => {
    var tablede = prompt('on veut la table des : ');
    var start = prompt('De');
    var end = prompt("jusqu'a");
    var numero = 0;

    const creatediv = () => {
        var div = document.createElement("div");
        div.className += 'resultat-'+numero;
        var newContent = document.createTextNode(tablede + "*" + start + "=" + resultat );
        div.appendChild(newContent);
        var currentDiv = document.getElementById('div1');
        document.body.insertBefore(div, currentDiv);
        return
    }

    const multi = (tablede) => {
    do
    {
        numero++;
        resultat = start * tablede ;
        creatediv();
        start++
    }while(start<=end)
    }

    multi(start)
}
ex2()