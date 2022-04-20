import { strict as assert } from 'assert';
import { describe, it } from 'mocha';
import { ProtocolModel, TokenModel } from '../model';

describe('ProtocolModel', () => {
    it('Mapping governance tokens to protocols', async () => {
        let protocol_id = 'pancakeswap';
        let token_id = 'cake';
        let token = await TokenModel.findOne({ _id: token_id });
        let $set = { governance_token: token.id };
        let protocol = await ProtocolModel.findOneAndUpdate({ _id: protocol_id }, { $set }, { new: true, upsert: true });
        assert(protocol.governance_token == token_id);
    });
});
