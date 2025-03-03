const specialRules = [
  {
    "hostname": [
      "twitter.com",
      "tweetdeck.twitter.com",
      "mobile.twitter.com"
    ],
    "selectors": [
      "[data-testid=\"tweetText\"]",
      ".tweet-text",
      ".js-quoted-tweet-text"
    ],
    "detectLanguage":true

  },
  {
    "name":"ycombinator",
    "hostname": "news.ycombinator.com",
    "selectors": [
      ".titleline > a",
      ".comment",
      ".toptext"
    ],
  },
  {
    "hostname": "www.reddit.com",
    "selectors": [
      "h1",
      "[data-click-id=body] h3",
      "[data-click-id=background] h3"
    ],
    "containerSelectors": [
      "[data-testid=comment]",
      "[data-adclicklocation=media]"
    ],
    "detectLanguage":true
  },
  {
    "name":"oldRedditCompact",
    "regex":"old\.reddit\.com.*\/\.compact$",
    "selectors":[".title > a"],
    "containerSelectors":[".usertext-body"],
  },
  {
    "name":"oldReddit",
    "hostname": "old.reddit.com",
    "selectors": [
      "p.title > a"
    ],
    "containerSelectors": [
      "[role=main] .md-container"
    ],
    "detectLanguage":true
  },
  {
    "regex": "finance.yahoo.com/$",
    "selectors": [
      "h3"
    ]
  },
  {
    "regex": [
      "www.bloomberg.com/[A-Za-z0-9]+$",
      "www.bloomberg.com/$"
    ],
    "selectors": [
      "article h3",
      "article .single-story-module__headline-link",
      "article [data-tracking-type=Story]",
      "article .story-list-story__info__headline"
    ]
  },
  {
    "regex": "translatewebpages.org/result/.+$",
    "selectors": [
      "div"
    ],
    "style": "none"
  },
  {
    "hostname": "www.cell.com",
    "selectors": [
      "div.section-paragraph > div.section-paragraph > div.section-paragraph",
      "section > div.section-paragraph",
      "h4",
      "h3",
      "h2"
    ]
  },
  {
    "hostname": [
      "www.msdmanuals.com",
      "localhost"
    ],
    "noTranslateSelectors": [
      ".d-none"
    ]
  },
  {
    "hostname": "www.reuters.com",
    "containerSelectors": "main"
  },
  {
    "regex": "finance.yahoo.com/news",
    "containerSelectors": "[role=article]"
  },
  {
    "hostname": "www.whatsonweibo.com",
    "containerSelectors": "#mvp-post-main"
  },
  {
    "hostname": [
      "www.wsj.com",
      "www.economist.com"
    ],
    "containerSelectors": "main"
  },
  {
    "hostname": [
      "mail.jabber.org",
      "antirez.com"
    ],
    "selectors": [
      "pre"
    ],
    "containerSelectors": "pre",
    "style": "none"
  },
  {
    "hostname": "github.com",
    "containerSelectors": ".markdown-body",
    "detectLanguage":true
  },
  {
    "hostname": "www.youtube.com",
    "selectors": [
      "#content-text"
    ],
    
    "detectLanguage":true
  },
  {
    "hostname": "www.facebook.com",
    "selectors": [
      "div[data-ad-comet-preview=message] > div > div",
      "div[role=article] > div > div > div > div > div > div > div > div "
    ],
    "detectLanguage":true
  },
  {
    "regex": "\.substack\.com\/",
    "selectors": [
      ".post-preview-title",
      ".post-preview-description",
      
    ],
    "containerSelectors": [
      ".post",
      ".comment-body"
    ]
  },
  {
    "hostname": "www.nature.com",
    "containerSelectors": "article"
  },
  {
    "name":"seekingalpha",
    "hostname": "seekingalpha.com",
    "selectors":["[data-test-id='post-list-item'] h3"],
    "containerSelectors": "div.wsb_section",
    "brToParagraph": true
  },
  {
    "hostname": "hn.algolia.com",
    "selectors": [
      ".Story_title"
    ]
  },
  {
    "hostname": "read.readwise.io",
    "selectors": [
      "div[class^=\"_titleRow_\"]",
      "div[class^=\"_description_\"]"
    ],
    "containerSelectors": [
      "#document-text-content"
    ],
    
    "detectLanguage":true
  },
  {
    "hostname": "www.inoreader.com",
    "selectors": [
      ".article_title"
    ],
    "containerSelectors": [
      ".article_content"
    ],
    
    "detectLanguage":true
  },
  {
    "hostname": "mail.google.com",
    "selectors": [
      "h2[data-thread-perm-id]",
      "span[data-thread-id]"
    ],
    "containerSelectors": [
      "div[data-message-id]"
    ],
    "blockElements": [
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "OL",
      "P",
      "LI"
    ],
    
    "detectLanguage":true
  },
  {
    "hostname": "www.producthunt.com",
    "selectors": [
      "a[data-test^='post-']",
      "h2",
      "div.layoutCompact div[class^='styles_htmlText__']"
    ]
  },
  {
    "hostname": "arxiv.org",
    "selectors": [
      "blockquote.abstract",
      "h1"
    ]
  },
  {
    "hostname": "discord.com",
    "selectors": [
      "div[id^='message-content-']"
    ],
    "detectLanguage":true
  },
  {
    "regex": "web.telegram.org/z/",
    "selectors": [
      ".text-content"
    ],
    "detectLanguage":true
  },
  {
    "hostname":"gist.github.com/",
    "containerSelectors":[
      ".markdown-body",".readme"
    ],
  
    "detectLanguage":true
  },
  {
    "hostname": "www.politico.com",
    "containerSelectors": "main"
  },
  {

    "hostname":"lobste.rs",
    "selectors":[".u-repost-of"],
    "containerSelectors":[".comment_text"]
  },
  {
    "regex":"\.slack\.com\/",
    "selectors":[".p-rich_text_section"],
    "detectLanguage":true
  },
  {
    "hostname":"1paragraph.app",
    "selectors":["[xmlns='http://www.w3.org/1999/xhtml']"]
  },{
    "hostname":"www.nytimes.com",
    "selectors":["h1"],
    "containerSelectors":"[name=articleBody]"
  },
  {
    "hostname":"reader.960960.xyz",
    "selectors":["body > *"],
    "iframeContainer": "iframe"
  },{
    "name":"stackoverflow",
    "hostname":"stackoverflow.com",
    "selectors":[".s-post-summary--content-title","h1 > a",".comment-copy"],
    "containerSelectors":"[itemprop=text]"
  }
]
