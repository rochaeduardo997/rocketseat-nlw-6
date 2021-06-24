import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";


@Entity("tbl_compliments")
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender_id: string;

  @JoinColumn({ name: "user_sender_id" })
  @ManyToOne(() => User)
  userSenderID: User;

  @Column()
  user_receiver_id: string;

  @JoinColumn({ name: "user_receiver_id" })
  @ManyToOne(() => User)
  userReceiverID: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };