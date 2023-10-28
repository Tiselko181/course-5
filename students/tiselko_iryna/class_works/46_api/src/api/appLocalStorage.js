const timeOffset = 21600 * 1000;

function isTimeOut(localStorageData) {
    const dateNow = Date.now();
    return (dateNow - localStorageData.date) < timeOffset;
}

export default function appLocalStorage(key, data) {
    if (data) window.localStorage.setItem(key, JSON.stringify({
        data,
        date: Date.now(),
    }));

    if (!data) {
        const localStorageData = JSON.parse(window.localStorage.getItem(key));
        return isTimeOut(localStorageData) ? localStorageData.data : null;
    }
}
