
class Util {

    static greet(date: Date): string {
        let message = "Node + TypeScript<br>Date: ";

        message += date.toLocaleDateString();

        return message;
    }

}

export default Util;
