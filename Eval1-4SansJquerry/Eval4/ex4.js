const PriceReduc = (price, qte) => {
    const priceqte = price * qte;
    const reduc1 = ((price * qte) * 0.05);
    const reduc2 = ((price * qte * 0.10));

    if (priceqte >= 100 && priceqte <= 200) {
        var prix = priceqte - reduc1;
    } else if (priceqte >= 200) {
        var prix = priceqte - reduc2;
    } else {
        prix = priceqte;
    }

    return {"prix": prix, "price": price, "qte": qte};
}

const pu = () => {
    const {prix, price, qte} = PriceReduc(prompt('Prix du produit'), prompt('Quantite'));
    const port = 6;
    const port2 = prix * 0.02;
    let prixfi = 0;
    let portfi = 0;

    if (prix < 100) {
        prixfi = prix + port;
        portfi = 6;
    } else if (prix >= 100 && prix <= 200) {
        if (port2 <= 6) {
            prixfi = prix + port;
            portfi = 6;
        } else {
            prixfi = prix + port2;
            portfi = port2;
        }
    } else if (prix > 200 && prix < 500) {
        prixfi = prix + port2;
        portfi = port2;
    } else if (prix >= 500) {
        prixfi = prix;
    }

    return {
        "prix": prixfi.toFixed(2),
        "port": port,
        "port2": port2,
        "prixu": price,
        "qte": qte,
        "portfi": portfi
    }
}

const ex4 = () => {
    const {prix, prixu ,qte, portfi} = pu();
    document.write(`Prix unité de l'article : ${prixu} €`);
    document.write("Quantité de la commande : " + qte);
    document.write(`Frais de port : ${portfi} €`);
    document.write(`Prix final : ${prix} €`);
}
