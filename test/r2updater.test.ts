import sinon from 'sinon';
import request from 'request';
import r2updater from '../tools/R2Updater';
import getReleases from '../tools/getReleases';
import { promises as fsPromises, createReadStream } from 'fs';
import axios from 'axios';
import assert from 'assert';
import latest from './install/latest.json';

describe('R2 Updater Test', function () {
    it('Can fetch release ZIP and extract it', async function () {
        const axiosStub = sinon.stub(axios, 'get').resolves({data: {browser_download_url: "https://www.google.com"}});
        const requestStub = sinon.stub(request, 'get').returns(createReadStream(__dirname + '/install/install.zip'));
        const accessStub = sinon.stub(fsPromises, 'access').resolves();
        sinon.stub(console, 'log');
        await r2updater(__dirname, latest);
        sinon.assert.calledOnce(axiosStub);
        sinon.assert.calledOnce(requestStub);
        sinon.assert.calledOnce(accessStub);
        assert(axiosStub.getCall(0).args[0] === latest.assets[0].url);
        assert(requestStub.getCall(0).args[0] === "https://www.google.com");
        sinon.restore();
        await fsPromises.access(__dirname + '/install/file.txt');
        await fsPromises.access(__dirname + '/install/dir');
        await fsPromises.unlink(__dirname + '/install/file.txt');
        await fsPromises.rmdir(__dirname + '/install/dir');
    });
});
