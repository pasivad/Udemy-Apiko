const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
};

const testArgs = ['sushi', 'hiking']

function logPersonNameAndInterests (interests) {
    console.log(`${this.getFullName()} loves: ${interests.join(', ')}`);
}

logPersonNameAndInterests.call(Person, testArgs);

