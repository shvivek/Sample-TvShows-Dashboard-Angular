
export class UserSubject {

    private userName: string;
    private accountType: string;
    private email: string;
    private loginMessage: string;

    constructor(subject) {
        this.userName = subject.userName;
        this.accountType = subject.accountType;
        this.email = subject.email;
        this.loginMessage = subject.loginMessage;
    }
}
