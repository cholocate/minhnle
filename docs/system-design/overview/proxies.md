# Forward and Reverse Proxies

### Reference 
```
client -F-> webserver (internet) -R-> origin server (websites and stuff)
```

In simple terms, a proxy server is a server that acts as a middleman between us users and the website we are trying to get to. For a typical request/response pipeline, the middleman will receive these events and organize them on behalf of the clients. 

A forward proxy (F) places the middleman before the webserver, ensuring the following: 
- Anonymity for Users
- Bypass + Blockade of Access to the webserver

A reverse proxy (R) places the middleman in front of the origin server, after the webserver. It ensures the following: 
- Load Balancing 
- DDOS and other forms of attacks 
- Annoymity for Servers 

Depending on security, user, and server restrictions, one might be better than the other. A simple analogy is whether you are trying to protect clients or the servers, you would then use forward or reverse respectively. 
