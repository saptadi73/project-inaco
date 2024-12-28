-- CreateTable
CREATE TABLE `purchase_transisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nomor` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `id_material` INTEGER NOT NULL,
    `delivery_date` DATETIME(3) NOT NULL,
    `id_currency` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `id_top` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
