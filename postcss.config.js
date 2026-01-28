import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [postcssImport(), tailwindcss(), autoprefixer(), postcssNesting()],
};
