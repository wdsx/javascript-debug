/*global define*/
define(['trace', 'chai'], function(unit, chai) {
    
   suite('TraceConsoleTest', function () {
    
        test('Should be able to write to the debug log', function(){
            //debug.log( this, 'that', { the: 'other' } );
            chai.assert.equals(1,0);
        });
   });
});