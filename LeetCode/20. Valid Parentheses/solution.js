/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        switch (c) {
            case '(':
            case '{':
            case '[':
                stack[stack.length] = c;
                break;
            case ')':
                 stack[stack.length - 1] === '(' ? stack.pop() : stack[stack.length] = c;
                break;
            case '}':
                stack[stack.length - 1] === '{' ? stack.pop() : stack[stack.length] = c;
                break;
            case ']':
                stack[stack.length - 1] === '[' ? stack.pop() : stack[stack.length] = c;
                break;
        }
    }
    return stack.length === 0;
}

function isValid2(s) {
    const parenMap = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
    const stack = [];
    for (const p of s) {
        if (parenMap.has(p)) {
            stack.push(parenMap.get(p));
            continue;
        }
        if (p !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}
