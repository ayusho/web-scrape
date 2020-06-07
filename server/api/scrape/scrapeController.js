var Sources = require("../sources/sourcesModel");

var logger = require("../../util/logger");
var _ = require("lodash");
const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
var data = require('./data');

exports.post = async (req, res, next) => {
  try {
    let URL = req.body.url;
    let links = [];
    request(URL, async function (error, response, body) {
      if (error) {
        return console.error("There was an error!");
      }
      var $ = cheerio.load(body);

      $("a").each(function () {
        var caption = $(this).text();
        var url = $(this).attr("href");
        let finalUrl = url;
        if (url && url.length > 5 && caption.trim().length > 0) {
          let finalUrl;
          if (url[0] == "/") {
            finalUrl = URL + url;
            links.push({ caption: caption.trim(), url: finalUrl });
          } else {
            links.push({ caption: caption.trim(), url });
          }
        } else {
          logger.log(`${url} not valid URL`);
        }
      });

      let newLink = [];
      let id = 0;
      await Promise.all(
        links.map(async (link) => {
          try {
            let res = await axios.get(link.url);
            const headers = getHeaders(res.headers);
            newLink.push({ id: id++, ...link, ...headers });
          } catch (error) {
            console.log(error.message);
          }
        })
      );
      res.send(newLink);
    });
  } catch (error) {
    logger.log(error);
    res.error(error);
    next(error);
  }
};

function getHeaders(headers) {
  const content_length = headers["content-length"]
    ? headers["content-length"]
    : "";
  const last_modified = headers["last-modified"]
    ? headers["last-modified"]
    : "";
  const content_encoding = headers["content-encoding"]
    ? headers["content-encoding"]
    : "";
  const server = headers["server"] ? headers["server"] : "";

  return { content_length, last_modified, content_encoding, server };
}

exports.get = (req, res, next) => {
  res.send(data);
}