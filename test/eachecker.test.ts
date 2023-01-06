import sinon from 'sinon';
import { promises as fsPromises, createWriteStream } from 'fs';
import child_process from 'child_process';
import EAChecker from '../tools/EAChecker';
import assert from 'assert';

const eaAppPath:Readonly<string> = 'C:\\Program Files\\Electronic Arts\\EA Desktop\\EA Desktop\\EALauncher.exe';

describe('EA Checker Test', function () {
    this.timeout(6000);
    it('No EA App Installed', async function () {
        const accessStub = sinon.stub(fsPromises, 'access').rejects(new Error("path not found"));
        await EAChecker();
        assert(accessStub.calledWith(eaAppPath));
        sinon.assert.calledOnce(accessStub);
    });

    it('EA App Installed', async function () {
        const accessStub = sinon.stub(fsPromises, 'access').resolves(true);
        const spawnStub = sinon.stub(child_process, 'spawn').resolves(true);
        await EAChecker();
        assert(accessStub.calledWith(eaAppPath));
        assert(spawnStub.calledWith(eaAppPath, {
            detached: true,
            stdio: 'ignore',
        }));
        sinon.assert.calledOnce(accessStub);
        sinon.assert.calledOnce(spawnStub);
    });
});
