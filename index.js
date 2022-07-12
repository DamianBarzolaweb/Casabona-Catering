const express = require ('express');
const app = express ();
const port = 3000;

const popover = new bootstrap.Popover('.example-popover', {
    container: 'body'
  })
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

app.get('/', (request, response) => {
    response.send(<h1>hello world</h1>)
})

app.get