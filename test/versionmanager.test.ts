import sinon from 'sinon';
import versionManager from '../tools/versionManager';
import { promises as fsPromises } from 'fs';
import assert from 'assert';

describe('Version Manager Test', function () {
    it('Can get version', async function () {
        const accessStub = sinon.stub(fsPromises, 'access');
        const readFileStub = sinon.stub(fsPromises, 'readFile').resolves('27');
        const vm = versionManager(__dirname);
        const version = await vm.get();
        sinon.assert.calledOnce(accessStub);
        sinon.assert.calledOnce(readFileStub);
        assert(version === 27);
        sinon.restore();
    });

    it('Can set version', async function () {
        const writeStub = sinon.stub(fsPromises, 'writeFile').resolves('27');
        const vm = versionManager(__dirname);
        const version = await vm.set(50);
        sinon.assert.calledOnce(writeStub);
        assert(writeStub.getCall(0).args[0] === `${__dirname}/VERSION`);
        assert(writeStub.getCall(0).args[1] === '50');
        sinon.restore();
    });
});
