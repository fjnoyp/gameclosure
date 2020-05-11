

export default function formatMoney(places, money) {
    money = parseFloat(money); 
    return money.toFixed(places).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}