/* Set default values for your svg icons that can
 be overriden in the template */
Template.svgWrap.helpers({
  data: function() {
    return {
      class: this.class || '',
      fill: this.fill || '#222',
      width: this.width || '24',
      height: this.height || '24',
      viewBox: this.viewBox || '0 0 24 24',
    };
  }
});
