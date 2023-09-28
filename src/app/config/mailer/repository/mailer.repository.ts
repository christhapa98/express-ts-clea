export abstract class MailerRepository {
  abstract sendMail(): Promise<boolean>;
}

export class MailerRepositoryImpl extends MailerRepository {
  sendMail(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
