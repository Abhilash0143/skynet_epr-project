import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1773426707495 implements MigrationInterface {
    name = 'Init1773426707495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "epr" ("id" SERIAL NOT NULL, "score" integer NOT NULL, "feedback" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "personId" integer, CONSTRAINT "PK_296456236be330bf7fdb82d6cac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "epr" ADD CONSTRAINT "FK_de032568b570fb0d5182135f953" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "epr" DROP CONSTRAINT "FK_de032568b570fb0d5182135f953"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "epr"`);
    }

}
