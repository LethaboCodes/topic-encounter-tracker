function increment(topicId) {
    const countElement = document.getElementById(topicId + 'Count');
    let currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount + 1;
}

function decrement(topicId) {
    const countElement = document.getElementById(topicId + 'Count');
    let currentCount = parseInt(countElement.innerText);
    if (currentCount > 0) {
        countElement.innerText = currentCount - 1;
    }
}

function resetAll() {
    const topics = ['sse', 'pm', 'sem', 'up', 'st', 'agile', 'ds', 'solid', 'dp'];
    topics.forEach(topicId => {
        document.getElementById(topicId + 'Count').innerText = '0';
    });
}
