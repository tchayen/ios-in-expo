import jsdocOnlyOnDeclarations from "./rules/jsdoc-only-on-declarations.mjs";
import noAbbreviatedNames from "./rules/no-abbreviated-names.mjs";
import noAsciiSeparators from "./rules/no-ascii-separators.mjs";
import noEmDash from "./rules/no-em-dash.mjs";
import noTextOnJsdocLine from "./rules/no-text-on-jsdoc-line.mjs";

export default {
  meta: {
    name: "local",
  },
  rules: {
    "jsdoc-only-on-declarations": jsdocOnlyOnDeclarations,
    "no-abbreviated-names": noAbbreviatedNames,
    "no-ascii-separators": noAsciiSeparators,
    "no-em-dash": noEmDash,
    "no-text-on-jsdoc-line": noTextOnJsdocLine,
  },
};
