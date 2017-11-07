/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stacks = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        switch (c) {
            case '(':
            case '{':
            case '[':
                stacks[stacks.length] = c;
                break;
            case ')':
                 stacks[stacks.length - 1] === '(' ? stacks.pop() : stacks[stacks.length] = c;
                break;
            case '}':
                stacks[stacks.length - 1] === '{' ? stacks.pop() : stacks[stacks.length] = c;
                break;
            case ']':
                stacks[stacks.length - 1] === '[' ? stacks.pop() : stacks[stacks.length] = c;
                break;
        }
    }
    return stacks == 0;
};
