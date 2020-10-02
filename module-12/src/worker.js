onmessage = function(event) {
  const { data } = event
  console.log(data);

  setTimeout(() => {
    postMessage('Worker sending message');
  }, 2000)
}
