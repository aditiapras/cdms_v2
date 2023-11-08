/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `cleaning` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_naik` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date` on the `history` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `request_date` on the `request` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `complete_date` on the `request` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `cleaning` MODIFY `date_cleaning` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;

-- AlterTable
ALTER TABLE `history` MODIFY `date` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `monitoring` ADD COLUMN `tub_width` INTEGER NULL;

-- AlterTable
ALTER TABLE `request` MODIFY `request_date` DATETIME NOT NULL,
    MODIFY `complete_date` DATETIME NULL;
