import { Knex } from 'knex';
import { hash } from '../../helpers/bcrypt';
import { env } from '../../helpers/env-helper';

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('roles').del();
  await knex('users').del();

  // Inserts seed entries

  //   ROLES
  await knex('roles').insert([
    { name: 'ADMINSTRATOR', description: 'Role given to admin' },
    {
      name: 'AUTHENTICATED',
      description: 'Role given to authenticated users',
    },
    { name: 'PUBLIC', description: 'Role given to public users' },
  ]);

  //   USERS
  const password = await hash(env.string('SEED_PASSWORD', 'admin', false));
  await knex('users').insert([
    {
      role: 'AUTHENTICATED',
      username: env.string('SEED_USERNAME', 'admin', false), // 'admin',
      email: env.string('SEED_EMAIL', 'admin@template.io', false), // 'admin@template.io',
      password,
      name: env.string('SEED_NAME', 'Admin', false),
      confirmed: true,
    },
  ]);
};
