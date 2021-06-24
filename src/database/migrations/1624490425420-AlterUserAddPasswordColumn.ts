import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserAddPasswordColumn1624490425420 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "tbl_users",
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tbl_users", "password");
    }
}
