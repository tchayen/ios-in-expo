// @ts-check

const banned = new Map([
  ["acc", "accumulator"],
  ["arr", "array"],
  ["buf", "buffer"],
  ["cmd", "command"],
  ["col", "column"],
  ["cur", "current"],
  ["diff", "difference"],
  ["dir", "direction"],
  ["dist", "distance"],
  ["el", "element"],
  ["evt", "event"],
  ["idx", "index"],
  ["len", "length"],
  ["msg", "message"],
  ["num", "number"],
  ["obj", "object"],
  ["orig", "origin"],
  ["poly", "polygon"],
  ["pos", "position"],
  ["prev", "previous"],
  ["res", "result"],
  ["req", "request"],
  ["seg", "segment"],
  ["sim", "simulation"],
  ["sq", "squared"],
  ["val", "value"],
  ["vel", "velocity"],
]);

// Split camelCase / PascalCase / digit boundaries into lowercase segments.
function splitSegments(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1\0$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1\0$2")
    .replace(/([a-zA-Z])(\d)/g, "$1\0$2")
    .replace(/(\d)([a-zA-Z])/g, "$1\0$2")
    .split("\0")
    .map((s) => s.toLowerCase());
}

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow abbreviated variable and parameter names",
    },
    messages: {
      noAbbreviatedName: 'Avoid abbreviated name "{{segment}}" - use "{{suggestion}}" instead.',
    },
    schema: [],
  },
  create(context) {
    function checkIdentifier(node) {
      if (node?.type !== "Identifier") {
        return;
      }
      const segments = splitSegments(node.name);
      for (const segment of segments) {
        if (banned.has(segment)) {
          context.report({
            node,
            messageId: "noAbbreviatedName",
            data: {
              segment,
              suggestion: banned.get(segment),
            },
          });
          return;
        }
      }
    }

    function checkParams(params) {
      if (!params) {
        return;
      }
      for (const param of params) {
        if (param.type === "Identifier") {
          checkIdentifier(param);
        } else if (param.type === "AssignmentPattern" && param.left) {
          checkIdentifier(param.left);
        }
      }
    }

    return {
      VariableDeclarator(node) {
        if (node.id?.type === "Identifier") {
          checkIdentifier(node.id);
        }
      },
      FunctionDeclaration(node) {
        checkIdentifier(node.id);
        checkParams(node.params);
      },
      ArrowFunctionExpression(node) {
        checkParams(node.params);
      },
      FunctionExpression(node) {
        checkIdentifier(node.id);
        checkParams(node.params);
      },
    };
  },
};

export default rule;
