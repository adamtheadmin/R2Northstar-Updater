import sinon from 'sinon';
import launch from '../tools/launch';
import { promises as fsPromises } from 'fs';
import assert from 'assert';
import child_process from "child_process";
import path from 'path';

describe('Launch', function () {
    it('Will Launch', async function () {
        sinon.stub(console, 'log');
        const execStub = sinon.stub(child_process, 'execFile');
        launch('/somePrefix');
        sinon.assert.calledOnce(execStub);
        assert(execStub.getCall(0).args[0] === path.resolve('/somePrefix', 'NorthstarLauncher.exe'));
    });
});
