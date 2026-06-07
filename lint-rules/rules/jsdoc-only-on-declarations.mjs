// @ts-check
/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow multiline JSDoc comments on variables, types, and interfaces",
    },
    fixable: "code",
    messages: {
      jsdocOnlyOnDeclarations:
        "Use // comments for variables, types, and interfaces - JSDoc (/** */) is only for function/method/class declarations.",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode;

    function check(node) {
      const comments = sourceCode.getCommentsBefore(node);
      for (const comment of comments) {
        if (
          comment.type === "Block" &&
          comment.value.startsWith("*") &&
          comment.value.includes("\n")
        ) {
          context.report({
            loc: comment.loc,
            messageId: "jsdocOnlyOnDeclarations",
            fix(fixer) {
              const raw = comment.value;
              const lines = raw.split("\n");
              const contentLines = [];
              for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                line = line.replace(/^\*\s?/, "");
                line = line.replace(/^\s*\*\s?/, "");
                line = line.replace(/\s*\*?\s*$/, "");
                if (line.length > 0 || (i > 0 && i < lines.length - 1)) {
                  contentLines.push(line);
                }
              }
              while (contentLines.length > 0 && contentLines[0].trim() === "") {
                contentLines.shift();
              }
              while (
                contentLines.length > 0 &&
                contentLines[contentLines.length - 1].trim() === ""
              ) {
                contentLines.pop();
              }
              const indent = " ".repeat(comment.loc.start.column);
              const replacement = contentLines.map((l) => `${indent}// ${l}`).join("\n");
              let end = comment.range[1];
              const fullText = sourceCode.getText();
              if (fullText[end] === "\n") {
                end += 1;
              }
              return fixer.replaceTextRange([comment.range[0], end], `${replacement}\n`);
            },
          });
        }
      }
    }

    return {
      VariableDeclaration: check,
      TSTypeAliasDeclaration: check,
      TSInterfaceDeclaration: check,
    };
  },
};

export default rule;
