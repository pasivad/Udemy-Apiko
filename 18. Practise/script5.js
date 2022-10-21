let convert = (bytes) => {
    let mb = (bytes/1000000).toFixed(2);
    console.log(`${bytes} -> ${mb} Mb`);
}

convert.call(this, 1000);