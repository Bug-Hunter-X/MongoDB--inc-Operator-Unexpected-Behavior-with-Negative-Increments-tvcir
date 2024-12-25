```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("64e6f513a6a730e6577d91b7") }, { $inc: { "counter": -1 } } );
```