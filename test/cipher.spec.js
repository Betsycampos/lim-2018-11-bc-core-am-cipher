describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
<<<<<<< HEAD
    it('deberia retornar "ABC123" para "BCD123" con offset 1',()=>{
      assert.equal(cipher.encode(1,"ABC123"),"BCD123")
    } )
=======
    it('deberia retornar "BCD" para "ABC123" con offset 1', ()=>{
      assert.equal(cipher.encode(1,"ABC123"),"BCD")
    } )           
>>>>>>> 59987d1e4f8c8a920ca441aa484397b742ee75a7
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

<<<<<<< HEAD
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('deberia retornar "BCD@" para "ABC@" con offset 1',()=>{
=======
    it('debería retornar"HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('deberia retornar "ZAB" para "ABC@" con offset 1',()=>{
>>>>>>> 59987d1e4f8c8a920ca441aa484397b742ee75a7
      assert.equal(cipher.decode(1,"ABC@"),"ZAB")
    } )
  });

<<<<<<< HEAD

=======
>>>>>>> 59987d1e4f8c8a920ca441aa484397b742ee75a7
});
