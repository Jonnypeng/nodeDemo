let ani = (): Promise<number> => {
    return new Promise<number>((resolve,reject) => {
        setTimeout(() => {resolve(0)}, 3000);
    })
}


var a = async () => {
    let result = await ani().catch(err=>console.log(err));
    console.log(result);
}

a();
//console.log(ani.then(v=>console.log(v)));