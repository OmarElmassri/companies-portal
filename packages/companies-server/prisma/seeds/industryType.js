const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  // Clean industry types
  await prisma.industryType.deleteMany();

  // Add available industry types
  await prisma.industryType.createMany({
    data: [{ name: 'Software' }, { name: 'Sales' }, { name: 'Development' }],
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
