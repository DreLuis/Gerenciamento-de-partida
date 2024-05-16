/*
  Warnings:

  - You are about to drop the column `Nacionalidade` on the `jogador` table. All the data in the column will be lost.
  - You are about to drop the `partidas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nacionalidade` to the `Jogador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posicao` to the `Jogador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jogador` DROP COLUMN `Nacionalidade`,
    ADD COLUMN `nacionalidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `posicao` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `partidas`;

-- CreateTable
CREATE TABLE `Partida` (
    `id` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `placar` VARCHAR(191) NOT NULL,
    `timeCasa` VARCHAR(191) NOT NULL,
    `timeVisitante` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TimesDoJogador` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TimesDoJogador_AB_unique`(`A`, `B`),
    INDEX `_TimesDoJogador_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_TimesDoJogador` ADD CONSTRAINT `_TimesDoJogador_A_fkey` FOREIGN KEY (`A`) REFERENCES `Jogador`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TimesDoJogador` ADD CONSTRAINT `_TimesDoJogador_B_fkey` FOREIGN KEY (`B`) REFERENCES `Time`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
