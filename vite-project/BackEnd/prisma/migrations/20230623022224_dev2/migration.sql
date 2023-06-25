/*
  Warnings:

  - Added the required column `age` to the `Guest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "age" INTEGER NOT NULL;
