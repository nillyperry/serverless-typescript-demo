function seededRandom(seed: number): () => number {
    let m = 0x80000000; // 2**31
    let a = 1103515245;
    let c = 12345;
    let state = seed;

    return function () {
        state = (a * state + c) % m;
        return state / m;
    };
}