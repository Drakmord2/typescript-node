
function greet(): string {
    let date    = new Date();
    let message = "Node + TypeScript<br>Date: ";

    message += date.toLocaleDateString();

    return message;
}

const util = {
    greet
};

export default util;