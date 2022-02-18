// async & await

// 1. async
async function fetchUser() {
    // do network request in 10 secs..
    return "gildong";
}

const user = fetchUser();
console.log(user);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); // waits until the delay
    throw("error");
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

async function pickFruits() {
    try {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise;

        return `${apple} + ${banana}`;

    } catch(error) {
        console.log(error);
    }
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);