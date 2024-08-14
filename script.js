document.getElementById('lineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;

    fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer KFjPycB3cuxqaN3gzddozHlUYIZJFmJZYI2rU1sUKLT2jRV8K9MhSXWZi6tStY6Vy+rrCeYqG44C2+meGw8kua0xEUBEWiW60Hl9F2KMJYmHMd+fneR26AM1q0fGpbpXWZjayIRSKXu7HVkMULg+SgdB04t89/1O/w1cDnyilFU='
        },
        body: JSON.stringify({
            to: 'minato-mo',
            messages: [
                {
                    type: 'text',
                    text: message
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('メッセージが送信されました');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('メッセージの送信に失敗しました');
    });
});
