// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ActionCounter, Articles } = initSchema(schema as any);

export {
  ActionCounter,
  Articles
};