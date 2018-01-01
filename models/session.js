
const Session = require('../lib/mongo').Session;

module.exports = {
    get(session_id, unique){
      return Session.find({});

    },
    upsert(session_id, data){
      console.log(data)
      return Session.findByIdAndUpdate({session_id, _id: session_id}, data, {upsert: true})
    },
}
