const ex2 = () => {
    var table = ["Audrey","Aurélien","Flavien","Jérémy"];
    var insert = prompt(table);
    var select = table.indexOf(insert);
    const sup = table.filter(tablesup = (f) => {return f !== insert});

    const creatediv = () => {
        var div = document.createElement("div");
        div.className += 'tableau';
        var newContent = document.createTextNode(table);
        div.appendChild(newContent);
        var currentDiv = document.getElementById('div');
        document.body.insertBefore(div, currentDiv);
        return
    }

    const creatediv2 = () => {
        var div = document.createElement("table");
        div.className += 'tableau';
        var newContent = document.createTextNode(sup);
        div.appendChild(newContent);
        var currentDiv = document.getElementById('div');
        document.body.insertBefore(div, currentDiv);
        return
    }
    const repeat = () => {
        if (insert != table[select]) {
            alert('Le nom rentre n a pas ete trouvé');
            creatediv();
        }
        else {
            alert(insert + " a été trouvé");
            sup.push('*');
            creatediv();
            creatediv2();
        }
    }
    repeat();
}
ex2();