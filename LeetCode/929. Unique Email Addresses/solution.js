/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    const map = {};

    emails.forEach((email) => {
        const [, local, dmain] = email.match(/(.*@)(.*)/);
        const newEmail = `${local.replace(/\./g, '').replace(/\+.*@/, '@')}${dmain}`;
        map[newEmail] = 1;
    });

    return Object.keys(map).length;
};
