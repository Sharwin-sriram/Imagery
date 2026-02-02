# The API Endpoints Documentation

> The default gateway is /api/...

### To get photos without query

- GET api/

### To get per search query

- GET api/<query>
  > Example usage: GET api/cats

### With pages as a optional parameter

- GET api/<query>?page=<page_number>
  > Example usage: GET api/cats?page=3
