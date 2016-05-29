import Ember from 'ember';

export default Ember.Component.extend({

  state: 'reset',

  timeElapsed: 0,
  lapTime: 0,

  isResetState: Ember.computed.equal('state', 'reset'),
  isRunState: Ember.computed.equal('state', 'run'),
  isPauseState: Ember.computed.equal('state', 'pause'),
  isLapState: Ember.computed.equal('state', 'lap'),

  incrementTimeElapsed(startDate) {
    let currentDate = new Date();
    if (this.get('isRunState') || this.get('isLapState')) {
      this.incrementProperty('timeElapsed', currentDate.valueOf() - startDate.valueOf());
      Ember.run.next(this, 'incrementTimeElapsed', new Date());
    }
  },

  actions: {
    start() {
      this.set('state', 'run');
      this.incrementTimeElapsed(new Date());
    },

    stop() {
      this.set('state', 'pause');
    },

    reset() {
      this.set('state', 'reset');
      this.set('timeElapsed', 0);
    },

    hold() {
      this.set('lapTime', this.get('timeElapsed'));
      this.set('state', 'lap');
    },

    continue() {
      this.set('state', 'run');
    },
  },
});
