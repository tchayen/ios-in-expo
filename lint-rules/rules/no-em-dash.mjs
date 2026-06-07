// @ts-check
/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow em dash and en dash characters in source code",
    },
    fixable: "code",
    messages: {
      noEmDash: "Use a regular hyphen (-) instead of an em/en dash.",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode;
    return {
      Program() {
        const text = sourceCode.getText();
        const regex = /[–—]/g;
        let match;
        while ((match = regex.exec(text)) !== null) {
          const loc = sourceCode.getLocFromIndex(match.index);
          context.report({
            loc: { start: loc, end: { line: loc.line, column: loc.column + 1 } },
            messageId: "noEmDash",
            fix(fixer) {
              return fixer.replaceTextRange([match.index, match.index + 1], "-");
            },
          });
        }
      },
    };
  },
};

export default rule;
