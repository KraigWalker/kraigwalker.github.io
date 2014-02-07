require 'active_support/all'

class Post < Thor
  include Thor::Actions

  desc "new", "Creates a new post"
  argument :title
  def new
    date = Time.now.strftime("%Y-%m-%d")
    create_file "_posts/#{(date + '-' + title).parameterize}.md", <<-eos
---
# layout | Right now it's either a (blog) post or it's a full page (like the index)
layout: post
# main post title
title: "#{title}"
# description | appears in open graph description and SERP pages
description: "post description"
# tweet | will appear prefilled in twitter share button
tweet: "Resolutions - Some things which will be in my 2014"
# twitpic | if you've made a tweet with a twitter picture (upload from the UI)
# 		  | make sure to paste the picture's url here to make shared tweets better
#         | leave empty if there's no value
twitpic: "pic.twitter.com/S3f479RKYG"
# hashtag | a popular viral hashtag or list of hashtags
hashtag: ""
# googleplus | appears in Google+ interactive post, use *text* for bold and _text_ for underline
googleplus: "*Bold Text as Title* - description of post"
# category | could be a tutorial, article, audio, infographic. Just whatever the format the content is.
category: articles
# tags | these tags are important for schema.org and SERP as well as some RSS feed readers
tags: [seo, pagespeed, ux, insights, optimisation, mobile, blog, web]
# images should be the ratio of 1200px by 600px to satisfy Facebook
# thumbnail should be 300px*300px
image:
  feature: mountains-1.jpg
  thumbnail: mountains-1_150.jpg
comments: true
# primary | a key word or subject area, as if you had to sort it into a subject folder
#         | leave completely blank if you don't want this to be here and just the post title
primary:
# The last time you modified the post content use "quotes" format: "yyyy-mm-dd"
modified: "#{date}"
# set to true to pubish, simple!
published: false
---

    eos
  end

end