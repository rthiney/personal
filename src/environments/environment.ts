// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName:'Development',
  insightKey: '81ad00b1-5009-482d-82e6-2664258ca29a',
  sendgrid: {
   key : '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',
   billingTemplate : '661d5e3f-113c-4ee1-8b93-76b5ac74523b'
  }
};
