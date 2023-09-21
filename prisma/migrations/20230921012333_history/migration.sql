/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `cleaning` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_naik` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `cleaning` MODIFY `date_cleaning` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;

-- CreateTable
CREATE TABLE `History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_drum` VARCHAR(20) NOT NULL,
    `building_mc` VARCHAR(10) NOT NULL,
    `age` INTEGER NOT NULL,
    `date_naik` DATETIME NOT NULL,
    `date_turun` DATETIME NOT NULL,
    `reason` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `History_id_drum_key`(`id_drum`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
