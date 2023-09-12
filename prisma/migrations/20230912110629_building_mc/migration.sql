/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `Cleaning` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `date_naik` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropIndex
DROP INDEX `Drum_building_mc_key` ON `Drum`;

-- AlterTable
ALTER TABLE `Cleaning` MODIFY `date_cleaning` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;
