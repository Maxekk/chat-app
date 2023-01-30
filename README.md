# CHAT-ROOM
A real time web application written in React with FireBase, where users can share the messages between each other.
App supports text messages and images.

Quick Start:
------------

- ``` git clone ```
- ```cd chat-app```
- Paste your firebase config to firebase.js file
- ``` npm install ```
- ``` npm start ```

# Firebae configuration:
1. Create Firestore Database
2. On firebase console navigate to Firestore Database -> Rules -> Edit Rules 
   replace the entire code to this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
