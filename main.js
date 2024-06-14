let fetchGreeting = new Promise((res, rej) => {
    console.log("Promise is Panding");
    setTimeout(() => {
        console.log("Promise is Resolved");
        res(["Helllo World"]);
    }, 2000);
});
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((response) => (console.log(response))).catch((err) => (console.log(err)));
async function fetchWithError() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Data fetch failed!");
        }, 1000);
    });
}
fetchData().then((response) => (console.log(response))).catch((err) => (console.log(err)));
async function fetchData5() {
    // Simulate fetching data (replace with actual implementation)
    return 42;
}
async function processdata(data) {
    return `Processed data: ${data}`;
}
async function executeSequentially() {
    try {
        const fetchedData = await fetchData5();
        console.log(`Fetched data: ${fetchedData}`);
        const processedResult = await processdata(fetchedData);
        console.log(processedResult);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}
executeSequentially();
export {};
