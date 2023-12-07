# Keywords, Key concepts, Key notes 


## The very basic: Typical pipeline
- Client connects to the API, via. the internet (Netflix, Instagram, etc.) and obtains the right IP address from requesting the [**DNS**](#dns), and then request the web server the rendered website with the obtained IP. 
- Client establishes a secured connection both through the browser and website (known browsers has different ways to verify whether the webiste is trusted, and that there is no malicious intention from entering the site). 
- Multiple clients, millions or even billions (think Manchester United official website when Ronaldo rejoined) wants to enter the website, causing it to crash if the load is not even out. In this case, we need a [**Load Balancer**](#load-balancing), which either balances the requests through partitioning or hashing by means of quantities, regions, etc. 
- After balancing the load, the request is passed to the API gateway, which centrallizes requests and redirects it to the right services to both ends of the client-server pipeline. 
- Depending on the design architecture, we can either have a [monolith or a microservice system](#monolith-and-microservice) which determines how our entire system is structured, especially the backend that comprises the [Database](#database) and different types of services if applicable. Databases allows us to store all of our data, some very sensitive that has means of [security](#securities). 
- Often times we use [caches] to mitigate response time issues, our client could redirected to the cache if a previous request is cached in some form of storage and avoid the process of querying, and calling different servies. 

### DNS 

### Load Balancing 

### Monolith and Microservice
- *Monolith* architectures have a set of servers performing that are capable of handling all requests within the system. That is, server 1,...,N can all handle requests 1,...,M. 
- *Microservice* architectures, usually accompanied by an API Gateway, have servers that each handles different forms of requests. Note that each server can handle some type(s) of requests, and is not limited to a single form. 
Microservice architectures is usually preferred, as we reduce single points of failures and decentrallizes services' responsibilties. Also making it easier for developers to pinpoint errors. 

### Database 


