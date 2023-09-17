/*
  Warnings:

  - You are about to alter the column `date_naik` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `Drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Cleaning` MODIFY `date_cleaning` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;

-- CreateTable
CREATE TABLE `Part` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `cleaning_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Part` ADD CONSTRAINT `Part_cleaning_id_fkey` FOREIGN KEY (`cleaning_id`) REFERENCES `Cleaning`(`cleaning_id`) ON DELETE SET NULL ON UPDATE CASCADE;
