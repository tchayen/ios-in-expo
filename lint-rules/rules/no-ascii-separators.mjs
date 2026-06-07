// @ts-check

// Matches decorative separator patterns: 4+ consecutive `=` or `-`, or any
// box-drawing run of length 2+ (──, ══, ────).
const separatorRegex = /[─-╿]{2,}|[=-]{4,}/;

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow ASCII/Unicode separator comments",
    },
    fixable: "code",
    messages: {
      noAsciiSeparator:
        "Avoid decorative separator comments. Use blank lines or describe blocks to separate sections.",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode;
    return {
      Program() {
        const text = sourceCode.getText();
        for (const comment of sourceCode.getAllComments()) {
          if (!separatorRegex.test(comment.value)) {
            continue;
          }
          context.report({
            loc: comment.loc,
            messageId: "noAsciiSeparator",
            fix(fixer) {
              // Drop the entire comment plus its trailing newline (if any) and
              // the leading whitespace on its line so we don't leave a blank
              // indented line behind.
              let start = comment.range[0];
              while (start > 0 && (text[start - 1] === " " || text[start - 1] === "\t")) {
                start -= 1;
              }
              let end = comment.range[1];
              if (text[end] === "\r") end += 1;
              if (text[end] === "\n") end += 1;
              return fixer.removeRange([start, end]);
            },
          });
        }
      },
    };
  },
};

export default rule;
