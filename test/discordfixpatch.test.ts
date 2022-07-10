import sinon from 'sinon';
import DiscordFixPatch from '../tools/DiscordFixPatch';
import { promises as fsPromises } from 'fs';
import assert from 'assert';
import child_process from "child_process";
import path from 'path';

describe('Discord Patch', function () {
    it('Will not run when discord is installed', async function () {
        sinon.stub(console, 'log');
        const accessStub = sinon.stub(fsPromises, 'access');
        const unlinkStub = sinon.stub(fsPromises, 'unlink');
        await DiscordFixPatch('somepath');
        sinon.assert.notCalled(unlinkStub);
        sinon.restore();
    });

    it('Will run when discord is not installed', async function () {
        sinon.stub(console, 'log');
        const accessStub = sinon.stub(fsPromises, 'access').rejects(new Error("Discord not found"));
        const unlinkStub = sinon.stub(fsPromises, 'unlink');
        await DiscordFixPatch('somepath');
        sinon.assert.calledOnce(unlinkStub);
        sinon.restore();
    });
});
