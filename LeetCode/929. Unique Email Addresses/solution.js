/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const map = {};

  emails.forEach((email) => {
    const [, local, domain] = email.match(/(.*@)(.*)/);
    const newEmail = `${local
      .replace(/\./g, "")
      .replace(/\+.*@/, "@")}${domain}`;
    map[newEmail] = 1;
  });

  return Object.keys(map).length;
}

function numUniqueEmails2(emails) {
  const result = new Set();
  for (const email of emails) {
    const [localName, domainName] = email.split("@");
    const [local] = localName.split("+");
    result.add(`${local.replaceAll(".", "")}@${domainName}`);
  }
  return result.size;
}

function numUniqueEmails3(emails) {
  const set = new Set();

  for (const email of emails) {
    const [, local, , domain] = email.match(/([a-z.]+)(\+*.*@)(.+)/);
    set.add(`${local.replaceAll(".", "")}@${domain}`);
  }

  return set.size;
}
