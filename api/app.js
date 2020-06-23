var BloomControl = require("bloom-control").BloomControl;

var bloomControl = new BloomControl({
  host  : "127.0.0.1",  // Or '127.0.0.1' if you are still using IPv4
  port  : 8811,   // Default port is '8811'
  shard : 1       // Specify the Bloom shard to use, as \
                  //   a Bloom instance can host multiple cache shards, eg. for different API workers
}).connect({
  connected : function() {
    // Connected handler
    console.info("Bloom Control succeeded to connect to host.");
  },

  disconnected : function() {
    // Disconnected handler
    console.error("Bloom Control is now disconnected.");
  },

  timeout : function() {
    // Timeout handler
    console.error("Bloom Control connection timed out.");
  },

  retrying : function() {
    // Retry handler
    console.error("Trying to reconnect to Bloom Control...");
  },

  error : function(error) {
    // Failure handler
    console.error("Bloom Control failed to connect to host.", error);
  }
});

bloomControl.purgeBucket(`user_id:10012`, function(error) {
    // Handle purge errors here
    if (error) {
        console.log("some wrong")
    }
    else{
      console.log("ok")
    }
});

