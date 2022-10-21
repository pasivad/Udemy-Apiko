const el1 = "Global Scope";

const globalScope = () => {
    console.log(el1);
}

globalScope();


const functionScope = () => {
    const el2 = "Function Scope";
    console.log(el2);
}

functionScope();
console.log(el2);


const blockScope = () => {
    {
        const el3 = "Block Scope";
        console.log(el3);
    }
    console.log(el3);
}

blockScope();