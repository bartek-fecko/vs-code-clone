import { Linter } from 'eslint';
const linter = new Linter();

export const messages = linter.verify(
   "var foo = 6; \
   \n const dsa = 8;",
   {
      parserOptions: { ecmaVersion: 2015 },
      rules: {
         semi: 2,
      },
   });


export const runEsLinter = () => {
   console.log(messages)
};
