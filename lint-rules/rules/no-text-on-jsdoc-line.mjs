// @ts-check
/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow text on the opening /** line of JSDoc comments",
    },
    fixable: "code",
    messages: {
      noTextOnJsdocLine: "Do not put text on the opening /** line of a JSDoc comment.",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode;
    return {
      Program() {
        for (const comment of sourceCode.getAllComments()) {
          if (comment.type !== "Block" || !comment.value.startsWith("*")) {
            continue;
          }
          const lines = comment.value.split("\n");
          const firstLine = lines[0];
          const afterStar = firstLine.slice(1);
          if (afterStar.trim().length === 0) {
            continue;
          }
          context.report({
            loc: comment.loc,
            messageId: "noTextOnJsdocLine",
            fix(fixer) {
              const indent = " ".repeat(comment.loc.start.column);
              if (lines.length === 1) {
                const text = afterStar.trim().replace(/\s*$/, "");
                const replacement = `/**\n${indent} * ${text}\n${indent} */`;
                return fixer.replaceTextRange([comment.range[0], comment.range[1]], replacement);
              }
              const text = afterStar.trim();
              const rest = lines.slice(1);
              const replacement = `/**\n${indent} * ${text}\n${rest.map((l) => `${indent} ${l.trimStart()}`).join("\n")}*/`;
              return fixer.replaceTextRange([comment.range[0], comment.range[1]], replacement);
            },
          });
        }
      },
    };
  },
};

export default rule;
