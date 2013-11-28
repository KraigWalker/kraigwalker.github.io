---
layout: post
title: "An Idea: Pimp My Issue"
description: "Creating a aid for developers that supports beatiful and meaningful issue tagging schemes."
category: articles
tags: [github, issues, pimpmyissue]
image:
  feature: pimpmyride.jpg
comments: true
primary: "Github"
last_modified: 2013-09-21
---

One of the things I’ve seen more and more when working with other developers is a sprawling variation in the organizational and presentational structure of Issue tags in projects. Issue tags are one of those little procrasta-tools in [Github Issues](https://github.com/blog/831-issues-2-0-the-next-generation) which you could play with for hours, creating your own labeling system, setting out a colour system that’s just right, before any actual work has even been done.

If you’re someone who enjoys working with [Github Issues](https://github.com/blog/831-issues-2-0-the-next-generation) - *and I know I am* - you’ll appreciate how being able to tag issues according to their type, priority, complexity, cost or subject area make searching through a seemingly endless list of tasks easier and more intuitive.

It’s not possible to create a single collection of tags that work against every project, as every project has a different scope and set of priorities. The default Issue tags leave a lot to be desired, and most programmers and project managers aren’t known for their superior colour theory skills.

I’ve had an idea for a site for a while now that runs in a similar vein to [COLOURlovers](http://colourlovers.com) or [Adobe Kuler](http://kuler.adobe.com). It’s a site which allows people to easily adopt pre-packaged Issue naming schemes and colour themes that cater to their projects. People can also create and upload their own issue schemes for others to use - it would be interesting to track what schemes rise to the top.

I’ve recently read through a fantastic book called [*Execute*](http://executebook.com/) by [Drew Wilson](https://twitter.com/drewwilson) and [Josh Long](https://twitter.com/joshlong), which they were able to write in three days and had published to print just five days after that. It’s a pretty inspiring and beautifully made book, and in the authors footsteps I’m going to see how quickly I can produce a web app of similar build quality with openness and community at the core.

I’ve drafted up a very brief spec of what I’d like to do so far:

+ **Hosting** - [Heroku](https://www.heroku.com/), [Appfog](https://www.appfog.com/) or [Nodejitsu](https://www.nodejitsu.com/) (something that's Node.js and has an open source or free option)

+ **Database** - [CouchDB](http://couchdb.apache.org/) (I read good things about it)

+ **Creators Login With Github** - this allows for creative attribution to the theme’s original creator, and we can add profile information about the author to a theme’s page.

+ **Be As Static As Possible** - I like the idea of working with simple JSON files to store different themes. That’s why I’m choosing to use CouchDB. It’s also because I’m not much of a back-end guy yet, so being able to work with JSON files throughout and Javascript calls to the DB are a big plus.

+ **Data Export** - Although there is ability to import Issue tag schemes into Github (not yet anyway) I feel it’s important to allow people to export the data that makes up the theme, either back out as the JSON file, or as a text file of some sort.

+ **Theme Previews** - Preview each tag like it were in Github - different lightness values will influence whether the text colour of the issue tag is dark or light, so a preview option is important.

+ **MVC** - I also want to build the app using [AngularJS](http://angularjs.org/) as a front-end MVC framework, with [Express](http://expressjs.com/) mirroring the back-end. Despite needing to tweak express a little bit to work with Angular, I think it’s a fairly sensible move.

+ **Responsive** - Because it's 2013.

+ **Copying colour codes needs to be as easy as possible**

I'd appreciate any feedback or ideas if you're interested in getting involved, or if you've had any quibbles with keeping your Issue system clean and tidy. **Comments are below :)**