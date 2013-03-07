describe("Get_similar_rate_of",function(){
    it("two same numbers 1234 1234,get 4A0B",function(){
        expect(compare_num('1234','1234')).toBe('4A0B');
    });
    it("two absolutely different numbers 1234 6789,get 0A0B",function(){
        expect(compare_num('1234','6789')).toBe('0A0B');
    });
    it('two similar numbers 1234 4321,get 0A4B',function(){
        expect(compare_num('1234','4321')).toBe('0A4B');
    });
    it('two numbers,half of them are same,half of them are diferent 1234 1278,get 2A0B',function(){
        expect(compare_num('1234','1278')).toBe('2A0B');
    });
    it('two numbers,half of them are same,half of them are similar 1234 1243,get 2A2B',function(){
        expect(compare_num('1234','1243')).toBe('2A2B');
    })
});
