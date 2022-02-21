export const loadScript = (url, callback) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null
        callback()
      }
    }
  } else {
    script.onload = () => callback()
  }

  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}

// export const handleScriptLoad = (updateQuery, autoCompleteRef) => {
//   autoComplete = new window.google.maps.places.Autocomplete(
//     autoCompleteRef.current,
//     { types: ['(cities)'], componentRestrictions: { country: 'us' } }
//   )
// }
