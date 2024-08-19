"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default1723997378287 = void 0;
class Default1723997378287 {
    constructor() {
        this.name = 'Default1723997378287';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`pessoas\` (\`pessoa_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`pessoa_nome\` varchar(255) NOT NULL, \`pessoa_cpf\` varchar(11) NOT NULL, \`pessoa_data_nascimento\` date NOT NULL, \`pessoa_telefone\` varchar(16) NOT NULL, \`pessoa_email\` varchar(255) NOT NULL, \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_b85dd0ead6126e4292cfeba0d4\` (\`pessoa_cpf\`), UNIQUE INDEX \`IDX_41048f09237b0df000f84c1fe7\` (\`pessoa_email\`), PRIMARY KEY (\`pessoa_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`acoes\` (\`acao_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`acao_nome\` varchar(255) NOT NULL, \`acao_rota\` varchar(255) NOT NULL, \`modulo\` varchar(255) NOT NULL, \`chave\` varchar(255) NOT NULL, \`acao_descricao\` varchar(255) NOT NULL, \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`acao_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rel__grupo_acoes\` (\`grupo_acoes_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`grupo_id\` bigint UNSIGNED NOT NULL, \`acao_id\` bigint UNSIGNED NOT NULL, PRIMARY KEY (\`grupo_acoes_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`grupos_usuarios\` (\`grupo_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`grupo_nome\` varchar(255) NOT NULL, \`grupo_descricao\` varchar(255) NOT NULL, \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_43c43cb37c8d75c495865fefa9\` (\`grupo_nome\`), PRIMARY KEY (\`grupo_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rel__usuarios_grupos\` (\`rel_usuario_grupo_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`grupo_id\` bigint UNSIGNED NOT NULL, \`usuario_id\` bigint UNSIGNED NOT NULL, PRIMARY KEY (\`rel_usuario_grupo_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`usuario_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`usuario_login\` varchar(255) NOT NULL, \`usuario_password\` varchar(255) NOT NULL, \`usuario_ultimoAcesso\` date NULL, \`usuario_status\` enum ('Ativo', 'Inativo') NOT NULL DEFAULT 'Inativo', \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`pessoa_id\` bigint UNSIGNED NOT NULL, UNIQUE INDEX \`IDX_ddf54f7631aa8791ec951e927b\` (\`usuario_login\`), PRIMARY KEY (\`usuario_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`db_connections\` (\`conect_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`inst_id\` bigint UNSIGNED NOT NULL, \`conect_nome\` varchar(255) NOT NULL, \`conect_host\` varchar(255) NOT NULL, \`conect_port\` varchar(255) NOT NULL, \`conect_user\` varchar(255) NOT NULL, \`conect_password\` varchar(255) NOT NULL, \`conect__database_name\` varchar(255) NOT NULL, \`conect_status\` enum ('Ativo', 'Inativo') NOT NULL DEFAULT 'Inativo', \`conect_type\` enum ('Producao', 'Homologacao', 'Replica') NOT NULL DEFAULT 'Producao', \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_8d4d566365cebf7b06afac8289\` (\`conect_nome\`), PRIMARY KEY (\`conect_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`instancias_universa\` (\`inst_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`inst_nome\` varchar(255) NOT NULL, \`inst_url\` varchar(255) NOT NULL, \`inst_modalidade\` enum ('Ead', 'Presencial', 'Ambigua') NOT NULL DEFAULT 'Ambigua', \`inst_tipo\` enum ('Producao', 'MEC', 'Homologacao') NOT NULL DEFAULT 'Producao', \`inst_status\` enum ('Ativo', 'Inativo') NOT NULL DEFAULT 'Inativo', \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_eea4b7a3e1f05f0ab81a3b8e5d\` (\`inst_nome\`), UNIQUE INDEX \`IDX_5ca9998cf43319e51399fc0ae4\` (\`inst_url\`), PRIMARY KEY (\`inst_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`diretorio\` (\`dir_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`dir_nome\` varchar(255) NOT NULL, \`dir_local\` varchar(255) NOT NULL, \`dir_tipo\` enum ('publico', 'privado') NOT NULL DEFAULT 'publico', PRIMARY KEY (\`dir_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`arquivos\` (\`arq_id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`dir_id\` bigint UNSIGNED NOT NULL, \`arq_hash\` varchar(255) NOT NULL, \`arq_nome\` varchar(255) NOT NULL, \`arq_size\` bigint UNSIGNED NOT NULL, \`arq_tipo\` varchar(255) NOT NULL, \`data_hora_insercao\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`arq_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`aluno_curso\` (\`alunocurso_id\` int NOT NULL AUTO_INCREMENT, \`matricula\` bigint NOT NULL, \`nome_aluno\` varchar(255) NOT NULL, \`nome_curso\` varchar(255) NOT NULL, \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status_integracao\` enum ('Sim', 'Nao') NOT NULL DEFAULT 'Nao', \`arq_id\` bigint UNSIGNED NOT NULL, PRIMARY KEY (\`alunocurso_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rel__grupo_acoes\` ADD CONSTRAINT \`FK_2248d0828a5d9fb538bdc9e1e93\` FOREIGN KEY (\`grupo_id\`) REFERENCES \`grupos_usuarios\`(\`grupo_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rel__grupo_acoes\` ADD CONSTRAINT \`FK_b926a6757589eb988cda1ddcc6f\` FOREIGN KEY (\`acao_id\`) REFERENCES \`acoes\`(\`acao_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rel__usuarios_grupos\` ADD CONSTRAINT \`FK_a43812cdb11f272bcd83ec46895\` FOREIGN KEY (\`grupo_id\`) REFERENCES \`grupos_usuarios\`(\`grupo_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rel__usuarios_grupos\` ADD CONSTRAINT \`FK_2fc9e6bd5bff1edeb6280bee19e\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`usuarios\`(\`usuario_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_123e23fbdac8aee9e46ff39a2e9\` FOREIGN KEY (\`pessoa_id\`) REFERENCES \`pessoas\`(\`pessoa_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`db_connections\` ADD CONSTRAINT \`FK_949ba45d8d91898ee86ce3b41d1\` FOREIGN KEY (\`inst_id\`) REFERENCES \`instancias_universa\`(\`inst_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`arquivos\` ADD CONSTRAINT \`FK_b0162731d22f505c69f63178ca6\` FOREIGN KEY (\`dir_id\`) REFERENCES \`diretorio\`(\`dir_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`aluno_curso\` ADD CONSTRAINT \`FK_ece72c48ff501f1de9fb906e4f5\` FOREIGN KEY (\`arq_id\`) REFERENCES \`arquivos\`(\`arq_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`aluno_curso\` DROP FOREIGN KEY \`FK_ece72c48ff501f1de9fb906e4f5\``);
        await queryRunner.query(`ALTER TABLE \`arquivos\` DROP FOREIGN KEY \`FK_b0162731d22f505c69f63178ca6\``);
        await queryRunner.query(`ALTER TABLE \`db_connections\` DROP FOREIGN KEY \`FK_949ba45d8d91898ee86ce3b41d1\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_123e23fbdac8aee9e46ff39a2e9\``);
        await queryRunner.query(`ALTER TABLE \`rel__usuarios_grupos\` DROP FOREIGN KEY \`FK_2fc9e6bd5bff1edeb6280bee19e\``);
        await queryRunner.query(`ALTER TABLE \`rel__usuarios_grupos\` DROP FOREIGN KEY \`FK_a43812cdb11f272bcd83ec46895\``);
        await queryRunner.query(`ALTER TABLE \`rel__grupo_acoes\` DROP FOREIGN KEY \`FK_b926a6757589eb988cda1ddcc6f\``);
        await queryRunner.query(`ALTER TABLE \`rel__grupo_acoes\` DROP FOREIGN KEY \`FK_2248d0828a5d9fb538bdc9e1e93\``);
        await queryRunner.query(`DROP TABLE \`aluno_curso\``);
        await queryRunner.query(`DROP TABLE \`arquivos\``);
        await queryRunner.query(`DROP TABLE \`diretorio\``);
        await queryRunner.query(`DROP INDEX \`IDX_5ca9998cf43319e51399fc0ae4\` ON \`instancias_universa\``);
        await queryRunner.query(`DROP INDEX \`IDX_eea4b7a3e1f05f0ab81a3b8e5d\` ON \`instancias_universa\``);
        await queryRunner.query(`DROP TABLE \`instancias_universa\``);
        await queryRunner.query(`DROP INDEX \`IDX_8d4d566365cebf7b06afac8289\` ON \`db_connections\``);
        await queryRunner.query(`DROP TABLE \`db_connections\``);
        await queryRunner.query(`DROP INDEX \`IDX_ddf54f7631aa8791ec951e927b\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`rel__usuarios_grupos\``);
        await queryRunner.query(`DROP INDEX \`IDX_43c43cb37c8d75c495865fefa9\` ON \`grupos_usuarios\``);
        await queryRunner.query(`DROP TABLE \`grupos_usuarios\``);
        await queryRunner.query(`DROP TABLE \`rel__grupo_acoes\``);
        await queryRunner.query(`DROP TABLE \`acoes\``);
        await queryRunner.query(`DROP INDEX \`IDX_41048f09237b0df000f84c1fe7\` ON \`pessoas\``);
        await queryRunner.query(`DROP INDEX \`IDX_b85dd0ead6126e4292cfeba0d4\` ON \`pessoas\``);
        await queryRunner.query(`DROP TABLE \`pessoas\``);
    }
}
exports.Default1723997378287 = Default1723997378287;
