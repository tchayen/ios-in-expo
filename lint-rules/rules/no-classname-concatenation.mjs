// @ts-check
/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow string concatenation in className prop. Use twMerge() instead.",
    },
    messages: {
      noClassNameConcatenation:
        "Don't use string concatenation for className. Use twMerge() instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== "className") {
          return;
        }

        const value = node.value;
        if (!value || value.type !== "JSXExpressionContainer") {
          return;
        }

        checkExpression(context, value.expression);
      },
    };
  },
};

/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {import("estree").Node} node
 */
function checkExpression(context, node) {
  if (node.type === "BinaryExpression" && node.operator === "+") {
    context.report({ node, messageId: "noClassNameConcatenation" });
  } else if (node.type === "TemplateLiteral" && node.expressions.length > 0) {
    context.report({ node, messageId: "noClassNameConcatenation" });
  }
}

export default rule;
