import { getRandomEntry } from "@whitep4nth3r/get-random-entry";

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeAllVowels(string) {
  let regexp = /([a,e,i,o,u])/g;

  return string.replace(regexp, "");
}

function shouldDoThing(probability) {
  return Math.random() < probability;
}

const prefixChars = ["i", "e"];

const words = [
  "AI",
  "analytics",
  "AR",
  "automation",
  "blue",
  "cloud",
  "columns",
  "company",
  "computer",
  "console",
  "cookies",
  "crypto",
  "cyan",
  "data",
  "deliverables",
  "development",
  "disrupt",
  "edge",
  "engineering",
  "enterprise",
  "env",
  "excellence",
  "experience",
  "factory",
  "flight",
  "input",
  "insights",
  "institute",
  "integration",
  "intelligence",
  "IoT",
  "journey",
  "lambda",
  "light",
  "lite",
  "ltd",
  "mobile",
  "net",
  "network",
  "NFT",
  "orange",
  "optimize",
  "output",
  "packet",
  "platform",
  "portal",
  "project",
  "purple",
  "red",
  "registration",
  "rows",
  "science",
  "search",
  "serve",
  "solutions",
  "speed",
  "stream",
  "support",
  "systems",
  "tag",
  "team",
  "tech",
  "testing",
  "today",
  "ventures",
  "VR",
  "web",
  "yellow",
];

const domains = [
  "ai",
  "app",
  "cloud",
  "co",
  "code",
  "dev",
  "edu",
  "io",
  "it",
  "lol",
  "network",
  "org",
  "sh",
  "systems",
  "tech",
  "xyz",
];

export function getRandomTechBusinessName() {
  const wordCount = getRandomEntry([1, 2, 3]);
  const shouldAddCharToStart = shouldDoThing(0.1);

  let businessName = shouldAddCharToStart ? getRandomEntry(prefixChars) : "";
  const shouldRepeatLastLetter = shouldDoThing(0.5);
  const shouldAddDomainIfNoSpaces = shouldDoThing(0.75);

  for (let i = 1; i <= wordCount; i++) {
    const shouldAddSpace = shouldDoThing(0.5);
    const space = shouldAddSpace ? " " : "";
    const shouldReplaceVowels = shouldDoThing(0.2);
    const shouldCapitalize = shouldDoThing(0.5) || !shouldAddSpace;

    let word = getRandomEntry(words);

    if ((shouldAddCharToStart && i === 1) || shouldCapitalize) {
      word = capitalizeFirstChar(word);
    }

    if (shouldReplaceVowels) {
      word = removeAllVowels(word);
    }

    businessName += space + word;
  }

  if (shouldRepeatLastLetter) {
    const lastLetter = businessName.slice(-1);
    const howMany = getRandomInt(1, 4);
    businessName += lastLetter.repeat(howMany);
  }

  const spaceRegex = /(\s)/g;

  if (businessName.match(spaceRegex) === null && shouldAddDomainIfNoSpaces) {
    businessName += `.${getRandomEntry(domains)}`;
  }

  return businessName;
}
