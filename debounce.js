function debounce(fn, delay) {
    let timer;

    clearTimeout(timer);
    return function (...args) {
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function search(text) {
    console.log("String: ", text);
}

const debouncedSearch = debounce(search, 2000);

debouncedSearch("react", 1000);