-- CreateTable
CREATE TABLE `User` (
    `nik` INTEGER NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `workgroup` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `User_nik_key`(`nik`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Monitoring` (
    `building_mc` VARCHAR(10) NOT NULL,
    `id_left` VARCHAR(20) NULL,
    `id_right` VARCHAR(20) NULL,
    `status` VARCHAR(20) NULL,

    UNIQUE INDEX `Monitoring_building_mc_key`(`building_mc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drum` (
    `id_drum` VARCHAR(20) NOT NULL,
    `rim` INTEGER NOT NULL,
    `type` VARCHAR(5) NOT NULL,
    `status` VARCHAR(10) NULL,
    `building_mc` VARCHAR(10) NULL,
    `age` INTEGER NULL,
    `date_naik` TIMESTAMP NULL,
    `date_turun` TIMESTAMP NULL,

    UNIQUE INDEX `Drum_id_drum_key`(`id_drum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Machine` (
    `building_mc` VARCHAR(10) NOT NULL,
    `status` VARCHAR(10) NULL,
    `phase` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Machine_building_mc_key`(`building_mc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tub_width` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cleaning` (
    `cleaning_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_drum` VARCHAR(20) NOT NULL,
    `pic` VARCHAR(255) NOT NULL,
    `date_cleaning` TIMESTAMP NOT NULL,

    PRIMARY KEY (`cleaning_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
