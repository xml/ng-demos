ng-demos
========

These angular demo projects are meant for use with public presentations I make at conferences, meetups etc. Some of them are my own work, while some are borrowed from Angular documentation or other public sources.

They should be fully functional as-is, without any external dependencies. Because they're Angular and many of the projects rely on templates, you'll simply want to get a server up and running to see them in your browser. If you don't have another preferred server, here's an easy one to use:

1. Clone this repo. 
2. In your terminal, `cd` into the repo directory root.
3. run `python -m SimpleHTTPServer 8080`. (This is the syntax for specifying a port number, which I've done for clarity. You can either choose your own number, or let it use the default by dropping it from the command.)
4. open your browser and visit `localhost:8080`
5. Navigate the tree and open up the file in each demo folder that is some variation on `index.html`. 


In general, the demos are in a non-functioning state. However, in most cases, the code to get them functioning (possibly in many ways) already exists here and just needs to be un-commented.

They are only semi-documented, with some cryptic notes for my own use when presenting. Some day, I hope to provide a written guide here for each demo. Until then, experiment and take advantage of the fact that Source Control means never having to say you're sorry: if you break something, just nuke the repo, re-clone, and start over.
