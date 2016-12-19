# Hubot Rss Poller

This is a simple polling script used to poll RSS feeds and ping rooms when an
update is found.  All it requires is a file specified to read.

## Configuration 

All you need is a `.json` file with the following configurations set up.
This is loaded from the `hubotrssconfig.json` file in the top level of the hubot
install, or you can specify in an environment variable `HUBOT_RSS_CONFIG_FILE`.


```json
{
  "feeds": [{
    "name": "Name of the RSS feed goes here",
    "request": {
      "uri": "URI to the RSS feed",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36"
      }
    },
    "room": "room to message out to when an update is found",
    "pingIntervalSeconds": "100", 
    "alertPrefix": "A prefix to the output message goes here.",
    "alertSuffix": "a suffix to an output message goes here."
  }]
}
```
