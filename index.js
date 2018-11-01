'use strict';

module.exports = {
  name: 'ember-autotrack-analytics',

  contentFor(type, config) {
    let content;

    if (type === 'head') {
      // const analyticsConfig = config['analytics'] || {};
      // const params = [];

      // if (analyticsConfig.key) {
      //   params.push('')
      // }

      content = `
        <script>
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-5025626-34', 'auto');

          ga('require', 'eventTracker');
          ga('require', 'outboundLinkTracker');
          ga('require', 'urlChangeTracker');

          ga('send', 'pageview');
        </script>
        <script async src="//www.google-analytics.com/analytics.js"></script>
      `;
    }

    return content;
  }
};
