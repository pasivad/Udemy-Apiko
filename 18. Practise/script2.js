const car = {
    name : "Tesla",
    model : "X",
    showCarInfo
};

function showCarInfo() {
    console.log(`name = ${this.name}, model = ${this.model}`);
}

output = showCarInfo.bind(car);
output();
