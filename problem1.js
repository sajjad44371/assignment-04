function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    const serviceCharge = 30;
    const fine = fare + (fare * 20 / 100) + serviceCharge;
    return fine;
}
const result = totalFine(-35);
console.log(result);