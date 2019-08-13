const { Application } = require("spectron");
const assert = require("assert");


describe("app launch", function () {
    this.timeout(10000);

    beforeEach(function () {
        this.app = new Application({
            path: `${__dirname}/../node_modules/.bin/electron`,
            args: [`${__dirname}/../`],
        });
        return this.app.start();
    });

    afterEach(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it("at first, should show main window", function () {
        return this.app.client.getWindowCount().then(function (count) {
            assert.strictEqual(count, 1);
        });
    });
});