/**
 * Value is correct type, but invalid.
 */
export default class ValueError extends Error {
    /**
     * Initialize ValueError
     * @param message A message to display
     * @param exit Whether to exit the process, defaults to true
     */
    constructor(message?: string, exit: boolean = true) {
        super(message);

        console.error("ValueError: ", message || "Value is correct type, but invalid.");
        if (exit) {
            process.exit(1);
        }
    }
}
