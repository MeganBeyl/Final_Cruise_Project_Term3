CheckoutDisplay = () => {

    let data = JSON.parse(localStorage.getItem('bookOrder'));
    let items = document.getElementById('checkBook');
    let totalArea = document.getElementById('totalCheck');

    let checkoutTotal = 0;

    for (let i = 0; i < data.length; i++){
        let name = data[i].tripName;
        let code = data[i].tripCode;
        let date = data[i].tripDate;
        let caption = data[i].tripCaption;
        let amount = data[i].tripPrice;

        checkoutTotal += amount;

        items.innerHTML += `
            <table class="table">

                <tbody>
                    <tr>
                        <th scope="row">${name}</th>
                        <td>${date}</td>
                        <td>${code}</td>
                        <td>${caption}</td>
                        <td>${amount}</td>
                    </tr>
                    
                </tbody>
            </table>
        `

        totalArea.innerHTML = "R" + checkoutTotal + ".00";
    };
};

resetBack = () => {
    localStorage.removeItem('bookOrder');
    window.location.href = '../index.html';
};