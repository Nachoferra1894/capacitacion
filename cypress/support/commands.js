
// Because cypress takes baseUrl as the custom url for requests
Cypress.Commands.overwrite('request', (originalFn, url, options) => { 
    const newUrl = Cypress.env('apiUrl') + url
    return originalFn(newUrl, options)
})