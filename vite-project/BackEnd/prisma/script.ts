import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //write prisma client queries here
  //.deleteMany() after guest will delete all current entries in database. or delete() will delete one entry
  //other methods: .findUnique( where: etc.) , .findFirst(), .createMany() .findMany() .update() .updateMany()
  const guest = await prisma.guest.createMany({
    data: [
      {
        name: "Chris Bear",
        email: "bear@test.com",
        age: 31,
        Room: "Forest View",
        Reservation: "06-30-23",
      },
      {
        name: "Ritter Gator",
        email: "gator@test.com",
        age: 31,
        Room: "Water View",
        Reservation: "06-30-23",
      },
      {
        name: "Justin Dawg",
        email: "dawg@test.com",
        age: 32,
        Room: "Mountain View",
        Reservation: "06-30-23",
      },
      {
        name: "Nate Sealion",
        email: "sealion@test.com",
        age: 31,
        Room: "Ocean View",
        Reservation: "06-30-23",
      },
    ],
  });
  console.log(guest);
}
async function secondary() {
  const user = await prisma.guest.findUnique({
    where: {
      email: "kyle@test.com",
    },
    // include
  });
  console.log(user);
}
// id          String        @id @default(uuid())
//   name        String
//   email       String        @unique
// age
//   Room        Room[]
//   Reservation Reservation[]

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
secondary()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
