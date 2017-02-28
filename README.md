#URL Shortener Microservice
##User stories:
*I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
*When I visit that shortened URL, it will redirect me to my original link.

##Example usage:
  https://urlshortener-edwinruizr.herokuapp.com/https://codepen.io
            
###Example output:
  {"original_url":"https://codepen.io","short_url":"https://goo.gl/IuqWJ"}

##Usage:
  https://goo.gl/IuqWJ
###Will Redirect me to:
  https://codepen.io
