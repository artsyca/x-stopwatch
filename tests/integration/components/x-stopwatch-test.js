import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-stopwatch', 'Integration | Component | x stopwatch', {
  integration: true,
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let done = assert.async();

  this.render(hbs`{{x-stopwatch}}`);

  this.$('button.start').click();

});
