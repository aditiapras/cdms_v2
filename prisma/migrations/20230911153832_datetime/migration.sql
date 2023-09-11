/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `Cleaning` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Cleaning` MODIFY `date_cleaning` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;
