"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomTechBusinessName = getRandomTechBusinessName;

var _getRandomEntry = require("@whitep4nth3r/get-random-entry");

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeAllVowels(string) {
  var regexp = /([a,e,i,o,u])/g;

  return string.replace(regexp, "");
}

function shouldDoThing(probability) {
  return Math.random() < probability;
}

var prefixChars = ["i", "e"];

var words = ["AI", "analytics", "AR", "automation", "blue", "cloud", "columns", "company", "computer", "console", "cookies", "crypto", "cyan", "data", "deliverables", "development", "disrupt", "edge", "engineering", "enterprise", "env", "excellence", "experience", "factory", "flight", "input", "insights", "institute", "integration", "intelligence", "IoT", "journey", "lambda", "light", "lite", "ltd", "mobile", "net", "network", "NFT", "orange", "optimize", "output", "packet", "platform", "portal", "project", "purple", "red", "registration", "rows", "science", "search", "serve", "solutions", "speed", "stream", "support", "systems", "tag", "team", "tech", "testing", "today", "ventures", "VR", "web", "yellow"];

var domains = ["ai", "app", "cloud", "co", "code", "dev", "edu", "io", "it", "lol", "network", "org", "sh", "systems", "tech", "xyz"];

// if the name contains no spaces, randomly append a domain?
// randomly replace s with z at the end

function getRandomTechBusinessName() {
  var wordCount = (0, _getRandomEntry.getRandomEntry)([1, 2, 3]);
  var shouldAddCharToStart = shouldDoThing(0.1);

  var businessName = shouldAddCharToStart ? (0, _getRandomEntry.getRandomEntry)(prefixChars) : "";
  var shouldRepeatLastLetter = shouldDoThing(0.5);
  var shouldAddDomainIfNoSpaces = shouldDoThing(0.9);

  for (var i = 1; i <= wordCount; i++) {
    var shouldAddSpace = shouldDoThing(0.5);
    var space = shouldAddSpace ? " " : "";
    var shouldReplaceVowels = shouldDoThing(0.2);
    var shouldCapitalize = shouldDoThing(0.5) || !shouldAddSpace;

    var word = (0, _getRandomEntry.getRandomEntry)(words);

    if (shouldAddCharToStart && i === 1 || shouldCapitalize) {
      word = capitalizeFirstChar(word);
    }

    if (shouldReplaceVowels) {
      word = removeAllVowels(word);
    }

    businessName += space + word;
  }

  if (shouldRepeatLastLetter) {
    var lastLetter = businessName.slice(-1);
    var howMany = getRandomInt(1, 4);
    businessName += lastLetter.repeat(howMany);
  }

  var spaceRegex = /(\s)/g;

  if (businessName.match(spaceRegex) === null && shouldAddDomainIfNoSpaces) {
    businessName += "." + (0, _getRandomEntry.getRandomEntry)(domains);
  }

  return businessName;
}