/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      GraphQLServerURL: string;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
