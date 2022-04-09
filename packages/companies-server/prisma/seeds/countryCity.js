const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  // Clean countries and cities
  await prisma.city.deleteMany();
  await prisma.country.deleteMany();

  // Add Egypt
  await prisma.country.create({
    data: {
      name: 'Egypt',
      Cities: {
        create: [
          { name: 'Cairo' },
          { name: 'Giza' },
          { name: 'Alex' },
          { name: 'Luxor' },
          { name: 'Aswan' },
        ],
      },
    },
  });

  // Add United Kingdom
  await prisma.country.create({
    data: {
      name: 'United Kingdom',
      Cities: {
        create: [
          { name: 'London' },
          { name: 'Kent' },
          { name: 'Cambridge' },
          { name: 'Manchester' },
        ],
      },
    },
  });

  // Add France
  await prisma.country.create({
    data: {
      name: 'France',
      Cities: {
        create: [{ name: 'Paris' }, { name: 'Lyon' }, { name: 'Calais' }],
      },
    },
  });

  // Add Germany
  await prisma.country.create({
    data: {
      name: 'Germany',
      Cities: {
        create: [
          { name: 'Berlin' },
          { name: 'Munich' },
          { name: 'Frankfurt' },
          { name: 'Hamburg' },
        ],
      },
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
