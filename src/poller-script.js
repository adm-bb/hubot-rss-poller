import getFeed from './rss-feed-poller';
import loadFile from './config-parser.js';

export default async function rssPoller(robot) {
    // This will be loaded from a config file
    let config;
    try {
        config = await loadFile(process.env.HUBOT_RSS_CONFIG_FILE || 'hubotrssconfig.json');
        config = JSON.parse(config);

        config.feeds.map(x => {
                const feed = getFeed({...x, robot });
                return feed;
            })
            .forEach(x => x.startFeed());
    } catch (err) {
        robot.logger.debug(err.message);
    }
    /* const feed = getFeed({
      name: 'Team Space RSS',
      request: {
            uri: 'http://kb.extendhealth.com/spaces/createrssfeed.action?types=blogpost&spaces=ST&maxResults=15&title=%5BTeams%5D+Blog+Feed&amp;publicFeed=false&amp;os_authType=basic',
            headers: {
                'User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'
            }
        }
      room: 0, // room to ping when there is a change
      alertPrefix: 'test prefix', // What to prefix the output message with
      alertSuffix: 'test suffix', // What to append to the end of the output message
      robot,
      pingIntervalSeconds: 5,
    });

    feed.startFeed(); */
}