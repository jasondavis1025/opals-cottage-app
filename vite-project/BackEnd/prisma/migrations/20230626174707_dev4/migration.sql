-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_guestId_fkey";

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "guestId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
