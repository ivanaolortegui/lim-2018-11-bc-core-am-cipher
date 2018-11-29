describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

<<<<<<< HEAD
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=> {
      assert.equal(cipher.encode(33,'ABCD EFGHIJKLMNOPQRSTUVWXYZ'),'HIJK LMNOPQRSTUVWXYZABCDEFG');
=======
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ '), 'HIJKLMNOPQRSTUVWXYZABCDEFG ');
>>>>>>> a746aa24e0a118b2d99c836d3f7572c7625e507e
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

<<<<<<< HEAD
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() =>{
      assert.equal(cipher.decode(33,'HIJK LMNOPQRSTUVWXYZABCDEFG'),'ABCD EFGHIJKLMNOPQRSTUVWXYZ');
=======
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG '), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ');
>>>>>>> a746aa24e0a118b2d99c836d3f7572c7625e507e
    });
  });


});
