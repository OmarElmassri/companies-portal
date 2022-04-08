const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  await prisma.industryType.createMany({
    data: [{ name: 'Software' }, { name: 'Sales' }, { name: 'Development' }],
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
