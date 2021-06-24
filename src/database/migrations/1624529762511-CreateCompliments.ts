import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624529762511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tbl_compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, {
                        name: "user_sender_id",
                        type: "uuid",

                    }, {
                        name: "user_receiver_id",
                        type: "uuid",
                    }, {
                        name: "tag_id",
                        type: "uuid",
                    }, {
                        name: "message",
                        type: "varchar",
                    }, {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }, {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "tbl_users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }, {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "tbl_users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }, {
                        name: "FKTagCompliments",
                        referencedTableName: "tbl_tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tbl_compliments");
    }
}
