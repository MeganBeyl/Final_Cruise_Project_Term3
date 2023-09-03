CheckoutDisplay = () => {

    let data = JSON.parse(localStorage.getItem('bookOrder'));
    let items = document.getElementById('checkBook');
    let totalArea = document.getElementById('totalCheck');

    let checkoutTotal = 0;

    for (let i = 0; i < data.length; i++){
        let name = data[i].tripName;
        let date = data[i].tripDate;
        let caption = data[i].tripCaption;
        let amount = data[i].tripPrice;

        checkoutTotal += amount;

        items.innerHTML += `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${name}</h5>
                    <small class="text-body-secondary">${date}</small>
                </div>
                <p class="mb-1">${caption}</p>
                <small class="text-body-secondary">Fee: R${amount}</small>
            </a>
        `

        totalArea.innerHTML = "R" + checkoutTotal + ".00";
    };
};

resetBack = () => {
    localStorage.removeItem('bookOrder');
    window.location.href = '../index.html';
};