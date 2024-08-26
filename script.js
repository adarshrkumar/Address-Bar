var searchString = location.search
var queryParams = new URLSearchParams(searchString)
var startupSites = queryParams.get('sites')
startupSites = startupSites ? atob(startupSites) : '[]'

// alert(startupSites)

if (
  (startupSites.startsWith('[') && startupSites.endsWith(']')) || 
  (startupSites.startsWith('{') && startupSites.endsWith('}'))
) {
  startupSites = JSON.parse(startupSites)
}
else startupSites = []


document.querySelector('.startupSites').innerHTML = 
  `<li>${startupSites.join('</li><li>')}</li>`

function search() {
  var query = document.getElementById('query').value;
  var newQ = query
  if (newQ.includes('://')) {
    newQ = query.split('://')[1]
  }
  if (newQ.includes('/')) {
    newQ = newQ.split('/')[0]
  }
  if (!newQ.includes('.')) {
    query = `https://bing.com/search?q=${query}`
  }

  if (!query.includes('://')) {
    query = `https://${query}`
  }
  window.location.href = query;
}
function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    search()
  }
}