/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `Cleaning` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_naik` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `change` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Part` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cleaning` MODIFY `date_cleaning` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;

-- AlterTable
ALTER TABLE `Part` ADD COLUMN `change` VARCHAR(10) NOT NULL,
    ADD COLUMN `qty` INTEGER NOT NULL,
    ADD COLUMN `status` VARCHAR(10) NOT NULL;
