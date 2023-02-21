const os = require("os");
const {getFreeSystemMemory} = require("../healthController");

describe('healthController', () => {

    test('returns 200 status code', () => {
        const req = {};
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        getFreeSystemMemory(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('returns freeMemory value', () => {
        const req = {};
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const mockFreeMemory = 111111111;
        jest.spyOn(os, 'freemem').mockReturnValueOnce(mockFreeMemory);
        getFreeSystemMemory(req, res);
        expect(res.json).toHaveBeenCalledWith({ freeMemory: mockFreeMemory });
    });
})
