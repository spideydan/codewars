// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url) {
  return url.replace("http://", "").replace("https://", "").split(".")[0];
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");
