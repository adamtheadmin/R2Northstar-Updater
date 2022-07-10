import sinon from 'sinon';
import findTitanfallLocation from '../tools/findTitanfallLocation';
import { promises as fsPromises } from 'fs';
import assert from 'assert';

describe('Find Titanfall Location', function () {
    it('Can Find titanfall location', async function () {
        const accessStub = sinon.stub(fsPromises, 'access').resolves();
        const location = await findTitanfallLocation();
        assert(location === `C:/Program Files (x86)/Origin Games/Titanfall2`);
        sinon.restore();
    });

    it('Will fail when titanfall is not installed.', async function () {
        const accessStub = sinon.stub(fsPromises, 'access').rejects(new Error("Location not found"));
        let didThrow: boolean = false;
        try {
            const location = await findTitanfallLocation();
        } catch (e) {
            didThrow = true;
        }
        assert(didThrow);
        sinon.restore();
    });
});
