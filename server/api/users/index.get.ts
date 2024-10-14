import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const q = getQuery(event);

  const count = Number(q.count || 10);

  let users = [];
  // create users based on the count value
  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.nanoid(5),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      // avatar: faker.internet.avatar(), // This got deprecated
      // avatar: faker.image.avatarLegacy(), // This got deprecated
      avatar: faker.image.avatar(),
    });
  }

  return users;
});
