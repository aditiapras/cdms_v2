/*
  Warnings:

  - You are about to alter the column `date_cleaning` on the `cleaning` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_naik` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date_turun` on the `drum` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `date_naik` on the `history` table. All the data in the column will be lost.
  - You are about to drop the column `date_turun` on the `history` table. All the data in the column will be lost.
  - Added the required column `PIC` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cleaning` MODIFY `date_cleaning` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `drum` MODIFY `date_naik` DATETIME NULL,
    MODIFY `date_turun` DATETIME NULL;

-- AlterTable
ALTER TABLE `history` DROP COLUMN `date_naik`,
    DROP COLUMN `date_turun`,
    ADD COLUMN `PIC` VARCHAR(20) NOT NULL,
    ADD COLUMN `date` DATETIME NOT NULL,
    ADD COLUMN `type` VARCHAR(20) NOT NULL;
