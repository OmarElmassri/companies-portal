/*
  Warnings:

  - You are about to drop the column `industry_type` on the `Company` table. All the data in the column will be lost.
  - Added the required column `industry_type_id` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "industry_type",
ADD COLUMN     "industry_type_id" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "IndustryType";

-- CreateTable
CREATE TABLE "IndustryType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "IndustryType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industry_type_id_fkey" FOREIGN KEY ("industry_type_id") REFERENCES "IndustryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
