/*global define*/
define(['debug'], function(debug){
    describe("The debug object", function() {
        it('should be able to log messages', function() { 
            
            function log_stuff() {
                var a = 0,
                b = 'two',
                c = { foo: 1, bar: 2, baz: 'three' },
                d = false,
                e = [ 3, 4, 5, 6, 7, 8 ];
                
                a++;
                d = !d;
                
                debug.group( 'start of group' );
                debug.log( a );
                debug.debug( b );
                debug.info( c );
                debug.warn( d );
                debug.error( e );
                debug.groupEnd();
                  
                debug.time( 'test' );
                  
                debug.log( a, b, c, d, e );
                debug.log([ a, b, c, d, e ]);
                  
                (function() { debug.log( arguments ); })( a, b, c, d, e );
                  
                debug.timeEnd( 'test' );
            };
            
            assert.doesNotThrow(log_stuff, Error, 'function does not throw');
        });
    });  
});
