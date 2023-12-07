# Design Spotify
### Master
[Design Spotify (Blog)](https://iq.opengenus.org/system-design-of-spotify/)


### Numbers 
- Users: 1 billion
- Songs: 100 million 
- MP3 Audio: 5MB (average) 
- Storage for Audio: 1*10^8 * 5*10^3 = 5* 10^11 = 500TB
- Replication x3 -> 1.5 PB 
- Metadata: 100bytes per song metadata -> 10GB 
- 1KB per user >> 1TB Storage 

### Fundamental Principles 

1) Initially

**Absolute availability**
- I can't have a user not being able to play a song.

**Low latency**
- Users should be able to stream a song in an appropriate time manner. (Appropriate definition deals with bandwidth, client+server issue, can get very technical, better to be handwavy unless asked) 

2) After figuring out some bottlenecks 

**Request overload from Hot Songs** 
- Database should be able to handle "hot" requests from the pooled users. We can use cache in the local user application or maintaining a cache in our system. 


### Database Schema
**Metadata**

```
song 
|+ songID 
|+ authorID
|+ releaseDate 
|+ duration 
```

```
author
|+ ID
|+ DOB
|+ COB
|+ Status 
```
```
user
|+ userID
|+ hashedUsername
|+ hasedPassword
|+ following | followers
|+ billingID 
```

```
playlist
|+ userID 
|+ playlistID
```

```
billing (typically non-relevant in interviews)
|+ payment stuff 
```


### Pipeline 
Let's run through a typical use case: a user can search for songs and then play a song, add a song into a playlist. 

Frontend-wise we know that Spotify has its application built on many webservers, as we browse Spotify through any device (Desktop, Laptop, Mobile) and use the app itself or use the web application, we go through an authorization process. Here we check whether the user has logged in successfully previously (presumably through cookies or whatever it is equivalently for the installed app), we can have an API gateway, let's say **NGINX**, to take care of the load-balancing and Auth-N/Z (authentication or authorization) stuff. So far we have:

`UI -> NGINX(LB + API Gateway)`

From here we define the backend, this includes how we integrate microservices together. What database to use, cache? with extra microservices to handle real cases (bottle-necks, potential SPOFs, etc.)

 One thing we can be clear off: using a relational database for immutable content: user searches can include (and should include for their own benefits) author name, country, etc. in addition to the song name. In this case we can use mongoDB or postgreSQL for the song + author metadata database, it is very **read heavy**. The actual storage is just going to be your AWS S3, scales very well (linearly) even with over billions of songs. Then we can use a NoSQL database for user, playlist, billing metadata, since we update alot, write heavy.

 Cache: Redis, Memcached or CDN, we can use CDN in this case to store static content over different geolocations. This is because users might be more interested in songs over their region. How do we handle integration between different microservices, after passing through the API gateway? **Apache Kafka** is another essential element that acts as an event bus to handle requests from different microservices. Generally, NGINX can act as a reverse proxy (this way it can be also be a LB in front of the backend services) while Kafka is used to handle asyncrhonous events that requires real time data streaming or other event-driven architectures. 

 Thus our overall pipeline is as follows: 
 ```
 UI -> NGINX LB -> NGINX API Gateway Kafka -> Song + Author Metadata DB
                                           -> User + Playlist + Billing Metadata DB 
 ```
### Use Cases


### After-thoughts
- The user's playlists should contain a cache somewhere, this also makes sense in terms of the Search Then Play logic. If it's already included in the userspace, we can just cache all the songs that the user liked or added to playlists. *Following a playlist is another topic. 
- Usually microservices have redundancy and scaling, to avoid extra downtime and decreasing impact. 



 