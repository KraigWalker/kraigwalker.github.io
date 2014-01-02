---
# layout | Right now it's either a (blog) post or it's a full page (like the index)
layout: post
# main post title
title: "Resolutions"
# description | appears in open graph description and SERP pages
description: "post description"
# tweet | will appear prefilled in twitter share button
tweet: "Resolutions - Some things which will be in my 2014"
# twitpic | if you've made a tweet with a twitter picture (upload from the UI)
# 		  | make sure to paste the picture's url here to make shared tweets better
#         | leave empty if there's no value
twitpic:
# hashtag | a popular viral hashtag or list of hashtags
hashtag: "gamedev"
# googleplus | appears in Google+ interactive post, use *text* for bold and _text_ for underline
googleplus: "*Bold Text as Title* - description of post"
# category | could be a tutorial, article, audio, infographic. Just whatever the format the content is.
category: articles
# tags | these tags are important for schema.org and SERP as well as some RSS feed readers
tags: [seo, pagespeed, ux, insights, optimisation, mobile, blog, web]
# images should be the ratio of 1200px by 600px to satisfy Facebook
# thumbnail should be 300px*300px
image:
  feature: speedometer.jpg
  thumbnail: speedometer_150.jpg
comments: true
# primary | a key word or subject area, as if you had to sort it into a subject folder
#         | leave completely blank if you don't want this to be here and just the post title
primary:
# The last time you modified the post content use "quotes" format: "yyyy-mm-dd"
modified: "2014-01-02"
# set to true to pubish, simple!
published: true
---

Google recently snuck in a new beta feature to Pagespeed: **User Experience.**

While the new score sheet doesn't actually have an impact on how pagespeed scores are calculate - nor do pagespeed scores really have an impact on a website's overall search rank **yet** - the new additions do however highlight where Google are heading in terms of mobile search. Typical Google crawls don't carry out the same in-depth analysis as Pagespeed, but the new user experience checks could be used to eliminate incompatible or badly formatted sites from mobile search results.

![Google Pagespeed User Experience Beta]({{ site.url }}/images/pagespeed_insights-1.jpg)

The tests are pretty base, and unless you have a solid, justifiable reason for making your mobile experience shitty, you should be striving to maintain perfection over these metrics. I was pretty surprised to find more than half of my visitors did so on a mobile or tablet device, as I do most of my considered browsing on my big beautiful Retina Macbook...

Keeping tabs on your site's loading performance does have an impact on user experience. The average loading time for a site on mobile is **ten seconds**, when we know that half of us won't bother with that thing we tapped on Facebook after just **three seconds** which is a real shame. And the cruel thing is that most sites **can** optimize in some way. You might not believe it, but **this page used to take 12 seconds** on average to complete it's entire loading process. It wasn't even a pretty loading process as well... Now, the typical load time of someone who's never swung by before is just under **5 seconds**, with the majority of content usually displaying after two. I force the social buttons and plugins wait until the end, so while five seconds may still be over our little three second rule, the more human "percieved" loading time is signifigantly less.

Better still, if this isn't the first time you've browsed my loopy musings, you've already downloaded 90% of the content required already. Page loads are virtually instantanious in this case, thanks to clever caching and the use of the rather terrifying appcache system that enables offline navigation when the train goes through the tunnel.

**[Give Pagespeed a try](https://developers.google.com/speed/pagespeed/insights/?url=kraigwalker.com)**, and see how well your site does. I looked at my site's performance really pedantically, which is why it sits at a score of 98 on mobile and 96 on desktop typically. A score of 80 or more however is a good site.