export const template = (title, body) => `<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
    <style>
      body{
        background: #152c42;
        margin: 0;
        padding: 50px 0;
        box-sizing: border-box;
        font-family: Bookman Old Style, sans, sans-serif;
        min-height: 100vh;
      }
      #title{
        font-family: "trebuchet ms", "Arial", sans-serif;
        font-weight: bold;
        text-align: center;
        color: rgb(36, 93, 146);
        font-size: 3em;
        margin: 0;
        margin-bottom: 30px;
      }
      #body{
        width: 100%;
        max-width: 500px;
        margin: auto;
        background: white;
        padding: 20px;
        min-height: 400px;
        z-index: 5;
      }
      p{
        font-size: 18px;
        color: #555;
        line-height: 30px;
        max-width: 90%;
        position: relative;
        margin: auto;
      }
      hr{
        margin: 20px 5%;
        width: 90%;
        border-bottom: none;
        border-top: solid rgb(235,235,235) 1px;
      }
      .center{
        text-align: center;
        color: rgb(180,180,180);
        margin: 10px;
      }
      a{
        color: rgb(36, 93, 146);
      }
      .block-image{
        width: 90%;
        margin: 5%;
        margin-bottom: 10px;
        border-radius: 5px;
      }
      h2{
        text-align: left;
        margin-top: 20px;
        margin-bottom: 0;
        margin-left: 0;
        font-size: 30px;
        color: rgb(75, 75, 75);
        font-weight: bold;
      }
      #bodycont{
        color: rgb(75, 75, 75);
        padding: 0 20px;
        hyphens: auto;
        line-height: 25px;
      }
    </style>
  </head>
  <body>
    <div id="body" class="overlayElement">
      <h1 id="title">${title}</h1>
      <div id="bodycont">
      ${body}
      </div>
      <hr>
      <div class="center">&copy; Conner Ow 2021, All Rights Reserved</div>
      <div class="center"><a href="mailto:connerow1115@gmail.com">connerow1115@gmail.com</a></div>
    </div>
  </body>
</html>`;