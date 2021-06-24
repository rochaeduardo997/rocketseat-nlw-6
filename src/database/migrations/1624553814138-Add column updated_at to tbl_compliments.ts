import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AddColumnUpdatedAtToTblCompliments1624553814138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "tbl_compliments",
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                default: "now()",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tbl_compliments", "updated_at");
    }
}
