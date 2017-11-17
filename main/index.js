'use strict';

// Example of lambda function using nunjucks template
// https://github.com/guardian/ses-send-email-lambda/blob/master/src/index.js

// Related interesting reads
// https://medium.com/engineers-optimizely/using-serverless-to-simplify-and-automate-aws-lambda-442addd80d72

const base_page = `<html>
  <head>
    <title>Phodal's URL Shorter</title>
    <link href="https://cdn.bootcss.com/pure/1.0.0/pure-nr-min.css" rel="stylesheet">
  </head>
  <body class="pure-g">
    <div class="pure-u-1-5">
    </div>
    <div class="pure-u-3-5">
      <div style="width: 300px; margin:100px auto;">
        <h2>Phodal's URL Shorter</h1>
        <form method="POST" action="" class="pure-form">
          <input type="text" placeholder="链接，如：https://www.phodal.com/" id="link" name="link" size="40" autofocus />
          <br/>
          <br/>
          <input type="submit" value="生成" class="pure-button pure-button-primary" />
        </form>
      </div>
    </div>
  </body>
</html>`

module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event));

  callback(
    null,
    {
      statusCode: 200,
      body: base_page,
      headers: {'Content-Type': 'text/html'},
    }
  );
}
