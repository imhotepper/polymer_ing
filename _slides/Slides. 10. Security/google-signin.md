# Security

---
###
Security consist of
* Authentication
    * users
    * applications
* Authorisation

---
### Authentication mechanisms
Authentication
* Username/Password
* Claims based
    * SAML Tokens (user/claims)
* Token based
    * OAuth (app/user)

---
### Google signin
Elements for authentication
* google-signin
    * shows login button
    * has authentication API
* google-signin-aware
    * checks authentication state
    * has authentication API
* App needs ClientID from google developer console

---
### Google Signin Authorisation
On behalf of users
* you can access API (eg. Drive)
* you need their permission
* scopes attribute asks user for permission

```
<google-signin client-id="..." scopes="https://www.googleapis.com/auth/drive"></google-signin>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Google Signin

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Add google-signin to the application