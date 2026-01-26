# Async Storage
`@react-native-async-storage` provides **unencrypted, persistent, key-value storage** for React Native
``` bash
npm install @react-native-async-storage/async-storage
```
- It uses different storage means for different deployments but with a uniform api for interaction wiht the storage pool:
  - On Android devices it uses SQLite for storage and is limited with SQLit's 2Mb max item and 6Mb total storage limits
  - On iOS it will use one of two methods to store depending on the size, but both are backed-up to iCloud
  - There isn't an established upper limite for iOS storage, but consideration should still be given for performace
## Using Async Storage
``` JavaScript
getItem(key)

setItem(key, value)

removeItem(key)

clear() // clear the store of all data for the app

getAllKeys()

multiGet(), multiSet() & multiRemove() // take an array of keys or an array of key:value objects and as the name implies returns, sets or clears the values

mergeIte() & multiMerge() // which will merge new values with old, effectively keeping the non-duplicated members, adding new members and updating duplicate members
```