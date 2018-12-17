
'use strict';
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
var express = require('express');
var bodyParser = require('body-parser');

var assistant = new AssistantV1({
  username: '103b39ae-cd69-4555-b97d-5e660a0d3ee6',
  password: 'wnOHgaEB2R2T',
  url: 'https://gateway.watsonplatform.net/assistant/api/v1/workspaces/7479f70e-fce4-4e0d-a35b-2168fb894634/message',
  version: '2018-12-17'
});

assistant.message(
  {
    input: { text: "안녕?" },
    workspace_id: '7479f70e-fce4-4e0d-a35b-2168fb894634'
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);
var app = express();
var port = 5000;
app.set('port', port);
app.use(bodyParser.json());
//api.initialize(app);
//app.initialize(app, options);
app.listen(port, function(){
   console.log('Client server listening on port' + port);

});
