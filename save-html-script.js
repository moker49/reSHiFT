console.log("waiting to populate html")
setTimeout(saveHtml, 5000)

function saveHtml(filename) {
    console.log("saving html")
    const myHtml = document.querySelector("html").innerHTML;
    if (!filename) filename = 'html.html'

    var blob = new Blob([myHtml], {
        type: 'text/html'
    }),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/html', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}