"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const mocha_1 = require("mocha");
const defi_model_1 = require("../src/defi-model");
(0, mocha_1.describe)('ProtocolModel', () => {
    (0, mocha_1.it)('Mapping governance tokens to protocols', async () => {
        let protocol_id = 'pancakeswap';
        let token_id = 'cake';
        let token = await defi_model_1.TokenModel.findOne({ _id: token_id });
        let $set = { governance_token: token.id };
        let protocol = await defi_model_1.ProtocolModel.findOneAndUpdate({ _id: protocol_id }, { $set }, { new: true, upsert: true });
        (0, assert_1.strict)(protocol.governance_token == token_id);
    });
});
