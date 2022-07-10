import sinon from 'sinon';
import getReleases from '../tools/getReleases';
import axios from 'axios';
import assert from 'assert';

describe('Get Releases', function () {
    it('Can get releases', async function () {
        const axiosStub = sinon.stub(axios, 'get').resolves({data: [{url: 'http://localhost'}]});
        const releases = await getReleases();
        sinon.assert.calledOnce(axiosStub);
        assert(releases[0].url === 'http://localhost');
    });
});
